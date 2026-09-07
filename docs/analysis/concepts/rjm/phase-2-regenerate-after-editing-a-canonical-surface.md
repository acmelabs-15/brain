---
package: rjm
name: Phase 2: Regenerate After Editing a Canonical Surface
slug: phase-2-regenerate-after-editing-a-canonical-surface
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

# Phase 2: Regenerate After Editing a Canonical Surface

## Definition — verbatim
> "### Phase 2: Regenerate After Editing a Canonical Surface" — .claude/skills/ai-agents-generation-and-release/SKILL.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 80 | defined here | Phase heading establishing the mandatory regeneration procedure after editing any canonical surface. |

## Consumes
Canonical source changes (templates, skills, commands, rules, lib).

## Produces
Regenerated outputs matching canonical edits to be committed together.

## When applied
Immediately following any edit to a canonical source file before committing or pushing.

## Sub-concepts
generator, canonical

## Part of
ai-agents-generation-and-release

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
Phase 2 in generation-and-release mandates that any modification to a canonical source file must be immediately followed by executing the appropriate generator script (`build_all.py`, `generate_agents.py`, or `sync_plugin_lib.py`). Crucially, both the canonical source edits and the regenerated artifacts must be committed together in the same commit set to prevent red CI drift gates.
