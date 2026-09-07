---
package: rjm
name: Quick Classification Matrix
slug: quick-classification-matrix
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quick Classification Matrix

## Definition — verbatim
> "## Quick Classification Matrix" — docs/task-classification-guide.md:245

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/task-classification-guide.md | 245 | defined here | Rapid lookup matrix mapping specific task triggers and file paths to Task Type, Likely Complexity, and Minimum Risk. |

## Consumes
File path patterns (such as `lefthook.yml`, `**/Auth/**`), prompt keywords, and task characteristics.

## Produces
Immediate classification coordinates across task type, complexity tier, and baseline risk level.

## When applied
When developers or orchestrators need rapid heuristic classification for tasks without evaluating the full classification text.

## Sub-concepts
none

## Part of
task-classification-guide

## Implementation status
clean

## Design notes
A heuristic decision table in rjm mapping common triggers and sensitive file paths directly to minimum risk and complexity floors, ensuring critical tasks like auth changes or Git hook updates receive appropriate oversight.
