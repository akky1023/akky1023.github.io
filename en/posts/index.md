---
title: Posts list
layout: parent
---

<ul>
{% assign en_posts = site.posts | where: "lang", "en" | sort: "last_modified_at" | reverse %}
{% for post in en_posts %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>