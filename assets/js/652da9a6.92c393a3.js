"use strict";(self.webpackChunkarchlan_docs=self.webpackChunkarchlan_docs||[]).push([[4358],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),o=n(7294),r=n(2389),i=n(9443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),u=n(6010),c="tabItem_vU9c";function d(e){var t,n,r,i=e.lazy,d=e.block,p=e.defaultValue,m=e.values,h=e.groupId,b=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=l(),y=N.tabGroupChoices,w=N.setTabGroupChoices,O=(0,o.useState)(g),x=O[0],S=O[1],E=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=y[h];null!=C&&C!==x&&v.some((function(e){return e.value===C}))&&S(C)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==x&&(T(t),S(a),null!=h&&w(h,a))},U=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var o=E.indexOf(e.currentTarget)-1;n=E[o]||E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},b)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:U,onFocus:I,onClick:I},r,{className:(0,u.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},8089:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(6396),l=n(8215),s=["components"],u={sidebar_position:1,hide_table_of_contents:!0},c="Create A Bootable USB",d={unversionedId:"boot-iso/boot-with-usb",id:"boot-iso/boot-with-usb",title:"Create A Bootable USB",description:"dd Linux",source:"@site/docs/boot-iso/boot-with-usb.mdx",sourceDirName:"boot-iso",slug:"/boot-iso/boot-with-usb",permalink:"/documentation/docs/boot-iso/boot-with-usb",editUrl:"https://github.com/archlan/documentation/edit/main/docs/boot-iso/boot-with-usb.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/documentation/docs/intro"},next:{title:"Boot ArchLan using GRUB",permalink:"/documentation/docs/boot-iso/boot-with-grub"}},p=[{value:"dd <code>Linux</code>",id:"dd-linux",children:[],level:2},{value:"Etcher <code>Linux</code>, <code>Mac</code>, <code>Windows</code>",id:"etcher-linux-mac-windows",children:[],level:2},{value:"Other Options <code>Linux</code>",id:"other-options-linux",children:[],level:2}],m={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-bootable-usb"},"Create A Bootable USB"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"dd",label:"dd",default:!0,mdxType:"TabItem"},(0,r.kt)("h2",{id:"dd-linux"},"dd ",(0,r.kt)("inlineCode",{parentName:"h2"},"Linux")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use this method only if you know what you are doing, since a simple typo mistake with ",(0,r.kt)("inlineCode",{parentName:"p"},"dd")," can make irrecoverable damages to your disk drive."))),(0,r.kt)("p",null,"If you currently are on a Linux machine, you can use the command line utility ",(0,r.kt)("inlineCode",{parentName:"p"},"dd"),". You can create both BIOS and UEFI bootbale USB sticks using this method. Follow the steps down below to make a bootable ArchLan USB with dd:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo fdisk -l")," to get the information about your USB drive and it's path. In this specific case, the path is ",(0,r.kt)("inlineCode",{parentName:"li"},"/dev/sdb"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo fdisk -l\n\nDisk /dev/sdb: 3,73 GiB, 4009754624 bytes, 7831552 sectors\nDisk model: DT 101 II\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 512 bytes\nI/O size (minimum/optimal): 512 bytes / 512 bytes\nDisklabel type: dos\nDisk identifier: 0xa6af67e1\n")),(0,r.kt)("p",null,"You can also find the path of your USB by running the command ",(0,r.kt)("inlineCode",{parentName:"p"},"lsblk")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ lsblk\n\nNAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS\nsdb           8:16   1   3.7G  0 disk\nnvme0n1     259:0    0 119.2G  0 disk\n\u251c\u2500nvme0n1p1 259:1    0 115.2G  0 part /\n\u2514\u2500nvme0n1p2 259:2    0     4G  0 part\n...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you found the correct path, Run ",(0,r.kt)("inlineCode",{parentName:"li"},"dd")," to flash the ISO to the USB.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo dd bs=4M if=path/to/archlan.iso of=/dev/sdX status=progress oflag=sync\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Before running the command, make sure to replace ",(0,r.kt)("strong",{parentName:"li"},"/path/to/archlan.iso")," with the ArchLan ISO path and also ",(0,r.kt)("strong",{parentName:"li"},"/dev/sdX")," with your USB device path."),(0,r.kt)("li",{parentName:"ul"},"When the process will be done, the ArchLan USB will be botbale for both BIOS and UEFI modes."))),(0,r.kt)(l.Z,{value:"etcher",label:"balenaEtcher",mdxType:"TabItem"},(0,r.kt)("h2",{id:"etcher-linux-mac-windows"},"Etcher ",(0,r.kt)("inlineCode",{parentName:"h2"},"Linux"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"Mac"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"Windows")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"Etcher")," can flash an OS image (ISO) to an SDCard or USB to make it bootable. This is the ",(0,r.kt)("strong",{parentName:"p"},"easiest and simplest method")," to make an ArchLan bootable USB for beginners."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://www.balena.io/etcher/"},"Etcher")," for your operating system."),(0,r.kt)("li",{parentName:"ol"},"Open the balenaEtcher application and click ",(0,r.kt)("strong",{parentName:"li"},"Select Image"),". Select the ArchLan Linux ISO file."),(0,r.kt)("li",{parentName:"ol"},"Choose your target USB stick. ",(0,r.kt)("strong",{parentName:"li"},"CAUTION"),", ensure you have selected the right one before proceeding to the next step."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Flash!")," and wait for it to be done."),(0,r.kt)("li",{parentName:"ol"},"The ArchLan USB will be bootable for both BIOS and UEFI modes."))),(0,r.kt)(l.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,r.kt)("h2",{id:"other-options-linux"},"Other Options ",(0,r.kt)("inlineCode",{parentName:"h2"},"Linux")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The following methods copy the ISO file to the USB drive to make it bootable.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"cat")," : run ;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo cat path/to/archlan.iso > /dev/sdX\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"cp")," : run ;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo cp path/to/archlan.iso /dev/sdX\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"tee")," : run ;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo tee < path/to/archlan.iso > /dev/sdx\n")),(0,r.kt)("p",null,"Before running the command, make sure to replace ",(0,r.kt)("strong",{parentName:"p"},"/path/to/archlan.iso")," with the ArchLan ISO path and also ",(0,r.kt)("strong",{parentName:"p"},"/dev/sdX")," with your USB device path."))))}h.isMDXComponent=!0}}]);