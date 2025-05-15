---
title: "프로젝트" # 카테고리 이름
layout: category
permalink: /프로젝트/ # url
author_profile: true
taxonomy: projects
sidebar:
  nav: "categories"
---

<!-- 🔘 View Switch Buttons -->

<div class="view-switch">
  <button id="list-view-btn" class="view-btn active">
    <img src="/assets/images/berry.png" alt="List View" width="24"> 
  </button>
  <button id="grid-view-btn" class="view-btn">
    <img src="/assets/images/enabi.png" alt="Grid View" width="24"> 
  </button>

</div>


<!-- 💡 List View -->
<div id="list-view" class="view-mode">
  {% assign posts = site.categories['프로젝트'] %}
  {% for post in posts %}
    {% include archive-single.html type='list' %}
  {% endfor %}
</div>

<!-- 💡 Grid View -->
<div id="grid-view" class="view-mode" style="display: none;">
  {% assign posts = site.categories['프로젝트'] %}
  {% for post in posts %}
    {% include archive-single.html type='grid' %}
  {% endfor %}
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const listBtn = document.getElementById('list-view-btn');
    const gridBtn = document.getElementById('grid-view-btn');
    const listView = document.getElementById('list-view');
    const gridView = document.getElementById('grid-view');

    function switchView(mode) {
      if (mode === 'grid') {
        listView.style.display = 'none';
        gridView.style.display = 'block';
        listBtn.classList.remove('active');
        gridBtn.classList.add('active');
      } else {
        listView.style.display = 'block';
        gridView.style.display = 'none';
        gridBtn.classList.remove('active');
        listBtn.classList.add('active');
      }
      localStorage.setItem('viewMode', mode);
    }

    listBtn.addEventListener('click', () => switchView('list'));
    gridBtn.addEventListener('click', () => switchView('grid'));

    const saved = localStorage.getItem('viewMode') || 'list';
    switchView(saved);
  });
</script>