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
verified: 2026-09-04 quote-check+coverage
---

# skills/ci-cd-and-automation/SKILL.md

## Purpose — required, verbatim
> "Automate quality gates so that no change reaches production without passing tests, lint, type checking, and build. CI/CD is the enforcement mechanism for every other skill — it catches what humans and agents miss, and it does so consistently on every single change." — skills/ci-cd-and-automation/SKILL.md:10

## Design intent — required
Automates and standardizes continuous integration and deployment pipelines to enforce automated quality gates on every code change before merge and release. It establishes the "Shift Left" principle (catching issues upstream in static analysis and unit testing rather than production) and "Faster is Safer" (small, frequent releases reducing deployment risk), decoupling deployment from release via feature flags and providing structured rollback mechanisms and agent failure feedback loops. Without this skill, projects lack a consistent enforcement mechanism for quality standards, allowing regressions to reach production, deployments to be risky and difficult to debug, and agents to lack structured patterns for diagnosing CI failures.

## Phase — required
addy:Ship

## Inputs — required
- Code changes and pull requests: "Pull Request Opened" — skills/ci-cd-and-automation/SKILL.md:29, "push" — skills/ci-cd-and-automation/SKILL.md:67
- Linters and formatters: "eslint, prettier" — skills/ci-cd-and-automation/SKILL.md:33
- Type checker: "tsc --noEmit" — skills/ci-cd-and-automation/SKILL.md:35, "npx tsc --noEmit" — skills/ci-cd-and-automation/SKILL.md:88
- Test runners: "jest/vitest" — skills/ci-cd-and-automation/SKILL.md:37, "npm test -- --coverage" — skills/ci-cd-and-automation/SKILL.md:91
- Build commands: "npm run build" — skills/ci-cd-and-automation/SKILL.md:39
- Database migration and integration test configurations: "npx prisma migrate deploy" — skills/ci-cd-and-automation/SKILL.md:128, "npm run test:integration" — skills/ci-cd-and-automation/SKILL.md:132
- E2E test suites: "Playwright/Cypress" — skills/ci-cd-and-automation/SKILL.md:43, "npx playwright test" — skills/ci-cd-and-automation/SKILL.md:156
- Security audit tooling: "npm audit" — skills/ci-cd-and-automation/SKILL.md:45, "npm audit --audit-level=high" — skills/ci-cd-and-automation/SKILL.md:97
- Bundle size validators: "bundlesize check" — skills/ci-cd-and-automation/SKILL.md:47
- CI failure logs and output: "Copy the failure output" — skills/ci-cd-and-automation/SKILL.md:172, "[paste specific error]" — skills/ci-cd-and-automation/SKILL.md:177
- Secrets and environment configuration: "GitHub Secrets" — skills/ci-cd-and-automation/SKILL.md:137, ".env.example" — skills/ci-cd-and-automation/SKILL.md:274, ".env" — skills/ci-cd-and-automation/SKILL.md:275, ".env.test" — skills/ci-cd-and-automation/SKILL.md:276

## Outputs — required
- GitHub Actions workflow configurations: ".github/workflows/ci.yml" — skills/ci-cd-and-automation/SKILL.md:61
- Dependabot configuration: ".github/dependabot.yml" — skills/ci-cd-and-automation/SKILL.md:288
- Quality gate verdicts and test/build artifacts: "playwright-report" — skills/ci-cd-and-automation/SKILL.md:161
- Preview deployments: "deploy-preview" — skills/ci-cd-and-automation/SKILL.md:201
- Rollback workflows: "npx vercel rollback" — skills/ci-cd-and-automation/SKILL.md:268
- Automated failure feedback loops for AI agents: "Agent fixes → pushes → CI runs again" — skills/ci-cd-and-automation/SKILL.md:181

## Invokes — required
- skill debugging-and-error-recovery — skills/ci-cd-and-automation/SKILL.md:189

## Invoked by — required
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:38
- skill constraint-driven-development — skills/constraint-driven-development/SKILL.md:33
- doc README.md — README.md:278
- doc CLAUDE.md — CLAUDE.md:26
- doc docs/getting-started.md — docs/getting-started.md:73
- doc docs/adoption-guide.md — docs/adoption-guide.md:61

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
- `GitHub Actions` — skills/ci-cd-and-automation/SKILL.md:56 — used here
- `GitHub Secrets` — skills/ci-cd-and-automation/SKILL.md:137, 277 — used here
- `debugging-and-error-recovery` — skills/ci-cd-and-automation/SKILL.md:189 — used here
- `Preview Deployments` — skills/ci-cd-and-automation/SKILL.md:195 — defined here
- `Feature Flags` — skills/ci-cd-and-automation/SKILL.md:210 — defined here
- `Canary` — skills/ci-cd-and-automation/SKILL.md:216, 227 — defined here
- `A/B tests` — skills/ci-cd-and-automation/SKILL.md:217 — used here
- `Staged Rollouts` — skills/ci-cd-and-automation/SKILL.md:229 — defined here
- `Rollback Plan` — skills/ci-cd-and-automation/SKILL.md:247 — defined here
- `Dependabot` — skills/ci-cd-and-automation/SKILL.md:285 — used here
- `Renovate` — skills/ci-cd-and-automation/SKILL.md:285 — used here
- `Build Cop` — skills/ci-cd-and-automation/SKILL.md:298 — defined here
- `PR Checks` — skills/ci-cd-and-automation/SKILL.md:302 — defined here
- `Branch protection` — skills/ci-cd-and-automation/SKILL.md:306 — defined here
- `Auto-merge` — skills/ci-cd-and-automation/SKILL.md:307 — defined here
- `CI Optimization` — skills/ci-cd-and-automation/SKILL.md:309, 364 — defined here
- `matrix builds` — skills/ci-cd-and-automation/SKILL.md:321 — defined here

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
- Strong conceptual model: "Shift Left" and "Faster is Safer" established as core design tenets.
- Defines an automated agent feedback loop pattern for CI failures: piping compiler/test/linter errors back to agent prompt.
- Explicit definition of the Build Cop role for CI health maintenance.
- Defines 6-level CI optimization hierarchy for slow pipelines (>10 minutes).
- Emphasizes secret hygiene: distinguishing between `.env`, `.env.example`, `.env.test`, CI secrets, and production secrets.

## Context cost
11332 bytes (~2833 tokens). Loads no external references directly.
