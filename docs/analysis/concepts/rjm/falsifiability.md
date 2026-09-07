---
package: rjm
name: Falsifiability
slug: falsifiability
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
  - {path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md, sha256: 16b92ac278886404388a0459346144c6d32187344443c3d57185d6abf438d1d6}
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
  - {path: .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md, sha256: b604165fbc46652b120ab5875ca67002000b87a7c7a39651224cdde9c93b11a7}
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Falsifiability

## Definition — verbatim
> "# Falsifiability" — .claude/skills/decision-critic/references/critical-thinking-falsifiability.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 78 | used here | Notes that a claim with a clear disproof test is cheaper to refute and evaluate. |
| .claude/skills/decision-critic/references/critical-thinking-falsifiability.md | 7 | defined here | Authoritative reference document defining falsifiability principles and verification tests. |
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 79 | used here | Cites falsifiability to require maintainability claims to name explicit measures and thresholds. |
| .claude/skills/decision-critic/SKILL.md | 104 | used here | References falsifiability to reject claims lacking measurable success criteria. |
| .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md | 65 | used here | Links falsifiability to require measurable success criteria for outside-the-circle claims. |
| .claude/skills/review/references/analyst.md | 47 | used here | Instructs the analyst reviewer to flag unfalsifiable claims lacking metrics, baselines, or failure conditions. |

## Consumes
Asserted benefits, claims, or expected outcomes in architectural proposals and decisions.

## Produces
Explicit failure conditions, measurable indicators, or findings rejecting unfalsifiable assertions.

## When applied
Applied during Verification (Steps 3-4) and review passes whenever a claim asserts a benefit without an objective disproof condition.

## Sub-concepts
falsification-test

## Part of
decision-critic

## Implementation status
clean

## Design notes
Falsifiability is a critical thinking mental model and reference rule in rjm requiring every asserted benefit or design claim to define an observable condition that would prove it false. Without falsifiability, vague claims like 'cleaner code' or 'more scalable architecture' pass unchallenged because they cannot be tested or disproven.
