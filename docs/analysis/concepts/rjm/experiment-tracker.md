---
package: rjm
name: experiment-tracker
slug: experiment-tracker
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# experiment-tracker

## Definition — verbatim
(used, not defined)

> "Feature flags introduced" — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 67 | used here | Listed in the auto-triggered agents table as an agent role that fires automatically when feature flags are introduced. |

## Consumes
Feature flag definitions, experimentation configurations, and metric definitions.

## Produces
Experiment tracking configurations, telemetry hooks, and experiment documentation.

## When applied
> "Feature flags introduced" — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:67

## Sub-concepts
none

## Part of
auto-triggered-agents

## Implementation status
defects: missing-path

## Design notes
An automated agent role responsible for registering feature flags, logging experiment variations, and setting up experiment tracking when new toggles are introduced into the codebase.
