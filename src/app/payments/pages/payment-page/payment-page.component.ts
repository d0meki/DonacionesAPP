import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';
import { WalletService } from '../../../shared/services/wallet.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  pago: any = {
    codigo_moneda: '',
    monto: 0,
    codigo_tipo_pago: -1
  }
  moneda = [{ codigo: 'USD', name: 'Dolar', convertido: 6.97 },
  { codigo: 'EUR', name: 'Euro', convertido: 10.8 },
  { codigo: 'BOB', name: 'Bolivianos', convertido: 0 },
  ];
  private _web3: any;
  public walletConnected: boolean = false;
  public walletAddress: string = "";
  public CONT_ADDR = "0x559132691A00580D8f46641c655B90469198C378";
  public BANK_ADDR = "0x7e2B374Baebc5Ab58fBB85Bd989E2f555B9Df76c";

  constructor(private payment: PaymentService, private router: Router, private walletService: WalletService) { }

  ngOnInit(): void {
  }
  async pagar() {
    if (this.pago.codigo_tipo_pago == 2) {
      console.log("pagar con paypal");
      this.payment.pagarConPayPal(this.pago).subscribe(resp => {
        console.log(resp);
        if (resp.estado) {
          // this.router.navigateByUrl(resp.data.link[1].href);
          window.open(resp.data.links[1].href, "_blank");
        } else {
          console.log("Error!!!");
        }
      })
    } else if (this.pago.codigo_tipo_pago == 3) {
      await this.checkWalletConnected();
      if (this.walletConnected) {
        await this.loadSmartContract();
      } else {
        console.log("no esta conectado a metamask")
        await this.connectToWallet();
      }
    } else {
      console.log("Otro metodo de pago");
    }
  }


  loadSmartContract = async () => {
    this._web3 = new Web3(this.walletService.ethereum);
    const res = await fetch('blockchain/build/contracts/Project.json');
    const ProjectJSON = await res.json();
    const projectContract = new this._web3.eth.Contract(ProjectJSON.abi, this.CONT_ADDR);
    //0x3f87F60D6b7c149efD10F35Ac6fCf075a88Ee096
    projectContract.defaultAccount = this.BANK_ADDR;

    const RES = await projectContract.methods.donate().send({ from: this.walletAddress, value: this._web3.utils.toWei("2", "ether"), gas: 2000000 },
      function (err: any, res: any) {
        if (err) {
          console.log("An error occured", err)
          return
        }
        console.log("Hash of the transaction: " + res)
      }); //value : 1000000000000000000 igual a 1 ETH
    console.log("RES", RES)
  }

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected()
    console.log(accounts)
    if (accounts.length > 0) {
      this.walletConnected = true;
      this.walletAddress = accounts[0];

    }

  }

  connectToWallet = async () => {
    await this.walletService.connectWallet();
  }

  changePayment(e: any) {
    console.log(e.target.value)
  }

}
