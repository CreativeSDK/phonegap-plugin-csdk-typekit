/* global cordova:false */
/* globals window */

var exec = cordova.require('cordova/exec'),
    utils = cordova.require('cordova/utils');

/**
    @description A global object that lets you interact with the Creative SDK Typekit
    @global
*/
var CSDKTypekit = {
    /**
     * @description Launches the Font Browser.
     * @function launchFontBrowser
     * @memberof CSDKTypekit
     * @param {!launchsuccessCallback} successCallback - See type definition.
     * @param {!launchErrorCallback} errorCallback - See type definition.
     */
    launchFontBrowser: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'CSDKTypekit', 'launchFontBrowser', []);
    },
    /**
     * @description Returns a list of fonts availabe to the app.
     * @function syncFonts
     * @memberof CSDKTypekit
     * @param {!syncSuccessCallback} successCallback - See type definition.
     * @param {!syncErrorCallback} errorCallback - See type definition.
     */
    syncFonts: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'CSDKTypekit', 'syncFonts', []);
    },
    /**
     * @description Launches the Font Browser.
     * @function getFont
     * @memberof CSDKTypekit
     * @param {!successCallback} successCallback - See type definition.
     * @param {!errorCallback} errorCallback - See type definition.
     */
    getFont: function(successCallback, errorCallback, fontName) {
        exec(successCallback, errorCallback, 'CSDKTypekit', 'getFont', [fontName]);

        /*
        @font-face {
            font-family: HobeauxRococeaux-Regular;
            src: url("file:///data/user/0/io.cordova.hellocordova/cache/TypeKitCache/B4E4ABF85459121F0A4C98C6@AdobeID/dwxs/TkD-29003-47a69e32ea4de7994674bbd9af2e50599bde525f/sync/0")
        }
        body {
            font-family: HobeauxRococeaux-Regular
        }
        */
    }
};

/**
 * @description A callback to be used upon successful launch of font browser.
 *
 * @callback launchsuccessCallback
 */

/**
 * @description A callback to handle errors when attempting to launch of font browser.
 *
 * @callback launchErrorCallback
 * @param {String} error - Error message.
 */

/**
 * @description A callback to be used upon successful listing of available fonts.
 *
 * @callback syncSuccessCallback
 * @param {Array} fonts - lists of fonts.
 */

/**
 * @description A callback to handle errors when attempting to get the list of available fonts.
 *
 * @callback syncErrorCallback
 * @param {String} error - Error message.
 */

/**
 * @description A callback to be used upon successful download of a font.
 *
 * @callback successCallback
 * @param {Object} Font - the downloaded font.
 */

/**
 * @description A callback to handle errors when attempting to download a font.
 *
 * @callback errorCallback
 * @param {String} error - Error message.
 */

/**
 * @typedef {Object} Font - An object representing the downloaded font.
 * @property {String} [name] - the Postscript name of the font
 * @property {Boolean} [downloaded] - whether font has been successfull downloaded
 * @property {String} [filePath] - the full path the downloaded file
 */

module.exports = CSDKTypekit;
