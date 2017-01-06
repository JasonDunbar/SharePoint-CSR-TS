# SharePoint Client Side Rendering - Typescript boilerplate
## What this project is
This is a working example of a Typescript project designed to modularise and simplify the process of creating Client Side Rendering overrides for SharePoint 2013, 2016 and Online.

It utilises Node and NPM as the development and build framework - you should install these into your development environment if you plan to use this project as a starting point.

One of the ways in which we simplify the process of creating JSOM SharePoint code in Typescript is through the use of Typings. Here we're using @types\sharepoint in order to provide SharePoint object intellisense within the IDE.

## What it's not
It is not a complete working example and there's a certain degree of assumed knowledge in order to get this up and running; namely: knowledge of Typescript projects; how to set up a SharePoint list and how to set the value of JSLink in various places.

## Usage
1. Install Node in your development environment (v6 or above) 
2. Use NPM to install Typescript and Gulp as global modules
3. Clone this repository
4. Open a command line / terminal and execute 'npm install'
5. Create your overrides in the Typescript code contained within the /source directory
6. Create the SharePoint list(s)
7. Build and upload to SharePoint
   * to build, run `gulp bundle` from a command line / terminal
8. Get the output file `./dist/bundle.js` by default and upload to the SharePoint Asset Library for your site
9. Upload jQuery to the same place
10. Add the JSLink values where needed, pointing to the file
