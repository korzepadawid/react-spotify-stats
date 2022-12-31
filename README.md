
![version](https://img.shields.io/badge/version-1.0-green)
[![Netlify Status](https://api.netlify.com/api/v1/badges/21537f49-99dd-46e1-b3d6-51fb720c9beb/deploy-status)](https://app.netlify.com/sites/statistify/deploys)


# Statistify 🎧

![Statistify dashboard](https://github.com/korzepadawid/statistify/blob/master/src/assets/statistify_dashboard.png?raw=true)

**Statistify** - the application for exploring your favourite artists, songs and recently played tracks on Spotify.
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
$ git clone https://github.com/korzepadawid/statistify.git
$ cd statistify
$ npm i
```

Go to [https://developer.spotify.com/dashboard/](https://developer.spotify.com/dashboard/), sign in and create a new app in your dashboard. You need to add a new redirect URI  (`http://localhost:3000/`).
The `.env` file template.
    
    REACT_APP_SPOTIFY_CLIENT_ID = <SPOTIFY_CLIENT_ID>
    REACT_APP_SPOTIFY_CLIENT_SECRET = <SPOTIFY_CLIENT_SECRET>
    REACT_APP_SPOTIFY_REDIRECT = http://localhost:3000/
    
You can find all the credentials in your [Spotify dashboard panel](https://developer.spotify.com/dashboard/)!

![Spotify dashboard](https://github.com/korzepadawid/Statistify/blob/master/src/assets/spotify_dashboard.png)

```sh
$ npm run start
```
