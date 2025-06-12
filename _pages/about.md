---
layout: about
title: About
permalink: /
# subtitle: <a href='#'>Affiliations</a>. Address. Contacts. Motto. Etc.

profile:
  align: left
  image: me.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    Reach me at
    <a href="mailto:hongfeij@outlook.com" style="margin-left: 0.5rem;">
    <i class="fa-solid fa-envelope" style="font-size: 1.5rem;"></i>
    </a>
    <a href="https://github.com/hongfeij" style="margin-left: 0.5rem;">
    <i class="fa-brands fa-github" style="font-size: 1.5rem;"></i>
    </a>
    <a href="{% if page.cv_pdf contains '://' %}{{ page.cv_pdf }}{% else %}{{ page.cv_pdf | prepend: 'assets/pdf/' | relative_url }}{% endif %}" style="margin-left: 0.5rem;" target="_blank" rel="noopener noreferrer">
    <i class="fa-solid fa-file-pdf" style="font-size: 1.5rem;"></i>
    </a>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

cv_pdf: hongfei-cv.pdf # you can also use external links here

# latest_posts:
#   enabled: true
#   scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
#   limit: 3 # leave blank to include all the blog posts
---

<!-- A total failure trying to leave some traces in the world. -->

Hi! I’m Hongfei, an independent researcher. I'm interested in **human-AI interaction beyond digital interfaces**. My current research explores **how human-AI communication influences embodied activities in work, daily life, and play**. I'm also eager to connect the societal perspective I developed through my architecture background to questions about **how AI can shape the future of embodied work**.

<div class="research-sections">
  <details>
    <summary class="summary-link">
      [Research Journey]
    </summary>
    <p style="margin-top: 0.5em;">
      I previously worked with Professor Dina El Zanfaly in the [EM]BODIED COMPUTATIONS LAB and was advised by Professors Daragh Byrne and Sinan Goral during my master’s thesis at Carnegie Mellon University, where I earned a Master of Science in Computational Design. Currently, I’m collaborating with postdoctoral fellow Georgie Qiao Jin at Carnegie Mellon University on research exploring AI for children’s physical activity play.
    </p>
  </details>

  <details>
    <summary class="summary-link">
      [Research Positioning]
    </summary>
    <p style="margin-top: 0.5em;">
      My broader research area lies in <strong>Design</strong> in <strong>Human-Computer Interaction</strong>. I focus on <strong>embodied interaction</strong> and <strong>human-AI communication</strong>, drawing on insights from <strong>cognitive science</strong> and <strong>design methodology</strong> such as Research-through-Design and Speculative Design. I design, build artifacts, and also conduct qualitative study.
    </p>
  </details>

  <details>
    <summary class="summary-link">
      [Beyond Research]
    </summary>
    <p style="margin-top: 0.5em;">
      I’m on an arduous journey to complete my master’s degree in Computer Science (Interactive Intelligence) at Georgia Tech, aiming to deepen my technical understanding of AI. At the same time, I’m searching for a decent job to support myself and working toward professional-level fluency in French. With very limited time beyond my (full-time job), studies, language learning, and research (and wondering when I will burn out), I try to stay healthy through regular exercise and nourish my soul with music and films. I’m also considering picking up my palette again, learning an instrument for improvisational music, and engaging in volunteer work to give back to my community.
    </p>
  </details>
</div>

If you want to know more about my work as a designer, please visit <a href="https://www.hongfeiji.com" target="_blank">[my website]</a>.

Social media can be volatile over time, so I'm currently building a personal blog site for documentation. Stay tuned :)

<!-- <a href="https://scholar.google.com/citations?user=your_id"><i class="ai ai-google-scholar"></i></a>  -->
