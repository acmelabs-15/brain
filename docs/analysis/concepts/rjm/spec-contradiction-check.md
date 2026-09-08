---
package: rjm
name: Spec Contradiction Check
slug: spec-contradiction-check
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

# Spec Contradiction Check

## Definition — verbatim
> "Spec Contradiction Check" — scripts/validation/pre_pr_sequence.py:343

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 343 | defined here | Pre-PR validation gate checking for contradictions between issue specifications and committed frontmatter. |
| scripts/validation/pre_pr.py | 15 | used here | Documented as advisory step 7b in the pre-PR validation sequence docstring. |

## Consumes
Linked issue/PR descriptions and committed agent frontmatter configurations.

## Produces
Advisory validation verdict warning of contradictions between issue claims and committed frontmatter.

## When applied
Executed during the pre-PR validation sequence in advisory mode.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
defects: doc-drift

## Design notes
Spec Contradiction Check is an advisory pre-PR gate (Issue #1920) created following the PR #1897 round-7 review cycle. It catches discrepancies between external issue specifications and committed agent frontmatter locally before pushing.
