---
package: rjm
name: Repository Loading Surfaces
slug: repository-loading-surfaces
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Repository Loading Surfaces

## Definition — verbatim
> "The repository keeps one canonical skill tree and one generated Copilot tree:" — .claude/skills/agent-harness-reference/SKILL.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 43 | defines | Defines the repository's dual loading surface architecture comprising canonical skill definitions and generated Copilot mirrors. |

## Consumes
Canonical skill markdown sources under `.claude/skills/` and template generator scripts.

## Produces
Generated platform-specific mirror trees under `src/copilot-cli/skills/`.

## When applied
Applied when architecting skill repositories and synchronizing changes across multiple supported agent harnesses.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift

## Design notes
Repository Loading Surfaces defines the dual-tree architectural model of rjm: a canonical authoring tree (`.claude/skills/`) and a generated downstream tree (`src/copilot-cli/skills/`). This ensures single-source-of-truth governance while supporting multiple host agent environments without manual synchronization drift.
