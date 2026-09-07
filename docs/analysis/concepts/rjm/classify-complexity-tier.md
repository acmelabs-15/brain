---
package: rjm
name: Classify complexity tier
slug: classify-complexity-tier
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Classify complexity tier

## Definition — verbatim
(used, not defined)

> "3. **Classify complexity tier**: Task(subagent_type="analyst"): Read `.claude/skills/analyze/references/engineering-complexity-tiers.md`." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 156 | used here | Invoked at Step 3 via the analyst agent to score problem complexity from Tier 1 to Tier 5 to calibrate downstream specification rigor. |

## Consumes
Structured PRD from Step 2, engineering complexity tier definitions, scope, ambiguity, and reversibility factors.

## Produces
Assigned complexity tier (1-5), rationale, and recommended specification depth governing subsequent gates.

## When applied
Applied at Step 3 of the /spec pipeline following the requirements interview.

## Sub-concepts
none

## Part of
step-3

## Implementation status
defects: missing-path, doc-drift

## Design notes
A classification step that sizes the engineering complexity (Tier 1 Entry to Tier 5 Principal) of a specification to calibrate downstream ceremony, determining whether CVA analysis, ADR generation, or multi-org governance reviews are required.
