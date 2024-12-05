
# ReactJS Foundmentals with nazmulalibiswas

## 01 Introduction to React:
**Prerequisite (HTML, CSS & JS)**
    
    ````
    >What is REACT?
        - React is a powerful, highly efficient, and open-source JavaScript library that revolutionizes the way we build dynamic and interactive user interfaces.
        - It was developed by Facebook in 2013 for building user interfaces (frontend).
        - Created by Jordan Walke, a Software Engineer at Facebook.
        - React enables the creation of complex UIs by using components, which are small, isolated pieces of code (For example: a header component)
        - Components are reusable, making development more efficient and organized.
        - React Component
            Message.js
            import React from 'react'
            export default function Message(){
                return (
                    <h1 style={{backgroundColor: "#ffa45b", textAlign: "center"}}>
                        Welcome to React
                    </h1>
                )
            }
            Use Component in React:

            <Message />
            
            <Message />

            <Message />

    >Why React?
        - Reusable component
        - Load fast
        - External Plugin
        - Around 45% of world's website use React
        - major brands like Facebook, Instagram, Yahoo, Netflix, Airbnb, Dropbox using react
    ````
## 02 Environment Setup:
**Setup Your Environment**
    
    ````
    >Download and Install VSCode
        - https://code.visualstudio.com
        - https://nodejs.org/en/download/
        After installation check node version : node --version
    ````

 ## 03 Create first React Project with Vite:
**Exiting Project Setup-Start Code with React**
    
    ````
    >Create Folder & Open it VS code with terminal
        - npm create vite@latest
        - Prject name: blog-project-react
        - Select `React`
        - Here the beginner stage need to start Select `JavaScript`
        - cd blog-project-react
        - npm install
        - npm run dev (When local http://localhost:3000 is available click ctrl+mouse click)

    >There are one index.html file is located
        - npm create vite@latest
        - Prject name: blog-project-react
        - Select `React`
        - Here the beginner stage need to start Select `JavaScript`
        - cd blog-project-react
        - npm install
        - npm run dev (When local http://localhost:3000 is available click ctrl+mouse click)
        - Here most important file is index.html & its includes
            <div id="root"> </div>//the react project is running in this root id
        - Src folder is includes by main.jsx file which is the main project file where are first connected in `index.html` files div root & finally access it to convert it for our `app.jsx` file in the app
            import { StrictMode } from 'react'
            import { createRoot } from 'react-dom/client'
            import './index.css'
            import App from './App.jsx'

            createRoot(document.getElementById('root')).render(
                <StrictMode>
                    <App />
                </StrictMode>,
            )

        - Src folder is includes by App.jsx file which is the main project file where are written for component

            function App() {
                return (
                    <>
                        <div>
                            nazmulalibiswas // this is showing on browser
                        </div>
                    </>
                )
            }

            export default App
        
        - Src folder is includes by App.css file which is the linked with into `app.jsx`
    ````
## 04 Expression on JSX & JS:
**JSX allows you to write HTML elements in JavaScript and place them in the DOM, while JavaScript is the language that powers the logic and functionality of your web application.**
    
    ````
    >This is beginner stage so we are creating only `react` with `javaScript`
    >Create Folder `Myapp` & Open it VS code with terminal
        - npx create-react-app my-app
        - cd my-app
        For example:
        - user@nazmulalibiswas MINGW64 ~/Desktop/My App (main)
            $ npx create-react-app my-app

            Creating a new React app in C:\Users\user\Desktop\My App\my-app.

            Installing packages. This might take a couple of minutes.
            Installing react, react-dom, and react-scripts with cra-template...

    We suggest that you begin by typing:

        cd my-app
        npm start

    Happy hacking!
    Compiled successfully!

    You can now view my-app in the browser.

        Local:            http://localhost:3000
        On Your Network:  http://192.168.0.102:3000
    >Now writing code on index.js file
        - import React from 'react';
                import ReactDOM from 'react-dom';


                ReactDOM.render(
                    <h1>Todo App</h1>,
                        document.getElementById('root')
                );//It will be showing on browser Todo App
        
         - import React from 'react';
                import ReactDOM from 'react-dom';


                ReactDOM.render(
                    <h1>Todo App</h1>
                    <h3>Call Family</h3>,
                        document.getElementById('root')
                );//It will be showing error because only one html element can rendering ability to DOM function so we have to need <div>
        - Here using html into javaScript
        import React from 'react';
        import ReactDOM from 'react-dom';


                ReactDOM.render(
                    <div>
                        <h1>Todo App</h1>
                        <h3>Todo App</h3>
                        <p>Todo App</p>
                        <p>11/19/2020</p>
                    </div>,
                        document.getElementById('root')
                );//Here the output showing on browser
        
        - Here using javaScript into html
        import React from 'react';
        import ReactDOM from 'react-dom';

        const todoTitle = "Call Family";
        const todoDesc ="Ipsum dolor amet lorem et stet dolor ipsum";
        const date = "11/11/2022";


        ReactDOM.render(
        <div>
            <h1>Todo App</h1>
            <h3>{todoTitle}</h3>
            <p>{todoDesc}</p>
            <p>{date}</p>
        </div>,
            document.getElementById('root')
        ); //Here the same output showing on browser
        
        - So JavaScript we can using in the html code but must be remember `{}` this bracket is needed using

        import React from 'react';
        import ReactDOM from 'react-dom';

        const todoTitle = "Call Family";
        const todoDesc ="Ipsum dolor amet lorem et stet dolor ipsum";
        const date = new Date();
        const dateName = date.getDate();
        const monthName = date.getMonth();
        const currentYear = date.getFullYear();

        ReactDOM.render(
        <div>
            <h1>Todo App</h1>
            <h3>{todoTitle}</h3>
            <p>{todoDesc}</p>
            <p>{dateName + "/" + monthName + "/" + currentYear}</p>
        </div>,
        document.getElementById('root')
        );
    ````


## Getting Started with Create React App
# Remember node mudles are not available so `npm install` first:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### 🧑‍💻 Contributors
- [@Nazmul Ali Biswas](https://github.com/nazmulalibiswas/)

### 🥰 Follow me
- [@Github](https://github.com/nazmulalibiswas/) 
- [@Facebook](https://facebook.com/nazmulalibiswas/) 
- [@Twitter](https://twitter.com/nazmulalibiswas/) 
- [@Instagram](https://instagram.com/nazmulalibiswas/) 
### React with nazmulalibiswas
