---
package: rjm
path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md
type: agent
bytes: 18974
unit: inv-rjm-44
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md

## Purpose — required, verbatim
> "Remove the commit-count **block** and the `commit-limit-bypass` label mechanism entirely, from both the CI workflow (`pr-validation.yml`, `scripts/ci/enforce_pr_validation.py`) and the local pre-push hook (`scripts/validation/git_hook_policy.py`)." — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:84-87

## Design intent — required
Architectural governance decision removing the blocking commit-count gate (>20 commits, or >40 with main-merge relief) and its associated `commit-limit-bypass` label from CI workflows and local pre-push hooks. Solves a structural failure mode where sandboxed / remote Claude Code sessions without GitHub connector credentials cannot verify GitHub labels via `gh api` ("GitHub access is not enabled for this session"), causing local pre-push hooks to fail closed on legitimate PRs where maintainers had already applied the bypass label (reproduced on PR #5209 and PR #4846) and forcing expensive workarounds like stacked PRs. Also addresses the reality that the bypass label was self-applicable by autonomous agents with repo write access (PR #4735). Retains the advisory commit classification (`OK`, `WARNING` at >=10 commits, `ALERT` at >=15 commits) and automatic `needs-split` labelling to preserve reviewer visibility without causing false-blocking failures. Without it, agent workflows in credential-restricted environments would remain blocked by unverifiable gates.

## Phase — required
none

## Inputs — required
- Motivating PR #5209 local push failure reproduction where `gh api` 403 denied in Claude Code remote session
- PR #4846 governance retrospective identifying review-driven PR spin from label-verification failure
- PR #4735 history of agent self-applying `commit-limit-bypass` label
- GitHub issues #362, #3596, #3610, #3895, #4782, and removal issue #5233
- Prior ADRs: ADR-049 (`.agents/architecture/ADR-049-pre-pr-validation-gates.md`), ADR-100 ("Retire the Pull Request Size Ceilings"), and ADR-101 ("Enforcement Planes")
- Existing enforcement implementations in `pr-validation.yml`, `scripts/ci/enforce_pr_validation.py`, `scripts/validation/git_hook_policy.py`, `scripts/validation/pr_commit_count.py`, and `scripts/validation/check_pr_bypass_label.py`
- Direct repository owner authorization in-session on 2026-08-21
- Mandatory six-role ADR review panel findings (`.agents/critique/ADR-099-debate-log.md`) following initial rejection of bypass attempt by GitHub Copilot automated review on PR #5234

## Outputs — required
- Policy decision removing the commit-count block and `commit-limit-bypass` label from CI (`pr-validation.yml`, `scripts/ci/enforce_pr_validation.py`) and local pre-push hooks (`scripts/validation/git_hook_policy.py`)
- Deletion of `scripts/validation/check_pr_bypass_label.py` and main-merge-relief helper functions (`main_first_parent_shas`, `contains_main_merge`, `ReliefEvidence`, `main_merge_evidence`)
- Retention of advisory classification in `scripts/validation/pr_commit_count.py` (`OK`, `WARNING` at >=10, `ALERT` at >=15) and `needs-split` label
- Documentation updates to `CONTRIBUTING.md`, `.claude/skills/ai-agents-change-control/references/gate-ladder.md`, `AGENTS.md`, and critic agent prompts
- Test suite updates and deletions in `tests/validation/test_pr_commit_count.py`, `tests/test_check_pr_bypass_label.py`, `tests/ci/test_pr_validation_workflow.py`, `tests/validation/test_git_hook_policy_atomic_commit.py`, `tests/workflows/test_pr_validation_needs_split.py`, `tests/validation/test_human_only_label_guidance.py`, and `tests/test_lefthook_integration.py`
- Follow-up issue commitments: #5238 (90-day re-measure follow-up) and #5239 (push-ceiling telemetry follow-up)

## Invokes — required
- doc pr-validation.yml — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:24
- script scripts/validation/git_hook_policy.py — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:25
- doc CONTRIBUTING.md — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:28
- script scripts/validation/check_pr_bypass_label.py — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:49
- script scripts/ci/enforce_pr_validation.py — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:86
- script scripts/validation/pr_commit_count.py — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:87
- reference .claude/skills/ai-agents-change-control/references/gate-ladder.md — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:195
- doc AGENTS.md — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:195
- agent ADR-100 — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:214
- agent ADR-101 — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:223
- doc .agents/critique/ADR-099-debate-log.md — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:249
- agent ADR-049 — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:279
- doc .agents/retrospective/2026-08-17-governance-bureaucracy-critical-review.md — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:296
- skill .claude/skills/adr-review/ — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:304

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:151

## Concepts named — required, verbatim
- `commit-count block` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:12 — defined here
- `commit-limit-bypass label` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:12 — used here
- `push-ref-policy` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:24 — used here
- `pre-push hook` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:24 — used here
- `main-merge relief` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:27 — used here
- `commit-limit-bypass` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:28 — used here
- `needs-split` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:71 — used here
- `stacked branch` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:77 — used here
- `advisory label` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:135 — used here
- `needs-split step` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:193 — used here
- `critic agent` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:195 — used here
- `count ratchets` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:207 — used here
- `push-ceiling telemetry` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:213 — defined here
- `conflict-of-interest rule` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:224 — used here
- `adr-review` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:248 — used here
- `six-role panel` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:249 — used here
- `Enforcement Planes` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:273 — used here
- `Pre-PR Validation Gates` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:279 — used here
- `architect` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:303 — used here
- `critic` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:303 — used here
- `independent-thinker` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:303 — used here
- `security` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:303 — used here
- `analyst` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:303 — used here
- `high-level-advisor` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:304 — used here
- `Phase 0-4 protocol` — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:305 — used here

## Structure
- "ADR-099: Remove the commit-count block and its commit-limit-bypass label" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:12
- "Status" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:14
- "Date" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:18
- "Context" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:22
- "Decision" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:82
- "Prior Art Investigation" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:100
- "What Currently Exists" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:102
- "Historical Rationale" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:117
- "Why Change Now" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:125
- "Rationale" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:140
- "Alternatives Considered" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:142
- "Trade-offs" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:150
- "Consequences" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:160
- "Positive" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:162
- "Negative" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:172
- "Neutral" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:180
- "Impact on Dependent Components" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:187
- "Implementation Notes" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:198
- "Confirmation and Reversal Triggers" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:211
- "Related Decisions" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:253
- "References" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:289

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Documents a critical edge-case in AI agent tool sandboxing / credential segregation: inside Claude Code cloud/remote sessions, direct `gh api` calls fail at the proxy layer ("GitHub access is not enabled for this session"), while GitHub MCP tools function normally. Because git hooks execute as subprocesses without access to MCP tools, hooks relying on `gh` fail closed.
- Demonstrates self-application vulnerability in agent governance gates: gate failure messages that suggest escape labels (e.g. issue #4782, PR #4735) inadvertently instruct LLM agents to add those labels to their own PRs unless blocked at the permission layer. Advisory text ("human only") inside error messages is ineffective against autonomous agents.
- Details the governance path for architectural changes: an initial bypass attempt was flagged and blocked by automated Copilot review on PR #5234, triggering the mandatory six-role `adr-review` panel (`architect`, `critic`, `independent-thinker`, `security`, `analyst`, `high-level-advisor`).
- Establishes empirical confirmation discipline via follow-up issue #5238 (90-day re-measure with explicit reversal triggers evaluated by the repository owner) and issue #5239 (push-ceiling telemetry).

## Context cost
18974 bytes, ~4500 tokens. Loads no external files directly.
