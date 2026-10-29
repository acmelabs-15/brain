---
type: regex
target:
  source: file
  path: docs/specs/SPEC-001-greeter/tasks/todo.md
pattern: '^(?![\s\S]*- \[ \])[\s\S]*- \[[xX]\]'
---

Each sub-agent ticks the boxes in its own block. After both tasks, `todo.md` holds a ticked box and no open one.
