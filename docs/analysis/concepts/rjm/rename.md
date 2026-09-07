---
package: rjm
name: Rename
slug: rename
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Rename

## Definition — verbatim
(used, not defined)

> "Suggests Rename. Renames are cheap and almost always undervalued." — .claude/skills/software-engineering-library/references/refactoring.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 63 | used here | Suggested as an undervalued and inexpensive transformation to eliminate Mysterious Name smells. |

## Consumes
Misleading, ambiguous, or obsolete identifiers for variables, functions, classes, or files.

## Produces
Updated identifiers and consistent call-site updates reflecting clear domain intent.

## When applied
Applied whenever an identifier fails to communicate its purpose, ideally supported by automated tooling.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Rename is a fundamental refactoring transformation in rjm. It systematically updates the name of an identifier across its definition and all references. rjm emphasizes that renames are cheap, high-leverage, and best executed with automated tooling or compiler checklist workflows in dedicated commits separate from behavioral edits.
