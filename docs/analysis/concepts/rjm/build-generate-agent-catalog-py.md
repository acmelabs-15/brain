---
package: rjm
name: build/generate_agent_catalog.py
slug: build-generate-agent-catalog-py
kind: name-only
package_phase: none
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

# build/generate_agent_catalog.py

## Definition — verbatim
(used, not defined)

> "> Regenerate: `uv run python build/generate_agent_catalog.py`." — docs/agent-catalog.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-catalog.md | 6 | used here | Documented invocation script responsible for compiling agent templates into the markdown catalog. |
| scripts/validation/validate_agent_catalog.py | 8 | used here | Delegated generator module providing the `--check` contract for catalog drift detection. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
agent-catalog

## Implementation status
clean

## Design notes
build/generate_agent_catalog.py is a repository build script file name that generates the markdown catalog from shared templates rather than an SDLC lifecycle concept.
