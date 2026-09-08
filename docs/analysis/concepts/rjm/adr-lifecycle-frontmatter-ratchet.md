---
package: rjm
name: ADR Lifecycle Frontmatter (ratchet)
slug: adr-lifecycle-frontmatter-ratchet
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

# ADR Lifecycle Frontmatter (ratchet)

## Definition — verbatim
> "ADR Lifecycle Frontmatter (ratchet)" — scripts/validation/pre_pr_sequence.py:264

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 264 | defined here | Pre-PR ratchet gate enforcing frontmatter schema compliance across architectural decision records in read-only mode. |

## Consumes
Architectural decision records under .agents/architecture/ADR-NNN-*.md and recorded ratchet baselines.

## Produces
Pass/fail gate verdict verifying that ADR frontmatter conforms to lifecycle schema requirements.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
ADR Lifecycle Frontmatter (ratchet) is a governance gate (Issue #5191) that verifies required metadata and lifecycle states in ADR frontmatter. Operating under ADR-073 read-only constraints to prevent automated rewriting of historical decision prose, it uses ratchet baselines to ensure new decisions meet full schema standards while existing records are gradually normalized.
