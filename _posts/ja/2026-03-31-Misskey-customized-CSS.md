---
title: MisskeyのカスタムCSS
lang: ja
layout: posts
---
Misskeyで使えるカスタムCSSです．
以下の環境以外での動作を保証しません．

* misskey.io
* misskey.systems

これらはすべてMisskey本体の更新とともに動作しなくなる可能性があります．

動作してなかったらサイト主に教えてください．  
あと普通に変な動作してても教えてください．

## タイムライン上のホーム/鍵/ダイレクト投稿の背景色をそれぞれ緑/赤/青にする
最終更新日: 2026-03-31
~~~css
/* Home, note and reply */
.x5yeR:has(.ti-home),
.xD2mX.xCFgx:has(.ti-home) {
    background-color: rgba(0, 135, 68 , 0.10) !important;
}
/* Direct, note and reply */
.x5yeR:has(.ti-mail),
.xD2mX.xCFgx:has(.ti-mail) {
    background-color: rgba(0, 87, 231, 0.10) !important;
}
/* Follower only, note and reply */
.x5yeR:has(.ti-lock),
.xD2mX.xCFgx:has(.ti-lock) {
    background-color: rgba(214, 45, 32, 0.10) !important;
}
~~~

## ホーム/鍵/ダイレクト投稿の投稿フォームの*プレビュ*をそれぞれ緑/赤/青にする
最終更新日: 2026-03-31
~~~css
/* Home, post form prev. */
.xpDI4.xxski._popup:has(.ti-home) .xEd72.xoGjR,
.xpDI4.xq7ec._panel:has(.ti-home) .xEd72.xoGjR {
	background-color: rgba(0, 135, 68 , 0.10) !important;
}
/* Direct, post form prev. */
.xpDI4.xxski._popup:has(.ti-mail) .xEd72.xoGjR,
.xpDI4.xq7ec._panel:has(.ti-mail) .xEd72.xoGjR {
	background-color: rgba(0, 87, 231, 0.10) !important;
}
/* Follower only, post form prev. */
.xpDI4.xxski._popup:has(.ti-lock) .xEd72.xoGjR,
.xpDI4.xq7ec._panel:has(.ti-lock) .xEd72.xoGjR {
	background-color: rgba(214, 45, 32, 0.10) !important;
}
~~~

## ホーム/鍵/ダイレクト投稿の投稿フォーム*全体*{: .b}をそれぞれ緑/赤/青にする
最終更新日: 2026-03-31
~~~css
/* Home, post form */
.xpDI4.xxski._popup:has(.ti-home) > *,
.xpDI4.xq7ec._panel:has(.ti-home) > * {
    background-color: rgba(0, 135, 68 , 0.10) !important;
}
/* Direct, post form */
.xpDI4.xxski._popup:has(.ti-mail) > *,
.xpDI4.xq7ec._panel:has(.ti-mail) > * {
    background-color: rgba(0, 87, 231, 0.10) !important;
}
/* Follower only, post form */
.xpDI4.xxski._popup:has(.ti-lock) > *,
.xpDI4.xq7ec._panel:has(.ti-lock) > * {
    background-color: rgba(214, 45, 32, 0.10) !important;
}
/* Follower only, fix weird gap */
.x9eP3 {
    padding-bottom: 14px;
    margin: 0;
}
~~~