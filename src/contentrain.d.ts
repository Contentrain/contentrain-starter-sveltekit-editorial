declare module "#contentrain" {
  export {
    createContentrainClient,
    dictionary,
    document,
    query,
    singleton,
  } from "../.contentrain/client/index";

  export type {
    Author,
    BlogCategory,
    BlogPost,
    ContentrainClient,
    ContentStatus,
    DictionaryAccessor,
    DocumentQuery,
    Footer,
    Navigation,
    QueryBuilder,
    SeoDefaults,
    SingletonAccessor,
    SiteSettings,
  } from "../.contentrain/client/index";
}
