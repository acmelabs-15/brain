# Work Unit Report: `inv-addy-5`

---
unit: inv-addy-5
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-5 Synthesis Report

## Executive Summary

Work unit `inv-addy-5` contains 6 files totaling 41,922 bytes in the `addy` (`addyosmani/agent-skills`) repository:
- Two specialized agent personas: `agents/web-performance-auditor.md` (12,278 bytes) and `agents/security-auditor.md` (4,992 bytes).
- Three IDE/tool integration setup guides: `docs/windsurf-setup.md` (1,471 bytes), `docs/commandcode-setup.md` (2,437 bytes), and `docs/opencode-setup.md` (9,547 bytes).
- One comprehensive adoption guide: `docs/adoption-guide.md` (11,197 bytes).

All 6 files were read in full (line 1 to end), all cross-references checked against the filesystem with `ls`/path validation, all validation scripts and tests in `sources/addy/scripts/` executed and verified with Bun (100% pass rate), and all defects documented with exact `path:line` citations.

---

## 1. Files Assigned & Coverage

- [x] `agents/web-performance-auditor.md` (12,278 bytes, 185 lines) — agent persona
- [x] `agents/security-auditor.md` (4,992 bytes, 113 lines) — agent persona
- [x] `docs/windsurf-setup.md` (1,471 bytes, 49 lines) — tool setup guide
- [x] `docs/commandcode-setup.md` (2,437 bytes, 70 lines) — tool setup guide
- [x] `docs/opencode-setup.md` (9,547 bytes, 260 lines) — tool setup guide
- [x] `docs/adoption-guide.md` (11,197 bytes, 130 lines) — lifecycle adoption strategy

Total source size: 41,922 bytes (~10,480 tokens).

---

## 2. Scripts Executed & Verification Results

All scripts in `sources/addy/scripts/` were executed using Bun from the `sources/addy` directory:

| Script / Test File | Command | Exit Code | Result Summary |
|---|---|---|---|
| `scripts/validate-skills.js` | `bun scripts/validate-skills.js` | `0` | 25 skills checked — 0 error(s), 0 warning(s) — PASSED |
| `scripts/validate-commands.js` | `bun scripts/validate-commands.js` | `0` | 9 commands checked — 0 error(s) — PASSED |
| `scripts/validate-reference-links.js` | `bun scripts/validate-reference-links.js` | `0` | 25 skills checked — 0 error(s) — PASSED |
| `scripts/validate-artifact-paths.js` | `bun scripts/validate-artifact-paths.js` | `0` | 7 files checked (including `docs/adoption-guide.md`) — 0 error(s) — PASSED |
| `scripts/validate-versions.js` | `bun scripts/validate-versions.js` | `0` | All plugin manifests use version 0.6.8 |
| `scripts/validate-artifact-paths-test.js` | `bun test ./scripts/validate-artifact-paths-test.js` | `0` | 6 pass, 0 fail |
| `scripts/validate-commands-test.js` | `bun test ./scripts/validate-commands-test.js` | `0` | 6 pass, 0 fail |
| `scripts/validate-reference-links-test.js` | `bun test ./scripts/validate-reference-links-test.js` | `0` | 7 pass, 0 fail |
| `scripts/validate-versions-test.js` | `bun test ./scripts/validate-versions-test.js` | `0` | 1 pass, 0 fail |
| `scripts/lib/skill-lint-test.js` | `bun test ./scripts/lib/skill-lint-test.js` | `0` | 8 pass, 0 fail |
| `scripts/run-evals-test.js` | `bun test ./scripts/run-evals-test.js` | `0` | 15 pass, 0 fail |

Total test assertions: 43 unit tests passed across 6 test suites with 0 failures.

---

## 3. Comprehensive Inventory Entries

### Entry 1: `docs/adoption-guide.md`

