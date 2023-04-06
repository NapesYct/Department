import { Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/footer/Footer'
import ExecutivesCard from '../components/HomeComponents/executives/ExecutivesCard'
import Header from '../components/HomeComponents/Header';
import { sanityClient, urlFor } from '../sanity'
import { OurExecutives } from '../typings'

interface Props {
  ourExecutives: [OurExecutives]
}

const executives = ({ ourExecutives }: Props) => {
  return (
    <>
      <Head>
        <title>METSA | EXECUTIVES PAGE</title>

      </Head>
      <Header />
      <div>
        <div className='bg-gradient-to-r from-black  to-red-900 py-40'>
          <Typography className='text-center text-2xl md:text-5xl' variant="h3" color="#fff">Meet All Our Departmental Executives</Typography>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 bg-red-100 md:py-8 lg:grid-cols-4 gap-5 md:px-10'>
          {
            ourExecutives.map((executives) => {
              return <div>
                <ExecutivesCard name={executives.name} title={executives.title} mainImage={urlFor(executives.mainImage).url()} />
              </div>
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default executives;


export async function getServerSideProps() {
  const executives = `*[_type == "executives"]`

  // const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + '/');
  // const data = await res.json();
  const ourExecutives = await sanityClient.fetch(executives)
  return {
    props: { ourExecutives }
  }
}