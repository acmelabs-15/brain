---
package: rjm
name: Read direction, not magnitude
slug: read-direction-not-magnitude
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-instrument.md, sha256: e44bedb58e00f8ca48ec3ee0cb3b8396e3cecf9bfde2e87f00e98adee9c6ee18}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Read direction, not magnitude

## Definition — verbatim
(used, not defined)

> "### Read direction, not magnitude" — .claude/skills/context-optimizer/references/rule-audit-instrument.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-instrument.md | 35 | defined here | Section heading establishing the evaluation analysis rule to evaluate directional signs across repeated runs rather than mean deltas. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`Read direction, not magnitude` is a section heading in `rule-audit-instrument.md` stating the methodological rule that noisy evaluation scores must be interpreted through consistent sign direction across runs rather than raw score deltas, classified as `kind: name-only` per D-023.
