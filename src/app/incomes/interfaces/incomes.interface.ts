import { IncomesCategory } from "./incomesCategory.enum";


export interface IncomesInterface {
    descripion: string,
    value: number,
    category: IncomesCategory,
    date: Date,
    type: "Obligatory" | "Optional"
}
