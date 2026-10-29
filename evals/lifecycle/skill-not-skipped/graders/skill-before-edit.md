---
type: tool_order
before:
  tool: Skill
  input_match: '"skill"\s*:\s*"(?:[\w-]+:)?source-driven-development"'
after:
  tool: Edit
  input_match: 'next\.config'
---

The skill loads before the change, as Skill Rule 1 asks: load it, then act. A run that edits first and loads the skill after fails here, and so does a run that makes no edit. A run that rewrites the whole file with Write in place of Edit also fails here, while the file grader still sees its change.
