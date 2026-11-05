---
type: regex
target:
  source: file
  path: docs/ideas/IDEA-001-notes-export.md
pattern: '^(?=[\s\S]*(?:^|\n)\| *02 *\|[^|\n]*\| *research *\| *(?:in-progress|resolved) *\|)(?=[\s\S]*(?:^|\n)\| *03 *\|[^|\n]*\| *research *\| *(?:in-progress|resolved) *\|)(?=[\s\S]*(?:^|\n)\| *04 *\|[^|\n]*\| *research *\| *(?:in-progress|resolved) *\|)(?![\s\S]*(?:^|\n)\| *(0[234]) *\|[^\n]*\n[\s\S]*\| *\1 *\|)'
match: contains
---

Each expected row, 02, 03 and 04, remains present exactly once as a research row. Its status is `in-progress`, or `resolved` when its record came back. The three positive lookaheads require those rows; the last guard rejects duplicate IDs. Missing and changed-type rows fail too.
