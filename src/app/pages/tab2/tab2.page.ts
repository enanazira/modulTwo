import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  data=[
    {
      title:"Bag 1",
      description: "This is small bag",
      price:"40",
      image: "bag1.jpg"
    },
    {
      title:"Bag 2",
      description: "This is medium bag",
      price:"100",
      image: "bag2.jpg"
    },
    {
      title:"Bag 3",
      description: "This is large bag",
      price:"140",
      image: "bag3.jpg"
    }
  ];
  constructor(private toast: ToastController) { }
  async presentToast(message: any){
    const toast =await this.toast.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
    console.log("Data bag",this.data)
  }
}
