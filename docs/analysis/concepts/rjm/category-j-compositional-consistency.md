---
package: rjm
name: "CATEGORY J: COMPOSITIONAL CONSISTENCY"
slug: category-j-compositional-consistency
kind: pattern
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
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
