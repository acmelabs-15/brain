---
package: rjm
name: Detect-Log-Graduate
slug: detect-log-graduate
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Detect-Log-Graduate

## Definition — verbatim
> "The Detect-Log-Graduate loop is live: Detect via the `reflect` skill, Log via Serena observation memories, and Graduate via the skillbook agent." — .claude/skills/ai-agents-research-frontier/SKILL.md:208-209

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 208 | defined here \| used here | Defined as the three-stage self-improving loop mechanism connecting error detection, observation logging, and skill graduation. |

## Consumes
User corrections, session errors, and recurring failure patterns detected across interactions.

## Produces
Observation memories and graduated skill definitions or enforcement guards.

## When applied
When establishing autonomous self-improving loops that convert ad-hoc agent corrections into permanent repository skills and enforcement guards.

## Sub-concepts
none

## Part of
self-improving-loop

## Implementation status
defects: missing-path

## Design notes
The Detect-Log-Graduate loop establishes a progression for persistent learning in rjm. By decomposing self-improvement into detection (via reflection), persistence (via structured memory logging), and graduation (via skillbook compilation into concrete skills or gates), the system prevents agent knowledge from decaying while avoiding premature or uncalibrated rule creation.
