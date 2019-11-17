import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  // item=[ ]
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

  constructor(private toast: ToastController,private router: Router) { }

  async presentToast(message: any){
    const toast =await this.toast.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }

  submit( id){
   //this.data.splice(id, i)
   console.log("this data",this.data[id])

   let NavigationExtras: NavigationExtras={
     state: {
       data: this.data[id]
     }
    
   }
   this.router.navigate(['view'], NavigationExtras);
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log("Data bag",this.data)
  }
}
