---
package: addy
path: external/doubt-driven-development.md
type: external-doc
bytes: 26502
unit: inv-addy-15
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# external/doubt-driven-development.md

## Purpose — required, verbatim
> "Subjects every non-trivial decision to a fresh-context adversarial review before it stands: CLAIM → EXTRACT → DOUBT → RECONCILE → STOP, with optional user-authorized cross-model escalation." — external/doubt-driven-development.md:5

## Design intent — required
The external documentation page at `https://skills.addy.ie/skills/doubt-driven-development/` serves as the public web catalog entry, distribution channel, and structural overview for the `doubt-driven-development` skill within the `agent-skills` ecosystem. It provides web-accessible discovery metadata, package installation instructions via the Vercel Labs `skills` CLI (`npx skills add addyosmani/agent-skills --skill doubt-driven-development`), a standardized 6-section skill anatomy template, lifecycle taxonomy positioning (`Build phase`, associated with command `/build`), and discovery links to related Build-phase skills (`incremental-implementation`, `test-driven-development`, and `context-engineering`). The document addresses the critical problem of overconfidence and confirmation bias in autonomous coding agents, where long chat sessions accumulate context that quietly turns unverified assumptions into accepted facts. Without this external document, developers and agents exploring the public web catalog would lack a discoverable, browser-accessible entry point detailing how adversarial fresh-context reviews (the CLAIM → EXTRACT → DOUBT → RECONCILE → STOP cycle) and user-authorized cross-model escalations can be installed and integrated into the Build phase to catch flawed decisions before they are committed.

## Phase — required
addy:Build

(Rendered as `Build` in breadcrumb at `external/doubt-driven-development.md:5`, and as `Build phase` in the phase chip at `external/doubt-driven-development.md:5` and sidebar at `external/doubt-driven-development.md:12`. Aligns with `CLAUDE.md:23`, `README.md:253, 361`, and `skills/using-agent-skills/SKILL.md:176`. Note that `AGENTS.md:42` omits `doubt-driven-development` under `BUILD`, listing only `incremental-implementation` + `test-driven-development`, and `skills/interview-me/SKILL.md:14` contradicts this by calling `doubt-driven-development` one of "The other Define-phase skills").

