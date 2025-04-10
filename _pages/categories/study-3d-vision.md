---
title: "3D Vision" # 카테고리 이름
layout: category
permalink: /study/3d-vision/ # url
author_profile: true
taxonomy: 3d-vision
sidebar:
  nav: "categories"
---

{% assign posts = site.tags['3D Vision']%}
{% for post in posts %}
  {% if post.category == 'study' %}
    {% include archive-single.html type=page.entries_layout %}
  {% endif %}
{% endfor %}