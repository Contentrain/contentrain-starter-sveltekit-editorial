<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  const formatDate = (value: string) =>
    new Intl.DateTimeFormat("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));

  const paragraphs = String(data.story.content ?? "")
    .split(/\n\s*\n/g)
    .filter(Boolean);
</script>

<main class="shell article-shell">
  <header class="header">
    <a href="/" class="brand">{data.site.site_name}</a>
    <nav class="nav">
      {#each data.navigation.items ?? [] as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </nav>
  </header>

  <article class="article">
    <a class="back-link" href="/">Back to stories</a>
    <div class="meta">
      <span>{data.story.categories?.[0]?.name ?? "Editorial"}</span>
      <span>{formatDate(data.story.published_at)}</span>
      <span>{data.story.reading_time} min read</span>
    </div>
    <h1>{data.story.title}</h1>
    <p class="lede">{data.story.excerpt}</p>
    <div class="meta author-line">
      {#if data.story.author?.avatar}
        <img src={data.story.author.avatar} alt={data.story.author.name} class="avatar" />
      {/if}
      <span>{data.story.author?.name}</span>
      <span>{data.story.author?.role}</span>
    </div>
    {#if data.story.cover_image}
      <img src={data.story.cover_image} alt={data.story.title} class="cover" />
    {/if}

    <div class="body">
      {#each paragraphs as paragraph}
        <p>{paragraph}</p>
      {/each}
    </div>
  </article>
</main>

<style>
  .article-shell {
    width: min(72rem, calc(100vw - 2rem));
    margin: 0 auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.4rem 0;
    border-bottom: 1px solid var(--ct-color-border);
  }

  .brand {
    font-family: "Fraunces", "Iowan Old Style", serif;
    font-size: 1.2rem;
  }

  .nav,
  .meta {
    display: flex;
    gap: 0.8rem;
    color: var(--ct-color-muted);
    font-family: "Inter", "Helvetica Neue", sans-serif;
    font-size: 0.9rem;
    flex-wrap: wrap;
  }

  .article {
    width: min(42rem, 100%);
    padding: 4rem 0 5rem;
  }

  h1 {
    margin: 0;
    font-family: "Fraunces", "Iowan Old Style", serif;
    font-size: clamp(3rem, 8vw, 5.4rem);
    line-height: 0.94;
    letter-spacing: -0.06em;
  }

  .lede,
  .body p {
    color: var(--ct-color-muted);
    line-height: 1.9;
  }

  .lede {
    font-size: 1.12rem;
  }

  .back-link {
    display: inline-flex;
    margin-bottom: 1.5rem;
    color: var(--ct-color-primary);
    font-family: "Inter", "Helvetica Neue", sans-serif;
    font-size: 0.92rem;
  }

  .author-line {
    margin: 1rem 0 2rem;
  }

  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    object-fit: cover;
  }

  .cover {
    width: 100%;
    display: block;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: 1.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 720px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
