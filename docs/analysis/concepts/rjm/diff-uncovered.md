---
package: rjm
name: diff_uncovered
slug: diff-uncovered
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# diff_uncovered

## Definition — verbatim
(used, not defined)

> "def diff_uncovered(current: set[str], baseline: set[str]) -> tuple[set[str], set[str]]:" — scripts/validation/check_rule_activation_coverage.py:333

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 333 | defined here | Function comparing current uncovered artifact sets against baseline sets to find new regressions and resolved items. |

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
A Python function identifier computing regression diffs between current uncovered artifacts and baseline sets rather than an agent lifecycle concept.
