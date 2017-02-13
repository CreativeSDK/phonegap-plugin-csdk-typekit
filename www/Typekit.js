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
    }
};

module.exports = CSDKTypekit;
