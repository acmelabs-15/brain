---
package: rjm
name: Memory system
slug: memory-system
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory system

## Definition — verbatim
(used, not defined)

> "### Memory system" — docs/customization.md:197

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/customization.md | 197 | used here | Section explaining cross-session knowledge storage in `.serena/memories/` for agent discovery. |

## Consumes
Cross-session knowledge, conventions, and project-specific memory files.

## Produces
Durable memory entries in `.serena/memories/` indexed for agent discovery.

## When applied
When persisting or retrieving cross-session project knowledge across agent invocations.

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
The cross-session knowledge persistence mechanism in rjm that stores memories under `.serena/memories/` for automatic discovery by agents, classified with implementation out of scope per METHOD §1.2 exclusion boundaries.
