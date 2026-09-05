---
package: rjm
path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md
type: reference
bytes: 14476
unit: inv-rjm-84
in_scope_via: .claude/skills/ai-agents-failure-archaeology/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-failure-archaeology/references/incidents.md

## Purpose — required, verbatim
> "Each incident below follows the same shape: symptom, root cause, evidence" — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:5

## Design intent — required
Provides deep incident chronicles for eight major recurring repository failures and architectural battles (#2205 Customer Wedge, #2290 Payload Casing, #1887 Iteration Paradox, #1989 Recursive Failure, Session 1187 Trust Incident, PR #908 Scope Explosion, 2025-12-15 Drift Inversion, and PR #1965 Silent Defaults, plus ADR numbering collisions). Documents the exact symptom, root cause, evidence paths, durable changes/fossilized gates, and settlement status for each incident so contributors and autonomous agents do not re-litigate settled decisions, repeat discredited anti-patterns, or bypass established quality controls.

## Phase — required
cross-phase

## Inputs — required
- Retrospectives in `.agents/retrospective/` (e.g. `2026-06-02-pr-2205-customer-wedge-incident.md`, `2026-06-02-issue-2290-copilot-hook-payload-format.md`, `2026-05-05-pr-1887-iteration-paradox.md`, `2026-05-10-pr-1989-recursive-failure.md`, `2026-02-08-session-1187-skip-prepush-abuse.md`, `2026-01-15-pr-908-comprehensive-retrospective.md`, `2025-12-15-drift-detection-disaster.md`, `2025-12-28-issue-474-adr-numbering-conflicts.md`).
- Architectural Decision Records in `.agents/architecture/` (`ADR-071`, `ADR-063`, `ADR-099`).
- Serena memory files in `.serena/memories/` (`decision-copilot-cli-hook-plugin-root-contract.md`, `copilot-hooks-observations.md`, `root-cause-governance-enforcement.md`, `root-cause-late-feedback.md`, `root-cause-scope-creep-tools.md`).
- Canonical failure modes taxonomy in `.agents/governance/FAILURE-MODES.md`.

## Outputs — required
none

## Invokes — required
- script build/scripts/generate_hooks.py — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:16
- doc .agents/retrospective/2026-06-02-pr-2205-customer-wedge-incident.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:25
- doc .serena/memories/decision-copilot-cli-hook-plugin-root-contract.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:49
- script scripts/validation/validate_hook_anchoring.py — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:53
- script scripts/validation/pre_pr.py — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:54
- script tests/build_scripts/test_generate_hooks_runtime_contract.py — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:55
- script tests/e2e/test_cli_hook_e2e.py — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:57
- doc .claude/rules/generated-artifacts.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:58
- doc .agents/governance/FAILURE-MODES.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:60
- doc .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:61
- doc .agents/retrospective/2026-06-02-issue-2290-copilot-hook-payload-format.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:80
- doc .serena/memories/copilot-hooks-observations.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:87
- skill ai-agents-portability-campaign — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:92
- script scripts/validate_session_json.py — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:111
- doc .agents/retrospective/2026-05-05-pr-1887-iteration-paradox.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:118
- doc .claude/rules/canonical-source-mirror.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:128
- doc .agents/retrospective/2026-05-10-pr-1989-recursive-failure.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:141
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:162
- doc .agents/retrospective/2026-02-08-session-1187-skip-prepush-abuse.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:178
- agent merge-resolver — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:185
- skill ai-agents-config-catalog — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:186
- doc .agents/retrospective/2026-01-15-pr-908-comprehensive-retrospective.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:200
- doc .serena/memories/root-cause-governance-enforcement.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:206
- doc root-cause-late-feedback.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:207
- doc root-cause-scope-creep-tools.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:207
- doc .agents/retrospective/2025-12-15-drift-detection-disaster.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:227
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:232
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:236
- doc ADR-063-memory-skill-decomposition.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:263
- doc .agents/retrospective/2025-12-28-issue-474-adr-numbering-conflicts.md — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:266

## Invoked by — required
- skill .claude/skills/ai-agents-failure-archaeology/SKILL.md — .claude/skills/ai-agents-failure-archaeology/SKILL.md:20

## Concepts named — required, verbatim
- `Customer Wedge` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:10 — defined here
- `fail-open shim` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:20 — defined here
- `FM-11` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:60 — used here
- `Payload Casing` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:65 — defined here
- `dual-format shim` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:85 — defined here
- `Iteration Paradox` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:98 — defined here
- `push-guard framework` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:100 — defined here
- `canonical-source-mirror discipline` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:127 — defined here
- `FM-9` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:128 — used here
- `bot-batching protocol` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:129 — defined here
- `Recursive Failure` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:133 — defined here
- `calibration table` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:158 — defined here
- `Trust Incident` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:165 — defined here
- `escape-hatch abuse` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:165 — defined here
- `Drift Inversion` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:217 — defined here
- `source of truth` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:217 — used here
- `Silent Defaults` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:238 — defined here
- `FM-10` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:250 — used here
- `verdict laundering` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:252 — defined here

## Structure
- `# Incident Files: The Major Battles In Depth` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:3
- `## Incident 1: #2205 Customer Wedge (the 33-day launcher failure)` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:10
- `## Incident 2: #2290 Payload Casing (the next day)` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:65
- `## Incident 3: #1887 Iteration Paradox (69 commits to ship a cost-reducer)` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:98
- `## Incident 4: #1989 Recursive Failure (the fix reproduced the disease)` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:133
- `## Incident 5: Session 1187 Trust Incident (escape-hatch abuse)` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:165
- `## Incident 6: PR #908 (the 95-file monster that created pre_pr.py)` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:191
- `## Incident 7: 2025-12-15 Drift Inversion (edited the source of truth)` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:217
- `## Incident 8: PR #1965 Silent Defaults (no neutral default for a missing signal)` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:238
- `## Appendix: The ADR Numbering Collision, Live` — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:258

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Remarkable historical depth: captures concrete lessons from painful multi-commit PRs (#1887, #1989, #908) and operational failures (#2205, #2290, Session 1187).
- "Appendix: The ADR Numbering Collision, Live" highlights that historical documents contain colliding or moved ADR references (e.g. ADR-063 cited for runtime contract verification before becoming ADR-071), requiring content-based resolution rather than reliance on numeric IDs.
- Demonstrates why tooling mitigations for behavioral failures recurse (Incident 4).

## Context cost
14476 bytes for references/incidents.md (~3619 tokens). Loaded on-demand when deep incident context is required.
