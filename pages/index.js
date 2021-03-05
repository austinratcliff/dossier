import { motion } from 'framer-motion'
import Div100vh from 'react-div-100vh'
import { IconButton, makeStyles } from '@material-ui/core'
import { AlignLeft, Code, MessageCircle, User } from 'react-feather'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const useStyles = makeStyles({
    container: {
      backgroundColor: '#111',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 20px'
    },
    text: {
      textAlign: 'center'
    },
    aboutButton: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        top: 10
      }
    },
    blogButton: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        left: 10
      }
    },
    contactButton: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        bottom: 10
      }
    },
    projectsButton: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        right: 10
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
      <Div100vh className={classes.container}>
        <Head>
          <title>Austin Ratcliff</title>
          <link rel='icon' href='/favicon.png' />
        </Head>

        <h1 className={classes.text}>Austin Ratcliff</h1>
        <h2 className={classes.text}>Software Developer</h2>
        <Link href='/about' passHref>
          <IconButton classes={{ root: classes.aboutButton }} color='inherit'>
            <User />
          </IconButton>
        </Link>
        <Link href='/blog' passHref>
          <IconButton classes={{ root: classes.blogButton }} color='inherit'>
            <AlignLeft />
          </IconButton>
        </Link>
        <Link href='/contact' passHref>
          <IconButton classes={{ root: classes.contactButton }} color='inherit'>
            <MessageCircle />
          </IconButton>
        </Link>
        <Link href='/projects' passHref>
          <IconButton
            classes={{ root: classes.projectsButton }}
            color='inherit'
          >
            <Code />
          </IconButton>
        </Link>
      </Div100vh>
    </motion.div>
  )
}
