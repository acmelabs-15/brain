---
package: addy
path: external/source-driven-development.md
type: external-doc
bytes: 26358
lines: 20
sha256: 64a27546dc9f9c73522ba0aee6c76136d2eb127022ca9c00b52a16c71c4d96a5
unit: inv-addy-25
aliases: []
memo_inputs:
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/source-driven-development.md

## Purpose — required, verbatim
> "Grounds every implementation decision in official documentation. Verify against sources, cite them, and flag anything unverified so the code stays free of outdated patterns." — external/source-driven-development.md:1, 5

Triggering condition:
> "You want authoritative, source-cited code for any framework or library." — external/source-driven-development.md:5

Phase summary / sidebar blurb:
> "Write the code in thin, tested vertical slices." — external/source-driven-development.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — external/source-driven-development.md:13-14

## Design intent — required
The external documentation page at `https://skills.addy.ie/skills/source-driven-development/` serves as the public web catalog entry, distribution point, and architectural overview for the `source-driven-development` skill within the `agent-skills` ecosystem. It presents web-accessible discovery metadata, package installation commands via the Vercel Labs `skills` CLI (`npx skills add ...`), a standardized 6-section skill anatomy template, lifecycle taxonomy positioning (`Build phase`, associated with command `/build`), and related skill discovery links (pointing to `incremental-implementation`, `test-driven-development`, and `context-engineering`). Without this document, developers and autonomous agents browsing the public web documentation would lack an accessible landing page explaining the core philosophy of grounding framework implementation decisions in official documentation, the single-skill and full-suite installation commands, and its contextual placement alongside incremental and test-driven workflows in the Build phase of the development lifecycle.

## Phase — required
addy:Build

(Rendered as `Build` in breadcrumb at `external/source-driven-development.md:5`, and as `Build phase` in the phase chip and sidebar at `external/source-driven-development.md:5, 12`. Aligns with `CLAUDE.md:23`, `README.md:252, 360`, and `skills/using-agent-skills/SKILL.md:175`. Note that `AGENTS.md:42` omits `source-driven-development` under `BUILD`, listing only `incremental-implementation + test-driven-development`).

