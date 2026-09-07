---
package: rjm
name: "CATEGORY A: SPECIFICATION VS BEHAVIOR"
slug: category-a-specification-vs-behavior
kind: pattern
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
---

# CATEGORY A: SPECIFICATION VS BEHAVIOR

## Definition — verbatim
> "CATEGORY A: SPECIFICATION VS BEHAVIOR" — scripts/incoherence.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 45 | defined here | Definition of inconsistency category comparing documentation claims against code implementation. |

## Consumes
Documentation (README, guides, API docs) and source code implementation.

## Produces
Candidate incoherences where documentation claims diverge from actual code behavior.

## When applied
Selected when a repository contains both documentation and code implementation to detect behavioral drift.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension focusing on discrepancies where user documentation, READMEs, or API guides state specific behaviors or examples that the underlying code implementation does not fulfill.
