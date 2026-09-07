---
package: rjm
name: "CATEGORY C: CROSS-REFERENCE CONSISTENCY"
slug: category-c-cross-reference-consistency
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

# CATEGORY C: CROSS-REFERENCE CONSISTENCY

## Definition — verbatim
> "CATEGORY C: CROSS-REFERENCE CONSISTENCY" — scripts/incoherence.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 57 | defined here | Definition of inconsistency category between distinct documents or internal sections. |

## Consumes
Multiple documentation files, guides, and specifications across the repository.

## Produces
Candidate incoherences where different documents describe the same concept inconsistently.

## When applied
Selected when multiple documentation files describe shared concepts, limits, or numeric constants.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension verifying that multiple documentation files or guides maintain uniform terminology, numeric limits, and conceptual definitions without intra-doc contradictions.
