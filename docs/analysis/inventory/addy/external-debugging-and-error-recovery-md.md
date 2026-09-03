---
package: addy
path: ../addy-external/debugging-and-error-recovery.md
type: external-doc
bytes: 23705
unit: inv-addy-21
---

# ../addy-external/debugging-and-error-recovery.md

## Purpose — required, verbatim
> "Guides systematic root-cause debugging. Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing." — sources/addy-external/debugging-and-error-recovery.md:1, 5

## Design intent — required
Public catalog web documentation landing page for `debugging-and-error-recovery` hosted on Addy Osmani's agent skills website (`skills.addy.ie/skills/debugging-and-error-recovery/`). It provides external discoverability, marketing, and developer onboarding for the skill, presenting developers and agents with disciplined root-cause debugging concepts ("Stop-the-line", systematic triage, safe fallbacks) to eliminate guessing. It provides CLI installation snippets via Vercel's open `skills CLI` (`npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery`), places the skill within the `addy:Verify` lifecycle phase alongside `/test` and `browser-testing-with-devtools`, and links to the canonical `SKILL.md` in the GitHub repository.

## Phase — required
addy:Verify

## Inputs — required
- HTTP GET request for canonical URL `https://skills.addy.ie/skills/debugging-and-error-recovery/` — sources/addy-external/debugging-and-error-recovery.md:1
- User trigger condition / problem input: "Tests fail, builds break, or behavior is unexpected." — sources/addy-external/debugging-and-error-recovery.md:5
- Skill repository package: `addyosmani/agent-skills` via Vercel's `skills` CLI (`npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery`) — sources/addy-external/debugging-and-error-recovery.md:8
- Web runtime assets: Astro static site bundle, Netlify RUM analytics token/script (`/.netlify/scripts/rum`), Google Fonts (`Geist`, `Geist Mono`), favicon `/favicon.svg`, Open Graph image `/og.png`, sitemap `/sitemap-index.xml` — sources/addy-external/debugging-and-error-recovery.md:1, 19
- User interactions: clipboard copy button clicks on CLI installation commands, mobile navigation toggle clicks, navigation links to related skills and docs — sources/addy-external/debugging-and-error-recovery.md:5, 8, 12, 15

