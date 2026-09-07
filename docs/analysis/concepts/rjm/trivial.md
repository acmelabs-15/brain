---
package: rjm
name: Trivial
slug: trivial
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Trivial

## Definition — verbatim
> "| Trivial | One known file, no new capability, no contract change | Fix, test, commit |" — .claude/skills/autoplan/SKILL.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 105 | defined here | Minimal sizing tier defining the direct fix, test, commit execution pipeline for single-file changes. |

## Consumes
Bounded change request touching one known file with no contract or capability changes.

## Produces
Streamlined execution executing fix, test, and commit without specification or planning phases.

## When applied
When work is confined to a single file and modifies no public interfaces or contracts.

## Sub-concepts
none

## Part of
size

## Implementation status
clean

## Design notes
Trivial represents autoplan's minimal execution tier for localized, single-file edits. By bypassing specification, architectural planning, and formal review stages in favor of immediate action and local testing, it prevents multi-agent coordination overhead on straightforward bug fixes while preserving test verification guarantees.
