import { SavesCategory } from "./categorySaves.enum";

export interface SavesGoals {
  targetValue: number,
  currentValue: number,
  deadlineDate: Date,
  category: SavesCategory
}
