---
package: rjm
name: nightly-cli-smoke
slug: nightly-cli-smoke
kind: gate
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# nightly-cli-smoke

## Definition — verbatim
(used, not defined)

> "receiving credentials.** `.github/workflows/nightly-cli-smoke.yml` installs" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:660

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 660 | used here | Specified in ADR-071 as the automated nightly smoke test workflow executing plugins in real CLI environments |

## Consumes
Pinned CLI installations and scoped authentication tokens.

## Produces
End-to-end smoke test reports validating real CLI runtime behavior.

## When applied
Scheduled nightly on CI infrastructure to detect host CLI vendor updates and regressions.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: doc-drift, missing-path

## Design notes
nightly-cli-smoke is an automated CI gate executing end-to-end smoke tests of plugins against real host CLI binaries (Claude Code, Copilot CLI). It runs with reviewed, pinned tool versions and isolated credentials to catch host runtime drift before customer environments are affected.
