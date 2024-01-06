import Head from 'next/head'
import MainPage from './MainPage'
import Script from 'next/script';
import MetaPixel from '@/utils/meta/metaPixel';


export default function Home() {
  return (
    <>
      <Head>
        <title>Way WeDesign</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <MetaPixel/>
        
      </Head>
      
        <MainPage/>
    </>
  )
}