```markdown
---
package: addy
path: docs/adoption-guide.md
type: doc
bytes: 11197
unit: inv-addy-5
---

# docs/adoption-guide.md

## Purpose — required, verbatim
> "How to roll out agent-skills depends heavily on where your codebase is in its life. A greenfield project can adopt the full lifecycle from commit one. A codebase with years of history needs an incremental path that respects what already exists, its conventions, its undocumented decisions, and its lack of test coverage in places you'd rather not touch blind." — docs/adoption-guide.md:3

## Design intent — required
A strategic architectural guide providing distinct rollout playbooks for greenfield (day-one end-to-end lifecycle adoption) versus brownfield (verification-first, 4-phase risk-mitigated rollout) codebases. Solves the problem of agent-induced regression risk in legacy systems by enforcing a read-only context phase, characterization tests before modifications (Beyonce Rule), Chesterton's Fence awareness, and strict contract boundaries at legacy seams (Hyrum's Law), while guiding both environments toward a converged steady state (`/spec → /plan → /build → /review → /ship`).

## Phase — required
`cross-phase` (lifecycle adoption strategy)

## Inputs — required
- Codebase maturity indicators: age of codebase, test coverage, convention documentation status, team habits, blast radius risk (docs/adoption-guide.md:11-18)
- Project rules file (`CLAUDE.md`, `.cursorrules`, etc.) (docs/adoption-guide.md:32, 81)
- Core slash commands (`/spec`, `/plan`, `/build`, `/review`, `/ship`) (docs/adoption-guide.md:38-44, 98, 120)
- Skill catalog (docs/adoption-guide.md:5, 57-63, 77-107)

## Outputs — required
- Adoption roadmaps:
  - Greenfield Path A: Day 0 Install → Day 0 Define before build → Always-on baseline → Add as project grows (docs/adoption-guide.md:24-64)
  - Brownfield Path B: Phase 1 Context & read-only → Phase 2 Tests before change → Phase 3 New work full lifecycle → Phase 4 Pay down, deprecate, observe (docs/adoption-guide.md:73-107)
- Artifact patterns: `SPEC.md`, `tasks/plan.md`, `tasks/` directory, ADRs, characterization tests (docs/adoption-guide.md:39, 40, 46, 53, 90)

## Invokes — required
- doc getting-started.md — docs/adoption-guide.md:5, 30
- doc ../README.md#all-24-skills — docs/adoption-guide.md:5
- skill using-agent-skills — docs/adoption-guide.md:31, 68, 124
- skill context-engineering — docs/adoption-guide.md:32, 81, 112, 124
- command /spec — docs/adoption-guide.md:39, 67, 98, 120, 124
- skill spec-driven-development — docs/adoption-guide.md:39
- command /plan — docs/adoption-guide.md:40, 98, 120
- skill planning-and-task-breakdown — docs/adoption-guide.md:40
- command /build — docs/adoption-guide.md:41, 46, 98, 120
- skill incremental-implementation — docs/adoption-guide.md:41
- skill test-driven-development — docs/adoption-guide.md:41, 50, 90
- command /review — docs/adoption-guide.md:42, 98, 120
- skill code-review-and-quality — docs/adoption-guide.md:42, 82
- command /ship — docs/adoption-guide.md:43, 120
- skill shipping-and-launch — docs/adoption-guide.md:43, 62
- skill git-workflow-and-versioning — docs/adoption-guide.md:51, 92
- skill security-and-hardening — docs/adoption-guide.md:52, 100
- skill documentation-and-adrs — docs/adoption-guide.md:53
- skill api-and-interface-design — docs/adoption-guide.md:59, 99
- skill frontend-ui-engineering — docs/adoption-guide.md:60
- skill browser-testing-with-devtools — docs/adoption-guide.md:60
- skill ci-cd-and-automation — docs/adoption-guide.md:61
- skill observability-and-instrumentation — docs/adoption-guide.md:62, 105
- skill performance-optimization — docs/adoption-guide.md:63, 106
- skill debugging-and-error-recovery — docs/adoption-guide.md:83
- skill doubt-driven-development — docs/adoption-guide.md:84
- skill code-simplification — docs/adoption-guide.md:91
- skill deprecation-and-migration — docs/adoption-guide.md:104

## Invoked by — required
- doc README.md — README.md:216
- doc docs/getting-started.md — docs/getting-started.md:44
- script scripts/validate-artifact-paths.js — scripts/validate-artifact-paths.js:51

## Concepts named — required, verbatim
- `Greenfield` — docs/adoption-guide.md:1, 3, 11, 24, 65, 122 — defined here | used here
- `Brownfield` — docs/adoption-guide.md:1, 3, 11, 73, 108, 122 — defined here | used here
- `Day 0 | Install and wire up` — docs/adoption-guide.md:28 — defined here
- `Day 0 | Define before you build` — docs/adoption-guide.md:34 — defined here
- `From the start, treat these as always-on` — docs/adoption-guide.md:48 — defined here
- `Add as the project grows` — docs/adoption-guide.md:55 — defined here
- `Greenfield anti-patterns` — docs/adoption-guide.md:65 — defined here
- `Phase 1 | Context and read-only skills` — docs/adoption-guide.md:77 — defined here
- `Phase 2 | Tests before change` — docs/adoption-guide.md:86 — defined here
- `Phase 3 | New work runs the full lifecycle` — docs/adoption-guide.md:94 — defined here
- `Phase 4 | Pay down, deprecate, observe` — docs/adoption-guide.md:102 — defined here
- `Brownfield anti-patterns` — docs/adoption-guide.md:108 — defined here
- `The two paths converge` — docs/adoption-guide.md:118 — defined here
- `Characterization tests` — docs/adoption-guide.md:90, 91, 111, 120, 127 — defined here | used here
- `Beyonce Rule` — docs/adoption-guide.md:90 — used here
- `Chesterton's Fence` — docs/adoption-guide.md:91, 113 — used here
- `Hyrum's Law` — docs/adoption-guide.md:99 — used here
- `Two-speed adoption` — docs/adoption-guide.md:96, 129 — defined here
- `Five-axis review` — docs/adoption-guide.md:82 — used here
- `Five-step triage` — docs/adoption-guide.md:83 — used here
- `Atomic commits` — docs/adoption-guide.md:51, 92 — used here
- `~100-line changes` — docs/adoption-guide.md:51, 92 — used here
- `ADR` — docs/adoption-guide.md:53 — used here
- `Living documents` — docs/adoption-guide.md:46 — used here
- `SPEC.md` — docs/adoption-guide.md:39, 46 — used here
- `tasks/plan.md` — docs/adoption-guide.md:40 — used here
- `tasks/` — docs/adoption-guide.md:46 — used here
- `RED metrics` — docs/adoption-guide.md:105 — used here
- `Structured logging` — docs/adoption-guide.md:69, 105 — used here
- `Code-as-liability` — docs/adoption-guide.md:104 — used here
- `Compulsory vs. advisory deprecation` — docs/adoption-guide.md:104 — used here
- `Zombie-code removal` — docs/adoption-guide.md:104 — used here
- `Measure-first rule` — docs/adoption-guide.md:106 — used here
- `Big bang adoption` — docs/adoption-guide.md:110 — defined here
- `Ratcheting` — docs/adoption-guide.md:114 — defined here
- `Critical` — docs/adoption-guide.md:82 — used here
- `Required` — docs/adoption-guide.md:82 — used here
- `/build auto` — docs/adoption-guide.md:46 — used here

## Structure
- `# Adoption Guide: New Projects vs. Established Codebases` — docs/adoption-guide.md:1
- `## Which path are you on?` — docs/adoption-guide.md:9
- `## Path A | Greenfield: full lifecycle from day one` — docs/adoption-guide.md:24
- `### Day 0 | Install and wire up` — docs/adoption-guide.md:28
- `### Day 0 | Define before you build` — docs/adoption-guide.md:34
- `### From the start, treat these as always-on` — docs/adoption-guide.md:48
- `### Add as the project grows` — docs/adoption-guide.md:55
- `### Greenfield anti-patterns` — docs/adoption-guide.md:65
- `## Path B | Brownfield: incremental, verification-first` — docs/adoption-guide.md:73
- `### Phase 1 | Context and read-only skills` — docs/adoption-guide.md:77
- `### Phase 2 | Tests before change` — docs/adoption-guide.md:86
- `### Phase 3 | New work runs the full lifecycle` — docs/adoption-guide.md:94
- `### Phase 4 | Pay down, deprecate, observe` — docs/adoption-guide.md:102
- `### Brownfield anti-patterns` — docs/adoption-guide.md:108
- `## The two paths converge` — docs/adoption-guide.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift`: `docs/adoption-guide.md:5` links to `../README.md#all-24-skills`, whereas `docs/adoption-guide.md:68` explicitly warns against "Loading all 25 skills into every session" (which matches the 25 skill directories actually present under `sources/addy/skills/`).

## Observations
- Introduces the "Two-Speed Adoption" paradigm: established codebases maintain legacy systems under a read-only / characterization-test regime, while new feature development concurrently executes the full 5-stage lifecycle.
- Articulates monotonic quality "Ratcheting": adoption succeeds only when each phase permanently locks in enforced quality gates without regression.
- Defines core anti-patterns: "Big Bang" adoption (loading full lifecycle onto legacy code without safety nets) and "Refactoring untested code" (violating the characterization test prerequisite).

## Context cost
- File size: 11,197 bytes (~2,800 tokens).
- Transitive context cost: 0 static prompt overhead (strategy documentation read by developers/orchestrators).
```

---

### Entry 2: `agents/web-performance-auditor.md`

```markdown
---
package: addy
path: agents/web-performance-auditor.md
type: agent
bytes: 12278
unit: inv-addy-5
---

# agents/web-performance-auditor.md

## Purpose — required, verbatim
> "Web performance engineer focused on Core Web Vitals, loading, rendering, and network optimization. Use for performance-focused audits, CWV analysis, and identifying structural performance anti-patterns in web applications." — agents/web-performance-auditor.md:3

