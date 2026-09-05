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
verified: 2026-09-04 quote-check+coverage
---

# skills/shipping-and-launch/SKILL.md

## Purpose — required, verbatim
> "Prepares production launches. Use when preparing to deploy to production. Use when you need a pre-launch checklist, when setting up monitoring, when planning a staged rollout, or when you need a rollback strategy." — skills/shipping-and-launch/SKILL.md:3

## Design intent — required
Establishes pre-deployment operational discipline and launch procedures for production releases. It ensures that deployments are never treated as one-off "big bang" events or Friday-afternoon gambles, but rather as controlled, observable, and reversible transitions. It provides a multi-dimensional pre-launch checklist (code quality, security, performance, accessibility, infrastructure, documentation), a structured feature flag lifecycle (decoupling deployment from release), a six-step staged rollout model (staging, production flag-off, internal dogfooding, canary 5%, gradual increase, full rollout) governed by explicit metric thresholds (error rate, P95 latency, client JS errors, business metrics), concrete rollback strategies with quantified recovery time targets, and immediate post-launch verification procedures. Without it, production releases risk catastrophic failures, lack rollback mechanisms, introduce regressions that remain undetected until users complain, and leave teams without clear criteria for halting or reverting deployments.

## Phase — required
addy:Ship

## Inputs — required
- Production-ready feature branch or release candidate — skills/shipping-and-launch/SKILL.md:14, 27
- Multi-dimensional checklist data across code quality, security, Core Web Vitals performance, accessibility, infrastructure, and documentation — skills/shipping-and-launch/SKILL.md:22-76
- Baseline application, infrastructure, and client metrics for canary comparison — skills/shipping-and-launch/SKILL.md:129, 144-152, 164-186
- User feedback and error monitoring telemetry during rollout — skills/shipping-and-launch/SKILL.md:100, 128, 158

## Outputs — required
- Feature flag implementation and configuration (with owner and expiration date) — skills/shipping-and-launch/SKILL.md:82-109
- Staged rollout progression verdicts (advance green, hold/investigate yellow, roll back red) — skills/shipping-and-launch/SKILL.md:144-152
- Rollback plan document (`Rollback Plan for [Feature/Release]`) with trigger conditions, rollback steps, database rollback commands, and time-to-rollback bounds — skills/shipping-and-launch/SKILL.md:243-265
- Error boundary setup with reporting service integration — skills/shipping-and-launch/SKILL.md:192-223
- Post-launch verification checklist completion — skills/shipping-and-launch/SKILL.md:227-237, 303-311

## Invokes — required
- reference ../../references/definition-of-done.md — skills/shipping-and-launch/SKILL.md:268
- reference ../../references/security-checklist.md — skills/shipping-and-launch/SKILL.md:269
- reference ../../references/performance-checklist.md — skills/shipping-and-launch/SKILL.md:270
- reference ../../references/accessibility-checklist.md — skills/shipping-and-launch/SKILL.md:271

## Invoked by — required
- command ship — .claude/commands/ship.md:5
- command ship — commands/ship.toml:4
- command ship — .gemini/commands/ship.toml:4
- skill observability-and-instrumentation — skills/observability-and-instrumentation/SKILL.md:23
- skill git-workflow-and-versioning — skills/git-workflow-and-versioning/SKILL.md:311
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:42
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:137
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:161
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:192
- reference definition-of-done.md — references/definition-of-done.md:3
- reference definition-of-done.md — references/definition-of-done.md:50
- reference definition-of-done.md — references/definition-of-done.md:57
- reference observability-checklist.md — references/observability-checklist.md:91
- doc README.md — README.md:282
- doc CLAUDE.md — CLAUDE.md:26
- doc AGENTS.md — AGENTS.md:45

