#import <Cordova/CDVPlugin.h>


@interface CDVTypekit : CDVPlugin
{
    NSString *callbackId;
}

@property (nonatomic, retain) NSString *callbackId;

- (void)launchFontBrowser:(CDVInvokedUrlCommand*)command;
- (void)syncFonts:(CDVInvokedUrlCommand*)command;
- (void)getFont:(CDVInvokedUrlCommand*)command;

@end
