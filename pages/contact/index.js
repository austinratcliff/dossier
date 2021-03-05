import { motion } from 'framer-motion'
import Div100vh from 'react-div-100vh'
import { IconButton, makeStyles } from '@material-ui/core'
import { ChevronDown, GitHub, Instagram, Linkedin, Mail } from 'react-feather'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Contact.module.css'

export default function Contact() {
  const useStyles = makeStyles({
    homeButton: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        top: 10
      }
    }
  })
  const classes = useStyles()

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <Div100vh className={styles.container}>
        <Head>
          <title>AR — Contact</title>
          <link rel='icon' href='/favicon.png' />
        </Head>

        <h1 className={styles.heading}>Contact</h1>
        <div className={styles.border}>
          <Mail className={styles.icon} />
          <a className={styles.link} href='mailto:hello@austinratcliff.com'>
            <span className={styles.highlight}>hello@austinratcliff.com</span>
          </a>
          <Linkedin className={styles.icon} />
          <a
            className={styles.link}
            href='https://www.linkedin.com/in/austinratcliff'
            target='_blank'
          >
            <span className={styles.highlight}>@austinratcliff</span>
          </a>
          <GitHub className={styles.icon} />
          <a
            className={styles.link}
            href='https://www.github.com/austinratcliff'
            target='_blank'
          >
            <span className={styles.highlight}>@austinratcliff</span>
          </a>
          <Instagram className={styles.icon} />
          <a
            className={styles.link}
            href='https://www.instagram.com/austin.ratcliff'
            target='_blank'
          >
            <span className={styles.highlight}>@austin.ratcliff</span>
          </a>
        </div>
        <Link href='/' passHref>
          <IconButton classes={{ root: classes.homeButton }} color='inherit'>
            <ChevronDown />
          </IconButton>
        </Link>
      </Div100vh>
    </motion.div>
  )
}
