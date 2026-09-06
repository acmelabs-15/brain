---
package: addy
name: git bisect
slug: git-bisect
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

# git bisect

## Definition — verbatim
(used, not defined)

> "git bisect start" — skills/git-workflow-and-versioning/SKILL.md:254

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 254 | used here | Demonstrates binary search through commit history to isolate regression-introducing commits. |

## Consumes
A known good commit, a known bad commit, and a deterministic test or check to run at each midpoint.

## Produces
The exact commit hash that introduced a defect or regression.

## When applied
When investigating when an unexpected bug or test regression was introduced in historical commits.

## Sub-concepts
none

## Part of
- using-git-for-debugging
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
A binary search technique across commit history to rapidly isolate the single commit responsible for a regression, whose effectiveness directly relies on small, atomic commits.
