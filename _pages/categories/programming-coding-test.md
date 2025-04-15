---
title: "코딩테스트" # 카테고리 이름
layout: category
permalink: /프로그래밍/코딩테스트/ # url
author_profile: true
taxonomy: coding-test
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['코딩테스트']%}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}