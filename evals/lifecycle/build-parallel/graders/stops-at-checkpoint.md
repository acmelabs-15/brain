---
type: regex
target:
  source: file
  path: specs/SPEC-001-text-tools/tasks/plan.md
pattern: '^\| *05 *\|[^|\n]*\| *task *\| *resolved *\|[^\n]*\n\| *06 *\|[^|\n]*\| *checkpoint *\| *(?:open|in-progress) *\|[^\n]*\n\| *07 *\|[^|\n]*\| *task *\| *open *\|'
flags: m
---

Once the five tasks are merged, checkpoint 06 is the frontier, and a checkpoint stops the build for the user's review. Task 05 is resolved, the checkpoint is not, and task 07 behind it is still open.
