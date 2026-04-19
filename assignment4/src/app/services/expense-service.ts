import { Injectable, signal, computed } from '@angular/core';
import { Expense } from '../models/expense';

@Injectable({ providedIn: 'root' })
export class ExpenseService {

  expenses = signal<Expense[]>([]);

  categories = signal<string[]>([
    'Work','Personal','Grocery','Utilities','Shopping','Travel','Food'
  ]);

  totalExpense = computed(() =>
    this.expenses().reduce((sum, e) => sum + e.amount, 0)
  );

  transactionCount = computed(() => this.expenses().length);

  highestExpense = computed(() =>
    Math.max(...this.expenses().map(e => e.amount), 0)
  );

  averageExpense = computed(() =>
    this.transactionCount()
      ? this.totalExpense() / this.transactionCount()
      : 0
  );

  addExpense(expense: Expense) {
    this.expenses.update(e => [...e, expense]);
  }

  deleteExpense(id: string) {
    this.expenses.update(e => e.filter(x => x.id !== id));
  }
}