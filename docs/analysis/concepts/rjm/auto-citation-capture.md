---
package: rjm
name: Auto-Citation Capture
slug: auto-citation-capture
kind: technique
package_phase: rjm:reflect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/phase3-4-propose-persist.md, sha256: c797e32ff834c793ed982059ea1368cf993481ebc2d25bf44165df0fed6a4ccc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Auto-Citation Capture

## Definition — verbatim
> "### Phase 4 Enhancement: Auto-Citation Capture" — .claude/skills/reflect/references/phase3-4-propose-persist.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/phase3-4-propose-persist.md | 121 | defined here | Enhancement protocol extracting code citations from reflection text and appending them to memory bodies. |

## Consumes
Proposed learning text referencing files, functions, lines, issues, or ADRs.

## Produces
Formatted markdown citation links (`[cite:source_type](target)`) appended to memory files.

## When applied
Applied during Phase 4 memory persistence whenever learnings mention specific code references.

## Sub-concepts
citations

## Part of
phase-4-persist-learnings-to-memory

## Implementation status
defects: missing-path

## Design notes
Auto-Citation Capture is a reflection technique that parses code references (inline files, function names, line numbers) from natural-language learning notes and converts them into standardized, verifiable markdown citations within the memory body, ensuring learnings stay grounded in codebase reality.
