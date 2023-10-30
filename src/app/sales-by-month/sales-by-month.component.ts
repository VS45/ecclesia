import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})
export class SalesByMonthComponent {
   chart=new Chart({
    chart:{
      type:'line',
      height:325
    },
    title:{
      text:"Month wise sales"
    },
    xAxis:{
categories:["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
    },
    yAxis:{
title:{
  text:"Revenue in $"
}
    },
    series:[
      {
        name:"Arizontal",
        type:"line",
        color:"orangered",
        data:[70,69,120,145,182,195,252,265,243,183,200,179]
      },
      {
        name:"Connecticut",
        color:'green',
        type:"line",
        data:[70,69,200,145,182,195,300,265,243,183,350,200]
      }
    ],
    credits:{
      enabled:false
    }
  }); 
  
}
