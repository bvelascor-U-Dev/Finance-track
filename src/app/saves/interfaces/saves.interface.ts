import { SavesCategory } from "./categorySaves.enum";

export interface SavesInterface {
  value: number,
  category: SavesCategory,
  date: Date
}
