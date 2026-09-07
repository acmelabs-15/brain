---
package: rjm
name: AGENT_CORPUS_ROOTS
slug: agent-corpus-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
