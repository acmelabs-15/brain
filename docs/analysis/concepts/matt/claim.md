---
package: matt
name: Claim
slug: claim
kind: gate
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

# Claim

## Definition — verbatim
> "the session's first write." — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 44 | used here | Describes self-assigning a GitHub issue as the first write operation of the session. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 45 | used here | Describes self-assigning a GitLab issue as the first write operation of the session. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 29 | used here | Describes updating status to claimed in a local markdown ticket before any work. |

## Consumes
An unblocked, unassigned child ticket selected via frontier query.

## Produces
An assigned or claimed ticket signaling active worker ownership.

## When applied
Immediately upon selecting a ticket, before performing any substantive research or code modifications.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A concurrency control gate and state transition in wayfinding. An agent assigns the selected ticket to itself before starting work, guaranteeing exclusive ownership and preventing collisions across parallel agents.
