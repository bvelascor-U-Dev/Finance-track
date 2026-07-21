import { SavingsCategory } from "./savingsCategory.enum";


export interface SavingsInterface {
  id: string,
  value: number,
  category: SavingsCategory,
  date: Date
}
