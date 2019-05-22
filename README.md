# Curiosity IO site

Site for [https://curiosityio.com](https://curiosityio.com). Pretty simple static site used for information purposes about Curiosity IO. 

# Development 

```
$> npm install 
$> npx pug _site/**/*.pug  _site/*.pug --watch 

Then, on another terminal session, 
$> npx firebase serve
```

# Deploy 

The site is hosted on Firebase Hosting CDN service. To deploy the site, it's pretty simple, really. 

```
$> npx firebase login
$> npx firebase deploy
```