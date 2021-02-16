# GitHub-Search-Application - Server

Express application for searching users and repositories in github with Redis cache.

# Steps to run the application

Make sure you have installed `node`  >= 12.x
Make sure you have installed `npm` or `yarn` globally

**Install Redis**

Refer [here](https://redis.io/download) to install in Linux or Mac.
Refer [here](https://github.com/microsoftarchive/redis) to install in windows

**Install all dependancies**

`Yarn install` or `npm install`

**Update Environment**

Create `.env.development` file under `env` folder.<br>
Copy the content from `env/.env.sample` and paste in `.env.development`. <br>

Create a Github Personal Acess Token. Refer [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

Update the personal access token in `GITHUB_ACCESS_TOKEN` in  `.env.development` 

<br>

**Start the app**

`yarn start:dev` or `npm start:dev`


# API - Documentation

API documentation and example is present in `api-documentation` folder.
> To test the API, install `REST Client`  VS Code extention. Refer [here](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

Sample response are available is `sample-response` folder



