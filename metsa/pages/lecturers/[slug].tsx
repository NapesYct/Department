import { GetStaticProps } from 'next';
import React from 'react'
import Header from '../../components/HomeComponents/Header';
import { sanityClient, urlFor } from '../../sanity';
import { LecturersData } from '../../typings';

interface Props {
  lecturersData: LecturersData
}

const LecturersProfile: React.FC<Props> = ({ lecturersData }) => {
  return (
    <>
      <Header />
      <div className='md:flex justify-between items-center'>
        <div className='p-5'>
          <div className='flex space-x-5 justify-between'>
            <div className='block md:hidden '>
              <img className=' h-full w-60' src={urlFor(lecturersData.mainImage).url()} alt="" />
            </div>
            <div>
              <div>
                <h1 className='font-bold md:text-3xl text-gray-900'>{lecturersData.title}</h1>
                <p className='text-gray-500 '>{lecturersData.subtitle}</p>
              </div>

              <div className='mt-10'>
                <p><span className='font-bold text-gray-600'>Email:</span> {lecturersData.email}</p>
                <p><span className='font-bold text-gray-600'>Phone Number:</span>  {lecturersData.phoneNumber}</p>
              </div>
            </div>

          </div>
          <div className='w-full p-1 bg-gray-300 my-5'></div>
          <div>
            <h2 className='text-xl font-bold  mb-5'>Education</h2>
            <ul className='ml-5'>
              <li className='list-disc text-gray-800'>{lecturersData.higherInstitutionCert}</li>
              {lecturersData.mastersCert && <li className='list-disc'>{lecturersData.mastersCert}</li>}
              {lecturersData.otherCert && <li className='list-disc'>{lecturersData.otherCert}</li>}
            </ul>
          </div>
        </div>
        <div className='mr-5 hidden md:block'>
          <img src={urlFor(lecturersData.mainImage).url()} alt="" />
        </div>
      </div>
      <div className='ml-5'>
        <h2 className='text-xl font-bold mb-5'>Biography</h2>
        <p>{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, earum dolor recusandae tempore debitis placeat magni? Tempora quo quas minus maiores et non vel rem sit. Debitis similique nobis omnis molestiae, soluta rerum minima reprehenderit distinctio inventore voluptas voluptates magni maiores accusantium voluptatum delectus illo tenetur reiciendis. At, modi et.'}</p>

        <h2 className='text-xl font-bold my-5'>Specialization</h2>
        <p>{lecturersData.specialization}</p>
      </div>
    </>
  )
}

export default LecturersProfile;

export const getStaticPaths = async () => {
  const query = `*[_type == "lecturers"]`
  const lecturersData = await sanityClient.fetch(query);

  const paths = lecturersData.map((data: LecturersData) => ({
    params: {
      slug: data.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "lecturers" && slug.current == $slug][0]`;

  const lecturersData = await sanityClient.fetch(query, {
    slug: params?.slug
  });

  if (!lecturersData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      lecturersData
    }
  }
}