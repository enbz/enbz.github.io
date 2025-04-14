---
title: "블로그 꾸미기" # 카테고리 이름
layout: category
permalink: /projects/blog-deco/ # url
author_profile: true
taxonomy: blog-deco
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['Blog Deco']%}
{% for post in posts %}
  {% if post.category == 'projects' %}
    {% include archive-single.html type=page.entries_layout %}
  {% endif %}
{% endfor %}