---
package: matt
name: invoking skill
slug: invoking-skill
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/domain-modeling-trigger-context-adr.md, sha256: ec97502246b5d9cfc3aeea3ed584ca8ac0b43c82ec8389ff2ed96c231b76062d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# invoking skill

## Definition — verbatim
(used, not defined)

> "invoking skill" — .changeset/domain-modeling-trigger-context-adr.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/domain-modeling-trigger-context-adr.md | 5 | used here | Clarifies responsibility boundary: invoking skills must explicitly state when downstream skills maintain domain models. |

## Consumes
A parent skill workflow orchestrating child skill invocations.

## Produces
Direct instructions calling downstream skills via the Skill tool.

## When applied
When a higher-level workflow skill delegates specialized tasks to subordinate skills.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Represents the parent or calling skill in a multi-skill composition pattern. Matt's architecture delegates preconditions and domain maintenance responsibilities to the invoking skill rather than burying cross-skill assumptions inside child skill descriptions.
