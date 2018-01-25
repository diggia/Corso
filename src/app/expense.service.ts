import { Expense } from './expense.model';

export class ExpenseService {

    expenses: Expense[] = [
        {
        id: 1,
        data: "2018-01-25",
        quantita: 30,
        importo: 1000,
        categoria: "spesa",
        nota: "spesa da Martinelli"
        },
        {
            id: 2,
          data: "2018-01-22",
          quantita: 50,
          importo: 2000,
          categoria: "spesa",
          nota: "spesa da Rossetto"
        },
        {
            id: 3,
            data: "2018-01-31",
            quantita: 100,
            importo: 5000,
            categoria: "spesa",
            nota: "spesa da Ipercoop"
        }
        ];


    categories  = [ "tasse", "spesa", "moglie", "auto" ];

    getExpense(expenseId: number): Expense {

        let expenseOrig = this.expenses.find(expense => expense.id === expenseId);
        return Object.assign({}, expenseOrig);
    }
    getExpensive(): Expense[] {
        return this.expenses;
    }
}