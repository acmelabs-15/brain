---
type: regex
target:
  source: file
  path: AGENTS.md
pattern: '^# Billing\n\n## Commands\n\n- `bun test` runs the tests\.\n\n## Task end\n\n- Run `brain check`\. Fix each finding, or name it as red in the next step\.\n- Rewrite `docs/STATUS\.md`: the next action, anything red, and what waits on the user\.\n$'
---

The user chose report-only for the overlap step, so `AGENTS.md` holds exactly what the scaffold wrote.
