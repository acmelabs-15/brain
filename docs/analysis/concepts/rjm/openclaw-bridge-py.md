---
package: rjm
name: openclaw_bridge.py
slug: openclaw-bridge-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# openclaw_bridge.py

## Definition — verbatim
(used, not defined)

> "| `scripts/openclaw_bridge.py` | Exports Claude agent definitions to an OpenClaw workspace or JSON. | `uv run python scripts/openclaw_bridge.py --help` |" — scripts/README.md:225

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/README.md | 225 | used here | Table row documenting the OpenClaw agent definition export utility. |

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
defects: doc-drift, missing-path, internal-contradiction

## Design notes
openclaw_bridge.py is a Python bridge script filename rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
