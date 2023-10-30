
import { Component } from '@angular/core';
import {faCoffee,faDashboard,faLocation,faShop,faBox,faMoneyBill,faChartBar,faContactBook,faHand} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  faCoffee=faCoffee;
faDashboard=faDashboard;
faLocation=faLocation;
faShop=faShop;
faBox=faBox;
faMoneyBill=faMoneyBill;
faChartBar=faChartBar;
faContactBook=faContactBook;
faHand=faHand;
}