## Design intent — required
Specialized subagent persona for web performance engineering that bridges static structural code analysis and empirical tooling (Lighthouse, CrUX, PageSpeed Insights, Chrome DevTools traces/MCP). Enforces a strict Metric-Honesty Rule against LLM metric hallucination (marking unmeasured metrics as `not measured` and static findings as `potential impact`), provides framework-aware audits (React, Vue, Svelte, Angular, Next.js, Astro), audits 4 core areas (Core Web Vitals, Loading, Rendering/JS, Network) including AI-generated anti-patterns, and standardizes severity classifications and scorecards without adding noise to general non-web code reviews.

## Phase — required
`cross-phase` (specialist audit outside the standard sequential lifecycle; invoked via `/webperf` or directly)

## Inputs — required
- Code files, components, or diff under review
- Performance tool artifacts (optional for Quick mode, required for Deep mode):
  - Lighthouse JSON report (`npx lighthouse <url> --output json` or Chrome DevTools MCP CLI)
  - PageSpeed Insights JSON (`pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed`)
  - CrUX API response (`CRUX_API_KEY` or `GOOGLE_API_KEY`)
  - DevTools performance trace (Perfetto JSON)
  - Live capture data via Chrome DevTools MCP server (`lighthouse_audit`, `performance_start_trace` / `performance_stop_trace`, `performance_analyze_insight`)
- Target URL or page name (when known)
- Expected operating mode (`Quick` or `Deep`)

## Outputs — required
- Web Performance Audit Report (Scorecard with LCP, INP, CLS, Lighthouse score, Source, Target, Status; Summary counts; Ranked Findings with Area, Location, Description, Impact, Recommendation; Positive Observations; Recommendations) — agents/web-performance-auditor.md:126-164

## Invokes — required
- skill skills/browser-testing-with-devtools — agents/web-performance-auditor.md:36
- reference references/performance-checklist.md — agents/web-performance-auditor.md:175
- skill skills/performance-optimization/SKILL.md — agents/web-performance-auditor.md:176
- doc docs/agents.md — agents/web-performance-auditor.md:184

## Invoked by — required
- commands/webperf.toml:1, 20
- .claude/commands/webperf.md:2, 21
- .gemini/commands/webperf.toml:1, 20
- docs/agents.md:10, 32, 39
- README.md:34, 295
- CLAUDE.md:11, 13
- docs/getting-started.md:101, 119
- docs/antigravity-setup.md:48, 59
- docs/gemini-cli-setup.md:110, 121
- docs/comparison.md:23, 54
- agents/code-reviewer.md:184 (referenced as anti-pattern to delegate directly)

## Concepts named — required, verbatim
- `web-performance-auditor` — agents/web-performance-auditor.md:2, 180 — defined here
- `Web Performance Auditor` — agents/web-performance-auditor.md:6 — defined here
- `Web Performance Engineer` — agents/web-performance-auditor.md:8 — defined here
- `Operating Modes` — agents/web-performance-auditor.md:10 — defined here
- `Quick mode` — agents/web-performance-auditor.md:12, 178 — defined here
- `potential impact` — agents/web-performance-auditor.md:14, 47, 153, 170 — defined here
- `not measured` — agents/web-performance-auditor.md:14, 27, 46, 133, 134, 135, 136, 168 — defined here
- `Deep mode` — agents/web-performance-auditor.md:16, 178 — defined here
- `Lighthouse JSON report` — agents/web-performance-auditor.md:20 — used here
- `Chrome DevTools MCP CLI` — agents/web-performance-auditor.md:20, 25, 37 — used here
- `PageSpeed Insights JSON` — agents/web-performance-auditor.md:21, 35 — used here
- `PageSpeed Insights API` — agents/web-performance-auditor.md:21 — used here
- `lighthouseResult` — agents/web-performance-auditor.md:20, 21 — used here
- `loadingExperience` — agents/web-performance-auditor.md:21 — used here
- `CrUX field data` — agents/web-performance-auditor.md:21 — used here
- `CrUX API response` — agents/web-performance-auditor.md:22, 34 — used here
- `DevTools performance trace` — agents/web-performance-auditor.md:23, 138 — used here
- `Perfetto JSON` — agents/web-performance-auditor.md:23 — used here
- `Chrome DevTools MCP` — agents/web-performance-auditor.md:20, 23, 24, 25, 36, 37 — used here
- `Tooling` — agents/web-performance-auditor.md:29 — defined here
- `Metric-Honesty Rule` — agents/web-performance-auditor.md:41 — defined here
- `Field (CrUX)` — agents/web-performance-auditor.md:49, 133, 134, 135 — defined here
- `Lab (Lighthouse)` — agents/web-performance-auditor.md:49, 133, 134, 135, 136 — defined here
- `Trace (DevTools)` — agents/web-performance-auditor.md:49, 133, 134, 135 — defined here
- `Review Scope` — agents/web-performance-auditor.md:53 — defined here
- `Core Web Vitals` — agents/web-performance-auditor.md:3, 8, 57, 118, 119, 150, 173 — used here
- `LCP` — agents/web-performance-auditor.md:36, 44, 59, 60, 66, 73, 133, 153 — used here
- `fetchpriority="high"` — agents/web-performance-auditor.md:60, 73 — used here
- `layout shifts` — agents/web-performance-auditor.md:36, 61 — used here
- `long tasks` — agents/web-performance-auditor.md:63 — used here
- `INP` — agents/web-performance-auditor.md:36, 44, 63, 66, 67, 134 — used here
- `scheduler.yield()` — agents/web-performance-auditor.md:65 — used here
- `yieldToMain` — agents/web-performance-auditor.md:65 — used here
- `soft navigation` — agents/web-performance-auditor.md:66 — used here
- `Long Animation Frames (LoAF)` — agents/web-performance-auditor.md:67 — used here
- `Loading` — agents/web-performance-auditor.md:69, 150 — defined here
- `TTFB` — agents/web-performance-auditor.md:71 — used here
- `preconnect` — agents/web-performance-auditor.md:72 — used here
- `dns-prefetch` — agents/web-performance-auditor.md:72 — used here
- `Speculation Rules API` — agents/web-performance-auditor.md:74 — used here
- `prerender` — agents/web-performance-auditor.md:74 — used here
- `prefetch` — agents/web-performance-auditor.md:74 — used here
- `font-display: swap` — agents/web-performance-auditor.md:75 — used here
- `unicode-range` — agents/web-performance-auditor.md:76 — used here
- `Rendering / JavaScript` — agents/web-performance-auditor.md:83 — defined here
- `layout thrashing` — agents/web-performance-auditor.md:88 — used here
- `content-visibility: auto` — agents/web-performance-auditor.md:89 — used here
- `View Transitions API` — agents/web-performance-auditor.md:90 — used here
- `bfcache` — agents/web-performance-auditor.md:91 — used here
- `AI-generated patterns` — agents/web-performance-auditor.md:92, 109, 177 — defined here
- `Network` — agents/web-performance-auditor.md:101, 150, 177 — defined here
- `Severity Classification` — agents/web-performance-auditor.md:114 — defined here
- `Critical` — agents/web-performance-auditor.md:118, 142, 149 — defined here
- `High` — agents/web-performance-auditor.md:119, 143, 156 — defined here
- `Medium` — agents/web-performance-auditor.md:120, 144 — defined here
- `Low` — agents/web-performance-auditor.md:121, 145 — defined here
- `Info` — agents/web-performance-auditor.md:122 — defined here
- `Web Performance Audit` — agents/web-performance-auditor.md:127 — defined here
- `Scorecard` — agents/web-performance-auditor.md:14, 27, 46, 49, 129, 168, 169 — defined here
- `Positive Observations` — agents/web-performance-auditor.md:159 — defined here
- `Recommendations` — agents/web-performance-auditor.md:162 — defined here
- `CLS` — agents/web-performance-auditor.md:44, 61, 90, 135 — used here
- `references/performance-checklist.md` — agents/web-performance-auditor.md:175 — used here
- `skills/performance-optimization/SKILL.md` — agents/web-performance-auditor.md:176 — used here
- `skills/browser-testing-with-devtools` — agents/web-performance-auditor.md:36 — used here
- `/webperf` — agents/web-performance-auditor.md:183 — used here
- `/ship` — agents/web-performance-auditor.md:183 — used here
- `code-reviewer` — agents/web-performance-auditor.md:184 — used here

