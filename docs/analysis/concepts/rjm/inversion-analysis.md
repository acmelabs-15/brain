---
package: rjm
name: Inversion Analysis
slug: inversion-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
  - {path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md, sha256: 16b92ac278886404388a0459346144c6d32187344443c3d57185d6abf438d1d6}
  - {path: .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md, sha256: 4fecb4c15025c5d210c0eb5c3d456700fb637c758c8e7fc2cca1ad5ad114192a}
  - {path: .claude/skills/decision-critic/references/mental-models-chestertons-fence.md, sha256: a25fbfb672bb5b888f219603a67db7738b430faa60074acaaf91535c0370a0c6}
  - {path: .claude/skills/decision-critic/references/mental-models-conways-law.md, sha256: b73b17cb46fe4c9b84b9e5eb953fe661a53ceac27d983cd23139cc18392dbeb9}
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
  - {path: .claude/skills/decision-critic/references/mental-models-galls-law.md, sha256: 02e959738698d10d405c028c1a165cd63f81e23e53535bbbe2a8323f8204cf6a}
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Inversion Analysis

## Definition — verbatim
(used, not defined)

> "### Failure Modes (for Inversion Analysis)" — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 59 | used here | Enumerates Brandolini-related failure modes like reviewer attrition passing weak decisions. |
| .claude/skills/decision-critic/references/critical-thinking-falsifiability.md | 62 | used here | Identifies accepting unfalsifiable benefits as measured facts as a key inversion failure mode. |
| .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md | 48 | used here | Identifies adopting strategies based purely on visible successes as a failure mode. |
| .claude/skills/decision-critic/references/mental-models-chestertons-fence.md | 37 | used here | Identifies reintroducing previously fixed bugs as an inversion failure mode. |
| .claude/skills/decision-critic/references/mental-models-conways-law.md | 50 | used here | Identifies architecture erosion caused by organizational structure mismatch as an inversion failure mode. |
| .claude/skills/decision-critic/references/mental-models-fat-tails.md | 50 | used here | Identifies capacity or on-call budgets planned to averages being overwhelmed by tail events. |
| .claude/skills/decision-critic/references/mental-models-galls-law.md | 50 | used here | Identifies failure to ship due to excessive initial scope as an inversion failure mode. |
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 65 | used here | Identifies fixing symptoms while root causes spawn new problems as an inversion failure mode. |

## Consumes
The original decision goal, architectural claims, and mental model reference failure mode catalogs.

## Produces
An inverted goal document detailing catastrophic failure scenarios, reversed success criteria, and mitigation checks.

## When applied
Executed during Step 6 of the decision-critic workflow to stress-test decisions by planning for failure.

## Sub-concepts
none

## Part of
challenge

## Implementation status
defects: missing-path

## Design notes
Inversion Analysis is a structured reasoning technique derived from Jacobi's aphorism ('man muss immer umkehren') that analyzes decisions by inverting the stated goal into an explicit failure goal. By mapping how a decision could guarantee disaster, it exposes blind spots, systemic vulnerabilities, and unaddressed operational hazards that positive planning conceals.
