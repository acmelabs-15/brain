---
package: rjm
name: parse_agent_file
slug: parse-agent-file
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

# parse_agent_file

## Definition — verbatim
(used, not defined)

> "def parse_agent_file(path: Path) -> AgentDefinition | None:" — scripts/openclaw_bridge.py:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 101 | defined here | Function that parses an agent markdown definition file and extracts its frontmatter metadata into an AgentDefinition. |

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
`parse_agent_file` is a Python function identifier in `openclaw_bridge.py` responsible for loading and parsing frontmatter from an agent markdown file rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
