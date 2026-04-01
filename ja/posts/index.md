---
title: 記事一覧
layout: parent
---

<ul>
{% assign ja_posts = site.posts | where: "lang", "ja" | sort: "last_modified_at" | reverse %}
{% for post in ja_posts %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>