## Inputs — required
- User or agent intent to discover, evaluate, or install documentation-grounded implementation skills via web browser or CLI (`npx skills add addyosmani/agent-skills --skill source-driven-development` or full pack) — external/source-driven-development.md:8
- Upstream skill definition file on GitHub: `https://github.com/addyosmani/agent-skills/blob/main/skills/source-driven-development/SKILL.md` — external/source-driven-development.md:10
- Triggering conditions / Use-when context: "You want authoritative, source-cited code for any framework or library." — external/source-driven-development.md:5
- Static assets, stylesheets, Google Fonts (Geist, Geist Mono), Netlify RUM analytics script, and site navigation links (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`) — external/source-driven-development.md:1, 5, 12, 15, 19
- User interactions: clipboard copy button clicks on CLI installation commands, mobile navigation toggle clicks, navigation links to related skills and docs — external/source-driven-development.md:5, 8, 12, 15

## Outputs — required
- Public web page presentation of skill metadata, summary description, taxonomy tags (`#documentation`, `#correctness`), and install commands — external/source-driven-development.md:1, 5, 8
- Installation commands for clipboard / shell execution: `npx skills add addyosmani/agent-skills --skill source-driven-development` and `npx skills add addyosmani/agent-skills` — external/source-driven-development.md:8
- Canonical skill anatomy specification (6-step structure: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification) — external/source-driven-development.md:10
- Lifecycle navigation routing and discovery links to related build skills (`incremental-implementation`, `test-driven-development`, `context-engineering`) and lifecycle documentation — external/source-driven-development.md:12
- Netlify Real User Monitoring (RUM) telemetry beacon (`/.netlify/scripts/rum`) — external/source-driven-development.md:19
- `none` for disk files (pure web documentation reference)

## Invokes — required
- command /build — external/source-driven-development.md:12
- command /test — external/source-driven-development.md:12
- skill incremental-implementation — external/source-driven-development.md:12
- skill test-driven-development — external/source-driven-development.md:12
- skill context-engineering — external/source-driven-development.md:12
- file skills/source-driven-development/SKILL.md — external/source-driven-development.md:10
- doc CONTRIBUTING.md — external/source-driven-development.md:15
- doc evals — external/source-driven-development.md:15
- doc lifecycle — external/source-driven-development.md:5
- doc tutorials — external/source-driven-development.md:5
- doc loops — external/source-driven-development.md:5
- doc teach — external/source-driven-development.md:5
- doc compare — external/source-driven-development.md:5
- script /.netlify/scripts/rum — external/source-driven-development.md:19

## Invoked by — required
orphan — This static external HTML snapshot (`external/source-driven-development.md`) is a frozen snapshot of `https://skills.addy.ie/skills/source-driven-development/` brought into scope via METHOD.md §1.1. No in-scope repository file in `sources/addy` links to or loads this static external HTML snapshot file directly.

## Concepts named — required, verbatim
- `source-driven-development` — external/source-driven-development.md:1, 5, 8, 10 — defined here
- `agent-skills` — external/source-driven-development.md:1, 5, 8, 10, 15 — used here
- `Skills` — external/source-driven-development.md:5 — used here
- `Build` — external/source-driven-development.md:5, 12 — defined here
- `Build phase` — external/source-driven-development.md:5, 12 — defined here
- `Use when` — external/source-driven-development.md:5 — defined here
- `#documentation` — external/source-driven-development.md:5 — defined here
- `#correctness` — external/source-driven-development.md:5 — defined here
- `skills CLI` — external/source-driven-development.md:6 — used here
- `This skill only` — external/source-driven-development.md:8 — defined here
- `All skills` — external/source-driven-development.md:8 — defined here
- `npx skills add addyosmani/agent-skills --skill source-driven-development` — external/source-driven-development.md:8 — defined here
- `npx skills add addyosmani/agent-skills` — external/source-driven-development.md:8, 15 — defined here
- `How this skill is structured` — external/source-driven-development.md:8 — defined here
- `anatomy` — external/source-driven-development.md:9, 10 — defined here
- `Overview` — external/source-driven-development.md:10 — defined here
- `When to Use` — external/source-driven-development.md:10 — defined here
- `Process` — external/source-driven-development.md:10 — defined here
- `Rationalizations` — external/source-driven-development.md:10 — defined here
- `Red Flags` — external/source-driven-development.md:10 — defined here
- `Verification` — external/source-driven-development.md:10 — defined here
- `SKILL.md` — external/source-driven-development.md:10, 11 — used here
- `Read the full SKILL.md` — external/source-driven-development.md:11 — used here
- `Command` — external/source-driven-development.md:8, 12 — defined here
- `/build` — external/source-driven-development.md:12 — used here
- `See the full lifecycle` — external/source-driven-development.md:12 — used here
- `More in the Build phase` — external/source-driven-development.md:12 — defined here
- `incremental-implementation` — external/source-driven-development.md:12 — used here
- `Thin vertical slices - implement, test, verify, commit. Rollback-friendly changes.` — external/source-driven-development.md:12 — used here
- `Any change touching more than one file.` — external/source-driven-development.md:12 — used here
- `test-driven-development` — external/source-driven-development.md:12 — used here
- `/test` — external/source-driven-development.md:12 — used here
- `Red-Green-Refactor, the test pyramid, DAMP over DRY, the Beyoncé Rule.` — external/source-driven-development.md:12 — used here
- `Implementing logic, fixing bugs, or changing behavior.` — external/source-driven-development.md:12 — used here
- `context-engineering` — external/source-driven-development.md:12 — used here
- `Feed agents the right information at the right time - rules files, context packing, MCP.` — external/source-driven-development.md:12 — used here
- `Starting a session, switching tasks, or when output quality drops.` — external/source-driven-development.md:12 — used here
- `Production-grade engineering skills for AI coding agents` — external/source-driven-development.md:13 — used here
- `full lifecycle` — external/source-driven-development.md:12, 14 — used here
- `Skills catalog` — external/source-driven-development.md:15 — used here
- `Tutorials` — external/source-driven-development.md:5, 15 — used here
- `The lifecycle` — external/source-driven-development.md:15 — used here
- `Loop engineering` — external/source-driven-development.md:15 — used here
- `Teach` — external/source-driven-development.md:5, 15 — used here
- `Teach &amp; share` — external/source-driven-development.md:15 — used here
- `How it compares` — external/source-driven-development.md:15 — used here
- `Getting started` — external/source-driven-development.md:15 — used here
- `Claude Code` — external/source-driven-development.md:15 — used here
- `Codex` — external/source-driven-development.md:15 — used here
- `Cursor` — external/source-driven-development.md:15 — used here
- `Antigravity` — external/source-driven-development.md:15 — used here
- `Contributing` — external/source-driven-development.md:15 — used here
- `Evals framework` — external/source-driven-development.md:15 — used here
- `addyosmani.com` — external/source-driven-development.md:15 — used here

## Structure
- `source-driven-development` (H1 — line 5)
- `Install just this skill` (H2 — line 5)
- `How this skill is structured` (H2 — line 8)
- `Build phase` (H3 — line 12)
- `More in the Build phase` (H2 — line 12)
  - `incremental-implementation` (H3 — line 12)
  - `test-driven-development` (H3 — line 12)
  - `context-engineering` (H3 — line 12)
- `Product` (H3 — line 15)
- `Setup` (H3 — line 15)
- `Resources` (H3 — line 15)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/source-driven-development.md:12 vs sources/addy/commands/build.toml:4, 33, 36, 38 · External page pairs source-driven-development with Command /build as its primary command, but /build primarily invokes incremental-implementation and test-driven-development (along with planning-and-task-breakdown, debugging-and-error-recovery, and doubt-driven-development) and never invokes or mentions source-driven-development.
- doc-drift · external/source-driven-development.md:10 vs sources/addy/skills/source-driven-development/SKILL.md:27-180 · External page asserts a standardized 6-section skill anatomy including "03 Process" and "04 Rationalizations", but SKILL.md titles its process section The Process (line 27) and its rationalizations section Common Rationalizations (line 181), and organizes its workflow into four numbered sub-steps (Step 1: Detect Stack and Versions, Step 2: Fetch Official Documentation, Step 3: Implement Following Documented Patterns, Step 4: Cite Your Sources) plus a Retrieval Safety subsection not reflected in the generic anatomy.
- doc-drift · external/source-driven-development.md:5 vs sources/addy/skills/source-driven-development/SKILL.md:12-26 · External page condenses "Use when" to a single clause ("You want authoritative, source-cited code for any framework or library."), omitting the 6 detailed triggering conditions defined in SKILL.md:14-19 (best practices, starter/boilerplate code, user request for verified code, framework-specific patterns like routing/auth/state, code review, or writing from memory) as well as the 3 negative boundaries ("When NOT to use" at SKILL.md:21-25: version-independent correctness, pure logic, or explicit speed preference).
- cross-file-contradiction · external/source-driven-development.md:5, 12 vs sources/addy/AGENTS.md:42 · External page assigns source-driven-development to the Build phase (in agreement with CLAUDE.md:23, README.md:252, 360, and skills/using-agent-skills/SKILL.md:175), but AGENTS.md:42 (Lifecycle Mapping) omits source-driven-development from BUILD, mapping only "BUILD → incremental-implementation + test-driven-development", and lines 26-32 also omit it from the Intent → Skill Mapping table.
- cross-file-contradiction · external/source-driven-development.md:12 vs sources/addy/hooks/SDD-CACHE.md:51 · The external page pairs source-driven-development with Command /build, whereas hooks/SDD-CACHE.md:51 references a dedicated slash command "/source-driven-development" ("Use /source-driven-development (or the skill) as usual"), but no command file named source-driven-development exists in commands/, .claude/commands/, or .gemini/commands/.
- cross-file-contradiction · external/source-driven-development.md:12 vs sources/addy/commands/test.toml:4, 18 · The related-skill grid on line 12 pairs peer skill test-driven-development with Command /test, but commands/test.toml primarily drives test-driven-development while also conditionally invoking browser-testing-with-devtools (line 18), which the external page's peer summary does not indicate.
- internal-contradiction · external/source-driven-development.md:9, 11 · Line 9 asserts that skill anatomy is "a workflow the agent follows, not a doc it reads", but line 11 immediately presents a primary CTA button stating "Read the full SKILL.md".
- orphan · external/source-driven-development.md:1 · No in-scope repository file in sources/addy invokes, links to, or references this external documentation URL (https://skills.addy.ie/skills/source-driven-development/) or its snapshot file.
- other · external/source-driven-development.md:1-20 · Heavy packaging overhead: 26,358 bytes of static compiled Astro HTML markup, CSS stylesheets, navigation chrome, and Netlify telemetry, with less than 1,500 bytes (~5.7%) dedicated to skill-specific description and metadata.

## Observations
- **Epistemological Foundation of Agent Coding**: `source-driven-development` establishes the core rule that LLM training data is prone to deprecation drift and hallucinated APIs, mandating empirical verification against live official documentation.
- **Retrieval Safety Boundaries**: `SKILL.md` defines vital security constraints against indirect prompt injection (LLM01) in fetched documentation (ignoring model directives, ads, third-party suggestions, outbound telemetry endpoints), none of which are surfaced on the public web catalog page.
- **Build Phase Clustering**: The external catalog groups `source-driven-development` with `incremental-implementation`, `test-driven-development`, and `context-engineering` under the `Build phase`, reinforcing the triad of doc-verification, test-driven iteration, and slice-based execution.
- **Dual CLI Distribution**: Promotes standalone installation via `npx skills add addyosmani/agent-skills --skill source-driven-development` as well as full suite installation via `npx skills add addyosmani/agent-skills`.
- **Multi-Agent Setup Guidance**: Directly links getting-started documentation for Claude Code, Codex, Cursor, and Antigravity.

## Context cost
- File size: 26,358 bytes (~6,590 tokens).
- Pure static HTML documentation page snapshot; 0 static context cost in agent system prompts during skill execution because it is an external documentation artifact, not loaded into the agent context window at runtime.