## Outputs — required
- Rendered HTML documentation interface presenting skill metadata, triggering conditions ("Tests fail, builds break, or behavior is unexpected"), tags (`#debugging`, `#quality`), CLI installation commands, 6-part anatomy description, and related Verify phase skills — sources/addy-external/debugging-and-error-recovery.md:1-20
- CLI command text copied to system clipboard via `navigator.clipboard.writeText` (`npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` and `npx skills add addyosmani/agent-skills`) — sources/addy-external/debugging-and-error-recovery.md:8, 15
- Hyperlinks to canonical `SKILL.md` on GitHub (`https://github.com/addyosmani/agent-skills/blob/main/skills/debugging-and-error-recovery/SKILL.md`), repository root (`https://github.com/addyosmani/agent-skills`), contributing guide, evals framework, and documentation sub-pages — sources/addy-external/debugging-and-error-recovery.md:5, 11, 12, 15
- Catalog navigation and deep links to `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — sources/addy-external/debugging-and-error-recovery.md:5, 12, 15
- Setup guide links for Claude Code, Codex, Cursor, and Antigravity at `/docs/getting-started/` — sources/addy-external/debugging-and-error-recovery.md:15
- Peer skill discovery card linking to `/skills/browser-testing-with-devtools/` — sources/addy-external/debugging-and-error-recovery.md:12
- Netlify Real User Monitoring (RUM) telemetry beacon (`/.netlify/scripts/rum`) — sources/addy-external/debugging-and-error-recovery.md:19
- Files produced: none (static web documentation page)

## Invokes — required
- skill skills/debugging-and-error-recovery/SKILL.md — https://github.com/addyosmani/agent-skills/blob/main/skills/debugging-and-error-recovery/SKILL.md — sources/addy-external/debugging-and-error-recovery.md:11
- skill skills/browser-testing-with-devtools/SKILL.md — /skills/browser-testing-with-devtools/ — sources/addy-external/debugging-and-error-recovery.md:12
- command /test — sources/addy-external/debugging-and-error-recovery.md:12
- command npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery — sources/addy-external/debugging-and-error-recovery.md:8
- command npx skills add addyosmani/agent-skills — sources/addy-external/debugging-and-error-recovery.md:8, 15
- doc README.md — https://github.com/addyosmani/agent-skills — sources/addy-external/debugging-and-error-recovery.md:5
- doc CONTRIBUTING.md — https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md — sources/addy-external/debugging-and-error-recovery.md:15
- doc evals/README.md — https://github.com/addyosmani/agent-skills/tree/main/evals — sources/addy-external/debugging-and-error-recovery.md:15
- external tool skills-cli — https://github.com/vercel-labs/skills — sources/addy-external/debugging-and-error-recovery.md:6
- script /.netlify/scripts/rum — sources/addy-external/debugging-and-error-recovery.md:19

## Invoked by — required
- external-doc sources/addy-external/browser-testing-with-devtools.md — sources/addy-external/browser-testing-with-devtools.md:12
- manifest docs/analysis/manifest/addy.md — docs/analysis/manifest/addy.md:194
- orphan · relative to core sources/addy/ repository tree; no file in repository links directly to this external web snapshot

## Concepts named — required, verbatim
- `debugging-and-error-recovery` — sources/addy-external/debugging-and-error-recovery.md:1, 5 — defined here
- `agent-skills` — sources/addy-external/debugging-and-error-recovery.md:1, 5, 8, 12, 15 — defined here
- `systematic root-cause debugging` — sources/addy-external/debugging-and-error-recovery.md:1, 5 — defined here
- `Reproduce, localize, reduce, fix, guard` — sources/addy-external/debugging-and-error-recovery.md:1, 5 — defined here
- `stop-the-line rule` — sources/addy-external/debugging-and-error-recovery.md:1, 5 — defined here
- `safe fallbacks` — sources/addy-external/debugging-and-error-recovery.md:1, 5 — defined here
- `Skills` — sources/addy-external/debugging-and-error-recovery.md:5 — used here
- `Docs` — sources/addy-external/debugging-and-error-recovery.md:5 — used here
- `Tutorials` — sources/addy-external/debugging-and-error-recovery.md:5 — used here
- `Lifecycle` — sources/addy-external/debugging-and-error-recovery.md:5 — used here
- `Loops` — sources/addy-external/debugging-and-error-recovery.md:5 — used here
- `Teach` — sources/addy-external/debugging-and-error-recovery.md:5 — used here
- `Compare` — sources/addy-external/debugging-and-error-recovery.md:5 — used here
- `Verify` — sources/addy-external/debugging-and-error-recovery.md:5 — used here
- `Verify phase` — sources/addy-external/debugging-and-error-recovery.md:5, 12 — used here
- `Use when` — sources/addy-external/debugging-and-error-recovery.md:5 — defined here
- `#debugging` — sources/addy-external/debugging-and-error-recovery.md:5 — defined here
- `#quality` — sources/addy-external/debugging-and-error-recovery.md:5 — defined here
- `Install just this skill` — sources/addy-external/debugging-and-error-recovery.md:5 — defined here
- `skills CLI` — sources/addy-external/debugging-and-error-recovery.md:6 — used here
- `This skill only` — sources/addy-external/debugging-and-error-recovery.md:8 — defined here
- `npx skills add addyosmani/agent-skills --skill debugging-and-error-recovery` — sources/addy-external/debugging-and-error-recovery.md:8 — defined here
- `All skills` — sources/addy-external/debugging-and-error-recovery.md:8 — used here
- `npx skills add addyosmani/agent-skills` — sources/addy-external/debugging-and-error-recovery.md:8, 15 — used here
- `How this skill is structured` — sources/addy-external/debugging-and-error-recovery.md:8 — defined here
- `anatomy` — sources/addy-external/debugging-and-error-recovery.md:9, 10 — defined here
- `Overview` — sources/addy-external/debugging-and-error-recovery.md:10 — defined here
- `When to Use` — sources/addy-external/debugging-and-error-recovery.md:10 — defined here
- `Process` — sources/addy-external/debugging-and-error-recovery.md:10 — defined here
- `Rationalizations` — sources/addy-external/debugging-and-error-recovery.md:10 — defined here
- `Red Flags` — sources/addy-external/debugging-and-error-recovery.md:10 — defined here
- `Verification` — sources/addy-external/debugging-and-error-recovery.md:10 — defined here
- `SKILL.md` — sources/addy-external/debugging-and-error-recovery.md:11 — used here
- `Command` — sources/addy-external/debugging-and-error-recovery.md:12 — used here
- `/test` — sources/addy-external/debugging-and-error-recovery.md:12 — used here
- `The lifecycle` — sources/addy-external/debugging-and-error-recovery.md:5, 12, 15 — used here
- `More in the Verify phase` — sources/addy-external/debugging-and-error-recovery.md:12 — used here
- `browser-testing-with-devtools` — sources/addy-external/debugging-and-error-recovery.md:12 — used here
- `Chrome DevTools MCP` — sources/addy-external/debugging-and-error-recovery.md:12 — used here
- `testing` — sources/addy-external/debugging-and-error-recovery.md:12 — used here
- `browser` — sources/addy-external/debugging-and-error-recovery.md:12 — used here
- `mcp` — sources/addy-external/debugging-and-error-recovery.md:12 — used here
- `Production-grade engineering skills` — sources/addy-external/debugging-and-error-recovery.md:13 — used here
- `AI coding agents` — sources/addy-external/debugging-and-error-recovery.md:13 — used here
- `senior-engineer workflows` — sources/addy-external/debugging-and-error-recovery.md:13-14 — used here
- `full lifecycle` — sources/addy-external/debugging-and-error-recovery.md:14 — used here
- `Skills catalog` — sources/addy-external/debugging-and-error-recovery.md:15 — used here
- `Loop engineering` — sources/addy-external/debugging-and-error-recovery.md:15 — used here
- `Teach & share` — sources/addy-external/debugging-and-error-recovery.md:15 — used here
- `How it compares` — sources/addy-external/debugging-and-error-recovery.md:15 — used here
- `Getting started` — sources/addy-external/debugging-and-error-recovery.md:15 — used here
- `Claude Code` — sources/addy-external/debugging-and-error-recovery.md:15 — used here
- `Codex` — sources/addy-external/debugging-and-error-recovery.md:15 — used here
- `Cursor` — sources/addy-external/debugging-and-error-recovery.md:15 — used here
- `Antigravity` — sources/addy-external/debugging-and-error-recovery.md:15 — used here
- `Evals framework` — sources/addy-external/debugging-and-error-recovery.md:15 — used here

