---
package: rjm
name: Canonical Citation Check
slug: canonical-citation-check
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Canonical Citation Check

## Definition — verbatim
> "Canonical Citation Check" — scripts/validation/pre_pr_sequence.py:334

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 334 | defined here | Pre-PR validation gate checking heuristic citations for canonical-to-mirror synchronization claims. |
| scripts/validation/pre_pr.py | 14 | used here | Documented as step 7 in the pre-PR validation sequence docstring. |

## Consumes
Mirrored files, synchronization claims, and canonical citation annotations.

## Produces
Validation verdict (soft warning by default, blocking failure under STRICT_CANONICAL_CHECK=1).

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
defects: doc-drift

## Design notes
Canonical Citation Check was created as Layer 4 of the PR #1887 retrospective. It evaluates heuristic citations in mirrored files to verify that references back to canonical sources are accurate, warning softly by default or failing under strict enforcement.
