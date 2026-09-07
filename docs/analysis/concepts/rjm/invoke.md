---
package: rjm
name: invoke_
slug: invoke
kind: pattern
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

# invoke_

## Definition — verbatim
> "| `invoke_` prefix | Hook scripts | `.claude/hooks/` |" — .claude/skills/taste-lints/SKILL.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 57 | defined here | Naming convention rule prescribing the `invoke_` prefix for hook scripts located in `.claude/hooks/`. |

## Consumes
Hook script file creations and renames in `.claude/hooks/`.

## Produces
Uniformly prefixed hook script filenames indicating entry points for lifecycle and harness event hooks.

## When applied
Applied when authoring or refactoring hook scripts within the `.claude/hooks/` directory.

## Sub-concepts
none

## Part of
taste-invariants

## Implementation status
defects: other, doc-drift

## Design notes
A naming prefix pattern standardizing hook script identifiers under `.claude/hooks/` to clearly delineate lifecycle event dispatchers from library modules.
