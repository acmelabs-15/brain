---
package: rjm
name: SESSION-PROTOCOL template
slug: session-protocol-template
kind: template
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SESSION-PROTOCOL template

## Definition — verbatim
(used, not defined)

> "templates/ # SESSION-PROTOCOL template" — .agents/projects/v0.4.0/PLAN.md:252

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/projects/v0.4.0/PLAN.md | 252 | defined here | Repository directory layout entry defining the template directory containing the SESSION-PROTOCOL template. |

## Consumes
Standard session lifecycle conventions and protocol requirements.

## Produces
Consumer repository `.agents/SESSION-PROTOCOL.md` configuration.

## When applied
During initialization or configuration of the session-protocol plugin in a consumer repository.

## Sub-concepts
none

## Part of
session-protocol

## Implementation status
defects: missing-path, doc-drift

## Design notes
The SESSION-PROTOCOL template is a packaged template artifact distributed with the `session-protocol` plugin in the awesome-ai marketplace. It provides consumer repositories with a baseline specification for session initialization, handoff tracking, and verification gates, enabling consistent session hygiene across autonomous and human-supervised agent runs.
