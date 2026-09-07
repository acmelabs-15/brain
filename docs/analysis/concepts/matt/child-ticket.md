---
package: matt
name: Child ticket
slug: child-ticket
kind: artifact
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md, sha256: 7dcda20a2eb4bdc89b95d1143423c0691309921cadae3132e6424f371030506e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Child ticket

## Definition — verbatim
> "`.scratch/<effort>/issues/NN-<slug>.md`, numbered from `01`, with the question in the body. A `Type:` line records the ticket type (`research`/`prototype`/`grilling`/`task`); a `Status:` line records `claimed`/`resolved`." — skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-local.md | 26 | used here | Defines format, metadata fields, and path conventions for local child tickets under a wayfinder map. |

## Consumes
Parent wayfinding map identifying an open question or sub-task.

## Produces
Documented findings, code prototypes, or answers linked back to the map.

## When applied
When an exploration effort identifies a bounded sub-task (research, prototype, grilling, or task).

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A focused work item subordinate to a wayfinder map in local markdown tracking. It encapsulates a single question, its operational type, status, and resolution to enable modular agent execution.
