## YTSearch: A Youtube look-up tool


#### About
This is a simple tool allowing you to search through captions of the YouTube uploads of a given youtube channel.
t's designed to allow for easy search through the stream's contents and help finding particular memes or bits
that might be otherwise difficult to find. 

#### How does it work?
The website utilizes YouTube caption system. It automatically downloads captions available from all video uploads, catalogues them
in it's own internal database, and allows users to query said databse for phrases. Whatever is inserted into the search will be looked
for, no matter how buried it is in the text data. (Searching for 'table' will yield also 'unacceptable').

### To-Do:
- Make the searches case insensitive, through Eloquent's whereraw query building, or through building the database of captions in lowercase.
- Fix the general aesthetics of the site
- Add different page switching
