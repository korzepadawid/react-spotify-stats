
![version](https://img.shields.io/badge/version-1.0-green)
[![Netlify Status](https://api.netlify.com/api/v1/badges/21537f49-99dd-46e1-b3d6-51fb720c9beb/deploy-status)](https://app.netlify.com/sites/statistify/deploys)


# Statistify 🎧

![Statistify dashboard](https://github.com/korzepadawid/Statistify/blob/master/src/assets/statistify_dashboard.png)

**Statistify** is a web-app that provides Spotify users with the possibility to check their most listened artists, tracks on a different time ranges and also to view recently played songs.
[View live demo 🙈](https://statistify.netlify.app/)

## Build with 🧰
* [React](https://reactjs.org/)
* [create-react-app](https://create-react-app.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [styled-components](https://styled-components.com/)
* [axios](https://github.com/axios/axios)
* [Framer Motion](https://www.framer.com/motion/)
* [Spotify Web-Api](https://developer.spotify.com/documentation/web-api/)
* [antd](https://ant.design/)

## Installation 🛠️

Statistify requires [Node.js](https://nodejs.org/) to run.

```sh
$ git clone https://github.com/korzepadawid/Statistify.git
$ cd Statistify
$ npm install
```

Now you should visit [https://developer.spotify.com/dashboard/](https://developer.spotify.com/dashboard/), sign in and create a new app in your dashboard. You need to edit settings. The most important things are `Redirect URIs`. You need to add `http://localhost:3000/`

You must create `.env` file inside `Statistify` directory and fill with proper environment variables.

    REACT_APP_SPOTIFY_CLIENT_ID = <SPOTIFY_CLIENT_ID>
    REACT_APP_SPOTIFY_CLIENT_SECRET = <SPOTIFY_CLIENT_SECRET>
    REACT_APP_SPOTIFY_REDIRECT = http://localhost:3000/
    
You can find all the necessary data on your [Spotify dashboard panel](https://developer.spotify.com/dashboard/)!

![Spotify dashboard](https://github.com/korzepadawid/Statistify/blob/master/src/assets/spotify_dashboard.png)

```sh
$ npm run start
