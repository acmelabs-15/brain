---
package: rjm
name: Commit Discipline
slug: commit-discipline
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/ai-agents-change-control/references/gate-ladder.md, sha256: b22eb897c2009931a8bf5edb70e02644174f0bf5d79605ada991fbd4b2a765d8}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Commit Discipline

## Definition — verbatim
> "## Commit Discipline" — .claude/agents/implementer.md:346

## Also called — verbatim
> "# Gate Ladder and Commit Discipline" — .claude/skills/ai-agents-change-control/references/gate-ladder.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 346 | defined here | Section heading setting rules for atomic commits, conventional formats, and descriptive bodies. |
| .claude/skills/ai-agents-change-control/references/gate-ladder.md | 1 | defined here | Document title combining gate ladder validation timing with commit discipline caps and protocols. |
| templates/agents/implementer.shared.md | 335 | defined here | Section heading establishing commit formatting and atomicity guidelines in shared templates. |

## Consumes
Staged code modifications and test additions.

## Produces
Small, atomic, conventional git commits that explain why changes were made.

## When applied
Whenever committing changes to version control during implementation sessions.

## Sub-concepts
conventional-format

## Part of
implementation-process

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Commit Discipline enforces atomic, rollback-safe commit practices across rjm. It requires conventional formatting, clear rationales in commit bodies, and strict adherence to PR commit budgets (e.g. ADR-099), ensuring clean git histories and straightforward code reviews.
