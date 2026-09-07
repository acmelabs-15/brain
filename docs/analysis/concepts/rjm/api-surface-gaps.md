---
package: rjm
name: API Surface Gaps
slug: api-surface-gaps
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# API Surface Gaps

## Definition — verbatim
> "Public API exists but is undocumented" — .claude/skills/doc-accuracy/SKILL.md:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 196 | defines | Defined as Class 5 of the documentation issue taxonomy identifying public code symbols missing documentation. |

## Consumes
Source code symbol inventories from Phase 1 and extracted documentation claims from Phase 2.

## Produces
Gap findings highlighting public methods, types, and interfaces that lack corresponding documentation entries.

## When applied
Applied during Phase 3 compilability checks and Phase 4 behavioral audits in the doc-accuracy verification workflow.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: doc-drift

## Design notes
Class 5 in rjm's documentation accuracy taxonomy flags public API exports that have no corresponding explanation, signature reference, or usage examples in project documentation. It ensures complete API coverage so new public symbols are not released without discoverable documentation.
