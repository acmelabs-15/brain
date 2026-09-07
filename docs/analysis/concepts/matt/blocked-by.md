---
package: matt
name: /blocked_by
slug: blocked-by
kind: name-only
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md, sha256: ea175f73d193b3f55819c0ed9bbccf6ee0e70ad8f928e3d7607596c53380acd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# /blocked_by

## Definition — verbatim
(used, not defined)

> "Add it with the `/blocked_by #<n>` quick action, posted as a note" — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 43 | used here | Quick action command syntax used in notes to create native blocking links in GitLab. |

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
clean

## Design notes
A GitLab quick action command string used within issue notes to establish native blocking links, representing tracker-specific command syntax rather than a development lifecycle concept.
