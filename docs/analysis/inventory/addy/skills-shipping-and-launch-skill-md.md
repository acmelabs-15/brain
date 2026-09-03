---
package: addy
path: skills/shipping-and-launch/SKILL.md
type: skill
bytes: 10137
unit: inv-addy-15
---

# skills/shipping-and-launch/SKILL.md

## Purpose — required, verbatim
> "Ship with confidence. The goal is not just to deploy — it's to deploy safely, with monitoring in place, a rollback plan ready, and a clear understanding of what success looks like. Every launch should be reversible, observable, and incremental." — skills/shipping-and-launch/SKILL.md:10

## Design intent — required
Establishes a rigorous operational framework for production deployments that enforces safety, observability, reversibility, and incremental release. It provides a multi-domain pre-launch checklist (covering code quality, security, performance, accessibility, infrastructure, and documentation), a feature flag lifecycle model (deploy disabled → internal test → canary/gradual percentage rollout → monitor → dead code cleanup), explicit quantitative thresholds for rollout advancement or rollback (error rate >2x baseline, P95 latency >50% above baseline, new client JS errors >0.1% sessions, business metrics decline >5%), monitoring requirements, and a standardized rollback plan template with strict recovery time objectives. Without it, deployments risk unmonitored failures, irreversible data damage, or release gate overrides under delivery pressure.

## Phase — required
addy:Ship

## Inputs — required
- Production deployment candidate (commit, release branch, or PR)
- Pre-launch checklist validation results across code quality, security, performance, accessibility, infrastructure, and documentation (`skills/shipping-and-launch/SKILL.md:20-76`)
- Baseline performance, error, and business metrics for comparison (`skills/shipping-and-launch/SKILL.md:144-152`)
- Standing gates and reference checklists:
  - `../../references/definition-of-done.md` (`skills/shipping-and-launch/SKILL.md:268`)
  - `../../references/security-checklist.md` (`skills/shipping-and-launch/SKILL.md:269`)
  - `../../references/performance-checklist.md` (`skills/shipping-and-launch/SKILL.md:270`)
  - `../../references/accessibility-checklist.md` (`skills/shipping-and-launch/SKILL.md:271`)

## Outputs — required
- Completed pre-launch checklist verification (`skills/shipping-and-launch/SKILL.md:297`)
- Rollback plan document with trigger conditions, rollback procedure steps, database migration reversal considerations, and recovery time objectives (`skills/shipping-and-launch/SKILL.md:242-265`)
- Staged rollout verdicts (advance, hold, rollback) across canary (5%) and gradual rollout (25% -> 50% -> 100%) stages (`skills/shipping-and-launch/SKILL.md:112-152`)
- Post-launch verification check results (health check 200, error dashboards, latency checks, critical flow verification, log validation) (`skills/shipping-and-launch/SKILL.md:225-236, 303-311`)

## Invokes — required
- reference ../../references/definition-of-done.md — skills/shipping-and-launch/SKILL.md:268
- reference ../../references/security-checklist.md — skills/shipping-and-launch/SKILL.md:269
- reference ../../references/performance-checklist.md — skills/shipping-and-launch/SKILL.md:270
- reference ../../references/accessibility-checklist.md — skills/shipping-and-launch/SKILL.md:271

## Invoked by — required
- command commands/ship.toml — commands/ship.toml:4
- doc CLAUDE.md — CLAUDE.md:26
- doc AGENTS.md — AGENTS.md:45
- skill skills/git-workflow-and-versioning/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:311
- skill skills/observability-and-instrumentation/SKILL.md — skills/observability-and-instrumentation/SKILL.md:23
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:42, skills/using-agent-skills/SKILL.md:137, skills/using-agent-skills/SKILL.md:161, skills/using-agent-skills/SKILL.md:192
- doc README.md — README.md:282, README.md:376
- doc docs/getting-started.md — docs/getting-started.md:64, docs/getting-started.md:118
- doc docs/opencode-setup.md — docs/opencode-setup.md:173
- reference references/definition-of-done.md — references/definition-of-done.md:3, references/definition-of-done.md:50, references/definition-of-done.md:57
- doc docs/antigravity-setup.md — docs/antigravity-setup.md:58
- doc docs/adoption-guide.md — docs/adoption-guide.md:43, docs/adoption-guide.md:62
- doc docs/cursor-setup.md — docs/cursor-setup.md:162
- reference references/observability-checklist.md — references/observability-checklist.md:91
- config evals/cases/code-review-and-quality.json — evals/cases/code-review-and-quality.json:21
- config evals/cases/interview-me.json — evals/cases/interview-me.json:25
- config evals/cases/shipping-and-launch.json — evals/cases/shipping-and-launch.json:2, evals/cases/shipping-and-launch.json:34, evals/cases/shipping-and-launch.json:47
- script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:107
- external-doc sources/addy-external/shipping-and-launch.md — sources/addy-external/shipping-and-launch.md:1, sources/addy-external/shipping-and-launch.md:5

