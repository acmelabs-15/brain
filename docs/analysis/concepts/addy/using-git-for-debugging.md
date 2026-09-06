---
package: addy
name: Using Git for Debugging
slug: using-git-for-debugging
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

# Using Git for Debugging

## Definition — verbatim
(used, not defined)

> "Using Git for Debugging" — skills/git-workflow-and-versioning/SKILL.md:250

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 250 | defined here | Section heading introducing git commands for regression hunting, line history, and log searching. |

## Consumes
Commit history, failing tests or defect reproducers, and targeted file paths.

## Produces
Identification of regression-introducing commits, author changes, and filtered historical context.

## When applied
When investigating defects, tracking down regressions, or inspecting previous modifications.

## Sub-concepts
- git-bisect
- git-blame

## Part of
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
A debugging discipline that leverages version control history (including git bisect, blame, and log search) as a diagnostic tool to locate when and why defects were introduced into the codebase.
