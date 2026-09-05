---
package: rjm
path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md
type: agent
bytes: 3527
unit: inv-rjm-21
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md, sha256: ee5cb9a3172bd724519fa305997ae2d7cff5bc6b983194995c5651bb50d21d3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md

## Purpose — required, verbatim
> "Replace the narrative completion gate with a dispatcher." — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:35

## Design intent — required
Replaces subjective narrative completion claims in PR review ("0 unresolved threads" asserted inline by the agent without verification) with an executable, deterministic gate dispatcher that runs verifier commands and evaluates a safe `pass_when` DSL. Without it, agents fall into the "Reporting-Without-Acting Anti-Pattern" where an LLM asserts success state rather than measuring it, allowing PRs with unresolved threads or failing criteria to be falsely approved.

## Phase — required
rjm:Review

## Inputs — required
- Configuration file `pr-review-config.yaml` specifying criterion commands and pass conditions (.agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:37, 51)
- Verifier command execution results with JSON stdout (.agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:37-38)
- CLI options: `--config` (locked to repo root via `validate_safe_path`), `--pull-request`, `--json`, `--evidence-path`, `--trusted-ref`, `--approve-untrusted-config` (.agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:51, 55)
- Standardized verifier status field `fetched_pages_complete` across verifiers (.agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:57)

## Outputs — required
- Per-criterion summary table printed to stdout (.agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:38)
- Deterministic process exit codes: exit 0 if all pass, 1 if any fail, 2 on usage (.agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:39)
- Structured JSON completion gate evidence when requested via `--json` or written to `--evidence-path` (.agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:38)
- Verifier pass/fail decisions driven by tool execution rather than narrative claim (.agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:74)

## Invokes — required
- script .claude/skills/github/scripts/pr/run_completion_gate.py — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:36
- config pr-review-config.yaml — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:37
- doc .agents/retrospective/2026-05-05-pr-1887-iteration-paradox.md — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:27

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:171
- doc ADR-059 — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:225
- doc ADR-059 — .agents/architecture/ADR-065-orchestrator-as-router.md:209

## Concepts named — required, verbatim
- `pass_when DSL` — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:12 — defined here
- `narrative checklist` — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:24 — used here
- `Reporting-Without-Acting Anti-Pattern` — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:29 — used here
- `dispatcher` — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:35 — defined here
- `pass_when` — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:41 — defined here
- `pass_when_python` — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:48 — defined here
- `fail_open` — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:53 — defined here
- `validate_safe_path` — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:55 — defined here
- `fetched_pages_complete` — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:57 — defined here
- `Published Language` — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:57 — defined here
- `PR-branch trust boundary` — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:83 — defined here

## Structure
- # ADR-059: /pr-review Completion Gate Dispatcher and pass_when DSL
- ## Status
- ## Date
- ## Context
- ## Decision
- ## Rationale
- ### Alternatives Considered
- ## Consequences
- ### Positive
- ### Negative
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:37 · References `pr-review-config.yaml` as if located at the repository root (`--config is locked to the repo root`), but in the codebase it resides at `.claude/commands/pr-review-config.yaml`.
- other · .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:83-92 · Documents a known PR-branch trust boundary security exposure where running `/pr-review` after `gh pr checkout` executes configuration and `pass_when_python` code from the untrusted PR branch; mitigation hardening was deferred to a follow-up issue.

## Observations
Replaces LLM self-attestation with deterministic verifier execution to eliminate the "Reporting-Without-Acting Anti-Pattern", where an agent repeatedly asserts that review criteria pass without running tools. Introduces a lightweight expression DSL (`pass_when`) supporting boolean comparisons and field lookups without arbitrary code execution risk, keeping Python evaluation (`pass_when_python`) as an isolated escape hatch.

## Context cost
3527 bytes, ~850 tokens. When combined with the referenced dispatcher script `.claude/skills/github/scripts/pr/run_completion_gate.py` (117157 bytes), the retrospective `.agents/retrospective/2026-05-05-pr-1887-iteration-paradox.md` (21134 bytes), and configuration `.claude/commands/pr-review-config.yaml` (2419 bytes), total referenced context is ~144,237 bytes (~35,000 tokens).
