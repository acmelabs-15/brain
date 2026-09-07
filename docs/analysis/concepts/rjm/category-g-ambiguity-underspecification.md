---
package: rjm
name: "CATEGORY G: AMBIGUITY & UNDERSPECIFICATION"
slug: category-g-ambiguity-underspecification
kind: pattern
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
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
