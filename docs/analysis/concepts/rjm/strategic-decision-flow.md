---
package: rjm
name: Strategic Decision Flow
slug: strategic-decision-flow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Strategic Decision Flow

## Definition — verbatim
> "For decisions about WHETHER to do something (not HOW)." — .agents/AGENT-SYSTEM.md:933

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 931 | defined here | Canonical workflow pattern sequencing orchestrator → independent-thinker → high-level-advisor → task-decomposer for directional decisions. |

## Consumes
Scope conflicts, alternative approach debates, "should we do this" questions, or directional decisions.

## Produces
Challenged assumptions, definitive go/no-go verdicts, and decomposed action items.

## When applied
> "**Triage Signal**: Question is about *whether*, not *how*" — .agents/AGENT-SYSTEM.md:952

## Sub-concepts
none

## Part of
- multi-agent-orchestration-system
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
Strategic Decision Flow is rjm's specialized governance sequence for resolving uncertainty regarding product and architectural direction. By routing requests through independent-thinker to challenge assumptions and high-level-advisor to deliver an uncompromising verdict before tasks are decomposed, it prevents engineering teams from prematurely executing unvetted or strategically divergent initiatives.
