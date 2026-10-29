---
type: regex
target:
  source: file
  path: docs/specs/SPEC-001-word-counter/tasks/plan.md
pattern: '^\| *01 *\| *[^<|\s][^|\n]*\| *(?:task|checkpoint) *\|'
flags: m
---

The spec came in the chat, so the plan skill makes its spec folder with `brain new-doc SPEC word-counter`, the first spec in this repo. Row 01 of the plan names a real task, not the template's `<task>` placeholder, so the plan was written before the first question.
