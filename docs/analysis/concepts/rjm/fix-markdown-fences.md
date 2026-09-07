---
package: rjm
name: fix-markdown-fences
slug: fix-markdown-fences
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# fix-markdown-fences

## Definition — verbatim
> "Scan and repair malformed closing fences in markdown files. Closing fences must never contain language identifiers." — .claude/skills/fix-markdown-fences/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 10 | references | Excluded from doc-accuracy scope and designated for repairing markdown code block fence syntax. |
| .claude/skills/fix-markdown-fences/SKILL.md | 2 | defines | Defines the automated markdown closing fence repair and syntax validation skill. |

## Consumes
Markdown documentation files, ADRs, specifications, or session logs containing fenced code blocks.

## Produces
Repaired markdown files with normalized closing fences, diagnostic CLI reports, and exit codes per ADR-035.

## When applied
Triggered when markdown rendering breaks, code blocks bleed into prose, or before committing documentation.

## Sub-concepts
none

## Part of
cross-phase

## Implementation status
defects: doc-drift, other

## Design notes
A mechanical utility skill in rjm designed to reliably scan and repair malformed markdown closing code fences without corrupting document structure. It isolates code block syntax maintenance from semantic claim audits, ensuring code snippets render cleanly across rendering tools.
