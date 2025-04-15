---
title: "프로젝트" # 카테고리 이름
layout: category
permalink: /프로젝트/ # url
author_profile: true
taxonomy: projects
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['프로젝트']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}