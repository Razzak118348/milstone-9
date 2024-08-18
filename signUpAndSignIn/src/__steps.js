/***
 * 
 *                the steps for authentication 
 * 
 *            ---------------------------
 *               INITIAL SETUP/INSTALATION
 *             ----------------- -----------
 * 1. visit: console.firebase.google.com
 * 2.creat a project(skip google analytics)
 * 3.Register App(creat config) or go to projects overview and projects settings
 * 4. install firebase : npm install firebase 
 * 5. Add config file to your projects 
 * 6. Danger : Do not publish or make firebase config 
 * to public by pushing those to github 
 * 
 *       -------------------
 *           INTIGRATION 
 *        -----------------
 * 7. got to docs > build > authintication > web > get started  
 * 8. export app from firebase.init.js 
 * 9.Login.jsx : import getauth from firebase/auth
 * 10. creat const auth = getAuth(app)
 * 
 *           ----------------------
 *             PROVIDER SETUP 
 *            ----------------
 * 11) import googleAuthprovider 
 * 12.use signInWithPope as perameter as auth and providr
 * 13.activate sign-in method from authentication (google or anything)
 * 14 . change 127.0.0.1 to localhost
 *  
 * ---------------------
 * MORE AUTH PROVIDER 
 * --------------------
 * 1. active the auth provider (creat app , provider redicect url , cliend id , client secret)
 * 2. go  to settings and change creat  multiple accounts for each identity 
 * 
 */