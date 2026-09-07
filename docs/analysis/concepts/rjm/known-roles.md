---
package: rjm
name: _KNOWN_ROLES
slug: known-roles
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/openclaw_bridge.py, sha256: b9d845c0aea4cf402cfd9ebe295726b31136a725ae29cfde89973fcf2dad7052}
  - {path: scripts/validation/validate_copilot_agent_frontmatter.py, sha256: e4b2a8f78737f7a264ad60ab2fe96757f850f658704bec47695d2d5fc4e42e76}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _KNOWN_ROLES

## Definition — verbatim
(used, not defined)

> "_KNOWN_ROLES = frozenset({\"strategic\", \"coordinator\", \"executor\", \"support\"})" — scripts/validation/validate_copilot_agent_frontmatter.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 61 | defined here | Frozenset constant defining known agent roles for OpenClaw export. |
| scripts/validation/validate_copilot_agent_frontmatter.py | 43 | defined here | Frozenset constant defining allowable agent roles enforced by frontmatter validation. |

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
clean in scripts/validation/validate_copilot_agent_frontmatter.py; defects: doc-drift, orphan in scripts/openclaw_bridge.py

## Design notes
A Python constant identifier defining the allowable set of agent role names rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
