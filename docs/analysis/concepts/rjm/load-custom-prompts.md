---
package: rjm
name: load_custom_prompts
slug: load-custom-prompts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_anthropic_api.py, sha256: 574e0b74df4e4a048641130705579a08ddd84d48c0a4e79655dae3040888e1e8}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# load_custom_prompts

## Definition — verbatim
(used, not defined)

> "def load_custom_prompts(path: str) -> dict[str, list[dict[str, Any]]]:" — scripts/eval/_anthropic_api.py:410

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_anthropic_api.py | 410 | defined here | Function parsing custom prompt definitions from JSON or YAML files. |
| scripts/eval/eval-agents.py | 49 | used here | Imported to load custom prompts from external files for agent evaluations. |

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
load_custom_prompts is a Python utility function identifier loading external prompt configuration files rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
