
# Webpack is used as a bundler and build tool...
# To run/serve the bundled version of our app in our local environment we need:
- webpack dev server
Webpack CLI is required for us to configure our webpack setup.

# So, Requirements:
1. webpack
2. webpack dev server
3. webpack CLI

# install the above:
npm install --save-dev webpack webpack-dev-server webpack-cli

# next:
add or edit the existing script as:
"start": "webpack-dev-server --config ./webpack.config.js --mode development"

running npm start will: start the webpack-dev-server with the configurations from "webpack.config.js" file in development mode.

# next:
Create your webpack config file.

# next:
configure the file...
# step 1: Set the entry point for webpack and blah blah blah....

# next:

# Setting up Babel for our project.

npm install --save-dev babel-core babel-loader babel-preset-env

# Wanna use JavaScript very new / experimental features?
- We have the idea of babel-preset stages.

npm install --save-dev babel-preset-stage-2

# Using Babel and its tools

- add a "babel" property in the package.json file with value of an "{}"
- inside the "{}" add the property "presets": [
    "env",
    "stage-2",
    "react" //jsx to js files
]

# Adding babel to the bundling process (...configure.js)
- refer to the package.json file

# Adding eslint

npm install --save-dev eslint
npm install --save-dev install eslint?

# Adding eslint loader
npm install --save-dev eslint-loader
npm install --save-dev install eslint-loader?

# Configuring eslint.

- create .eslintrc file
- define the rules
{
    "rules": {

    }
}

# Babel syntax also needs linting, therefore

npm install --save-dev babel-eslint

{
    parser: "babel-eslint",
    "rules": {
        "no-console": "error" //project to show error if code includes a "console" statement
        //for good practices/rules install airbnb eslint from npm.
    }
}


# A little bit more:

npm install eslint-plugin-import //ensures that import statements work
npm install eslint-plugin-jsx-a11y //accessibility

{
    parser: "babel-eslint",
    "rules": {
        "no-console": "error" //project to show error if code includes a "console" statement
        //for good practices/rules install airbnb eslint from npm.
    },
    "extends": ["airbnb-base"]
}


# And Finally..... Remember that configuration and setup changes all the time.
