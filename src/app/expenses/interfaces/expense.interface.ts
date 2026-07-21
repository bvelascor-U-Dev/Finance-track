import { ExpenseCategory } from "./expenseCategory.enum"


export interface ExpenseInterface {
  id: string,
  description: string,
  value: number,
  category: ExpenseCategory
  date: Date,
  type: "Obligatory" | "Optional"
}
