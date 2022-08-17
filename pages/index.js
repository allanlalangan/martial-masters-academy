import Head from 'next/head';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Divider from '../components/Divider/Divider';
import Membership from '../components/Membership/Membership';
import KidsProgram from '../components/KidsProgram/KidsProgram';
import Features from '../components/Features/Features';

export default function Home() {
  return (
    <>
      <Head>
        <title>Martial Masters Academy | Elevate Your Training</title>
        <meta
          name='Martial Masters Academy'
          content='The best Martial Arts Gym in Portland'
        />
      </Head>
      <>
        <Hero />
        <Divider />
        <h2 className='mx-8 mb-12 border-b-[1.5px] border-gray-700 pb-8 text-center text-3xl font-bold uppercase tracking-widest sm:p-12 lg:mx-16'>
          Who are we?
        </h2>
        <About />
        <Divider />
        <h2 className='mx-8 mb-12 border-b-[1.5px] border-gray-700 pb-8 text-center text-3xl font-bold uppercase tracking-widest sm:p-12 lg:mx-16'>
          Memberships and packages
        </h2>
        <Membership />
        <Divider />
        <Features />
        <Divider />
        <h2 className='mx-8 mb-12 border-b-[1.5px] border-gray-700 pb-8 text-center text-3xl font-bold uppercase tracking-widest sm:p-12 lg:mx-16'>
          Lone Warrior Project
        </h2>
        <KidsProgram />
        <Divider />
      </>
    </>
  );
}
