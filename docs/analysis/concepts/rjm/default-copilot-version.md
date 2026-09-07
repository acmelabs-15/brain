---
package: rjm
name: DEFAULT_COPILOT_VERSION
slug: default-copilot-version
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/install_copilot_cli.py, sha256: 43ad4fb2f64407170551ebf0a912601b74ab3574b2bcd44f81e0dd5cfc1260ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_COPILOT_VERSION

## Definition — verbatim
(used, not defined)

> "DEFAULT_COPILOT_VERSION = \"1.0.63\"" — scripts/ci/install_copilot_cli.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/install_copilot_cli.py | 16 | defined here | Constant defining the default pinned version of GitHub Copilot CLI installed in CI. |

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
clean

## Design notes
DEFAULT_COPILOT_VERSION is a configuration constant specifying the default pinned version string for the Copilot CLI installation script rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
