---
package: rjm
name: restoration PR
slug: restoration-pr
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# restoration PR

## Definition — verbatim
> "`activation-gate-report.md` artifact and open a restoration PR if any" — scripts/eval/software_engineering_library_activation_ci.py:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_ci.py | 147 | used here | Prescribed remediation pull request requested in automated issue body when threshold fails. |
| scripts/eval/software_engineering_library_activation_gate.py | 39 | used here | Defined in RESTORATION_PR_POLICY as the remediation pull request owned by agent-qa. |

## Consumes
Activation gate failure report and consecutive failure threshold notification.

## Produces
Pull request restoring failing book references to the always-on rule surface or strengthening skill triggers.

## When applied
Triggered when any moved book reference reaches the consecutive activation failure threshold.

## Sub-concepts
none

## Part of
restoration-pr-policy

## Implementation status
clean

## Design notes
A remediation pull request owned by `agent-qa` in rjm's governance model, executed when progressive disclosure activation fails consecutively to roll back book references to always-on rules.
