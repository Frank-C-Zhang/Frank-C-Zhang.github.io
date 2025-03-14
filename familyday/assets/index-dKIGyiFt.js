import{d as R,c as z,a as U,o as H,b as d,e as W,t as C,_ as G,r as nt,u as lt,F as rt,f as st,g as it,m as at}from"./index-Dv0NDokM.js";function ht(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var q={exports:{}},mt=q.exports,ut;function $t(){return ut||(ut=1,function(y,g){(function(w,S){y.exports=S()})(mt,function(){var w=1e3,S=6e4,v=36e5,l="millisecond",c="second",b="minute",$="hour",O="day",V="week",M="month",K="quarter",k="year",L="date",X="Invalid Date",ot=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ct=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ft={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},P=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},dt={s:P,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+P(r,2,"0")+":"+P(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,M),i=t-e<0,a=n.clone().add(r+(i?-1:1),M);return+(-(r+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M,y:k,w:V,d:O,D:L,h:$,m:b,s:c,ms:l,Q:K}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},B="en",j={};j[B]=ft;var tt="$isDayjsObject",Q=function(s){return s instanceof J||!(!s||!s[tt])},E=function s(n,t,r){var e;if(!n)return B;if(typeof n=="string"){var i=n.toLowerCase();j[i]&&(e=i),t&&(j[i]=t,e=i);var a=n.split("-");if(!e&&a.length>1)return s(a[0])}else{var o=n.name;j[o]=n,e=o}return!r&&e&&(B=e),e||!r&&B},h=function(s,n){if(Q(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new J(t)},u=dt;u.l=E,u.i=Q,u.w=function(s,n){return h(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var J=function(){function s(t){this.$L=E(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[tt]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(ot);if(a){var o=a[2]-1||0,f=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,f)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,f)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==X},n.isSame=function(t,r){var e=h(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return h(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<h(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!u.u(r)||r,a=u.p(t),o=function(T,x){var Y=u.w(e.$u?Date.UTC(e.$y,x,T):new Date(e.$y,x,T),e);return i?Y:Y.endOf(O)},f=function(T,x){return u.w(e.toDate()[T].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(x)),e)},m=this.$W,p=this.$M,D=this.$D,N="set"+(this.$u?"UTC":"");switch(a){case k:return i?o(1,0):o(31,11);case M:return i?o(1,p):o(0,p+1);case V:var I=this.$locale().weekStart||0,F=(m<I?m+7:m)-I;return o(i?D-F:D+(6-F),p);case O:case L:return f(N+"Hours",0);case $:return f(N+"Minutes",1);case b:return f(N+"Seconds",2);case c:return f(N+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=u.p(t),a="set"+(this.$u?"UTC":""),o=(e={},e[O]=a+"Date",e[L]=a+"Date",e[M]=a+"Month",e[k]=a+"FullYear",e[$]=a+"Hours",e[b]=a+"Minutes",e[c]=a+"Seconds",e[l]=a+"Milliseconds",e)[i],f=i===O?this.$D+(r-this.$W):r;if(i===M||i===k){var m=this.clone().set(L,1);m.$d[o](f),m.init(),this.$d=m.set(L,Math.min(this.$D,m.daysInMonth())).$d}else o&&this.$d[o](f);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var a=u.p(r),o=function(p){var D=h(i);return u.w(D.date(D.date()+Math.round(p*t)),i)};if(a===M)return this.set(M,this.$M+t);if(a===k)return this.set(k,this.$y+t);if(a===O)return o(1);if(a===V)return o(7);var f=(e={},e[b]=S,e[$]=v,e[c]=w,e)[a]||1,m=this.$d.getTime()+t*f;return u.w(m,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||X;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=u.z(this),o=this.$H,f=this.$m,m=this.$M,p=e.weekdays,D=e.months,N=e.meridiem,I=function(x,Y,A,Z){return x&&(x[Y]||x(r,i))||A[Y].slice(0,Z)},F=function(x){return u.s(o%12||12,x,"0")},T=N||function(x,Y,A){var Z=x<12?"AM":"PM";return A?Z.toLowerCase():Z};return i.replace(ct,function(x,Y){return Y||function(A){switch(A){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return m+1;case"MM":return u.s(m+1,2,"0");case"MMM":return I(e.monthsShort,m,D,3);case"MMMM":return I(D,m);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return I(e.weekdaysMin,r.$W,p,2);case"ddd":return I(e.weekdaysShort,r.$W,p,3);case"dddd":return p[r.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return F(1);case"hh":return F(2);case"a":return T(o,f,!0);case"A":return T(o,f,!1);case"m":return String(f);case"mm":return u.s(f,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return a}return null}(x)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,a=this,o=u.p(r),f=h(t),m=(f.utcOffset()-this.utcOffset())*S,p=this-f,D=function(){return u.m(a,f)};switch(o){case k:i=D()/12;break;case M:i=D();break;case K:i=D()/3;break;case V:i=(p-m)/6048e5;break;case O:i=(p-m)/864e5;break;case $:i=p/v;break;case b:i=p/S;break;case c:i=p/w;break;default:i=p}return e?i:u.a(i)},n.daysInMonth=function(){return this.endOf(M).$D},n.$locale=function(){return j[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=E(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),et=J.prototype;return h.prototype=et,[["$ms",l],["$s",c],["$m",b],["$H",$],["$W",O],["$M",M],["$y",k],["$D",L]].forEach(function(s){et[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),h.extend=function(s,n){return s.$i||(s(n,J,h),s.$i=!0),h},h.locale=E,h.isDayjs=Q,h.unix=function(s){return h(1e3*s)},h.en=j[B],h.Ls=j,h.p={},h})}(q)),q.exports}var pt=$t();const _=ht(pt),yt={class:"day-item h-[100px] flex items-center justify-between"},xt={class:"flex-1"},vt={class:"text-[16px]"},_t={class:"text-[14px] mt-[5px] text-gray-400"},Dt={class:"text-red-400 text-[18px]"},Mt={class:"text-[28px]"},gt=R({__name:"DayItem",props:{icon:{},text:{},time:{}},setup(y){const g=y,w=z(()=>_(g.time).format("YYYY年MM月DD日")),S=z(()=>_().diff(_(_(g.time).format("YYYY-MM-DD")),"day"));return(v,l)=>(H(),U("div",yt,[d("div",xt,[d("div",vt,[l[0]||(l[0]=d("i",{class:""},null,-1)),W(C(v.text),1)]),d("div",_t,C(w.value),1)]),d("div",Dt,[l[1]||(l[1]=W(" 已经")),d("span",Mt,C(S.value),1),l[2]||(l[2]=W("天 "))])]))}}),St=G(gt,[["__scopeId","data-v-2c4bf7b1"]]),bt={class:"day-item h-[100px] flex items-center justify-between"},wt={class:"flex-1"},Ot={class:"text-[16px]"},kt={class:"text-[14px] mt-[5px] text-gray-400"},Yt={class:"text-blue-300 text-[18px]"},jt={class:"text-[28px]"},It=R({__name:"DayItem1",props:{icon:{},text:{},time:{}},setup(y){const g=y;function w(l){const[c,b]=l.split("-").slice(-2).map(Number);let $=_().set("month",c-1).set("date",b);return c===2&&b===29&&$.get("year")%4!==0&&($=$.set("date",28)),$.isBefore(_(),"day")&&($=$.add(1,"year"),c===2&&b===29&&$.get("year")%4!==0&&($=$.set("date",28))),$}const S=z(()=>_(g.time).format("每年MM月DD日")),v=z(()=>_(g.time).isSame(_(),"day")?0:_(w(g.time)).diff(_(),"day"));return(l,c)=>(H(),U("div",bt,[d("div",wt,[d("div",Ot,[c[0]||(c[0]=d("i",{class:""},null,-1)),W(C(l.text),1)]),d("div",kt,C(S.value),1)]),d("div",Yt,[c[1]||(c[1]=W(" 还剩")),d("span",jt,C(v.value),1),c[2]||(c[2]=W("天 "))])]))}}),Tt=G(It,[["__scopeId","data-v-36903d9b"]]),Ht=y=>_().diff(_(y),"day"),Ct={class:"bg-[#fcb1bb] h-[100%] overflow-y-auto pb-[40px] home-page"},Lt={class:"text-center py-[36px]"},Nt={class:"mt-[10px] text-[36px]"},Wt={class:"font-bold"},Bt={class:"px-[12px] list"},Ft=R({__name:"index",setup(y){const g=nt([{text:"合法夫妻日",time:"2023-02-23"},{text:"结婚纪念日",time:"2023-06-19"},{text:"相遇日",time:"2020-11-07"},{text:"宝宝诞生日",time:"2025-03-07 18:22"}]),w=nt([{text:"Samantha的生日",time:"1995-11-04"},{text:"Frank的生日",time:"1992-02-02"},{text:"宝宝的生日",time:"2025-03-07"}]);return(S,v)=>(H(),U("div",Ct,[d("div",Lt,[v[1]||(v[1]=d("div",{class:"text-[26px] font-bold"},"合法夫妻日已经",-1)),d("div",Nt,[d("span",Wt,C(lt(Ht)(g.value[0].time)),1),v[0]||(v[0]=d("span",{class:"text-[0.5em] font-bold"},"天",-1))]),v[2]||(v[2]=d("div",{class:"mt-[12px] text-[14px] text-gray-600"},[d("span",null,"开始于2023年02月23日"),d("span",{class:"ml-[12px]"},"周四")],-1))]),d("div",Bt,[(H(!0),U(rt,null,st(g.value,(l,c)=>(H(),it(St,at({key:c,ref_for:!0},l),null,16))),128)),(H(!0),U(rt,null,st(w.value,(l,c)=>(H(),it(Tt,at({key:c,ref_for:!0},l),null,16))),128))])]))}}),Ut=G(Ft,[["__scopeId","data-v-9a3a0690"]]);export{Ut as default};
