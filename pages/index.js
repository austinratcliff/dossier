import { motion } from 'framer-motion'
import Div100vh from 'react-div-100vh'
import { makeStyles } from '@material-ui/core'
import Head from 'next/head'
import IconButtons from '../components/IconButtons'

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
        <IconButtons />
      </Div100vh>
    </motion.div>
  )
}
