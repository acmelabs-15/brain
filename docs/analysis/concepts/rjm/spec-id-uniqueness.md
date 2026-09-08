---
package: rjm
name: Spec ID Uniqueness
slug: spec-id-uniqueness
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Spec ID Uniqueness

## Definition — verbatim
> "Spec ID Uniqueness" — scripts/validation/pre_pr_sequence.py:298

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 298 | defined here | Pre-PR validation gate enforcing repository-wide uniqueness across specification identifiers. |

## Consumes
Specification documents and specification identifiers across .agents/specs/.

## Produces
Pass/fail gate verdict ensuring no two specifications share the same identifier.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Spec ID Uniqueness is a governance gate (Issue #2068) guaranteeing that every specification identifier across .agents/specs/ is globally unique. This prevents collision and ambiguity in automated requirements tracking, plan validation, and test traceability.
