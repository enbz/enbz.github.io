---
title: "코딩테스트" # 카테고리 이름
layout: category
permalink: /programming/coding-test/ # url
author_profile: true
taxonomy: coding-test
sidebar:
  nav: "categories"
---

{% assign posts = site.tags['Coding Test']%}
{% for post in posts %}
  {% if post.category == 'programming' %}
    {% include archive-single.html type=page.entries_layout %}
  {% endif %}
{% endfor %}