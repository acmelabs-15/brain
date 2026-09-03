---
package: addy
path: skills/ci-cd-and-automation/SKILL.md
type: skill
bytes: 11332
unit: inv-addy-14
---

# skills/ci-cd-and-automation/SKILL.md

## Purpose — required, verbatim
> "Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines. Use when you need to automate quality gates, configure test runners in CI, or establish deployment strategies." — skills/ci-cd-and-automation/SKILL.md:3

## Design intent — required
Manual verification of changes, tests, types, and builds does not scale and easily breaks down as autonomous agents and developers introduce rapid code changes. Without automated CI/CD pipelines, unverified changes slip into main/production, leading to regressions, broken builds, secret leaks, and lengthy outages. `ci-cd-and-automation` provides the automated enforcement mechanism for all quality standards—establishing shift-left gating (linting, type checking, unit tests, build, integration tests, E2E, security audit, and bundle size checks), automated feedback loops to agents when CI fails, safe deployment strategies (preview deployments, feature flags, staged rollouts, and rollback workflows), and pipeline performance optimization (caching, parallel jobs, path filtering, matrix test sharding). Without it, quality assurance relies on unreliable human vigilance, batch sizes balloon, deployments become high-risk events, and agent feedback loops remain unclosed.

## Phase — required
addy:Ship

## Inputs — required
- Project source code, build scripts, and package manager configurations (`package.json`, etc.)
- Existing CI/CD configuration files (`.github/workflows/*.yml`, `.github/dependabot.yml`)
- Environment variable specifications and secrets (`.env.example`, GitHub Secrets, vault credentials)
- Failure outputs from CI runs (lint failures, TypeScript compiler errors `tsc --noEmit`, test failure reports, build errors, security audit reports)
- Deployment target credentials and platform configurations (Vercel token, database connection URLs)

## Outputs — required
- Automated CI workflow definitions (`.github/workflows/ci.yml`, with quality gates for lint, type check, unit tests, build, integration tests, E2E tests, security audit, and bundle size)
- Database integration test job configurations with service containers and migration steps (`npx prisma migrate deploy`)
- E2E test workflow configurations and test artifact uploads (`playwright-report/`)
- Preview deployment configurations and workflows (`npx vercel --token=...`)
- Feature flag implementations and flag lifecycle deprecation plans
- Staged rollout procedures and manual/automatic rollback workflows (`npx vercel rollback`)
- Automated dependency update configurations (`.github/dependabot.yml`)
- Quality gate enforcement policies (required PR status checks, required reviews, branch protection)
- CI pipeline optimizations (dependency caching, parallel execution, path filters, test matrix sharding)

## Invokes — required
- skill debugging-and-error-recovery — skills/ci-cd-and-automation/SKILL.md:189

## Invoked by — required
- command commands/ship.toml — commands/ship.toml:4
- doc CLAUDE.md — CLAUDE.md:26
- doc README.md — README.md:278, README.md:372
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:38, skills/using-agent-skills/SKILL.md:188
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:33, skills/constraint-driven-development/SKILL.md:308
- doc docs/cursor-setup.md — docs/cursor-setup.md:162
- doc docs/adoption-guide.md — docs/adoption-guide.md:61
- doc docs/getting-started.md — docs/getting-started.md:73
- config evals/cases/ci-cd-and-automation.json — evals/cases/ci-cd-and-automation.json:2, evals/cases/ci-cd-and-automation.json:35
- config evals/cases/deprecation-and-migration.json — evals/cases/deprecation-and-migration.json:24
- config evals/cases/idea-refine.json — evals/cases/idea-refine.json:21
- config evals/cases/source-driven-development.json — evals/cases/source-driven-development.json:21
- config evals/cases/constraint-driven-development.json — evals/cases/constraint-driven-development.json:33

