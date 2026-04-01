---
layout: index
---

こんにちは！！

## 最近更新された記事
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

## 連絡先
[akky1023.contact@gmail.com](mailto:akky1023.contact@gmail.com)

または

[Google Forms](https://docs.google.com/forms/d/e/1FAIpQLSdj1VXivdnrVk4x_AkABB58sLseZjkjflEJF7rYnK6GvvSa4A/viewform?usp=dialog)