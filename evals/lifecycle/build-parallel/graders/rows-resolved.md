---
type: regex
target:
  source: file
  path: specs/SPEC-001-text-tools/tasks/plan.md
pattern: '^\| *01 *\|[^|\n]*\| *task *\| *resolved *\|[^|\n]*\| *`?[0-9a-f]{7,40}\b[^\n]*\n\| *02 *\|[^|\n]*\| *task *\| *resolved *\|[^|\n]*\| *`?[0-9a-f]{7,40}\b[^\n]*\n\| *03 *\|[^|\n]*\| *task *\| *resolved *\|[^|\n]*\| *`?[0-9a-f]{7,40}\b[^\n]*\n\| *04 *\|[^|\n]*\| *task *\| *resolved *\|[^|\n]*\| *`?[0-9a-f]{7,40}\b[^\n]*\n\| *05 *\|[^|\n]*\| *task *\| *resolved *\|[^|\n]*\| *`?[0-9a-f]{7,40}\b'
flags: m
---

The main session merges each task and closes its row: the status is `resolved`, and the result opens with the commit SHA, as the plan's table asks.