## Concepts named — required, verbatim
- `ci-cd-and-automation` — skills/ci-cd-and-automation/SKILL.md:2 — defined here
- `quality gates` — skills/ci-cd-and-automation/SKILL.md:10 — used here
- `Shift Left` — skills/ci-cd-and-automation/SKILL.md:12 — defined here
- `static analysis` — skills/ci-cd-and-automation/SKILL.md:12 — used here
- `Faster is Safer` — skills/ci-cd-and-automation/SKILL.md:14 — defined here
- `The Quality Gate Pipeline` — skills/ci-cd-and-automation/SKILL.md:24 — defined here
- `LINT CHECK` — skills/ci-cd-and-automation/SKILL.md:33 — defined here
- `TYPE CHECK` — skills/ci-cd-and-automation/SKILL.md:35 — defined here
- `UNIT TESTS` — skills/ci-cd-and-automation/SKILL.md:37 — defined here
- `BUILD` — skills/ci-cd-and-automation/SKILL.md:39 — defined here
- `INTEGRATION` — skills/ci-cd-and-automation/SKILL.md:41 — defined here
- `E2E` — skills/ci-cd-and-automation/SKILL.md:43 — defined here
- `SECURITY AUDIT` — skills/ci-cd-and-automation/SKILL.md:45 — defined here
- `BUNDLE SIZE` — skills/ci-cd-and-automation/SKILL.md:47 — defined here
- `Ready for review` — skills/ci-cd-and-automation/SKILL.md:51 — defined here
- `Basic CI Pipeline` — skills/ci-cd-and-automation/SKILL.md:58 — defined here
- `.github/workflows/ci.yml` — skills/ci-cd-and-automation/SKILL.md:61 — used here
- `Database Integration Tests` — skills/ci-cd-and-automation/SKILL.md:100 — defined here
- `E2E Tests` — skills/ci-cd-and-automation/SKILL.md:139 — defined here
- `Feeding CI Failures Back to Agents` — skills/ci-cd-and-automation/SKILL.md:164 — defined here
- `debugging-and-error-recovery` — skills/ci-cd-and-automation/SKILL.md:189 — used here
- `Deployment Strategies` — skills/ci-cd-and-automation/SKILL.md:193 — defined here
- `Preview Deployments` — skills/ci-cd-and-automation/SKILL.md:195 — defined here
- `Feature Flags` — skills/ci-cd-and-automation/SKILL.md:210 — defined here
- `Canary` — skills/ci-cd-and-automation/SKILL.md:216 — used here
- `A/B tests` — skills/ci-cd-and-automation/SKILL.md:217 — used here
- `Flag lifecycle` — skills/ci-cd-and-automation/SKILL.md:227 — defined here
- `Staged Rollouts` — skills/ci-cd-and-automation/SKILL.md:229 — defined here
- `Rollback Plan` — skills/ci-cd-and-automation/SKILL.md:247 — defined here
- `Environment Management` — skills/ci-cd-and-automation/SKILL.md:271 — defined here
- `.env.example` — skills/ci-cd-and-automation/SKILL.md:274 — used here
- `.env` — skills/ci-cd-and-automation/SKILL.md:275 — used here
- `.env.test` — skills/ci-cd-and-automation/SKILL.md:276 — used here
- `CI secrets` — skills/ci-cd-and-automation/SKILL.md:277 — defined here
- `Production secrets` — skills/ci-cd-and-automation/SKILL.md:278 — defined here
- `Dependabot` — skills/ci-cd-and-automation/SKILL.md:285 — used here
- `Renovate` — skills/ci-cd-and-automation/SKILL.md:285 — used here
- `.github/dependabot.yml` — skills/ci-cd-and-automation/SKILL.md:288 — used here
- `Build Cop` — skills/ci-cd-and-automation/SKILL.md:298 — defined here
- `PR Checks` — skills/ci-cd-and-automation/SKILL.md:302 — defined here
- `Required reviews` — skills/ci-cd-and-automation/SKILL.md:304 — defined here
- `Required status checks` — skills/ci-cd-and-automation/SKILL.md:305 — defined here
- `Branch protection` — skills/ci-cd-and-automation/SKILL.md:306 — defined here
- `Auto-merge` — skills/ci-cd-and-automation/SKILL.md:307 — defined here
- `CI Optimization` — skills/ci-cd-and-automation/SKILL.md:310 — defined here
- `Cache dependencies` — skills/ci-cd-and-automation/SKILL.md:315 — defined here
- `Run jobs in parallel` — skills/ci-cd-and-automation/SKILL.md:317 — defined here
- `Only run what changed` — skills/ci-cd-and-automation/SKILL.md:319 — defined here
- `path filters` — skills/ci-cd-and-automation/SKILL.md:320 — used here
- `matrix builds` — skills/ci-cd-and-automation/SKILL.md:321 — defined here
- `Optimize the test suite` — skills/ci-cd-and-automation/SKILL.md:323 — defined here
- `larger runners` — skills/ci-cd-and-automation/SKILL.md:325 — defined here
- `Common Rationalizations` — skills/ci-cd-and-automation/SKILL.md:360 — defined here
- `Red Flags` — skills/ci-cd-and-automation/SKILL.md:370 — defined here
- `Verification` — skills/ci-cd-and-automation/SKILL.md:380 — defined here

## Structure
# CI/CD and Automation
## Overview
## When to Use
## The Quality Gate Pipeline
## GitHub Actions Configuration
### Basic CI Pipeline
### With Database Integration Tests
### E2E Tests
## Feeding CI Failures Back to Agents
## Deployment Strategies
### Preview Deployments
### Feature Flags
### Staged Rollouts
### Rollback Plan
## Environment Management
## Automation Beyond CI
### Dependabot / Renovate
### Build Cop Role
### PR Checks
## CI Optimization
## Common Rationalizations
## Red Flags
## Verification

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — skills/ci-cd-and-automation/SKILL.md:364 — Rationalization table text refers to "(see CI Optimization below)", but the `## CI Optimization` section is located above at line 310.

## Observations
- Skill acts as the central automated quality enforcement spine for the Addy lifecycle, directly operationalizing the principles "Shift Left" and "Faster is Safer".
- Introduces the human/operational role "Build Cop" (line 298) responsible for keeping CI green, distinct from author-led fixing.
- Provides a dedicated feedback-loop pattern specifically for feeding CI failure traces back into agent prompts (lines 164–192).

## Context cost
11,332 bytes (approx. 2,833 tokens). If loaded alongside invoked skill `debugging-and-error-recovery` (14,068 bytes), total combined context cost is 25,400 bytes (approx. 6,350 tokens).
