"use strict";(self.webpackChunk_archlan_docs=self.webpackChunk_archlan_docs||[]).push([[174],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(m,i(i({ref:t},l),{},{components:a})):n.createElement(m,i({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5006:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],c={sidebar_position:1},s="Package repository structure",p={unversionedId:"dev/git-package-repo",id:"dev/git-package-repo",title:"Package repository structure",description:"This section lists everything that I must take in consideration",source:"@site/docs/dev/git-package-repo.mdx",sourceDirName:"dev",slug:"/dev/git-package-repo",permalink:"/documentation/dev/git-package-repo",editUrl:"https://github.com/archlan/documentation/edit/main/docs/dev/git-package-repo.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Improve the Documentation",permalink:"/documentation/contrib/contrib-docs"},next:{title:"Updating ArchLan packages",permalink:"/documentation/dev/update-archlan-package"}},l=[{value:"Structure",id:"structure",children:[],level:2},{value:"Add/Update packages",id:"addupdate-packages",children:[],level:2}],u={toc:l};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"package-repository-structure"},"Package repository structure"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section lists everything that I must take in consideration\nwhen modifying/adding packages to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archlan/archlan-packages"},"ArchLan Packages repo"),".")),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"archlan-packages                      # Root of the repo\n\u2514\u2500\u2500 x86_64                            # Supported architecture, contains the files\n   \u251c\u2500\u2500 archlan-packages.*             # Database files\n   \u251c\u2500\u2500 *.pkg.tar.zst                  # The actual package archive\n   \u2514\u2500\u2500 *.pkg.tar.zst.sig              # Package signature\n")),(0,o.kt)("h2",{id:"addupdate-packages"},"Add/Update packages"),(0,o.kt)("p",null,"When adding packages to the repositories, follow these instructions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete the old database files")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use this command to sign the package you wish to add"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In this case, I use my own ArchLan PGP key for signing the package. When signing a package, make sure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," is replaced by the package filename."))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gpg --default-key archlan@protonmail.com --output *.pkg.tar.zst --detach-sig *.pkg.tar.zst\ngpg: using \"archlan@protonmail.com\" as default secret key for signing\nFile '*.pkg.tar.zst' exists. Overwrite? (y/N) n\nEnter new filename: *.tar.zst.sig\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Once the package(s) you wish to add have their ",(0,o.kt)("inlineCode",{parentName:"li"},".sig")," file, use this command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# This command regenerates the database entries, to make the repository usable\n$ repo-add -n -s -R archlan-packages.db.tar.gz *.pkg.tar.zst\n")))}d.isMDXComponent=!0}}]);