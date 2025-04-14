---
title: "Graphics" # 카테고리 이름
layout: category
permalink: /study/graphics/ # url
author_profile: true
taxonomy: graphics
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['Graphics']%}
{% for post in posts %}
  {% if post.category == 'study' %}
    {% include archive-single.html type=page.entries_layout %}
  {% endif %}
{% endfor %}