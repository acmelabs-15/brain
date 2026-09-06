---
package: rjm
path: .claude/skills/ai-agents-validation-and-qa/SKILL.md
type: skill
bytes: 16960
unit: inv-rjm-87
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-validation-and-qa/SKILL.md

## Purpose — required, verbatim
> "This repo runs verification-based governance: a claim is true when a gate, test, or command output says it is, not when an agent asserts it. This skill defines the evidence bar for code changes, where tests live and how they are collected, the anti-pattern canon (each entry paid for by a real incident), and the QA gate semantics at session end." — .claude/skills/ai-agents-validation-and-qa/SKILL.md:11

## Design intent — required
Establishes an empirical, verification-based evidence standard for all repository contributions, replacing subjective developer assertions with reproducible gate, test, and command outputs. It codifies hard-learned lessons from past incidents (such as customer-wedging regressions and untested error paths) into explicit rules: positive/negative/edge testing, 100% block coverage on changed code, negative-control runtime contracts for generated assets, and strict session-end QA skip allowlists. Without this skill, contributors and autonomous agents would default to happy-path-only coverage theater and uncalibrated guards, risking silent regressions and broken releases.

## Phase — required
rjm:test

## Inputs — required
- Code changes and proposed pull requests
- Unit and integration test suites
- `.agents/governance/TESTING-RIGOR.md`
- `.agents/governance/TESTING-ANTI-PATTERNS.md`
- `pyproject.toml [tool.pytest.ini_options]` (testpaths and markers)
- `.claude/rules/generated-artifacts.md`
- `.agents/architecture/ADR-034-investigation-session-qa-exemption.md`
- `scripts/modules/investigation_allowlist.py`
- Trigger queries: `what counts as evidence`, `how do I test this change`, `run skill tests`, `can I skip QA`

## Outputs — required
- Pos+neg+edge unit and integration tests under `tests/` or `tests/skills/NAME/`
- Block coverage proofs (`uv run pytest ... --cov=... --cov-branch --cov-fail-under=100`)
- Runtime-contract test suites with negative controls for generated artifacts
- QA evidence entries in PRs, transcripts, or session logs (e.g. valid report path or allowlisted `SKIPPED: docs-only` / `SKIPPED: investigation-only`)

## Invokes — required
- reference .agents/governance/TESTING-RIGOR.md — .claude/skills/ai-agents-validation-and-qa/SKILL.md:36
- reference .agents/governance/TESTING-ANTI-PATTERNS.md — .claude/skills/ai-agents-validation-and-qa/SKILL.md:53
- config pyproject.toml — .claude/skills/ai-agents-validation-and-qa/SKILL.md:57
- file tests/test_skill_bundle_suites_run.py — .claude/skills/ai-agents-validation-and-qa/SKILL.md:67
- skill ai-agents-build-and-env — .claude/skills/ai-agents-validation-and-qa/SKILL.md:80
- reference .agents/governance/test-location-standards.md — .claude/skills/ai-agents-validation-and-qa/SKILL.md:82
- file conftest.py — .claude/skills/ai-agents-validation-and-qa/SKILL.md:88
- file tests/conftest.py — .claude/skills/ai-agents-validation-and-qa/SKILL.md:88
- reference .agents/governance/FAILURE-MODES.md — .claude/skills/ai-agents-validation-and-qa/SKILL.md:179
- file .claude/rules/generated-artifacts.md — .claude/skills/ai-agents-validation-and-qa/SKILL.md:90
- file tests/build_scripts/test_generate_hooks_runtime_contract.py — .claude/skills/ai-agents-validation-and-qa/SKILL.md:90
- file .github/workflows/pytest.yml — .claude/skills/ai-agents-validation-and-qa/SKILL.md:106
- reference .agents/architecture/ADR-034-investigation-session-qa-exemption.md — .claude/skills/ai-agents-validation-and-qa/SKILL.md:119
- script scripts/modules/investigation_allowlist.py — .claude/skills/ai-agents-validation-and-qa/SKILL.md:124
- script tests/hook_test_helpers.py — .claude/skills/ai-agents-validation-and-qa/SKILL.md:142
- script scripts/validation/pre_pr.py — .claude/skills/ai-agents-validation-and-qa/SKILL.md:147
- skill ai-agents-change-control — .claude/skills/ai-agents-validation-and-qa/SKILL.md:147
- file .claude/rules/claude-agents.md — .claude/skills/ai-agents-validation-and-qa/SKILL.md:179
- script scripts/validate_session_json.py — .claude/skills/ai-agents-validation-and-qa/SKILL.md:179
- reference .agents/retrospective/2026-05-10-pr-1989-recursive-failure.md — .claude/skills/ai-agents-validation-and-qa/SKILL.md:179
- reference .agents/retrospective/2026-06-02-pr-2205-customer-wedge-incident.md — .claude/skills/ai-agents-validation-and-qa/SKILL.md:179

