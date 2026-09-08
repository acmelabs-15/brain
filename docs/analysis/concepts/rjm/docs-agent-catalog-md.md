---
package: rjm
name: docs/agent-catalog.md
slug: docs-agent-catalog-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_agent_catalog.py, sha256: b5d78d816710a2c6fdc598425db8df567139033f76ea7c8fda36eaa10672c49c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# docs/agent-catalog.md

## Definition — verbatim
(used, not defined)

> "Validate docs/agent-catalog.md against templates/agents/*.shared.md." — scripts/validation/validate_agent_catalog.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_agent_catalog.py | 2 | used here | Target documentation file verified against agent templates for drift. |

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
A documentation file path target verified by drift gates rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
