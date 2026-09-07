---
package: rjm
name: lifecycle gate
slug: lifecycle-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# lifecycle gate

## Definition — verbatim
> "Ratcheted lifecycle gate over `.agents/architecture/ADR-NNN-*.md` (issue #5191)." — scripts/validation/check_adr_lifecycle.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 24 | defined here | Module docstring defines the ratcheted ADR lifecycle validation gate enforcing metadata and supersession consistency. |

## Consumes
ADR markdown records under `.agents/architecture/ADR-NNN-*.md` and ratchet baseline `adr_lifecycle_baseline.json`.

## Produces
Validation pass/fail verdict and updated baseline counts when invoked with `--write-baseline`.

## When applied
Executed during pre-PR validation and CI builds to prevent regressions in ADR lifecycle frontmatter and supersession relationships.

## Sub-concepts
none

## Part of
lifecycle

## Implementation status
clean

## Design notes
A ratcheted quality gate enforcing structural and relational integrity rules (frontmatter parsing, valid lifecycle statuses, supersession reciprocity, and prose-frontmatter alignment) across architecture decision records to prevent unvetted ADR state regressions from reaching the main branch.
