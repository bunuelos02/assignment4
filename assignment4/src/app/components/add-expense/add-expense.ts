import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-expense.html'
})
export class AddExpenseComponent {

  title: string = '';
  amount: number = 0;
  category: string = 'Work';

  constructor(public service: ExpenseService) {}

  add() {
    if (!this.title || this.amount <= 0) return;

    this.service.addExpense({
      id: crypto.randomUUID(),
      title: this.title,
      amount: this.amount,
      category: this.category
    });

    this.title = '';
    this.amount = 0;
    this.category = 'Work';
  }
}