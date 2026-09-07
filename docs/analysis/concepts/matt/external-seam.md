---
package: matt
name: external seam
slug: external-seam
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# external seam

## Definition — verbatim
> "A module can have **internal seams** (private to its implementation, used by its own tests) as well as the **external seam** at its interface." — skills/engineering/codebase-design/SKILL.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 38 | defined here | Establishes the single public boundary through which callers interact with a deep module. |
| skills/engineering/codebase-design/SKILL.md | 62 | defined here | Defines the external seam at the module's public interface as distinct from internal seams. |

## Consumes
Module interface specifications and caller integration contracts.

## Produces
The sole public integration boundary through which both callers and external tests cross to exercise module capabilities.

## When applied
When designing or deepening a module to establish its singular public integration boundary.

## Sub-concepts
seam, interface, test-surface

## Part of
codebase-design, module

## Implementation status
clean

## Design notes
The singular public boundary where a module meets callers and external test suites. In codebase-design, depth is a property of the interface at this external seam. Regardless of how many moving parts, private adapters, or internal seams exist inside the implementation, external consumers interact with and verify the module exclusively across one coherent external seam.
