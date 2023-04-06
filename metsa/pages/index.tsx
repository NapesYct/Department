import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer/Footer';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/HomeComponents/AboutUs';
import Executives from '../components/HomeComponents/executives/Executives';
import Header from '../components/HomeComponents/Header'
import Lecturers from '../components/HomeComponents/lecturers/Lecturers';
import Projects from '../components/HomeComponents/Projects';
import { sanityClient } from '../sanity';
import { LecturersData, OurExecutives } from '../typings';

interface Props {
  lecturersData: [LecturersData]
  ourExecutives: [OurExecutives]
}

const Home: NextPage<Props> = ({ lecturersData, ourExecutives }) => {
  // console.log("This is post: ", lecturersData, 'postes')
  return (
    <div>
      <Head>
        <title>METSA | HOME PAGE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        lecturersData ?
          <main>
            <Header />
            <HeroSection />
            <Box>
              <Lecturers lecturersInfo={lecturersData} />
              <Executives allExecutives={ourExecutives} />
              <AboutUs />
              <Projects />

            </Box>
            <Footer />
          </main>
          : 'LOADING...'
      }
    </div>
  )
}

export default Home


export async function getServerSideProps() {
  const query = `*[_type == "lecturers"]`
  const executives = `*[_type == "executives"]`

  // const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + '/');
  // const data = await res.json();
  const ourExecutives = await sanityClient.fetch(executives)
  const lecturersData = await sanityClient.fetch(query)
  return {
    props: { lecturersData, ourExecutives }
  }
}