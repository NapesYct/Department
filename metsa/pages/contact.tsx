import React from 'react';
import ContactCard from '../components/ContactCard';
import Header from '../components/HomeComponents/Header';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from '../components/footer/Footer';
import Head from 'next/head';

const contact = () => {
  return (
    <section className=''>
      <Head>
        <title>METSA | CONTACT US PAGE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='bg-gradient-to-r from-gray-800  to-red-900 text-center py-40'>
        <h1 className='text-4xl text-white font-sans font-bold'>Contact Us</h1>
      </div>
      <div className='text-center py-10'>
        <h2 className='text-xl text-white font-bold'>Get In Touch</h2>
      </div>
      <div className='grid grid-cols-1 py-10 sm:px-10 sm:grid-cols-2 lg:grid-cols-4 gap-5 bg-red-100'>
        <ContactCard title='Opening Hours' icon={<AccessTimeIcon />} desc1='06:00am to 05:00pm' />
        <ContactCard title='Phone' icon={<CallIcon />} desc1='+234 9099 9022 21' desc2='+234 2132 5483 22' />
        <ContactCard title='Email' icon={<EmailIcon />} desc1='example@gmail.com' desc2='mail.napes@n.com' />
        <ContactCard title='Address' icon={<LocationOnIcon />} desc1='105 Herbert Macaulay Way' />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:px-20 my-20'>
        <img className='lg:col-span-2' src="/images/contact-img.png" alt="" />
        <div >
          <h2 className='text-2xl font-sans font-bold text-center'>Send Us Message</h2>
          <form className='bg-gray-800 w-full shadow-lg px-20 rounded py-20 flex flex-col  justify-center space-y-5'>
            <input className='input' placeholder='Name' type="text" required />
            <input className='input' placeholder='email' type="email" required />
            <input className='input' placeholder='text' type="text" />
            <textarea name="" id="" cols={30} rows={5}></textarea>
            <button className='button hover: shadow-full transition ease-in-out duration-200 hover:bg-cyan-900 hover:text-white'>Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </section >
  )
}

export default contact