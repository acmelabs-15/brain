---
package: matt
name: markdown notes
slug: markdown-notes
kind: artifact
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# markdown notes

## Definition — verbatim
> "Ensure the exploration subagent can save files - it should save its markdown notes in a directory outside the repo, accessible by all future subagents." — skills/in-progress/implement-spec/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/implement-spec/SKILL.md | 21 | defined here | Research artifact saved outside the repository for shared access by future implementer subagents. |

## Consumes
Exploration findings gathered by an exploration subagent.

## Produces
Markdown documents stored outside the target repository.

## When applied
Generated during ticket exploration prior to launching implementer subagents.

## Sub-concepts
none

## Part of
implement-spec

## Implementation status
clean

## Design notes
A persistent exploration artifact stored outside the repository directory tree. By saving research findings externally, implementer subagents across multiple worktrees can reference common exploration findings without cluttering the repository git history or duplicating investigative effort.
