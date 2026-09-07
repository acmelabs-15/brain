---
package: rjm
name: Module Structure
slug: module-structure
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Module Structure

## Definition — verbatim
> "### Module Structure" — scripts/AGENTS.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/AGENTS.md | 115 | defined here | Prescribes organizational pattern for script functions, module exports, and dependency management. |

## Consumes
Reusable script routines and library functions.

## Produces
Modular script organization with decoupled functions and clean import interfaces.

## When applied
When structuring multi-function scripts or shared library code.

## Sub-concepts
none

## Part of
powershell-coding-standards

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
Code organization pattern defining module layout, function declarations, and interface boundaries for scripts to facilitate unit testing and cross-script reuse.
