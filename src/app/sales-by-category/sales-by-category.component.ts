import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent {
  chart=new Chart({
    chart:{
      type:'pie',
      height:325
    },
    title:{
      text:"Category wise sales"
    },
    xAxis:{
categories:["Electronics","Groceries","Cosmetics","Clothes","Appliances"]
    },
    yAxis:{
title:{
  text:"Revenue in %"
}
    },
    series:[
    {
      type:'pie',
      data:[
        {
          name:'Electronics',
          color:'green',
          y:40.1
        },
        {
          name:'Groceries',
          color:'orangered',
          y:20.9
        },
        {
          name:'Cosmetics',
          color:'blue',
          y:15.5
        },
        {
          name:'Clothes',
          color:'#ffddaa',
          y:15.5
        },
        {
          name:'Appliances',
          color:'#DDAACC',
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
