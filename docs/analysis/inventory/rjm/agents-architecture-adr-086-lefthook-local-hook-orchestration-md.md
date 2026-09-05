---
package: rjm
path: .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md
type: agent
bytes: 21060
unit: inv-rjm-36
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md, sha256: 34e6e2e666008601a5b15735e3525673e9512afc483fd0fed0094dbfdde50000}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md

## Purpose — required, verbatim
> "Use Lefthook 2.1.10 as the only local Git hook orchestrator." — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:61

## Design intent — required
Replaces custom repository-owned Git hook installation, activation machinery, and shell payload wrappers (`.githooks/` and `scripts/hooks/`) with Lefthook 2.1.10 as a declarative, pinned third-party local hook scheduler executed via frozen `uv run`. By delegating generic scheduling, group ordering, changed-file filtering, active-index management, native same-file formatting auto-staging (`stage_fixed`), standard input forwarding, and outer job timeouts to Lefthook, the repository eliminates brittle activation state (such as worktree and virtual environment stale hook paths) while retaining repository-specific policy validation and generated-file staging in Python (`scripts/validation/git_hook_policy.py`). Without this design, the repository would incur ongoing maintenance overhead for custom platform-specific shell wrappers and fragile hook activation scripts that duplicate commodity hook-manager functionality.

## Phase — required
cross-phase

## Inputs — required
- "`lefthook.yml` is the source of truth for `commit-msg`, `pre-commit`, and `pre-push` scheduling." — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:63-64
- "`pyproject.toml` pins `lefthook==2.1.10` in both development dependency tables. `uv.lock` freezes the resolved artifact." — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:68-69
- "Lefthook's native staged filters and `{staged_files}` use Git's active index, including temporary or alternate indexes supplied through `GIT_INDEX_FILE`." — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:92-93
- "`uv.lock` owns the resolved artifact. `uv sync --frozen --extra dev` restores that locked environment without dependency resolution." — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:223-225

## Outputs — required
- "uv run --frozen lefthook install --reset-hooks-path" — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:77
- "native `stage_fixed` for same-file formatter changes, standard input forwarding, skip conditions, and outer job timeouts." — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:65-67
- "The `scripts/validation/git_hook_policy.py stage-generated` command owns the generated-output allowlist, path safety checks, and `git add` for outputs whose paths differ from the staged inputs." — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:78-81
- "Exit code 3 and captured diagnostics are guaranteed only when the inner timeout fires first." — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:89-90

## Invokes — required
- config lefthook.yml — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:63
- file pyproject.toml — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:68
- file uv.lock — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:69
- script scripts/validation/git_hook_policy.py — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:79
- file .github/actions/setup-code-env/action.yml — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:189
- script tests/test_lefthook_integration.py — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:204
- script scripts/validation/checks_plugin.py — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:205
- doc CONTRIBUTING.md — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:206
- doc ADR-004 — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:6
- doc ADR-014 — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:208
- doc ADR-016 — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:209
- doc ADR-054 — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:212
- doc ADR-084 — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:215
- script build/scripts/build_all.py — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:299
- script scripts/validation/pre_pr.py — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:300
- doc ADR-006-thin-workflows-testable-modules.md — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:382
- doc ADR-042-python-migration-strategy.md — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:383

## Invoked by — required
- doc ADR-086 — .agents/architecture/README.md:146
- agent ADR-086 — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:7
- agent ADR-086 — .agents/architecture/ADR-054-local-security-scanning.md:188
- agent ADR-086 — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:639
- agent ADR-086 — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:429
- agent ADR-086 — .agents/architecture/ADR-101-enforcement-planes.md:419
- agent ADR-086 — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:36
- agent ADR-086 — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:234
- script ADR-086 — scripts/validation/git_hook_policy.py:561

## Concepts named — required, verbatim
`Lefthook` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:12 — defined here
`Local Git Hook Orchestration` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:12 — defined here
`adr-review` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:17 — used here
`pre-push` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:27 — used here
`core.hooksPath` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:37 — used here
`protected CI` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:57 — used here
`commit-msg` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:63 — used here
`pre-commit` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:63 — used here
`stage_fixed` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:66 — defined here
`min_version` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:70 — used here
`stage-generated` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:79 — defined here
`inner timeout` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:88 — defined here
`outer job timeout` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:89 — defined here
`Timeout Hierarchy` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:90 — defined here
`active index` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:92 — defined here
`GIT_INDEX_FILE` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:93 — used here
`LEFTHOOK_BIN` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:95 — used here
`LEFTHOOK=0` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:95 — used here
`--no-verify` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:95 — used here
`Rollback Plan` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:325 — defined here
`Review Triggers` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:354 — defined here
`delta-review` — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:377 — used here

## Structure
# ADR-086: Lefthook for Local Git Hook Orchestration — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:12
## Status — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:14
## Date — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:20
## Context — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:24
## Decision Drivers — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:48
## Decision — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:59
## Prior Art Investigation — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:103
### What Existed Before PR #3259 — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:105
### Historical Rationale — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:116
### Why Change Now — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:122
## Rationale — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:132
### Alternatives Considered — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:134
### Trade-offs — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:145
## Consequences — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:155
### Positive — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:157
### Negative — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:171
### Neutral — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:180
## Impact on Dependent Components — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:194
## Implementation Notes — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:218
### Installation and Version Ownership — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:220
### Staging Ownership — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:233
### Active Index Semantics — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:245
### Timeout Hierarchy — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:255
## Confirmation — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:284
## Rollback Plan — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:325
## Review Triggers — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:354
## Update History — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:369
## Related Decisions — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:379
## References — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:387

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:216 · Component table references `CITATION-SCHEMA.md` but the file does not exist on disk.

## Observations
- Defines a two-tier timeout architecture: Lefthook enforces outer job boundaries (e.g. 120s default, 900s Semgrep/mypy, 1800s full tests), while Python child process invocations (`git_hook_policy.py`) enforce inner timeouts (e.g. 90s default, 840s Semgrep/mypy, 1740s full tests) with a minimum 30-second headroom requirement verified by `tests/test_lefthook_integration.py`.
- Establishes a clear division of responsibility between commodity hook management (Lefthook) and repository-specific policy enforcement (Python `scripts/validation/git_hook_policy.py`).
- Resolves recurring repository failure modes including stale hook activation in worktrees and virtual environments, reliance on manual `core.hooksPath` configuration, and platform-specific shell wrapper bugs.
- Documents supply-chain risk in unpinned npm dependency `npx markdownlint-cli2` (lines 188-192), tracked by issue #3279.
- Specifies an atomic rollback plan (lines 325-353) prohibiting partial rollbacks or manual reconstruction of deleted framework paths.

## Context cost
21060 bytes, approximately 5200 tokens.
