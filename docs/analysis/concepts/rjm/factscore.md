---
package: rjm
name: FACTSCORE
slug: factscore
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

# FACTSCORE

## Definition — verbatim
(used, not defined)
> "| **Verification** | Chain-of-Verification | Factual accuracy critical; hallucination risk | Quote Extraction (single-turn) | Joint verification | 3-4x tokens (baseline + verify + revise) | List-based QA: 17%→70% accuracy; FACTSCORE: 55.9→71.4 |" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 17 | used here | Cited as an empirical benchmark metric demonstrating factual accuracy improvement (55.9 to 71.4) under Chain-of-Verification. |

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
FACTSCORE is an academic factual precision benchmark metric cited in multi-turn reference materials to quantify hallucination reduction rather than a lifecycle development concept, classified as name-only per D-023.
