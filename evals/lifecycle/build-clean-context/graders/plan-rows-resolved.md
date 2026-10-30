---
type: regex
target:
  source: file
  path: specs/SPEC-001-greeter/tasks/plan.md
pattern: '^\| *01 *\|[^|\n]*\| *task *\| *resolved *\|[^|\n]*\| *`?[0-9a-f]{7,40}\b[^\n]*\n\| *02 *\|[^|\n]*\| *task *\| *resolved *\|[^|\n]*\| *`?[0-9a-f]{7,40}\b'
flags: m
---

The main session closes each row after its task's commit: the status is `resolved`, and the result opens with the commit SHA, as the plan's table asks.
