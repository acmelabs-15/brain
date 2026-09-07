---
package: rjm
name: "CATEGORY D: TEMPORAL CONSISTENCY (Staleness)"
slug: category-d-temporal-consistency-staleness
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

# CATEGORY D: TEMPORAL CONSISTENCY (Staleness)

## Definition — verbatim
> "CATEGORY D: TEMPORAL CONSISTENCY (Staleness)" — scripts/incoherence.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 63 | defined here | Definition of inconsistency category covering outdated comments and historical references. |

## Consumes
Code comments, TODO/FIXME markers, and historical references against current repository files.

## Produces
Candidate incoherences where code comments or annotations describe removed or modified code.

## When applied
Selected to find stale documentation, obsolete TODO comments, or paths pointing to relocated files.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension identifying historical baggage, including outdated comments referring to deleted functions, completed TODO markers, and broken path citations.
