---
package: matt
name: child
slug: child
kind: artifact
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md, sha256: afd6852a80185217bd28aa5cbe456bef1e85be25be7bd1fba382d5b8ee428325}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md, sha256: ea175f73d193b3f55819c0ed9bbccf6ee0e70ad8f928e3d7607596c53380acd6}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md, sha256: 7dcda20a2eb4bdc89b95d1143423c0691309921cadae3132e6424f371030506e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# child

## Definition — verbatim
> "The **map** is a single issue with **child** issues as tickets." — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 38 | used here | Defines subordinate issues as child tickets linked to a GitHub wayfinder map. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 39 | used here | Defines subordinate issues as child tickets linked to a GitLab wayfinder map. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 23 | used here | Defines subordinate markdown files as child tickets under a local wayfinder map. |

## Consumes
Parent wayfinder map defining overall scope and goals.

## Produces
Investigative answers, research reports, prototypes, or resolved sub-tasks.

## When applied
When wayfinder breaks down a larger exploration effort into discrete executable tickets.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A subordinate ticket or issue generated beneath an overarching wayfinder map. Each child encapsulates a specific question or operational step (research, prototype, grilling, or task) that can be independently claimed, blocked, and resolved.
