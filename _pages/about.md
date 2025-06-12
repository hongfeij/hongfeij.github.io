---
layout: about
title: About
permalink: /
# subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

profile:
  align: left
  image: me.jpg
  image_circular: false # crops the image to make it circular
  # more_info: >
  #   <p>555 your office number</p>
  #   <p>123 your address street</p>
  #   <p>Your City, State 12345</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

# latest_posts:
#   enabled: true
#   scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
#   limit: 3 # leave blank to include all the blog posts
---

A total failure trying to leave some traces in the world.

Reach me at
<a href="mailto:hongfeij@outlook.com" style="margin-left: 0.5rem;">
<i class="fa-solid fa-envelope" style="font-size: 1.5rem;"></i>
</a>
<a href="https://github.com/hongfeij" style="margin-left: 0.5rem;">
<i class="fa-brands fa-github" style="font-size: 1.5rem;"></i>
</a>
<a href="{% if page.cv_pdf contains '://' %}{{ page.cv_pdf }}{% else %}{{ 'assets/pdf/' | append: page.cv_pdf | relative_url }}{% endif %}" style="margin-left: 0.5rem;" target="_blank" rel="noopener noreferrer">
<i class="fa-solid fa-file-pdf" style="font-size: 1.5rem;"></i>
</a>

Social media can be volatile over time, so I'm currently building a personal blog site for documentation. Stay tuned :)

<!-- <a href="https://scholar.google.com/citations?user=your_id"><i class="ai ai-google-scholar"></i></a>  -->
