"use strict";(self.webpackChunk_archlan_docs=self.webpackChunk_archlan_docs||[]).push([[586],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6699:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},u="Add Tutorials",c={unversionedId:"contrib/contrib-blog",id:"contrib/contrib-blog",title:"Add Tutorials",description:"This section regroups the guidelines that should be followed to write a tutorial for the ArchLan Linux documentation.",source:"@site/docs/contrib/contrib-blog.mdx",sourceDirName:"contrib",slug:"/contrib/contrib-blog",permalink:"/doc/contrib/contrib-blog",editUrl:"https://github.com/archlan/documentation/edit/main/docs/contrib/contrib-blog.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup System",permalink:"/doc/contrib/setup-env"},next:{title:"Improve the Documentation",permalink:"/doc/contrib/contrib-docs"}},s=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Format structure and file organization",id:"format-structure-and-file-organization",children:[],level:2},{value:"Create tags and titles",id:"create-tags-and-titles",children:[],level:2},{value:"Add yourself as an author",id:"add-yourself-as-an-author",children:[],level:2}],d={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-tutorials"},"Add Tutorials"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section regroups the guidelines that should be followed to write a tutorial for the ArchLan Linux documentation.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To work locally, ",(0,o.kt)("a",{parentName:"li",href:"./setup-env"},"setup")," a local development environment on your machine."),(0,o.kt)("li",{parentName:"ul"},"Ensure to have basic understandings of the ",(0,o.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/cheat-sheet"},"Markdown")," and ",(0,o.kt)("a",{parentName:"li",href:"https://mdxjs.com/"},"MDX")," syntaxes. See ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown Features")," for further information."),(0,o.kt)("li",{parentName:"ul"},"Make sure that you have the ability to ",(0,o.kt)("em",{parentName:"li"},"fork, clone")," a repository and create a ",(0,o.kt)("em",{parentName:"li"},"pull request"),".")),(0,o.kt)("h2",{id:"format-structure-and-file-organization"},"Format structure and file organization"),(0,o.kt)("p",null,"All the ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," files for tutorials are contained within the blog directory."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simply create a new file with the appropriate format to add a tutorial to the wiki.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"YEAR    # Directory\n\u251c\u2500\u2500 month-day-post-NAME.mdx     # .md or .mdx file\n\u2514\u2500\u2500 month-day                   # Directory\n   \u251c\u2500\u2500 Images                   # Directory\n   \u2514\u2500\u2500 post-NAME.mdx            # .md or .mdx file\n")),(0,o.kt)("h2",{id:"create-tags-and-titles"},"Create tags and titles"),(0,o.kt)("p",null,"Add the correct slug, tags and title in the heading of the file you want to add."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"---\nslug: NUM-post-NAME\ntitle: TITLE\nauthors: ID\ntags: [TAG1, TAG2, TAG3]\n---\n")),(0,o.kt)("h2",{id:"add-yourself-as-an-author"},"Add yourself as an author"),(0,o.kt)("p",null,"Add your ID in the heading of the file you want to add alolng with the required details."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"authors.yml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"...\nID:\n  name: USERNAME\n  title: OCCUPATION/WHO_ARE_YOU\n  url: https://github.com/USERNAME\n  image_url: https://github.com/USERNAME.png\n...\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"{3}","{3}":!0},"slug: NUM-post-NAME\ntitle: TITLE\nauthors: ID\ntags: [TAG1, TAG2, TAG3]\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For further details, go to ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus:Blog"))))}p.isMDXComponent=!0}}]);