## Structure
- `---` (frontmatter: name, description) — agents/web-performance-auditor.md:1-4
- `# Web Performance Auditor` — agents/web-performance-auditor.md:6
- `## Operating Modes` — agents/web-performance-auditor.md:10
- `### Quick mode (default — no tool artifacts provided)` — agents/web-performance-auditor.md:12
- `### Deep mode (activated when tool artifacts or live measurement are available)` — agents/web-performance-auditor.md:16
- `## Tooling` — agents/web-performance-auditor.md:29
- `## Metric-Honesty Rule` — agents/web-performance-auditor.md:41
- `## Review Scope` — agents/web-performance-auditor.md:53
- `### 1. Core Web Vitals` — agents/web-performance-auditor.md:57
- `### 2. Loading` — agents/web-performance-auditor.md:69
- `### 3. Rendering / JavaScript` — agents/web-performance-auditor.md:83
- `### 4. Network` — agents/web-performance-auditor.md:101
- `## Severity Classification` — agents/web-performance-auditor.md:114
- `## Output Format` — agents/web-performance-auditor.md:124
- `### Scorecard` (in template) — agents/web-performance-auditor.md:129
- `### Summary` (in template) — agents/web-performance-auditor.md:141
- `### Findings` (in template) — agents/web-performance-auditor.md:147
- `### Positive Observations` (in template) — agents/web-performance-auditor.md:159
- `### Recommendations` (in template) — agents/web-performance-auditor.md:162
- `## Rules` — agents/web-performance-auditor.md:166
- `## Composition` — agents/web-performance-auditor.md:180

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` / `cross-file-contradiction`: `docs/comparison.md:54` states that `/ship` fans out to four personas (`code-reviewer`, `security-auditor`, `test-engineer`, `web-performance-auditor`), directly contradicting `agents/web-performance-auditor.md:183`, `docs/agents.md:44`, `references/orchestration-patterns.md:54`, and `.claude/commands/ship.md:15`, which all specify that `/ship` fans out to only three personas (`code-reviewer`, `security-auditor`, `test-engineer`) and explicitly excludes `web-performance-auditor` because performance audits are specific to web apps.
- `doc-drift`: `references/orchestration-patterns.md:123` lists plugin subagents in `agents/` as `code-reviewer.md`, `security-auditor.md`, and `test-engineer.md`, omitting `web-performance-auditor.md`.
- `cross-file-contradiction`: Severity classification (`Critical`, `High`, `Medium`, `Low`, `Info` at lines 116-122) contradicts `code-reviewer.md:51-57` (`Critical`, `Required`, `Optional`, `Nit`) and `.claude/commands/review.md:15` (`Critical`, `Important`, `Suggestion`), though it matches `security-auditor.md:59-65`.

## Observations
- Anti-hallucination guardrail ("Metric-Honesty Rule"): Explicitly forbids synthesizing or guessing CWV numbers from static source code. In Quick mode, forces `not measured` on the Scorecard and tags findings with `potential impact`.
- Framework-aware heuristics: Mandates stack identification (React, Vue, Svelte, Angular, Next.js, Astro) and catalogs framework-specific anti-patterns (e.g. `$:` in Svelte, `watchEffect` in Vue, `ChangeDetectionStrategy.Default` in Angular, over-eager `useMemo`/`useEffect` in React).
- AI-generated code antipattern catalog: Explicitly checks for common LLM code-generation defects (state duplication, speculative memoization, sequential awaits, over-fetching data).

## Context cost
- File size: 12,278 bytes (~3,100 tokens).
- Transitive context cost when loaded alongside referenced performance checklist and skill: ~9,600 tokens (38,385 bytes total).
```

---

### Entry 3: `agents/security-auditor.md`

