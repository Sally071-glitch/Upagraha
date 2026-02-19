---
layout: default
title: Achievements
# ============================================================
# EDIT THIS FILE to update the Achievements page
# ============================================================

achievements:
  - icon: "🏆"
    title: "1st Place — National Rocketry Challenge"
    description: "Our team secured first place in the Open Division with a two-stage solid-propellant rocket reaching an apogee of 3,200 ft."
    year: "2024"
    event: "ISRO Student Rocketry Meet"

  - icon: "🛰️"
    title: "CubeSat Selected for Launch Manifest"
    description: "PSAT-1, our 1U CubeSat payload, was selected for the ISRO PSLV ride-share program pending final assembly."
    year: "2024"
    event: "ISRO Young Scientist Programme"

  - icon: "🥈"
    title: "2nd Place — Inter-College Robotics"
    description: "Autonomous ground rover placed second in the obstacle-navigation category against 45 competing teams."
    year: "2023"
    event: "Technoxian World Robotics Championship"

  - icon: "📡"
    title: "Successfully Deployed Ground Station"
    description: "Commissioned a fully operational 2m/70cm amateur radio ground station for satellite tracking and communication."
    year: "2023"
    event: "Club Milestone"

  - icon: "🎖️"
    title: "Best Paper Award"
    description: "Research paper on low-cost attitude determination systems for nanosatellites won best paper at a national symposium."
    year: "2022"
    event: "AIAA Regional Symposium"

  - icon: "🚀"
    title: "Successful High-Power Rocket Launch"
    description: "First successful HPR launch certified under Tripoli Rocketry Association Level 1 with a J-class motor."
    year: "2022"
    event: "Club Milestone"
---

<section class="hero" style="min-height:35vh">
  <p class="hero-eyebrow">Our milestones</p>
  <h1 class="hero-title"><span class="highlight">Achievements</span></h1>
  <p class="hero-subtitle">A record of what we've built, won, and launched.</p>
</section>

<section class="section">
  <div class="achievement-list">
    {% for item in page.achievements %}
    <div class="achievement-item reveal">
      <div class="achievement-icon">{{ item.icon }}</div>
      <div class="achievement-info">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="card-meta">{{ item.event }}</div>
      </div>
      <div class="achievement-year">{{ item.year }}</div>
    </div>
    {% endfor %}
  </div>
</section>
