# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. 

Using the Jasmine suite to write tests for some basic functionality of the app.
To view the final project please view [this link](http://madebykeegan.com/frontend-nanodegree-feedreader-master/)

## Tests within the feedreader.js file

### 1. RSS Feeds
- 1.1 check allFeeds variable have been defined
- 1.2 test ensures a URL is defined in the allFeeds object
- 1.3 test ensures a name is defined in the allFeeds object

### 2. The menu
- 2.1 test ensures the element is hidden by default
- 2.2 test ensures the menu changes visibility when clicked

### 3. Initial Entries
- 3.1 This test ensures when the loadFeed is called that there is at least one .entry element in the feed

### 4. New Feed Selection
- 4.1 This test ensures when a new feed is loaded the content actually changes

## How to Run
To run the website follow these methods
- download the repository, and directly open index.html with a browser
- create a HTTP server on the root folder using Python, apache or other similar web server. Steps below. 

1. Using the command prompt or terminal

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 9292
  ```
2. Open a browser and visit localhost:9292 (http://localhost:[your_port])
3. Application should run without any errors.