---
package: rjm
name: Anti-recommendations
slug: anti-recommendations
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Anti-recommendations

## Definition — verbatim
> "## Anti-recommendations: when the full lifecycle is overkill" — docs/when-to-use.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 36 | defined here | Section heading defining scenarios where executing the full lifecycle is unnecessary overhead. |

## Consumes
Task descriptions or change requests for trivial, mechanical, or throwaway modifications.

## Produces
Guidance to deliberately omit unneeded lifecycle phases for low-risk tasks.

## When applied
When evaluating whether a task (typo fix, revert, rename, dependency bump, throwaway script) warrants full lifecycle phases.

## Sub-concepts
none

## Part of
fitness-guide

## Implementation status
clean

## Design notes
A guidance pattern cataloging scenarios where full lifecycle ceremonies introduce unnecessary friction without adding value, preventing developer overhead on trivial fixes while preserving rigor for high-risk changes.
