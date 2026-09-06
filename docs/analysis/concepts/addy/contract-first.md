---
package: addy
name: Contract First
slug: contract-first
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: skills/api-and-interface-design/SKILL.md, sha256: 5dafd0c44a3aabf11cae5bcb34f6fcc24dfa5c01ba6e0d3176bce997f4d68bc8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Contract First

## Definition — verbatim
> "Define the interface before implementing it. The contract is the spec — implementation follows." — skills/api-and-interface-design/SKILL.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/api-and-interface-design/SKILL.md | 37 | defined here | Defined as core principle 1, mandating interface contract definition prior to implementation logic |

## Consumes
Feature requirements, domain models, cross-service interaction specifications.

## Produces
Typed interface definitions (e.g. TypeScript interfaces, OpenAPI specifications) that serve as normative contracts.

## When applied
At the inception of API, module, or component development before writing implementation logic.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean

## Design notes
Contract First establishes that type signatures and interface declarations are the definitive specification of a system component. Defining contracts first decouples clients from implementation internals, enables parallel work across teams, and ensures that public APIs remain intentionally designed rather than accidentally shaped by implementation details.
