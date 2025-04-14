---
title: "Hologram" # 카테고리 이름
layout: category
permalink: /study/hologram/ # url
author_profile: true
taxonomy: hologram
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['Hologram']%}
{% for post in posts %}
  {% if post.category == 'study' %}
    {% include archive-single.html type=page.entries_layout %}
  {% endif %}
{% endfor %}