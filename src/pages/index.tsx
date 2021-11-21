import { Home } from '../components/pages/Home'
import { loadCsv } from '../lib/loadCsv'
import { loadJson } from '../lib/loadJson'

export async function getStaticProps() {
  const demographicData = loadCsv('Continent_HDI.csv')
  const HDIData = loadCsv('HDI.csv')
  const GeoJson = loadJson('countries.geojson')

  // put(mapActions.Actions.polygonRequest({ data: demographicData })) // TODO: Try and dispatch action in getStaticProps
  return {
    props: {
      demographicData,
      HDIData,
      GeoJson
    }
  }
}
export default Home
