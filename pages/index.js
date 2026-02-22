import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BusinessCard from '../components/BusinessCard';
import Projects from '../components/Projects';
import Image from 'next/image'


function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcus Lindholm</title>
        <meta name="Marcus Lindholm" content="Student at Linköping University | Industrial Engineering and management" />
        <link rel="icon" href="/favicon.png" />
        
      </Head>
      
      <main className={styles.main}>
        <div>
          <BusinessCard />
        </div>

        <Projects />
      </main>

      {/*<footer className={styles.footer}>
        
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        
      </footer>*/}
    </div>
  );
};

export default Home
