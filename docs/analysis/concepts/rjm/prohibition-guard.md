---
package: rjm
name: prohibition guard
slug: prohibition-guard
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-064-commands-to-skills-migration.md, sha256: aeea5baa429974dd9980d1e659f39aa10d472d794e644a158bac7eb8f1bd44fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prohibition guard

## Definition — verbatim
> "added. New user-invocable workflows are skills. A prohibition guard that" — .agents/architecture/ADR-064-commands-to-skills-migration.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 136 | defined here | Established as a planned automated pre-commit and CI validation guard blocking new additions to `.claude/commands/`. |

## Consumes
Staged git diffs and repository file addition events.

## Produces
Pass/fail verdicts blocking pull requests or commits that introduce files into deprecated directories.

## When applied
Executed in CI and pre-commit hooks to enforce architectural deprecation boundaries.

## Sub-concepts
none

## Part of
pre-pr-validation-gates, commands-to-skills-migration

## Implementation status
defects: doc-drift

## Design notes
A prohibition guard is an automated gating mechanism used in rjm to enforce architectural sunsetting. When a directory or format is deprecated (such as `.claude/commands/` in favor of `.claude/skills/`), a prohibition guard runs in pre-commit hooks or CI to immediately block the addition of any new files matching the deprecated pattern. This prevents backsliding while existing files are migrated incrementally.
