---
package: rjm
name: Regenerate and validate agent files
slug: regenerate-and-validate-agent-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/validate-generated-agents.yml, sha256: bfec11e4e278d7959a9341743431c53b8f4c68ee7d453a25390ec6e58777e6ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Regenerate and validate agent files

## Definition — verbatim
(used, not defined)

> "- name: Regenerate and validate agent files" — .github/workflows/validate-generated-agents.yml:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/validate-generated-agents.yml | 145 | defined here | CI workflow step executing build/generate_agents.py in validation mode. |

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
defects: internal-contradiction

## Design notes
`Regenerate and validate agent files` is a CI workflow step name running template regeneration checks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
