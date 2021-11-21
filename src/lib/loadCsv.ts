import { readFileSync } from "fs"
import { parse } from 'csv-parse/sync';
import { ContinentCsv, HDICsv } from "../types/entity/CsvDto";

export const loadCsv = (filepath: string): ContinentCsv | HDICsv => {
  const data = readFileSync(`src/public/${filepath}`, 'utf8')
  const records = parse(data, {
    columns: true,
    skip_empty_lines: true
  });
  return records
}
