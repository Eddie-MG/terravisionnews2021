import { Home } from '../components/pages/Home'
import { loadCsv } from '../lib/loadCsv'

export async function getStaticProps() {
  const demographicData = loadCsv()
  return {
    props: {
      demographicData
    }
  }
}
export default Home
