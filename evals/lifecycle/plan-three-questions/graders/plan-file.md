---
type: regex
target:
  source: file
  path: docs/specs/SPEC-001-word-counter/tasks/plan.md
pattern: '^\| *01 *\| *[^<|\s][^|\n]*\| *(?:task|checkpoint) *\|'
flags: m
---

The spec came in the chat, so the plan skill makes its spec folder with `brain new-doc SPEC word-counter`, the first spec in this repo. The template's row table holds its header only, so a row 01 that names a real task shows the plan was written before the first question.
