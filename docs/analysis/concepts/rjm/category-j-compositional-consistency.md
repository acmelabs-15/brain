---
package: rjm
name: "CATEGORY J: COMPOSITIONAL CONSISTENCY"
slug: category-j-compositional-consistency
kind: pattern
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/incoherence.py, sha256: 8db97228fdf182875839e2f43c3b7c510a26219f51ed1c1e212e01307cc8ae9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CATEGORY J: COMPOSITIONAL CONSISTENCY

## Definition — verbatim
> "CATEGORY J: COMPOSITIONAL CONSISTENCY" — scripts/incoherence.py:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 97 | defined here | Definition of inconsistency category for claims individually valid but jointly impossible. |

## Consumes
Related system claims, configuration values, timing and numeric resource constraints.

## Produces
Candidate incoherences identifying mutually incompatible constraints or impossible system states.

## When applied
Selected to evaluate sets of claims or configuration values that contradict when combined, such as timeout and retry constraints.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension focused on detecting situations where individual claims or parameters are plausible in isolation but collectively contradict or define impossible runtime states.
