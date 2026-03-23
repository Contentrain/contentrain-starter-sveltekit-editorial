import { document } from "#contentrain";
import type { BlogPost } from "#contentrain";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  const stories = document("blog-post")
    .locale("en")
    .include("author", "categories")
    .all()
    .toSorted((left: BlogPost, right: BlogPost) =>
      String(right.published_at).localeCompare(String(left.published_at), "en"),
    );

  return {
    stories,
  };
};
