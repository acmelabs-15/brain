---
package: addy
name: git hooks
slug: git-hooks
kind: technique
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

# git hooks

## Definition — verbatim
(used, not defined)

> "Automate this with git hooks:" — skills/git-workflow-and-versioning/SKILL.md:232

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 232 | used here | Recommends automating pre-commit hygiene checks with tools like lint-staged and husky. |

## Consumes
Configured hook scripts (e.g. husky, lint-staged) and repository commit triggers.

## Produces
Automated pre-commit execution of linters, formatters, and tests before changes are committed.

## When applied
> "Automate this with git hooks:" — skills/git-workflow-and-versioning/SKILL.md:232

## Sub-concepts
none

## Part of
- pre-commit-hygiene
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
An automation technique that integrates verification scripts into git lifecycle events, ensuring pre-commit hygiene is enforced programmatically rather than relying on human or agent memory.
