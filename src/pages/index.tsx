import Meta from '../components/Head/Meta'

import Link from '../components/Head/Link'

import Title from '../components/Head/Title'

import Search from '../components/Search'

import Links from '../components/Links/'

export default function Home() {
  return (
    <>
      <Meta></Meta>
      <Link />
      <Title />
      <Search />
      <Links />

      <style global>{`
      *{
        margin: 0;
        padding: 0;
      }
      body{
        width: 100vw;
        height: 100vh;
        background: linear-gradient(90deg, #121212 -4.79%, #003A45 103.18%);
      }
      :root{
        --brand: #003a45;
        --light: #f2f2f2;
        --dark: #121212;
      }
      `}</style>
    </>
  )
}
