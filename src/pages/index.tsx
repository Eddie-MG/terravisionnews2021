import { Home } from '../components/pages/Home'
import { loadCsv } from '../lib/loadCsv'

export async function getStaticProps() {
  const demographicData = loadCsv()

  // put(mapActions.Actions.polygonRequest({ data: demographicData })) // TODO: Try and dispatch action in getStaticProps
  return {
    props: {
      demographicData
    }
  }
}
export default Home
