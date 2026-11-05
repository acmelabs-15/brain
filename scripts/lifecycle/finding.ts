/** One problem a lifecycle check found, in one file. */
export type Finding = {
  kind:
    | "metadata"
    | "body-size"
    | "unresolved"
    | "old-prefix"
    | "flag-mismatch"
    | "retired-name"
    | "glossary-term"
    | "agent-list"
    | "hook-file"
    | "router";
  file: string;
  detail: string;
};
