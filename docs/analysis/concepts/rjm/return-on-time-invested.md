---
package: rjm
name: Return on Time Invested
slug: return-on-time-invested
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Return on Time Invested

## Definition — verbatim
> "Measure if retrospective was worth the effort." — .claude/skills/retrospective/references/frameworks.md:435

## Also called — verbatim
"ROTI" — .claude/agents/retrospective.md:1261

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 1261 | used here | Heading and instructions under Phase 6 for measuring retrospective effort versus return. |
| .claude/skills/retrospective/references/frameworks.md | 433 | defined here | Comprehensive guide to the ROTI 0-4 evaluation rubric and governance actions. |

## Consumes
Duration of retrospective session, token expenditure, and actionable outcomes produced.

## Produces
Numerical rating (0 to 4) driving decisions to stop, modify, keep, or standardize retrospective formats.

## When applied
Applied during the closing phase of every retrospective session.

## Sub-concepts
none

## Part of
close-the-retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Return on Time Invested is the canonical unabbreviated name for ROTI. It provides a formal economic discipline for retrospective self-evaluation, ensuring that reflective analysis yields benefits exceeding the cognitive and token cost of execution.
