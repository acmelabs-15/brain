---
package: rjm
name: Phase 1: Know the Seam Before You Edit
slug: phase-1-know-the-seam-before-you-edit
kind: phase
package_phase: rjm:build
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

# Phase 1: Know the Seam Before You Edit

## Definition — verbatim
> "### Phase 1: Know the Seam Before You Edit" — .claude/skills/ai-agents-generation-and-release/SKILL.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 40 | defined here | Phase heading mandating identification of canonical versus generated trees before making any edits. |

## Consumes
Target file path planned for modification.

## Produces
Correct identification of canonical source file and regenerating script.

## When applied
Before modifying any file in the repository.

## Sub-concepts
canonical, generator, adr-072

## Part of
ai-agents-generation-and-release

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
Phase 1 in the generation-and-release workflow requires developers and agents to consult the repository seam matrix before editing. Because the repository maintains an asymmetric seam where some directories are canonical and others are generated, verifying file ownership prevents the anti-pattern of hand-editing generated files that will be overwritten on the next build.
