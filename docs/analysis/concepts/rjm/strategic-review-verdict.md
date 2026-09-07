---
package: rjm
name: Strategic Review Verdict
slug: strategic-review-verdict
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Strategic Review Verdict

## Definition — verbatim
> "### Strategic Review Verdict" — .claude/skills/adr-review/SKILL.md:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/SKILL.md | 160 | defined here | Section header establishing the formal strategic assessment verdict and required blocking issues format. |

## Consumes
Evaluations from Chesterton's Fence, Path Dependence, Core vs Context, and Second-System Effect checklists.

## Produces
Formal strategic status (APPROVED, CONCERNS, REJECTED), blocking issues, and recommendations.

## When applied
Applied as the concluding gate of Phase 4 Strategic Review prior to finalizing an ADR.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
defects: doc-drift, missing-path

## Design notes
A formal verdict gate in rjm that synthesizes strategic evaluations into an explicit assessment (APPROVED, CONCERNS, or REJECTED), blocking approval if fundamental architectural risks or unmitigated dependencies remain unresolved.
