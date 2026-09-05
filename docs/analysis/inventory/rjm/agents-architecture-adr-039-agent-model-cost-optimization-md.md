---
package: rjm
path: .agents/architecture/ADR-039-agent-model-cost-optimization.md
type: agent
bytes: 14028
unit: inv-rjm-15
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-039-agent-model-cost-optimization.md

## Purpose — required, verbatim
> "Optimize agent assignments within the Claude 4.5 family using a three-tier strategy:" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:110

## Design intent — required
Architectural decision record intended to optimize operational API costs across the agent system by shifting structured analysis, routing, review, and high-volume CRUD tasks from Opus to Sonnet and Haiku tiers within the Claude 4.5 family, reserving Opus strictly for high-stakes code generation. Although the changes were later deprecated and reverted due to lack of empirical monitoring validation, the design sought to establish a data-driven, three-tier model hierarchy balancing cost against reasoning capability.

## Phase — required
none

## Inputs — required
Cumulative session logs (289 sessions from December 17, 2025 to January 3, 2026; .agents/architecture/ADR-039-agent-model-cost-optimization.md:81), Session 128 context optimization log (.agents/sessions/2026-01-03-session-128-context-optimization.md; .agents/architecture/ADR-039-agent-model-cost-optimization.md:285), prior model assignments from ADR-002 (.agents/architecture/ADR-039-agent-model-cost-optimization.md:81), Claude 4.5 family pricing and capabilities documentation (.agents/architecture/ADR-039-agent-model-cost-optimization.md:85-92), historical security PIV reports (.agents/architecture/ADR-039-agent-model-cost-optimization.md:231), and model pin evidence sidecar (.agents/governance/model-pin-evidence.json; .agents/architecture/ADR-039-agent-model-cost-optimization.md:28).

## Outputs — required
Three-tier agent assignment model (.agents/architecture/ADR-039-agent-model-cost-optimization.md:112-127), model tier updates across 8 agent prompt configurations in .claude/agents/ (commits 651205a, d81f237, f101c06; .agents/architecture/ADR-039-agent-model-cost-optimization.md:211-226), 2-week provisional monitoring plan (.agents/architecture/ADR-039-agent-model-cost-optimization.md:227-246), and documented per-agent git rollback procedures (.agents/architecture/ADR-039-agent-model-cost-optimization.md:247-267).

## Invokes — required
- config .agents/governance/model-pin-evidence.json — .agents/architecture/ADR-039-agent-model-cost-optimization.md:28
- agent .claude/agents/memory.md — .agents/architecture/ADR-039-agent-model-cost-optimization.md:214
- agent .claude/agents/skillbook.md — .agents/architecture/ADR-039-agent-model-cost-optimization.md:215
- agent .claude/agents/independent-thinker.md — .agents/architecture/ADR-039-agent-model-cost-optimization.md:216
- agent .claude/agents/roadmap.md — .agents/architecture/ADR-039-agent-model-cost-optimization.md:217
- agent .claude/agents/orchestrator.md — .agents/architecture/ADR-039-agent-model-cost-optimization.md:220
- agent .claude/agents/architect.md — .agents/architecture/ADR-039-agent-model-cost-optimization.md:221
- agent .claude/agents/security.md — .agents/architecture/ADR-039-agent-model-cost-optimization.md:222
- agent .claude/agents/high-level-advisor.md — .agents/architecture/ADR-039-agent-model-cost-optimization.md:225
- doc ADR-002-agent-model-selection-optimization.md — .agents/architecture/ADR-039-agent-model-cost-optimization.md:276

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:204
- doc ADR-039 — .agents/architecture/ADR-002-agent-model-selection-optimization.md:24
- doc ADR-039 — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:316

## Concepts named — required, verbatim
- `provisional window` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:16 — defined here
- `Final Acceptance Criteria` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:25 — defined here
- `model-pin-evidence.json` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:28 — used here
- `rollback` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:33 — used here
- `cloudmcp-manager` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:36 — used here
- `ADR-037` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:37 — used here
- `ADR-002` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:42 — used here
- `deprecated` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:48 — defined here
- `implemented` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:53 — defined here
- `Provisional Rationale` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:64 — defined here
- `Two-week provisional period` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:64 — defined here
- `Opus 4.5` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:81 — used here
- `Sonnet 4.5` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:90 — used here
- `Haiku 4.5` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:91 — used here
- `orchestrator` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:98 — used here
- `architect` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:99 — used here
- `independent-thinker` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:100 — used here
- `roadmap` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:101 — used here
- `high-level-advisor` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:102 — used here
- `memory` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:105 — used here
- `skillbook` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:106 — used here
- `Three-Tier Assignment Model` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:112 — defined here
- `implementer` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:124 — used here
- `security` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:124 — used here
- `analyst` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125 — used here
- `planner` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125 — used here
- `critic` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125 — used here
- `qa` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125 — used here
- `devops` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125 — used here
- `explainer` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125 — used here
- `task-generator` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125 — used here
- `retrospective` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125 — used here
- `pr-comment-responder` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125 — used here
- `spec-generator` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125 — used here
- `context-retrieval` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:126 — used here
- `asymmetric risk` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:138 — defined here
- `adr-review` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:138 — used here
- `OWASP` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:157 — used here
- `threat modeling` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:157 — used here
- `Dynamic Model Selection` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:182 — used here
- `Static assignments` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:184 — defined here
- `Monitoring Plan` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:227 — defined here
- `Security PIV reports` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:231 — used here
- `Per-agent rollback` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:249 — defined here
- `ADR-007` — .agents/architecture/ADR-039-agent-model-cost-optimization.md:280 — used here

