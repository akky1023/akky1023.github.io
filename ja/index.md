---
layout: index
---

こんにちは！！

## 最新の3記事
<div id="latest-article">
{% assign ja_posts = site.posts | where: "lang", "ja" %}
{% for post in ja_posts limit:3 %}
    <h3>{{ post.title }}<span class="postdate"> ({{ post.date | date: "%Y-%m-%d" }}) </span></h3>
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