## Concepts named — required, verbatim
- `shipping-and-launch` — skills/shipping-and-launch/SKILL.md:2 — defined here
- `pre-launch checklist` — skills/shipping-and-launch/SKILL.md:3 — defined here
- `monitoring` — skills/shipping-and-launch/SKILL.md:3 — defined here
- `staged rollout` — skills/shipping-and-launch/SKILL.md:3 — defined here
- `rollback strategy` — skills/shipping-and-launch/SKILL.md:3 — defined here
- `The Pre-Launch Checklist` — skills/shipping-and-launch/SKILL.md:20 — defined here
- `Code Quality` — skills/shipping-and-launch/SKILL.md:22 — defined here
- `Security` — skills/shipping-and-launch/SKILL.md:32 — defined here
- `dependency audit` — skills/shipping-and-launch/SKILL.md:35 — used here
- `npm audit` — skills/shipping-and-launch/SKILL.md:35 — used here
- `pip-audit` — skills/shipping-and-launch/SKILL.md:35 — used here
- `cargo audit` — skills/shipping-and-launch/SKILL.md:35 — used here
- `Performance` — skills/shipping-and-launch/SKILL.md:42 — defined here
- `Core Web Vitals` — skills/shipping-and-launch/SKILL.md:44 — used here
- `N+1 queries` — skills/shipping-and-launch/SKILL.md:45 — used here
- `Accessibility` — skills/shipping-and-launch/SKILL.md:51 — defined here
- `WCAG 2.1 AA` — skills/shipping-and-launch/SKILL.md:55 — used here
- `axe-core` — skills/shipping-and-launch/SKILL.md:58 — used here
- `Lighthouse` — skills/shipping-and-launch/SKILL.md:58 — used here
- `Infrastructure` — skills/shipping-and-launch/SKILL.md:60 — defined here
- `health check` — skills/shipping-and-launch/SKILL.md:67 — used here
- `Documentation` — skills/shipping-and-launch/SKILL.md:69 — defined here
- `ADRs` — skills/shipping-and-launch/SKILL.md:73 — used here
- `Feature Flag Strategy` — skills/shipping-and-launch/SKILL.md:77 — defined here
- `feature flag` — skills/shipping-and-launch/SKILL.md:79 — defined here
- `feature flag lifecycle` — skills/shipping-and-launch/SKILL.md:94 — defined here
- `Staged Rollout` — skills/shipping-and-launch/SKILL.md:110 — defined here
- `The Rollout Sequence` — skills/shipping-and-launch/SKILL.md:112 — defined here
- `staging environment` — skills/shipping-and-launch/SKILL.md:115 — used here
- `CANARY rollout` — skills/shipping-and-launch/SKILL.md:127 — defined here
- `canary` — skills/shipping-and-launch/SKILL.md:129 — defined here
- `Rollout Decision Thresholds` — skills/shipping-and-launch/SKILL.md:142 — defined here
- `P95 latency` — skills/shipping-and-launch/SKILL.md:149 — used here
- `Client JS errors` — skills/shipping-and-launch/SKILL.md:150 — used here
- `When to Roll Back` — skills/shipping-and-launch/SKILL.md:153 — defined here
- `Monitoring and Observability` — skills/shipping-and-launch/SKILL.md:162 — defined here
- `What to Monitor` — skills/shipping-and-launch/SKILL.md:164 — defined here
- `Error Reporting` — skills/shipping-and-launch/SKILL.md:188 — defined here
- `ErrorBoundary` — skills/shipping-and-launch/SKILL.md:192 — defined here
- `Post-Launch Verification` — skills/shipping-and-launch/SKILL.md:225 — defined here
- `Rollback Strategy` — skills/shipping-and-launch/SKILL.md:238 — defined here
- `Rollback Plan` — skills/shipping-and-launch/SKILL.md:242 — defined here
- `Trigger Conditions` — skills/shipping-and-launch/SKILL.md:245 — defined here
- `Rollback Steps` — skills/shipping-and-launch/SKILL.md:250 — defined here
- `Time to Rollback` — skills/shipping-and-launch/SKILL.md:261 — defined here
- `Definition of Done` — skills/shipping-and-launch/SKILL.md:268 — used here
- `security-checklist` — skills/shipping-and-launch/SKILL.md:269 — used here
- `performance-checklist` — skills/shipping-and-launch/SKILL.md:270 — used here
- `accessibility-checklist` — skills/shipping-and-launch/SKILL.md:271 — used here
- `Common Rationalizations` — skills/shipping-and-launch/SKILL.md:273 — defined here
- `Red Flags` — skills/shipping-and-launch/SKILL.md:283 — defined here
- `Verification` — skills/shipping-and-launch/SKILL.md:293 — defined here