## Structure
- ADR-039: Agent Model Cost Optimization — .agents/architecture/ADR-039-agent-model-cost-optimization.md:12
- Status — .agents/architecture/ADR-039-agent-model-cost-optimization.md:14
- How the provisional window actually ended (recorded 2026-08-25) — .agents/architecture/ADR-039-agent-model-cost-optimization.md:19
- Original status (2026-01-03), retained — .agents/architecture/ADR-039-agent-model-cost-optimization.md:58
- Date — .agents/architecture/ADR-039-agent-model-cost-optimization.md:75
- Context — .agents/architecture/ADR-039-agent-model-cost-optimization.md:79
- Claude 4.5 Family Pricing — .agents/architecture/ADR-039-agent-model-cost-optimization.md:85
- Problem — .agents/architecture/ADR-039-agent-model-cost-optimization.md:95
- Decision — .agents/architecture/ADR-039-agent-model-cost-optimization.md:108
- Three-Tier Assignment Model — .agents/architecture/ADR-039-agent-model-cost-optimization.md:112
- Final Distribution — .agents/architecture/ADR-039-agent-model-cost-optimization.md:120
- Changes from ADR-002 — .agents/architecture/ADR-039-agent-model-cost-optimization.md:128
- Unchanged from ADR-002 — .agents/architecture/ADR-039-agent-model-cost-optimization.md:144
- Rationale — .agents/architecture/ADR-039-agent-model-cost-optimization.md:150
- Why Downgrade to Sonnet 4.5? — .agents/architecture/ADR-039-agent-model-cost-optimization.md:152
- Why Keep Implementer on Opus 4.5? — .agents/architecture/ADR-039-agent-model-cost-optimization.md:164
- Why Downgrade to Haiku 4.5? — .agents/architecture/ADR-039-agent-model-cost-optimization.md:168
- Alternatives Considered — .agents/architecture/ADR-039-agent-model-cost-optimization.md:172
- Option 1: Keep ADR-002 Assignments (7 Agents on Opus 4.5) — .agents/architecture/ADR-039-agent-model-cost-optimization.md:174
- Option 2: Downgrade All Agents to Sonnet 4.5 — .agents/architecture/ADR-039-agent-model-cost-optimization.md:178
- Option 3: Dynamic Model Selection Per Task — .agents/architecture/ADR-039-agent-model-cost-optimization.md:182
- Option 4: Keep Strategic Agents on Opus 4.5 — .agents/architecture/ADR-039-agent-model-cost-optimization.md:186
- Consequences — .agents/architecture/ADR-039-agent-model-cost-optimization.md:190
- Positive — .agents/architecture/ADR-039-agent-model-cost-optimization.md:192
- Negative — .agents/architecture/ADR-039-agent-model-cost-optimization.md:200
- Implementation Notes — .agents/architecture/ADR-039-agent-model-cost-optimization.md:209
- Files Changed — .agents/architecture/ADR-039-agent-model-cost-optimization.md:211
- Monitoring Plan (2-Week Provisional Period) — .agents/architecture/ADR-039-agent-model-cost-optimization.md:227
- Reversion Procedures — .agents/architecture/ADR-039-agent-model-cost-optimization.md:247
- Success Criteria — .agents/architecture/ADR-039-agent-model-cost-optimization.md:268
- Related Decisions — .agents/architecture/ADR-039-agent-model-cost-optimization.md:274
- References — .agents/architecture/ADR-039-agent-model-cost-optimization.md:282
- Agent-Specific Fields — .agents/architecture/ADR-039-agent-model-cost-optimization.md:303
- Agent Names — .agents/architecture/ADR-039-agent-model-cost-optimization.md:305
- Overlap Analysis — .agents/architecture/ADR-039-agent-model-cost-optimization.md:309
- Entry Criteria — .agents/architecture/ADR-039-agent-model-cost-optimization.md:313
- Explicit Limitations — .agents/architecture/ADR-039-agent-model-cost-optimization.md:322
- Success Metrics — .agents/architecture/ADR-039-agent-model-cost-optimization.md:329

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-039-agent-model-cost-optimization.md:214 · references agent file .claude/agents/memory.md which does not exist on disk.
- missing-path · .agents/architecture/ADR-039-agent-model-cost-optimization.md:285 · references session log .agents/sessions/2026-01-03-session-128-context-optimization.md with .md extension, but the actual file on disk is .agents/sessions/2026-01-03-session-128-context-optimization.json.
- unfailable-gate · .agents/architecture/ADR-039-agent-model-cost-optimization.md:25 · zero of the four Final Acceptance Criteria were ever measured, .agents/governance/model-pin-evidence.json contained empty pins, and the provisional window closed without recording any validation verdict.
- doc-drift · .agents/architecture/ADR-039-agent-model-cost-optimization.md:32 · the per-agent rollback procedures documented in lines 247-267 were never executed; agent downgrades were reverted incidentally three weeks after window expiration via commit 568af6775 during prompt migration to Memory Router (ADR-037).
- internal-contradiction · .agents/architecture/ADR-039-agent-model-cost-optimization.md:6 · frontmatter declares supersedes as empty list while status notes explain supersession never took effect, yet body line 62 retains Supersedes ADR-002 (pending validation).

## Observations
ADR-039 exemplifies an architectural governance breakdown where changes were shipped prior to empirical analysis, placed in a provisional status with explicit acceptance criteria and rollback commands, but then completely forgotten for seven months until an unrelated PR incidentally wiped out the configuration changes. The subsequent deprecation note added on 2026-08-25 serves as an exemplary retrospective analysis of how governance failed and why supersedes relationships must reflect verified code state.

## Context cost
14028 bytes, ~3,500 tokens. Standalone architecture document, not loaded in standard execution paths.
