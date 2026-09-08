---
package: rjm
name: Sync Registry Provenance
slug: sync-registry-provenance
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

# Sync Registry Provenance

## Definition — verbatim
> "Sync Registry Provenance" — scripts/validation/pre_pr_sequence.py:326

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 326 | defined here | Pre-PR validation gate checking provenance and metadata in synchronization registries. |

## Consumes
Sync registry files and mirrored artifact tracking declarations.

## Produces
Pass/fail gate verdict ensuring all synchronized artifacts declare explicit provenance.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Sync Registry Provenance is a provenance verification gate (Issue #1909) ensuring that synchronized and mirrored artifacts declare their canonical upstream origins and tracking metadata, preventing untraceable code copies.
