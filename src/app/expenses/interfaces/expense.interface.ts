import { ExpenseType } from "./categoryExpense.enum"

export interface ExpenseInterface {
  descripion: string,
  value: number,
  category: ExpenseType
  date: Date,
  type: "Obligatory" | "Optional"
}
