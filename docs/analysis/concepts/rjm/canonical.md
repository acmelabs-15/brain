---
package: rjm
name: Canonical
slug: canonical
kind: pattern
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

# Canonical

## Definition — verbatim
> "Canonical: the tree you are allowed to edit. Generated trees are outputs; you never hand-edit them." — .claude/skills/ai-agents-generation-and-release/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 17 | defined here | Defined in jargon as the editable source-of-truth directory tree from which generated outputs are derived. |

## Consumes
Developer and agent edits, architecture decisions.

## Produces
Authoritative source definitions for templates, rules, skills, and configuration.

## When applied
Whenever an author plans or executes modifications to repository files.

## Sub-concepts
none

## Part of
ai-agents-generation-and-release

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
The Canonical concept defines the single source of truth in rjm. It establishes a strict boundary separating hand-editable source trees (`templates/agents/*.shared.md`, `.claude/`, `scripts/`) from generated target trees (`src/copilot-cli/`, `.github/instructions/`, `docs/agent-catalog.md`). By forbidding direct edits to non-canonical targets, it prevents asymmetric overwrites and maintenance incoherence.
