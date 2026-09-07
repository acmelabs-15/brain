---
package: rjm
name: Joint verification
slug: joint-verification
kind: pattern
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

# Joint verification

## Definition — verbatim
(used, not defined)
> "| **Verification** | Chain-of-Verification | Factual accuracy critical; hallucination risk | Quote Extraction (single-turn) | Joint verification | 3-4x tokens (baseline + verify + revise) | List-based QA: 17%→70% accuracy; FACTSCORE: 55.9→71.4 |" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 17 | used here | Listed in the technique selection guide as an approach in conflict with factored Chain-of-Verification due to hallucination copying risks. |

## Consumes
Draft baseline response and verification questions presented together in one conversational context.

## Produces
Verification answers generated in a single pass while retaining the original draft within attention context.

## When applied
Applied in simplified verification setups where questions are answered directly against the original context rather than in isolation.

## Sub-concepts
none

## Part of
prompt-engineer, verification

## Implementation status
clean

## Design notes
Joint verification is a verification pattern where verification questions are answered in the presence of the original baseline response. While simpler to implement than factored verification, it suffers from the hallucination copying problem, where models attend to and repeat their earlier errors rather than independently verifying facts.
