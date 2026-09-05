---
package: addy
path: skills/ci-cd-and-automation/SKILL.md
type: skill
bytes: 11332
unit: inv-addy-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/ci-cd-and-automation/SKILL.md

## Purpose — required, verbatim
> "Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines. Use when you need to automate quality gates, configure test runners in CI, or establish deployment strategies." — skills/ci-cd-and-automation/SKILL.md:3

## Design intent — required
Automates continuous integration and continuous deployment pipelines, providing an automated quality gate pipeline (lint, typecheck, test, build, integration, e2e, audit, bundle size) to enforce standards before merge. Establishes the core principles of "Shift Left" (catching defects at the lowest-cost upstream stage) and "Faster is Safer" (small, frequent batch releases), couples CI failure diagnostics back into AI agent feedback loops for automated remediation, and details safe deployment patterns including preview deployments, feature flags with strict lifecycles, and reversible rollback mechanisms.

## Phase — required
addy:Ship

## Inputs — required
Project repository code, test suites, package configuration, pull requests and pushes to main (`skills/ci-cd-and-automation/SKILL.md:65-68`), CI failure logs for agent remediation loops (`skills/ci-cd-and-automation/SKILL.md:172-178`), secrets from GitHub Secrets or secret managers (`skills/ci-cd-and-automation/SKILL.md:111, 207, 277-279`), and rollback target version inputs (`skills/ci-cd-and-automation/SKILL.md:257-259`).

## Outputs — required
GitHub Actions CI workflow configuration (`.github/workflows/ci.yml`) (`skills/ci-cd-and-automation/SKILL.md:61`), automated dependency update configuration (`.github/dependabot.yml`) (`skills/ci-cd-and-automation/SKILL.md:288`), automated quality gate verdicts across lint, typecheck, unit, integration, and e2e test suites (`skills/ci-cd-and-automation/SKILL.md:32-48`), preview deployments (`skills/ci-cd-and-automation/SKILL.md:197-208`), test artifact uploads (`skills/ci-cd-and-automation/SKILL.md:160-161`), and rollback workflows (`skills/ci-cd-and-automation/SKILL.md:261-269`).

## Invokes — required
- skill debugging-and-error-recovery — skills/ci-cd-and-automation/SKILL.md:189

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:26
- doc README.md — README.md:278
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:38
- skill constraint-driven-development — skills/constraint-driven-development/SKILL.md:308
- doc docs/adoption-guide.md — docs/adoption-guide.md:61
- doc docs/getting-started.md — docs/getting-started.md:73

## Concepts named — required, verbatim
- `Shift Left` — skills/ci-cd-and-automation/SKILL.md:12 — defined here
- `Faster is Safer` — skills/ci-cd-and-automation/SKILL.md:14 — defined here
- `Quality Gate Pipeline` — skills/ci-cd-and-automation/SKILL.md:24 — defined here
- `LINT CHECK` — skills/ci-cd-and-automation/SKILL.md:33 — defined here
- `TYPE CHECK` — skills/ci-cd-and-automation/SKILL.md:35 — defined here
- `UNIT TESTS` — skills/ci-cd-and-automation/SKILL.md:37 — defined here
- `BUILD` — skills/ci-cd-and-automation/SKILL.md:39 — defined here
- `INTEGRATION` — skills/ci-cd-and-automation/SKILL.md:41 — defined here
- `E2E` — skills/ci-cd-and-automation/SKILL.md:43 — defined here
- `SECURITY AUDIT` — skills/ci-cd-and-automation/SKILL.md:45 — defined here
- `BUNDLE SIZE` — skills/ci-cd-and-automation/SKILL.md:47 — defined here
- `Basic CI Pipeline` — skills/ci-cd-and-automation/SKILL.md:58 — defined here
- `Database Integration Tests` — skills/ci-cd-and-automation/SKILL.md:100 — defined here
- `E2E Tests` — skills/ci-cd-and-automation/SKILL.md:139 — defined here
- `Feeding CI Failures Back to Agents` — skills/ci-cd-and-automation/SKILL.md:164 — defined here
- `Preview Deployments` — skills/ci-cd-and-automation/SKILL.md:195 — defined here
- `Feature Flags` — skills/ci-cd-and-automation/SKILL.md:210 — defined here
- `Flag lifecycle` — skills/ci-cd-and-automation/SKILL.md:227 — defined here
- `Staged Rollouts` — skills/ci-cd-and-automation/SKILL.md:229 — defined here
- `Rollback Plan` — skills/ci-cd-and-automation/SKILL.md:247 — defined here
- `Environment Management` — skills/ci-cd-and-automation/SKILL.md:271 — defined here
- `Build Cop` — skills/ci-cd-and-automation/SKILL.md:298 — defined here
- `PR Checks` — skills/ci-cd-and-automation/SKILL.md:302 — defined here
- `CI Optimization` — skills/ci-cd-and-automation/SKILL.md:309 — defined here
- `Red Flags` — skills/ci-cd-and-automation/SKILL.md:370 — defined here
- `Verification` — skills/ci-cd-and-automation/SKILL.md:380 — defined here

