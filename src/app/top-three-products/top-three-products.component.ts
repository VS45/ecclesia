import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent {
  chart=new Chart({
    chart:{
      type:'bar',
      height:225
    },
    title:{
      text:"Top 3 Products"
    },
    xAxis:{
categories:["Lenova Thinkpad","Necta Orange Juice","Axe Deodorant"]
    },
    yAxis:{
title:{
  text:"Revenue in %"
}
    },
    series:[
    {
      type:'bar',
      data:[
        {
          name:'Lenova Thinkpad',
          color:'green',
          y:40.1
        },
        {
          name:'Necta Orange Juice',
          color:'orangered',
          y:20.9
        },
        {
          name:'Axe Deodorant',
          color:'blue',
          y:15.5
        }
      ]
    }
    ],
    credits:{
      enabled:false
    }
  }); 
}
