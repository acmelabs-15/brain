---
package: rjm
name: Instruction Budget (always-on)
slug: instruction-budget-always-on
kind: gate
package_phase: rjm:ship
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

# Instruction Budget (always-on)

## Definition — verbatim
> "Instruction Budget (always-on)" — scripts/validation/pre_pr_sequence.py:413

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 413 | defined here | Pre-PR gate enforcing byte-size ceilings on language-universal always-on instruction files. |

## Consumes
Language-universal `.github/instructions/*.instructions.md` instruction files and recorded byte baselines.

## Produces
Pass/fail verification verdict ensuring aggregate instruction corpus bytes do not exceed budget ceilings.

## When applied
Evaluated during the pre-PR validation sequence before submitting pull requests.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A non-regression ratchet gate in `pre_pr_sequence.py` (Issue #3419) that calculates the aggregate byte size of language-universal instructions in `.github/instructions/`. It prevents silent bloat of the always-on context corpus loaded into every agent session.
