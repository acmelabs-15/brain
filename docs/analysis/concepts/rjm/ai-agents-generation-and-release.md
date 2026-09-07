---
package: rjm
name: ai-agents-generation-and-release
slug: ai-agents-generation-and-release
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ai-agents-generation-and-release

## Definition — verbatim
> "name: ai-agents-generation-and-release" — .claude/skills/ai-agents-generation-and-release/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 2 | defined here | Frontmatter skill name identifying the operational runbook for artifact generation, mirroring, drift gates, and releases. |

## Consumes
Canonical source definitions, templates, and script modifications.

## Produces
Synchronized mirrors in `.claude/lib/`, generated agents, catalog docs, and npm package releases.

## When applied
When regenerating mirrors, running drift checks, triaging red version gates, or publishing npm CLI releases.

## Sub-concepts
generator, drift, canonical, semver, phase-1-know-the-seam-before-you-edit, phase-2-regenerate-after-editing-a-canonical-surface, phase-3-run-the-drift-gates-locally-before-pushing

## Part of
orchestrator

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
The ai-agents-generation-and-release skill governs the repository's build, artifact generation, mirroring, and distribution infrastructure. It codifies the asymmetric generation seam between canonical source files and generated targets, providing operational procedures to maintain parity across platforms, execute drift gates locally, and publish npm packages without corrupting source trees.
