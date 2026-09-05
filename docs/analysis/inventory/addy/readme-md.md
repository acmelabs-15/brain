---
package: addy
path: README.md
type: doc
bytes: 25223
unit: inv-addy-34
deprecated: false
aliases: []
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# README.md

## Purpose — required, verbatim
> "Skills encode the workflows, quality gates, and best practices that senior engineers use when building software. These ones are packaged so AI agents follow them consistently across every phase of development." — README.md:5

## Design intent — required
Root documentation, catalog, and architectural overview for the agent-skills repository. It organizes 24 engineering lifecycle skills and 1 meta-skill across six sequential development phases (Define, Plan, Build, Verify, Review, Ship), maps 9 slash commands to their lifecycle intents and core principles, documents multi-agent installation pathways (native plugins and open skills CLI across 70+ environments), catalogs 4 specialist personas and 7 shared reference checklists, and defines the structural anatomy and verification discipline of production-grade agent skills.

## Phase — required
cross-phase

## Inputs — required
Developer project context, lifecycle task requests, and target AI agent/tool environments (Claude Code, Cursor, Antigravity CLI, Gemini CLI, Windsurf, OpenCode, GitHub Copilot, Kiro, Codex, Command Code).

## Outputs — required
none

## Invokes — required
- doc docs/cursor-setup.md — README.md:103
- doc docs/antigravity-setup.md — README.md:110
- doc docs/gemini-cli-setup.md — README.md:130
- doc docs/windsurf-setup.md — README.md:149
- doc docs/opencode-setup.md — README.md:158
- doc docs/copilot-setup.md — README.md:165
- doc docs/codex-setup.md — README.md:184
- doc docs/commandcode-setup.md — README.md:199
- doc docs/getting-started.md — README.md:206
- doc docs/adoption-guide.md — README.md:216
- skill skills/using-agent-skills/SKILL.md — README.md:228
- skill skills/interview-me/SKILL.md — README.md:234
- skill skills/idea-refine/SKILL.md — README.md:235
- skill skills/spec-driven-development/SKILL.md — README.md:236
- skill skills/constraint-driven-development/SKILL.md — README.md:237
- skill skills/planning-and-task-breakdown/SKILL.md — README.md:243
- skill skills/incremental-implementation/SKILL.md — README.md:249
- skill skills/test-driven-development/SKILL.md — README.md:250
- skill skills/context-engineering/SKILL.md — README.md:251
- skill skills/source-driven-development/SKILL.md — README.md:252
- skill skills/doubt-driven-development/SKILL.md — README.md:253
- skill skills/frontend-ui-engineering/SKILL.md — README.md:254
- skill skills/api-and-interface-design/SKILL.md — README.md:255
- skill skills/browser-testing-with-devtools/SKILL.md — README.md:261
- skill skills/debugging-and-error-recovery/SKILL.md — README.md:262
- skill skills/code-review-and-quality/SKILL.md — README.md:268
- skill skills/code-simplification/SKILL.md — README.md:269
- skill skills/security-and-hardening/SKILL.md — README.md:270
- skill skills/performance-optimization/SKILL.md — README.md:271
- skill skills/git-workflow-and-versioning/SKILL.md — README.md:277
- skill skills/ci-cd-and-automation/SKILL.md — README.md:278
- skill skills/deprecation-and-migration/SKILL.md — README.md:279
- skill skills/documentation-and-adrs/SKILL.md — README.md:280
- skill skills/observability-and-instrumentation/SKILL.md — README.md:281
- skill skills/shipping-and-launch/SKILL.md — README.md:282
- agent agents/code-reviewer.md — README.md:292
- agent agents/test-engineer.md — README.md:293
- agent agents/security-auditor.md — README.md:294
- agent agents/web-performance-auditor.md — README.md:295
- doc docs/agents.md — README.md:297
- reference references/definition-of-done.md — README.md:307
- reference references/testing-patterns.md — README.md:308
- reference references/security-checklist.md — README.md:309
- reference references/performance-checklist.md — README.md:310
- reference references/accessibility-checklist.md — README.md:311
- reference references/observability-checklist.md — README.md:312
- reference references/orchestration-patterns.md — README.md:313
- doc docs/comparison.md — README.md:402
- doc docs/skill-anatomy.md — README.md:410
- doc CONTRIBUTING.md — README.md:410

## Invoked by — required
- doc CONTRIBUTING.md — CONTRIBUTING.md:13
- doc docs/adoption-guide.md — docs/adoption-guide.md:5
- doc docs/cursor-setup.md — docs/cursor-setup.md:3
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:111
- reference references/orchestration-patterns.md — references/orchestration-patterns.md:326

