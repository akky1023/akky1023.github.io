---
title: このサイトについて
layout: parent
---
このサイトはあたたかみのある手打ちhtmlで作られています．暇なら見ていってやって下さい．

## 子ページ
- [管理者のページ](/ja/about/me/)

## 全記事一覧
<details>
    <summary>クリックで展開</summary>
    <ul>
    {% for post in site.posts %}
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
    {% endfor %}
    </ul>
</details>