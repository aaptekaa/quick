var OneTrustStub=function(e){"use strict";var t=new function(){this.optanonCookieName="OptanonConsent",this.optanonHtmlGroupData=[],this.optanonHostData=[],this.genVendorsData=[],this.vendorsServiceData=[],this.IABCookieValue="",this.oneTrustIABCookieName="eupubconsent",this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal",this.isStubReady=!0,this.geolocationCookiesParam="geolocation",this.EUCOUNTRIES=["BE","BG","CZ","DK","DE","EE","IE","GR","ES","FR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","GB","HR","LI","NO","IS"],this.stubFileName="otSDKStub",this.DATAFILEATTRIBUTE="data-domain-script",this.bannerScriptName="otBannerSdk.js",this.mobileOnlineURL=[],this.isMigratedURL=!1,this.migratedCCTID="[[OldCCTID]]",this.migratedDomainId="[[NewDomainId]]",this.userLocation={country:"",state:""}};(u=c=c||{})[u.Days=1]="Days",u[u.Weeks=7]="Weeks",u[u.Months=30]="Months",u[u.Years=365]="Years",(u=n=n||{}).Name="OTGPPConsent",u[u.ChunkSize=4e3]="ChunkSize",u.ChunkCountParam="GPPCookiesCount",(u={CPRA:8,8:"CPRA",CCPA:8})[8]="CCPA",u[u.CDPA=9]="CDPA",u[u.USNATIONAL=7]="USNATIONAL",u[u.COLORADO=10]="COLORADO",u[u.UCPA=11]="UCPA",u[u.CTDPA=12]="CTDPA";var i,n,a="otpreview",o=(n.Name,"PRODUCTION"),s=((u={})[c.Days]="PCenterVendorListLifespanDay",u[c.Weeks]="LfSpnWk",u[c.Months]="PCenterVendorListLifespanMonth",u[c.Years]="LfSpnYr",r.prototype.camelize=function(e){return e.split("-").map((function(e,t){return 0===t?e:e[0].toUpperCase()+e.slice(1)})).join("")},r.prototype.strToObj=function(e){for(var t={},i=e.split(";").map((function(e){return e.trim()})),n=0,a=void 0;n<i.length;++n)if(/:/.test(i[n])){if(!(a=i[n].split(/:(.+)/))[1])return null;t[this.camelize(a[0])]=a[1].trim()}return t},r);function r(){var e=this;this.implementThePolyfill=function(){var t=e,i=Element.prototype.setAttribute;return Element.prototype.setAttribute=function(e,n){if("style"!==e.toLowerCase()&&i.apply(this,[e,n]),"style"!==e.toLowerCase()||n||this.removeAttribute("style"),"style"===e.toLowerCase()&&n){this.removeAttribute("style");var a,o=t.strToObj(n);for(a in o)this.style[a]=o[a]}},!0}}(n=i=i||{}).ping="ping",n.addEventListener="addEventListener",n.removeEventListener="removeEventListener",n.hasSection="hasSection",n.getSection="getSection",n.getField="getField",n.getGPPData="getGPPData";var p=new function(){var e=this;this.LOCATOR_NAME="__gppLocator",this.win=window,this.customInit="CUSTOMINIT",this.init=function(){e.win.__gpp&&"function"==typeof e.win.__gpp||(e.win.__gpp=e.executeGppApi,window.addEventListener("message",e.messageHandler,!1),e.addFrame(e.LOCATOR_NAME))},this.removeGppApi=function(){delete e.win.__gpp;var t=document.querySelectorAll("iframe[name="+e.LOCATOR_NAME+"]")[0];t&&t.parentElement.removeChild(t)},this.executeGppApi=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var a=null==(a=e.win)?void 0:a.__gpp;if(a.queue=a.queue||[],a.events=a.events||[],!t.length||1===t.length&&"queue"===t[0])return a.queue;if(1===t.length&&"events"===t[0])return a.events;var o=t[0],s=1<t.length?t[1]:null,r=2<t.length?t[2]:null;switch(o){case i.ping:return e.getPingRequest(s);case i.addEventListener:return e.addEventListener(s,r);case i.removeEventListener:return e.removeEventListener(r);default:return void e.addToQueue(o,s,r)}},this.getPingRequest=function(e){var t={gppVersion:1,cmpStatus:"stub",cmpDisplayStatus:"hidden",apiSupport:["uspcav1","uspvav1"],currentAPI:"",cmpId:Number.parseInt("28")};return e&&e(t,!0),t},this.addFrame=function(t){var i,n=e.win.document,a=Boolean(e.win.frames[t]);return a||(n.body?((i=n.createElement("iframe")).style.cssText="display:none",i.name=t,i.setAttribute("title","GPP Locator"),n.body.appendChild(i)):setTimeout((function(){e.addFrame(t)}),5)),!a},this.addEventListener=function(t,i){var n,a=e.win.__gpp;return a.events=a.events||[],null!=(n=a)&&n.lastId||(a.lastId=0),a.lastId++,a.events.push({id:a.lastId,callback:t,parameter:i}),{eventName:"listenerRegistered",listenerId:a.lastId,data:!0,pingData:e.getPingRequest()}},this.removeEventListener=function(t){var i=!1,n=e.win.__gpp;return n.events=n.events||[],n.events=n.events.filter((function(e){return e.id.toString()!==t.toString()||!(i=!0)})),{eventName:"listenerRemoved",listenerId:t,data:i,pingData:e.getPingRequest()}},this.addToQueue=function(t,i,n){var a=e.win.__gpp;a.queue=a.queue||[],a.queue.push([t,i,n])},this.messageHandler=function(t){var i,n,a="string"==typeof t.data;try{i=a?JSON.parse(t.data):t.data}catch(e){i=null}i&&i.__gppCall&&(n=i.__gppCall,(0,e.win.__gpp)(n.command,(function(e,i){e={__gppReturn:{returnValue:e,success:i,callId:n.callId}},t&&t.source&&t.source.postMessage&&t.source.postMessage(a?JSON.stringify(e):e,t.origin||"*")}),n.parameter))},this.customInit||this.init()},u=(l.prototype.initConsentSDK=function(){this.initCustomEventPolyfill(),this.ensureHtmlGroupDataInitialised(),this.setStubScriptElement(),this.setOTDataLayer(),this.getParam(),this.fetchBannerSDKDependency(),this.captureNonce()},l.prototype.captureNonce=function(){this.nonce=t.stubScriptElement.nonce||t.stubScriptElement.getAttribute("nonce")||null},l.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL(),this.crossOrigin=t.stubScriptElement.getAttribute("crossorigin")||null,this.previewMode="true"===t.stubScriptElement.getAttribute("data-preview-mode"),this.otFetch(t.bannerDataParentURL,this.getLocation.bind(this))},l.prototype.setDomainIfBulkDomainEnabled=function(e){var i=e&&e.TenantFeatures,n=window.location.hostname,a=e.Domain,s=e.BulkDomainCheckUrl;i&&i.CookieV2BulkDomainManagement&&n!==a&&e.ScriptType===o&&((i=window.sessionStorage)&&i.getItem("bulkDomainMgmtEnabled")?this.handleBulkDomainMgmt({isValid:"true"===window.sessionStorage.getItem("bulkDomainMgmtEnabled")},e):(a={location:t.storageBaseURL.replace(/^https?:\/\//,""),domainId:this.domainId,url:n},this.otFetch(s,this.handleBulkDomainMgmt,!1,a,e)))},l.prototype.getLocation=function(e){if(this.setDomainIfBulkDomainEnabled(e),this.updateVersion(e),(e.TenantFeatures&&e.TenantFeatures.CookieV2CSP||e.CookieV2CSPEnabled)&&this.nonce&&(this.setAttributePolyfillIsActive=!0,(new s).implementThePolyfill()),!e.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(e);var i,n=window;n.OneTrust&&n.OneTrust.geolocationResponse?(n=n.OneTrust.geolocationResponse,this.setGeoLocation(n.countryCode,n.stateCode),this.addBannerSDKScript(e)):(n=this.readCookieParam(t.optanonCookieName,t.geolocationCookiesParam))||e.SkipGeolocation?(i=n.split(";")[0],n=n.split(";")[1],this.setGeoLocation(i,n),this.addBannerSDKScript(e)):this.getGeoLocation(e)},l.prototype.handleBulkDomainMgmt=function(e,t){window.sessionStorage&&window.sessionStorage.setItem("bulkDomainMgmtEnabled",JSON.stringify(e.isValid)),e.isValid&&(t.Domain=window.location.hostname)},l.prototype.getGeolocationURL=function(e){e.TenantFeatures;var i=""+t.stubScriptElement.getAttribute("src").split(t.stubFileName)[0]+e.Version;return new RegExp("^file://","i").test(i)&&e.MobileSDK?(i="/"+e.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js",t.storageBaseURL+i):e.GeolocationUrl},l.prototype.geoLocationJsonCallback=function(e,t){t&&this.setGeoLocation(t.country,t.state),this.addBannerSDKScript(e)},l.prototype.getGeoLocation=function(e){var t=this.getGeolocationURL(e);this.otFetch(t,this.geoLocationJsonCallback.bind(this,e),!0)},l.prototype.setOTDataLayer=function(){var e="data-dLayer-ignore",i=t.stubScriptElement.hasAttribute(e);e=t.stubScriptElement.getAttribute(e);this.otDataLayer={ignore:i&&"true"===e||i&&""===e,name:t.stubScriptElement.getAttribute("data-dLayer-name")||"dataLayer"}},l.prototype.setGeoLocation=function(e,i){t.userLocation={country:e,state:i=void 0===i?"":i}},l.prototype.otFetch=function(e,i,n,a,o){void 0===n&&(n=!1),void 0===a&&(a=null);var s=window.sessionStorage&&window.sessionStorage.getItem("otPreviewData");if(new RegExp("^file://","i").test(e))this.otFetchOfflineFile(e,i);else if(0<=e.indexOf("/consent/")&&this.previewMode&&s)s=JSON.parse(s).domainJson,i(s);else{t.mobileOnlineURL.push(e);var r=new XMLHttpRequest;if(r.onload=function(e){var t;this&&this.responseText?t=this.responseText:e&&e.target&&(t=e.target.responseText),o?i(JSON.parse(t),o):i(JSON.parse(t))},r.onerror=function(){i()},r.open("GET",e),r.withCredentials=!1,n&&r.setRequestHeader("accept","application/json"),a)for(var p in a)r.setRequestHeader(p,a[p]);r.send()}},l.prototype.otFetchOfflineFile=function(e,t){var i=(e=e.replace(".json",".js")).split("/"),n=i[i.length-1].split(".js")[0];this.jsonp(e,(function(){t(window[n])}))},l.prototype.jsonp=function(e,i){var n=document.createElement("script");n.setAttribute("src",e),this.nonce&&n.setAttribute("nonce",this.nonce),n.async=!0,n.type="text/javascript",this.crossOrigin&&n.setAttribute("crossorigin",this.crossOrigin),document.getElementsByTagName("head")[0].appendChild(n),new RegExp("^file://","i").test(e)||t.mobileOnlineURL.push(e),i&&(n.onload=n.onerror=function(){i()})},l.prototype.getRegionSet=function(e){var i,n,a,o=t.userLocation,s=e.RuleSet.filter((function(e){return!0===e.Default}));if(!o.country&&!o.state)return s&&0<s.length?s[0]:null;for(var r=o.state.toLowerCase(),p=o.country.toLowerCase(),u=0;u<e.RuleSet.length;u++)if(!0===e.RuleSet[u].Global)a=e.RuleSet[u];else{var l=e.RuleSet[u].States;if(l[p]&&0<=l[p].indexOf(r)){n=e.RuleSet[u];break}0<=e.RuleSet[u].Countries.indexOf(p)&&(i=e.RuleSet[u])}return n||i||a},l.prototype.ensureHtmlGroupDataInitialised=function(){this.initializeIABData(),this.initializeGroupData(),this.initializeHostData(),this.initializeGenVenData()},l.prototype.initializeGroupData=function(){var e=this.readCookieParam(t.optanonCookieName,"groups");e&&(t.optanonHtmlGroupData=this.deserialiseStringToArray(e))},l.prototype.initializeHostData=function(){var e=this.readCookieParam(t.optanonCookieName,"hosts");e&&(t.optanonHostData=this.deserialiseStringToArray(e))},l.prototype.initializeGenVenData=function(){var e=this.readCookieParam(t.optanonCookieName,"genVendors");e&&(t.genVendorsData=this.deserialiseStringToArray(e))},l.prototype.initializeIABData=function(){this.validateIABGDPRApplied(),this.validateIABGlobalScope()},l.prototype.validateIABGlobalScope=function(){var e=this.readCookieParam(t.optanonCookieName,t.oneTrustIsIABCrossConsentEnableParam);e?"true"===e?(t.hasIABGlobalScope=!0,t.isStubReady=!1):(t.hasIABGlobalScope=!1,t.IABCookieValue=this.getCookie(t.oneTrustIABCookieName)):t.isStubReady=!1},l.prototype.validateIABGDPRApplied=function(){var e=this.readCookieParam(t.optanonCookieName,t.geolocationCookiesParam).split(";")[0];e?this.isBoolean(e)?t.oneTrustIABgdprAppliesGlobally="true"===e:t.oneTrustIABgdprAppliesGlobally=0<=t.EUCOUNTRIES.indexOf(e):t.isStubReady=!1},l.prototype.isBoolean=function(e){return"true"===e||"false"===e},l.prototype.readCookieParam=function(e,t){var i,n,a,o;if(e=this.getCookie(e)){for(n={},a=e.split("&"),i=0;i<a.length;i+=1)o=a[i].split("="),n[decodeURIComponent(o[0])]=decodeURIComponent(o[1]).replace(/\+/g," ");return t&&n[t]?n[t]:t&&!n[t]?"":n}return""},l.prototype.getCookie=function(e){if(this.isAmp){var t=JSON.parse(window.localStorage.getItem(this.domainId))||{};if(t)return t[e]||null}for(var i,n=e+"=",a=document.cookie.split(";"),o=0;o<a.length;o+=1){for(i=a[o];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return null},l.prototype.updateGtmMacros=function(){for(var e=[],i=t.optanonHtmlGroupData.length,n=0;n<i;n++)this.endsWith(t.optanonHtmlGroupData[n],":1")&&e.push(t.optanonHtmlGroupData[n].replace(":1",""));for(i=t.optanonHostData.length,n=0;n<i;n++)this.endsWith(t.optanonHostData[n],":1")&&e.push(t.optanonHostData[n].replace(":1",""));for(i=t.genVendorsData.length,n=0;n<i;n++)this.endsWith(t.genVendorsData[n],":1")&&e.push(t.genVendorsData[n].replace(":1",""));for(i=t.vendorsServiceData.length,n=0;n<i;n++)this.endsWith(t.vendorsServiceData[n],":1")&&e.push(t.vendorsServiceData[n].replace(":1",""));var a,o=","+this.serialiseArrayToString(e)+",",s=(window.OnetrustActiveGroups=o,window.OptanonActiveGroups=o,window),r=(this.otDataLayer.ignore||void 0===s[this.otDataLayer.name]?this.otDataLayer.ignore||(s[this.otDataLayer.name]=[{event:"OneTrustLoaded",OnetrustActiveGroups:o},{event:"OptanonLoaded",OptanonActiveGroups:o}]):s[this.otDataLayer.name].constructor===Array&&(s[this.otDataLayer.name].push({OnetrustActiveGroups:o}),s[this.otDataLayer.name].push({OptanonActiveGroups:o})),new CustomEvent("consent.onetrust",{detail:e}));!this.otDataLayer.ignore&&e.length&&(s[this.otDataLayer.name].constructor===Array&&s[this.otDataLayer.name].push({event:"OneTrustGroupsUpdated",OnetrustActiveGroups:o}),a=new CustomEvent("OneTrustGroupsUpdated",{detail:e})),setTimeout((function(){e.length&&window.dispatchEvent(r),a&&window.dispatchEvent(a)}))},l.prototype.deserialiseStringToArray=function(e){return e?e.split(","):[]},l.prototype.endsWith=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},l.prototype.serialiseArrayToString=function(e){return e.toString()},l.prototype.setStubScriptElement=function(){t.stubScriptElement=document.querySelector("script[src*='"+t.stubFileName+"']");var e=t.stubScriptElement&&0<=t.stubScriptElement.getAttribute("src").indexOf("did=");t.stubScriptElement&&t.stubScriptElement.hasAttribute(t.DATAFILEATTRIBUTE)?this.domainId=t.stubScriptElement.getAttribute(t.DATAFILEATTRIBUTE).trim():e?this.domainId=t.stubScriptElement.getAttribute("src").split("did=")[1]:t.stubScriptElement||(t.stubScriptElement=document.querySelector("script[src*='"+t.migratedCCTID+"']"),t.stubScriptElement&&(t.isMigratedURL=!0,this.domainId=t.migratedDomainId.trim()))},l.prototype.setDomainDataFileURL=function(){var e=t.stubScriptElement.getAttribute("src"),i=-1<e.indexOf("/consent");e&&(t.isMigratedURL?t.storageBaseURL=e.split("/consent/"+t.migratedCCTID)[0]:t.storageBaseURL=(i?e.split("/consent"):e.split("/scripttemplates/"+t.stubFileName))[0]),this.storageBaseURL=t.storageBaseURL,this.isPreview&&-1===this.domainId.indexOf("test")?this.domainId=this.domainId+"-test":this.isPreview=!1,t.bannerBaseDataURL=t.storageBaseURL&&t.storageBaseURL+"/consent/"+this.domainId,t.bannerDataParentURL=t.bannerBaseDataURL+"/"+this.domainId+".json"},l.prototype.initCustomEventPolyfill=function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e},l.prototype.removeTcf=function(){delete window.__tcfapi;var e=document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];e&&e.parentElement.removeChild(e)},l.prototype.getParamForIE=function(){return{get:function(e){return null===(e=new RegExp("[?&]"+e+"=([^&#]*)").exec(window.location.search))?null:decodeURI(e[1])||""}}},l.prototype.getParam=function(){window.document.documentMode||!window.URLSearchParams?this.urlParams=this.getParamForIE():this.urlParams=new URLSearchParams(window.location.search);var e="true"===this.urlParams.get("otreset"),t="true"===this.urlParams.get("otpreview"),i=(this.geoFromUrl=(this.urlParams.get("otgeo")||"").toLowerCase(),this.readCookieParam(a,"expiry")),n=this.readCookieParam(a,"geo");this.isReset=e||i&&new Date(i)<new Date,this.isPreview=!this.isReset&&(t||i&&new Date(i)>new Date),this.setGeoParam(this.geoFromUrl||n)},l.prototype.setGeoParam=function(e){var t;e&&((t=window).OneTrust||(t.OneTrust={}),e=e.split(","),t.OneTrust.geolocationResponse={countryCode:e[0],stateCode:e[1]})},l.prototype.updateVersion=function(e){"debug"!==this.buildType&&"cybuild"!==this.buildType||(e.Version="202307.1.0")},l);function l(){var e=this;this.iabType=null,this.iabTypeAdded=!0,this.crossOrigin=null,this.isAmp=!1,this.domainId="",this.isReset=!1,this.isPreview=!1,this.geoFromUrl="",this.nonce="",this.setAttributePolyfillIsActive=!1,this.storageBaseURL="",this.charset=null,this.buildType="undefined",this.addBannerSDKScript=function(i){var n=e.getRegionSet(i),a=(n.GCEnable||(e.updateGtmMacros(),e.gtmUpdated=!0),e.iabTypeAdded&&("IAB"!==n.Type&&"IAB2"!==n.Type||(e.iabType=n.Type,e.intializeIabStub()),"IAB2"!==n.Type)&&e.removeTcf(),n.IsGPPEnabled?p.init():p.removeGppApi(),t.stubScriptElement.cloneNode(!0)),o=i.UseSDKRefactor?(t.isMigratedURL&&(a.src=t.storageBaseURL+"/scripttemplates/new/scripttemplates/"+t.stubFileName+".js"),t.storageBaseURL+"/scripttemplates/new/scripttemplates/"+i.Version+"/"+t.bannerScriptName):"5.11.0"===i.Version?(t.isMigratedURL&&(a.src=t.storageBaseURL+"/scripttemplates/old/scripttemplates/"+t.stubFileName+".js"),t.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+t.bannerScriptName):(t.isMigratedURL&&(a.src=t.storageBaseURL+"/scripttemplates/"+t.stubFileName+".js"),t.storageBaseURL+"/scripttemplates/"+i.Version+"/"+t.bannerScriptName);["charset","data-language","data-document-language","data-domain-script","crossorigin","data-ignore-ga"].forEach((function(e){t.stubScriptElement.getAttribute(e)&&a.setAttribute(e,t.stubScriptElement.getAttribute(e))})),e.charset=t.stubScriptElement.getAttribute("charset"),e.isAmp=!!t.stubScriptElement.getAttribute("amp"),window.otStubData={bannerBaseDataURL:t.bannerBaseDataURL,crossOrigin:e.crossOrigin,domainData:i,domainId:e.domainId,geoFromUrl:e.geoFromUrl,isAmp:e.isAmp,isPreview:e.isPreview,isReset:e.isReset,mobileOnlineURL:t.mobileOnlineURL,nonce:e.nonce,otDataLayer:e.otDataLayer,regionRule:n,setAttributePolyfillIsActive:e.setAttributePolyfillIsActive,storageBaseURL:e.storageBaseURL,stubElement:a,urlParams:e.urlParams,userLocation:t.userLocation,gtmUpdated:e.gtmUpdated,previewMode:e.previewMode,charset:e.charset},e.jsonp(o,null)},this.intializeIabStub=function(){var t=window;e.iabTypeAdded?("IAB"===e.iabType?void 0===t.__cmp&&(window.__cmp=e.executeCmpApi):void 0===t.__tcfapi&&(window.__tcfapi=e.executeTcfApi),e.addIabFrame()):e.addBackwardIabFrame(),t.receiveOTMessage=e.receiveIabMessage,(t.attachEvent||window.addEventListener)("message",t.receiveOTMessage,!1)},this.addIabFrame=function(){var t=window,i="IAB"===e.iabType?"__cmpLocator":"__tcfapiLocator";!t.frames[i]&&(t.document.body?e.addLocator(i,"CMP"):setTimeout(e.addIabFrame,5))},this.addBackwardIabFrame=function(){var t=window,i="__cmpLocator";!!t.frames[i]||(t.document.body?e.addLocator(i,"CMP"):setTimeout(e.addIabFrame,5)),i="__tcfapiLocator";!t.frames[i]&&(t.document.body?e.addLocator(i,"TCF"):setTimeout(e.addIabFrame,5))},this.addLocator=function(e,t){var i=window,n=i.document.createElement("iframe");(function(e,t,i){function n(e){return e?(";"!==(e=e.trim()).charAt(e.length-1)&&(e+=";"),e.trim()):null}void 0===i&&(i=!1);var a=n(e.getAttribute("style")),o=n(t);t="",t=i&&a?function(){for(var e=a.split(";").concat(o.split(";")).filter((function(e){return 0!==e.length})),t="",i="",n=e.length-1;0<=n;n--){var s=e[n].substring(0,e[n].indexOf(":")+1).trim();t.indexOf(s)<0&&(t+=s,i+=e[n]+";")}return i}():o,e.setAttribute("style",t)})(n,"display: none;",!0),n.name=e,n.setAttribute("title",t+" Locator"),i.document.body.appendChild(n)},this.receiveIabMessage=function(t){var i,n,a,o,s,r,p="string"==typeof t.data,u={};try{u=p?JSON.parse(t.data):t.data}catch(s){}u.__cmpCall&&"IAB"===e.iabType?(i=u.__cmpCall.callId,n=u.__cmpCall.command,s=u.__cmpCall.parameter,e.executeCmpApi(n,s,(function(e,a){e={__cmpReturn:{returnValue:e,success:a,callId:i,command:n}},t.source.postMessage(p?JSON.stringify(e):e,t.origin)}))):u.__cmpCall&&"IAB2"===e.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1"),u.__tcfapiCall&&"IAB2"===e.iabType?(a=u.__tcfapiCall.callId,o=u.__tcfapiCall.command,s=u.__tcfapiCall.parameter,r=u.__tcfapiCall.version,e.executeTcfApi(o,s,(function(e,i){e={__tcfapiReturn:{returnValue:e,success:i,callId:a,command:o}},t&&t.source&&t.source.postMessage&&t.source.postMessage(p?JSON.stringify(e):e,"*")}),r)):u.__tcfapiCall&&"IAB"===e.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")},this.executeCmpApi=function(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];e.iabType="IAB";var a=i[0],o=i[1],s=i[2];if("function"==typeof s&&a)if(t.isStubReady&&t.IABCookieValue)switch(a){case"ping":e.getPingRequest(s,!0);break;case"getConsentData":e.getConsentDataRequest(s);break;default:e.addToQueue(a,o,s)}else e.addToQueue(a,o,s)},this.executeTcfApi=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];if(e.iabType="IAB2",!t.length)return window.__tcfapi.a||[];var n=t[0],a=t[1],o=t[2],s=t[3];"function"==typeof o&&n&&("ping"===n?e.getPingRequest(o):e.addToQueue(n,a,o,s))},this.addToQueue=function(t,i,n,a){var o=window,s="IAB"===e.iabType?"__cmp":"__tcfapi";o[s].a=o[s].a||[],o[s].a.push([t,i,n,a])},this.getPingRequest=function(i,n){var a,o;void 0===n&&(n=!1),i&&(o=!(a={}),"IAB"===e.iabType?(a={gdprAppliesGlobally:t.oneTrustIABgdprAppliesGlobally,cmpLoaded:n},o=!0):"IAB2"===e.iabType&&(a={gdprApplies:t.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,tcfPolicyVersion:void 0},o=!0),i(a,o))},this.getConsentDataRequest=function(e){e&&t.IABCookieValue&&e({gdprApplies:t.oneTrustIABgdprAppliesGlobally,hasGlobalScope:t.hasIABGlobalScope,consentData:t.IABCookieValue},!0)},this.initConsentSDK()}var c=new u;return e.OtSDKStub=u,e.otSdkStub=c,e}({});