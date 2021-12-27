"use strict";(self.webpackChunkarchlan_docs=self.webpackChunkarchlan_docs||[]).push([[620],{4003:function(a){a.exports=JSON.parse('{"blogPosts":[{"id":"01-post-packages","metadata":{"permalink":"/documentation/blog/01-post-packages","editUrl":"https://github.com/archlan/documentation/edit/main/blog/12-27-post-archlan-packages.md","source":"@site/blog/12-27-post-archlan-packages.md","title":"Fix an issue with ArchLan packages repository signing","description":"ArchLan Linux has it\'s own package repository added to the pacman configuration.","date":"2021-12-22T21:40:41.388Z","formattedDate":"December 22, 2021","tags":[{"label":"pacman","permalink":"/documentation/blog/tags/pacman"},{"label":"howto","permalink":"/documentation/blog/tags/howto"},{"label":"gpg","permalink":"/documentation/blog/tags/gpg"}],"readingTime":0.725,"truncated":true,"authors":[{"name":"Lanhild","title":"Developer/Maintainer of ArchLan Linux","url":"https://github.com/Lanhild","imageURL":"https://github.com/Lanhild.png","key":"Lanhild"}]},"content":"ArchLan Linux has it\'s own package repository added to the pacman configuration.\\nIf, at some point, you encounter this error while trying to update;\\n\\n```bash\\nerror: archlan-packages: signature from \\"Lanhild (ArchLan Linux PGP key, made by @Lanhild.) <archlan@protonmail.com>\\" is unknown trust\\nerror: failed to synchronize all databases (invalid or corrupted database (PGP signature))\\n```\\nFollow the steps in this post to fix it.\\n\\n\x3c!--truncate--\x3e\\n\\n1. The first step is to import the ArchLan Linux gpg key from the keyserver to your machine:\\n\\n```bash\\n$ sudo pacman-key --recv-keys 5F765E0E531F5B53\\n```\\n2. By precaution, verify the fingerprint of the key:\\n\\n```bash\\n$ sudo pacman-key --finger 5F765E0E531F5B53\\n```\\n3. The last step is to locally sign the key:\\n\\n```bash\\n$ sudo pacman-key --lsign-key 5F765E0E531F5B53\\n```\\n\\n:::note\\nOnce all these steps have been accomplished, you should be able to successfully update and install packages from the ArchLan repository.\\n:::"}]}')}}]);