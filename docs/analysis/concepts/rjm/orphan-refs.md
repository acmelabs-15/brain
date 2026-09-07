---
package: rjm
name: Orphan refs
slug: orphan-refs
kind: technique
package_phase: rjm:verify
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

# Orphan refs

## Definition — verbatim
(used, not defined)

> "| Orphan refs | Do specs, evals, and manifests reference entities that no longer exist? |" — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 28 | used here | Listed in the Instrument Index as the diagnostic scan verifying that specs, evals, and manifests do not reference nonexistent entities. |

## Consumes
Specification files, evals, manifest files, and repository filesystem paths.

## Produces
List of broken, stale, or dangling references pointing to deleted or moved repository entities.

## When applied
Executed during codebase validation scans to ensure removed agents, tools, or documents do not leave dangling references.

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
A diagnostic validation technique that scans specification files, evaluation configs, and manifests to detect references to files, commands, or agents that have been deleted or renamed, preserving repository referential integrity.
