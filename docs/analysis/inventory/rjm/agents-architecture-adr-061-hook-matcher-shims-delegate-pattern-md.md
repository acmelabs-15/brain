---
package: rjm
path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md
type: agent
bytes: 20444
unit: inv-rjm-22
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md

## Purpose — required, verbatim
> "Amend REQ-003-007 step 5 so the generator emits **delegate shims**, not inline-body shims." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:103

## Design intent — required
Architecture decision record that proposed replacing self-contained inline-body hook shims in `src/copilot-cli/hooks/` with thin delegate shims referencing a shared canonical body (`_impl/invoke_<hook>.py`) and shared runtime module (`_impl/_shim_runtime.py`). This was designed to eliminate divergence and code duplication across multiple matcher registrations for the same hook (demonstrated by PR 1763's diverging shims for `invoke_false_completion_gate`). However, following a 6-agent debate, the proposal was rejected and withdrawn due to premature abstraction and speculative generality (only 3 hooks had multi-matchers on main) in favor of Alternative B (deterministic full-tree regeneration and a CI diff gate). It remains preserved as institutional knowledge and defines explicit metric thresholds (Issue #2112) for revisiting the structural refactor.

## Phase — required
none

## Inputs — required
- `(hook_event, matcher_pattern)` pairs in `.claude/settings.json` (.agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:67)
- REQ-003-007 step 5 specification mandate (`.agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:281-305`) (.agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:67, 198)
- Observed multi-matcher divergence evidence from PR 1763 (`feature/1703-lifecycle-hook-infrastructure`) (.agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:71-82, 251)
- 6-agent debate positions and verdict from `.agents/critique/ADR-061-debate-log.md` (.agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:36, 44)

## Outputs — required
- Rejection and withdrawal decision adopting Alternative B (deterministic generation + CI diff gate) instead of delegate shims (.agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:16-17, 39, 46-49)
- Follow-up tracking issue (#2112) defining review thresholds (multi-matcher count > 8 or 3+ gate failures/quarter) (.agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:44, 260)
- Proposed (unimplemented) delegate shim specification: directory structure in `src/copilot-cli/hooks/<event>/_impl/` and thin shims `invoke_<hook>__<MatcherTokens>_<hash>.py` (.agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:103-124)

## Invokes — required
- doc .claude/rules/philosophy-of-software-design.md — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:41
- doc .agents/critique/ADR-061-debate-log.md — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:44
- doc .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:67
- config .claude/settings.json — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:67
- script build/scripts/generate_hooks.py — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:67
- doc .claude/rules/pragmatic-programmer.md — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:97
- doc .claude/rules/canonical-source-mirror.md — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:98
- doc .agents/archive/plans/req-003-multi-tool-artifact-build.md — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:133
- script tests/build_scripts/test_generate_hooks.py — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:178
- script build/scripts/build_all.py — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:203
- config pytest.ini — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:205
- script build/scripts/validate_install_parity.py — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:206
- script scripts/validation/pre_pr.py — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:229
- doc ADR-035-exit-code-standardization.md — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:237
- doc ADR-042-python-migration-strategy.md — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:238
- doc ADR-006-thin-workflows-testable-modules.md — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:239
- doc ADR-053-adr-exception-criteria.md — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:240
- doc ADR-088 — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:264
- reference .claude/skills/software-engineering-library/references/philosophy-of-software-design.md — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:266

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:218

## Concepts named — required, verbatim
- `ADR-061` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:12 — defined here
- `Hook Matcher Shims` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:12 — defined here
- `ADR-073` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:21 — used here
- `ADR-095` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:26 — used here
- `6-agent debate` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:36 — used here
- `multi-matcher shims` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:38 — used here
- `Alternative B` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:39 — defined here
- `generate_hooks.py` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:39 — used here
- `Delegate-shim` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:40 — defined here
- `Premature abstraction` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:41 — used here
- `speculative-generality smell` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:41 — used here
- `ADR-061-debate-log.md` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:44 — used here
- `REQ-003-007` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:67 — used here
- `matcher_pattern` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:67 — used here
- `inject_shim` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:67 — used here
- `invoke_false_completion_gate` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:73 — used here
- `invoke_branch_protection_guard` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:88 — used here
- `invoke_session_log_guard` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:89 — used here
- `DRY at the knowledge level` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:97 — used here
- `canonical-source-mirror.md` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:98 — used here
- `deep modules` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:99 — used here
- `delegate shims` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:103 — defined here
- `inline-body shims` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:103 — used here
- `Idempotency sentinels` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:107 — defined here
- `_SHIM_MAX_STDIN_BYTES` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:109 — defined here
- `shim_dispatch` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:110 — defined here
- `_shim_runtime.py` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:119 — defined here
- `REQ-003 M5-T2` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:133 — used here
- `One-body-many-matchers` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:139 — used here
- `Install-parity` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:145 — used here
- `Crash policy` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:186 — defined here
- `validate_install_parity.py` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:206 — used here
- `ADR-035` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:237 — used here
- `ADR-042` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:238 — used here
- `ADR-006` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:239 — used here
- `ADR-053` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:240 — used here
- `ADR-088` — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:264 — used here

## Structure
- # ADR-061: Hook Matcher Shims Delegate to Canonical Body
- ## Status
- ## Date
- ## Withdrawal Rationale
- ## Original Status (superseded)
- ## Original Date
- ## Context
- ### Drift evidence (PR 1763, observed 2026-05-26)
- ### Cost evidence (current main, multi-matcher hooks)
- ### Rule violations
- ## Decision
- ## Prior Art Investigation
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
- ## Reversibility
- ## Impact on Dependent Components
- ## Implementation Phasing
- ## Confirmation Mechanism
- ## Security Considerations
- ## Related Decisions
- ## References
- ## Amendment 2026-07-27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:41 · `.claude/rules/philosophy-of-software-design.md` does not exist (moved to `.claude/skills/software-engineering-library/references/philosophy-of-software-design.md` per Amendment 2026-07-27).
- missing-path · .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:205 · References `pytest.ini` which does not exist in the repository (pytest configuration is managed in `pyproject.toml`).
- doc-drift · .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:237-240 · References ADR markdown files (`ADR-035-exit-code-standardization.md`, etc.) without the `.agents/architecture/` directory path prefix.
- internal-contradiction · .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:4,32 · Frontmatter date `2026-08-25` (reflecting status prose reconciliation) differs from the original drafted/withdrawn date `2026-05-27` in the Date section.

## Observations
A notable architectural case study demonstrating the active governance role of multi-agent debate (architect, critic, independent-thinker, security, analyst, high-level-advisor). The proposal was withdrawn prior to acceptance because the debate identified that the problem (drift in multi-matcher shims) was an artifact of unmerged PR branch development rather than an issue on `main`, and that a 2-hour procedural fix (deterministic regeneration and CI diff check) had much higher ROI than a multi-day architectural refactor introducing runtime import complexity. Preserved with explicit trigger criteria for re-evaluation in Issue #2112.

## Context cost
20444 bytes, ~5100 tokens. When factoring in referenced governance, generator, and test files (`build/scripts/generate_hooks.py`, `build/scripts/validate_install_parity.py`, `.agents/critique/ADR-061-debate-log.md`, and `.agents/specs/requirements/REQ-003-multi-tool-artifact-build.md`), total referenced context is ~110190 bytes (~27550 tokens).
