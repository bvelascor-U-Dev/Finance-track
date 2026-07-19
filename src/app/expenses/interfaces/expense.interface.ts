import { ExpenseCategory } from "./expenseCategory.enum"


export interface ExpenseInterface {
  descripion: string,
  value: number,
  category: ExpenseCategory
  date: Date,
  type: "Obligatory" | "Optional"
}
