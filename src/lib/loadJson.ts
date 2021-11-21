import { readFileSync } from "fs"
import { GEOJson } from "../types/entity/CsvDto";

export const loadJson = (filepath: string): GEOJson => {
  const data = readFileSync(`src/public/${filepath}`, 'utf8')
  const records = JSON.parse(data)
  return records
}
