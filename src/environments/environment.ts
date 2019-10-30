// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: "v1.1.1-dev-190522T22", // // require("moment-timezone").tz("Asia/Kolkata").format("YYMMDDTHH");
  // hostV1: "http://localhost:3000/cl/v1",
  firebase: {
    apiKey: "AIzaSyCiA5AFoPo67-sUxmpftcpakHh5SnhyN7w",
    authDomain: "booking-app-da643.firebaseapp.com",
    databaseURL: "https://booking-app-da643.firebaseio.com",
    projectId: "booking-app-da643",
    storageBucket: "booking-app-da643.appspot.com",
    messagingSenderId: "724182780619",
    appId: "1:724182780619:web:5704c334db9616b1a1a94e"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
