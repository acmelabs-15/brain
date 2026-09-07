---
package: rjm
name: repositories and service layers
slug: repositories-and-service-layers
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# repositories and service layers

## Definition — verbatim
(used, not defined)

> "the memory systems and the agent orchestrator are repositories and service layers in the sense of `enterprise-patterns.md`." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 156 | used here | Identifies memory systems and agent orchestrators as repositories and service layers where seams should be introduced. |

## Consumes
Data persistence backends, storage engines, and domain service workflows.

## Produces
Decoupled persistence boundaries and application service facades that provide clean seams for testing.

## When applied
Applied when designing or refactoring memory architectures, persistence operations, and orchestrator boundaries.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Standard enterprise architectural patterns that separate domain operations into service layers and isolate data persistence into repositories, providing natural boundaries for legacy code seams.
