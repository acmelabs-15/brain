---
package: addy
name: Maintain Scope Discipline
slug: maintain-scope-discipline
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Maintain Scope Discipline

## Definition — verbatim
> "Touch only what you're asked to touch." — skills/using-agent-skills/SKILL.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 97 | defined here | Fifth core operating behavior strictly prohibiting unsolicited refactoring, cleanup of unrelated code, or gratuitous modifications. |

## Consumes
Task scope boundaries, user change requests, codebase context.

## Produces
Surgically focused diffs confined exclusively to the requested feature or bug fix.

## When applied
During all implementation, editing, and refactoring tasks.

## Sub-concepts
none

## Part of
core-operating-behaviors, using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
A discipline requiring surgical precision during edits, explicitly forbidding orthogonal cleanups, unsolicited refactoring, deleting unfamiliar comments, or adding unrequested features.
