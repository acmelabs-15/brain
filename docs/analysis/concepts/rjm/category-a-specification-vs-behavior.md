---
package: rjm
name: "CATEGORY A: SPECIFICATION VS BEHAVIOR"
slug: category-a-specification-vs-behavior
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
