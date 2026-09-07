---
package: rjm
name: Post-PR Retrospective
slug: post-pr-retrospective
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/retro.md, sha256: fbb66599fec7bacf613b20b35c9178a06bce46793cdca2f019063e2ecba02014}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Post-PR Retrospective

## Definition — verbatim
(used, not defined)

> "the Post-PR Retrospective workflow. Existing unfilled skeletons still fill" — .claude/commands/retro.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/retro.md | 16 | used here | Cited as the automated CI workflow that generates retrospective records upon PR merge. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 115 | used here | Referenced alongside `/retro` as an on-demand generator of retrospective artifacts in `.agents/retrospective/`. |

## Consumes
Merged pull request metadata, CI review comments, and commit logs.

## Produces
Archived retrospective record detailing timeline, five whys analysis, and actionable learnings.

## When applied
Triggered in continuous integration pipelines following the successful merge of a pull request.

## Sub-concepts
none

## Part of
retro-command, ai-agents-docs-of-record

## Implementation status
defects: missing-path

## Design notes
An asynchronous CI workflow that compiles post-merge retrospective documentation. By offloading retrospective generation to CI after a PR lands, rjm decouples reflection from local developer interactive sessions, preserving developer momentum while maintaining a consistent audit trail.
