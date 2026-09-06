---
package: matt
name: README.md
slug: readme-md
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/remove-em-dashes-repo-wide.md, sha256: bf463a1fc067e2a0752a952c247169e1ba1e0bc81fc542d434eb42a99de317bd}
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# README.md

## Definition — verbatim
(used, not defined)

> "README.md" — .changeset/remove-em-dashes-repo-wide.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/remove-em-dashes-repo-wide.md | 5 | used here | Listed among repository files cleaned of em-dashes during repo-wide rewrite. |
| skills/misc/scaffold-exercises/SKILL.md | 29 | used here | Required non-empty documentation file in each scaffolded exercise subfolder. |

## Consumes
Package, skill, or directory purpose and usage instructions.

## Produces
A primary landing page and introductory overview document for users and agents.

## When applied
Required at repo root, category bucket folders, and scaffolded subdirectories.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The standard introductory documentation artifact for repositories and subfolders, outlining intent, directory structure, and usage instructions for both human readers and coding agents.
