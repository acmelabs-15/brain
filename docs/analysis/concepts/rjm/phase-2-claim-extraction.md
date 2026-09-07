---
package: rjm
name: Phase 2: Claim Extraction
slug: phase-2-claim-extraction
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

# Phase 2: Claim Extraction

## Definition — verbatim
> "Phase 2: Claim Extraction  (script-only, <15s)  -> claims.json" — .claude/skills/doc-accuracy/SKILL.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 68 | defined here | Second deterministic phase extracting claims from code blocks, signatures, behavioral statements, and quantitative claims. |

## Consumes
assessment.json and parsed documentation text blocks.

## Produces
claims.json containing categorized claims (code-example, method-signature, behavioral, quantitative).

## When applied
Executed immediately following Phase 1 assessment.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: doc-drift

## Design notes
Phase 2: Claim Extraction isolates factual assertions from documentation into structured claims. It parses fenced code blocks, method signatures, prose statements, and quantitative metrics into a normalized JSON payload for downstream validation.
