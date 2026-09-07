---
package: rjm
name: total_judge_failures
slug: total-judge-failures
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-evidence.md, sha256: 70d527ebb420739aa099f7982f4dc28e44432b3fa91532ae93ed5e0fa78e34e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# total_judge_failures

## Definition — verbatim
(used, not defined)

> "The `total_judge_failures` field the claim rested on" — .claude/skills/context-optimizer/references/rule-audit-evidence.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-evidence.md | 19 | used here | Cited as the evaluation metric field that erroneously counted affected evaluation cells rather than individual failed judge samples. |

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
An evaluation artifact field identifier that masked judge failure rates by counting affected cells instead of individual failed judge samples, rather than a lifecycle concept.
