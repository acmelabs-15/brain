---
package: rjm
name: copilot-instructions.md
slug: copilot-instructions-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# copilot-instructions.md

## Definition — verbatim
(used, not defined)

> "copilot-instructions.md" — docs/customization.md:193

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 68 | used here | Documented in verified facts as the repository-wide instructions file with no frontmatter. |
| docs/customization.md | 193 | used here | Headed section explaining how `.github/copilot-instructions.md` customizes GitHub Copilot. |

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
`copilot-instructions.md` is a configuration file path and filename (`.github/copilot-instructions.md`) used by GitHub Copilot rather than an independent software lifecycle concept, classified as `name-only` per D-023.
