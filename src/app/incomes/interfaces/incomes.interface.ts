import { IncomesCategory } from "./incomesCategory.enum";


export interface IncomesInterface {
  id: string,
  descripion: string,
  value: number,
  category: IncomesCategory,
  date: Date,
  type: "Obligatory" | "Optional"
}
