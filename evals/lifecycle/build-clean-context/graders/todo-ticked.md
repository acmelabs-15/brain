---
type: regex
target:
  source: file
  path: specs/SPEC-001-greeter/tasks/todo.md
pattern: '^(?![\s\S]*- \[ \])[\s\S]*- \[[xX]\]'
---

The main session ticks the boxes in each task's block when it closes the row; a sub-agent ticks nothing. After both tasks, `todo.md` holds a ticked box and no open one.
