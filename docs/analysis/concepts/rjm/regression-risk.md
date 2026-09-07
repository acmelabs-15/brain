---
package: rjm
name: Regression risk
slug: regression-risk
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Regression risk

## Definition — verbatim
> "High-risk areas (auth, data persistence, payments) require full coverage regardless of change size." — .claude/commands/test.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 52 | defined here | Gate 1 functional testing criterion requiring comprehensive test coverage on sensitive architectural areas regardless of diff size. |
| .claude/skills/review/references/qa.md | 137 | defined here | QA review evaluation axis establishing HIGH, MEDIUM, and LOW risk categories and corresponding merge action thresholds. |

## Consumes
Pull request diff, touched modules, architectural component risk classifications (auth, persistence, payments, shared APIs).

## Produces
Risk level classification (HIGH/MEDIUM/LOW) determining test coverage thresholds and PR merge gates.

## When applied
Evaluated during `/test` Gate 1 functional testing and during `/review` QA evaluation prior to merge.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
Regression risk evaluation ties test coverage expectations to the blast radius of the modified subsystems. By categorizing changes into risk tiers (such as HIGH for auth, payments, and data persistence) and requiring comprehensive test suites before passing, it prevents critical production outages caused by small, seemingly innocuous changes in core components.
