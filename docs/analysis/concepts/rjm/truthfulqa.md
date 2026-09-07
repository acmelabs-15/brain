---
package: rjm
name: TruthfulQA
slug: truthfulqa
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# TruthfulQA

## Definition — verbatim
(used, not defined)
> "| TruthfulQA (free-form) | 62.1 | 62.9 | 67.7 | N/A |" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:431

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 431 | used here | Listed in the benchmark performance table evaluating Universal Self-Consistency on free-form truthful question answering. |

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
An academic benchmark dataset measuring model truthfulness and resistance to popular misconceptions in free-form QA, not a lifecycle development concept.