## Concepts named — required, verbatim
- `Agent Skills` — README.md:1 — defined here
- `DEFINE` — README.md:12 — defined here
- `PLAN` — README.md:12 — defined here
- `BUILD` — README.md:12 — defined here
- `VERIFY` — README.md:12 — defined here
- `REVIEW` — README.md:12 — defined here
- `SHIP` — README.md:12 — defined here
- `/spec` — README.md:17, 28 — defined here
- `/plan` — README.md:17, 29 — defined here
- `/build` — README.md:17, 30 — defined here
- `/test` — README.md:17, 31 — defined here
- `/review` — README.md:17, 33 — defined here
- `/ship` — README.md:17, 36 — defined here
- `/constraints` — README.md:32 — defined here
- `/webperf` — README.md:34 — defined here
- `/code-simplify` — README.md:35 — defined here
- `/build auto` — README.md:38 — defined here
- `PRD` — README.md:15, 236 — used here
- `skills CLI` — README.md:46 — used here
- `using-agent-skills` — README.md:222, 228 — used here
- `interview-me` — README.md:57, 234 — used here
- `idea-refine` — README.md:235 — used here
- `spec-driven-development` — README.md:184, 196, 236 — used here
- `constraint-driven-development` — README.md:237 — used here
- `planning-and-task-breakdown` — README.md:243 — used here
- `incremental-implementation` — README.md:249 — used here
- `test-driven-development` — README.md:58, 250 — used here
- `context-engineering` — README.md:251 — used here
- `source-driven-development` — README.md:252 — used here
- `doubt-driven-development` — README.md:253 — used here
- `frontend-ui-engineering` — README.md:40, 254 — used here
- `api-and-interface-design` — README.md:40, 255 — used here
- `browser-testing-with-devtools` — README.md:261 — used here
- `debugging-and-error-recovery` — README.md:262 — used here
- `code-review-and-quality` — README.md:56, 268 — used here
- `code-simplification` — README.md:269 — used here
- `security-and-hardening` — README.md:270 — used here
- `performance-optimization` — README.md:271 — used here
- `git-workflow-and-versioning` — README.md:277 — used here
- `ci-cd-and-automation` — README.md:278 — used here
- `deprecation-and-migration` — README.md:279 — used here
- `documentation-and-adrs` — README.md:280 — used here
- `observability-and-instrumentation` — README.md:281 — used here
- `shipping-and-launch` — README.md:282 — used here
- `code-reviewer` — README.md:292 — used here
- `test-engineer` — README.md:293 — used here
- `security-auditor` — README.md:294 — used here
- `web-performance-auditor` — README.md:295 — used here
- `definition-of-done.md` — README.md:307 — used here
- `testing-patterns.md` — README.md:308 — used here
- `security-checklist.md` — README.md:309 — used here
- `performance-checklist.md` — README.md:310 — used here
- `accessibility-checklist.md` — README.md:311 — used here
- `observability-checklist.md` — README.md:312 — used here
- `orchestration-patterns.md` — README.md:313 — used here
- `SKILL.md` — README.md:191, 323, 344 — used here
- `anti-rationalization` — README.md:342 — defined here
- `Progressive disclosure` — README.md:344 — defined here
- `Hyrum's Law` — README.md:255, 396 — used here
- `Beyonce Rule` — README.md:250, 396 — used here
- `test pyramid` — README.md:250, 396 — used here
- `Chesterton's Fence` — README.md:269, 396 — used here
- `trunk-based development` — README.md:277, 396 — used here
- `Shift Left` — README.md:278, 396 — used here
- `RED metrics` — README.md:281 — used here
- `Architecture Decision Records` — README.md:280 — used here
- `One-Version Rule` — README.md:255 — used here
- `WCAG 2.1 AA` — README.md:254 — used here
- `Core Web Vitals` — README.md:271, 295, 310 — used here
- `OWASP Top 10` — README.md:270, 309 — used here
- `OpenTelemetry` — README.md:281 — used here

## Structure
- # Agent Skills
- ## Commands
- ## Quick Start
- ## Adoption
- ## All 24 Skills
- ### Meta - Discover which skill applies
- ### Define - Clarify what to build
- ### Plan - Break it down
- ### Build - Write the code
- ### Verify - Prove it works
- ### Review - Quality gates before merge
- ### Ship - Deploy with confidence
- ## Agent Personas
- ## Reference Checklists
- ## How Skills Work
- ## Project Structure
- ## Why Agent Skills?
- ## How it compares
- ## Contributing
- ## Team
- ## License

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · README.md:220 · Section header states "## All 24 Skills" but line 222 states "The pack includes 25 skills total — 24 lifecycle skills plus the `using-agent-skills` meta-skill", line 49 references "install all 25 skills", and lines 352-377 catalog 25 skills.
- `doc-drift` · README.md:381-383 · Project structure tree lists `.claude/commands/ (8 slash commands)`, `.gemini/commands/ (8 slash commands)`, and `commands/ (8 slash commands)`, but commands table on lines 27-36 catalogs 9 distinct slash command entries.
- `doc-drift` · README.md:65-66 · Documents an unresolved portability gap (issue #361) where per-skill installation via `npx` fails to bundle the shared `references/` directory.

## Observations
- Grounded in Google engineering culture: directly embeds principles from Software Engineering at Google and Google's engineering practices guide into automated agent constraints.
- Defines standard skill schema consisting of Overview, When to Use, Process, Rationalizations, Red Flags, and Verification.
- Distinguishes specialist personas from skills, positioning personas as advisory review roles rather than autonomous executors.

## Context cost
25223 bytes, ~5900 tokens. Read during repository onboarding and tool setup.