## Structure
- Shipping and Launch (line 6)
- Overview (line 8)
- When to Use (line 12)
- The Pre-Launch Checklist (line 20)
  - Code Quality (line 22)
  - Security (line 32)
  - Performance (line 42)
  - Accessibility (line 51)
  - Infrastructure (line 60)
  - Documentation (line 69)
- Feature Flag Strategy (line 77)
- Staged Rollout (line 110)
  - The Rollout Sequence (line 112)
  - Rollout Decision Thresholds (line 142)
  - When to Roll Back (line 153)
- Monitoring and Observability (line 162)
  - What to Monitor (line 164)
  - Error Reporting (line 188)
  - Post-Launch Verification (line 225)
- Rollback Strategy (line 238)
- See Also (line 266)
- Common Rationalizations (line 273)
- Red Flags (line 283)
- Verification (line 293)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — commands/ship.toml:1-72 and sources/addy-external/shipping-and-launch.md:1, 5 define `/ship` as a parallel fan-out orchestrator spawning three specialist personas (`code-reviewer`, `security-auditor`, `test-engineer`) concurrently, whereas skills/shipping-and-launch/SKILL.md omits any mention of persona fan-out or multi-agent orchestration, detailing only manual checklists, feature flags, staged rollouts, and rollback templates.
- doc-drift — skills/shipping-and-launch/SKILL.md:3 frontmatter description lists "Prepares production launches. Use when preparing to deploy to production. Use when you need a pre-launch checklist, when setting up monitoring, when planning a staged rollout, or when you need a rollback strategy." README.md:282 summarizes this as "Pre-launch checklists, feature flag lifecycle, staged rollouts, rollback procedures, monitoring setup", and commands/ship.toml:1 describes it as "Run the pre-launch checklist via parallel fan-out to specialist personas, then synthesize a go/no-go decision".

## Observations
- Quantified rollback thresholds provide concrete, non-discretionary decision rules (error rate >2x baseline, P95 latency >50% above baseline, client JS errors >0.1% sessions, business metrics decline >5%).
- Explicit recovery time objective targets: feature flag disable <1 min, previous version redeploy <5 min, database rollback <15 min (lines 261-264).
- Eval fixture `evals/fixtures/shipping-and-launch/authority-pressure.md` directly exercises the skill's resistance to organizational authority pressure attempting to bypass safety gates.

## Context cost
10,137 bytes (~2,550 tokens) for SKILL.md alone. When loading all 4 referenced documents (`definition-of-done.md` [3,798 B], `security-checklist.md` [11,881 B], `performance-checklist.md` [13,139 B], `accessibility-checklist.md` [5,206 B]), total combined context is 44,161 bytes (~11,100 tokens).
