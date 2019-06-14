{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.h7(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.e_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.e_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.e_(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={dP:function dP(){},
eq:function(a,b,c,d){H.q(a,"$ip",[c],"$ap")
H.h(b,{func:1,ret:d,args:[c]})
if(!!a.$iB)return new H.bC(a,b,[c,d])
return new H.aA(a,b,[c,d])},
ei:function(){return new P.b4("No element")},
fm:function(){return new P.b4("Too few elements")},
cq:function(a,b,c,d,e){H.q(a,"$id",[e],"$ad")
H.h(d,{func:1,ret:P.u,args:[e,e]})
if(c-b<=32)H.ex(a,b,c,d,e)
else H.ew(a,b,c,d,e)},
ex:function(a,b,c,d,e){var u,t,s,r,q
H.q(a,"$id",[e],"$ad")
H.h(d,{func:1,ret:P.u,args:[e,e]})
for(u=b+1,t=J.af(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(!(r>b&&J.T(d.$2(t.h(a,r-1),s),0)))break
q=r-1
t.k(a,r,t.h(a,q))
r=q}t.k(a,r,s)}},
ew:function(a3,a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
H.q(a3,"$id",[a7],"$ad")
H.h(a6,{func:1,ret:P.u,args:[a7,a7]})
u=C.d.ah(a5-a4+1,6)
t=a4+u
s=a5-u
r=C.d.ah(a4+a5,2)
q=r-u
p=r+u
o=J.af(a3)
n=o.h(a3,t)
m=o.h(a3,q)
l=o.h(a3,r)
k=o.h(a3,p)
j=o.h(a3,s)
if(J.T(a6.$2(n,m),0)){i=m
m=n
n=i}if(J.T(a6.$2(k,j),0)){i=j
j=k
k=i}if(J.T(a6.$2(n,l),0)){i=l
l=n
n=i}if(J.T(a6.$2(m,l),0)){i=l
l=m
m=i}if(J.T(a6.$2(n,k),0)){i=k
k=n
n=i}if(J.T(a6.$2(l,k),0)){i=k
k=l
l=i}if(J.T(a6.$2(m,j),0)){i=j
j=m
m=i}if(J.T(a6.$2(m,l),0)){i=l
l=m
m=i}if(J.T(a6.$2(k,j),0)){i=j
j=k
k=i}o.k(a3,t,n)
o.k(a3,r,l)
o.k(a3,s,j)
o.k(a3,q,o.h(a3,a4))
o.k(a3,p,o.h(a3,a5))
h=a4+1
g=a5-1
if(J.aj(a6.$2(m,k),0)){for(f=h;f<=g;++f){e=o.h(a3,f)
d=a6.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.F()
if(d<0){if(f!==h){o.k(a3,f,o.h(a3,h))
o.k(a3,h,e)}++h}else for(;!0;){d=a6.$2(o.h(a3,g),m)
if(typeof d!=="number")return d.K()
if(d>0){--g
continue}else{c=g-1
if(d<0){o.k(a3,f,o.h(a3,h))
b=h+1
o.k(a3,h,o.h(a3,g))
o.k(a3,g,e)
g=c
h=b
break}else{o.k(a3,f,o.h(a3,g))
o.k(a3,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){e=o.h(a3,f)
a0=a6.$2(e,m)
if(typeof a0!=="number")return a0.F()
if(a0<0){if(f!==h){o.k(a3,f,o.h(a3,h))
o.k(a3,h,e)}++h}else{a1=a6.$2(e,k)
if(typeof a1!=="number")return a1.K()
if(a1>0)for(;!0;){d=a6.$2(o.h(a3,g),k)
if(typeof d!=="number")return d.K()
if(d>0){--g
if(g<f)break
continue}else{d=a6.$2(o.h(a3,g),m)
if(typeof d!=="number")return d.F()
c=g-1
if(d<0){o.k(a3,f,o.h(a3,h))
b=h+1
o.k(a3,h,o.h(a3,g))
o.k(a3,g,e)
h=b}else{o.k(a3,f,o.h(a3,g))
o.k(a3,g,e)}g=c
break}}}}a=!1}a2=h-1
o.k(a3,a4,o.h(a3,a2))
o.k(a3,a2,m)
a2=g+1
o.k(a3,a5,o.h(a3,a2))
o.k(a3,a2,k)
H.cq(a3,a4,h-2,a6,a7)
H.cq(a3,g+2,a5,a6,a7)
if(a)return
if(h<t&&g>s){for(;J.aj(a6.$2(o.h(a3,h),m),0);)++h
for(;J.aj(a6.$2(o.h(a3,g),k),0);)--g
for(f=h;f<=g;++f){e=o.h(a3,f)
if(a6.$2(e,m)===0){if(f!==h){o.k(a3,f,o.h(a3,h))
o.k(a3,h,e)}++h}else if(a6.$2(e,k)===0)for(;!0;)if(a6.$2(o.h(a3,g),k)===0){--g
if(g<f)break
continue}else{d=a6.$2(o.h(a3,g),m)
if(typeof d!=="number")return d.F()
c=g-1
if(d<0){o.k(a3,f,o.h(a3,h))
b=h+1
o.k(a3,h,o.h(a3,g))
o.k(a3,g,e)
h=b}else{o.k(a3,f,o.h(a3,g))
o.k(a3,g,e)}g=c
break}}H.cq(a3,h,g,a6,a7)}else H.cq(a3,h,g,a6,a7)},
B:function B(){},
ac:function ac(){},
aX:function aX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aA:function aA(a,b,c){this.a=a
this.b=b
this.$ti=c},
bC:function bC(a,b,c){this.a=a
this.b=b
this.$ti=c},
aZ:function aZ(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
W:function W(a,b,c){this.a=a
this.b=b
this.$ti=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.$ti=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
at:function(a){var u,t=H.o(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
fU:function(a){return v.types[H.P(a)]},
fZ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.A(a).$iaU},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.bs(a)
if(typeof u!=="string")throw H.e(H.S(a))
return u},
aC:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
et:function(a,b){var u,t,s,r,q,p
if(typeof a!=="string")H.L(H.S(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.r(u,3)
t=H.o(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.an(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.N(r,p)|32)>s)return}return parseInt(a,b)},
es:function(a){var u,t
if(typeof a!=="string")H.L(H.S(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.fd(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
aD:function(a){return H.ft(a)+H.dX(H.ag(a),0,null)},
ft:function(a){var u,t,s,r,q,p,o,n=J.A(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.u||!!n.$iad){r=C.i(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.at(t.length>1&&C.c.N(t,0)===36?C.c.a7(t,1):t)},
ar:function(a){throw H.e(H.S(a))},
r:function(a,b){if(a==null)J.bq(a)
throw H.e(H.aq(a,b))},
aq:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a0(!0,b,s,null)
u=H.P(J.bq(a))
if(!(b<0)){if(typeof u!=="number")return H.ar(u)
t=b>=u}else t=!0
if(t)return P.bJ(b,a,s,null,u)
return P.cn(b,s)},
S:function(a){return new P.a0(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.b0()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.eU})
u.name=""}else u.toString=H.eU
return u},
eU:function(){return J.bs(this.dartException)},
L:function(a){throw H.e(a)},
bo:function(a){throw H.e(P.a8(a))},
X:function(a){var u,t,s,r,q,p
a=H.e4(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.x([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.cz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
cA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ey:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
er:function(a,b){return new H.cl(a,b==null?null:b.method)},
dQ:function(a,b){var u=b==null,t=u?null:b.method
return new H.bO(a,t,u?null:b.receiver)},
a6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.dH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aK(t,16)&8191)===10)switch(s){case 438:return f.$1(H.dQ(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.er(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.eW()
q=$.eX()
p=$.eY()
o=$.eZ()
n=$.f1()
m=$.f2()
l=$.f0()
$.f_()
k=$.f4()
j=$.f3()
i=r.v(u)
if(i!=null)return f.$1(H.dQ(H.o(u),i))
else{i=q.v(u)
if(i!=null){i.method="call"
return f.$1(H.dQ(H.o(u),i))}else{i=p.v(u)
if(i==null){i=o.v(u)
if(i==null){i=n.v(u)
if(i==null){i=m.v(u)
if(i==null){i=l.v(u)
if(i==null){i=o.v(u)
if(i==null){i=k.v(u)
if(i==null){i=j.v(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.er(H.o(u),i))}}return f.$1(new H.cD(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.b3()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a0(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.b3()
return a},
aM:function(a){var u
if(a==null)return new H.bg(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.bg(a)},
fR:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
fY:function(a,b,c,d,e,f){H.k(a,"$idM")
switch(H.P(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.ef("Unsupported number of arguments for wrapped closure"))},
bh:function(a,b){var u
H.P(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.fY)
a.$identity=u
return u},
fj:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.cr().constructor.prototype):Object.create(new H.av(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.U
if(typeof t!=="number")return t.n()
$.U=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ed(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.fU,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.ec:H.dL
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.e("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ed(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
fg:function(a,b,c,d){var u=H.dL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ed:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.fi(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.fg(t,!r,u,b)
if(t===0){r=$.U
if(typeof r!=="number")return r.n()
$.U=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.aw
return new Function(r+H.f(q==null?$.aw=H.bw("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.U
if(typeof r!=="number")return r.n()
$.U=r+1
o+=r
r="return function("+o+"){return this."
q=$.aw
return new Function(r+H.f(q==null?$.aw=H.bw("self"):q)+"."+H.f(u)+"("+o+");}")()},
fh:function(a,b,c,d){var u=H.dL,t=H.ec
switch(b?-1:a){case 0:throw H.e(H.fv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
fi:function(a,b){var u,t,s,r,q,p,o,n=$.aw
if(n==null)n=$.aw=H.bw("self")
u=$.eb
if(u==null)u=$.eb=H.bw("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.fh(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.U
if(typeof u!=="number")return u.n()
$.U=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.U
if(typeof u!=="number")return u.n()
$.U=u+1
return new Function(n+u+"}")()},
e_:function(a,b,c,d,e,f,g){return H.fj(a,b,H.P(c),d,!!e,!!f,g)},
dL:function(a){return a.a},
ec:function(a){return a.c},
bw:function(a){var u,t,s,r=new H.av("self","target","receiver","name"),q=J.dN(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
dc:function(a){if(a==null)H.fL("boolean expression must not be null")
return a},
o:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.Y(a,"String"))},
bn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.Y(a,"num"))},
hm:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.Y(a,"bool"))},
P:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.Y(a,"int"))},
e3:function(a,b){throw H.e(H.Y(a,H.at(H.o(b).substring(2))))},
h4:function(a,b){throw H.e(H.ff(a,H.at(H.o(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.A(a)[b])return a
H.e3(a,b)},
ah:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.A(a)[b]
else u=!0
if(u)return a
H.h4(a,b)},
hq:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.A(a)[b])return a
H.e3(a,b)},
ai:function(a){if(a==null)return a
if(!!J.A(a).$id)return a
throw H.e(H.Y(a,"List<dynamic>"))},
h_:function(a,b){var u
if(a==null)return a
u=J.A(a)
if(!!u.$id)return a
if(u[b])return a
H.e3(a,b)},
eM:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.P(u)]
else return a.$S()}return},
bi:function(a,b){var u
if(typeof a=="function")return!0
u=H.eM(J.A(a))
if(u==null)return!1
return H.eE(u,null,b,null)},
h:function(a,b){var u,t
if(a==null)return a
if($.dU)return a
$.dU=!0
try{if(H.bi(a,b))return a
u=H.dG(b)
t=H.Y(a,u)
throw H.e(t)}finally{$.dU=!1}},
e0:function(a,b){if(a!=null&&!H.dZ(a,b))H.L(H.Y(a,H.dG(b)))
return a},
Y:function(a,b){return new H.cB("TypeError: "+P.aR(a)+": type '"+H.eI(a)+"' is not a subtype of type '"+b+"'")},
ff:function(a,b){return new H.bx("CastError: "+P.aR(a)+": type '"+H.eI(a)+"' is not a subtype of type '"+b+"'")},
eI:function(a){var u,t=J.A(a)
if(!!t.$iax){u=H.eM(t)
if(u!=null)return H.dG(u)
return"Closure"}return H.aD(a)},
fL:function(a){throw H.e(new H.cH(a))},
h7:function(a){throw H.e(new P.bA(H.o(a)))},
fv:function(a){return new H.co(a)},
eO:function(a){return v.getIsolateTag(a)},
x:function(a,b){a.$ti=b
return a},
ag:function(a){if(a==null)return
return a.$ti},
hp:function(a,b,c){return H.as(a["$a"+H.f(c)],H.ag(b))},
bl:function(a,b,c,d){var u
H.o(c)
H.P(d)
u=H.as(a["$a"+H.f(c)],H.ag(b))
return u==null?null:u[d]},
bk:function(a,b,c){var u
H.o(b)
H.P(c)
u=H.as(a["$a"+H.f(b)],H.ag(a))
return u==null?null:u[c]},
j:function(a,b){var u
H.P(b)
u=H.ag(a)
return u==null?null:u[b]},
dG:function(a){return H.ae(a,null)},
ae:function(a,b){var u,t
H.q(b,"$id",[P.i],"$ad")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.at(a[0].name)+H.dX(a,1,b)
if(typeof a=="function")return H.at(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.P(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.r(b,t)
return H.f(b[t])}if('func' in a)return H.fD(a,b)
if('futureOr' in a)return"FutureOr<"+H.ae("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
fD:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.i]
H.q(a0,"$id",b,"$ad")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.x([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.t(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.r(a0,n)
p=C.c.n(p,a0[n])
m=u[q]
if(m!=null&&m!==P.t)p+=" extends "+H.ae(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.ae(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.ae(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.ae(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.fQ(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.o(b[h])
j=j+i+H.ae(e[d],a0)+(" "+H.f(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
dX:function(a,b,c){var u,t,s,r,q,p
H.q(c,"$id",[P.i],"$ad")
if(a==null)return""
u=new P.aF("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.ae(p,c)}return"<"+u.i(0)+">"},
as:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dY:function(a,b,c,d){var u,t
H.o(b)
H.ai(c)
H.o(d)
if(a==null)return!1
u=H.ag(a)
t=J.A(a)
if(t[b]==null)return!1
return H.eK(H.as(t[d],u),null,c,null)},
q:function(a,b,c,d){H.o(b)
H.ai(c)
H.o(d)
if(a==null)return a
if(H.dY(a,b,c,d))return a
throw H.e(H.Y(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.at(b.substring(2))+H.dX(c,0,null),v.mangledGlobalNames)))},
eK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.O(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.O(a[t],b,c[t],d))return!1
return!0},
hn:function(a,b,c){return a.apply(b,H.as(J.A(b)["$a"+H.f(c)],H.ag(b)))},
eQ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="t"||a.name==="z"||a===-1||a===-2||H.eQ(u)}return!1},
dZ:function(a,b){var u,t
if(a==null)return b==null||b.name==="t"||b.name==="z"||b===-1||b===-2||H.eQ(b)
if(b==null||b===-1||b.name==="t"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dZ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bi(a,b)}u=J.A(a).constructor
t=H.ag(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.O(u,null,b,null)},
n:function(a,b){if(a!=null&&!H.dZ(a,b))throw H.e(H.Y(a,H.dG(b)))
return a},
O:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="t"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="t"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.O(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="z")return!0
if('func' in c)return H.eE(a,b,c,d)
if('func' in a)return c.name==="dM"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.O("type" in a?a.type:l,b,s,d)
else if(H.O(a,b,s,d))return!0
else{if(!('$i'+"az" in t.prototype))return!1
r=t.prototype["$a"+"az"]
q=H.as(r,u?a.slice(1):l)
return H.O(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.eK(H.as(m,u),b,p,d)},
eE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.O(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.O(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.O(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.O(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.h2(h,b,g,d)},
h2:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.O(c[s],d,a[s],b))return!1}return!0},
ho:function(a,b,c){Object.defineProperty(a,H.o(b),{value:c,enumerable:false,writable:true,configurable:true})},
h0:function(a){var u,t,s,r,q=H.o($.eP.$1(a)),p=$.dd[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dj[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.o($.eJ.$2(a,q))
if(q!=null){p=$.dd[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.dj[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.dF(u)
$.dd[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.dj[q]=u
return u}if(s==="-"){r=H.dF(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.eS(a,u)
if(s==="*")throw H.e(P.ez(q))
if(v.leafTags[q]===true){r=H.dF(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.eS(a,u)},
eS:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.e2(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
dF:function(a){return J.e2(a,!1,null,!!a.$iaU)},
h1:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.dF(u)
else return J.e2(u,c,null,null)},
fW:function(){if(!0===$.e1)return
$.e1=!0
H.fX()},
fX:function(){var u,t,s,r,q,p,o,n
$.dd=Object.create(null)
$.dj=Object.create(null)
H.fV()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.eT.$1(q)
if(p!=null){o=H.h1(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
fV:function(){var u,t,s,r,q,p,o=C.m()
o=H.ap(C.n,H.ap(C.o,H.ap(C.j,H.ap(C.j,H.ap(C.p,H.ap(C.q,H.ap(C.r(C.i),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.eP=new H.dg(r)
$.eJ=new H.dh(q)
$.eT=new H.di(p)},
ap:function(a,b){return a(b)||b},
el:function(a,b,c,d){var u,t,s,r
if(typeof a!=="string")H.L(H.S(a))
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(P.eg("Illegal RegExp pattern ("+String(r)+")",a))},
fP:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
e4:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aN:function(a,b,c){var u=H.h6(a,b,c)
return u},
h6:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.e4(b),'g'),H.fP(c))},
cz:function cz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cl:function cl(a,b){this.a=a
this.b=b},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a){this.a=a},
dH:function dH(a){this.a=a},
bg:function bg(a){this.a=a
this.b=null},
ax:function ax(){},
cw:function cw(){},
cr:function cr(){},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a){this.a=a},
bx:function bx(a){this.a=a},
co:function co(a){this.a=a},
cH:function cH(a){this.a=a},
aW:function aW(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cb:function cb(a,b){this.a=a
this.b=b
this.c=null},
cc:function cc(a,b){this.a=a
this.$ti=b},
cd:function cd(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dg:function dg(a){this.a=a},
dh:function dh(a){this.a=a},
di:function di(a){this.a=a},
bN:function bN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d1:function d1(a){this.b=a},
cG:function cG(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fQ:function(a){return J.ej(a?Object.keys(a):[],null)},
h3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
e2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bj:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.e1==null){H.fW()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.ez("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.e5()]
if(r!=null)return r
r=H.h0(a)
if(r!=null)return r
if(typeof a=="function")return C.v
u=Object.getPrototypeOf(a)
if(u==null)return C.k
if(u===Object.prototype)return C.k
if(typeof s=="function"){Object.defineProperty(s,$.e5(),{value:C.h,enumerable:false,writable:true,configurable:true})
return C.h}return C.h},
fn:function(a,b){if(a<0||a>4294967295)throw H.e(P.an(a,0,4294967295,"length",null))
return J.ej(new Array(a),b)},
ej:function(a,b){return J.dN(H.x(a,[b]))},
dN:function(a){H.ai(a)
a.fixed$length=Array
return a},
ek:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
fo:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.N(a,b)
if(t!==32&&t!==13&&!J.ek(t))break;++b}return b},
fp:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.ak(a,u)
if(t!==32&&t!==13&&!J.ek(t))break}return b},
A:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aT.prototype
return J.bL.prototype}if(typeof a=="string")return J.a3.prototype
if(a==null)return J.bM.prototype
if(typeof a=="boolean")return J.bK.prototype
if(a.constructor==Array)return J.a2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
return a}if(a instanceof P.t)return a
return J.bj(a)},
fS:function(a){if(typeof a=="number")return J.ab.prototype
if(typeof a=="string")return J.a3.prototype
if(a==null)return a
if(a.constructor==Array)return J.a2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
return a}if(a instanceof P.t)return a
return J.bj(a)},
af:function(a){if(typeof a=="string")return J.a3.prototype
if(a==null)return a
if(a.constructor==Array)return J.a2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
return a}if(a instanceof P.t)return a
return J.bj(a)},
de:function(a){if(a==null)return a
if(a.constructor==Array)return J.a2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
return a}if(a instanceof P.t)return a
return J.bj(a)},
eN:function(a){if(typeof a=="number")return J.ab.prototype
if(a==null)return a
if(!(a instanceof P.t))return J.ad.prototype
return a},
fT:function(a){if(typeof a=="number")return J.ab.prototype
if(typeof a=="string")return J.a3.prototype
if(a==null)return a
if(!(a instanceof P.t))return J.ad.prototype
return a},
df:function(a){if(typeof a=="string")return J.a3.prototype
if(a==null)return a
if(!(a instanceof P.t))return J.ad.prototype
return a},
aL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a4.prototype
return a}if(a instanceof P.t)return a
return J.bj(a)},
dI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.fS(a).n(a,b)},
aj:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.A(a).E(a,b)},
T:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.eN(a).K(a,b)},
ak:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.af(a).h(a,b)},
f5:function(a,b,c,d){return J.aL(a).aD(a,b,c,d)},
e7:function(a){return J.aL(a).aE(a)},
f6:function(a,b,c){return J.aL(a).aI(a,b,c)},
f7:function(a,b,c){return J.eN(a).a2(a,b,c)},
f8:function(a,b){return J.fT(a).H(a,b)},
f9:function(a,b){return J.de(a).q(a,b)},
dJ:function(a){return J.aL(a).gw(a)},
aO:function(a){return J.A(a).gu(a)},
bp:function(a){return J.de(a).gp(a)},
bq:function(a){return J.af(a).gj(a)},
fa:function(a,b){return J.de(a).D(a,b)},
fb:function(a,b,c){return J.de(a).ap(a,b,c)},
e8:function(a){return J.aL(a).aq(a)},
fc:function(a,b){return J.aL(a).b6(a,b)},
e9:function(a,b){return J.df(a).av(a,b)},
dK:function(a,b){return J.df(a).a7(a,b)},
br:function(a,b,c){return J.df(a).U(a,b,c)},
bs:function(a){return J.A(a).i(a)},
fd:function(a){return J.df(a).bd(a)},
D:function D(){},
bK:function bK(){},
bM:function bM(){},
aV:function aV(){},
cm:function cm(){},
ad:function ad(){},
a4:function a4(){},
a2:function a2(a){this.$ti=a},
dO:function dO(a){this.$ti=a},
au:function au(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ab:function ab(){},
aT:function aT(){},
bL:function bL(){},
a3:function a3(){}},P={
fw:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.fM()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bh(new P.cJ(s),1)).observe(u,{childList:true})
return new P.cI(s,u,t)}else if(self.setImmediate!=null)return P.fN()
return P.fO()},
fx:function(a){self.scheduleImmediate(H.bh(new P.cK(H.h(a,{func:1,ret:-1})),0))},
fy:function(a){self.setImmediate(H.bh(new P.cL(H.h(a,{func:1,ret:-1})),0))},
fz:function(a){H.h(a,{func:1,ret:-1})
P.fC(0,a)},
fC:function(a,b){var u=new P.d6()
u.aC(a,b)
return u},
fB:function(a,b){var u,t,s
b.a=1
try{a.at(new P.cT(b),new P.cU(b),null)}catch(s){u=H.a6(s)
t=H.aM(s)
P.h5(new P.cV(b,u,t))}},
eB:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iN")
if(u>=4){t=b.a_()
b.a=a.a
b.c=a.c
P.aH(b,t)}else{t=H.k(b.c,"$ia_")
b.a=2
b.c=a
a.ag(t)}},
aH:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iF")
g=g.b
r=s.a
q=s.b
g.toString
P.d9(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.aH(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.k(o,"$iF")
g=g.b
r=o.a
q=o.b
g.toString
P.d9(i,i,g,r,q)
return}l=$.y
if(l!=n)$.y=n
else l=i
g=b.c
if(g===8)new P.cZ(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.cY(u,b,o).$0()}else if((g&2)!==0)new P.cX(h,u,b).$0()
if(l!=null)$.y=l
g=u.b
if(!!J.A(g).$iaz){if(g.a>=4){k=H.k(q.c,"$ia_")
q.c=null
b=q.P(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.eB(g,q)
return}}j=b.b
k=H.k(j.c,"$ia_")
j.c=null
b=j.P(k)
g=u.a
r=u.b
if(!g){H.n(r,H.j(j,0))
j.a=4
j.c=r}else{H.k(r,"$iF")
j.a=8
j.c=r}h.a=j
g=j}},
fG:function(a,b){if(H.bi(a,{func:1,args:[P.t,P.I]}))return H.h(a,{func:1,ret:null,args:[P.t,P.I]})
if(H.bi(a,{func:1,args:[P.t]}))return H.h(a,{func:1,ret:null,args:[P.t]})
throw H.e(P.ea(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
fF:function(){var u,t
for(;u=$.ao,u!=null;){$.aJ=null
t=u.b
$.ao=t
if(t==null)$.aI=null
u.a.$0()}},
fJ:function(){$.dV=!0
try{P.fF()}finally{$.aJ=null
$.dV=!1
if($.ao!=null)$.e6().$1(P.eL())}},
eH:function(a){var u=new P.b8(H.h(a,{func:1,ret:-1}))
if($.ao==null){$.ao=$.aI=u
if(!$.dV)$.e6().$1(P.eL())}else $.aI=$.aI.b=u},
fI:function(a){var u,t,s
H.h(a,{func:1,ret:-1})
u=$.ao
if(u==null){P.eH(a)
$.aJ=$.aI
return}t=new P.b8(a)
s=$.aJ
if(s==null){t.b=u
$.ao=$.aJ=t}else{t.b=s.b
$.aJ=s.b=t
if(t.b==null)$.aI=t}},
h5:function(a){var u,t=null,s={func:1,ret:-1}
H.h(a,s)
u=$.y
if(C.b===u){P.db(t,t,C.b,a)
return}u.toString
P.db(t,t,u,H.h(u.aj(a),s))},
d9:function(a,b,c,d,e){var u={}
u.a=d
P.fI(new P.da(u,e))},
eF:function(a,b,c,d,e){var u,t
H.h(d,{func:1,ret:e})
t=$.y
if(t===c)return d.$0()
$.y=c
u=t
try{t=d.$0()
return t}finally{$.y=u}},
eG:function(a,b,c,d,e,f,g){var u,t
H.h(d,{func:1,ret:f,args:[g]})
H.n(e,g)
t=$.y
if(t===c)return d.$1(e)
$.y=c
u=t
try{t=d.$1(e)
return t}finally{$.y=u}},
fH:function(a,b,c,d,e,f,g,h,i){var u,t
H.h(d,{func:1,ret:g,args:[h,i]})
H.n(e,h)
H.n(f,i)
t=$.y
if(t===c)return d.$2(e,f)
$.y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.y=u}},
db:function(a,b,c,d){var u
H.h(d,{func:1,ret:-1})
u=C.b!==c
if(u)d=!(!u||!1)?c.aj(d):c.aM(d,-1)
P.eH(d)},
cJ:function cJ(a){this.a=a},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a){this.a=a},
cL:function cL(a){this.a=a},
d6:function d6(){},
d7:function d7(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
N:function N(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cS:function cS(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
cT:function cT(a){this.a=a},
cU:function cU(a){this.a=a},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d_:function d_(a){this.a=a},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a){this.a=a
this.b=null},
cs:function cs(){},
cu:function cu(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
ct:function ct(){},
F:function F(a,b){this.a=a
this.b=b},
d8:function d8(){},
da:function da(a,b){this.a=a
this.b=b},
d2:function d2(){},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b){this.a=a
this.b=b},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function(a,b,c){H.ai(a)
return H.q(H.fR(a,new H.aW([b,c])),"$iem",[b,c],"$aem")},
en:function(a,b){return new H.aW([a,b])},
fl:function(a,b,c){var u,t
if(P.dW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.x([],[P.i])
C.a.t($.J,a)
try{P.fE(a,u)}finally{if(0>=$.J.length)return H.r($.J,-1)
$.J.pop()}t=P.dS(b,H.h_(u,"$ip"),", ")+c
return t.charCodeAt(0)==0?t:t},
eh:function(a,b,c){var u,t
if(P.dW(a))return b+"..."+c
u=new P.aF(b)
C.a.t($.J,a)
try{t=u
t.a=P.dS(t.a,a,", ")}finally{if(0>=$.J.length)return H.r($.J,-1)
$.J.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
dW:function(a){var u,t
for(u=$.J.length,t=0;t<u;++t)if(a===$.J[t])return!0
return!1},
fE:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.q(b,"$id",[P.i],"$ad")
u=a.gp(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.l())return
r=H.f(u.gm())
C.a.t(b,r)
t+=r.length+2;++s}if(!u.l()){if(s<=5)return
if(0>=b.length)return H.r(b,-1)
q=b.pop()
if(0>=b.length)return H.r(b,-1)
p=b.pop()}else{o=u.gm();++s
if(!u.l()){if(s<=4){C.a.t(b,H.f(o))
return}q=H.f(o)
if(0>=b.length)return H.r(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gm();++s
for(;u.l();o=n,n=m){m=u.gm();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.r(b,-1)
t-=b.pop().length+2;--s}C.a.t(b,"...")
return}}p=H.f(o)
q=H.f(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.r(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.t(b,l)
C.a.t(b,p)
C.a.t(b,q)},
ep:function(a){var u,t={}
if(P.dW(a))return"{...}"
u=new P.aF("")
try{C.a.t($.J,a)
u.a+="{"
t.a=!0
a.aZ(0,new P.ci(t,u))
u.a+="}"}finally{if(0>=$.J.length)return H.r($.J,-1)
$.J.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ce:function ce(){},
G:function G(){},
ch:function ch(){},
ci:function ci(a,b){this.a=a
this.b=b},
cj:function cj(){},
ck:function ck(a){this.a=a},
bd:function bd(){},
bm:function(a,b){var u=H.et(a,b)
if(u!=null)return u
throw H.e(P.eg(a,null))},
fk:function(a){if(a instanceof H.ax)return a.i(0)
return"Instance of '"+H.aD(a)+"'"},
fs:function(a,b,c){var u,t
H.n(b,c)
u=J.fn(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.q(u,"$id",[c],"$ad")},
aY:function(a,b,c){var u,t=[c],s=H.x([],t)
for(u=J.bp(a);u.l();)C.a.t(s,H.n(u.gm(),c))
if(b)return s
return H.q(J.dN(s),"$id",t,"$ad")},
fu:function(a){return new H.bN(a,H.el(a,!1,!0,!1))},
dS:function(a,b,c){var u=J.bp(b)
if(!u.l())return a
if(c.length===0){do a+=H.f(u.gm())
while(u.l())}else{a+=H.f(u.gm())
for(;u.l();)a=a+c+H.f(u.gm())}return a},
aR:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bs(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fk(a)},
fe:function(a){return new P.a0(!1,null,null,a)},
ea:function(a,b,c){return new P.a0(!0,a,b,c)},
cn:function(a,b){return new P.b1(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.b1(b,c,!0,a,d,"Invalid value")},
ev:function(a,b,c){if(0>a||a>c)throw H.e(P.an(a,0,c,"start",null))
if(a>b||b>c)throw H.e(P.an(b,a,c,"end",null))
return b},
eu:function(a,b){if(typeof a!=="number")return a.F()
if(a<0)throw H.e(P.an(a,0,null,b,null))},
bJ:function(a,b,c,d,e){var u=H.P(e==null?J.bq(b):e)
return new P.bI(u,!0,a,c,"Index out of range")},
R:function(a){return new P.cE(a)},
ez:function(a){return new P.cC(a)},
a8:function(a){return new P.by(a)},
ef:function(a){return new P.cR(a)},
eg:function(a,b){return new P.bH(a,b)},
V:function(a,b,c){var u,t
H.h(b,{func:1,ret:c,args:[P.u]})
u=H.x([],[c])
C.a.sj(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
H:function H(){},
aK:function aK(){},
al:function al(){},
bv:function bv(){},
b0:function b0(){},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bI:function bI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cE:function cE(a){this.a=a},
cC:function cC(a){this.a=a},
b4:function b4(a){this.a=a},
by:function by(a){this.a=a},
b3:function b3(){},
bA:function bA(a){this.a=a},
cR:function cR(a){this.a=a},
bH:function bH(a,b){this.a=a
this.b=b},
u:function u(){},
p:function p(){},
Q:function Q(){},
d:function d(){},
E:function E(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(){},
w:function w(){},
t:function t(){},
b_:function b_(){},
aE:function aE(){},
I:function I(){},
i:function i(){},
aF:function aF(a){this.a=a},
bD:function bD(a){this.b=a},
bE:function bE(){},
bF:function bF(){},
eC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
d0:function d0(){},
C:function C(a,b,c){this.a=a
this.b=b
this.$ti=c},
b:function b(){}},W={
ee:function(a,b){var u,t,s,r,q,p=a==null?b==null:a===b,o=p||b.tagName==="HTML"
if(a==null||p){if(o)return new P.C(0,0,[P.w])
throw H.e(P.fe("Specified element is not a transitive offset parent of this element."))}u=W.ee(a.offsetParent,b)
t=u.a
s=C.e.T(a.offsetLeft)
if(typeof t!=="number")return t.n()
r=u.b
q=C.e.T(a.offsetTop)
if(typeof r!=="number")return r.n()
return new P.C(t+s,r+q,[P.w])},
M:function(a){var u,t=document.createElement("input"),s=H.k(t,"$iK")
if(a!=null)try{s.type=a}catch(u){H.a6(u)}return s},
a5:function(a,b,c,d,e){var u=W.fK(new W.cQ(c),W.a),t=u!=null
if(t&&!0){H.h(u,{func:1,args:[W.a]})
if(t)J.f5(a,b,u,!1)}return new W.cP(a,b,u,!1,[e])},
eD:function(a){var u
if("postMessage" in a){u=W.fA(a)
return u}else return H.k(a,"$iaa")},
fA:function(a){if(a===window)return H.k(a,"$ieA")
else return new W.cN()},
fK:function(a,b){var u
H.h(a,{func:1,ret:-1,args:[b]})
u=$.y
if(u===C.b)return a
return u.aN(a,b)},
c:function c(){},
bt:function bt(){},
bu:function bu(){},
aP:function aP(){},
aQ:function aQ(){},
a7:function a7(){},
ay:function ay(){},
bz:function bz(){},
a9:function a9(){},
bB:function bB(){},
b9:function b9(a,b){this.a=a
this.b=b},
m:function m(){},
a:function a(){},
aa:function aa(){},
bG:function bG(){},
am:function am(){},
K:function K(){},
cf:function cf(){},
v:function v(){},
cM:function cM(a){this.a=a},
l:function l(){},
aB:function aB(){},
cp:function cp(){},
b2:function b2(){},
Z:function Z(){},
b7:function b7(){},
cO:function cO(){},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cP:function cP(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cQ:function cQ(a){this.a=a},
a1:function a1(){},
aS:function aS(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
cN:function cN(){},
ba:function ba(){},
bb:function bb(){},
bc:function bc(){},
be:function be(){},
bf:function bf(){}},F={
fr:function(a,b,c,d,e,f,g){var u,t={}
t.a=c
u=new F.bT(a)
u.aB(a,b,d,e,1,f,!0,0,t)
return u},
fq:function(a,b){var u=new F.bP(a)
u.aA(a,b)
return u},
eR:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=null,b1="click",b2={}
b2.a=null
try{u=J.dK(window.location.search,1)
u=H.aN(u,"%5B","[")
u=H.aN(u,"%5D","]")
u=b2.a=H.x(H.aN(u,"%7C","|").split("&"),[P.i])}catch(t){H.a6(t)
u=b2.a=H.x([],[P.i])}s=P.i
r=P.en(s,s)
r.ai(P.V(u.length,new F.dv(b2),[P.E,P.i,P.i]))
u=document
q=u.createElement("canvas")
q.width=1000
q.height=1000
s=q.style
s.border="black 2px solid"
p=new P.C(500,500,[P.w])
o=new F.b5(p.A(0,1),-1.5707963267948966,q)
s=q.getContext("2d")
s.beginPath()
o.r=s
o.C(C.w)
o.saX(H.x([],[F.aG]))
n=W.M(b0)
s=r.h(0,"axiom")
n.value=H.o(s==null?"":s)
m=W.M("number")
s=m.style
s.width="40px"
s=r.h(0,"angle")
m.value=H.o(s==null?"":s)
l=W.M("color")
s="#"+H.f(r.h(0,"default"))
l.value=s
k=W.M("color")
s="#"+H.f(r.h(0,"grad"))
k.value=s
j=u.createElement("span")
s=W.m
C.l.sw(j,P.V(3,new F.dw(r),s))
i=r.h(0,"prods")
i=i==null?b0:J.e9(i,",")
if(i==null)h=b0
else{g=[P.d,P.i]
f=H.j(i,0)
g=new H.W(i,H.h(new F.dx(),{func:1,ret:g,args:[f]}),[f,g])
h=g}if(h==null)h=H.x([],[[P.d,P.i]])
e=u.createElement("div")
new W.b9(e,e.children).a1(0,J.fb(h,new F.dy(),s))
d=u.createElement("button")
d.textContent="+"
i=W.v
g={func:1,ret:-1,args:[i]}
W.a5(d,b1,H.h(new F.dz(e),g),!1,i)
c=W.M("number")
f=c.style
f.width="30px"
f=r.h(0,"n")
c.value=H.o(f==null?"":f)
b2.b=null
b2.c=H.x([],[[P.d,,]])
b=u.createElement("button")
b.textContent="share"
W.a5(b,b1,H.h(new F.dA(b2,k,l,n,m,c,r,j),g),!1,i)
a=u.createElement("button")
a.textContent="run"
W.a5(a,b1,H.h(new F.dB(b2,o,-1.5707963267948966,p,l,e,n,c,m,r,k,j),g),!1,i)
b2.d=!1
W.a5(q,"mousedown",H.h(new F.dC(b2),g),!1,i)
W.a5(q,"mouseup",H.h(new F.dD(b2),g),!1,i)
W.a5(q,"mousemove",H.h(new F.dE(b2,o,q,-1.5707963267948966,l),g),!1,i)
if(J.aj(r.h(0,"run"),"true"))a.click()
b2=u.body
b2.children
i=u.createElement("div")
g=u.createElement("span")
g.textContent="LSystem rules:"
f=u.createElement("br")
a0=u.createElement("span")
a0.textContent="axiom* "
a1=u.createElement("br")
a2=u.createElement("span")
a2.textContent="angle "
a3=u.createElement("br")
a4=u.createElement("span")
a4.textContent="default color "
a5=u.createElement("br")
a6=u.createElement("span")
a6.textContent="color gradient step "
a7=u.createElement("br")
a8=u.createElement("span")
a8.textContent="productions* "
a9=u.createElement("span")
a9.textContent="iteration* "
C.f.sw(i,H.x([g,f,a0,n,a1,a2,m,a3,a4,l,a5,a6,k,j,a7,a8,d,e,a9,c,u.createElement("br"),a,b,u.createElement("br"),q],[s]))
s=i.style
s.marginLeft="10px"
b2.appendChild(i)},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c){var _=this
_.a=a
_.b=b
_.c=1
_.e=_.d=null
_.f=c
_.r=null},
cx:function cx(a,b){this.a=a
this.b=b},
cy:function cy(){},
bT:function bT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
bW:function bW(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(){},
c2:function c2(a,b,c){this.a=a
this.b=b
this.c=c},
c3:function c3(a,b){this.a=a
this.b=b},
c4:function c4(a,b){this.a=a
this.b=b},
c5:function c5(a,b){this.a=a
this.b=b},
c6:function c6(a){this.a=a},
c7:function c7(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=a
this.b=b},
bU:function bU(){},
bZ:function bZ(a,b){this.a=a
this.b=b},
c_:function c_(a,b){this.a=a
this.b=b},
c0:function c0(a,b){this.a=a
this.b=b},
bP:function bP(a){this.a=a
this.c=this.b=null},
bQ:function bQ(a){this.a=a},
bR:function bR(){},
bS:function bS(a){this.a=a},
c9:function c9(a){this.a=a},
ca:function ca(){},
dv:function dv(a){this.a=a},
dw:function dw(a){this.a=a},
dx:function dx(){},
dy:function dy(){},
du:function du(){},
dz:function dz(a){this.a=a},
dt:function dt(){},
dA:function dA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
dq:function dq(){},
dr:function dr(a){this.a=a},
ds:function ds(){},
dB:function dB(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l},
dl:function dl(a){this.a=a},
dm:function dm(a){this.a=a},
dn:function dn(a,b){this.a=a
this.b=b},
dp:function dp(a){this.a=a},
dC:function dC(a){this.a=a},
dD:function dD(a){this.a=a},
dE:function dE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dk:function dk(a){this.a=a}}
var w=[C,H,J,P,W,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dP.prototype={}
J.D.prototype={
E:function(a,b){return a===b},
gu:function(a){return H.aC(a)},
i:function(a){return"Instance of '"+H.aD(a)+"'"}}
J.bK.prototype={
i:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$iH:1}
J.bM.prototype={
E:function(a,b){return null==b},
i:function(a){return"null"},
gu:function(a){return 0}}
J.aV.prototype={
gu:function(a){return 0},
i:function(a){return String(a)}}
J.cm.prototype={}
J.ad.prototype={}
J.a4.prototype={
i:function(a){var u=a[$.eV()]
if(u==null)return this.az(a)
return"JavaScript function for "+H.f(J.bs(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$idM:1}
J.a2.prototype={
t:function(a,b){H.n(b,H.j(a,0))
if(!!a.fixed$length)H.L(P.R("add"))
a.push(b)},
ap:function(a,b,c){var u=H.j(a,0)
return new H.W(a,H.h(b,{func:1,ret:c,args:[u]}),[u,c])},
D:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.f(a[u]))
return t.join(b)},
aY:function(a,b,c,d){var u,t,s
H.n(b,d)
H.h(c,{func:1,ret:d,args:[d,H.j(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.a8(a))}return t},
q:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
gaW:function(a){if(a.length>0)return a[0]
throw H.e(H.ei())},
gao:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.ei())},
L:function(a,b,c,d,e){var u,t,s=H.j(a,0)
H.q(d,"$ip",[s],"$ap")
if(!!a.immutable$list)H.L(P.R("setRange"))
P.ev(b,c,a.length)
u=c-b
if(u===0)return
P.eu(e,"skipCount")
H.q(d,"$id",[s],"$ad")
s=J.af(d)
if(e+u>s.gj(d))throw H.e(H.fm())
if(e<b)for(t=u-1;t>=0;--t)a[b+t]=s.h(d,e+t)
else for(t=0;t<u;++t)a[b+t]=s.h(d,e+t)},
B:function(a,b,c,d){return this.L(a,b,c,d,0)},
i:function(a){return P.eh(a,"[","]")},
gp:function(a){return new J.au(a,a.length,[H.j(a,0)])},
gu:function(a){return H.aC(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.L(P.R("set length"))
if(b<0)throw H.e(P.an(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.e(H.aq(a,b))
return a[b]},
k:function(a,b,c){H.n(c,H.j(a,0))
if(!!a.immutable$list)H.L(P.R("indexed set"))
if(b>=a.length||b<0)throw H.e(H.aq(a,b))
a[b]=c},
n:function(a,b){var u,t=[H.j(a,0)]
H.q(b,"$id",t,"$ad")
u=C.d.n(a.length,b.gj(b))
t=H.x([],t)
this.sj(t,u)
this.B(t,0,a.length,a)
this.B(t,a.length,u,b)
return t},
$iB:1,
$ip:1,
$id:1}
J.dO.prototype={}
J.au.prototype={
gm:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.bo(s))
u=t.c
if(u>=r){t.sa8(null)
return!1}t.sa8(s[u]);++t.c
return!0},
sa8:function(a){this.d=H.n(a,H.j(this,0))},
$iQ:1}
J.ab.prototype={
H:function(a,b){var u
H.bn(b)
if(typeof b!=="number")throw H.e(H.S(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.ga3(b)
if(this.ga3(a)===u)return 0
if(this.ga3(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga3:function(a){return a===0?1/a<0:a<0},
T:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.R(""+a+".round()"))},
a2:function(a,b,c){if(this.H(b,c)>0)throw H.e(H.S(b))
if(this.H(a,b)<0)return b
if(this.H(a,c)>0)return c
return a},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a+b},
ah:function(a,b){return(a|0)===a?a/b|0:this.aL(a,b)},
aL:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.R("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
aK:function(a,b){var u
if(a>0)u=this.aJ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
aJ:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a>b},
$iaK:1,
$iw:1}
J.aT.prototype={$iu:1}
J.bL.prototype={}
J.a3.prototype={
ak:function(a,b){if(b<0)throw H.e(H.aq(a,b))
if(b>=a.length)H.L(H.aq(a,b))
return a.charCodeAt(b)},
N:function(a,b){if(b>=a.length)throw H.e(H.aq(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.e(P.ea(b,null,null))
return a+b},
av:function(a,b){var u=H.x(a.split(b),[P.i])
return u},
U:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.cn(b,null))
if(b>c)throw H.e(P.cn(b,null))
if(c>a.length)throw H.e(P.cn(c,null))
return a.substring(b,c)},
a7:function(a,b){return this.U(a,b,null)},
bd:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.N(r,0)===133){u=J.fo(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.ak(r,t)===133?J.fp(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
H:function(a,b){var u
H.o(b)
if(typeof b!=="string")throw H.e(H.S(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gu:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.aq(a,b))
return a[b]},
$idR:1,
$ii:1}
H.B.prototype={}
H.ac.prototype={
gp:function(a){var u=this
return new H.aX(u,u.gj(u),[H.bk(u,"ac",0)])},
D:function(a,b){var u,t,s,r=this,q=r.gj(r)
if(b.length!==0){if(q===0)return""
u=H.f(r.q(0,0))
if(q!==r.gj(r))throw H.e(P.a8(r))
for(t=u,s=1;s<q;++s){t=t+b+H.f(r.q(0,s))
if(q!==r.gj(r))throw H.e(P.a8(r))}return t.charCodeAt(0)==0?t:t}else{for(s=0,t="";s<q;++s){t+=H.f(r.q(0,s))
if(q!==r.gj(r))throw H.e(P.a8(r))}return t.charCodeAt(0)==0?t:t}},
ap:function(a,b,c){var u=H.bk(this,"ac",0)
return new H.W(this,H.h(b,{func:1,ret:c,args:[u]}),[u,c])},
a5:function(a,b){var u,t=this,s=H.x([],[H.bk(t,"ac",0)])
C.a.sj(s,t.gj(t))
for(u=0;u<t.gj(t);++u)C.a.k(s,u,t.q(0,u))
return s},
J:function(a){return this.a5(a,!0)}}
H.aX.prototype={
gm:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=J.af(s),q=r.gj(s)
if(t.b!==q)throw H.e(P.a8(s))
u=t.c
if(u>=q){t.sG(null)
return!1}t.sG(r.q(s,u));++t.c
return!0},
sG:function(a){this.d=H.n(a,H.j(this,0))},
$iQ:1}
H.aA.prototype={
gp:function(a){var u=this.a
return new H.aZ(u.gp(u),this.b,this.$ti)},
gj:function(a){var u=this.a
return u.gj(u)},
q:function(a,b){return this.b.$1(this.a.q(0,b))},
$ap:function(a,b){return[b]}}
H.bC.prototype={$iB:1,
$aB:function(a,b){return[b]}}
H.aZ.prototype={
l:function(){var u=this,t=u.b
if(t.l()){u.sG(u.c.$1(t.gm()))
return!0}u.sG(null)
return!1},
gm:function(){return this.a},
sG:function(a){this.a=H.n(a,H.j(this,1))},
$aQ:function(a,b){return[b]}}
H.W.prototype={
gj:function(a){return J.bq(this.a)},
q:function(a,b){return this.b.$1(J.f9(this.a,b))},
$aB:function(a,b){return[b]},
$aac:function(a,b){return[b]},
$ap:function(a,b){return[b]}}
H.b6.prototype={
gp:function(a){return new H.cF(J.bp(this.a),this.b,this.$ti)}}
H.cF.prototype={
l:function(){var u,t
for(u=this.a,t=this.b;u.l();)if(H.dc(t.$1(u.gm())))return!0
return!1},
gm:function(){return this.a.gm()}}
H.cz.prototype={
v:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.cl.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.bO.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.cD.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.dH.prototype={
$1:function(a){if(!!J.A(a).$ial)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.bg.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iI:1}
H.ax.prototype={
i:function(a){return"Closure '"+H.aD(this).trim()+"'"},
$idM:1,
gbe:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cw.prototype={}
H.cr.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.at(u)+"'"}}
H.av.prototype={
E:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.av))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gu:function(a){var u,t=this.c
if(t==null)u=H.aC(this.a)
else u=typeof t!=="object"?J.aO(t):H.aC(t)
return(u^H.aC(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.aD(u)+"'")}}
H.cB.prototype={
i:function(a){return this.a}}
H.bx.prototype={
i:function(a){return this.a}}
H.co.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.cH.prototype={
i:function(a){return"Assertion failed: "+P.aR(this.a)}}
H.aW.prototype={
gj:function(a){return this.a},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.X(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.X(r,b)
s=t==null?null:t.b
return s}else return q.b0(b)},
b0:function(a){var u,t,s=this.d
if(s==null)return
u=this.ae(s,J.aO(a)&0x3ffffff)
t=this.an(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
H.n(b,H.j(o,0))
H.n(c,H.j(o,1))
if(typeof b==="string"){u=o.b
o.aa(u==null?o.b=o.Y():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.aa(t==null?o.c=o.Y():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.Y()
r=J.aO(b)&0x3ffffff
q=o.ae(s,r)
if(q==null)o.a0(s,r,[o.Z(b,c)])
else{p=o.an(q,b)
if(p>=0)q[p].b=c
else q.push(o.Z(b,c))}}},
aZ:function(a,b){var u,t,s=this
H.h(b,{func:1,ret:-1,args:[H.j(s,0),H.j(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.a8(s))
u=u.c}},
aa:function(a,b,c){var u,t=this
H.n(b,H.j(t,0))
H.n(c,H.j(t,1))
u=t.X(a,b)
if(u==null)t.a0(a,b,t.Z(b,c))
else u.b=c},
Z:function(a,b){var u=this,t=new H.cb(H.n(a,H.j(u,0)),H.n(b,H.j(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
an:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.aj(a[t].a,b))return t
return-1},
i:function(a){return P.ep(this)},
X:function(a,b){return a[b]},
ae:function(a,b){return a[b]},
a0:function(a,b,c){a[b]=c},
aF:function(a,b){delete a[b]},
Y:function(){var u="<non-identifier-key>",t=Object.create(null)
this.a0(t,u,t)
this.aF(t,u)
return t},
$iem:1}
H.cb.prototype={}
H.cc.prototype={
gj:function(a){return this.a.a},
gp:function(a){var u=this.a,t=new H.cd(u,u.r,this.$ti)
t.c=u.e
return t}}
H.cd.prototype={
gm:function(){return this.d},
l:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.a8(t))
else{t=u.c
if(t==null){u.sa9(null)
return!1}else{u.sa9(t.a)
u.c=u.c.c
return!0}}},
sa9:function(a){this.d=H.n(a,H.j(this,0))},
$iQ:1}
H.dg.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.dh.prototype={
$2:function(a,b){return this.a(a,b)},
$S:10}
H.di.prototype={
$1:function(a){return this.a(H.o(a))},
$S:11}
H.bN.prototype={
i:function(a){return"RegExp/"+H.f(this.a)+"/"},
gaH:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.el(u.a,t.multiline,!t.ignoreCase,!0)},
aG:function(a,b){var u,t=this.gaH()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.d1(u)},
$idR:1,
$iaE:1}
H.d1.prototype={
gaS:function(){var u=this.b
return u.index+u[0].length},
h:function(a,b){return C.a.h(this.b,b)},
$ib_:1}
H.cG.prototype={
gm:function(){return this.d},
l:function(){var u,t,s,r=this,q=r.b
if(q==null)return!1
u=r.c
if(u<=q.length){t=r.a.aG(q,u)
if(t!=null){r.d=t
s=t.gaS()
r.c=t.b.index===s?s+1:s
return!0}}r.b=r.d=null
return!1},
$iQ:1,
$aQ:function(){return[P.b_]}}
P.cJ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:8}
P.cI.prototype={
$1:function(a){var u,t
this.a.a=H.h(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:12}
P.cK.prototype={
$0:function(){this.a.$0()},
$S:1}
P.cL.prototype={
$0:function(){this.a.$0()},
$S:1}
P.d6.prototype={
aC:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bh(new P.d7(this,b),0),a)
else throw H.e(P.R("`setTimeout()` not found."))}}
P.d7.prototype={
$0:function(){this.b.$0()},
$S:0}
P.a_.prototype={
b1:function(a){if(this.c!==6)return!0
return this.b.b.a4(H.h(this.d,{func:1,ret:P.H,args:[P.t]}),a.a,P.H,P.t)},
b_:function(a){var u=this.e,t=P.t,s={futureOr:1,type:H.j(this,1)},r=this.b.b
if(H.bi(u,{func:1,args:[P.t,P.I]}))return H.e0(r.b9(u,a.a,a.b,null,t,P.I),s)
else return H.e0(r.a4(H.h(u,{func:1,args:[P.t]}),a.a,null,t),s)}}
P.N.prototype={
at:function(a,b,c){var u,t,s,r=H.j(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.y
if(u!==C.b){u.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.fG(b,u)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.N($.y,[c])
s=b==null?1:3
this.ab(new P.a_(t,s,a,b,[r,c]))
return t},
bc:function(a,b){return this.at(a,null,b)},
ab:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ia_")
t.c=a}else{if(s===2){u=H.k(t.c,"$iN")
s=u.a
if(s<4){u.ab(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.db(null,null,s,H.h(new P.cS(t,a),{func:1,ret:-1}))}},
ag:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ia_")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iN")
u=q.a
if(u<4){q.ag(a)
return}p.a=u
p.c=q.c}o.a=p.P(a)
u=p.b
u.toString
P.db(null,null,u,H.h(new P.cW(o,p),{func:1,ret:-1}))}},
a_:function(){var u=H.k(this.c,"$ia_")
this.c=null
return this.P(u)},
P:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
ac:function(a){var u,t,s=this,r=H.j(s,0)
H.e0(a,{futureOr:1,type:r})
u=s.$ti
if(H.dY(a,"$iaz",u,"$aaz"))if(H.dY(a,"$iN",u,null))P.eB(a,s)
else P.fB(a,s)
else{t=s.a_()
H.n(a,r)
s.a=4
s.c=a
P.aH(s,t)}},
ad:function(a,b){var u,t=this
H.k(b,"$iI")
u=t.a_()
t.a=8
t.c=new P.F(a,b)
P.aH(t,u)},
$iaz:1}
P.cS.prototype={
$0:function(){P.aH(this.a,this.b)},
$S:1}
P.cW.prototype={
$0:function(){P.aH(this.b,this.a.a)},
$S:1}
P.cT.prototype={
$1:function(a){var u=this.a
u.a=0
u.ac(a)},
$S:8}
P.cU.prototype={
$2:function(a,b){H.k(b,"$iI")
this.a.ad(a,b)},
$1:function(a){return this.$2(a,null)},
$S:13}
P.cV.prototype={
$0:function(){this.a.ad(this.b,this.c)},
$S:1}
P.cZ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.as(H.h(s.d,{func:1}),null)}catch(r){u=H.a6(r)
t=H.aM(r)
if(o.d){s=H.k(o.a.a.c,"$iF").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iF")
else q.b=new P.F(u,t)
q.a=!0
return}if(!!J.A(n).$iaz){if(n instanceof P.N&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iF")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.bc(new P.d_(p),null)
s.a=!1}},
$S:0}
P.d_.prototype={
$1:function(a){return this.a},
$S:14}
P.cY.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.j(s,0)
q=H.n(n.c,r)
p=H.j(s,1)
n.a.b=s.b.b.a4(H.h(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a6(o)
t=H.aM(o)
s=n.a
s.b=new P.F(u,t)
s.a=!0}},
$S:0}
P.cX.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iF")
r=m.c
if(H.dc(r.b1(u))&&r.e!=null){q=m.b
q.b=r.b_(u)
q.a=!1}}catch(p){t=H.a6(p)
s=H.aM(p)
r=H.k(m.a.a.c,"$iF")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.F(t,s)
n.a=!0}},
$S:0}
P.b8.prototype={}
P.cs.prototype={
gj:function(a){var u,t,s=this,r={},q=new P.N($.y,[P.u])
r.a=0
u=H.j(s,0)
t=H.h(new P.cu(r,s),{func:1,ret:-1,args:[u]})
H.h(new P.cv(r,q),{func:1,ret:-1})
W.a5(s.a,s.b,t,!1,u)
return q}}
P.cu.prototype={
$1:function(a){H.n(a,H.j(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.j(this.b,0)]}}}
P.cv.prototype={
$0:function(){this.b.ac(this.a.a)},
$S:1}
P.ct.prototype={}
P.F.prototype={
i:function(a){return H.f(this.a)},
$ial:1}
P.d8.prototype={$ihk:1}
P.da.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.b0():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:1}
P.d2.prototype={
ba:function(a){var u,t,s,r=null
H.h(a,{func:1,ret:-1})
try{if(C.b===$.y){a.$0()
return}P.eF(r,r,this,a,-1)}catch(s){u=H.a6(s)
t=H.aM(s)
P.d9(r,r,this,u,H.k(t,"$iI"))}},
bb:function(a,b,c){var u,t,s,r=null
H.h(a,{func:1,ret:-1,args:[c]})
H.n(b,c)
try{if(C.b===$.y){a.$1(b)
return}P.eG(r,r,this,a,b,-1,c)}catch(s){u=H.a6(s)
t=H.aM(s)
P.d9(r,r,this,u,H.k(t,"$iI"))}},
aM:function(a,b){return new P.d4(this,H.h(a,{func:1,ret:b}),b)},
aj:function(a){return new P.d3(this,H.h(a,{func:1,ret:-1}))},
aN:function(a,b){return new P.d5(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
as:function(a,b){H.h(a,{func:1,ret:b})
if($.y===C.b)return a.$0()
return P.eF(null,null,this,a,b)},
a4:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.n(b,d)
if($.y===C.b)return a.$1(b)
return P.eG(null,null,this,a,b,c,d)},
b9:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.n(b,e)
H.n(c,f)
if($.y===C.b)return a.$2(b,c)
return P.fH(null,null,this,a,b,c,d,e,f)}}
P.d4.prototype={
$0:function(){return this.a.as(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.d3.prototype={
$0:function(){return this.a.ba(this.b)},
$S:0}
P.d5.prototype={
$1:function(a){var u=this.c
return this.a.bb(this.b,H.n(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ce.prototype={$iB:1,$ip:1,$id:1}
P.G.prototype={
gp:function(a){return new H.aX(a,this.gj(a),[H.bl(this,a,"G",0)])},
q:function(a,b){return this.h(a,b)},
D:function(a,b){var u
if(this.gj(a)===0)return""
u=P.dS("",a,b)
return u.charCodeAt(0)==0?u:u},
a5:function(a,b){var u,t=this,s=H.x([],[H.bl(t,a,"G",0)])
C.a.sj(s,t.gj(a))
for(u=0;u<t.gj(a);++u)C.a.k(s,u,t.h(a,u))
return s},
J:function(a){return this.a5(a,!0)},
n:function(a,b){var u,t=this,s=[H.bl(t,a,"G",0)]
H.q(b,"$id",s,"$ad")
u=H.x([],s)
C.a.sj(u,C.d.n(t.gj(a),b.gj(b)))
C.a.B(u,0,t.gj(a),a)
C.a.B(u,t.gj(a),u.length,b)
return u},
i:function(a){return P.eh(a,"[","]")}}
P.ch.prototype={}
P.ci.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:15}
P.cj.prototype={
gam:function(a){var u=this,t=H.j(u,0),s=[P.E,H.j(u,0),H.j(u,1)]
return H.eq(new H.cc(u,[t]),H.h(new P.ck(u),{func:1,ret:s,args:[t]}),t,s)},
ai:function(a){var u,t,s
H.q(a,"$ip",[[P.E,H.j(this,0),H.j(this,1)]],"$ap")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.bo)(a),++t){s=a[t]
this.k(0,s.a,s.b)}},
gj:function(a){return this.a},
i:function(a){return P.ep(this)},
$icg:1}
P.ck.prototype={
$1:function(a){var u=this.a,t=H.j(u,0)
H.n(a,t)
return new P.E(a,u.h(0,a),[t,H.j(u,1)])},
$S:function(){var u=this.a,t=H.j(u,0)
return{func:1,ret:[P.E,t,H.j(u,1)],args:[t]}}}
P.bd.prototype={}
P.H.prototype={}
P.aK.prototype={}
P.al.prototype={}
P.bv.prototype={
i:function(a){return"Assertion failed"}}
P.b0.prototype={
i:function(a){return"Throw of null."}}
P.a0.prototype={
gW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gV:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gW()+o+u
if(!q.a)return t
s=q.gV()
r=P.aR(q.b)
return t+s+": "+r}}
P.b1.prototype={
gW:function(){return"RangeError"},
gV:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.bI.prototype={
gW:function(){return"RangeError"},
gV:function(){var u,t=H.P(this.b)
if(typeof t!=="number")return t.F()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gj:function(a){return this.f}}
P.cE.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.cC.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.b4.prototype={
i:function(a){return"Bad state: "+this.a}}
P.by.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aR(u)+"."}}
P.b3.prototype={
i:function(a){return"Stack Overflow"},
$ial:1}
P.bA.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.cR.prototype={
i:function(a){return"Exception: "+this.a}}
P.bH.prototype={
i:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.f(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.c.U(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.u.prototype={}
P.p.prototype={
D:function(a,b){var u,t=this.gp(this)
if(!t.l())return""
if(b===""){u=""
do u+=H.f(t.gm())
while(t.l())}else{u=H.f(t.gm())
for(;t.l();)u=u+b+H.f(t.gm())}return u.charCodeAt(0)==0?u:u},
gj:function(a){var u,t=this.gp(this)
for(u=0;t.l();)++u
return u},
q:function(a,b){var u,t,s
P.eu(b,"index")
for(u=this.gp(this),t=0;u.l();){s=u.gm()
if(b===t)return s;++t}throw H.e(P.bJ(b,this,"index",null,t))},
i:function(a){return P.fl(this,"(",")")}}
P.Q.prototype={}
P.d.prototype={$iB:1,$ip:1}
P.E.prototype={
i:function(a){return"MapEntry("+H.f(this.a)+": "+H.f(this.b)+")"}}
P.z.prototype={
gu:function(a){return P.t.prototype.gu.call(this,this)},
i:function(a){return"null"}}
P.w.prototype={}
P.t.prototype={constructor:P.t,$it:1,
E:function(a,b){return this===b},
gu:function(a){return H.aC(this)},
i:function(a){return"Instance of '"+H.aD(this)+"'"},
toString:function(){return this.i(this)}}
P.b_.prototype={}
P.aE.prototype={$idR:1}
P.I.prototype={}
P.i.prototype={$idR:1}
P.aF.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.bt.prototype={
i:function(a){return String(a)}}
W.bu.prototype={
i:function(a){return String(a)}}
W.aP.prototype={$iaP:1}
W.aQ.prototype={$iaQ:1}
W.a7.prototype={
gj:function(a){return a.length}}
W.ay.prototype={
gj:function(a){return a.length}}
W.bz.prototype={}
W.a9.prototype={$ia9:1}
W.bB.prototype={
i:function(a){return String(a)}}
W.b9.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.r(u,b)
return H.k(u[b],"$im")},
k:function(a,b,c){var u
H.k(c,"$im")
u=this.b
if(b<0||b>=u.length)return H.r(u,b)
this.a.replaceChild(c,u[b])},
gp:function(a){var u=this.J(this)
return new J.au(u,u.length,[H.j(u,0)])},
a1:function(a,b){var u,t
H.q(b,"$ip",[W.m],"$ap")
for(u=J.bp(b),t=this.a;u.l();)t.appendChild(u.gm())},
R:function(a){J.e7(this.a)},
$aB:function(){return[W.m]},
$aG:function(){return[W.m]},
$ap:function(){return[W.m]},
$ad:function(){return[W.m]}}
W.m.prototype={
gw:function(a){return new W.b9(a,a.children)},
sw:function(a,b){var u,t
H.q(b,"$id",[W.m],"$ad")
u=H.x(b.slice(0),[H.j(b,0)])
t=this.gw(a)
t.R(0)
t.a1(0,u)},
i:function(a){return a.localName},
$im:1}
W.a.prototype={$ia:1}
W.aa.prototype={
aD:function(a,b,c,d){return a.addEventListener(b,H.bh(H.h(c,{func:1,args:[W.a]}),1),!1)},
$iaa:1}
W.bG.prototype={
gj:function(a){return a.length}}
W.am.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bJ(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.k(c,"$il")
throw H.e(P.R("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.l]},
$iaU:1,
$aaU:function(){return[W.l]},
$aG:function(){return[W.l]},
$ip:1,
$ap:function(){return[W.l]},
$id:1,
$ad:function(){return[W.l]},
$iam:1,
$aa1:function(){return[W.l]}}
W.K.prototype={$iK:1}
W.cf.prototype={
i:function(a){return String(a)}}
W.v.prototype={$iv:1}
W.cM.prototype={
k:function(a,b,c){var u,t
H.k(c,"$il")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.r(t,b)
u.replaceChild(c,t[b])},
gp:function(a){var u=this.a.childNodes
return new W.aS(u,u.length,[H.bl(C.x,u,"a1",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.r(u,b)
return u[b]},
$aB:function(){return[W.l]},
$aG:function(){return[W.l]},
$ap:function(){return[W.l]},
$ad:function(){return[W.l]}}
W.l.prototype={
aq:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
b6:function(a,b){var u,t
try{u=a.parentNode
J.f6(u,b,a)}catch(t){H.a6(t)}return a},
aE:function(a){var u
for(;u=a.firstChild,u!=null;)a.removeChild(u)},
i:function(a){var u=a.nodeValue
return u==null?this.ay(a):u},
aI:function(a,b,c){return a.replaceChild(b,c)},
$il:1}
W.aB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bJ(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.k(c,"$il")
throw H.e(P.R("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.l]},
$iaU:1,
$aaU:function(){return[W.l]},
$aG:function(){return[W.l]},
$ip:1,
$ap:function(){return[W.l]},
$id:1,
$ad:function(){return[W.l]},
$aa1:function(){return[W.l]}}
W.cp.prototype={
gj:function(a){return a.length}}
W.b2.prototype={}
W.Z.prototype={}
W.b7.prototype={$ieA:1}
W.cO.prototype={}
W.dT.prototype={}
W.cP.prototype={}
W.cQ.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ia"))},
$S:16}
W.a1.prototype={
gp:function(a){return new W.aS(a,this.gj(a),[H.bl(this,a,"a1",0)])}}
W.aS.prototype={
l:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.saf(J.ak(u.a,t))
u.c=t
return!0}u.saf(null)
u.c=s
return!1},
gm:function(){return this.d},
saf:function(a){this.d=H.n(a,H.j(this,0))},
$iQ:1}
W.cN.prototype={$iaa:1,$ieA:1}
W.ba.prototype={}
W.bb.prototype={}
W.bc.prototype={}
W.be.prototype={}
W.bf.prototype={}
P.bD.prototype={
gO:function(){var u=this.b,t=H.bk(u,"G",0),s=W.m
return new H.aA(new H.b6(u,H.h(new P.bE(),{func:1,ret:P.H,args:[t]}),[t]),H.h(new P.bF(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.k(c,"$im")
u=this.gO()
J.fc(u.b.$1(u.a.q(0,b)),c)},
a1:function(a,b){var u,t,s
H.q(b,"$ip",[W.m],"$ap")
for(u=b.length,t=this.b.a,s=0;s<b.length;b.length===u||(0,H.bo)(b),++s)t.appendChild(H.k(b[s],"$im"))},
R:function(a){J.e7(this.b.a)},
gj:function(a){var u=this.gO().a
return u.gj(u)},
h:function(a,b){var u=this.gO()
return u.b.$1(u.a.q(0,b))},
gp:function(a){var u=P.aY(this.gO(),!1,W.m)
return new J.au(u,u.length,[H.j(u,0)])},
$aB:function(){return[W.m]},
$aG:function(){return[W.m]},
$ap:function(){return[W.m]},
$ad:function(){return[W.m]}}
P.bE.prototype={
$1:function(a){return!!J.A(H.k(a,"$il")).$im},
$S:17}
P.bF.prototype={
$1:function(a){return H.ah(H.k(a,"$il"),"$im")},
$S:18}
P.d0.prototype={
b2:function(){return Math.random()}}
P.C.prototype={
i:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
E:function(a,b){if(b==null)return!1
return!!J.A(b).$iC&&this.a==b.a&&this.b==b.b},
gu:function(a){var u,t=J.aO(this.a),s=J.aO(this.b)
s=P.eC(P.eC(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
n:function(a,b){var u,t,s,r,q=this,p=q.$ti
H.q(b,"$iC",p,"$aC")
u=q.a
t=b.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.ar(t)
s=H.j(q,0)
t=H.n(u+t,s)
u=q.b
r=b.b
if(typeof u!=="number")return u.n()
if(typeof r!=="number")return H.ar(r)
return new P.C(t,H.n(u+r,s),p)},
A:function(a,b){var u,t,s=this,r=s.a
if(typeof r!=="number")return r.A()
u=H.j(s,0)
r=H.n(r*b,u)
t=s.b
if(typeof t!=="number")return t.A()
return new P.C(r,H.n(t*b,u),s.$ti)}}
P.b.prototype={
gw:function(a){return new P.bD(new W.cM(a))}}
F.aG.prototype={}
F.b5.prototype={
I:function(a){var u,t=this,s=t.r,r=t.a
s.moveTo(r.a,r.b)
t.sS(0,t.a.n(0,new P.C(Math.cos(t.b),Math.sin(t.b),[P.aK]).A(0,a)))
r=t.r
r.lineWidth=t.c
s=t.a
r.lineTo(s.a,s.b)
s=t.d
if(0>=s.length)return H.r(s,0)
s="rgb("+H.f(s[0])+", "
u=t.d
if(1>=u.length)return H.r(u,1)
u=s+H.f(u[1])+", "
s=t.d
if(2>=s.length)return H.r(s,2)
r.strokeStyle=u+H.f(s[2])+")"
t.al()},
a6:function(a){var u=this.c
this.c=u+C.e.a2(a,1-u,1/0)},
M:function(a){var u=P.w
this.C(P.V(3,new F.cx(this,H.q(a,"$id",[u],"$ad")),u))},
C:function(a){var u,t=P.w
H.q(a,"$id",[t],"$ad")
if(a.length!==3)throw H.e(P.ef("Color "+H.f(a)+" does not have three values"))
u=H.j(a,0)
this.saP(0,new H.W(a,H.h(new F.cy(),{func:1,ret:t,args:[u]}),[u,t]).J(0))},
b4:function(){var u=this,t=u.e,s=u.a.A(0,1),r=u.b,q=P.aY(u.d,!0,P.w);(t&&C.a).t(t,new F.aG(s,r,u.c,q))},
b8:function(){var u,t=this,s=t.e
if(0>=s.length)return H.r(s,-1)
u=s.pop()
t.sS(0,u.a)
t.b=u.b
t.C(u.d)
t.c=u.c},
al:function(){var u=this.r
u.closePath()
u.stroke()
u.beginPath()},
R:function(a){var u=this.f
this.r.clearRect(0,0,u.width,u.height)},
sS:function(a,b){this.a=H.q(b,"$iC",[P.w],"$aC")},
saP:function(a,b){this.d=H.q(b,"$id",[P.w],"$ad")},
saX:function(a){this.e=H.q(a,"$id",[F.aG],"$ad")}}
F.cx.prototype={
$1:function(a){var u,t=this.a.d
if(a>=t.length)return H.r(t,a)
t=t[a]
u=this.b
if(a>=u.length)return H.r(u,a)
return J.dI(t,u[a])},
$S:19}
F.cy.prototype={
$1:function(a){return J.f7(H.bn(a),0,255)},
$S:4}
F.bT.prototype={
aB:function(a,b,c,d,e,f,g,h,i){i.a*=0.017453292519943295
this.saw(b.gaO(b))
this.saT(b.gaR())
this.saQ(P.eo(["F",new F.bW(b,c),"G",new F.bX(b,c),"H",new F.bY(b,f,c),"K",new F.c1(b,f,c),"J",new F.c2(b,d,c),"^",new F.c3(b,d),"-",new F.c4(i,b),"+",new F.c5(i,b),"|",new F.c6(b),">",new F.c7(b,f),"<",new F.c8(b,f),"[",b.gb3(),"]",b.gb7(),"*",new F.bZ(b,e),"/",new F.c_(b,h),"\\",new F.c0(b,h)],P.i,{func:1}))},
ar:function(){var u,t,s,r=this,q=r.c
if(q!=null)q.$0()
for(q=r.a,u=0;t=q.a,u<t.length;++u){s=r.b.h(0,t[u])
if(s!=null)s.$0()}q=r.d
if(q!=null)q.$0()},
saQ:function(a){this.b=H.q(a,"$icg",[P.i,{func:1}],"$acg")},
saw:function(a){this.c=H.h(a,{func:1})},
saT:function(a){this.d=H.h(a,{func:1})}}
F.bW.prototype={
$0:function(){return this.a.I(this.b)},
$S:0}
F.bX.prototype={
$0:function(){return this.a.I(this.b)},
$S:0}
F.bY.prototype={
$0:function(){var u=this.a
u.M(this.b)
u.I(this.c)},
$S:1}
F.c1.prototype={
$0:function(){var u=this.a,t=this.b,s=P.w,r=H.j(t,0)
u.M(new H.W(t,H.h(new F.bV(),{func:1,ret:s,args:[r]}),[r,s]).J(0))
u.I(this.c)},
$S:1}
F.bV.prototype={
$1:function(a){H.bn(a)
if(typeof a!=="number")return a.au()
return-a},
$S:4}
F.c2.prototype={
$0:function(){var u=this.a
u.C(this.b)
u.I(this.c)},
$S:1}
F.c3.prototype={
$0:function(){return this.a.C(this.b)},
$S:0}
F.c4.prototype={
$0:function(){this.b.b+=-this.a.a
return},
$S:0}
F.c5.prototype={
$0:function(){this.b.b+=this.a.a
return},
$S:0}
F.c6.prototype={
$0:function(){this.a.b+=3.141592653589793
return},
$S:0}
F.c7.prototype={
$0:function(){return this.a.M(this.b)},
$S:0}
F.c8.prototype={
$0:function(){var u=this.b,t=P.w,s=H.j(u,0)
return this.a.M(new H.W(u,H.h(new F.bU(),{func:1,ret:t,args:[s]}),[s,t]).J(0))},
$S:0}
F.bU.prototype={
$1:function(a){H.bn(a)
if(typeof a!=="number")return a.au()
return-a},
$S:4}
F.bZ.prototype={
$0:function(){this.a.c=C.d.a2(this.b,0,1/0)
return},
$S:0}
F.c_.prototype={
$0:function(){return this.a.a6(this.b)},
$S:0}
F.c0.prototype={
$0:function(){return this.a.a6(1/this.b)},
$S:0}
F.bP.prototype={
aA:function(a,b){var u,t,s,r,q,p,o,n,m,l
this.c=0
this.sb5(P.en(P.aE,{func:1,ret:P.i}))
for(u=b.length,t=H.j(b,0),s={func:1,ret:P.H,args:[t]},r=[t],q=0;q<b.length;b.length===u||(0,H.bo)(b),++q){p=b[q]
o=P.aY(new H.b6(b,H.h(new F.bQ(p),s),r),!0,t)
n=H.j(o,0)
m=H.h(new F.bR(),{func:1,ret:P.u,args:[n,n]})
l=o.length-1
if(l-0<=32)H.ex(o,0,l,m,n)
else H.ew(o,0,l,m,n)
this.b.k(0,P.fu(H.e4(H.o(J.ak(p,1)))),new F.bS(o))}},
aU:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this;++b.c
u=P.i
t=P.V(b.a.length,new F.c9(b),u)
for(s=b.b,s=s.gam(s),r=s.a,s=new H.aZ(r.gp(r),s.b,[H.j(s,0),H.j(s,1)]),r=!!t.fixed$length,q=[H.j(t,0)],p=[u];s.l();){o=s.a
n=o.a
m=b.a
n.toString
if(typeof m!=="string")H.L(H.S(m))
m.length
n=new H.cG(n,m,0)
for(;n.l();){m=n.d.b
l=m.index
m=l+m[0].length
k=H.q(H.x([o.b.$0()],p),"$ip",q,"$ap")
if(r)H.L(P.R("replaceRange"))
j=t.length
P.ev(l,m,j)
i=m-l
h=l+1
if(i>=1){g=i-1
f=j-g
C.a.B(t,l,h,k)
if(g!==0){C.a.L(t,h,f,t,m)
C.a.sj(t,f)}}else{f=j+(1-i)
C.a.sj(t,f)
C.a.L(t,h,f,t,m)
C.a.B(t,l,h,k)}e=H.q(P.fs(i-1,"",u),"$ip",q,"$ap")
if(r)H.L(P.R("insertAll"))
m=t.length
if(h<0||h>m)H.L(P.an(h,0,m,"index",null))
d=e.length
C.a.sj(t,m+d)
c=h+d
C.a.L(t,c,t.length,t,h)
C.a.B(t,h,c,e)}}b.a=H.o(C.a.aY(t,"",new F.ca(),u))},
aV:function(a){var u
if(typeof a!=="number")return H.ar(a)
u=0
for(;u<=a;++u)this.aU(0)},
sb5:function(a){this.b=H.q(a,"$icg",[P.aE,{func:1,ret:P.i}],"$acg")}}
F.bQ.prototype={
$1:function(a){return J.aj(J.ak(H.ai(a),1),J.ak(this.a,1))},
$S:20}
F.bR.prototype={
$2:function(a,b){H.ai(a)
H.ai(b)
return J.f8(J.ak(a,0),J.ak(b,0))},
$S:21}
F.bS.prototype={
$0:function(){var u,t,s,r,q,p,o,n=C.t.b2()
for(u=this.a,t=u.length,s=0,r=0;r<u.length;u.length===t||(0,H.bo)(u),++r){q=u[r]
p=J.af(q)
o=H.bn(p.h(q,0))
if(typeof o!=="number")return H.ar(o)
s+=o
if(n<s)return H.o(p.h(q,2))}return H.o(J.ak(C.a.gao(u),2))},
$S:22}
F.c9.prototype={
$1:function(a){var u=this.a.a
if(a>=u.length)return H.r(u,a)
return u[a]},
$S:23}
F.ca.prototype={
$2:function(a,b){return J.dI(H.o(a),H.o(b))},
$S:24}
F.dv.prototype={
$1:function(a){var u,t=this.a.a
if(a>=t.length)return H.r(t,a)
u=J.e9(t[a],"=")
t=P.i
return new P.E(C.a.gaW(u),C.a.gao(u),[t,t])},
$S:9}
F.dw.prototype={
$1:function(a){var u=W.M("checkbox"),t=this.a.h(0,"gradDir"+a)
u.checked=J.aj(t==null?"1":t,"-1")
return u},
$S:25}
F.dx.prototype={
$1:function(a){return H.x(H.o(a).split(";"),[P.i])},
$S:26}
F.dy.prototype={
$1:function(a){var u,t,s,r,q,p,o
H.q(a,"$id",[P.i],"$ad")
u=document
t=u.createElement("div")
s=W.M(null)
r=s.style
r.width="30px"
r=J.af(a)
s.value=H.o(r.h(a,0))
q=W.M(null)
q.value=H.o(r.h(a,1))
p=W.M(null)
o=p.style
o.width="200px"
p.value=H.o(r.h(a,2))
u=u.createElement("button")
u.textContent="-"
r=W.v
W.a5(u,"click",H.h(new F.du(),{func:1,ret:-1,args:[r]}),!1,r)
C.f.sw(t,H.x([s,q,p,u],[W.m]))
return t},
$S:27}
F.du.prototype={
$1:function(a){return J.e8(H.ah(W.eD(H.k(a,"$iv").target),"$im").parentElement)},
$S:5}
F.dz.prototype={
$1:function(a){var u,t,s,r,q,p
H.k(a,"$iv")
u=document
t=u.createElement("div")
s=W.M(null)
r=s.style
r.width="30px"
s.value="1"
r=W.M(null)
q=W.M(null)
p=q.style
p.width="200px"
u=u.createElement("button")
u.textContent="-"
p=W.v
W.a5(u,"click",H.h(new F.dt(),{func:1,ret:-1,args:[p]}),!1,p)
C.f.sw(t,H.x([s,r,q,u],[W.m]))
this.a.appendChild(t)
return t},
$S:5}
F.dt.prototype={
$1:function(a){return J.e8(H.ah(W.eD(H.k(a,"$iv").target),"$im").parentElement)},
$S:5}
F.dA.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
H.k(a,"$iv")
u=C.c.n(C.c.n(J.dI(window.location.protocol,"//"),window.location.host),window.location.pathname)+"?"
t=J.dK(j.b.value,1)
s=J.dK(j.c.value,1)
r=j.d.value
q=j.e.value
p=j.f.value
o=j.a.c
n=P.i
m=H.j(o,0)
m=new H.W(o,H.h(new F.dq(),{func:1,ret:n,args:[m]}),[m,n]).D(0,",")
o=H.aN(m,"[","%5B")
o=H.aN(o,"]","%5D")
o=H.aN(o,"|","%7C")
m=j.r.h(0,"dist")
t=P.eo(["grad",t,"default",s,"axiom",r,"angle",q,"n",p,"prods",o,"run","true","dist",m==null?"5":m],n,n)
s=j.x
t.ai(P.V(s.children.length,new F.dr(s),[P.E,P.i,P.i]))
t=t.gam(t)
s=H.bk(t,"p",0)
l=u+H.eq(t,H.h(new F.ds(),{func:1,ret:n,args:[s]}),s,n).D(0,"&")
n=document
k=n.createElement("span")
k.textContent=l
n.body.appendChild(k)
window.getSelection().selectAllChildren(k)
n.execCommand("copy")
C.l.aq(k)
window.alert("Copied sharable link to clipboard")},
$S:2}
F.dq.prototype={
$1:function(a){return J.fa(H.ai(a),";")},
$S:28}
F.dr.prototype={
$1:function(a){var u,t="gradDir"+a,s=this.a.children
if(a>=s.length)return H.r(s,a)
s=H.dc(H.ah(H.k(s[a],"$im"),"$iK").checked)?"-1":"1"
u=P.i
return new P.E(t,s,[u,u])},
$S:9}
F.ds.prototype={
$1:function(a){var u=P.i
H.q(a,"$iE",[u,u],"$aE")
return H.f(a.a)+"="+H.f(a.b)},
$S:29}
F.dB.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
H.k(a,"$iv")
u=j.b
u.b=j.c
u.sS(0,j.d.A(0,1))
t=j.e
s=P.w
u.C(P.aY(P.V(3,new F.dl(t),null),!0,s))
r=j.f
q=P.V(r.children.length,new F.dm(r),[P.d,,])
r=j.a
r.c=q
p=F.fq(j.r.value,q)
p.aV(P.bm(j.x.value,null))
o=H.et(j.y.value,null)
if(o==null)o=25
n=o===-1?25:o
m=j.z.h(0,"dist")
m=H.es(m==null?"5":m)
if(m==null)m=5
l=P.V(3,new F.dn(j.Q,j.ch),s)
k=F.fr(p,u,n,m,P.V(3,new F.dp(t),s),l,!0)
k.ar()
r.b=k
H.h3(""+p.a.length)},
$S:2}
F.dl.prototype={
$1:function(a){var u=a*2
return P.bm(J.br(this.a.value,u+1,u+3),16)},
$S:3}
F.dm.prototype={
$1:function(a){var u,t=this.a,s=t.children
if(a>=s.length)return H.r(s,a)
s=H.es(H.ah(J.dJ(H.k(s[a],"$im")).h(0,0),"$iK").value)
if(s==null)s=1
u=t.children
if(a>=u.length)return H.r(u,a)
u=H.ah(J.dJ(H.k(u[a],"$im")).h(0,1),"$iK").value
t=t.children
if(a>=t.length)return H.r(t,a)
return[s,u,H.ah(J.dJ(H.k(t[a],"$im")).h(0,2),"$iK").value]},
$S:30}
F.dn.prototype={
$1:function(a){var u,t=a*2
t=P.bm(J.br(this.a.value,t+1,t+3),16)
u=this.b.children
if(a>=u.length)return H.r(u,a)
u=H.dc(H.ah(H.k(u[a],"$im"),"$iK").checked)?-1:1
if(typeof t!=="number")return t.A()
return t*u},
$S:3}
F.dp.prototype={
$1:function(a){var u=a*2
return P.bm(J.br(this.a.value,u+1,u+3),16)},
$S:3}
F.dC.prototype={
$1:function(a){H.k(a,"$iv")
this.a.d=!0},
$S:2}
F.dD.prototype={
$1:function(a){H.k(a,"$iv")
return this.a.d=!1},
$S:31}
F.dE.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m,l,k=this
H.k(a,"$iv")
u=k.a
if(u.d){t=k.b
s=a.clientX
r=a.clientY
q=P.w
p=[q]
o=H.q(W.ee(k.c,document.body),"$iC",p,"$aC")
n=o.a
if(typeof s!=="number")return s.ax()
if(typeof n!=="number")return H.ar(n)
o=o.b
if(typeof r!=="number")return r.ax()
if(typeof o!=="number")return H.ar(o)
m=C.e.T(window.pageXOffset)
l=C.e.T(window.pageYOffset)
t.sS(0,new P.C(s-n,r-o,p).n(0,new P.C(m,l,p)))
t.b=k.d
t.C(P.aY(P.V(3,new F.dk(k.e),null),!0,q))
u.b.ar()}},
$S:2}
F.dk.prototype={
$1:function(a){var u=a*2
return P.bm(J.br(this.a.value,u+1,u+3),16)},
$S:3};(function aliases(){var u=J.D.prototype
u.ay=u.i
u=J.aV.prototype
u.az=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers._instance_0u,r=hunkHelpers._instance_0i
u(P,"fM","fx",6)
u(P,"fN","fy",6)
u(P,"fO","fz",6)
t(P,"eL","fJ",0)
var q
s(q=F.b5.prototype,"gb3","b4",0)
s(q,"gb7","b8",0)
s(q,"gaR","al",0)
r(q,"gaO","R",0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.t,null)
s(P.t,[H.dP,J.D,J.au,P.p,H.aX,P.Q,H.cz,P.al,H.ax,H.bg,P.cj,H.cb,H.cd,H.bN,H.d1,H.cG,P.d6,P.a_,P.N,P.b8,P.cs,P.ct,P.F,P.d8,P.bd,P.G,P.H,P.w,P.b3,P.cR,P.bH,P.d,P.E,P.z,P.b_,P.aE,P.I,P.i,P.aF,W.bz,W.a1,W.aS,W.cN,P.d0,P.C,F.aG,F.b5,F.bT,F.bP])
s(J.D,[J.bK,J.bM,J.aV,J.a2,J.ab,J.a3,W.aa,W.aQ,W.ba,W.bB,W.a,W.bb,W.cf,W.be])
s(J.aV,[J.cm,J.ad,J.a4])
t(J.dO,J.a2)
s(J.ab,[J.aT,J.bL])
s(P.p,[H.B,H.aA,H.b6])
s(H.B,[H.ac,H.cc])
t(H.bC,H.aA)
s(P.Q,[H.aZ,H.cF])
t(H.W,H.ac)
s(P.al,[H.cl,H.bO,H.cD,H.cB,H.bx,H.co,P.bv,P.b0,P.a0,P.cE,P.cC,P.b4,P.by,P.bA])
s(H.ax,[H.dH,H.cw,H.dg,H.dh,H.di,P.cJ,P.cI,P.cK,P.cL,P.d7,P.cS,P.cW,P.cT,P.cU,P.cV,P.cZ,P.d_,P.cY,P.cX,P.cu,P.cv,P.da,P.d4,P.d3,P.d5,P.ci,P.ck,W.cQ,P.bE,P.bF,F.cx,F.cy,F.bW,F.bX,F.bY,F.c1,F.bV,F.c2,F.c3,F.c4,F.c5,F.c6,F.c7,F.c8,F.bU,F.bZ,F.c_,F.c0,F.bQ,F.bR,F.bS,F.c9,F.ca,F.dv,F.dw,F.dx,F.dy,F.du,F.dz,F.dt,F.dA,F.dq,F.dr,F.ds,F.dB,F.dl,F.dm,F.dn,F.dp,F.dC,F.dD,F.dE,F.dk])
s(H.cw,[H.cr,H.av])
t(H.cH,P.bv)
t(P.ch,P.cj)
t(H.aW,P.ch)
t(P.d2,P.d8)
t(P.ce,P.bd)
s(P.w,[P.aK,P.u])
s(P.a0,[P.b1,P.bI])
s(W.aa,[W.l,W.b7])
s(W.l,[W.m,W.a7])
s(W.m,[W.c,P.b])
s(W.c,[W.bt,W.bu,W.aP,W.a9,W.bG,W.K,W.cp,W.b2])
t(W.ay,W.ba)
s(P.ce,[W.b9,W.cM,P.bD])
t(W.bc,W.bb)
t(W.am,W.bc)
t(W.Z,W.a)
t(W.v,W.Z)
t(W.bf,W.be)
t(W.aB,W.bf)
t(W.cO,P.cs)
t(W.dT,W.cO)
t(W.cP,P.ct)
u(P.bd,P.G)
u(W.ba,W.bz)
u(W.bb,P.G)
u(W.bc,W.a1)
u(W.be,P.G)
u(W.bf,W.a1)})();(function constants(){var u=hunkHelpers.makeConstList
C.f=W.a9.prototype
C.u=J.D.prototype
C.a=J.a2.prototype
C.d=J.aT.prototype
C.e=J.ab.prototype
C.c=J.a3.prototype
C.v=J.a4.prototype
C.x=W.aB.prototype
C.k=J.cm.prototype
C.l=W.b2.prototype
C.h=J.ad.prototype
C.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.m=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.r=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.o=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.q=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.p=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.j=function(hooks) { return hooks; }

C.t=new P.d0()
C.b=new P.d2()
C.w=H.x(u([0,0,0]),[P.w])})()
var v={mangledGlobalNames:{u:"int",aK:"double",w:"num",i:"String",H:"bool",z:"Null",d:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1},{func:1,ret:P.z},{func:1,ret:P.z,args:[W.v]},{func:1,ret:P.u,args:[P.u]},{func:1,ret:P.w,args:[P.w]},{func:1,ret:-1,args:[W.v]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:[P.E,P.i,P.i],args:[P.u]},{func:1,args:[,P.i]},{func:1,args:[P.i]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[,],opt:[P.I]},{func:1,ret:[P.N,,],args:[,]},{func:1,ret:P.z,args:[,,]},{func:1,args:[W.a]},{func:1,ret:P.H,args:[W.l]},{func:1,ret:W.m,args:[W.l]},{func:1,ret:P.w,args:[P.u]},{func:1,ret:P.H,args:[[P.d,,]]},{func:1,ret:P.u,args:[[P.d,,],[P.d,,]]},{func:1,ret:P.i},{func:1,ret:P.i,args:[P.u]},{func:1,ret:P.i,args:[P.i,P.i]},{func:1,ret:W.K,args:[P.u]},{func:1,ret:[P.d,P.i],args:[P.i]},{func:1,ret:W.a9,args:[[P.d,P.i]]},{func:1,ret:P.i,args:[[P.d,,]]},{func:1,ret:P.i,args:[[P.E,P.i,P.i]]},{func:1,ret:[P.d,,],args:[P.u]},{func:1,ret:P.H,args:[W.v]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.U=0
$.aw=null
$.eb=null
$.dU=!1
$.eP=null
$.eJ=null
$.eT=null
$.dd=null
$.dj=null
$.e1=null
$.ao=null
$.aI=null
$.aJ=null
$.dV=!1
$.y=C.b
$.J=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"h8","eV",function(){return H.eO("_$dart_dartClosure")})
u($,"h9","e5",function(){return H.eO("_$dart_js")})
u($,"ha","eW",function(){return H.X(H.cA({
toString:function(){return"$receiver$"}}))})
u($,"hb","eX",function(){return H.X(H.cA({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"hc","eY",function(){return H.X(H.cA(null))})
u($,"hd","eZ",function(){return H.X(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hg","f1",function(){return H.X(H.cA(void 0))})
u($,"hh","f2",function(){return H.X(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"hf","f0",function(){return H.X(H.ey(null))})
u($,"he","f_",function(){return H.X(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"hj","f4",function(){return H.X(H.ey(void 0))})
u($,"hi","f3",function(){return H.X(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"hl","e6",function(){return P.fw()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.D,CanvasPattern:J.D,DOMError:J.D,MediaError:J.D,Navigator:J.D,NavigatorConcurrentHardware:J.D,NavigatorUserMediaError:J.D,OverconstrainedError:J.D,PositionError:J.D,Selection:J.D,SQLError:J.D,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.bt,HTMLAreaElement:W.bu,HTMLCanvasElement:W.aP,CanvasRenderingContext2D:W.aQ,CDATASection:W.a7,CharacterData:W.a7,Comment:W.a7,ProcessingInstruction:W.a7,Text:W.a7,CSSStyleDeclaration:W.ay,MSStyleCSSProperties:W.ay,CSS2Properties:W.ay,HTMLDivElement:W.a9,DOMException:W.bB,Element:W.m,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,EventTarget:W.aa,HTMLFormElement:W.bG,HTMLCollection:W.am,HTMLFormControlsCollection:W.am,HTMLOptionsCollection:W.am,HTMLInputElement:W.K,Location:W.cf,MouseEvent:W.v,DragEvent:W.v,PointerEvent:W.v,WheelEvent:W.v,Document:W.l,DocumentFragment:W.l,HTMLDocument:W.l,ShadowRoot:W.l,XMLDocument:W.l,Attr:W.l,DocumentType:W.l,Node:W.l,NodeList:W.aB,RadioNodeList:W.aB,HTMLSelectElement:W.cp,HTMLSpanElement:W.b2,CompositionEvent:W.Z,FocusEvent:W.Z,KeyboardEvent:W.Z,TextEvent:W.Z,TouchEvent:W.Z,UIEvent:W.Z,Window:W.b7,DOMWindow:W.b7,SVGAElement:P.b,SVGAnimateElement:P.b,SVGAnimateMotionElement:P.b,SVGAnimateTransformElement:P.b,SVGAnimationElement:P.b,SVGCircleElement:P.b,SVGClipPathElement:P.b,SVGDefsElement:P.b,SVGDescElement:P.b,SVGDiscardElement:P.b,SVGEllipseElement:P.b,SVGFEBlendElement:P.b,SVGFEColorMatrixElement:P.b,SVGFEComponentTransferElement:P.b,SVGFECompositeElement:P.b,SVGFEConvolveMatrixElement:P.b,SVGFEDiffuseLightingElement:P.b,SVGFEDisplacementMapElement:P.b,SVGFEDistantLightElement:P.b,SVGFEFloodElement:P.b,SVGFEFuncAElement:P.b,SVGFEFuncBElement:P.b,SVGFEFuncGElement:P.b,SVGFEFuncRElement:P.b,SVGFEGaussianBlurElement:P.b,SVGFEImageElement:P.b,SVGFEMergeElement:P.b,SVGFEMergeNodeElement:P.b,SVGFEMorphologyElement:P.b,SVGFEOffsetElement:P.b,SVGFEPointLightElement:P.b,SVGFESpecularLightingElement:P.b,SVGFESpotLightElement:P.b,SVGFETileElement:P.b,SVGFETurbulenceElement:P.b,SVGFilterElement:P.b,SVGForeignObjectElement:P.b,SVGGElement:P.b,SVGGeometryElement:P.b,SVGGraphicsElement:P.b,SVGImageElement:P.b,SVGLineElement:P.b,SVGLinearGradientElement:P.b,SVGMarkerElement:P.b,SVGMaskElement:P.b,SVGMetadataElement:P.b,SVGPathElement:P.b,SVGPatternElement:P.b,SVGPolygonElement:P.b,SVGPolylineElement:P.b,SVGRadialGradientElement:P.b,SVGRectElement:P.b,SVGScriptElement:P.b,SVGSetElement:P.b,SVGStopElement:P.b,SVGStyleElement:P.b,SVGElement:P.b,SVGSVGElement:P.b,SVGSwitchElement:P.b,SVGSymbolElement:P.b,SVGTSpanElement:P.b,SVGTextContentElement:P.b,SVGTextElement:P.b,SVGTextPathElement:P.b,SVGTextPositioningElement:P.b,SVGTitleElement:P.b,SVGUseElement:P.b,SVGViewElement:P.b,SVGGradientElement:P.b,SVGComponentTransferFunctionElement:P.b,SVGFEDropShadowElement:P.b,SVGMPathElement:P.b})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Selection:true,SQLError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,DOMException:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLInputElement:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLSpanElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.eR,[])
else F.eR([])})})()
//# sourceMappingURL=main.dart.js.map
