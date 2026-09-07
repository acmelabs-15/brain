---
package: rjm
name: LABEL
slug: label
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/update_needs_split_label.py, sha256: 3d780d84f7cfe2159df2510cb32a9f3f547d69615c5f073d678d5fb3e174dd03}
  - {path: scripts/eval/panels/owner-copilot-cli.json, sha256: 883f252ebff9ef3be47e45e94785d5f1ce172e2a2fa73ac2bfa3ff2b11ab17f2}
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# LABEL

## Definition — verbatim
(used, not defined)

> "LABEL = " — scripts/ci/update_needs_split_label.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/update_needs_split_label.py | 12 | defined here | Constant defining the GitHub PR label name `needs-split` applied to large pull requests. |
| scripts/eval/panels/owner-copilot-cli.json | 17 | defined here | JSON field key naming the model evaluation tier label `opus5`. |
| scripts/eval/software_engineering_library_activation_ci.py | 29 | defined here | Constant defining the GitHub issue tracking label for library activation evaluation failures. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, other

## Design notes
`LABEL` is a configuration constant and dictionary key identifier used across PR management and evaluation scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
