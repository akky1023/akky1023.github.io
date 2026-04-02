---
layout: index
---

こんにちは！！　男です！！

## 最近更新された記事
最近更新された記事を3つどうぞ．
最初の一段落を引用ブロックとしてのせてますが，大体つかみが下手ですね．
<div id="latest-article">
{% assign ja_posts = site.posts | where: "lang", "ja" | sort: "last_modified_at" | reverse %}
{% for post in ja_posts limit:3 %}
    <h3>{{ post.title }}</h3>
    <span class="modified-date">({{ post.last_modified_at | date: "%Y-%m-%d" }})</span>
    <blockquote style="width: 80%;">
        {{ post.excerpt }}
        <a href="{{ post.url }}" class="link2article">→ 続きをよむ</a>
    </blockquote>
{% endfor %}
</div>