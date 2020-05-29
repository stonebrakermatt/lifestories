# lifestories - updated website

### setup

##### clone the repo

```
git clone git@github.com:stonebrakermatt/lifestories.git
cd lifestories
```

##### install packages and bundle css/js

```
npm install
npm run build-js
npm run build-css
```

##### run the server

```
npm start
```

### making changes

##### editing files

react source files are located in `/src/js` and the root file for the bundle is `src/js/index.js`


less source files are located in `/src/less` and the root file for the bundle is `src/less/style.less`

##### bundle react and compile less into css, respectively


```
npm run build-js
npm run build-css
```

### note
when you compile your less and react, you do not need to restart the server to see changes since the site only serves *static* files and the files have updated

simply keep editing, compiling and refreshing `localhost:3000` to observe your changes
