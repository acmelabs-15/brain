---
package: rjm
name: Agent Catalog
slug: agent-catalog
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: scripts/validation/validate_agent_catalog.py, sha256: b5d78d816710a2c6fdc598425db8df567139033f76ea7c8fda36eaa10672c49c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Catalog

## Definition — verbatim
> "# Agent Catalog" — docs/agent-catalog.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-catalog.md | 1 | defined here | Document title of the machine-generated markdown index cataloging all shared agent templates. |
| scripts/validation/validate_agent_catalog.py | 2 | used here | Target committed documentation file validated for drift against agent template definitions. |

## Consumes
Agent templates under `templates/agents/*.shared.md` and the generation script `build/generate_agent_catalog.py`.

## Produces
Committed documentation index (`docs/agent-catalog.md`) detailing agent names, role classifications, line counts, and functional descriptions.

## When applied
Regenerated upon any change to agent template markdown files and validated in CI to prevent documentation drift.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The Agent Catalog serves as the authoritative, machine-generated registry of all 31 specialized agent templates maintained in rjm. By coupling automated generation from shared templates with strict CI drift validation, rjm ensures that documentation of agent roles, line counts, and capability descriptions never diverges from executable prompt definitions.
