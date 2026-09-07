---
package: rjm
name: ADR Anti-Patterns
slug: adr-anti-patterns
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR Anti-Patterns

## Definition — verbatim
(used, not defined)

> "### ADR Anti-Patterns to Avoid" — .claude/agents/architect.md:307

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 307 | defined here | Section heading "### ADR Anti-Patterns to Avoid" tabulating flawed decision patterns alongside concrete corrective actions. |

## Consumes
Draft architectural decision records, proposed alternatives, and decision justifications.

## Produces
Identification of flawed decision documentation patterns and recommended structural corrections.

## When applied
Applied during ADR authoring, review, and governance checks to detect and eliminate disingenuous, superficial, or unmaintainable decision records.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
ADR Anti-Patterns catalogues systematic failure modes in architectural documentation, such as fake alternatives listed solely for compliance, missing tradeoffs, orphaned realization plans, and cargo-cult rationale. In rjm's architecture governance, cataloging these patterns equips the architect agent with explicit heuristic criteria to challenge and reject low-quality decision records before they compromise repository architecture.