```markdown
---
package: addy
path: agents/security-auditor.md
type: agent
bytes: 4992
unit: inv-addy-5
---

# agents/security-auditor.md

## Purpose — required, verbatim
> "Security engineer focused on vulnerability detection, threat modeling, and secure coding practices. Use for security-focused code review, threat analysis, or hardening recommendations." — agents/security-auditor.md:3

## Design intent — required
Specialized subagent persona for vulnerability detection, practical threat modeling, and secure coding review across 6 core domains (Input Handling, Auth/Authz, Data Protection, Infrastructure, Third-Party Integrations, AI/LLM Features). Enforces focus on exploitable vulnerabilities rather than theoretical risks, mandates proof-of-concept / exploitation scenarios for Critical and High findings, requires STRIDE-based reasoning from trust boundaries, forbids advising disabling security controls as a fix, and serves as an independent parallel reviewer in the pre-launch `/ship` fan-out pipeline.

## Phase — required
`addy:Ship` (and `addy:Review` for direct security-focused passes)

## Inputs — required
- Code diff, modified files, or system component under review
- Threat models, auth/authz configurations, endpoint definitions, third-party integrations, AI/LLM feature code, dependency manifests

## Outputs — required
- Security Audit Report (Summary with counts of Critical, High, Medium, Low; Findings with Location, Description, Impact, Proof of concept, Recommendation; Positive Observations; Recommendations) — agents/security-auditor.md:70-95

## Invokes — required
- doc docs/agents.md — agents/security-auditor.md:112

## Invoked by — required
- .claude/commands/ship.md:16, 26, 62
- commands/ship.toml:15, 25, 32, 61
- docs/agents.md:8, 30, 44, 65, 110
- CLAUDE.md:11
- AGENTS.md:80
- README.md:294
- docs/getting-started.md:100
- docs/antigravity-setup.md:97
- docs/copilot-setup.md:32, 38, 85
- references/orchestration-patterns.md:23, 54, 123, 137, 160, 166, 230, 247, 304
- agents/code-reviewer.md:101, 102
- agents/test-engineer.md:94
- docs/comparison.md:54, 98

## Concepts named — required, verbatim
- `security-auditor` — agents/security-auditor.md:2, 110 — defined here
- `Security Engineer` — agents/security-auditor.md:8 — defined here
- `Security Auditor` — agents/security-auditor.md:6 — defined here
- `Review Scope` — agents/security-auditor.md:10 — defined here
- `Input Handling` — agents/security-auditor.md:12 — defined here
- `Authentication & Authorization` — agents/security-auditor.md:19 — defined here
- `Data Protection` — agents/security-auditor.md:27 — defined here
- `Infrastructure` — agents/security-auditor.md:34 — defined here
- `Third-Party Integrations` — agents/security-auditor.md:41 — defined here
- `AI / LLM Features` — agents/security-auditor.md:48 — defined here
- `injection vectors` — agents/security-auditor.md:14 — used here
- `SQL` — agents/security-auditor.md:14, 49 — used here
- `NoSQL` — agents/security-auditor.md:14 — used here
- `OS command` — agents/security-auditor.md:14 — used here
- `LDAP` — agents/security-auditor.md:14 — used here
- `XSS` — agents/security-auditor.md:15 — used here
- `IDOR` — agents/security-auditor.md:23 — used here
- `bcrypt` — agents/security-auditor.md:20 — used here
- `scrypt` — agents/security-auditor.md:20 — used here
- `argon2` — agents/security-auditor.md:20 — used here
- `PII` — agents/security-auditor.md:31 — used here
- `CSP` — agents/security-auditor.md:35 — used here
- `HSTS` — agents/security-auditor.md:35 — used here
- `X-Frame-Options` — agents/security-auditor.md:35 — used here
- `CORS` — agents/security-auditor.md:36 — used here
- `PKCE` — agents/security-auditor.md:45 — used here
- `SSRF` — agents/security-auditor.md:46 — used here
- `prompt injection` — agents/security-auditor.md:50 — used here
- `excessive agency` — agents/security-auditor.md:52 — used here
- `unbounded consumption` — agents/security-auditor.md:53 — used here
- `OWASP Top 10 for LLM Applications` — agents/security-auditor.md:55 — used here
- `OWASP Top 10` — agents/security-auditor.md:103 — used here
- `LLM Top 10` — agents/security-auditor.md:103 — used here
- `STRIDE` — agents/security-auditor.md:106 — used here
- `Severity Classification` — agents/security-auditor.md:57 — defined here
- `Critical` — agents/security-auditor.md:61, 73, 80, 101 — defined here
- `High` — agents/security-auditor.md:62, 74, 87, 101 — defined here
- `Medium` — agents/security-auditor.md:63, 75 — defined here
- `Low` — agents/security-auditor.md:64, 76 — defined here
- `Info` — agents/security-auditor.md:65 — defined here
- `Security Audit Report` — agents/security-auditor.md:70 — defined here
- `Proof of concept` — agents/security-auditor.md:84, 101 — defined here
- `Positive Observations` — agents/security-auditor.md:90 — defined here
- `Recommendations` — agents/security-auditor.md:93 — defined here
- `trust boundaries` — agents/security-auditor.md:106 — used here
- `CVEs` — agents/security-auditor.md:104 — used here
- `supply-chain risk` — agents/security-auditor.md:104 — used here
- `code-reviewer` — agents/security-auditor.md:111, 112 — used here
- `test-engineer` — agents/security-auditor.md:111 — used here
- `/ship` — agents/security-auditor.md:111 — used here
- `/audit` — agents/security-auditor.md:111 — used here
- `docs/agents.md` — agents/security-auditor.md:112 — used here

## Structure
- `---` (frontmatter: name, description) — agents/security-auditor.md:1-4
- `# Security Auditor` — agents/security-auditor.md:6
- `## Review Scope` — agents/security-auditor.md:10
- `### 1. Input Handling` — agents/security-auditor.md:12
- `### 2. Authentication & Authorization` — agents/security-auditor.md:19
- `### 3. Data Protection` — agents/security-auditor.md:27
- `### 4. Infrastructure` — agents/security-auditor.md:34
- `### 5. Third-Party Integrations` — agents/security-auditor.md:41
- `### 6. AI / LLM Features (if present)` — agents/security-auditor.md:48
- `## Severity Classification` — agents/security-auditor.md:57
- `## Output Format` — agents/security-auditor.md:67
- `### Summary` (in template) — agents/security-auditor.md:72
- `### Findings` (in template) — agents/security-auditor.md:78
- `### Positive Observations` (in template) — agents/security-auditor.md:90
- `### Recommendations` (in template) — agents/security-auditor.md:93
- `## Rules` — agents/security-auditor.md:97
- `## Composition` — agents/security-auditor.md:108

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` / `doc-drift`: Line 111 references "or any future `/audit` command", but no `/audit` command exists in `sources/addy/commands/` or `.claude/commands/`.
- `cross-file-contradiction`: Severity classification (`Critical`, `High`, `Medium`, `Low`, `Info` at lines 59-65) contradicts `code-reviewer.md:51-57` (`Critical`, `Required`, `Optional`, `Nit`) and `.claude/commands/review.md:15` (`Critical`, `Important`, `Suggestion`), although it matches `web-performance-auditor.md:116-122`.

## Observations
- Practical exploitability mandate: Explicitly rejects theoretical nitpicks ("You focus on practical, exploitable issues rather than theoretical risks", line 8) and mandates proof-of-concept / exploit scenarios for Critical and High findings (Rule 3).
- Threat modeling rigor: Mandates starting from trust boundaries and reasoning with STRIDE before enumerating findings (Rule 8).
- Modern AI vulnerability scope: Includes explicit coverage for LLM application vulnerabilities (prompt injection, excessive agency, unbounded consumption, OWASP Top 10 for LLMs).
- Anti-pattern defense: Explicitly forbids advising developers to disable security controls (e.g. disabling CORS or skipping SSL verification) as a fix (Rule 7).

## Context cost
- File size: 4,992 bytes (~1,250 tokens).
- Transitive context cost when loaded alongside `references/security-checklist.md`: ~4,250 tokens (16,873 bytes total).
```

---

### Entry 4: `docs/windsurf-setup.md`

