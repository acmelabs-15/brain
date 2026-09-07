---
package: rjm
name: Diagnostic Signals
slug: diagnostic-signals
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
  - {path: .claude/skills/analyze/references/context-budget-management.md, sha256: 17b9b1708b41bd381548add9b99a0f4128a6e82483ead7684967f67bb18884dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Diagnostic Signals

## Definition — verbatim
> "## Diagnostic Signals" — .claude/skills/analyze/references/agent-architecture-patterns.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 46 | defined here | Table mapping behavioral anomalies (e.g. loops, hallucinations) to agent design flaws. |
| .claude/skills/analyze/references/context-budget-management.md | 35 | defined here | Table identifying symptoms of context exhaustion and memory degradation. |
| .claude/skills/analyze/SKILL.md | 71 | used here | Cites diagnostic signals as key references for evaluating agent reliability. |

## Consumes
Observable runtime behaviors, execution logs, and failure patterns.

## Produces
Diagnostic categorization identifying underlying prompt or context architecture defects.

## When applied
Consulted when debugging aberrant agent behavior, failure loops, or performance degradation.

## Sub-concepts
none

## Part of
agent-architecture-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
Diagnostic Signals provide an empirical mapping between observable agent symptoms (such as repetitive tool-calling loops, dropped constraints, or hallucinated facts) and their underlying design causes (e.g. underspecified stop conditions, context window saturation, or conflicting instructions). This enables rapid debugging of autonomous agent failure modes.
