---
package: rjm
name: push_pr_script_identity_guard
slug: push-pr-script-identity-guard
kind: gate
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# push_pr_script_identity_guard

## Definition — verbatim
(used, not defined)

> "excluding `push_pr_script_identity_guard` from the generated Copilot" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 86 | used here | Security guard hook excluded from Copilot inventory per ADR-085 Decision 7 |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 41 | used here | Hook guard subject to containment incident and eight reintroduction criteria |

## Consumes
Git push command executions and parent process identity.

## Produces
Authorization verdict ensuring git push commands originate exclusively from approved PR submission scripts.

## When applied
Triggered on git push tool attempts to verify invoking script identity.

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
push_pr_script_identity_guard was an enforcement hook that ensured git push operations were executed solely through official PR workflow scripts rather than ad-hoc agent commands.
