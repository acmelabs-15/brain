---
package: addy
name: The Save Point Pattern
slug: the-save-point-pattern
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# The Save Point Pattern

## Definition — verbatim
> "## The Save Point Pattern" — skills/git-workflow-and-versioning/SKILL.md:173
> "This pattern means you never lose more than one increment of work. If an agent goes off the rails, `git reset --hard HEAD` takes you back to the last successful state." — skills/git-workflow-and-versioning/SKILL.md:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 173 | defined here | Defines an iterative loop of test -> verify -> commit where failures trigger hard resets to last commit. |

## Consumes
Incremental code changes, test suites, git commit history.

## Produces
Safe, incremental progress with bounded risk where at most one increment is lost on failure.

## When applied
During active autonomous agent code implementation loops.

## Sub-concepts
save-points

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
The Save Point Pattern structures autonomous code modification into micro-iterations: change -> test -> commit if pass, or hard-reset if fail. This guarantees the agent never loses more than one increment of work and prevents bad code compounding.
