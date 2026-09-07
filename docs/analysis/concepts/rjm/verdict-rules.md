---
package: rjm
name: Verdict Rules
slug: verdict-rules
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Verdict Rules

## Definition — verbatim
> "Every critique ends with one of these verdicts. No hedging." — .claude/agents/critic.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 134 | defines | Section heading and rules defining four categorical verdicts (READY, READY WITH MINOR FIXES, REVISE, ESCALATE). |
| templates/agents/critic.shared.md | 138 | defines | Shared template section heading specifying categorical review verdict rules. |

## Consumes
Critique evaluation findings, scores, and confidence assessments.

## Produces
One of four definitive categorical verdicts accompanied by confidence level.

## When applied
At the conclusion of every critique performed by the critic agent.

## Sub-concepts
none

## Part of
critic

## Implementation status
defects: missing-path

## Design notes
Decision gate rules enforcing that every review terminates in one of four unambiguous categorical verdicts with an explicit confidence level, preventing hedged or non-actionable reviews.
