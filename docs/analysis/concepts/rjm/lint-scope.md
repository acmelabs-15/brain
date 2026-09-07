---
package: rjm
name: Lint scope
slug: lint-scope
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

# Lint scope

## Definition — verbatim
> "| Lint scope | Changed files only | PR #908 fix: scope `markdownlint --fix` to `git diff --name-only` output, never `**/*.md` |" — .claude/skills/ai-agents-change-control/references/gate-ladder.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/gate-ladder.md | 30 | defines | Commit discipline table entry mandating that markdown linting be scoped strictly to modified files. |

## Consumes
Git diff file lists (`git diff --name-only`).

## Produces
Scoped linter targets preventing unintended collateral modifications across untouched files.

## When applied
Applied whenever running automated lint fixers (`markdownlint --fix`) during pre-commit or pre-PR validation.

## Sub-concepts
none

## Part of
gate-ladder

## Implementation status
clean

## Design notes
A change-control rule mandating that auto-formatting tools only touch files modified in the active diff. Established after PR #908, where an unscoped `markdownlint --fix **/*.md` inadvertently reformatted 53 unrelated memory files, this rule prevents massive collateral diffs from obscuring meaningful changes.
