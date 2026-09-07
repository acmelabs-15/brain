---
package: rjm
name: "CATEGORY B: INTERFACE CONTRACT INTEGRITY"
slug: category-b-interface-contract-integrity
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

# CATEGORY B: INTERFACE CONTRACT INTEGRITY

## Definition — verbatim
> "CATEGORY B: INTERFACE CONTRACT INTEGRITY" — scripts/incoherence.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 51 | defined here | Definition of inconsistency category between interface definitions and runtime values. |

## Consumes
Type definitions, schema definitions, function signatures, and runtime behavior.

## Produces
Candidate incoherences where types or schemas contradict runtime execution.

## When applied
Selected when a codebase has static types, schemas, or docstrings to verify against runtime contracts.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension auditing whether runtime execution respects static interface boundaries, schema validation rules, and function signatures.
