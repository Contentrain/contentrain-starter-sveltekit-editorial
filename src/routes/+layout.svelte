<script lang="ts">
  import "../styles/tokens.css";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<svelte:head>
  <title>{data.seo.meta_title}</title>
  <meta name="description" content={data.seo.meta_description} />
</svelte:head>

<slot />

<footer class="site-footer">
  <div class="shell">
    <div class="footer-top">
      <div>
        <div class="brand">{data.site.site_name}</div>
        <p class="copy">{data.footer.blurb}</p>
      </div>

      <div class="columns">
        {#each data.footer.columns ?? [] as column}
          <section>
            <h2>{column.title}</h2>
            <div class="links">
              {#each column.links ?? [] as link}
                <a href={link.href}>{link.label}</a>
              {/each}
            </div>
          </section>
        {/each}
      </div>
    </div>

    <div class="legal">{data.footer.legal_notice}</div>
  </div>
</footer>

<style>
  :global(html) {
    background:
      radial-gradient(circle at top, rgba(212, 163, 115, 0.28), transparent 28%),
      var(--ct-color-bg);
    color: var(--ct-color-text);
    font-family: "Source Serif 4", Georgia, serif;
  }

  :global(body) {
    margin: 0;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }

  .shell {
    width: min(72rem, calc(100vw - 2rem));
    margin: 0 auto;
  }

  .site-footer {
    margin-top: 2rem;
    padding: 2.5rem 0 3rem;
    border-top: 1px solid var(--ct-color-border);
    background: rgba(255, 250, 242, 0.72);
  }

  .footer-top,
  .columns,
  .links {
    display: flex;
    gap: 1.5rem;
  }

  .footer-top {
    justify-content: space-between;
    align-items: flex-start;
  }

  .brand,
  h2,
  .legal {
    font-family: "Inter", "Helvetica Neue", sans-serif;
  }

  .copy {
    max-width: 28rem;
    color: var(--ct-color-muted);
    line-height: 1.75;
  }

  h2 {
    margin: 0 0 0.8rem;
    font-size: 0.84rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .links {
    flex-direction: column;
  }

  .legal {
    padding-top: 1rem;
    color: var(--ct-color-muted);
    font-size: 0.88rem;
  }

  @media (max-width: 720px) {
    .footer-top,
    .columns {
      flex-direction: column;
    }
  }
</style>
