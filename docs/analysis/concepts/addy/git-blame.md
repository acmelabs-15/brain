---
package: addy
name: git blame
slug: git-blame
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

# git blame

## Definition — verbatim
(used, not defined)

> "git blame src/services/task.ts" — skills/git-workflow-and-versioning/SKILL.md:264

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 264 | used here | Demonstrates inspecting commit metadata and author for specific file lines. |

## Consumes
Target file path and commit history.

## Produces
Line-by-line commit authorship, timestamps, and commit hashes.

## When applied
When investigating the context, origin, or author behind a specific line of code.

## Sub-concepts
none

## Part of
- using-git-for-debugging
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
A forensic inspection technique revealing the commit metadata and rationale behind specific lines of code, aiding comprehension during maintenance and bug investigation.
