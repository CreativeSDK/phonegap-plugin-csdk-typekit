## Members

<dl>
<dt><a href="#CSDKTypekit">CSDKTypekit</a></dt>
<dd><p>A global object that lets you interact with the Creative SDK Typekit</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#launchsuccessCallback">launchsuccessCallback</a> : <code>function</code></dt>
<dd><p>A callback to be used upon successful launch of font browser.</p>
</dd>
<dt><a href="#launchErrorCallback">launchErrorCallback</a> : <code>function</code></dt>
<dd><p>A callback to handle errors when attempting to launch of font browser.</p>
</dd>
<dt><a href="#syncSuccessCallback">syncSuccessCallback</a> : <code>function</code></dt>
<dd><p>A callback to be used upon successful listing of available fonts.</p>
</dd>
<dt><a href="#syncErrorCallback">syncErrorCallback</a> : <code>function</code></dt>
<dd><p>A callback to handle errors when attempting to get the list of available fonts.</p>
</dd>
<dt><a href="#successCallback">successCallback</a> : <code>function</code></dt>
<dd><p>A callback to be used upon successful download of a font.</p>
</dd>
<dt><a href="#errorCallback">errorCallback</a> : <code>function</code></dt>
<dd><p>A callback to handle errors when attempting to download a font.</p>
</dd>
<dt><a href="#Font">Font</a> : <code>Object</code></dt>
<dd><p>An object representing the downloaded font.</p>
</dd>
</dl>

<a name="CSDKTypekit"></a>

## CSDKTypekit
A global object that lets you interact with the Creative SDK Typekit

**Kind**: global variable  

* [CSDKTypekit](#CSDKTypekit)
    * [.launchFontBrowser(successCallback, errorCallback)](#CSDKTypekit.launchFontBrowser)
    * [.syncFonts(successCallback, errorCallback)](#CSDKTypekit.syncFonts)
    * [.getFont(successCallback, errorCallback)](#CSDKTypekit.getFont)

<a name="CSDKTypekit.launchFontBrowser"></a>

### CSDKTypekit.launchFontBrowser(successCallback, errorCallback)
Launches the Font Browser.

**Kind**: static method of <code>[CSDKTypekit](#CSDKTypekit)</code>  

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>[launchsuccessCallback](#launchsuccessCallback)</code> | See type definition. |
| errorCallback | <code>[launchErrorCallback](#launchErrorCallback)</code> | See type definition. |

<a name="CSDKTypekit.syncFonts"></a>

### CSDKTypekit.syncFonts(successCallback, errorCallback)
Returns a list of fonts availabe to the app.

**Kind**: static method of <code>[CSDKTypekit](#CSDKTypekit)</code>  

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>[syncSuccessCallback](#syncSuccessCallback)</code> | See type definition. |
| errorCallback | <code>[syncErrorCallback](#syncErrorCallback)</code> | See type definition. |

<a name="CSDKTypekit.getFont"></a>

### CSDKTypekit.getFont(successCallback, errorCallback)
Launches the Font Browser.

**Kind**: static method of <code>[CSDKTypekit](#CSDKTypekit)</code>  

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>[successCallback](#successCallback)</code> | See type definition. |
| errorCallback | <code>[errorCallback](#errorCallback)</code> | See type definition. |

<a name="launchsuccessCallback"></a>

## launchsuccessCallback : <code>function</code>
A callback to be used upon successful launch of font browser.

**Kind**: global typedef  
<a name="launchErrorCallback"></a>

## launchErrorCallback : <code>function</code>
A callback to handle errors when attempting to launch of font browser.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message. |

<a name="syncSuccessCallback"></a>

## syncSuccessCallback : <code>function</code>
A callback to be used upon successful listing of available fonts.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| fonts | <code>Array</code> | lists of fonts. |

<a name="syncErrorCallback"></a>

## syncErrorCallback : <code>function</code>
A callback to handle errors when attempting to get the list of available fonts.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message. |

<a name="successCallback"></a>

## successCallback : <code>function</code>
A callback to be used upon successful download of a font.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| Font | <code>Object</code> | the downloaded font. |

<a name="errorCallback"></a>

## errorCallback : <code>function</code>
A callback to handle errors when attempting to download a font.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>String</code> | Error message. |

<a name="Font"></a>

## Font : <code>Object</code>
An object representing the downloaded font.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | the Postscript name of the font |
| downloaded | <code>Boolean</code> | whether font has been successfull downloaded |
| filePath | <code>String</code> | the full path the downloaded file |

