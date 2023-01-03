import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { WalletService } from 'src/app/shared/services/wallet.service';
import Web3 from 'web3';
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private walletService: WalletService) { }
  private _web3: any;
  public walletConnected: boolean = false;
  public walletAddress: string = "";
  public CONT_ADDR = "0x559132691A00580D8f46641c655B90469198C378";
  public BANK_ADDR = "0x7e2B374Baebc5Ab58fBB85Bd989E2f555B9Df76c";

  public formCheck: FormGroup = this.formBuilder.group({
    payment: [''],
  });

  ngOnInit(): void {
  }

  submit = async () => {
    const paymentValue = this.formCheck.value.payment
    if (paymentValue == 3) {//Si es ETH
      await this.checkWalletConnected();
      if (this.walletConnected) {
        await this.loadSmartContract();
      } else {
        console.log("no esta conectado a metamask")
        await this.connectToWallet();
      }
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
