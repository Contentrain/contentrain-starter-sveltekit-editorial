<script lang="ts">
  import type { Author, BlogCategory, BlogPost } from "#contentrain";
  import type { PageData } from "./$types";

  type StoryWithRelations = BlogPost & {
    author?: Author;
    categories?: BlogCategory[];
  };

  export let data: PageData & { stories: StoryWithRelations[] };

  const formatDate = (value: string) =>
    new Intl.DateTimeFormat("en", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));
</script>

<main class="shell">
  <header class="header">
    <a href="/" class="brand">{data.site.site_name}</a>
    <nav class="nav">
      {#each data.navigation.items ?? [] as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </nav>
  </header>

  <section class="hero">
    <div class="eyebrow">SvelteKit Editorial Starter</div>
    <h1>Magazine rhythm with a leaner runtime and clearer hierarchy.</h1>
    <p>{data.site.site_tagline}</p>
  </section>

  <section class="stories">
    {#each data.stories as story}
      <a class="card story-link" href={`/stories/${story.slug}`}>
        {#if story.cover_image}
          <img src={story.cover_image} alt={story.title} class="cover" />
        {/if}
        <div class="meta">
          <span>{story.categories?.[0]?.name ?? "Editorial"}</span>
          <span>{formatDate(story.published_at)}</span>
        </div>
        <h2>{story.title}</h2>
        <p>{story.excerpt}</p>
        <div class="meta author-line">
          {#if story.author?.avatar}
            <img src={story.author.avatar} alt={story.author.name} class="avatar" />
          {/if}
          <span>{story.author?.name}</span>
          <span>{story.reading_time} min read</span>
        </div>
      </a>
    {/each}
  </section>
</main>

<style>
  .shell {
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
  }

  .hero {
    padding: 5rem 0 3rem;
  }

  .eyebrow {
    color: var(--ct-color-primary);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.82rem;
    font-family: "Inter", "Helvetica Neue", sans-serif;
  }

  h1 {
    margin: 0;
    max-width: 11ch;
    font-family: "Fraunces", "Iowan Old Style", serif;
    font-size: clamp(3rem, 8vw, 5.5rem);
    line-height: 0.94;
    letter-spacing: -0.06em;
  }

  .hero p,
  .card p {
    color: var(--ct-color-muted);
    line-height: 1.8;
  }

  .stories {
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    padding-bottom: 4rem;
  }

  .card {
    display: block;
    padding: 1.4rem;
    border: 1px solid var(--ct-color-border);
    border-radius: 1.6rem;
    background: rgba(255, 250, 242, 0.84);
    box-shadow: var(--ct-shadow-soft);
  }

  .story-link {
    transition: transform var(--ct-duration-base) var(--ct-easing-standard);
  }

  .story-link:hover {
    transform: translateY(-0.2rem);
  }

  h2 {
    margin: 0.6rem 0;
    font-size: 1.4rem;
    line-height: 1.15;
  }

  .cover {
    width: 100%;
    display: block;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: 1.2rem;
    margin-bottom: 1rem;
  }

  .author-line {
    align-items: center;
  }

  .avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    object-fit: cover;
  }

  @media (max-width: 720px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
