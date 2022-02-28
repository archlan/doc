"use strict";(self.webpackChunk_archlan_docs=self.webpackChunk_archlan_docs||[]).push([[537],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9529:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},s="Prepare a new release",c={unversionedId:"dev/new-release-howto",id:"dev/new-release-howto",title:"Prepare a new release",description:"This section lists everything that I must take in consideration",source:"@site/docs/dev/new-release-howto.mdx",sourceDirName:"dev",slug:"/dev/new-release-howto",permalink:"/doc/dev/new-release-howto",editUrl:"https://github.com/archlan/documentation/edit/main/docs/dev/new-release-howto.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Updating ArchLan packages",permalink:"/doc/dev/update-archlan-package"},next:{title:"About ArchLan",permalink:"/doc/dev/about-goals"}},u=[{value:"Test the Live ISO",id:"test-the-live-iso",children:[],level:2},{value:"Create the release",id:"create-the-release",children:[],level:2},{value:"Upload the files to the git repo",id:"upload-the-files-to-the-git-repo",children:[],level:2}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prepare-a-new-release"},"Prepare a new release"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section lists everything that I must take in consideration\nwhen preparing a new ArchLan release.")),(0,o.kt)("h2",{id:"test-the-live-iso"},"Test the Live ISO"),(0,o.kt)("p",null,"Before continuing to the next steps, make sure to test thoroughly the built ISO\nand ensure that there are no unwanted errors or bugs."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Once tested, push the updates to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archlan/iso"},"archlan/iso"))),(0,o.kt)("h2",{id:"create-the-release"},"Create the release"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GPG sign the ISO file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gpg --default-key archlan@protonmail.com --output archlan-*-x86_64.iso --detach-sig archlan-*-x86_64.iso\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create the sha256sum file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo sha256sum archlan-*-x86_64.iso > archlan-*-x86_64.iso.sha256sum\n")),(0,o.kt)("h2",{id:"upload-the-files-to-the-git-repo"},"Upload the files to the git repo"),(0,o.kt)("p",null,"The last step is to create the actual Github release."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upload the ",(0,o.kt)("inlineCode",{parentName:"li"},"sha256sum")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"*.sig")," ISO files. The rest should be automatically done by Github.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("blockquote",{parentName:"div"},(0,o.kt)("p",{parentName:"blockquote"},"Note to self")),(0,o.kt)("p",{parentName:"div"},"Make sure to update the links in the ",(0,o.kt)("a",{parentName:"p",href:"https://archlan.github.io"},"website")," so that they redirect to the latest release."))))}h.isMDXComponent=!0}}]);