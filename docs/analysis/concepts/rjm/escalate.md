---
package: rjm
name: escalate
slug: escalate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# escalate

## Definition — verbatim
> "**escalate** | Conflicts detected | Route to high-level-advisor" — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 92 | defined here | Aggregation strategy row routing detected conflicts to high-level-advisor. |
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 53 | used here | Synthesis guidance verdict when a large refactoring masquerades as a small improvement. |
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 32 | used here | Halt rule returning ESCALATE when a rewrite lacks engineering evidence beyond a v0 projection. |
| .claude/skills/decision-critic/scripts/decision-critic.py | 317 | defined here | Script rubric defining ESCALATE when failed items involve safety, security, or compliance. |
| .claude/skills/decision-critic/SKILL.md | 34 | defined here | Process synthesis diagram defining ESCALATE as one of three final decision verdicts. |
| .claude/skills/review/SKILL.md | 37 | used here | Canonical review round cap contract gating actions with ACT or ESCALATE. |
| .claude/skills/security-review/SKILL.md | 195 | defined here | Verdict definition when a diff is incomplete or an action requires an external owner. |
| scripts/eval/eval-agent-vs-baseline.py | 101 | used here | Evaluation output shape contract requiring responses to lead with IDENTIFY, OK, or ESCALATE. |

## Consumes
Irreconcilable agent conflicts, incomplete diffs, safety/compliance risks, or uncapped review rounds.

## Produces
An escalation package routed to an authoritative human operator, high-level-advisor, or designated decision owner.

## When applied
Applied when automated consensus fails, when a decision crosses security/compliance thresholds, or when analysis cannot proceed safely without external input.

## Sub-concepts
none

## Part of
aggregation-strategies

## Implementation status
defects: missing-path · .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:24 (references missing root HANDOFF.md); doc-drift · line 101 (imprecise voting weights); missing-path · .claude/skills/decision-critic/references/quality-boy-scout-rule.md:2; missing-path · .claude/skills/decision-critic/references/rewrite-regression-check.md:2; exit-code-mismatch · .claude/skills/decision-critic/scripts/decision-critic.py:436; doc-drift · lines 338, 426; missing-path · .claude/skills/decision-critic/SKILL.md:96; doc-drift · line 54; internal-contradiction · line 92; missing-path · .claude/skills/review/SKILL.md:35, 48, 51, 54, 205; doc-drift · line 4; exit-code-mismatch · scripts/eval/eval-agent-vs-baseline.py:919. Clean in .claude/skills/security-review/SKILL.md:195.

## Design notes
An essential safety valve and routing gate across ai-agents workflows. In parallel coordination (ADR-009), escalate routes intractable conflicts between specialist agents to high-level-advisor. In decision criticism and security review, ESCALATE halts autonomous progression whenever evidence is incomplete, safety/compliance boundaries are breached, or human executive ownership is mandatory.
