import Head from 'next/head'
import TextField from '@material-ui/core/TextField';
import homestyles from '../styles/Home.module.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SearchResults from '../components/SearchResults.js'
import { IconButton } from '@material-ui/core';
import { render } from 'react-dom';
import React from 'react';

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

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      awaitingSearchResults: false,
      receivedSearchResults: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("Handle search change");
    if (e.target.name == "search")
      this.setState({ search: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  }

  handleSubmit() {
    console.log("Fetching phrase " + this.state.search);
    fetch('http://localhost:8000/api/caption?query=' + this.state.search).
      then(res => res.json()).
      then((data) => {
        console.log("Search results:")
        console.log(data);
        this.setState({
          receivedSearchResults: true,
          results: data
        });
      })
  }


  render() {
    let { awaitingSearchResults, receivedSearchResults, results } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div className={homestyles.home}>
          <img src="https://yt3.ggpht.com/ytc/AAUvwnisElGxyi-ekh3CLI-XQ30n0NzTszMXjsxRXZ7Hzw=s900-c-k-c0x00ffffff-no-rj" />
          <h1>What did Joel say?</h1>
          <div className={homestyles.searchInputContainer}>
            <TextField className={homestyles.searchInput} color="primary" variant="filled" onChange={this.handleChange} name="search" />
            <div className={homestyles.searchButtonContainer}>
              <IconButton className={homestyles.searchButton} color="primary" variant="contained" onClick={this.handleSubmit}>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          <SearchResults waiting={awaitingSearchResults} loaded={receivedSearchResults} results={results} />
        </div>
      </ThemeProvider>
    );
  }
}


export default Home