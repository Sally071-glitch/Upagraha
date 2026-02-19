---
layout: default
title: About
# ============================================================
# EDIT THIS FILE to update the About page
# ============================================================

# Club tagline shown under the big title
tagline: "The Satellite Club of BMSCE."

# Short description shown in the hero
description: >
  Upagraha is a student-run space and technology club dedicated to building,
  launching, and learning — from CubeSats to ground stations, rocketry to robotics.

# Stats displayed in the row below the hero
stats:
  - number: "25"
    label: "Members"
  - number: "5"
    label: "Projects"
  - number: "9"
    label: "Years Active"
  - number: "11"
    label: "Events"

# Team members list — add/remove as needed
team:
  - name:  Sanketh B
    role:  Team Lead
  - name:  Sumukha Kashyap
    role:  Structure Lead
  - name:  Praneeth Mahantesh
    role:  Thermal Lead
  - name:  Samudyatha Iyengar
    role:  RF Lead
  - name:  Shweta K
    role:  Payload Lead
  - name:  Samrudhee H
    role:  Design Lead
  - name:  Yeshaswini M
    role:  Management Lead
  - name: Keshav Bajpai
    role: Mentor
  - name: Faizal Iliyas
    role: Mentor
  - name: Sanujit N
    role: Mentor
---

<section class="hero">
  <p class="hero-eyebrow">Who we are</p>
  <h1 class="hero-title">We are<br><span class="highlight">{{ page.title }}</span></h1>
  <p class="hero-subtitle">{{ page.tagline }}</p>
</section>

<div class="stats-row reveal">
  {% for stat in page.stats %}
  <div class="stat-box">
    <div class="stat-number">{{ stat.number }}</div>
    <div class="stat-label">{{ stat.label }}</div>
  </div>
  {% endfor %}
</div>

<section class="section reveal">
  <div class="section-header">
    <h2 class="section-title">About Us</h2>
  </div>
  <div class="prose">
    {{ page.description }}
  </div>

  <!-- You can add more freeform markdown content below this line -->
  {{ content }}
</section>

<section class="section reveal">
  <div class="section-header">
    <h2 class="section-title">The Team</h2>
    <span class="section-count">{{ page.team | size }} members</span>
  </div>
  <div class="team-grid">
    {% for member in page.team %}
    <div class="team-card">
      <div class="team-avatar">{{ member.name | slice: 0 }}</div>
      <div class="team-name">{{ member.name }}</div>
      <div class="team-role">{{ member.role }}</div>
    </div>
    {% endfor %}
  </div>
</section>
