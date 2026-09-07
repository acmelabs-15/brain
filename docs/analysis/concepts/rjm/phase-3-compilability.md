---
package: rjm
name: Phase 3: Compilability
slug: phase-3-compilability
kind: phase
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 3: Compilability

## Definition — verbatim
> "Phase 3: Compilability     (script-only, <60s)  -> compilability-findings.json" — .claude/skills/doc-accuracy/SKILL.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 69 | defined here | Third deterministic phase verifying code examples against extracted source symbols and producing compilability-findings.json. |

## Consumes
claims.json code examples and assessment.json source symbol tables.

## Produces
compilability-findings.json reporting phantom parameters and unresolved symbols.

## When applied
Executed following Phase 2 claim extraction.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: doc-drift

## Design notes
Phase 3: Compilability performs fast static verification of documented code snippets against real source symbols. It checks whether imported symbols, invoked methods, and passed parameter names exist in the codebase, flagging nonexistent identifiers and phantom parameters before deeper semantic analysis.
