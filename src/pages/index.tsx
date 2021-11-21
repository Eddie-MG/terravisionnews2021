import { features } from 'process'
import { Home } from '../components/pages/Home'
import { loadCsv } from '../lib/loadCsv'
import { loadJson } from '../lib/loadJson'
import { GeoJsonFeature, GeoJsonStrippedFeature } from '../types/entity/CsvDto'

export async function getStaticProps() {
  const demographicData = {} // loadCsv('Continent_HDI.csv')
  const HDIData = {} // loadCsv('HDI.csv')
  const GeoJson = loadJson('countries.geojson')

  const europeanData = GeoJson.features.filter(polygon => polygon.properties.continent === 'Europe')
  const multiPolygonData = europeanData.filter(feature => feature.geometry.coordinates.length > 1)
  const singlePolygonData: GeoJsonStrippedFeature[] = europeanData.filter(feature => feature.geometry.coordinates.length === 1).map(feature => ({ ...feature, geometry: { coordinates: feature.geometry.coordinates[0], type: feature.geometry.type } }))

  // @ts-ignore
  const formattedMultiPolygonData: GeoJsonStrippedFeature[] = multiPolygonData.flatMap(feature => feature.geometry.coordinates.map(ring => ({ ...feature, geometry: { coordinates: ring[0], type: feature.geometry.type } })))

  // put(mapActions.Actions.polygonRequest({ data: demographicData })) // TODO: Try and dispatch action in getStaticProps
  return {
    props: {
      continentalDemographicData: demographicData,
      geoJson: singlePolygonData.concat(formattedMultiPolygonData)
    }
  }
}
export default Home
