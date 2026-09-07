---
package: rjm
name: Memory Format
slug: memory-format
kind: template
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

# Memory Format

## Definition — verbatim
> "**Memory Format**:" — .claude/skills/reflect/references/phase3-4-propose-persist.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/phase3-4-propose-persist.md | 92 | defined here | Defines the standardized markdown template for skill sidecar learning memories. |

## Consumes
Distilled reflection learnings grouped into confidence tiers (HIGH, MED, LOW) and session metrics.

## Produces
Structured markdown document formatted with metadata and confidence-categorized sections.

## When applied
Used when creating or updating a `.serena/memories/{skill-name}-observations.md` file during reflection persistence.

## Sub-concepts
none

## Part of
phase-4-persist-learnings-to-memory

## Implementation status
defects: missing-path

## Design notes
Memory Format defines the standard markdown structure for skill sidecar memories in .serena/memories/, structuring observations into Last Updated, Sessions Analyzed, and confidence-tiered categories (Constraints, Preferences, Edge Cases, Notes for Review) to maintain clean, searchable institutional memory.
