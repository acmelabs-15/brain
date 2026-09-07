---
package: rjm
name: OWNED_PREFIXES
slug: owned-prefixes
kind: name-only
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

# OWNED_PREFIXES

## Definition — verbatim
> "Generated-tree ownership is exactly `OWNED_PREFIXES" — .claude/skills/ai-agents-generation-and-release/SKILL.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 72 | used here | Code constant in build_all.py defining the exact directory prefixes owned by generators for staleness checks. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
ai-agents-generation-and-release

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
OWNED_PREFIXES is a Python tuple constant in `build/scripts/build_all.py` (`("src/", ".github/instructions/", "docs/agent-catalog.md")`) defining the exact set of output paths owned by the generator suite. It is not an independent lifecycle concept, but a configuration identifier scoping which trees are inspected for staleness during `--check` validation.
