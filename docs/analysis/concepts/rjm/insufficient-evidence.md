---
package: rjm
name: Insufficient evidence
slug: insufficient-evidence
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/decision-tree-and-examples.md, sha256: 46f4aed79b61e679bd36e14e541a120c0b562c2ba5c11c7b240c73c5eb51ae33}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Insufficient evidence

## Definition — verbatim
> "Insufficient evidence. Note for next session." — .claude/skills/reflect/references/decision-tree-and-examples.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/decision-tree-and-examples.md | 37 | defined here | Negative exit branch of the reflection decision tree when signal confidence thresholds are not satisfied. |

## Consumes
Detected conversational signals that fail to meet confidence thresholds (e.g. fewer than 1 HIGH, 2 MED, or 3 LOW signals).

## Produces
A session exit report indicating insufficient evidence and deferring observations to future sessions.

## When applied
When signal detection analysis yields fewer signals than the minimum confidence threshold required for proposing memory updates.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
A quality gate condition in the reflect workflow that terminates memory update proposals when empirical conversational signals are insufficient, preventing noise and unvalidated hypotheses from polluting persistent skill observation sidecars.
