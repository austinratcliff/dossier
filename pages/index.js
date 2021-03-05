import { motion } from 'framer-motion'
import Div100vh from 'react-div-100vh'
import { IconButton, makeStyles } from '@material-ui/core'
import { MessageCircle, User } from 'react-feather'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const useStyles = makeStyles({
    aboutButton: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        top: 10
      }
    },
    contactButton: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        bottom: 10
      }
    }
  })
  const classes = useStyles()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut' }}
    >
      <Div100vh className={styles.container}>
        <Head>
          <title>Austin Ratcliff</title>
          <link rel='icon' href='/favicon.png' />
        </Head>

        <h1 className={styles.text}>Austin Ratcliff</h1>
        <h2 className={styles.text}>Software Developer</h2>
        <Link href='/about' passHref>
          <IconButton classes={{ root: classes.aboutButton }} color='inherit'>
            <User />
          </IconButton>
        </Link>
        <Link href='/contact' passHref>
          <IconButton classes={{ root: classes.contactButton }} color='inherit'>
            <MessageCircle />
          </IconButton>
        </Link>
      </Div100vh>
    </motion.div>
  )
}
