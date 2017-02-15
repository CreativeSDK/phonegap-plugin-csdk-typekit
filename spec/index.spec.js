/* globals require */

/*!
 * Module dependencies.
 */

var cordova = require('./helper/cordova'),
    CSDKTypekit = require('../www/Typekit'),
    execSpy,
    execWin,
    options;

/*!
 * Specification.
 */

describe('phonegap-plugin-csdk-typekit', function () {
    beforeEach(function () {
        execWin = jasmine.createSpy();
        execSpy = spyOn(cordova.required, 'cordova/exec').andCallFake(execWin);
    });

    describe('Typekit', function () {
        it('should exist', function () {
            expect(CSDKTypekit).toBeDefined();
            expect(typeof CSDKTypekit === 'object').toBe(true);
        });

        it('should contain a launchFontBrowser function', function () {
            expect(CSDKTypekit.launchFontBrowser).toBeDefined();
            expect(typeof CSDKTypekit.launchFontBrowser === 'function').toBe(true);
        });

        it('should contain a syncFonts function', function () {
            expect(CSDKTypekit.syncFonts).toBeDefined();
            expect(typeof CSDKTypekit.syncFonts === 'function').toBe(true);
        });

        it('should contain a getFont function', function () {
            expect(CSDKTypekit.getFont).toBeDefined();
            expect(typeof CSDKTypekit.getFont === 'function').toBe(true);
        });
    });

    describe('CSDKTypekit instance', function () {
        describe('cordova.exec', function () {
            it('should call cordova.exec on next process tick', function (done) {
                CSDKTypekit.launchFontBrowser(function(profile) {
                }, function() {});
                setTimeout(function () {
                    expect(execSpy).toHaveBeenCalledWith(
                        jasmine.any(Function),
                        jasmine.any(Function),
                        'CSDKTypekit',
                        'launchFontBrowser',
                        jasmine.any(Object)
                    );
                    done();
                }, 100);
            });

            it('should call cordova.exec on next process tick', function (done) {
                CSDKTypekit.syncFonts(function(profile) {
                }, function() {});
                setTimeout(function () {
                    expect(execSpy).toHaveBeenCalledWith(
                        jasmine.any(Function),
                        jasmine.any(Function),
                        'CSDKTypekit',
                        'syncFonts',
                        jasmine.any(Object)
                    );
                    done();
                }, 100);
            });

            it('should call cordova.exec on next process tick', function (done) {
                CSDKTypekit.getFont(function(profile) {
                }, function() {});
                setTimeout(function () {
                    expect(execSpy).toHaveBeenCalledWith(
                        jasmine.any(Function),
                        jasmine.any(Function),
                        'CSDKTypekit',
                        'getFont',
                        jasmine.any(Object)
                    );
                    done();
                }, 100);
            });
        });
    });
});
