---
layout: default
title: Projects
# ============================================================
# EDIT THIS FILE to update the Projects page
# status: "ongoing" OR "completed"
# ============================================================

projects:

  # ---- ONGOING PROJECTS ----
  - name: "PSAT-1 CubeSat"
    status: ongoing
    description: "A 1U CubeSat designed for amateur radio beacon transmission and attitude determination experiments in LEO."
    tags: ["Satellite", "RF", "ADCS"]
    team_size: 12
    started: "Jan 2024"

  - name: "Liquid Fuel Rocket Engine Test Rig"
    status: ongoing
    description: "Designing and fabricating a hot-fire test stand for a 500N ethanol/GOX bipropellant engine."
    tags: ["Propulsion", "Cryogenics", "Test Eng"]
    team_size: 8
    started: "Aug 2023"

  - name: "Autonomous High-Altitude Balloon"
    status: ongoing
    description: "A stratospheric balloon platform with live telemetry, atmospheric sensors, and autonomous cutdown system."
    tags: ["HAB", "Telemetry", "Sensors"]
    team_size: 6
    started: "Mar 2024"

  # ---- COMPLETED PROJECTS ----
  - name: "UPG-Rover Mk1"
    status: completed
    description: "Autonomous ground rover with stereo vision-based obstacle avoidance, placed 2nd at Technoxian 2023."
    tags: ["Robotics", "CV", "ROS"]
    team_size: 9
    started: "Jan 2023"
    ended: "Oct 2023"

  - name: "VHF/UHF Ground Station"
    status: completed
    description: "2m/70cm dual-band amateur radio ground station for tracking LEO satellites. Fully operational since Nov 2023."
    tags: ["RF", "SDR", "Antenna"]
    team_size: 5
    started: "Jun 2023"
    ended: "Nov 2023"

  - name: "Solid Propellant Rocket — Helios I"
    status: completed
    description: "Two-stage solid rocket achieving 3,200 ft apogee. Winner of ISRO Student Rocketry Meet 2024 Open Division."
    tags: ["Rocketry", "Propulsion", "Aero"]
    team_size: 14
    started: "Sep 2023"
    ended: "Feb 2024"
---

<section class="hero" style="min-height:35vh">
  <p class="hero-eyebrow">What we build</p>
  <h1 class="hero-title"><span class="highlight">Projects</span></h1>
  <p class="hero-subtitle">From concept to launch — our active and completed missions.</p>
</section>

<section class="section">
  <div class="filter-bar">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="ongoing">Ongoing</button>
    <button class="filter-btn" data-filter="completed">Completed</button>
  </div>

  <div class="card-grid">
    {% for project in page.projects %}
    <div class="card project-card reveal" data-status="{{ project.status }}">
      <span class="card-tag {{ project.status }}">{{ project.status }}</span>
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <div class="card-meta">
        <span>👥 {{ project.team_size }} members</span>
        <span>📅 {{ project.started }}{% if project.ended %} → {{ project.ended }}{% endif %}</span>
      </div>
      <div class="card-meta" style="border-top:none; padding-top:0.5rem;">
        {% for tag in project.tags %}
        <span style="color: var(--purple-300); font-size:0.7rem;">#{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>
