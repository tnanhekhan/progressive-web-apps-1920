# Progressive Web Apps 
This project is based on a project for OBA: https://github.com/tnanhekhan/project-1-1920  

[![Build Status](https://travis-ci.com/tnanhekhan/progressive-web-apps-1920.svg?branch=master)](https://travis-ci.com/tnanhekhan/progressive-web-apps-1920)  

![poster](docs/poster.jpg "poster")

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Live Version](#live-version)
4. [Job Stories](#job-stories)
5. [Feedback Week 2](#feedback-week-2)
6. [Performance Enhancement](#performance-enhancement)  
7. [Built with](#built-with)
8. [Learning Goals Conclusion](#learning-goals-conclusion)

## Installation  
Clone this repo with your favourite GIT CLI or GUI.  
CD to this project folder.  
Run ` npm install ` to install this project and its necessary dependencies.  
Run ` npm build ` to build this project.

## Usage
Run `npm dev` and go to `localhost:3000` to see the dev version with nodemon development server.  
Run `npm start` and go to `localhost:3000` to see the normal version running.

## Live Version
Here is the live version hosted on Heroku: https://spreekbeurt-helper.herokuapp.com/

## Job Stories
- When I am offline, i want to be notified by the app that i am offline so that I know I need to enable internet
- When I open the app, i want to be able to install the app so I have a progressive web app experience

## Feedback Week 2
Feedback over:
- Project structuur
- Api calls

## Performance Enhancement
### Minified CSS and Images
With the help of the gulp scripts `gulp-clean-css` and `gulp-imagemin` I have minified the css and images the app uses. The images show the size difference in the network tab of chrome dev tools. The total size decrease is 4kb or around 1.81% in this case. The load time however is somehow 1 ms longer on the version with the minified assets

Before: ![before-minify](docs/before-minify.png "before-minify") 

After: ![after-minify](docs/after-minify.png "after-minify")

### Minified HTML
With the npm dependency `express-minify-html` you can minify the views the express render method uses. The minified HTML version it's localhost html file is 0.6 kb smaller than the non-minified version.  

No Minified HTML: ![no-minified-html](docs/after-minify.png "no-minified-html")

Minified HTML: ![minified-html](docs/minify-html.png "minified-html")

### Service Worker Caching
One of the requirements of this exercise is that we had to implement a service worker which caches some assets and shows an offline page. The images show below the time it takes to load the page. The version with the implemented service worker loads the page 35 ms (or 23%) faster than the version without a service worker. The transferred size has also decreased by  ~215 kb.

No Service Worker: ![no-service-worker](docs/after-minify.png "no-service-worker") 

With Service Worker: ![with-service-worker](docs/with-service-worker.png "with-service-worker")

### Loading CSS Async
The problem was that css files are render-blocking. This project had three css files which I combined into one file.  To prevent this the css needs to be loaded asynchronously. I have used [this](https://www.filamentgroup.com/lab/load-css-simpler/) resource for the solution.

Lighthouse opportunity before async css: ![before-async-css](docs/render-blocking-css.png "before-async-css") 

Now the opportunity doesn't show anymore and according to the audit the first meaningful paint is even 200ms faster.

### Audit
The Chrome Lighthouse audit after the performance enhancement is 200 ms faster on Heroku than before on the local version, which is pretty good. On the audit scores Best Practices and SEO there is a noticeable improvement and the audit even acknowledges that the project is a Progressive Web App. 

Audit before Performance Enhancement: ![audit-before](docs/audit-before.png "audit-before") 

Audit after Performance Enhancement: ![audit-after](docs/audit-after.png "audit-after")

### Conclusion
The enhancements have an positive effect on file sizes and load times. However because the project and it's assets are so small in size, the effect is barely noticable. 
With the minify for example the first meaningful paint improves with just 35 ms, which is barely noticeable but an improvement anyway. If this would project would be larger the performance enhancement would be more noticeable.

## Learning Goals Conclusion
- Client-side and Server-side rendering: During this course I have learned the difference between client-side and server-side rendering. This was a first time for me to work with Node.js and I liked using it very much. I might like it even more than client-side Javascript, especially because I can use the WebStorm debugger with Node.js. Learning Express.js was also quite useful and I might even use it in the future to set up a basic Api for example. I also learned about Gulp and setting up package.json.

- Service Worker: Progressive Web Apps were a quite new concept for me but they are basically web apps that try to emulate the behaviour of actual native apps. Offline functionality is not a thing in "normal" web apps but in native apps it is. With the implementation of the Service Worker you can also give webapps this offline functionality. You can also cache resources with the service worker to limit the amount of network requests you have to make and to increase the performance of the web app. 

- Critical Rendering Path: Implementing the service worker can help by optimizing the critical rendering path by reducing network requsts. I have also learned that by removing the whitespace in your HTML, CSS and Javascript you decrease the size of the file. By loading Javascript and Css async you prevent the blocking of the rendering of the page. The browser stops rendering html whenever it sees a script tag, that is why you also put the script tag just before you close the body.

## Built with
- [Node.js](https://nodejs.org/en/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js](https://expressjs.com/): A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [EJS](https://ejs.co/): Embedded JavaScript templating.
- [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js
- [Nodemon](https://nodemon.io/): An utility that will monitor for any changes in your source and automatically restart your server.

