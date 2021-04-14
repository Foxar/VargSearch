import homestyles from '../styles/Home.module.css'
import { Paper } from '@material-ui/core';


function SearchResults(props) {


    if (props.waiting) {
        return (<h1>Please wait.</h1>);
    }
    else if (props.loaded) {
        return (
            <ul className={homestyles.searchResults}>
                {props.results.map(function (obj, i) {
                    var ytlink = "https://www.youtube.com/embed/" + obj.videoid;
                    return <li className={homestyles.searchResult} key={i}>
                        <Paper elevation={3} color="primary" variant="outlined">
                            <iframe width="350" height="200" src={ytlink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div className={homestyles.searchResultInfo}>
                                <p>{obj.text}</p>
                                <p>At {obj.start} second</p>
                            </div>
                        </Paper>
                    </li>
                })
                }
            </ul >
        );
    }
    else {
        return <span></span>
    }

}

export default SearchResults;