# Handoff Report: `inv-addy-5` Focus Extraction (Explorer 1)

## 1. Observation
- Read `sources/addy/agents/web-performance-auditor.md` (12,278 bytes, 185 lines) completely from line 1 to 185.
  - Frontmatter purpose: `"Web performance engineer focused on Core Web Vitals, loading, rendering, and network optimization. Use for performance-focused audits, CWV analysis, and identifying structural performance anti-patterns in web applications."` (line 3)
  - Operating modes: `Quick mode` (default, no tool artifacts, returns static analysis with `potential impact` tag, scorecard marked `not measured`) and `Deep mode` (uses Lighthouse JSON, PageSpeed Insights JSON, CrUX API, DevTools performance trace / Perfetto JSON, or live Chrome DevTools MCP server / CLI).
  - Metric-Honesty Rule: `"Never fabricate metrics. An LLM reading static source code cannot measure real-world LCP, INP, or CLS."` (lines 41-52).
  - Review Scope covers 4 core areas: Core Web Vitals, Loading, Rendering / JavaScript, and Network (lines 57-113), including framework-specific anti-patterns (React, Vue, Svelte, Angular, Next.js, Astro) and AI-generated code anti-patterns.
  - Severity Classification: `Critical`, `High`, `Medium`, `Low`, `Info` (lines 116-122).
  - Composition: Invoked via `/webperf` command or directly; explicit rule: `"Not included in /ship fan-out — performance audits apply to web applications only, not to utility libraries or CLI tools, so adding it to a global pre-launch fan-out would create noise in non-web projects"` (line 183).
- Read `sources/addy/agents/security-auditor.md` (4,992 bytes, 113 lines) completely from line 1 to 113.
  - Frontmatter purpose: `"Security engineer focused on vulnerability detection, threat modeling, and secure coding practices. Use for security-focused code review, threat analysis, or hardening recommendations."` (line 3)
  - Review Scope covers 6 areas: Input Handling, Authentication & Authorization, Data Protection, Infrastructure, Third-Party Integrations, AI / LLM Features (lines 12-56).
  - Severity Classification: `Critical`, `High`, `Medium`, `Low`, `Info` (lines 59-65).
  - Core Rules: focus on exploitable vulnerabilities rather than theoretical risks (line 8, line 99); require proof-of-concept / exploit scenario for Critical/High findings (line 101); start from trust boundaries with STRIDE (line 106); never suggest disabling security controls as a fix (line 105).
  - Composition: Invoked via `/ship` parallel fan-out (alongside `code-reviewer` and `test-engineer`) or directly (lines 110-111).
- Cross-file checks and grep searches across `sources/addy/`:
  - `sources/addy/docs/comparison.md:54` asserts that `/ship` fans out to four personas including `web-performance-auditor` (`code-reviewer`, `security-auditor`, `test-engineer`, `web-performance-auditor`), contradicting `agents/web-performance-auditor.md:183`, `docs/agents.md:44`, `.claude/commands/ship.md:15`, and `commands/ship.toml:14`.
  - `sources/addy/references/orchestration-patterns.md:123` omits `web-performance-auditor.md` when listing plugin subagents in `agents/`.
  - `agents/security-auditor.md:111` references "or any future `/audit` command", but no `/audit` command exists.
  - Severity scale discrepancy across agent files: `security-auditor.md` and `web-performance-auditor.md` use `Critical`, `High`, `Medium`, `Low`, `Info`, whereas `code-reviewer.md:51-57` uses `Critical`, `Required`, `Optional`, `Nit` and `.claude/commands/review.md:15` uses `Critical`, `Important`, `Suggestion`.

## 2. Logic Chain
1. From direct full reads of `web-performance-auditor.md` and `security-auditor.md`, both files are full agent personas designed as specialized system prompts for subagent execution or direct invocation.
2. From the composition sections, `web-performance-auditor` is isolated to web application performance audits triggered via `/webperf` or direct invocation, whereas `security-auditor` is integrated into both pre-launch `/ship` parallel fan-out and standalone security passes.
3. Comparing `web-performance-auditor.md:183` against `docs/comparison.md:54` reveals a concrete documentation drift defect in `docs/comparison.md`, which mistakenly included `web-performance-auditor` in the `/ship` fan-out list.
4. Comparing severity levels across all Addy agent personas shows a three-way terminology divergence (`Critical/High/Medium/Low/Info` in security and webperf vs `Critical/Required/Optional/Nit` in code-reviewer vs `Critical/Important/Suggestion` in review command) that requires alignment in Phase 3/4.

## 3. Caveats
- `web-performance-auditor.md` relies heavily on external tooling ecosystems (Lighthouse, CrUX API, Chrome DevTools MCP server and CLI). Static analysis mode (Quick mode) operates without those dependencies by enforcing the Metric-Honesty Rule.
- No executable scripts reside directly within either agent markdown file.

## 4. Conclusion
- Both focus files are completely analyzed, verified against all cross-references in `sources/addy/`, and extracted into full inventory entries adhering strictly to rules R1-R6.
- Full inventory entries and comprehensive analysis are persisted in `.agents/explorer_inv_addy_5_1/report.md`.

## 5. Verification Method
- Confirm file existence and content match:
  - `view_file` on `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/agents/web-performance-auditor.md`
  - `view_file` on `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/agents/security-auditor.md`
- Confirm referenced paths exist:
  - `sources/addy/skills/browser-testing-with-devtools/SKILL.md`
  - `sources/addy/references/performance-checklist.md`
  - `sources/addy/skills/performance-optimization/SKILL.md`
  - `sources/addy/docs/agents.md`
  - `sources/addy/references/security-checklist.md`
- Inspect persisted report:
  - `view_file` on `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_5_1/report.md`
