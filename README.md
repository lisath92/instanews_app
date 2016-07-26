# New York Times Instanews App

##About
This is a project that required us to retrieve data from the New York Times API using ajax method. The website is deisnged to contain the first 12 articles from the New York Times Magazine (NYT) that has images. Each article is linked directly to the full New York Times article website.

##Tools and Methods Used
* **HTML** - the usual content layer that contains the NYT logo and a drop down menu selector for the user to choose a certain category of articles to browse. It also has a section that is base for the articles grid.
* **SCSS/CSS** - first time using SCSS to style the layout of the website. The articles loaded from the NYT API is put into a flexbox that refactors at different media screen sizes. There is also animation sequence on the NYT logo that is initialized as the screen resizes.
* **NPM and Gulp Build Tool** - downloaded all the necessary packages to use gulp for the first time as a build tool to convert SCSS files to CSS. Also minimized the JavaScript file along with the SCSS file.
* **Ajax/ JSON** - requested for a NYT API key and used ajax method to retrieve data from it. Read the object that was passed from the api key based on the selected category and accessed the articles nested within. Used the .done, .fail,. always method that accounts for when the loading is complete and when it has failed that both produces a result for the user. 
* **JavaScript** - wrote JS method to add the articles into a proper grid format and to change the header size as the articles are loaded.
* **Heapbox** - used to modify the styles of the select form

##General Objectives Achieved
I have learned from this project that the web has a lot more to offer than I had originally knew. Being able to access data from API opens up many different opportunities to modify a webpage and make it interactive. Also, by learning how to access data from API using JavaScript, I deepened my understanding in writing JavaScript and JQuery.

I found that finding the correct methods to use in JS was challenging, but through trial and error and JQuery cheatsheet, I managed to find all the methods I need. Another aspect of JS that I found was more difficult was the concatenation of the article data. A single syntax error will cause the whole function to not work as expected.

My first time using SCSS to style the layout was quite rewarding. I found it to be very helpful when I am trying to access several nested elements and it was must easier to write than regular CSS. The Gulp build tool is extremely useful in converting SCSS into minified CSS as I build my website. 

Overall, I found this project to be very informational in learning about JavaScript and SCSS. It opened up more opportunities to make a webpage more interactive and not just static.
