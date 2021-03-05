import { motion } from 'framer-motion'
import Div100vh from 'react-div-100vh'
import {
  IconButton,
  makeStyles,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import { ChevronUp, X } from 'react-feather'
import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  const useStyles = makeStyles({
    container: {
      backgroundColor: '#fff',
      color: '#111',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'scroll',
      padding: '0 20px 100px 20px'
    },
    heading: {
      margin: '50px 0',
      textAlign: 'center'
    },
    border: {
      border: '5px solid #111',
      boxShadow: '10px 10px #111',
      padding: 25,
      width: '100%',
      maxWidth: 500
    },
    highlight: {
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #92a8d1 50%)',
      padding: '0 5px'
    },
    image: {
      border: '5px solid #111',
      boxShadow: '10px 10px #111',
      margin: '25px 0',
      width: '100%',
      maxWidth: 500
    },
    paragraph: {
      marginBottom: 10,
      '&:last-child': {
        marginBottom: 0
      }
    },
    homeButton: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        bottom: 10
      }
    },
    homeButtonMobile: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        top: 10,
        left: 10
      }
    }
  })
  const classes = useStyles()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <Div100vh className={classes.container}>
        <Head>
          <title>AR — About</title>
          <link rel='icon' href='/favicon.png' />
        </Head>

        <h1 className={classes.heading}>About</h1>
        <div className={classes.border}>
          <h2>
            <span className={classes.highlight}>Habitually curious.</span>
          </h2>
          <h2>
            <span className={classes.highlight}>Strategically detailed.</span>
          </h2>
          <h2>
            <span className={classes.highlight}>Politely daring.</span>
          </h2>
        </div>
        <img className={classes.image} src='/austin.png' alt='Austin' />
        <div className={classes.border}>
          <p className={classes.paragraph}>
            Austin is an Oklahoma-born, Chicago-living software developer with
            an affinity for clean code, astrology, and oversized sweatshirts.
          </p>
          <p className={classes.paragraph}>
            Originally a fashion marketing and journalism grad, his dream of
            being the next Anna Wintour changed after he learned web development
            at Dev Bootcamp. Now a Software Development Consultant at{' '}
            <a href='https://www.thoughtworks.com' target='_blank'>
              <span className={classes.highlight}>ThoughtWorks</span>
            </a>
            , he builds full-stack applications and services for various
            clients, speacializing in front-end development.
          </p>
          <p className={classes.paragraph}>
            A few emojis that describe Austin are: ✨ 🏳️‍🌈 🤓
          </p>
          <p className={classes.paragraph}>
            And in his free time he can be found at his favorite coffee shop in
            Wicker Park, either working on yet another iteration of one of his
            side projects, or online shopping.
          </p>
        </div>
        <Link href='/' passHref>
          <IconButton
            classes={
              isMobile
                ? { root: classes.homeButtonMobile }
                : { root: classes.homeButton }
            }
            color='inherit'
          >
            {isMobile ? <X /> : <ChevronUp />}
          </IconButton>
        </Link>
      </Div100vh>
    </motion.div>
  )
}
