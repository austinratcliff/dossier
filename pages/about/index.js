import { motion } from 'framer-motion'
import Div100vh from 'react-div-100vh'
import { IconButton, makeStyles } from '@material-ui/core'
import { ChevronUp } from 'react-feather'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/About.module.css'

export default function About() {
  const useStyles = makeStyles({
    homeButton: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        bottom: 10
      }
    }
  })
  const classes = useStyles()

  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <Div100vh className={styles.container}>
        <Head>
          <title>AR — About</title>
          <link rel='icon' href='/favicon.png' />
        </Head>

        <h1 className={styles.heading}>About</h1>
        <div className={styles.border}>
          <h2>
            <span className={styles.highlight}>Habitually curious.</span>
          </h2>
          <h2>
            <span className={styles.highlight}>Strategically detailed.</span>
          </h2>
          <h2>
            <span className={styles.highlight}>Politely daring.</span>
          </h2>
        </div>
        <img className={styles.image} src='/austin.png' alt='Austin' />
        <div className={styles.border}>
          <p className={styles.paragraph}>
            Austin is an Oklahoma-born, Chicago-living software developer with
            an affinity for clean code, astrology, and oversized sweatshirts.
          </p>
          <p className={styles.paragraph}>
            Originally a fashion marketing and journalism grad, his dream of
            being the next Anna Wintour changed after he learned web development
            at Dev Bootcamp. Now a Software Development Consultant at{' '}
            <a href='https://www.thoughtworks.com' target='_blank'>
              <span className={styles.highlight}>ThoughtWorks</span>
            </a>
            , he builds full-stack applications and services for various
            clients, speacializing in front-end development.
          </p>
          <p className={styles.paragraph}>
            A few emojis that describe Austin are: ✨ 🏳️‍🌈 🤓
          </p>
          <p className={styles.paragraph}>
            And in his free time he can be found at his favorite coffee shop in
            Wicker Park, either working on yet another iteration of one of his
            side projects, or online shopping.
          </p>
        </div>
        <Link href='/' passHref>
          <IconButton classes={{ root: classes.homeButton }} color='inherit'>
            <ChevronUp />
          </IconButton>
        </Link>
      </Div100vh>
    </motion.div>
  )
}
