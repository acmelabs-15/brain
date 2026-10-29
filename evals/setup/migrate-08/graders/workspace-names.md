---
type: regex
target: files
pattern: '^docs/(?:decisions/(?!DEC-\d{3}-[a-z0-9-]+\.md$)|research/(?!RES-\d{3}-[a-z0-9-]+\.md$)|ideas/(?!IDEA-\d{3}-[a-z0-9-]+\.md$)|specs/(?!SPEC-\d{3}-[a-z0-9-]+/(?:spec|tasks/plan|tasks/todo)\.md$))'
flags: m
match: not_contains
---

No grader can run `brain check`, so this one holds its name rule: every file the run creates in a workspace folder has the name `brain check` accepts. `scripts/evals/__tests__/migrate-08.test.ts` runs `brain check` on a played run.
