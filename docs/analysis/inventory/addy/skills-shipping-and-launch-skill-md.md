---
package: addy
path: skills/shipping-and-launch/SKILL.md
type: skill
bytes: 10137
unit: inv-addy-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/shipping-and-launch/SKILL.md, sha256: daa57a85dcd96dee03343272a432fce2ebf144c9d8ece9541eb6e1464dae27ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/shipping-and-launch/SKILL.md

## Purpose — required, verbatim
> "Prepares production launches. Use when preparing to deploy to production. Use when you need a pre-launch checklist, when setting up monitoring, when planning a staged rollout, or when you need a rollback strategy." — skills/shipping-and-launch/SKILL.md:3

## Design intent — required
Establishes a rigorous, production-grade release and deployment procedure for applications. Provides comprehensive multi-category pre-launch checklists (code quality, security, performance, accessibility, infrastructure, documentation), a feature flag lifecycle to decouple deployment from release, staged rollout sequences with quantitative threshold matrices (advance, hold, rollback), application and client-side observability requirements, and mandatory pre-deployment rollback strategies. Without this skill, deployments risk unmonitored "big-bang" releases on Friday afternoons, untracked feature flag sprawl, regressions in production performance or accessibility, and lack of tested rollback mechanisms when incidents occur.

## Phase — required
addy:Ship

## Inputs — required
- Codebase changes and production deployment readiness:
  > "Deploying a feature to production for the first time" — skills/shipping-and-launch/SKILL.md:14
- Pre-launch checklist verification across 6 domains:
  > "## The Pre-Launch Checklist" — skills/shipping-and-launch/SKILL.md:20
- Feature flag status and target rollout percentage:
  > "Ship behind feature flags to decouple deployment from release:" — skills/shipping-and-launch/SKILL.md:79
- Runtime metrics and baseline comparisons:
  > "Compare metrics: canary vs. baseline" — skills/shipping-and-launch/SKILL.md:129

## Outputs — required
- Documented rollback plan before launch:
  > "## Rollback Plan for [Feature/Release]" — skills/shipping-and-launch/SKILL.md:243
- Completed pre-launch checklist results
- Staged rollout execution and monitoring logs:
  > "Post-Launch Verification" — skills/shipping-and-launch/SKILL.md:225

## Invokes — required
- reference ../../references/definition-of-done.md — skills/shipping-and-launch/SKILL.md:268
- reference ../../references/security-checklist.md — skills/shipping-and-launch/SKILL.md:269
- reference ../../references/performance-checklist.md — skills/shipping-and-launch/SKILL.md:270
- reference ../../references/accessibility-checklist.md — skills/shipping-and-launch/SKILL.md:271

## Invoked by — required
- command commands/ship.toml — commands/ship.toml:4
- skill skills/git-workflow-and-versioning/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:311
- skill skills/observability-and-instrumentation/SKILL.md — skills/observability-and-instrumentation/SKILL.md:23
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:42
- reference references/definition-of-done.md — references/definition-of-done.md:3
- reference references/observability-checklist.md — references/observability-checklist.md:91
- doc CLAUDE.md — CLAUDE.md:26
- doc AGENTS.md — AGENTS.md:45
- doc README.md — README.md:282

## Concepts named — required, verbatim
- `Pre-Launch Checklist` — skills/shipping-and-launch/SKILL.md:20 — defined here
- `Feature Flag Strategy` — skills/shipping-and-launch/SKILL.md:77 — defined here
- `feature flag lifecycle` — skills/shipping-and-launch/SKILL.md:94 — defined here
- `Staged Rollout` — skills/shipping-and-launch/SKILL.md:110 — defined here
- `Canary` — skills/shipping-and-launch/SKILL.md:127 — defined here
- `Rollout Decision Thresholds` — skills/shipping-and-launch/SKILL.md:142 — defined here
- `Monitoring and Observability` — skills/shipping-and-launch/SKILL.md:162 — defined here
- `Post-Launch Verification` — skills/shipping-and-launch/SKILL.md:225 — defined here
- `Rollback Strategy` — skills/shipping-and-launch/SKILL.md:238 — defined here
- `Rollback Plan` — skills/shipping-and-launch/SKILL.md:243 — defined here
- `Definition of Done` — skills/shipping-and-launch/SKILL.md:268 — used here
- `Common Rationalizations` — skills/shipping-and-launch/SKILL.md:273 — defined here
- `Red Flags` — skills/shipping-and-launch/SKILL.md:283 — defined here

## Structure
- Overview — skills/shipping-and-launch/SKILL.md:8
- When to Use — skills/shipping-and-launch/SKILL.md:12
- The Pre-Launch Checklist — skills/shipping-and-launch/SKILL.md:20
- Feature Flag Strategy — skills/shipping-and-launch/SKILL.md:77
- Staged Rollout — skills/shipping-and-launch/SKILL.md:110
- Monitoring and Observability — skills/shipping-and-launch/SKILL.md:162
- Rollback Strategy — skills/shipping-and-launch/SKILL.md:238
- See Also — skills/shipping-and-launch/SKILL.md:266
- Common Rationalizations — skills/shipping-and-launch/SKILL.md:273
- Red Flags — skills/shipping-and-launch/SKILL.md:283
- Verification — skills/shipping-and-launch/SKILL.md:294

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Quantitative decision thresholds: Specifies explicit numerical metrics for rollout stages (Error rate within 10% advance vs >2x baseline rollback; P95 latency within 20% advance vs >50% rollback; client JS errors <0.1% hold vs >0.1% rollback) in skills/shipping-and-launch/SKILL.md:144-152.
- Feature flag hygiene rules: Enforces that flags must not be nested, each flag must have an explicit owner and expiration date, and flags must be cleaned up within 2 weeks of full rollout (skills/shipping-and-launch/SKILL.md:104-108).
- Time-bounded rollback expectations: Sets target rollback execution windows: feature flag < 1 minute, redeploy previous version < 5 minutes, database rollback < 15 minutes (skills/shipping-and-launch/SKILL.md:261-264).

## Context cost
10137 bytes, ~2300 tokens. Standalone skill markdown file; loads 4 reference checklists on demand: `references/definition-of-done.md` (3798 bytes), `references/security-checklist.md` (11881 bytes), `references/performance-checklist.md` (13139 bytes), `references/accessibility-checklist.md` (5206 bytes) for total context cost of ~44161 bytes, ~10000 tokens.
