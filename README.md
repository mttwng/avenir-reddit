## avenir-reddit
[Avenir Reddit Challenge](http://webualize.com/avenir/)

###Methodology
Current version uses html, css, and jQuery. A form is used as a search box which then calls a get request on the reddit search API. This call is formatted in json and returned and parsed for URLs. URLs are then filtered to contain images and rendered on the page in html.

###To Do 
- Implement responsive grid system
- Make pretty
- Use token authentication to properly search subreddits
- Check URL filter before render
- Display message if no images render
- Append to an array first before rendering

