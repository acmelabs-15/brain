---
package: rjm
name: Lefthook Installed
slug: lefthook-installed
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

# Lefthook Installed

## Definition — verbatim
> "Lefthook Installed" — scripts/validation/pre_pr_sequence.py:404

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 404 | defined here | Pre-PR gate verifying local developer clones have Lefthook hook dispatchers installed. |

## Consumes
Local git repository hooks configuration and Lefthook installation state.

## Produces
Pass/fail verification verdict ensuring contributor environments dispatch repository guardrails.

## When applied
Evaluated during the pre-PR validation sequence in local environments; skipped under CI.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A validation gate in `pre_pr_sequence.py` ensuring that local contributor environments have Lefthook properly initialized and installed. It is skipped in CI environments where workflows execute validation scripts directly without git hook interception.
