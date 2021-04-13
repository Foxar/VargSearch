import Head from 'next/head'
import TextField from '@material-ui/core/TextField';
import homestyles from '../styles/Home.module.css'
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#93cede',
    },
  },
});



export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <div className={homestyles.home}>
      <img src="https://yt3.ggpht.com/ytc/AAUvwnisElGxyi-ekh3CLI-XQ30n0NzTszMXjsxRXZ7Hzw=s900-c-k-c0x00ffffff-no-rj"/>
      <h1>What did Joel say?</h1>
      <div className={homestyles.searchInputContainer}>
        <TextField className={homestyles.searchInput} color="primary" variant="filled"/>
        <div className={homestyles.searchButtonContainer}>
        <IconButton className={homestyles.searchButton} color="primary" variant="contained">
          <SearchIcon/>
        </IconButton>
        </div> 
      </div>
    </div>
    </ThemeProvider>
  )
}
