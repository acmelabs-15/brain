---
package: rjm
name: Drift Inversion
slug: drift-inversion
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Drift Inversion

## Definition — verbatim
> "## Incident 7: 2025-12-15 Drift Inversion (edited the source of truth)" — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:217

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 217 | defined here | Chronicled as Incident 7, where an agent erroneously edited the canonical source of truth to match derived artifacts. |

## Consumes
Bidirectional drift reports between primary and derived artifacts.

## Produces
Erroneous overwriting of canonical sources and inverted architectural direction.

## When applied
Evaluated during drift triage in `ai-agents-debugging-playbook`.

## Sub-concepts
source-of-truth

## Part of
ai-agents-failure-archaeology

## Implementation status
clean

## Design notes
`Drift Inversion` describes the critical error where an agent observing a divergence between files edits the canonical source of truth to match the generated artifact, rather than vice versa. It gave rise to the principle: "drift shows a difference, never a direction."
