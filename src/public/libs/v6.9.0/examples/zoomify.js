"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[890],{89886:function(e,t,n){var i=n(41376),o=n(42010),r=n(54354),s=n(60310),u="https://ol-zoomify.surge.sh/zoomify/",c=new s.Z({url:u,size:[4e3,3e3],crossOrigin:"anonymous",zDirection:-1}),a=c.getTileGrid().getExtent(),l=new s.Z({url:u,size:[4e3,3e3],crossOrigin:"anonymous",zDirection:-1,tilePixelRatio:2,tileSize:128}),g=new o.Z({source:c});new i.Z({layers:[g],target:"map",view:new r.ZP({resolutions:g.getSource().getTileGrid().getResolutions(),extent:a,constrainOnlyCenter:!0})}).getView().fit(a),document.getElementById("zoomifyProtocol").addEventListener("change",(function(e){var t=e.currentTarget.value;"zoomify"===t?g.setSource(c):"zoomifyretina"===t&&g.setSource(l)}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(89886)}]);
//# sourceMappingURL=zoomify.js.map