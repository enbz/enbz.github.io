---
title: "AR/VR" # 카테고리 이름
layout: category
permalink: /공부하기/ar-vr/ # url
author_profile: true
taxonomy: ar-vr
sidebar:
  nav: "categories"
---

{% assign posts = site.categories['AR/VR']%}
{% for post in posts %}
    {% include archive-single.html type=page.entries_layout %}
{% endfor %}