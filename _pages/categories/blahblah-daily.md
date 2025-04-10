---
title: "일상" # 카테고리 이름
layout: category
permalink: /blahblah/daily/ # url
author_profile: true
taxonomy: daily
sidebar:
  nav: "categories"
---

{% assign posts = site.tags['Daily']%}
{% for post in posts %}
  {% if post.category == 'blahblah' %}
    {% include archive-single.html type=page.entries_layout %}
  {% endif %}
{% endfor %}