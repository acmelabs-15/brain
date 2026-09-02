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
