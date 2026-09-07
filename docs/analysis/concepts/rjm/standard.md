---
package: rjm
name: Standard
slug: standard
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .github/scripts/invoke_pr_comment_processing.py, sha256: 5306cccdfce7b079d0c51dc04e7a7ecc76efbfe37d1fc99d7cec046c0f5c85f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Standard

## Definition — verbatim
> "| Standard | Bounded change, existing capability surface | /build then /test then /review then /ship |" — .claude/skills/autoplan/SKILL.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 106 | defined here | Defines the standard pipeline executing /build, /test, /review, and /ship for bounded changes on existing surfaces. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 62 | defined here | Defines the Standard decision tier requiring four phases, decision matrix, and ADR for moderate budget decisions. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 66 | defined here | Establishes the Standard analysis depth tier for $50K-$500K decisions with medium impact and moderate reversibility. |
| .github/scripts/invoke_pr_comment_processing.py | 244 | used here | Matches comment classification branch grouping standard review action items requiring developer resolution. |

## Consumes
Bounded feature change, architectural evaluation scope, or PR review comment.

## Produces
Complete execution through standard lifecycle build, test, review, and ship stages.

## When applied
When changes touch existing surfaces, decisions involve moderate budgets ($50K-$500K), or PR review threads require action.

## Sub-concepts
none

## Part of
size

## Implementation status
defects: missing-path, exit-code-mismatch, doc-drift, missing-doc, orphan, script-bug

## Design notes
Standard represents the foundational lifecycle baseline across multiple rjm subsystems. In autoplan, it governs bounded edits via the four-stage command sequence (/build, /test, /review, /ship). In the buy-vs-build framework, it mandates four analysis phases and an ADR for mid-tier financial commitments. In PR processing, it identifies actionable substantive feedback. Across all contexts, Standard enforces proportional rigor without the heavyweight overhead of full feature specification.
