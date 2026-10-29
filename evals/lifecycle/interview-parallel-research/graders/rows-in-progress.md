---
type: regex
target:
  source: file
  path: docs/ideas/IDEA-001-notes-export.md
pattern: '^\| *0[234] *\|[^|\n]*\| *research *\| *open *\|'
flags: m
match: not_contains
---

The main session writes the idea file. Once it starts a research row's sub-agent, the row is `in-progress`, or `resolved` when its record came back. A research row still `open` was never started, or the map on disk missed it.
