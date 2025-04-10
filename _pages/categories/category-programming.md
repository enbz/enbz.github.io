---
title: "프로그래밍" # 카테고리 이름
layout: category
permalink: /programming/ # url
author_profile: true
taxonomy: programming
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['programming']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}