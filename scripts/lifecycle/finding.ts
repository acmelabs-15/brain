/** One problem a lifecycle check found, in one file. */
export type Finding = {
  kind:
    | "unresolved"
    | "old-prefix"
    | "flag-mismatch"
    | "retired-name"
    | "glossary-term"
    | "expired-fallback"
    | "agent-list"
    | "hook-file"
    | "router";
  file: string;
  detail: string;
};
