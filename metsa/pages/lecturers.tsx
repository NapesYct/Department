import { Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/HomeComponents/Header'
import LecturersCard from '../components/HomeComponents/lecturers/LecturersCard'
import { sanityClient, urlFor } from '../sanity'
import { LecturersData } from '../typings'

interface Props {
  lecturersData: [LecturersData]
}
const lecturers = ({ lecturersData }: Props) => {
  return (
    <>
      <Head>
        <title>METSA | LECTURERS PAGE</title>
      </Head>
      <Header />
      <div>
        <div className='bg-gradient-to-r from-red-500  to-red-900 py-40'>
          <Typography className='text-center text-2xl md:text-5xl' variant="h3" color="#fff">Meet All Our Departmental Lecturers</Typography>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 bg-slate-300 md:py-8 lg:grid-cols-4 gap-5 md:px-10'>
          {
            lecturersData.map((lecturer) => {
              return <div key={lecturer._id}>
                <LecturersCard title={lecturer.title} subtitle={lecturer.subtitle} description={lecturer.description} mainImage={urlFor(lecturer.mainImage).url()} slug={lecturer.slug.current} />
              </div>

            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default lecturers;

export async function getServerSideProps() {
  const query = `*[_type == "lecturers"]`
  // const query1 = `*[_type == "principalOfficers"]`

  // const res = await fetch(process.env.NEXT_PUBLIC_API_ROUTE + '/');
  // const data = await res.json();
  // const principalOfficers = await sanityClient.fetch(query1)
  const lecturersData = await sanityClient.fetch(query)
  return {
    props: { lecturersData }
  }
}