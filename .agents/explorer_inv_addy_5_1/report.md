# Inventory Extraction Report: `inv-addy-5` (Part 1 Focus)

This report contains the comprehensive Phase 1 inventory extraction for the assigned focus files in work unit `inv-addy-5`:
1. `sources/addy/agents/web-performance-auditor.md` (12,278 bytes)
2. `sources/addy/agents/security-auditor.md` (4,992 bytes)

---

## File 1: `agents/web-performance-auditor.md`

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

## File 2: `agents/security-auditor.md`

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
