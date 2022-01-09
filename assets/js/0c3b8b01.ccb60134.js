"use strict";(self.webpackChunkarchlan_docs=self.webpackChunkarchlan_docs||[]).push([[7658],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4085:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2,hide_table_of_contents:!0},c="Boot ArchLan using GRUB",s={unversionedId:"boot-iso/boot-with-grub",id:"boot-iso/boot-with-grub",title:"Boot ArchLan using GRUB",description:"If Linux is already installed on your machine, you can follow the steps down below to boot the ArchLan ISO using GRUB2",source:"@site/docs/boot-iso/boot-with-grub.mdx",sourceDirName:"boot-iso",slug:"/boot-iso/boot-with-grub",permalink:"/documentation/docs/boot-iso/boot-with-grub",editUrl:"https://github.com/archlan/documentation/edit/main/docs/boot-iso/boot-with-grub.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Create A Bootable USB",permalink:"/documentation/docs/boot-iso/boot-with-usb"},next:{title:"Install ArchLan using Calamares",permalink:"/documentation/docs/install-archlan/install-with-calamares"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"boot-archlan-using-grub"},"Boot ArchLan using GRUB"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If Linux is already installed on your machine, you can follow the steps down below to boot the ArchLan ISO using GRUB2"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edit ",(0,a.kt)("strong",{parentName:"li"},"/etc/grub.d/40_custom"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo vim /etc/grub.d/40_custom\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add this entry at the end of the file and replace ",(0,a.kt)("strong",{parentName:"li"},"(hd0,X)")," by your root partition. Also replace ",(0,a.kt)("strong",{parentName:"li"},"/path/to/archlan.iso")," by the ArchLan Linux ISO path.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'menuentry "ArchLan Linux Live ISO" --class archlan {\n    set root=\'(hd0,X)\'\n    set isofile="/path/to/archlan.iso"\n    set dri="free"\n    search --no-floppy -f --set=root $isofile\n    probe -u $root --set=abc\n    set pqr="/dev/disk/by-uuid/$abc"\n    loopback loop $isofile\n    linux (loop)/arch/boot/x86_64/vmlinuz-linux img_dev=$pqr img_loop=$isofile driver=$dri quiet splash vt.global_cursor_default=0 loglevel=2 rd.systemd.show_status=false rd.udev.log-priority=3 sysrq_always_enabled=1 cow_spacesize=2G\n    initrd  (loop)/arch/boot/intel-ucode.img (loop)/arch/boot/amd-ucode.img (loop)/arch/boot/x86_64/initramfs-linux.img\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Save this file and update the GRUB configuration file ",(0,a.kt)("strong",{parentName:"li"},"grub.cfg"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Arch-based\n$ sudo grub-mkconfig -o /boot/grub/grub.cfg\n\n# Debian-based\n$ sudo update-grub\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When all these steps are done, you should be able to boot on the ArchLan Live ISO.")))}d.isMDXComponent=!0}}]);