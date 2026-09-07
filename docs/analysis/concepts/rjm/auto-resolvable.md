---
package: rjm
name: Auto-resolvable
slug: auto-resolvable
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Auto-resolvable

## Definition — verbatim
> "**Auto-resolvable** (use resolve_pr_conflicts.py):" — .claude/agents/merge-resolver.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/merge-resolver.md | 98 | defined here | Classification tier identifying file patterns safe for automated script resolution. |
| templates/agents/merge-resolver.shared.md | 60 | defined here | Classification tier listing auto-resolvable file patterns across shared templates. |

## Consumes
Conflicted files matching known safe patterns (lock files, templates, agent and skill definitions, generated platform agents).

## Produces
Automated resolution accepting base/target branch versions using `resolve_pr_conflicts.py`.

## When applied
When conflicted files belong to predetermined deterministic or generated file patterns.

## Sub-concepts
none

## Part of
conflict-classification

## Implementation status
defects: doc-drift

## Design notes
Defines file patterns where conflicts can be mechanically resolved without human or LLM intervention—such as lockfiles, generated platform assets, and authoritative main branch definitions. This drastically reduces manual merge overhead while maintaining system integrity.
