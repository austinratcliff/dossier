import { motion } from 'framer-motion'
import Div100vh from 'react-div-100vh'
import { IconButton, makeStyles } from '@material-ui/core'
import { ChevronRight } from 'react-feather'
import Head from 'next/head'
import Link from 'next/link'

export default function Projects() {
  const useStyles = makeStyles({
    container: {
      backgroundColor: '#fff',
      color: '#111',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'scroll',
      padding: '0 20px'
    },
    heading: {
      textAlign: 'center'
    },
    image: {
      border: '5px solid #111',
      boxShadow: '10px 10px #111',
      margin: '25px 0',
      width: '100%',
      maxWidth: 500
    },
    homeButton: {
      '&.MuiButtonBase-root': {
        position: 'absolute',
        left: 10
      }
    }
  })
  const classes = useStyles()

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <Div100vh className={classes.container}>
        <Head>
          <title>AR — Projects</title>
          <link rel='icon' href='/favicon.png' />
        </Head>

        <h1 className={classes.heading}>Projects</h1>
        <img
          className={classes.image}
          src='/under-construction.svg'
          alt='Under construction'
        />
        <Link href='/' passHref>
          <IconButton classes={{ root: classes.homeButton }} color='inherit'>
            <ChevronRight />
          </IconButton>
        </Link>
      </Div100vh>
    </motion.div>
  )
}