```markdown
---
package: addy
path: docs/windsurf-setup.md
type: doc
bytes: 1471
unit: inv-addy-5
---

# docs/windsurf-setup.md

## Purpose — required, verbatim
> "Windsurf uses `.windsurfrules` for project-specific agent instructions:" — docs/windsurf-setup.md:7 (no explicit purpose statement)

## Design intent — required
Integration guide showing developers how to configure the Windsurf IDE (Codeium) to consume `agent-skills` by concatenating or copying `SKILL.md` markdown files into project-level `.windsurfrules` or global AI rules settings. Solves the problem of adapting a repository-agnostic skill library to Windsurf's rule-based context model while managing limited context windows through selective curation of 2-3 essential skills and on-demand reference pasting.

## Phase — required
`none`

## Inputs — required
- `skills/test-driven-development/SKILL.md` — docs/windsurf-setup.md:11, 33
- `skills/incremental-implementation/SKILL.md` — docs/windsurf-setup.md:13, 37
- `skills/code-review-and-quality/SKILL.md` — docs/windsurf-setup.md:15, 41
- `skills/security-and-hardening` — docs/windsurf-setup.md:47
- `references/security-checklist.md` — docs/windsurf-setup.md:48

## Outputs — required
- Project rules configuration file `.windsurfrules` (concatenated markdown instructions) — docs/windsurf-setup.md:7-16, 27-42
- Windsurf Global Rules configuration (Settings → AI → Global Rules) — docs/windsurf-setup.md:20-23

## Invokes — required
- skill test-driven-development — docs/windsurf-setup.md:11, 33
- skill incremental-implementation — docs/windsurf-setup.md:13, 37
- skill code-review-and-quality — docs/windsurf-setup.md:15, 41
- skill security-and-hardening — docs/windsurf-setup.md:47
- reference references/security-checklist.md — docs/windsurf-setup.md:48

## Invoked by — required
- README.md:149

## Concepts named — required, verbatim
- `Windsurf` — docs/windsurf-setup.md:1, 7, 20, 22, 27, 46, 48 — used here
- `.windsurfrules` — docs/windsurf-setup.md:7, 11, 12, 13, 14, 15, 27, 30 — defined here | used here
- `Project Rules` — docs/windsurf-setup.md:5 — defined here
- `Global Rules` — docs/windsurf-setup.md:18, 20, 22 — defined here
- `test-driven-development` — docs/windsurf-setup.md:11, 33 — used here
- `incremental-implementation` — docs/windsurf-setup.md:13, 37 — used here
- `code-review-and-quality` — docs/windsurf-setup.md:15, 41 — used here
- `security-and-hardening` — docs/windsurf-setup.md:47 — used here
- `security-checklist.md` — docs/windsurf-setup.md:48 — used here

## Structure
- `# Using agent-skills with Windsurf` — docs/windsurf-setup.md:1
- `## Setup` — docs/windsurf-setup.md:3
- `### Project Rules` — docs/windsurf-setup.md:5
- `### Global Rules` — docs/windsurf-setup.md:18
- `## Recommended Configuration` — docs/windsurf-setup.md:25
- `## Usage Tips` — docs/windsurf-setup.md:44

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Demonstrates purely static rule aggregation: unlike tools with dynamic loaders, Windsurf relies on static concatenation into `.windsurfrules`.
- Recommends limiting `.windsurfrules` to 2-3 essential skills (`test-driven-development`, `incremental-implementation`, `code-review-and-quality`) to prevent context window saturation (docs/windsurf-setup.md:27, 46).
- Recommends pasting situational skills (e.g. `security-and-hardening`) and checklists (`references/security-checklist.md`) directly into chat when relevant tasks arise (docs/windsurf-setup.md:47-48).

## Context cost
- File size: 1,471 bytes (~370 tokens).
- Transitive context cost: If the 3 recommended skills are concatenated into `.windsurfrules`, the static context overhead is ~46.5 KB (~11,600 tokens) loaded into every agent turn.
```

---

### Entry 5: `docs/commandcode-setup.md`

```markdown
---
package: addy
path: docs/commandcode-setup.md
type: doc
bytes: 2437
unit: inv-addy-5
---

# docs/commandcode-setup.md

## Purpose — required, verbatim
> "[Command Code](https://commandcode.ai) has a native skills system. The built-in `cmd skills` command clones a GitHub repo, recursively discovers every `SKILL.md`, and installs the ones you pick." — docs/commandcode-setup.md:3

## Design intent — required
Integration guide documenting how Command Code's native skill management CLI (`cmd skills`) discovers, installs, updates, and executes skills from `addyosmani/agent-skills` across project (`.commandcode/skills/`) and user/global (`~/.commandcode/skills/`) scopes, as well as cross-compatibility with `.agents/skills/`. Solves the distribution and discovery problem by mapping installed skills directly to TUI slash menu items (`/[skill]`).

## Phase — required
`none`

## Inputs — required
- GitHub repository `addyosmani/agent-skills` — docs/commandcode-setup.md:12, 20, 26, 32, 33, 34
- `skills/spec-driven-development` — docs/commandcode-setup.md:20, 41, 42, 52
- `skills/interview-me` — docs/commandcode-setup.md:33

## Outputs — required
- Project skills directory `.commandcode/skills/<name>/SKILL.md` — docs/commandcode-setup.md:9, 63, 68
- User/global skills directory `~/.commandcode/skills/<name>/SKILL.md` — docs/commandcode-setup.md:23, 65, 68
- TUI slash commands (e.g. `/spec-driven-development`, `/skills`) — docs/commandcode-setup.md:49-55

## Invokes — required
- skill spec-driven-development — docs/commandcode-setup.md:20, 41, 42, 52
- skill interview-me — docs/commandcode-setup.md:33

## Invoked by — required
- README.md:199

## Concepts named — required, verbatim
- `Command Code` — docs/commandcode-setup.md:1, 3, 5, 59 — used here
- `cmd skills` — docs/commandcode-setup.md:3, 12, 20, 26, 32, 33, 34, 40, 41, 42, 68 — defined here | used here
- `cmd` — docs/commandcode-setup.md:5 — defined here
- `cmdc` — docs/commandcode-setup.md:5 — defined here
- `command-code` — docs/commandcode-setup.md:5 — defined here
- `Project scope` — docs/commandcode-setup.md:9 — defined here
- `User scope` — docs/commandcode-setup.md:23 — defined here
- `spec-driven-development` — docs/commandcode-setup.md:20, 41, 42, 52 — used here
- `interview-me` — docs/commandcode-setup.md:33 — used here
- `TUI slash menu` — docs/commandcode-setup.md:49 — defined here
- `[skill]` — docs/commandcode-setup.md:49, 52 — defined here
- `/skills` — docs/commandcode-setup.md:55 — defined here
- `agents-compat` — docs/commandcode-setup.md:64, 66 — defined here

## Structure
- `# Using agent-skills with Command Code` — docs/commandcode-setup.md:1
- `## Install` — docs/commandcode-setup.md:7
- `## Manage` — docs/commandcode-setup.md:37
- `## Usage` — docs/commandcode-setup.md:47
- `## Where skills live` — docs/commandcode-setup.md:57

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Accurately references the 25 skills in `addyosmani/agent-skills` available for multi-select installation (docs/commandcode-setup.md:15).
- Documents explicit support for cross-harness discovery paths (`.agents/skills/<name>/SKILL.md` and `~/.agents/skills/<name>/SKILL.md`) (docs/commandcode-setup.md:64, 66).
- Supports path-based targeting (`addyosmani/agent-skills/skills/interview-me`), branch pins (`@main`), and update semantics via `--force` (docs/commandcode-setup.md:32-34, 45).
- Every installed skill is mapped automatically to an interactive TUI slash command tagged `[skill]` (docs/commandcode-setup.md:49-53).

## Context cost
- File size: 2,437 bytes (~610 tokens).
- Transitive context cost: On-demand per-command execution model ensures zero static prompt overhead; skills are loaded only when invoked via `/skill-name`.
```

---

### Entry 6: `docs/opencode-setup.md`

```markdown
---
package: addy
path: docs/opencode-setup.md
type: doc
bytes: 9547
unit: inv-addy-5
---

