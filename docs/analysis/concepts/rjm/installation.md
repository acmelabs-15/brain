---
package: rjm
name: installation
slug: installation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/.skillignore, sha256: e90aea4eb3a8bf9cb3eb27da6c7645e58b87153d49204bfe5d4c9babb2b501c3}
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# installation

## Definition — verbatim
(used, not defined)

> "## Installation" — scripts/README.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/.skillignore | 1 | used here | Mentioned in header comment excluding non-runtime repository files from skill packaging and installation. |
| scripts/README.md | 24 | defined here | Section heading documenting agent and tool installation procedures across Claude Code, Copilot CLI, VS Code, and Visual Studio. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, internal-contradiction

## Design notes
`installation` is an operational documentation heading and comment label describing tool setup and marketplace configuration rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
