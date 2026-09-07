---
package: rjm
name: extract_agent_meta
slug: extract-agent-meta
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# extract_agent_meta

## Definition — verbatim
> "def extract_agent_meta(agent_name: str) -> dict[str, str]:" — scripts/eval/eval-agents.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 96 | defined here | Helper function extracting frontmatter metadata from an agent markdown file. |

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
defects: missing-path

## Design notes
A helper function in `eval-agents.py` parsing minimal frontmatter metadata from agent files, classified as `name-only` per D-023.
