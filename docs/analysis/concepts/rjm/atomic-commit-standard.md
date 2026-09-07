---
package: rjm
name: atomic commit standard
slug: atomic-commit-standard
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-049-pre-pr-validation-gates.md, sha256: e9fca386ce2c9bfe87b801d629d7ebf2d44a14111a1bb6906e8e07b991006470}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# atomic commit standard

## Definition — verbatim
(used, not defined)

> "- 59 commits (exceeding the project atomic commit standard)" — .agents/architecture/ADR-049-pre-pr-validation-gates.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-049-pre-pr-validation-gates.md | 27 | used here | Cited as the project standard defining expected atomic commit granularity and PR commit ceilings. |

## Consumes
Git commit history on the working branch.

## Produces
Adherence to small, single-purpose commits that simplify bisectability and code review.

## When applied
Applies to all code modification sessions and pull requests within the repository.

## Sub-concepts
none

## Part of
pre-pr-validation-gates

## Implementation status
defects: missing-path

## Design notes
A project-wide git hygiene convention that enforces focused, small, single-purpose commits (with a threshold of <= 20 commits per pull request) to keep commit history auditable and reviewable.