# docs/opencode-setup.md

## Purpose — required, verbatim
> "This guide explains how to use Agent Skills with OpenCode. The reusable assets are the markdown skills in the `skills/` directory; the root `AGENTS.md` file in this repository is repo-scoped and should not be copied into other projects." — docs/opencode-setup.md:3

## Design intent — required
Comprehensive setup and architectural integration guide for OpenCode, establishing two distinct operational models: an agent-driven workflow (automatic skill routing via project-local `AGENTS.md` and the native `skill` tool) and an optional command-driven workflow (`.opencode/commands/*.md`). Clarifies the architectural distinction between repo-scoped configuration (`addyosmani/agent-skills/AGENTS.md`) and reusable skills assets, defines discovery paths across `.opencode`, `.claude`, and `.agents`, provides an end-to-end `AGENTS.md` template with intent-to-skill and lifecycle mapping, and addresses transitive dependency handling for shared `references/`.

## Phase — required
`none`

## Inputs — required
- `skills/` directory / individual skill directories — docs/opencode-setup.md:3, 61, 91
- `skills/spec-driven-development` — docs/opencode-setup.md:33, 68, 116, 160, 168, 209
- `skills/incremental-implementation` — docs/opencode-setup.md:69, 116, 159, 170
- `skills/test-driven-development` — docs/opencode-setup.md:116, 159, 170
- `skills/planning-and-task-breakdown` — docs/opencode-setup.md:117, 169, 193
- `skills/debugging-and-error-recovery` — docs/opencode-setup.md:118, 161, 171, 221
- `skills/code-review-and-quality` — docs/opencode-setup.md:119, 162, 172, 232
- `skills/code-simplification` — docs/opencode-setup.md:120
- `skills/api-and-interface-design` — docs/opencode-setup.md:121
- `skills/frontend-ui-engineering` — docs/opencode-setup.md:122
- `skills/shipping-and-launch` — docs/opencode-setup.md:173
- `references/` directory — docs/opencode-setup.md:45, 250
- `CONTRIBUTING.md#repo-scoped-files` — docs/opencode-setup.md:136
- `AGENTS.md` (root, repo-scoped) — docs/opencode-setup.md:3, 19, 92, 96, 136, 259
- `CLAUDE.md` (root, repo-scoped) — docs/opencode-setup.md:92

## Outputs — required
- Project-local `.opencode/skills/<name>/SKILL.md` — docs/opencode-setup.md:41, 60, 108, 144, 254
- User/global `~/.config/opencode/skills/<name>/SKILL.md` — docs/opencode-setup.md:75, 145, 254
- Cross-compatible paths `.claude/skills/<name>/SKILL.md`, `~/.claude/skills/`, `.agents/skills/`, `~/.agents/skills/` — docs/opencode-setup.md:83-86, 146-149
- Project-local `AGENTS.md` (system prompt template) — docs/opencode-setup.md:94-134, 255
- Optional command definitions `.opencode/commands/*.md` (e.g. `.opencode/commands/plan.md`) — docs/opencode-setup.md:175-197, 257

## Invokes — required
- tool skill / `skill({ name: "<skill-name>" })` — docs/opencode-setup.md:9, 107, 129, 240
- skill spec-driven-development — docs/opencode-setup.md:33, 68, 116, 160, 168, 209
- skill incremental-implementation — docs/opencode-setup.md:69, 116, 159, 170
- skill test-driven-development — docs/opencode-setup.md:116, 159, 170
- skill planning-and-task-breakdown — docs/opencode-setup.md:117, 169, 193
- skill debugging-and-error-recovery — docs/opencode-setup.md:118, 161, 171, 221
- skill code-review-and-quality — docs/opencode-setup.md:119, 162, 172, 232
- skill code-simplification — docs/opencode-setup.md:120
- skill api-and-interface-design — docs/opencode-setup.md:121
- skill frontend-ui-engineering — docs/opencode-setup.md:122
- skill shipping-and-launch — docs/opencode-setup.md:173
- doc CONTRIBUTING.md#repo-scoped-files — docs/opencode-setup.md:136

## Invoked by — required
- README.md:158

## Concepts named — required, verbatim
- `OpenCode` — docs/opencode-setup.md:1, 3, 7, 36, 38, 55, 81, 88, 96, 101, 134, 142, 166, 196, 237, 249, 256 — used here
- `Agent Skills` — docs/opencode-setup.md:3, 7, 101 — used here
- `Agent-driven workflow` — docs/opencode-setup.md:9 — defined here
- `Command-driven workflow` — docs/opencode-setup.md:10 — defined here
- `skill` — docs/opencode-setup.md:9, 107, 129, 240 — defined here | used here
- `skills CLI` — docs/opencode-setup.md:16 — used here
- `npx skills` — docs/opencode-setup.md:21, 23, 26, 27, 33, 36, 254 — used here
- `Project-local installation` — docs/opencode-setup.md:57 — defined here
- `Global installation` — docs/opencode-setup.md:73 — defined here
- `Cross-compatible paths` — docs/opencode-setup.md:79 — defined here
- `Repo-scoped files` — docs/opencode-setup.md:136, 137, 259 — defined here
- `Core Rules` — docs/opencode-setup.md:105 — defined here
- `Intent → Skill Mapping` — docs/opencode-setup.md:112 — defined here
- `Execution Model` — docs/opencode-setup.md:124 — defined here
- `Skill Discovery` — docs/opencode-setup.md:140 — defined here
- `Automatic Skill Invocation` — docs/opencode-setup.md:153 — defined here
- `Lifecycle Mapping (Implicit Commands)` — docs/opencode-setup.md:164 — defined here
- `DEFINE` — docs/opencode-setup.md:168 — defined here
- `PLAN` — docs/opencode-setup.md:169 — defined here
- `BUILD` — docs/opencode-setup.md:170 — defined here
- `VERIFY` — docs/opencode-setup.md:171 — defined here
- `REVIEW` — docs/opencode-setup.md:172 — defined here
- `SHIP` — docs/opencode-setup.md:173 — defined here
- `Agent Expectations` — docs/opencode-setup.md:236 — defined here
- `spec-driven-development` — docs/opencode-setup.md:33, 68, 116, 160, 168, 209 — used here
- `incremental-implementation` — docs/opencode-setup.md:69, 116, 159, 170 — used here
- `test-driven-development` — docs/opencode-setup.md:116, 159, 170 — used here
- `planning-and-task-breakdown` — docs/opencode-setup.md:117, 169, 193 — used here
- `debugging-and-error-recovery` — docs/opencode-setup.md:118, 161, 171, 221 — used here
- `code-review-and-quality` — docs/opencode-setup.md:119, 162, 172, 232 — used here
- `code-simplification` — docs/opencode-setup.md:120 — used here
- `api-and-interface-design` — docs/opencode-setup.md:121 — used here
- `frontend-ui-engineering` — docs/opencode-setup.md:122 — used here
- `shipping-and-launch` — docs/opencode-setup.md:173 — used here
- `references/` — docs/opencode-setup.md:45, 250 — used here

