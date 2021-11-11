
# React (firebase) auth guide app

Firebase authentication guide app with create-react-app. The guide helps to understand how the app works itself. More information on the user roles and what not-logged in users, logged in users and admins will be able to do with this app.


## About compiling less to css

`npm run dev` script takes care of watching changes in the less folder and run the app. `FAST_REFRESH=false` is added to the start script to fix compile issues with create react app. Incase this doesn't work for you, see [development server of create-react-app does not auto refresh](https://stackoverflow.com/questions/43274925/development-server-of-create-react-app-does-not-auto-refresh) stackoverflow question or [hot Reload stopped working with React "^17.0.1"](https://github.com/facebook/create-react-app/issues/9904) github issue.