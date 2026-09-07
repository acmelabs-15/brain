---
package: rjm
name: DEFER
slug: defer
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/issue-feature-review.md, sha256: d90505917e29f4e41c12b779d27e9870622dcc8f08fb9b9feb082eae5ad3cd36}
  - {path: .claude/skills/avoiding-manufactured-work/SKILL.md, sha256: dabcb96a0c4d6575feac1b833b4402e6d81db7e20422444726beffd8edaeafc5}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: scripts/ai_review_common/feature_review.py, sha256: f1df8a966212a49fd3ce788d13523421904304b0a7d576bcdf9c946f6951f522}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DEFER

## Definition — verbatim
> "| **Defer** | Unclear requirements OR high uncertainty. Market immature (wait for consolidation). Problem may not need solving (validate demand first). |" — .claude/skills/buy-vs-build-framework/SKILL.md:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/issue-feature-review.md | 105 | applies | Recommendation verdict postponing a valid feature due to competing priorities or timing. |
| .claude/skills/avoiding-manufactured-work/SKILL.md | 22 | defines | Task disposition option postponing unblocking work until a verified consumer appears. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 15 | defines | Decision matrix output tier alongside Build, Buy, and Partner. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 230 | defines | XML decision option element when requirements are unclear or market is immature. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 186 | defines | Tabular decision criterion when requirements are unclear or demand is unvalidated. |
| scripts/ai_review_common/feature_review.py | 10 | defines | Member of VALID_RECOMMENDATIONS frozenset for automated issue review parsing. |

## Consumes
Evaluated features or architectural decisions with high uncertainty, low immediate urgency, or immature market conditions.

## Produces
Postponement verdict preserving work in backlog without active resource allocation.

## When applied
Applied when requirements are unclear, high uncertainty exists, or when avoiding manufactured work until an immediate consumer emerges.

## Sub-concepts
none

## Part of
issue-feature-review-agent, buy-vs-build-framework, avoiding-manufactured-work

## Implementation status
defects: missing-path, doc-drift, exit-code-mismatch, missing-doc

## Design notes
A strategic holding disposition in rjm across feature triage, build-vs-buy decisions, and task pruning. It prevents premature commitment to solutions when requirements remain uncertain or when no active consumer exists, saving resources until demand is proven.
