import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { PaycardService } from '../../services/paycard.service';

import { loadStripe } from '@stripe/stripe-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-payment-page',
  templateUrl: './card-payment-page.component.html',
  styleUrls: ['./card-payment-page.component.css']
})
export class CardPaymentPageComponent implements OnInit {
  public progressState : boolean = false;
  private donatorId!: number;
  private projectId!: number;

  //STRIPE
  public STRIPE: any;
  private elementStripe : any;
  cardNumber: any;
  cardCvv: any;
  cardExp: any;

  customForm : FormGroup = this.formBuilder.group({
    "amount": [0, [Validators.required, Validators.min(1), Validators.max(100000)]],
    "cardNumber": [false, [Validators.required, Validators.requiredTrue]],
    "cardCvv": [false, [Validators.required, Validators.requiredTrue]],
    "cardExp": [false, [Validators.required, Validators.requiredTrue]]
  });

  //NOTIFIER
  public type : string = "";
  public message : string = "";
  public notifierState : boolean = false;

  constructor(private formBuilder: FormBuilder, private payCardService: PaycardService, private router: Router) {
    this.donatorId = 1;
    this.projectId = 1;
  }

  async ngOnInit() {
    console.log("init")
    // this.customForm.patchValue({amount: this.amount});
    this.STRIPE = await loadStripe(environment.stripe_pk);
    this.createElementStripe();
  }
  createElementStripe(){
    const style = {
      base: {
        color: '#000000',
        fontWeight: 400,
        fontFamily: '\'Poppins\', sans-serif',
        fontSize: '20px',
        '::placeholder': {
          color: '#E3E2EC',
        },
      },
      invalid: {
        color: '#dc3545',
      },
    };
    const appearance = {
      // If you are planning to extensively customize rules, use the "none"
      // theme. This theme provides a minimal number of rules by default to avoid
      // interfering with your custom rule definitions.
      theme: 'none',

      rules: {
        '.Tab': {
          border: '1px solid #E0E6EB',
          boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02)',
        },

        '.Tab:hover': {
          color: 'var(--colorText)',
        },

        '.Tab--selected': {
          borderColor: '#E0E6EB',
          boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(18, 42, 66, 0.02), 0 0 0 2px var(--colorPrimary)',
        },

        '.Input--invalid': {
          boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px var(--colorDanger)',
        },

        // See all supported class names and selector syntax below
      }
    };

    // Pass the appearance object to the Elements instance

    this.elementStripe = this.STRIPE.elements({environment: environment.stripe_pk, appearance});
    //TODO: SDK Construimos los inputs de tarjeta, cvc, fecha con estilos
    const cardNumber = this.elementStripe.create('cardNumber', {
      placeholder: '4242 4242 4242 4242',
      style,
      classes: {
        base: 'input-stripe-custom'
      },
    });
    const cardExp = this.elementStripe.create('cardExpiry', {
      placeholder: 'MM/AA',
      style,
      classes: {
        base: 'input-stripe-custom'
      },
    });
    const cardCvc = this.elementStripe.create('cardCvc', {
      placeholder: '000',
      style,
      classes: {
        base: 'input-stripe-custom'
      },
    });

  //TODO: SDK Montamos los elementos en nuestros DIV identificados on el #id
  cardNumber.mount('#card');
  cardExp.mount('#exp');
  cardCvc.mount('#cvc');

  this.cardNumber = cardNumber;
  this.cardExp = cardExp;
  this.cardCvv = cardCvc;

  //TODO: Escuchamos los eventos del SDK
  this.cardNumber.addEventListener('change', this.onChangeCard.bind(this));
  this.cardExp.addEventListener('change', this.onChangeExp.bind(this));
  this.cardCvv.addEventListener('change', this.onChangeCvv.bind(this));
}

async onpay(): Promise<any> {
  if(this.customForm.invalid){
    console.log(this.customForm.value)
    this.type = "error"
    this.message = "Datos rellenados no son validos"
    this.notifierState = true;
    setTimeout( ()=> {
      this.notifierState = false;
      this.progressState = false;
    }, 3000)
  } else {
    try {
      this.progressState = true;
      this.type = "success"
      this.message = "Datos rellenados son validos"
      this.notifierState = true;
      setTimeout( ()=> {
        this.notifierState = false;
      }, 3000);
      //SDK de sStripe genera un token para la instención de pago
      const { token } = await this.STRIPE.createToken(this.cardNumber);
      console.log(token);

      //TODO ENVIAMOS A NUESTRA API DONDE GENERAMOS (STRIPE) UN METODO DE PAGO BASADO EN EL TOKEN
      //TODO: tok_2646
      this.payCardService.generateOrder({name: "Isaias", amount: this.customForm.controls['amount'].value, donatorId: this.donatorId, projectId: this.projectId})
      .subscribe( res => {
        console.log(res);
        this.payCardService.sendPayment(token.id, res.order.localizator)
        .subscribe( resp => {
          console.log(resp);
          this.STRIPE.handleCardPayment(resp.data.client_secret)
          .then(async () => {
            //TODO: PAGO REALIZADO CON EXITO
            this.progressState = false;
            this.type = "success"
            this.message = "Pago realizado con exito!"
            this.notifierState = true;
            setTimeout( ()=> {
              this.notifierState = false;
              this.router.navigate(['/payments/payment/']);
            }, 3000);
          })
          .catch( ()=> {
            this.progressState = false;
            this.type = "error"
            this.message = "No se puedo completar el pago"
            this.notifierState = true;
            setTimeout( ()=> {
              this.notifierState = false;
            }, 3000);
          })
        })
      });

    } catch (error) {
            this.progressState = false;
            this.type = "error"
            this.message = "Ocurrio un problema mientras ser realizaba el pago"
            this.notifierState = true;
            setTimeout( ()=> {
              this.notifierState = false;
            }, 3000);
    }
  }
}

  //TODO: Manejadores de validacion de input de stripe

  onChangeCard({error}: any) {
    this.customForm.patchValue({cardNumber: !error});
  }

  onChangeCvv({error}: any) {
    this.customForm.patchValue({cardCvv: !error});
  }

  onChangeExp({error}: any) {
    this.customForm.patchValue({cardExp: !error});
  }

}
