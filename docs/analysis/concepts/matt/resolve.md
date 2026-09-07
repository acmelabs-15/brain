---
package: matt
name: Resolve
slug: resolve
kind: technique
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

# Resolve

## Definition — verbatim
> "append a context pointer (gist + link) to the map's Decisions-so-far." — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 45 | used here | Outlines the sequence of posting an answer comment, closing the issue, and updating map decisions in GitHub. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 46 | used here | Outlines the sequence of posting a note, closing the issue, and updating map decisions in GitLab. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 30 | used here | Outlines the sequence of recording an answer, setting status to resolved, and updating map.md in local markdown. |

## Consumes
Completed findings, deliverables, or answers for a claimed child ticket.

## Produces
A closed/resolved ticket and a concise context pointer recorded in the parent map's decisions log.

## When applied
When a worker agent finishes the investigation or implementation task defined by a child ticket.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The final step in the lifecycle of a wayfinder ticket. The agent records answers on the ticket, marks it closed or resolved, and registers a summary pointer in the parent map so future agents can build upon the decision.
