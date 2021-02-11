import Div100vh from 'react-div-100vh'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Div100vh className={styles.container}>
      <Head>
        <title>Austin Ratcliff</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <h1 className={styles.text}>Austin Ratcliff</h1>
      <h2 className={styles.text}>Software Developer</h2>
    </Div100vh>
  )
}
