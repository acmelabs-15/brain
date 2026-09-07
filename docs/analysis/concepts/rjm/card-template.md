---
package: rjm
name: Card Template
slug: card-template
kind: template
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

# Card Template

## Definition — verbatim
> "**Card Template:**" — .claude/skills/prompt-engineer/references/workflow.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/workflow.md | 115 | defined here | Defined as the exact ASCII box schema defining sections for Scope, Problem, Technique, and Before/After text. |

## Consumes
Specific prompt modification details including section name, downstream impacts, observed failure, and reference citation.

## Produces
Formatted ASCII card adhering to the structural sections: SCOPE, PROBLEM, TECHNIQUE, and BEFORE/AFTER.

## When applied
When drafting individual change proposals in Phase 2 of the prompt engineering workflow.

## Sub-concepts
none

## Part of
visual-card-layout

## Implementation status
clean

## Design notes
The Card Template formalizes the ASCII box structure used in change proposals. By establishing fixed compartments for SCOPE, PROBLEM, TECHNIQUE, and BEFORE/AFTER transformations, it enforces rigor and ensures that no change is presented without quoted evidence and explicit reference attribution.
