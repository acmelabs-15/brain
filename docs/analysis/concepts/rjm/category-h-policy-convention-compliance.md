---
package: rjm
name: "CATEGORY H: POLICY & CONVENTION COMPLIANCE"
slug: category-h-policy-convention-compliance
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

# CATEGORY H: POLICY & CONVENTION COMPLIANCE

## Definition — verbatim
> "CATEGORY H: POLICY & CONVENTION COMPLIANCE" — scripts/incoherence.py:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 85 | defined here | Definition of inconsistency category checking architectural decisions and style policies. |

## Consumes
Architecture Decision Records (ADRs), style guides, policy documents, and implementation patterns.

## Produces
Candidate incoherences where codebase implementations violate established architectural policies or rules.

## When applied
Selected when a project maintains explicit ADRs, convention docs, or prohibitions on specific practices.

## Sub-concepts
none

## Part of
abstract-dimension-catalog

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Consistency dimension verifying that architectural mandates, ADR principles, and explicit policy constraints are faithfully observed throughout the codebase.
