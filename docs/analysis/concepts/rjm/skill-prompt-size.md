---
package: rjm
name: Skill Prompt Size
slug: skill-prompt-size
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Prompt Size

## Definition — verbatim
> "### 4. Skill Prompt Size" — .claude/skills/taste-lints/SKILL.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 63 | defined here | Invariant heading establishing that skills exceeding 500 lines need progressive disclosure refactoring. |

## Consumes
`SKILL.md` prompt files within skill packages.

## Produces
Progressive disclosure refactoring into secondary references, scripts, and modular documentation when prompt length exceeds 500 lines.

## When applied
Applied during skill creation and editing to restrict skill prompt lengths and conserve agent context.

## Sub-concepts
none

## Part of
taste-invariants

## Implementation status
defects: other, doc-drift

## Design notes
A structural gate enforcing progressive disclosure on skill definitions so that skill prompt instructions remain under 500 lines, preventing context bloat.
