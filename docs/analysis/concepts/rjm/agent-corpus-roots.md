---
package: rjm
name: AGENT_CORPUS_ROOTS
slug: agent-corpus-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/agent_skill_discriminator_baseline.py, sha256: 25e7f6b164c7be6361c22acacc683a54b4b053fb01051e8c0643d223f09dfef3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AGENT_CORPUS_ROOTS

## Definition — verbatim
(used, not defined)

> "AGENT_CORPUS_ROOTS: tuple[str, ...] = (\".claude/agents/\", \"templates/agents/\")" — scripts/validation/agent_skill_discriminator_baseline.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_skill_discriminator_baseline.py | 41 | defined here | Constant tuple defining the two allowable agent definition root directories. |

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
`AGENT_CORPUS_ROOTS` is a constant tuple identifier in `scripts/validation/agent_skill_discriminator_baseline.py` specifying valid repository root directories for agent definitions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
