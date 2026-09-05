---
package: rjm
path: .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md
type: agent
bytes: 8755
unit: inv-rjm-40
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md, sha256: 14bfbb5ed42668e4bbe5d09276b995005b5f478bcf416643e94de7c5a041ce40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md

## Purpose — required, verbatim
> "A local run clears a red remote check only when it is the same checker" — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:12

## Design intent — required
Governance decision requiring that agents and contributors verify red remote CI checks locally using demonstrably equivalent tools, rulesets, flags, and versions, or explicitly report the failure as unreproduced. Prevents dangerous false-negative claims where a locally passed scan using default or mismatched configurations (such as local `semgrep --config=auto` vs. Semgrep Cloud Platform server-side rules) leads an agent to advise ignoring live security findings. Balances instruction-budget constraints by incorporating a single always-on MUST into `.claude/rules/universal.md` while delegating tool-specific reproduction details and Semgrep operational facts to `.agents/governance/GOTCHAS.md`.

## Phase — required
cross-phase

## Inputs — required
- "On PR #4701, the customer-facing fix for issue #4672, the `semgrep-cloud-platform/scan` check was red." — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:24-25
- "The local invocation was `semgrep --config=auto`. The CI check is the Semgrep Cloud App running a server-side rule set" — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:32-33
- "`SEMGREP_APP_TOKEN=<token> semgrep ci` is an exact reproduction." — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:100

## Outputs — required
- "Add one MUST to `.claude/rules/universal.md`, which is always-on:" — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:55
- "The repository-specific semgrep facts go to `.agents/governance/GOTCHAS.md`" — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:65
- "Always-on corpus grows by 472 bytes, from 71,033 to 71,505, roughly 0.6 percent." — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:133-134

## Invokes — required
- doc .claude/rules/universal.md — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:55
- doc .agents/governance/GOTCHAS.md — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:65
- doc .claude/rules/testing.md — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:155
- doc .claude/rules/governance.md — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:170
- doc .claude/rules/knowledge-persistence.md — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:175
- script build/scripts/generate_rules.py — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:176

## Invoked by — required
- doc ADR-093 — .agents/architecture/README.md:185
- agent ADR-093 — .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md:143
- agent ADR-093 — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:23
- agent ADR-093 — .agents/architecture/ADR-055-github-actions-runner-selection.md:18
- agent ADR-093 — .agents/architecture/ADR-101-enforcement-planes.md:420

Concepts named:
- `semgrep-cloud-platform/scan` — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:25 — used here
- `Semgrep App` — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:99 — used here
- `security-suppressions-staged` — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:69 — used here
- `SEMGREP_APP_TOKEN` — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:100 — used here
- `Always-on corpus` — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:133 — defined here
- `IFScale` — .agents/architecture/ADR-093-verify-red-checks-with-the-same-checker.md:134 — used here

## Structure
- # ADR-093: A local run clears a red remote check only when it is the same checker
- ## Status
- ## Date
- ## Context
- ## Decision
- ## Alternatives Considered
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Prior Art Investigation
- ### What Currently Exists
- ### Why It Is Not Being Removed
- ## Compliance
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Documents a severe false-negative incident where running a local tool (`semgrep --config=auto`) produced zero findings with exit code 0, matching the outward appearance of CI while checking a completely different ruleset, leading to published guidance telling humans to ignore live security vulnerabilities.
- Adopts strict constraints on adding rules to always-on instruction context (`.claude/rules/universal.md`), citing empirical research on degradation (IFScale, arXiv:2507.11538) to cut two proposed heuristic rules and constrain always-on growth to 472 bytes (0.6%).
- Captures the repository practice where governance ADRs can carry `implemented: true` while remaining `status: proposed` because formal acceptance of governance policy is reserved as a maintainer act.
- Directs tool-specific operational details (such as `SEMGREP_APP_TOKEN=<token> semgrep ci`) to `.agents/governance/GOTCHAS.md` to prevent context bloat in always-on rules.

## Context cost
8755 bytes, approximately 2200 tokens.
