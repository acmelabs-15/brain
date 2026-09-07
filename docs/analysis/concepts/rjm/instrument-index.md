---
package: rjm
name: Instrument Index
slug: instrument-index
kind: reference
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

# Instrument Index

## Definition — verbatim
> "## Instrument Index" — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 22 | defined here | Defined as the master catalog routing specific diagnostic questions to their exact repo-root CLI commands. |

## Consumes
Diagnostic scripts, validation commands, and measurement tools across the repository.

## Produces
A structured reference table matching diagnostic questions to concrete execution commands.

## When applied
Consulted during Phase 1 of the diagnostics process to select the appropriate measurement tool for a given codebase symptom.

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
The central routing directory within `ai-agents-diagnostics-toolkit`. It catalogs all available repository diagnostic instruments, mapping developer questions (regarding token budgets, orphan references, drift, coverage, and evals) directly to their repo-root command invocations.
