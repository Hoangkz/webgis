"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4432],{17583:function(e,t,r){var n,a=r(87103),o=r(41376),i=r(54354),u=r(77975),s=r(720),l=r(69039),c=r(79072),g=r(77138),w=r(40729),f=r(58685),Z=r(95783),d=r(14703),m=r(12174),h=r(52110),v=r(41372),k=r(42010),p=r(86923),y=new u.Z({color:"rgba(255, 153, 0, 0.8)"}),b=new s.Z({color:"rgba(255, 204, 0, 0.2)",width:1}),x=new u.Z({color:"#fff"}),P=new s.Z({color:"rgba(0, 0, 0, 0.6)",width:3}),M=new u.Z({color:"rgba(255, 255, 255, 0.01)"});function C(e){var t=e.get("name"),r=5+20*(parseFloat(t.substr(2))-5);return new l.ZP({geometry:e.getGeometry(),image:new c.Z({radius1:r,radius2:3,points:5,angle:Math.PI,fill:y,stroke:b})})}var S,z=null;z=new v.Z({source:new f.Z({distance:40,source:new Z.Z({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new a.ZP({extractStyles:!1})})}),style:function(e,t){t!=S&&(!function(e){n=0;for(var t,r,a=z.getSource().getFeatures(),o=a.length-1;o>=0;--o){var i,u=(t=a[o]).get("features"),s=(0,p.lJ)(),l=void 0;for(l=0,i=u.length;l<i;++l)(0,p.l7)(s,u[l].getGeometry().getExtent());n=Math.max(n,i),r=.25*((0,p.dz)(s)+(0,p.Cr)(s))/e,t.set("radius",r)}}(t),S=t);var r=e.get("features").length;return r>1?new l.ZP({image:new g.Z({radius:e.get("radius"),fill:new u.Z({color:[255,153,0,Math.min(.8,.4+r/n)]})}),text:new w.Z({text:r.toString(),fill:x,stroke:P})}):C(e.get("features")[0])}});var E=new k.Z({source:new d.Z({layer:"toner"})});new o.Z({layers:[E,z],interactions:(0,m.ce)().extend([new h.Z({condition:function(e){return"pointermove"==e.type||"singleclick"==e.type},style:function(e){for(var t,r=[new l.ZP({image:new g.Z({radius:e.get("radius"),fill:M})})],n=e.get("features"),a=n.length-1;a>=0;--a)t=n[a],r.push(C(t));return r}})]),target:"map",view:new i.ZP({center:[0,0],zoom:2})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(17583)}]);
//# sourceMappingURL=earthquake-clusters.js.map