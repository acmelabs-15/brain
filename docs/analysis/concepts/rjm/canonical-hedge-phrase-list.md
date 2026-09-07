---
package: rjm
name: Canonical hedge phrase list
slug: canonical-hedge-phrase-list
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-step0-gates.md, sha256: 4a8aacb665f1475a6d2da319dcafb8c7cba55d6f65149bdefb6d682f7d1a1bb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Canonical hedge phrase list

## Definition — verbatim
> "Canonical hedge phrase list" — .claude/skills/spec-generator/references/spec-step0-gates.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-step0-gates.md | 13 | defined here | Canonical table of prohibited hedging expressions matched against Step 0 answers. |

## Consumes
Author answer text across all six Step 0 problem framing questions.

## Produces
Trigger H1 halt if any case-insensitive word-boundary match for a prohibited phrase is detected.

## When applied
Evaluated against author answers during Step 0 gate execution to detect speculative or aspirational language.

## Sub-concepts
none

## Part of
step-0-gate-logic

## Implementation status
defects: missing-path, doc-drift

## Design notes
A standardized blocklist of 21 hedging phrases and words (such as "would be nice", "we believe", "eventually", "nice to have") enforced by regex word-boundary matching to eliminate vague or non-committal justifications from requirements.
