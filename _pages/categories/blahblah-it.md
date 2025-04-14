---
title: "IT 이야기" # 카테고리 이름
layout: category
permalink: /blahblah/it/ # url
author_profile: true
taxonomy: it
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['IT']%}
{% for post in posts %}
  {% if post.category == 'blahblah' %}
    {% include archive-single.html type=page.entries_layout %}
  {% endif %}
{% endfor %}