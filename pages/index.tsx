import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

const Home: NextPage = ({ explorerData, cardsData }) => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header />
     <Banner />
     <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {explorerData?.map(({img, location, distance}) => (
            <SmallCard key={location} img={img} distance={distance} location={location} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {cardsData?.map(({title,img}) => (
          <MediumCard key={title} img={img} title={title} />
        ))}
        </div>
      </section>
      <section>
        <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" 
          description="Wishlists curated by Airbnb" buttonText="Get Inspired" />
      </section>
     </main>

     <Footer />

    </div>
  )
}

export async function getStaticProps(){
  const explorerData = await fetch('https://links.papareact.com/pyp').then(data => data.json());

  const cardsData = await fetch('https://links.papareact.com/zp1').then(data => data.json());

  return {
    props: {
      explorerData: explorerData,
      cardsData: cardsData
    }
  }
}

export default Home
