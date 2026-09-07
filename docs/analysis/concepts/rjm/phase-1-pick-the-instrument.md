---
package: rjm
name: Phase 1: Pick the instrument
slug: phase-1-pick-the-instrument
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 1: Pick the instrument

## Definition — verbatim
> "### Phase 1: Pick the instrument" — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 39 | defined here | Defined as the first phase of the diagnostics process, mapping developer concerns to specific instruments in the index. |

## Consumes
A codebase concern, diagnostic question, or suspected anomaly.

## Produces
A selected diagnostic instrument and its corresponding execution command.

## When applied
Initiated at the start of diagnostic investigations to identify the proper tool.

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
The initial triage phase in `ai-agents-diagnostics-toolkit`. It routes a developer or agent from an informal worry or failure symptom directly to the designated diagnostic script in the Instrument Index.
