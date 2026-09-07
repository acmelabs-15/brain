---
package: rjm
name: high-level-advisor
slug: high-level-advisor
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md, sha256: 3b22acbd549e8e929b263e0164c8946a7723e1355d5bfc361df3c69fa4593ce1}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# high-level-advisor

## Definition — verbatim
> "**Role**: Brutally honest strategic advisor" — .agents/AGENT-SYSTEM.md:578

## Also called — verbatim
- `High-Level-Advisor` — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 574 | defined here | Defined as a strategy agent specializing in ruthless triage, priority conflicts, and definitive verdicts. |
| .agents/analysis/adr-045-feasibility-analysis.md | 234 | used here | Recommended by analyst to evaluate the strategic trade-off between a 2-plugin and 4-plugin architecture. |
| .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md | 92 | used here | Designated as the final escalation route when multi-agent execution detects hard conflicts. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 102 | used here | Evaluated for model assignment and retained on Sonnet 4.5 for strategic decision routing. |
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 304 | used here | Participates as one of six roles on the formal ADR review panel resolving governance gating. |
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 5 | used here | Issues a blocking review verdict rejecting premature merge of an incomplete remediation plan. |
| .claude/skills/adr-review/SKILL.md | 88 | used here | Designated as the tie-breaker agent in multi-agent ADR review debates when decision paralysis occurs. |
| docs/agent-catalog.md | 27 | used here | Cataloged as a strategic role agent that resolves decision paralysis with clear verdicts rather than options. |
| README.md | 289 | defined here, used here | Demonstrated delivering GO/NO-GO verdicts and ranking candidate features for quarterly planning. |
| src/claude/AGENTS.md | 169 | used here | Listed in strategy agents table mapped to `high-level-advisor.md`. |
| templates/AGENTS.md | 183 | used here | Documented in shared agents reference for strategic decisions, prioritization, and unblocking. |

## Consumes
Strategic impasses, multi-agent disagreements, architectural trade-offs, and priority disputes.

## Produces
Clear verdicts (go/no-go, continue/pivot/cut), priority stacks (P0/P1/P2/KILL), and conflict arbitrations.

## When applied
> "- Strategic impasses" — .agents/AGENT-SYSTEM.md:597

## Sub-concepts
none

## Part of
- strategic
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction, unfailable-gate (from .agents/AGENT-SYSTEM.md relative path errors, ADR-039 governance failures, and ADR-099 debate log discrepancies)

## Design notes
`high-level-advisor` serves as rjm's terminal authority for resolving strategic impasses and conflicting recommendations across specialized agents. Unlike consensus-seeking agents, it intentionally operates with brutal candor, delivering single definitive verdicts ("do X") rather than lists of options. In ADR-009's consensus protocol, hard conflicts escalate directly to `high-level-advisor` rather than stalling the orchestrator, preventing multi-agent paralysis when trade-offs cannot be resolved by majority vote.
