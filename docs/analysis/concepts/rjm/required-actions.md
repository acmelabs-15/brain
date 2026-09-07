---
package: rjm
name: REQUIRED ACTIONS
slug: required-actions
kind: artifact
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# REQUIRED ACTIONS

## Definition — verbatim
> "The script outputs REQUIRED ACTIONS at each step. Follow them exactly." — .claude/skills/analyze/SKILL.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 101 | defined here | Mandatory checklist emitted by analyze.py that the agent must execute before advancing steps. |

## Consumes
Current step state from analyze.py.

## Produces
Unambiguous, step-specific operational instructions and tool invocations required before the next step.

## When applied
Emitted on every invocation of scripts/analyze.py.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: missing-path, doc-drift

## Design notes
`REQUIRED ACTIONS` is the contract mechanism through which `analyze.py` directs the LLM agent, supplying imperative constraints and action items that eliminate open-ended wandering.
