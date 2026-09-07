---
package: rjm
name: load_agents
slug: load-agents
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/openclaw_bridge.py, sha256: b9d845c0aea4cf402cfd9ebe295726b31136a725ae29cfde89973fcf2dad7052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# load_agents

## Definition — verbatim
(used, not defined)

> "def load_agents(agents_dir: Path) -> list[AgentDefinition]:" — scripts/openclaw_bridge.py:187

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 187 | defined here | Function that scans an agent directory for markdown files and parses them into a list of AgentDefinition objects. |

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
defects: doc-drift, orphan

## Design notes
`load_agents` is a Python function identifier in `openclaw_bridge.py` iterating through a directory to load agent markdown files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
