---
package: rjm
name: canonical authoring surface
slug: canonical-authoring-surface
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-064-commands-to-skills-migration.md, sha256: aeea5baa429974dd9980d1e659f39aa10d472d794e644a158bac7eb8f1bd44fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# canonical authoring surface

## Definition — verbatim
> "`.claude/commands/` as a canonical authoring surface and to make skills the" — .agents/architecture/ADR-064-commands-to-skills-migration.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 41 | defined here | Defined as the single authoritative authoring location for user-invocable workflows, migrating from commands to skills. |

## Consumes
Source files, skill definitions, and build generation templates.

## Produces
The single authoritative source from which all cross-harness artifacts, mirrors, and compatibility shims are derived.

## When applied
Applied when organizing repository layouts and cross-platform build pipelines to establish one source of truth.

## Sub-concepts
user-invocable

## Part of
cross-harness-parity, commands-to-skills-migration

## Implementation status
defects: doc-drift

## Design notes
The canonical authoring surface principle mandates that every workflow, agent, and instruction exists in exactly one authoritative location within the repository. Downstream platform-specific files (such as Copilot CLI manifests or harness adapters) are generated automatically from this canonical source, ensuring developers never have to maintain parallel copies by hand and preventing divergence.
