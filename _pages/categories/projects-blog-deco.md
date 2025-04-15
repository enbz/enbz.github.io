---
title: "블로그 꾸미기" # 카테고리 이름
layout: category
permalink: /프로젝트/blog-deco/ # url
author_profile: true
taxonomy: blog-deco
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['블로그 꾸미기']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}