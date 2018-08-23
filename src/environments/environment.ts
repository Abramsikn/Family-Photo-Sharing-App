// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//export const environment = {
//  production: false
//};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/* Running For Development */

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDi_SAbvXt0rAYooC5jH9Cs35h3I8NpkMo',
    authDomain: 'photosharingapp-348ad.firebaseapp.com',
    databaseURL: 'https://photosharingapp-348ad.firebaseio.com',
    projectId: 'photosharingapp-348ad',
    storageBucket: 'photosharingapp-348ad.appspot.com',
    messagingSenderId: '135942343518'
  }
};
