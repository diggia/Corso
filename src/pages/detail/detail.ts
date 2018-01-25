import { ExpenseService } from '../../app/expense.service';
import { Expense } from '../../app/expense.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  expense: Expense;

  categories: string[];

  constructor(private expenseService: ExpenseService, public navCtrl: NavController, public navParams: NavParams) {
    // console.log(navParams.data);
    let expenseId = navParams.data;
    this.expense = expenseService.getExpense(expenseId);
    this.categories  = expenseService.categories;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
