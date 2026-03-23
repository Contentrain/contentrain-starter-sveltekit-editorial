import { error } from "@sveltejs/kit";
import { document } from "#contentrain";
import type { Author, BlogCategory, BlogPost } from "#contentrain";
import type { PageServerLoad } from "./$types";

type StoryWithRelations = BlogPost & {
  author?: Author;
  categories?: BlogCategory[];
  content?: string;
};

export const load: PageServerLoad = ({ params }) => {
  const story = document("blog-post")
    .locale("en")
    .include("author", "categories")
    .all()
    .find((item: BlogPost) => item.slug === params.slug) as StoryWithRelations | undefined;

  if (!story) {
    throw error(404, "Story not found");
  }

  return {
    story,
  };
};
