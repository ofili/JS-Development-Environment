/* This file contains references to the vendor libraries for this project.
This is used by webpack in the production build only*. A separate bundle
for vendor code is useful since it's unlikely to change as often as the application code.

All the vendor libraries we reference here will be written in the vendor.js file so they can
be cached until the build one of them changes. This avoids users having to download huge js files
anytime a line of code changes.

Any files not referenced here will bundled into main.js for production builds.
*/

/* eslint-disable no-unused-vars */

//import fetch from 'whatwg-fetch';
import {fetch as fetchPolyfill} from 'whatwg-fetch'

/* */
