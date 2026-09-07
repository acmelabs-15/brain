---
package: rjm
name: Commit-count monitor
slug: commit-count-monitor
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Commit-count monitor

## Definition — verbatim
> "### Commit-count monitor" — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 127 | defined here | Defined as an advisory diagnostic command tracking branch commit divergence without imposing a blocking gate. |

## Consumes
Git commit history and the tracking origin/main branch.

## Produces
Integer count of local commits ahead of origin/main.

## When applied
Used during branch development and code review to inspect branch divergence and detect wandering or excessive iteration loops.

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
An advisory diagnostic instrument running `git rev-list --count HEAD ^origin/main`. Under ADR-099, it monitors branch commit depth to detect potential scope drift while intentionally avoiding a hard gating threshold that would incentivize contributors to squash-hide revision history.
