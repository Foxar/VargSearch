import React from 'react'
import aboutStyles from '../styles/About.module.css'


const about = () => {
    return (
        <div className={aboutStyles.about}>

            <h1>About Vargsearch</h1>
            <p> This is a simple tool allowing you to search through captions of the YouTube uploads of Vinesauce Joel's streams.
            </p>
            <p>
                It's designed to allow for easy search through the stream's contents and help finding particular memes or bits
                that might be otherwise difficult to find. At the time, only searches of Vinesauce Joel's streams uploaded to the primary YouTube channel,
                (Vargskelethor Joel) is available. In the future, site's functionality might be expanded to other channels associated with Vinesauce.
            </p>

            <h4>How does it work?</h4>
            <p>
                The website utilizes YouTube caption system. It automatically downloads captions available from all video uploads, catalogues them
                in it's own internal database, and allows users to query said databse for phrases. Whatever is inserted into the search will be looked
                for, no matter how buried it is in the text data. (Searching for 'table' will yield also 'unacceptable').
            </p>
        </div>
    )
}


export default about