## Inputs — required
- User or agent intent to discover, evaluate, or install the doubt-driven development skill via web browser or CLI (`npx skills add addyosmani/agent-skills --skill doubt-driven-development` or full pack `npx skills add addyosmani/agent-skills`) — external/doubt-driven-development.md:8
- Upstream skill definition file on GitHub: `https://github.com/addyosmani/agent-skills/blob/main/skills/doubt-driven-development/SKILL.md` — external/doubt-driven-development.md:10
- Triggering conditions / Use-when context: "Stakes are high, code is unfamiliar, or verifying now beats debugging later." — external/doubt-driven-development.md:5
- Static assets, stylesheets, Google Fonts (Geist, Geist Mono), Netlify RUM analytics script, and site navigation links (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`) — external/doubt-driven-development.md:1, 5, 12, 15, 19
- User interactions: clipboard copy button clicks on CLI installation commands, mobile navigation toggle clicks, navigation links to related skills and docs — external/doubt-driven-development.md:5, 8, 12, 15

## Outputs — required
- Public web page presentation of skill metadata, summary description, taxonomy tags (`#verification`, `#quality`, `#agents`), and install commands — external/doubt-driven-development.md:1, 5, 8
- Installation commands for clipboard / shell execution: `npx skills add addyosmani/agent-skills --skill doubt-driven-development` and `npx skills add addyosmani/agent-skills` — external/doubt-driven-development.md:8
- Canonical skill anatomy specification (6-step structure: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification) — external/doubt-driven-development.md:10
- Lifecycle navigation routing and discovery links to related build skills (`incremental-implementation`, `test-driven-development`, `context-engineering`) and lifecycle documentation — external/doubt-driven-development.md:12
- Netlify Real User Monitoring (RUM) telemetry beacon (`/.netlify/scripts/rum`) — external/doubt-driven-development.md:19
- `none` for disk files (pure web documentation reference)

## Invokes — required
- command /build — external/doubt-driven-development.md:12
- skill incremental-implementation — external/doubt-driven-development.md:12
- skill test-driven-development — external/doubt-driven-development.md:12
- skill context-engineering — external/doubt-driven-development.md:12
- file skills/doubt-driven-development/SKILL.md — external/doubt-driven-development.md:10
- doc CONTRIBUTING.md — external/doubt-driven-development.md:15
- doc evals — external/doubt-driven-development.md:15
- doc lifecycle — external/doubt-driven-development.md:5
- doc tutorials — external/doubt-driven-development.md:5
- doc loops — external/doubt-driven-development.md:5
- doc teach — external/doubt-driven-development.md:5
- doc compare — external/doubt-driven-development.md:5
- script /.netlify/scripts/rum — external/doubt-driven-development.md:19

## Invoked by — required
orphan — This static external HTML snapshot (`external/doubt-driven-development.md`) is a frozen snapshot of `https://skills.addy.ie/skills/doubt-driven-development/` brought into scope via METHOD.md §1.1. No in-scope repository file in `sources/addy` links to or loads this static external HTML snapshot file directly.

## Concepts named — required, verbatim
- `doubt-driven-development` — external/doubt-driven-development.md:1, 5, 8, 10 — defined here
- `agent-skills` — external/doubt-driven-development.md:1, 5, 8, 10, 15 — used here
- `adversarial review` — external/doubt-driven-development.md:1, 5 — defined here
- `CLAIM` — external/doubt-driven-development.md:1, 5 — defined here
- `EXTRACT` — external/doubt-driven-development.md:1, 5 — defined here
- `DOUBT` — external/doubt-driven-development.md:1, 5 — defined here
- `RECONCILE` — external/doubt-driven-development.md:1, 5 — defined here
- `STOP` — external/doubt-driven-development.md:1, 5 — defined here
- `cross-model escalation` — external/doubt-driven-development.md:1, 5 — defined here
- `Skills` — external/doubt-driven-development.md:5 — used here
- `Build` — external/doubt-driven-development.md:5, 12 — defined here
- `Build phase` — external/doubt-driven-development.md:5, 12 — defined here
- `Use when` — external/doubt-driven-development.md:5 — defined here
- `#verification` — external/doubt-driven-development.md:5 — defined here
- `#quality` — external/doubt-driven-development.md:5 — defined here
- `#agents` — external/doubt-driven-development.md:5 — defined here
- `skills CLI` — external/doubt-driven-development.md:6 — used here
- `This skill only` — external/doubt-driven-development.md:8 — defined here
- `All skills` — external/doubt-driven-development.md:8 — defined here
- `npx skills add addyosmani/agent-skills --skill doubt-driven-development` — external/doubt-driven-development.md:8 — defined here
- `npx skills add addyosmani/agent-skills` — external/doubt-driven-development.md:8, 15 — defined here
- `How this skill is structured` — external/doubt-driven-development.md:8 — defined here
- `anatomy` — external/doubt-driven-development.md:9, 10 — defined here
- `Overview` — external/doubt-driven-development.md:10 — defined here
- `When to Use` — external/doubt-driven-development.md:10 — defined here
- `Process` — external/doubt-driven-development.md:10 — defined here
- `Rationalizations` — external/doubt-driven-development.md:10 — defined here
- `Red Flags` — external/doubt-driven-development.md:10 — defined here
- `Verification` — external/doubt-driven-development.md:10 — defined here
- `SKILL.md` — external/doubt-driven-development.md:10, 11 — used here
- `Read the full SKILL.md` — external/doubt-driven-development.md:11 — used here
- `Command` — external/doubt-driven-development.md:12 — defined here
- `/build` — external/doubt-driven-development.md:12 — used here
- `See the full lifecycle` — external/doubt-driven-development.md:12 — used here
- `More in the Build phase` — external/doubt-driven-development.md:12 — defined here
- `incremental-implementation` — external/doubt-driven-development.md:12 — used here
- `vertical slices` — external/doubt-driven-development.md:12 — used here
- `test-driven-development` — external/doubt-driven-development.md:12 — used here
- `Red-Green-Refactor` — external/doubt-driven-development.md:12 — used here
- `test pyramid` — external/doubt-driven-development.md:12 — used here
- `DAMP over DRY` — external/doubt-driven-development.md:12 — used here
- `Beyoncé Rule` — external/doubt-driven-development.md:12 — used here
- `/test` — external/doubt-driven-development.md:12 — used here
- `context-engineering` — external/doubt-driven-development.md:12 — used here
- `rules files` — external/doubt-driven-development.md:12 — used here
- `context packing` — external/doubt-driven-development.md:12 — used here
- `MCP` — external/doubt-driven-development.md:12 — used here
- `Production-grade engineering skills for AI coding agents` — external/doubt-driven-development.md:13 — used here
- `full lifecycle` — external/doubt-driven-development.md:12, 14 — used here
- `Skills catalog` — external/doubt-driven-development.md:15 — used here
- `Tutorials` — external/doubt-driven-development.md:5, 15 — used here
- `The lifecycle` — external/doubt-driven-development.md:15 — used here
- `Loop engineering` — external/doubt-driven-development.md:15 — used here
- `Teach` — external/doubt-driven-development.md:5, 15 — used here
- `Teach &amp; share` — external/doubt-driven-development.md:15 — used here
- `How it compares` — external/doubt-driven-development.md:15 — used here
- `Getting started` — external/doubt-driven-development.md:15 — used here
- `Claude Code` — external/doubt-driven-development.md:15 — used here
- `Codex` — external/doubt-driven-development.md:15 — used here
- `Cursor` — external/doubt-driven-development.md:15 — used here
- `Antigravity` — external/doubt-driven-development.md:15 — used here
- `Contributing` — external/doubt-driven-development.md:15 — used here
- `Evals framework` — external/doubt-driven-development.md:15 — used here
- `addyosmani.com` — external/doubt-driven-development.md:15 — used here

## Structure
- `doubt-driven-development` (H1 — line 5)
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
- doc-drift · external/doubt-driven-development.md:12 vs sources/addy/commands/build.toml:1, 4, 38 · External page links doubt-driven-development to Command /build as its primary command, but /build primarily invokes incremental-implementation alongside test-driven-development, only mentioning doubt-driven-development as an exception handler in step 6 for high-risk or irreversible tasks.
- doc-drift · external/doubt-driven-development.md:10 vs sources/addy/skills/doubt-driven-development/SKILL.md:49, 193 · External page asserts a standardized 6-section skill anatomy including "03 Process" and "04 Rationalizations", whereas SKILL.md titles section 03 "## The Process" (SKILL.md:49) and section 04 "## Common Rationalizations" (SKILL.md:193), and includes an unrepresented major section "## Loading Constraints" (SKILL.md:42).
- doc-drift · external/doubt-driven-development.md:5 vs sources/addy/skills/doubt-driven-development/SKILL.md:3, 14-41 · The external page condenses "Use when" to a single phrase ("Stakes are high, code is unfamiliar, or verifying now beats debugging later."), omitting the 5 non-trivial criteria (branching logic, module/service boundaries, unverifiable compiler properties, future-reader context dependence, irreversible blast radius at SKILL.md:16-23) and completely omitting the 6 explicit negative boundary rules ("When NOT to use" at SKILL.md:31-39).
- doc-drift · external/doubt-driven-development.md:5, 8 vs sources/addy/skills/doubt-driven-development/SKILL.md:42-48 · Promotes standalone installation via npx skills add addyosmani/agent-skills --skill doubt-driven-development, but fails to mention that running the skill requires execution from the main-session orchestrator and cannot run as a persona or inside a subagent context without degrading into self-questioning.
- cross-file-contradiction · external/doubt-driven-development.md:5, 12 vs sources/addy/skills/interview-me/SKILL.md:14 · External page places doubt-driven-development in the Build phase (along with CLAUDE.md:23, README.md:253, 361, and skills/using-agent-skills/SKILL.md:176), but skills/interview-me/SKILL.md:14 explicitly classifies doubt-driven-development as one of "The other Define-phase skills".
- cross-file-contradiction · external/doubt-driven-development.md:5, 12 vs sources/addy/AGENTS.md:42 · External page assigns doubt-driven-development to the Build phase, but AGENTS.md:42 (Lifecycle Mapping) maps BUILD strictly to incremental-implementation + test-driven-development, omitting doubt-driven-development from the agent's implicit build lifecycle.
- internal-contradiction · external/doubt-driven-development.md:9-11 · Line 9 asserts that skill anatomy is "a workflow the agent follows, not a doc it reads", but line 11 immediately presents a primary CTA button stating "Read the full SKILL.md".
- orphan · external/doubt-driven-development.md:1 · No in-scope repository file in sources/addy invokes, links to, or references this external documentation URL (https://skills.addy.ie/skills/doubt-driven-development/) or its snapshot file.
- other · external/doubt-driven-development.md:1-20 · Heavy packaging overhead: 26,502 bytes of compiled Astro HTML markup, CSS styling, navigation chrome, and Netlify telemetry, with less than 1,500 bytes dedicated to skill-specific content and metadata.

## Observations
- **Adversarial framing and prompt precedence**: The underlying skill enforces an issues-only prompt ("Find what is wrong with this artifact. Assume the author is overconfident.") that explicitly overrides persona defaults like `code-reviewer` that normally balance strengths and weaknesses.
- **Strict isolation (CLAIM exclusion)**: The skill specifies passing only ARTIFACT + CONTRACT to the reviewer, strictly withholding the author's CLAIM and reasoning to prevent confirmation bias and agreement validation.
- **Cross-model escalation**: Uniquely specifies user-authorized CLI delegation (`codex`, `gemini`, or manual) with strict shell safety (piping stdin from temp files to prevent shell injection or execution of unvetted artifact code) and read-only sandbox mode.
- **Orchestration constraints**: The skill is restricted to the main orchestrator; it explicitly prohibits attaching to subagent personas to avoid the persona-calling-persona anti-pattern.
- **Related skills positioning**: Positioned alongside `incremental-implementation`, `test-driven-development`, and `context-engineering` in the Build phase, representing the pre-commit doubt loop before code changes are committed.

## Context cost
- File size: 26,502 bytes (~6,625 tokens).
- Pure static HTML documentation page snapshot; 0 static context cost in agent system prompts during skill execution because it is an external documentation artifact, not loaded into the agent context window at runtime.
