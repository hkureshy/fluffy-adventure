import '../styles/globals.css';
import 'devicon/devicon.min.css';
import 'react-vertical-timeline-component/style.min.css';
import 'light-icons/dist/light-icon.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
