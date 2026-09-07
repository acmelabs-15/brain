---
package: rjm
name: "CATEGORY G: AMBIGUITY & UNDERSPECIFICATION"
slug: category-g-ambiguity-underspecification
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

# CATEGORY G: AMBIGUITY & UNDERSPECIFICATION

## Definition — verbatim
> "CATEGORY G: AMBIGUITY & UNDERSPECIFICATION" — scripts/incoherence.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 79 | defined here | Definition of inconsistency category for vague statements and implicit assumptions. |

## Consumes
Specification texts, documentation claims, and architectural requirements.

## Produces
Candidate incoherences where statements could be interpreted in multiple conflicting ways.

## When applied
Selected to find missing thresholds, unstated parameters, or open-ended requirements that invite misalignment.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension targeting vague, unquantified assertions and implicit assumptions that leave implementations vulnerable to differing interpretations.
