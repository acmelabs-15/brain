---
package: rjm
name: Router boundary (ADR-078)
slug: router-boundary-adr-078
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Router boundary (ADR-078)

## Definition — verbatim
> "**Router boundary (ADR-078).** Autoplan is the outer front-door router at the" — .claude/skills/autoplan/SKILL.md:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 139 | used here | Establishes the architectural demarcation between the autoplan skill router and the orchestrator agent. |

## Consumes
Ambiguous, cross-cutting, or multi-agent execution requests.

## Produces
Asymmetric routing handoff to orchestrator with strict prohibition against circular routing back to autoplan.

## When applied
When managing transitions between outer skill routing and multi-agent coordination.

## Sub-concepts
none

## Part of
autoplan

## Implementation status
clean

## Design notes
Router boundary (ADR-078) defines a critical architectural invariant in rjm: 'autoplan routes; orchestrator coordinates specialists.' Autoplan operates at the outer skill layer to triage and route incoming requests. When a task requires multi-agent synthesis or cross-cutting execution, autoplan delegates to orchestrator as a terminal destination, strictly barring orchestrator from calling autoplan to prevent routing cycles and infinite delegation loops.
