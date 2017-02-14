/* global cordova:false */
/* globals window */

var exec = cordova.require('cordova/exec'),
    utils = cordova.require('cordova/utils');

var CSDKTypekit = {
    launchFontBrowser: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'CSDKTypekit', 'launchFontBrowser', []);
    },
    syncFonts: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'CSDKTypekit', 'syncFonts', []);
    },
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

module.exports = CSDKTypekit;