## Invoked by — required
- skill ai-agents-change-control — .claude/skills/ai-agents-change-control/SKILL.md:34
- skill ai-agents-architecture-contract — .claude/skills/ai-agents-architecture-contract/SKILL.md:144
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:29
- skill ai-agents-external-claims — .claude/skills/ai-agents-external-claims/SKILL.md:15
- skill ai-agents-build-and-env — .claude/skills/ai-agents-build-and-env/SKILL.md:11
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:34
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:46
- file test_structure_ai_agents_validation_and_qa.py — .claude/skills/ai-agents-validation-and-qa/tests/test_structure_ai_agents_validation_and_qa.py:21

## Concepts named — required, verbatim
- `verification-based governance` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:11 — defined here
- `evidence bar` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:11 — defined here
- `TESTING-RIGOR` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:36 — used here
- `Positive test` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:40 — defined here
- `Negative test` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:41 — defined here
- `Edge tests` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:42 — defined here
- `CLI contract` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:46 — defined here
- `Coverage proof` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:47 — defined here
- `coverage theater` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:53 — used here
- `safe_push_transport` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:80 — used here
- `smoke` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:80 — used here
- `windows_path` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:80 — used here
- `Runtime-contract tests` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:90 — defined here
- `FM-11` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:90 — used here
- `Negative controls` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:92 — defined here
- `Threshold detectors` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:94 — defined here
- `File-set sensitivity` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:110 — defined here
- `Coverage target form` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:111 — defined here
- `FM-10` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:113 — used here
- `SKIPPED: docs-only` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:123 — defined here
- `SKIPPED: investigation-only` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:124 — defined here
- `ADR-035` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:143 — used here
- `Self-referential test` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:155 — defined here
- `Happy-path-only test suite` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:156 — defined here
- `Silent default for missing signal` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:160 — defined here

## Structure
- `# ai-agents Validation and QA` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:8
- `## Triggers` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:15
- `## Scope Boundaries` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:22
- `## Process` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:32
- `### Phase 1: Internalize the evidence bar` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:34
- `### Phase 2: Know where tests live and how they are collected` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:55
- `### Phase 3: Write tests that count` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:84
- `### Phase 4: Prove coverage` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:98
- `### Phase 5: QA evidence semantics` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:115
- `### Phase 6: Add tests for a new skill, hook, or script` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:138
- `## Anti-Patterns` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:149
- `## Verification` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:165
- `## Provenance and Maintenance` — .claude/skills/ai-agents-validation-and-qa/SKILL.md:177

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .claude/skills/ai-agents-validation-and-qa/SKILL.md:82 · References .agents/governance/test-location-standards.md which describes a stale Pester *.Tests.ps1 layout superseded by ADR-042.
- internal-contradiction · .claude/skills/ai-agents-validation-and-qa/SKILL.md:140 · Instructs contributors not to place new tests in .claude/skills/NAME/, yet the skill itself retains colocated tests at .claude/skills/ai-agents-validation-and-qa/tests/test_structure_ai_agents_validation_and_qa.py.

## Observations
- Rigorously grounds testing requirements in concrete historical failure modes (e.g. PR #1756, PR #1963, PR #1965, PR #1989, PR #2078, PR #2205, issue #2316), providing high-fidelity architectural context.
- Delineates distinct coverage thresholds across security-critical (100%), business logic (80%), and docs/glue (60-70%) tiers.
- Formulates strict testing rules for AI/automated tooling, emphasizing negative controls to avoid self-referential confirmation bias.
- Contains self-auditing shell one-liners in the Provenance and Maintenance section for verifying volatile file paths and test configurations.

## Context cost
16,960 bytes, approximately 4,240 tokens.
