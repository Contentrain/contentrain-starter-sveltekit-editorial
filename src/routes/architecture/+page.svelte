<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<main class="shell architecture-shell">
  <header class="header">
    <a href="/" class="brand">{data.site.site_name}</a>
    <nav class="nav">
      {#each data.navigation.items ?? [] as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </nav>
  </header>

  <section class="hero">
    <div class="eyebrow">Content architecture</div>
    <h1>Real model domains and schema shapes from local Contentrain files.</h1>
    <p>
      This page reads `.contentrain/models` and shows how the editorial starter maps system and
      editorial domains to actual schema definitions.
    </p>
  </section>

  <section class="groups">
    {#each data.groups as group}
      <article class="card">
        <h2>{group.domain}</h2>
        <p>{group.models.length} models</p>
        <div class="chip-list">
          {#each group.models as model}
            <span class="field-chip">{model.id} ({model.kind})</span>
          {/each}
        </div>
      </article>
    {/each}
  </section>

  <section class="groups">
    {#each data.groups as group}
      <article class="card">
        <h2>{group.domain} fields</h2>
        {#each group.models as model}
          <div class="schema-block">
            <strong>{model.id}</strong>
            <div class="chip-list">
              {#each Object.entries(model.fields ?? {}) as [fieldName, definition]}
                <span class="field-chip">{fieldName}: {definition.type ?? "unknown"}</span>
              {/each}
            </div>
          </div>
        {/each}
      </article>
    {/each}
  </section>
</main>

<style>
  .architecture-shell {
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

  .nav {
    display: flex;
    gap: 0.8rem;
    color: var(--ct-color-muted);
    font-family: "Inter", "Helvetica Neue", sans-serif;
    font-size: 0.9rem;
    flex-wrap: wrap;
  }

  .hero {
    padding: 4rem 0 2rem;
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
    max-width: 12ch;
    font-family: "Fraunces", "Iowan Old Style", serif;
    font-size: clamp(3rem, 8vw, 5.3rem);
    line-height: 0.94;
    letter-spacing: -0.06em;
  }

  p {
    color: var(--ct-color-muted);
    line-height: 1.8;
  }

  .groups {
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    padding-bottom: 1.5rem;
  }

  .card {
    padding: 1.4rem;
    border: 1px solid var(--ct-color-border);
    border-radius: 1.6rem;
    background: rgba(255, 250, 242, 0.84);
    box-shadow: var(--ct-shadow-soft);
  }

  h2 {
    margin: 0 0 0.75rem;
    text-transform: capitalize;
  }

  .chip-list {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .field-chip {
    display: inline-flex;
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
    background: rgba(212, 163, 115, 0.14);
    color: var(--ct-color-primary);
    font-family: "Inter", "Helvetica Neue", sans-serif;
    font-size: 0.8rem;
  }

  .schema-block {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 720px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
