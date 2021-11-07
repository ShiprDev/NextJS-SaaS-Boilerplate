import Head from 'next/head'
import Header from '../components/landing/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS SaaS Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
      
      </main>

    </div>
  )
}
