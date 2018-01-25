import { ExpenseService } from '../../app/expense.service';
import { Expense } from '../../app/expense.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    expenses: Expense[];

    openDetail(expense: Expense) {
      this.navCtrl.push(DetailPage, expense.id);
    }

  constructor(private expenseService: ExpenseService, public navCtrl: NavController) {
    this.expenses = expenseService.getExpensive();
  }

}
