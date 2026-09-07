---
package: rjm
name: Files per commit
slug: files-per-commit
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/gate-ladder.md, sha256: b22eb897c2009931a8bf5edb70e02644174f0bf5d79605ada991fbd4b2a765d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Files per commit

## Definition — verbatim
> "| Files per commit | 5 or fewer | `.claude/rules/universal.md` MUST 4; AGENTS.md Boundaries |" — .claude/skills/ai-agents-change-control/references/gate-ladder.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/gate-ladder.md | 27 | defines | Commit discipline table entry establishing the mandatory limit of 5 or fewer files per commit. |

## Consumes
Staged git index files during commit preparation.

## Produces
Enforced boundary ensuring commits remain small, atomic, and focused.

## When applied
Evaluated before staging and committing changes in every development session.

## Sub-concepts
none

## Part of
gate-ladder

## Implementation status
clean

## Design notes
Files per commit enforces an atomic change discipline limiting every commit to at most five files. Originating from retrospectives on sprawling, unreviewable pull requests, this cap forces agents to decompose complex modifications into cohesive, reviewable units.
