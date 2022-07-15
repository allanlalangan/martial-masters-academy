import Head from 'next/head';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Membership from '../components/Membership/Membership';
import Programs from '../components/Programs/Programs';
import KidsProgram from '../components/KidsProgram/KidsProgram';
import Features from '../components/Features/Features';

export default function Home() {
  return (
    <>
      <Head>
        <title>Martial Masters Academy</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Hero />
      <About />
      <Programs />
      <Membership />
      <Features />
      <KidsProgram />
    </>
  );
}
