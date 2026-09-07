---
package: rjm
name: Verdict Carve-Out
slug: verdict-carve-out
kind: pattern
package_phase: rjm:plan
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

# Verdict Carve-Out

## Definition — verbatim
> "Issuing a verdict (APPROVED, APPROVED_WITH_CONCERNS, NEEDS_REVISION, BLOCKED) is an *internal* judgment and is required even with incomplete information." — .claude/agents/critic.md:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 205 | defined here | Authorizes delivering internal plan review verdicts without human confirmation despite AGENTS.md autonomy guardrails. |
| templates/agents/critic.shared.md | 209 | defined here | Defines internal judgment exception exempting critique verdicts from external confirmation gates. |

## Consumes
Evaluated plan findings, review axis scores, and preliminary verdict judgments.

## Produces
Immediate delivery of plan review verdicts (APPROVED, APPROVED_WITH_CONCERNS, NEEDS_REVISION, BLOCKED) without blocking on user confirmation.

## When applied
When the critic concludes plan evaluation and prepares to deliver its verdict to the orchestrator or calling agent.

## Sub-concepts
none

## Part of
critic

## Implementation status
defects: missing-path

## Design notes
An operational boundary pattern distinguishing internal analytical judgments from external mutative actions. While the system-wide autonomy guardrails in AGENTS.md mandate user confirmation before executing external actions (such as closing PRs or posting publicly), the Verdict Carve-Out explicitly exempts the critic's verdict generation. This prevents decision paralysis and guarantees that orchestrators receive decisive planning feedback even when information is incomplete.
