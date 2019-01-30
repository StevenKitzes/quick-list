## Project Notes

This is a code challenge to showcase some of my skills by following the specification below:

"Given a ‘listing’ endpoint to the reddit API (https://www.reddit.com/r/subreddit/new.json?sort=new), display a list of reddit listings with the thumbnail and title. This list should be able to be paginated. Clicking on one of the rows should take the user to a view with the comments for that listing. 
Possible endpoints can be [hot, new, random, top] anything you like. An example URL would be http://www.reddit.com/r/all/new.json
You can deploy it publicly and give us the URL or you can send us the project with a readme to run it locally!"

## Installation and Usage Notes

To run this project locally, you will need an up-to-date version of NodeJS and NPM, as well as Git running on your machine.  The project was developed using NodeJS v10.15.0 with NPM 6.4.1.

To get started, clone the repository from GitHub, using the green button on the right side of this page:
https://github.com/StevenKitzes/quick-list

Once the project is cloned, navigate to the project directory on your command line, and use the command `npm install` to retrieve project dependencies (this might take a while, since React and the associated CRA are very dependency-heavy).  Finally, run `npm start` to run the front-end server.  Note that this will automatically attempt to open a browser tab pointed at the front-end server, but the front-end server may take a few moments longer to spool up, so the browser spin for a time before it finds something to connect to.  Note that you can manually navigate to localhost:3000 if needed.

### Usage

The page will load a listing of articles posted to the r/motorcycles subreddit, including a thumbnail and title for each.  The listings are paginated, so you can navigate forward and backward throughout the listings using the Last and Next buttons at the bottom of the page.  Clicking on an item will expand the comments for that item under its title.  Click again anywhere on the item or its comments will collapse them again.

### Desired Improvements

Currently, the subreddit r/motorcycles is hardcoded into this app, and the endpoint being used is always the 'new' endpoint.  Given more time, I would want to add some UI elements to make it possible for the user to manually select an alternative subreddit and sorting endpoint.

Comments are currently displayed as simply nested unordered list items.  In other words, they are not composed of React components.  Give more time, I would want to develop a more elaborate comment component for use here.

Collapsible comment sections would be convenient for items that have a large number of comments.

It would be nice to spend some more time making the app more attractive.

## Create-React-App notes follow

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
