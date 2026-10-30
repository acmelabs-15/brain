---
type: regex
target:
  source: file
  path: AGENTS.md
pattern: 'brain|talk plain|ASD-STE100|interview-me|STATUS\.md|workspace\.md'
flags: i
match: not_contains
---

The repo's `AGENTS.md` holds only its stack, commands and boundaries. On Claude Code, the plugin carries every brain rule, so neither setup-brain nor the session writes brain text into it.
