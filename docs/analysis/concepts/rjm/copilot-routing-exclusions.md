---
package: rjm
name: Copilot Routing Exclusions
slug: copilot-routing-exclusions
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

# Copilot Routing Exclusions

## Definition — verbatim
> "Copilot Routing Exclusions" — scripts/validation/pre_pr_sequence.py:325

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 325 | defined here | Pre-PR gate verifying that Copilot skills do not route to skills excluded in templates/platforms/copilot-cli.yaml. |

## Consumes
Copilot platform manifest exclusions and shipped Copilot skill instructions.

## Produces
Pass/fail gate verdict preventing cross-platform routing to excluded skills.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Copilot Routing Exclusions is a cross-platform compatibility gate ensuring that skills shipped for GitHub Copilot CLI do not contain routing instructions targeting skills excluded from the Copilot distribution, preserving runtime integrity across platforms.
