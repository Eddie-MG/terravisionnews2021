import type { AppProps } from 'next/app'
import { appWrapper } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWrapper.withRedux(MyApp);
