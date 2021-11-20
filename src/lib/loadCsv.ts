import { readFileSync } from "fs"
import { parse } from 'csv-parse/sync';

export const loadCsv = () => {
  const csvData: { Id: string; 'Human development groups': string, HDI: string, 'Life_ expectancy': number, 'Mean years of schooling': number }[] = []

  const data = readFileSync('src/public/Continent_HDI.csv', 'utf8')
  const records = parse(data, {
    columns: true,
    skip_empty_lines: true
  });
  return records
}