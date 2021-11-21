import { readFileSync } from "fs"
import { parse } from 'csv-parse/sync';
import { ContinentCsv } from "../types/entity/CsvDto";

export const loadCsv = () => {
  const data = readFileSync('src/public/Continent_HDI.csv', 'utf8')
  const records: ContinentCsv = parse(data, {
    columns: true,
    skip_empty_lines: true
  });
  return records
}