## Concepts named — required, verbatim
- `shipping-and-launch` — skills/shipping-and-launch/SKILL.md:2 — defined here
- `Pre-Launch Checklist` — skills/shipping-and-launch/SKILL.md:20 — defined here
- `Code Quality` — skills/shipping-and-launch/SKILL.md:22 — used here
- `Security` — skills/shipping-and-launch/SKILL.md:32 — used here
- `Performance` — skills/shipping-and-launch/SKILL.md:42 — used here
- `Accessibility` — skills/shipping-and-launch/SKILL.md:51 — used here
- `Infrastructure` — skills/shipping-and-launch/SKILL.md:60 — used here
- `Documentation` — skills/shipping-and-launch/SKILL.md:69 — used here
- `Feature Flag Strategy` — skills/shipping-and-launch/SKILL.md:77 — defined here
- `Feature flag check` — skills/shipping-and-launch/SKILL.md:82 — defined here
- `Feature flag lifecycle` — skills/shipping-and-launch/SKILL.md:94 — defined here
- `Staged Rollout` — skills/shipping-and-launch/SKILL.md:110 — defined here
- `Rollout Sequence` — skills/shipping-and-launch/SKILL.md:112 — defined here
- `CANARY rollout` — skills/shipping-and-launch/SKILL.md:127 — defined here
- `Rollout Decision Thresholds` — skills/shipping-and-launch/SKILL.md:142 — defined here
- `When to Roll Back` — skills/shipping-and-launch/SKILL.md:153 — defined here
- `Monitoring and Observability` — skills/shipping-and-launch/SKILL.md:162 — defined here
- `Error Reporting` — skills/shipping-and-launch/SKILL.md:188 — defined here
- `ErrorBoundary` — skills/shipping-and-launch/SKILL.md:192 — defined here
- `Post-Launch Verification` — skills/shipping-and-launch/SKILL.md:225 — defined here
- `Rollback Strategy` — skills/shipping-and-launch/SKILL.md:238 — defined here
- `Rollback Plan` — skills/shipping-and-launch/SKILL.md:243 — defined here
- `Trigger Conditions` — skills/shipping-and-launch/SKILL.md:245 — defined here
- `Rollback Steps` — skills/shipping-and-launch/SKILL.md:250 — defined here
- `Database Considerations` — skills/shipping-and-launch/SKILL.md:257 — defined here
- `Time to Rollback` — skills/shipping-and-launch/SKILL.md:261 — defined here
- `Definition of Done` — skills/shipping-and-launch/SKILL.md:268 — used here
- `Common Rationalizations` — skills/shipping-and-launch/SKILL.md:273 — used here
- `Red Flags` — skills/shipping-and-launch/SKILL.md:283 — used here
- `Verification` — skills/shipping-and-launch/SKILL.md:293 — used here

## Structure
- `# Shipping and Launch` — skills/shipping-and-launch/SKILL.md:6
- `## Overview` — skills/shipping-and-launch/SKILL.md:8
- `## When to Use` — skills/shipping-and-launch/SKILL.md:12
- `## The Pre-Launch Checklist` — skills/shipping-and-launch/SKILL.md:20
- `### Code Quality` — skills/shipping-and-launch/SKILL.md:22
- `### Security` — skills/shipping-and-launch/SKILL.md:32
- `### Performance` — skills/shipping-and-launch/SKILL.md:42
- `### Accessibility` — skills/shipping-and-launch/SKILL.md:51
- `### Infrastructure` — skills/shipping-and-launch/SKILL.md:60
- `### Documentation` — skills/shipping-and-launch/SKILL.md:69
- `## Feature Flag Strategy` — skills/shipping-and-launch/SKILL.md:77
- `## Staged Rollout` — skills/shipping-and-launch/SKILL.md:110
- `### The Rollout Sequence` — skills/shipping-and-launch/SKILL.md:112
- `### Rollout Decision Thresholds` — skills/shipping-and-launch/SKILL.md:142
- `### When to Roll Back` — skills/shipping-and-launch/SKILL.md:153
- `## Monitoring and Observability` — skills/shipping-and-launch/SKILL.md:162
- `### What to Monitor` — skills/shipping-and-launch/SKILL.md:164
- `### Error Reporting` — skills/shipping-and-launch/SKILL.md:188
- `### Post-Launch Verification` — skills/shipping-and-launch/SKILL.md:225
- `## Rollback Strategy` — skills/shipping-and-launch/SKILL.md:238
- `## See Also` — skills/shipping-and-launch/SKILL.md:266
- `## Common Rationalizations` — skills/shipping-and-launch/SKILL.md:273
- `## Red Flags` — skills/shipping-and-launch/SKILL.md:283
- `## Verification` — skills/shipping-and-launch/SKILL.md:293

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Establishes a concrete, quantitative rollout decision threshold rubric (Advance green vs Hold yellow vs Roll back red) across four metric dimensions: error rate (<10% vs 10-100% vs >2x), P95 latency (<20% vs 20-50% vs >50%), client JS errors (none vs <0.1% vs >0.1%), and business metrics (neutral/positive vs decline <5% vs decline >5%) (lines 142-152).
- Enforces strict governance on feature flags: each flag must have an explicit owner and expiration date, must not be nested, and must be cleaned up within 2 weeks of full rollout (lines 104-109).
- Requires pre-calculating rollback execution bounds before launching (feature flag < 1 minute, redeploy previous version < 5 minutes, database rollback < 15 minutes) (lines 261-265).
- Composes four separate cross-cutting checklists (`definition-of-done.md`, `security-checklist.md`, `performance-checklist.md`, `accessibility-checklist.md`) into a single launch gate (lines 266-272).

## Context cost
10137 bytes (~2534 tokens). If invoked, loads `../../references/definition-of-done.md` (3056 bytes), `../../references/security-checklist.md` (6771 bytes), `../../references/performance-checklist.md` (6111 bytes), and `../../references/accessibility-checklist.md` (7892 bytes). Total: 33967 bytes (~8492 tokens).