## Structure
- debugging-and-error-recovery (line 5)
- Install just this skill (line 5)
- How this skill is structured (line 8)
- Verify phase (line 12)
- More in the Verify phase (line 12)
  - browser-testing-with-devtools (line 12)
- Product (line 15)
- Setup (line 15)
- Resources (line 15)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · sources/addy-external/debugging-and-error-recovery.md:1, 5 vs sources/addy/skills/debugging-and-error-recovery/SKILL.md:36-170 · The external page description summarizes the triage workflow as a five-step sequence ("Reproduce, localize, reduce, fix, guard"), which matches README.md:262 ("five-step triage"), but omits the explicit 6th step mandated in the core skill implementation SKILL.md:154-170 (Step 6: Verify End-to-End).
- doc-drift · sources/addy-external/debugging-and-error-recovery.md:8-10 vs sources/addy/skills/debugging-and-error-recovery/SKILL.md:21-280 · The external page asserts a uniform 6-part anatomy containing "03 Process" and "04 Rationalizations", but SKILL.md contains no "Process" section, titles the section ## Common Rationalizations (line 262), and contains a major prompt injection defense section (## Treating Error Output as Untrusted Data, line 272) not represented in the claimed anatomy.
- doc-drift · sources/addy-external/debugging-and-error-recovery.md:5 vs sources/addy/skills/debugging-and-error-recovery/SKILL.md:14-19 · The external page truncates the 6 specific trigger conditions in SKILL.md into a generic 3-clause phrase ("Tests fail, builds break, or behavior is unexpected").
- doc-drift · sources/addy-external/debugging-and-error-recovery.md:12 vs sources/addy/commands/build.toml:36, 42 and sources/addy/commands/test.toml:1-19 · The external page pairs the Verify phase and this skill with Command /test, but /test only runs TDD and browser testing, whereas commands/build.toml:36, 42 is the command that explicitly invokes debugging-and-error-recovery.
- internal-contradiction · sources/addy-external/debugging-and-error-recovery.md:9-11 · The page claims skills follow an anatomy that is "a workflow the agent follows, not a doc it reads" (line 9), but immediately provides a primary call-to-action button labeled "Read the full SKILL.md" (line 11).
- cross-file-contradiction · sources/addy-external/debugging-and-error-recovery.md:12 vs sources/addy-external/browser-testing-with-devtools.md:12 · Both external docs reinforce the outdated 5-step triage summary ("Five-step triage: reproduce, localize, reduce, fix, guard"), contradicting the authoritative 6-step checklist in SKILL.md:36-170.
- orphan · sources/addy-external/debugging-and-error-recovery.md:1 · No file within the primary sources/addy/ repository references or links to this external web snapshot; it is an unreferenced external publication.
- other · sources/addy-external/debugging-and-error-recovery.md:1-20 · Static HTML snapshot contains 23,705 bytes of compiled Astro markup, embedded CSS styling, and analytics tracking code, with less than 2,000 bytes (~8%) representing actual instructional skill content.

## Observations
- Elevates "Stop-the-line" and "Safe Fallbacks" to prominent hero copy on the public web landing page, underscoring that disciplined error handling and runtime safety are central value propositions of the Addy skill library.
- Promotes `browser-testing-with-devtools` as the primary related companion skill in the `Verify phase`, linking browser runtime observability directly with systematic debugging.
- Documents modular installation commands for both individual skill usage and entire pack installation via Vercel's open `skills CLI`.
- Multi-harness integration: Directly links setup documentation for four AI agent environments: Claude Code, Codex, Cursor, and Antigravity.

## Context cost
23,705 bytes (~5,926 tokens). Static web documentation snapshot; 0 static context cost in agent system prompts during skill execution.
