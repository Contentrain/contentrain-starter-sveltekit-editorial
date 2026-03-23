import { singleton } from "#contentrain";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = () => {
  const site = singleton("site-settings").locale("en").get();
  const navigation = singleton("navigation").locale("en").get();
  const footer = singleton("footer").locale("en").get();
  const seo = singleton("seo-defaults").locale("en").get();

  return {
    site,
    navigation,
    footer,
    seo,
  };
};
