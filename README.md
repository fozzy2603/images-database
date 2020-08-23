Front End (React) Developer Test


# Instructions:
1. Clone the repo
2. run `npm install`
3. run `npm start`
4. open `localhost:3000`

## Frameworks & Tools

1. Create a GitHub repository in which you will store the source files. Make sure it is public so we can view it.
2. Use React JavaScript library for building the application.
3. Use of Bootstrap, FontAwesome etc. is allowed.
4. Include a readme file in the root of your repository with instructions for how to deploy and run your app on a fresh machine. You can assume we have already cloned your Git repository, and that Node and NPM are already installed.

## Image Database — simulate a back-end database of images as follows:
1. Select URLs of at least 20 images that are publicly accessible (suggestion: use Google)
2. Create a JSON file that contains an array of metadata objects for each of the images:
    * File name
    * URL
    * File size
    * Last-modified date (you can make this up)
3. The above JSON file will simulate a back-end database of images. When your app accesses this file, it should do so asynchronously, just as calls to back-end APIs are asynchronous.

## Functionality — implement only these features:
1. When loaded, the app should automatically show the Photos page. Implement the Files, Sharing, etc. routes as well, but they should lead to empty pages that display only a title (as well as the sidebar navigation panel, of course).
2. Implement the general structure of the page, including all the menu links on the left.  Feel free to utilize any CSS framework of your choice for this purpose (Bootstrap or similar). The page does not need to look exactly the same as on the image, but the general layout should be preserved.
3. Display the images whose URLs are in our database.
4. Implement the 3 sorting methods that are shown.
5. Implement the total image size display that appears at the bottom of the sidebar.
6. You get bonus points for making the layout responsive.

> Send us a link to your GitHub repository.
