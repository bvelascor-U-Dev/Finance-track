import { SavingsCategory } from "./savingsCategory.enum";

export interface SavingsGoals {
  id: string,
  targetValue: number,
  currentValue: number,
  deadlineDate: Date,
  category: SavingsCategory
}
