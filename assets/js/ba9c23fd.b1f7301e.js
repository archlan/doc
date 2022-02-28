"use strict";(self.webpackChunk_archlan_docs=self.webpackChunk_archlan_docs||[]).push([[286],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,g=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return t?r.createElement(g,c(c({ref:n},l),{},{components:t})):r.createElement(g,c({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8706:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={sidebar_position:2},p="Updating ArchLan packages",u={unversionedId:"dev/update-archlan-package",id:"dev/update-archlan-package",title:"Updating ArchLan packages",description:"This section lists everything you need to do in order to update an ArchLan official package",source:"@site/docs/dev/update-archlan-package.mdx",sourceDirName:"dev",slug:"/dev/update-archlan-package",permalink:"/doc/dev/update-archlan-package",editUrl:"https://github.com/archlan/documentation/edit/main/docs/dev/update-archlan-package.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Package repository structure",permalink:"/doc/dev/git-package-repo"},next:{title:"Prepare a new release",permalink:"/doc/dev/new-release-howto"}},l=[{value:"PKGBUILD version",id:"pkgbuild-version",children:[],level:2}],s={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-archlan-packages"},"Updating ArchLan packages"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section lists everything you need to do in order to update an ArchLan official package")),(0,o.kt)("h2",{id:"pkgbuild-version"},"PKGBUILD version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pkgname="archlan-hooks"\npkgver=1.0              # This changes whether it is a new version or not\npkgrel=2                # Release number\n...\n')),(0,o.kt)("p",null,"Just change the release number (increments at each new release)\nand also modify the package version depending on if it is a new version or not."))}d.isMDXComponent=!0}}]);