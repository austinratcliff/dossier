import { motion } from 'framer-motion'
import Div100vh from 'react-div-100vh'
import {
  IconButton,
  makeStyles,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import {
  ChevronDown,
  GitHub,
  Instagram,
  Linkedin,
  Mail,
  X
} from 'react-feather'
import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  const useStyles = makeStyles({
    container: {
      backgroundColor: '#fff',
      color: '#111',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 25,
      width: '100%',
      maxWidth: 500
    },
    icon: {
      marginBottom: 10
    },
    link: {
      marginBottom: 20,
      '&:last-child': {
        marginBottom: 0
      }
    },
    highlight: {
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #92a8d1 50%)',
      padding: '0 5px'
    },
    homeButton: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        top: 10
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
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <Div100vh className={classes.container}>
        <Head>
          <title>AR — Contact</title>
          <link rel='icon' href='/favicon.png' />
        </Head>

        <h1 className={classes.heading}>Contact</h1>
        <div className={classes.border}>
          <Mail className={classes.icon} />
          <a className={classes.link} href='mailto:hello@austinratcliff.com'>
            <span className={classes.highlight}>hello@austinratcliff.com</span>
          </a>
          <Linkedin className={classes.icon} />
          <a
            className={classes.link}
            href='https://www.linkedin.com/in/austinratcliff'
            target='_blank'
          >
            <span className={classes.highlight}>@austinratcliff</span>
          </a>
          <GitHub className={classes.icon} />
          <a
            className={classes.link}
            href='https://www.github.com/austinratcliff'
            target='_blank'
          >
            <span className={classes.highlight}>@austinratcliff</span>
          </a>
          <Instagram className={classes.icon} />
          <a
            className={classes.link}
            href='https://www.instagram.com/austin.ratcliff'
            target='_blank'
          >
            <span className={classes.highlight}>@austin.ratcliff</span>
          </a>
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
            {isMobile ? <X /> : <ChevronDown />}
          </IconButton>
        </Link>
      </Div100vh>
    </motion.div>
  )
}