## Structure
- `# OpenCode Setup` — docs/opencode-setup.md:1
- `## Overview` — docs/opencode-setup.md:5
- `## Installation` — docs/opencode-setup.md:12
- `### Option 1: Install with \`npx skills\`` — docs/opencode-setup.md:21
- `### Option 2: Clone this repository` — docs/opencode-setup.md:47
- `#### Project-local installation` — docs/opencode-setup.md:57
- `#### Global installation` — docs/opencode-setup.md:73
- `#### Cross-compatible paths` — docs/opencode-setup.md:79
- `### What to copy` — docs/opencode-setup.md:90
- `## Project \`AGENTS.md\`` — docs/opencode-setup.md:94
- `## How It Works` — docs/opencode-setup.md:138
- `### 1. Skill Discovery` — docs/opencode-setup.md:140
- `### 2. Automatic Skill Invocation` — docs/opencode-setup.md:153
- `### 3. Lifecycle Mapping (Implicit Commands)` — docs/opencode-setup.md:164
- `### Copy the optional slash commands` — docs/opencode-setup.md:175
- `## Usage Examples` — docs/opencode-setup.md:198
- `### Example 1: Feature Development` — docs/opencode-setup.md:200
- `### Example 2: Bug Fix` — docs/opencode-setup.md:213
- `### Example 3: Code Review` — docs/opencode-setup.md:225
- `## Agent Expectations` — docs/opencode-setup.md:236
- `## Limitations` — docs/opencode-setup.md:246
- `## Summary` — docs/opencode-setup.md:252

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` / `broken-command`: Lines 180-181 instruct copying from `.opencode/commands/*.md`, but no `.opencode/commands/` directory exists on `main` (noted in line 184 as pending PR #200).
- `cross-file-contradiction`: `AGENTS.md:36` claims "OpenCode does not support slash commands like `/spec` or `/plan`", whereas `opencode-setup.md:10, 166, 175-197` documents OpenCode slash command support via `.opencode/commands/*.md`.
- `other` / `packaging-limitation`: Per-skill installs (`npx skills add` or copying single `skills/<name>/` directories) do not copy shared files under `references/`, which breaks skills that reference `references/` unless manually resolved (docs/opencode-setup.md:45, 250).

## Observations
- Systematically articulates the fundamental architectural boundary between repo-scoped agent configuration (`addyosmani/agent-skills/AGENTS.md` and `CLAUDE.md`) and portable, reusable skills (`skills/*/SKILL.md`).
- Demonstrates how to map an implicit 6-stage lifecycle (`DEFINE` → `PLAN` → `BUILD` → `VERIFY` → `REVIEW` → `SHIP`) in harnesses without native slash commands using `AGENTS.md` system prompt steering and the `skill({ name })` tool.
- Details the multi-directory discovery hierarchy (`.opencode/skills/`, `~/.config/opencode/skills/`, `.claude/skills/`, `~/.claude/skills/`, `.agents/skills/`, `~/.agents/skills/`).

## Context cost
- File size: 9,547 bytes (~2,400 tokens).
- Transitive context cost: OpenCode uses dynamic on-demand loading via `skill({ name: "<skill-name>" })` guided by a lightweight project `AGENTS.md` (~1,000 tokens), avoiding upfront context bloat.
```

---

## 4. Coverage Self-Check

- [x] Every assigned file has a completed inventory entry with no missing required fields
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`/path validation
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

---

## 5. Cross-Unit Notes & Synthesis Insights

1. **Agent Fan-out Composition Discrepancy (`/ship` vs `/webperf`):**
   - `docs/comparison.md:54` asserts that `/ship` executes a 4-persona fan-out (`code-reviewer`, `security-auditor`, `test-engineer`, `web-performance-auditor`).
   - However, `agents/web-performance-auditor.md:183`, `docs/agents.md:44`, `references/orchestration-patterns.md:54`, and `.claude/commands/ship.md:15` all explicitly state that `/ship` fans out to only **three** personas (`code-reviewer`, `security-auditor`, `test-engineer`), deliberately excluding `web-performance-auditor` because performance audits are specific to web applications and would generate false noise in CLI or library projects.
   - Dedicated performance auditing is invoked via `/webperf` or direct persona dispatch.

2. **Severity Classification Discordance across Addy's Agent Subsystem:**
   - `agents/web-performance-auditor.md:116-122`, `agents/security-auditor.md:59-65`, and `agents/test-engineer.md:46-52` adopt a 5-tier severity scale: `Critical`, `High`, `Medium`, `Low`, `Info`.
   - In contrast, `agents/code-reviewer.md:51-57` and `skills/code-review-and-quality/SKILL.md:275-288` adopt a 4-tier scale: `Critical`, `Required`, `Optional`, `Nit`.
   - Further, `.claude/commands/review.md:15` adopts a 3-tier scale: `Critical`, `Important`, `Suggestion`.
   - This 3-way contradiction across agent personas, skills, and slash commands is a primary alignment item for Phase 3/4.

3. **Tool Harness Ingestion Paradigms (Static Aggregation vs. CLI Package Management vs. Runtime System-Prompt Steering):**
   - **Windsurf (`docs/windsurf-setup.md`)**: Static file concatenation (`cat ... > .windsurfrules`), requiring strict curation of 2-3 essential skills to fit context budgets.
   - **Command Code (`docs/commandcode-setup.md`)**: CLI-driven package management (`cmd skills add`) with automated multi-select discovery, branch pinning, `--force` updates, and auto-mapping to interactive TUI slash commands (`/[skill]`).
   - **OpenCode (`docs/opencode-setup.md`)**: Dual-mode integration: (a) system-prompt intent routing (`AGENTS.md`) using dynamic `skill({ name })` tool invocations, and (b) optional file-based slash commands (`.opencode/commands/*.md`).

4. **Transitive Dependency Hazard on Shared `references/`:**
   - Both `docs/opencode-setup.md:45, 250` and `docs/windsurf-setup.md:48` reveal that per-skill installation mechanisms (`npx skills add <repo> --skill <name>`) isolate only the target `skills/<name>/` directory without copying shared root assets in `references/` (e.g., `references/security-checklist.md`). Unless users install the entire repository pack or manually copy `references/`, skills that load shared references will encounter missing file paths at runtime.

5. **Greenfield vs. Brownfield Strategic Framework:**
   - `docs/adoption-guide.md` establishes the conceptual architecture for incremental agent adoption: "Two-Speed Adoption" (protecting legacy surfaces via read-only context, characterization tests, and Chesterton's Fence while running full 5-stage lifecycles on new work) and monotonic quality "Ratcheting".

---

## 6. Blocked or Uncertain

none (all items resolved and verified against source).

---

## 7. Time and Size

- Source tokens read: ~10,480 tokens (41,922 bytes across 6 files).
- Output tokens written: ~8,800 tokens across comprehensive inventory extractions and synthesis report.
