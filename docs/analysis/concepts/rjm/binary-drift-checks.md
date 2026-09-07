---
package: rjm
name: binary drift checks
slug: binary-drift-checks
kind: gate
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

# binary drift checks

## Definition — verbatim
> "run the binary drift checks against the final PRD; the critic SHALL NOT return APPROVED while any of 9a/9b/9c/9d is FAIL, and for Tier 5 specs the critic SHALL NOT return APPROVED while 9e is FAIL." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:299

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 299 | defined here | Defines the set of binary pass/fail checks that gate critic approval of the final PRD. |

## Consumes
Final PRD document, Step 0 responses (Q1 Demand, Q3 Specificity, Q4 Wedge), and Step 0.5 prior art sections.

## Produces
Binary PASS/FAIL evaluation verdicts across checks 9a through 9e, blocking critic approval if any check fails.

## When applied
> "run the binary drift checks against the final PRD; the critic SHALL NOT return APPROVED while any of 9a/9b/9c/9d is FAIL, and for Tier 5 specs the critic SHALL NOT return APPROVED while 9e is FAIL." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:299

## Sub-concepts
demand-reality-drift, desperate-specificity-drift, narrowest-wedge-drift, prior-art-constraints-elicitation

## Part of
spec-generator, critic

## Implementation status
defects: missing-path, doc-drift

## Design notes
Provides deterministic binary gating checks executed by the critic subagent to enforce traceability back to initial problem framing and prior art constraints, preventing scope drift, target audience changes, or omission of foundational architectural context.
