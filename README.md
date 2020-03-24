# Progressive Web Apps 
This project is based on a project for OBA: https://github.com/tnanhekhan/project-1-1920  
Live version: https://spreekbeurt-helper.herokuapp.com/

[![Build Status](https://travis-ci.com/tnanhekhan/progressive-web-apps-1920.svg?branch=master)](https://travis-ci.com/tnanhekhan/progressive-web-apps-1920)  

![poster](docs/poster.jpg "poster")

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Job Stories](#job-stories)
4. [Feedback Week 2](#feedback-week-2)
5. [Performance Enhancement](#performance-enhancement)  
6. [Built with](#built-with)

## Installation  
Clone this repo with your favourite GIT CLI or GUI.  
CD to this project folder.  
Run ` npm install ` to install this project and its necessary dependencies.  
Run ` npm build ` to build this project.

## Usage
Run `npm dev` and go to `localhost:3000` to see the dev version with nodemon development server.  
Run `npm start` and go to `localhost:3000` to see the normal version running.

## Job Stories
- When I am offline, i want to be notified by the app that i am offline so that I know I need to enable internet
- When I open the app, i want to be able to install the app so I have a progressive web app experience

## Feedback Week 2
Feedback over:
- Project structuur
- Api calls

## Performance Enhancement
### Perceived Load Speed
#### Minify
With the help of the gulp scripts `gulp-clean-css` and `gulp-imagemin` I have minified the css and images the app uses. The images show the size difference in the network tab of chrome dev tools. The total size decrease is 4kb or around 1.81% in this case. The load time however is somehow 1 ms longer on the version with the minified assets

Before: ![before-minify](docs/before-minify.png "before-minify") 

After: ![after-minify](docs/after-minify.png "after-minify")
#### Service Worker Caching
One of the requirements of this exercise is that we had to implement a service worker which caches some assets and shows an offline page. The images show below the time it takes to load the page. The version with the implemented service worker loads the page 24 ms (or 16%) faster than the version without a service worker.

No Service Worker: ![no-service-worker](docs/after-minify.png "no-service-worker") 

With Service Worker: ![with-service-worker](docs/service-worker-caching.png "with-service-worker")

## Built with
- [Node.js](https://nodejs.org/en/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js](https://expressjs.com/): A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [EJS](https://ejs.co/):Embedded JavaScript templating.
- [Axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js
- [Nodemon](https://nodemon.io/): An utility that will monitor for any changes in your source and automatically restart your server.

