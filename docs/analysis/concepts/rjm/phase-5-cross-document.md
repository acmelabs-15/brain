---
package: rjm
name: Phase 5: Cross-Document
slug: phase-5-cross-document
kind: phase
package_phase: rjm:build
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

# Phase 5: Cross-Document

## Definition — verbatim
> "Phase 5: Cross-Document    (script + Sonnet, 1-2m) -> consistency-findings.json" — .claude/skills/doc-accuracy/SKILL.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 71 | defined here | Fifth phase identifying cross-document inconsistencies and conflicting statements across docs. |

## Consumes
Quantitative and behavioral claims across multiple documentation files.

## Produces
consistency-findings.json identifying conflicting values and inconsistent doc statements.

## When applied
Executed after behavioral claim analysis.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: doc-drift

## Design notes
Phase 5: Cross-Document groups claims by topic across the entire documentation set to find mutually contradictory statements, such as conflicting configuration defaults, mismatched port numbers, or diverging API descriptions across different guides.
