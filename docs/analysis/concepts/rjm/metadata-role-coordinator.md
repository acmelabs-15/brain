---
package: rjm
name: metadata.role: coordinator
slug: metadata-role-coordinator
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# metadata.role: coordinator

## Definition — verbatim
(used, not defined)

> "`metadata.role: coordinator`, and the skill-versus-agent axis is now named" — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md | 21 | used here | Frontmatter attribute identifying orchestrator as a coordinator agent after tier hierarchy removal. |

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
defects: doc-drift

## Design notes
An agent frontmatter metadata attribute identifying coordinator-role agents, replacing the retired manager-tier hierarchy without conferring runtime execution authority.
