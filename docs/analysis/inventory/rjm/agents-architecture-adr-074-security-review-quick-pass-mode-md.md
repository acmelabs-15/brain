---
package: rjm
path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md
type: agent
bytes: 20926
unit: inv-rjm-29
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md, sha256: c2b4a02348c862ed3899605ae5d2efbda035194ef3e8e2c32062b67584b82ba4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-074-security-review-quick-pass-mode.md

## Purpose — required, verbatim
> "Add a bounded quick-pass mode to security review, governed by a diff-scope classifier, a caller-enforced deadline, and an extended verdict taxonomy." — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:66-67

## Design intent — required
Architecture decision record defining a bounded, low-latency quick-pass mode for the `security-review` subagent and skill to prevent long-running, unbounded threat-model analyses from stalling the inner loop of PR autofix automation (which caused timeouts exceeding 230 seconds on small utility hook changes). It introduces a four-tier pure function diff-scope classifier (`small`, `medium`, `large`, `extra-large`), a caller-enforced wall-clock deadline (`SECURITY_REVIEW_BUDGET_MS`), a 30-second progress reporting heartbeat to distinguish active analysis from wedged execution, and an extended verdict taxonomy introducing `QUICK_PASS`, `NEEDS_DEEP_REVIEW`, and `budget_exceeded`. The record preserves defense-in-depth by maintaining fail-closed semantics: quick-pass only clears the orchestrator PIV gate for small diffs with zero matched high-confidence vulnerability patterns (CWE-22, CWE-77/78, CWE-798, ASI01-ASI10), routing all pattern matches, ambiguous scopes, missing inputs, and budget expirations directly to the full threat-model review. Without this design, automated PR remediation pipelines face severe latency bottlenecks or silent execution freezes.

## Phase — required
none

## Inputs — required
- Issue #2617 (labels `bug`, `enhancement`, `agent-security`, `area-workflows`, `priority:P1`, `automation`) — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:18-19
- Timing and timeout telemetry from PR #2611 (120s timeout, 231s elapsed during 4-file hook review) — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:40-44
- Threat model reasoning protocol and verdict rules in `templates/agents/security.shared.md` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:50
- Inline skill projection in `.claude/skills/security-review/SKILL.md` (v0.1.0) — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:50
- Six-agent critique debate log at `.agents/critique/ADR-074-debate-log.md` (dated 2026-07-19) — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:28
- Disallowed in-process watchdog patterns from ADR-068 — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:56

## Outputs — required
- Diff-scope classification specification (`classify_diff_scope`) mapping changes into 4 tiers (`small`, `medium`, `large`, `extra-large`) — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:76
- Caller-enforced execution deadline contract via `--budget-ms` and `SECURITY_REVIEW_BUDGET_MS` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:91
- Extended security review verdict taxonomy (`QUICK_PASS`, `NEEDS_DEEP_REVIEW`, `budget_exceeded`) — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:99, 114-115
- Orchestrator PIV gate contract extension consuming `QUICK_PASS` for small diffs — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:119
- Progress checkpoint reporting protocol emitting structured JSON to stderr at 30-second intervals — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:121

## Invokes — required
- file .agents/critique/ADR-074-debate-log.md — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:28
- file templates/agents/security.shared.md — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:50
- doc .claude/skills/security-review/SKILL.md — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:50
- agent ADR-068 — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:56
- agent ADR-066 — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:223
- agent ADR-071 — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:223
- agent ADR-058 — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:224
- agent ADR-059 — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:225
- agent ADR-002 — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:226
- agent ADR-073 — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:227
- doc .agents/governance/SECURITY-REVIEW-PROTOCOL.md — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:201
- doc AGENTS.md — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:144
- doc .agents/governance/TESTING-RIGOR.md — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:217
- doc .agents/governance/SECURITY-SEVERITY-CRITERIA.md — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:237
- doc .claude/rules/security.md — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:238
- doc .claude/rules/canonical-source-mirror.md — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:239

## Invoked by — required
- doc README.md — .agents/architecture/README.md:138

## Concepts named — required, verbatim
- `Security-Review Quick-Pass Mode` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:12 — defined here
- `diff-scope classifier` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:66-67 — defined here
- `classify_diff_scope` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:76 — defined here
- `threat-model protocol` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:50 — used here
- `PIV verdict gate` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:54 — used here
- `budget_exceeded` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:99 — defined here
- `QUICK_PASS` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:114 — defined here
- `NEEDS_DEEP_REVIEW` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:115 — defined here
- `CWE-22` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:106 — used here
- `CWE-77` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:106 — used here
- `CWE-78` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:106 — used here
- `CWE-798` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:106 — used here
- `ASI01` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:106 — used here
- `progress reporting` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:121 — defined here
- `canonical-source-mirror rule` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:127 — used here

## Structure
- # ADR-074: Bounded Security-Review Quick-Pass Mode
- ## Status
- ## Date
- ## Context
- ## Decision
- ### 1. Diff-scope classifier
- ### 2. Caller-enforced deadline
- ### 3. Quick-pass mode and extended verdict taxonomy
- ### 4. Progress reporting
- ### Scope discipline
- ## Prior Art Investigation (Required when changing existing systems)
- ### What Currently Exists
- ### Historical Rationale
- ### Why Change Now
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Impact on Dependent Components
- ## Implementation Notes
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides an operational pattern for managing agent execution timeouts in continuous integration: combining pure-function diff classification, caller-enforced wall-clock budgets, and 30-second progress heartbeats prevents silent automation stalls without weakening security thresholds.
- Demonstrates fail-closed safety architecture: `budget_exceeded`, `NEEDS_DEEP_REVIEW`, and missing input artifacts strictly do not clear the orchestrator's PIV gate, ensuring quick-pass cannot inadvertently bypass security review.

## Context cost
20926 bytes (~4800 tokens). Architecture decision record specifying security-review quick-pass mode and verdict taxonomy.
