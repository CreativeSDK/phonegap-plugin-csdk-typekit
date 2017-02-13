
package com.adobe.phonegap.csdk;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.annotation.SuppressLint;
import android.graphics.Typeface;
import android.util.Log;

import com.adobe.creativesdk.typekit.AdobeTypekitFont;
import com.adobe.creativesdk.typekit.AdobeTypekitFontBrowser;
import com.adobe.creativesdk.typekit.AdobeTypekitManager;
import com.adobe.creativesdk.foundation.auth.AdobeUXAuthManager;
import com.adobe.creativesdk.typekit.TypekitNotification;
import com.adobe.creativesdk.typekit.UserNotAuthenticatedException;

import java.util.ArrayList;
import java.util.Observable;
import java.util.Observer;
import java.util.Random;

/**
* This class exposes methods in Cordova that can be called from JavaScript.
*/
public class Typekit extends CordovaPlugin implements Observer {
    private static final String LOG_TAG = "CreativeSDK_Typekit";

    private AdobeUXAuthManager mUXAuthManager = AdobeUXAuthManager.getSharedAuthManager();
    private AdobeTypekitManager mTypekitManager = AdobeTypekitManager.getInstance();

    private static CallbackContext mCallbackContext;
    private static ArrayList<AdobeTypekitFont> syncList;

     /**
     * Executes the request and returns PluginResult.
     *
     * @param action            The action to execute.
     * @param args              JSONArry of arguments for the plugin.
     * @param callbackContext   The callback context from which we were invoked.
     */
    @SuppressLint("NewApi")
    public boolean execute(String action, final JSONArray args, final CallbackContext callbackContext) throws JSONException {
        mCallbackContext = callbackContext;
        if (action.equals("launchFontBrowser")) {
            AdobeTypekitFontBrowser.launchActivity(this.cordova.getActivity());
            callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, args.getString(0)));
        } else if (action.equals("syncFonts")) {
            if (mUXAuthManager.isAuthenticated()) {
                // call sync
                try {
                    mTypekitManager.init(this.cordova.getActivity());
                    mTypekitManager.addObserver(this);
                    mTypekitManager.syncFonts();
                    PluginResult pluginResult = new PluginResult(PluginResult.Status.OK);
                    pluginResult.setKeepCallback(true);
                    callbackContext.sendPluginResult(pluginResult);
                } catch (UserNotAuthenticatedException e) {
                    callbackContext.error("user not logged in");
                }
                mTypekitManager.syncFonts();
            } else {
                callbackContext.error("user not logged in");
            }
        } else if (action.equals("getFont")) {
            String fontName = args.getString(0);
            Log.d(LOG_TAG, "getting font named = " + fontName);
            boolean found = false;
            if (syncList != null) {
                for (int i=0; i<syncList.size(); i++) {
                    AdobeTypekitFont font = syncList.get(i);
                    if (font.displayName().equals(fontName)) {
                        found = true;
                        font.getTypeface(new AdobeTypekitFont.ITypekitCallback<Typeface, String>() {
                            @Override
                            public void onSuccess(AdobeTypekitFont adobeTypekitFont, Typeface typeface) {
                                callbackContext.success();
                            }

                            @Override
                            public void onError(AdobeTypekitFont adobeTypekitFont, String s) {
                                callbackContext.error("could not download font");
                            }
                        });
                        callbackContext.success();
                        break;
                    }
                }
                if (!found) {
                    callbackContext.error("could not find font");
                }
            }
        } else {
            return false;
        }
        return true;
    }

    public void update(Observable observable, Object data) {

        TypekitNotification notification = (TypekitNotification) data;

        switch (notification.getTypekitEvent()) {

            case TypekitNotification.Event.FONT_SELECTION_SYNC_START:
                Log.d(LOG_TAG, "Syncing Typekit Synced Fonts list...");
                break;

            case TypekitNotification.Event.FONT_SELECTION_REFRESH:
                syncList = AdobeTypekitFont.getFonts();

                JSONArray fontList = new JSONArray();
                for (int i=0; i<syncList.size(); i++) {
                    AdobeTypekitFont font = syncList.get(i);
                    fontList.put(font.displayName());
                    Log.d(LOG_TAG, font.displayName());
                }

                mCallbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, fontList));
                break;

            case TypekitNotification.Event.FONT_SELECTION_SYNC_ERROR:
                Log.d(LOG_TAG, "Error: " + notification.getTypekitEvent());
                break;

            case TypekitNotification.Event.FONT_NETWORK_ERROR:
                Log.d(LOG_TAG, "Error: " + notification.getTypekitEvent());
                break;

            case TypekitNotification.Event.FONT_CACHE_EXPIRY:
                Log.d(LOG_TAG, "Warning: " + notification.getTypekitEvent());
                break;

            default:
                break;
        }
    }
}
