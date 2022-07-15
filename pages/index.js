import Head from 'next/head';

import Hero from '../components/Hero/Hero';
import Membership from '../components/Membership/Membership';
import ClassesGrid from '../components/Membership/ClassesGrid';

export default function Home() {
  return (
    <>
      <Head>
        <title>Martial Masters Academy</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Hero />
      <ClassesGrid />
      <Membership />
    </>
  );
}
