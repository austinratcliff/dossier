import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import { AlignLeft, Code, MessageCircle, User } from 'react-feather'
import Link from 'next/link'

export default function IconButtons() {
  const useStyles = makeStyles({
    toolbar: {
      '&.MuiToolbar-root': {
        justifyContent: 'space-evenly'
      }
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

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return isMobile ? (
    <AppBar color='transparent' elevation={0}>
      <Toolbar classes={{ root: classes.toolbar }}>
        <Link href='/about' passHref>
          <IconButton color='inherit'>
            <User />
          </IconButton>
        </Link>
        <Link href='/blog' passHref>
          <IconButton color='inherit'>
            <AlignLeft />
          </IconButton>
        </Link>
        <Link href='/contact' passHref>
          <IconButton color='inherit'>
            <MessageCircle />
          </IconButton>
        </Link>
        <Link href='/projects' passHref>
          <IconButton color='inherit'>
            <Code />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  ) : (
    <>
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
        <IconButton classes={{ root: classes.projectsButton }} color='inherit'>
          <Code />
        </IconButton>
      </Link>
    </>
  )
}
