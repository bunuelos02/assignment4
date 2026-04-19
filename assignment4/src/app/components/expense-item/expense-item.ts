import { Component, Input } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-expense-item',
  standalone: true,
  templateUrl: './expense-item.html'
})
export class ExpenseItemComponent {

  @Input() expense!: Expense;

  constructor(public service: ExpenseService) {}

  delete() {
    this.service.deleteExpense(this.expense.id);
  }
}