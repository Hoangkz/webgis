"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7042],{26384:function(e,t,n){var o=n(41376),r=n(70492),a=n(42010),i=n(54354),p=n(31998),c=n(12810),u=n(92932),s=document.getElementById("popup"),l=document.getElementById("popup-content"),m=document.getElementById("popup-closer"),w=new r.Z({element:s,autoPan:!0,autoPanAnimation:{duration:250}});m.onclick=function(){return w.setPosition(void 0),m.blur(),!1};new o.Z({layers:[new a.Z({source:new p.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=get_your_own_D6rA4zTHduk6KOKTXzGB",tileSize:512})})],overlays:[w],target:"map",view:new i.ZP({center:[0,0],zoom:2})}).on("singleclick",(function(e){var t=e.coordinate,n=(0,u.V7)((0,c.bU)(t));l.innerHTML="<p>You clicked here:</p><code>"+n+"</code>",w.setPosition(t)}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(26384)}]);
//# sourceMappingURL=popup.js.map