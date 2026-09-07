---
package: rjm
name: Adapter/Facade
slug: adapter-facade
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Adapter/Facade

## Definition — verbatim
(used, not defined)

> "| Wrapper needed | Adapter/Facade | When existing code must match a new interface. |" — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 57 | used here | Recommended pattern pair when wrapping existing code to match a newly discovered interface. |

## Consumes
Pre-existing code or legacy APIs that must interface with new CVA-derived domain abstractions.

## Produces
Adapter wrapper classes or Facade unified interfaces reconciling disparate contracts.

## When applied
Applied when integrating existing components that cannot be rewritten into the new abstraction structure.

## Sub-concepts
none

## Part of
cva-to-pattern-pipeline

## Implementation status
defects: missing-path

## Design notes
Adapter/Facade in CVA pattern selection provides boundary wrapping when integrating existing external or legacy implementations into newly discovered abstractions, preserving existing code while conforming to the CVA domain model.
