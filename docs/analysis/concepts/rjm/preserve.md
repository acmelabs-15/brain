---
package: rjm
name: Preserve
slug: preserve
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Preserve

## Definition — verbatim
> "- **Preserve**: implementation-intent, invariant, performance rationale, legal notice, security context, ADR reference. The comment carries information the code cannot. Leave it." — .claude/agents/comment-analyzer.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/comment-analyzer.md | 38 | defines | Specification of the top-tier triage bucket retaining comments that carry intent, invariants, or rationale. |
| templates/agents/comment-analyzer.shared.md | 49 | defines | Shared template definition of the Preserve triage category and its qualification criteria. |

## Consumes
Comments expressing intent, architectural invariants, security context, or rationale.

## Produces
Decision to retain comment unchanged.

## When applied
When a comment provides information that cannot be inferred from the code alone.

## Sub-concepts
none

## Part of
triage-categories

## Implementation status
defects: doc-drift

## Design notes
The highest-precedence comment triage category, ensuring comments containing design intent, invariants, and rationale are protected from deletion.