## Structure
- Overview — skills/ci-cd-and-automation/SKILL.md:8
- When to Use — skills/ci-cd-and-automation/SKILL.md:16
- The Quality Gate Pipeline — skills/ci-cd-and-automation/SKILL.md:24
- GitHub Actions Configuration — skills/ci-cd-and-automation/SKILL.md:56
- Basic CI Pipeline — skills/ci-cd-and-automation/SKILL.md:58
- With Database Integration Tests — skills/ci-cd-and-automation/SKILL.md:100
- E2E Tests — skills/ci-cd-and-automation/SKILL.md:139
- Feeding CI Failures Back to Agents — skills/ci-cd-and-automation/SKILL.md:164
- Deployment Strategies — skills/ci-cd-and-automation/SKILL.md:193
- Preview Deployments — skills/ci-cd-and-automation/SKILL.md:195
- Feature Flags — skills/ci-cd-and-automation/SKILL.md:210
- Staged Rollouts — skills/ci-cd-and-automation/SKILL.md:229
- Rollback Plan — skills/ci-cd-and-automation/SKILL.md:247
- Environment Management — skills/ci-cd-and-automation/SKILL.md:271
- Automation Beyond CI — skills/ci-cd-and-automation/SKILL.md:283
- Dependabot / Renovate — skills/ci-cd-and-automation/SKILL.md:285
- Build Cop Role — skills/ci-cd-and-automation/SKILL.md:298
- PR Checks — skills/ci-cd-and-automation/SKILL.md:302
- CI Optimization — skills/ci-cd-and-automation/SKILL.md:309
- Common Rationalizations — skills/ci-cd-and-automation/SKILL.md:360
- Red Flags — skills/ci-cd-and-automation/SKILL.md:370
- Verification — skills/ci-cd-and-automation/SKILL.md:380

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Enforces strict no-skipping rule: "No gate can be skipped." — skills/ci-cd-and-automation/SKILL.md:54.
- Defines an automated agent remediation loop where CI failure output is copied and fed back into the agent context for targeted repair and re-verification (skills/ci-cd-and-automation/SKILL.md:164-192).
- Defines the Build Cop role (skills/ci-cd-and-automation/SKILL.md:298-301) assigning responsibility for keeping CI green away from the author whose change caused the break.
- Sets a strict 10-minute CI threshold and prescribes prioritized optimization strategies: caching dependencies, parallel jobs, path filters, matrix builds, test optimization, and larger runners (skills/ci-cd-and-automation/SKILL.md:311-327).

## Context cost
11332 bytes, ~2600 tokens. Standalone skill file; references debugging-and-error-recovery on test failures.
