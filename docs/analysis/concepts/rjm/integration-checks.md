---
package: rjm
name: Integration Checks
slug: integration-checks
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Integration Checks

## Definition — verbatim
> "### 4.1 Integration Checks" — .claude/skills/prompt-engineer/references/workflow.md:265

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/workflow.md | 265 | defined here | Defined as a five-point checklist verifying cross-section coherence, terminology, priorities, emphasis, and logical flow. |

## Consumes
Assembled optimized prompt combining all section-by-section modifications.

## Produces
Validation report confirming holistic coherence and absence of conflicting directives across sections.

## When applied
During Phase 4 (Integrate and Verify Quality) after individual changes have been applied.

## Sub-concepts
none

## Part of
full-process

## Implementation status
clean

## Design notes
Integration Checks ensure that independently optimized prompt sections cohere into a unified document. The checklist audits cross-section references, terminology uniformity, priority hierarchy alignment, emphasis marker density (enforcing the ≤3 limit), and overall progression to prevent localized improvements from creating systemic contradictions.
