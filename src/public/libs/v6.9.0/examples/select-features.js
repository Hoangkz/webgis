"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4363],{74142:function(e,n,t){var o=t(91118),c=t(41376),l=t(79847),u=t(52110),r=t(95783),s=t(54354),a=t(42010),i=t(41372),d=t(36104),w=new a.Z({source:new l.Z}),g=new i.Z({source:new r.Z({url:"data/geojson/countries.geojson",format:new o.Z})}),f=new c.Z({layers:[w,g],target:"map",view:new s.ZP({center:[0,0],zoom:2})}),Z=null,m=new u.Z,p=new u.Z({condition:d.V4}),h=new u.Z({condition:d.MJ}),k=new u.Z({condition:function(e){return(0,d.V4)(e)&&(0,d.Ko)(e)}}),v=document.getElementById("type"),y=function(){null!==Z&&f.removeInteraction(Z);var e=v.value;null!==(Z="singleclick"==e?m:"click"==e?p:"pointermove"==e?h:"altclick"==e?k:null)&&(f.addInteraction(Z),Z.on("select",(function(e){document.getElementById("status").innerHTML="&nbsp;"+e.target.getFeatures().getLength()+" selected features (last operation selected "+e.selected.length+" and deselected "+e.deselected.length+" features)"})))};v.onchange=y,y()}},function(e){var n=function(n){return e(e.s=n)};n(9877),n(74142)}]);
//# sourceMappingURL=select-features.js.map