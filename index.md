---
layout: default
---

# Welcome!

You've arrived at Mitchell McKinnon's home page. I'm not quite sure how you arrived here, but glad that you made it.

# Posts

    {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
    </li>
    {% endfor %}
