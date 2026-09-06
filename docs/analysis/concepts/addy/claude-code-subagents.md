---
package: addy
name: Claude Code subagents
slug: claude-code-subagents
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Claude Code subagents

## Definition — verbatim
> "Subagents only report results back to the main agent." — docs/agents.md:113

## Also called — verbatim
> "subagents" — docs/agents.md:110

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agents.md | 108 | defines | Documents how agent personas run as auto-discovered Claude Code subagents reporting back to the main session |

## Consumes
Persona definitions in agents/ and subagent invocation parameters (subagent_type).

## Produces
Isolated agent execution producing reports returned exclusively to the parent agent.

## When applied
When executing parallel or background specialist tasks where subagents do not need to converse with one another.

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
Claude Code subagents provide isolated context execution where child agents execute specialized tasks and return reports to the main session without spawning nested subagents.
