---
package: addy
path: external/api-and-interface-design.md
type: external-doc
bytes: 26413
unit: inv-addy-12
aliases: []
memo_inputs:
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# external/api-and-interface-design.md

## Purpose — required, verbatim
> "Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — external/api-and-interface-design.md:5

## Design intent — required
This external documentation page (`https://skills.addy.ie/skills/api-and-interface-design/`) serves as the public web catalog and detail landing page for the `api-and-interface-design` skill in Addy Osmani's agent skills suite. Hosted on skills.addy.ie and rendered from Astro templates, it provides an overview of stable API principles (Contract-first, Hyrum's Law, One-Version Rule, error semantics, boundary validation), documents triggering criteria ("Designing APIs, module boundaries, or public interfaces."), outlines the standardized 6-part skill anatomy, presents CLI installation commands via `npx skills add`, and places the skill within the Build lifecycle phase alongside `/build` and related skills (`incremental-implementation`, `test-driven-development`, `context-engineering`). Without this page, public consumers and autonomous agents browsing the web catalog would lack discoverability, installation instructions, and links to the canonical GitHub source repository (`skills/api-and-interface-design/SKILL.md`).

## Phase — required
addy:Build
> "Build phase" — external/api-and-interface-design.md:5

## Inputs — required
Static web page inputs:
- HTTP GET requests to `https://skills.addy.ie/skills/api-and-interface-design/`
- Build-time content from `skills/api-and-interface-design/SKILL.md` rendered via Astro templates.
- Trigger condition documented on page: "Designing APIs, module boundaries, or public interfaces." — external/api-and-interface-design.md:5
No runtime parameters or CLI arguments are consumed by this static web page.

## Outputs — required
Static web presentation:
- Rendered HTML document presenting skill summary, trigger condition, CLI installation commands (`npx skills add addyosmani/agent-skills --skill api-and-interface-design`), 6-part skill anatomy, and navigation links to related Build skills and GitHub repository.
Produces no repository artifacts, files, or commits directly.

## Invokes — required
- command /build — external/api-and-interface-design.md:12
- command /test — external/api-and-interface-design.md:12
- skill incremental-implementation — external/api-and-interface-design.md:12
- skill test-driven-development — external/api-and-interface-design.md:12
- skill context-engineering — external/api-and-interface-design.md:12
- file skills/api-and-interface-design/SKILL.md — external/api-and-interface-design.md:10

## Invoked by — required
orphan (external documentation page published at `https://skills.addy.ie/skills/api-and-interface-design/`; not invoked or referenced by any file within `sources/addy/`)

## Concepts named — required, verbatim
- `api-and-interface-design` — external/api-and-interface-design.md:1 — defined here
- `Contract-first design` — external/api-and-interface-design.md:1 — defined here
- `Hyrum’s Law` — external/api-and-interface-design.md:1 — defined here
- `One-Version Rule` — external/api-and-interface-design.md:1 — defined here
- `error semantics` — external/api-and-interface-design.md:1 — defined here
- `boundary validation` — external/api-and-interface-design.md:1 — defined here
- `REST` — external/api-and-interface-design.md:1 — used here
- `GraphQL` — external/api-and-interface-design.md:1 — used here
- `Build phase` — external/api-and-interface-design.md:5 — used here
- `skills CLI` — external/api-and-interface-design.md:6 — used here
- `How this skill is structured` — external/api-and-interface-design.md:8 — defined here
- `anatomy` — external/api-and-interface-design.md:10 — defined here
- `Overview` — external/api-and-interface-design.md:10 — defined here
- `When to Use` — external/api-and-interface-design.md:10 — defined here
- `Process` — external/api-and-interface-design.md:10 — defined here
- `Rationalizations` — external/api-and-interface-design.md:10 — defined here
- `Red Flags` — external/api-and-interface-design.md:10 — defined here
- `Verification` — external/api-and-interface-design.md:10 — defined here
- `SKILL.md` — external/api-and-interface-design.md:11 — used here
- `/build` — external/api-and-interface-design.md:12 — used here
- `/test` — external/api-and-interface-design.md:12 — used here
- `incremental-implementation` — external/api-and-interface-design.md:12 — used here
- `test-driven-development` — external/api-and-interface-design.md:12 — used here
- `context-engineering` — external/api-and-interface-design.md:12 — used here
- `thin vertical slices` — external/api-and-interface-design.md:12 — used here
- `Red-Green-Refactor` — external/api-and-interface-design.md:12 — used here
- `test pyramid` — external/api-and-interface-design.md:12 — used here
- `DAMP over DRY` — external/api-and-interface-design.md:12 — used here
- `Beyoncé Rule` — external/api-and-interface-design.md:12 — used here
- `Claude Code` — external/api-and-interface-design.md:15 — used here
- `Codex` — external/api-and-interface-design.md:15 — used here
- `Cursor` — external/api-and-interface-design.md:15 — used here
- `Antigravity` — external/api-and-interface-design.md:15 — used here
- `Evals framework` — external/api-and-interface-design.md:15 — used here

## Structure
- "api-and-interface-design" — external/api-and-interface-design.md:5
- "Install just this skill" — external/api-and-interface-design.md:5
- "How this skill is structured" — external/api-and-interface-design.md:8
- "Build phase" — external/api-and-interface-design.md:12
- "More in the Build phase" — external/api-and-interface-design.md:12
- "Product" — external/api-and-interface-design.md:15
- "Setup" — external/api-and-interface-design.md:15
- "Resources" — external/api-and-interface-design.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/api-and-interface-design.md:5 — The webpage summary emphasizes "Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." ("Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — external/api-and-interface-design.md:5), whereas the repository skill frontmatter description ("Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface. Use when creating REST or GraphQL endpoints, defining type contracts between modules, or establishing boundaries between frontend and backend." — skills/api-and-interface-design/SKILL.md:3) focuses on general triggers and boundaries without enumerating named design rules.
- doc-drift — external/api-and-interface-design.md:5 — The webpage shortens the trigger condition to "Designing APIs, module boundaries, or public interfaces." — external/api-and-interface-design.md:5, omitting the specific bulleted trigger list under "## When to Use" in skills/api-and-interface-design/SKILL.md:14-18 (new API endpoints, contracts between teams, component prop interfaces, database schema, changing existing interfaces).
- doc-drift — external/api-and-interface-design.md:10 — The webpage displays a standardized 6-part skill anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/api-and-interface-design.md:9; "Process" — external/api-and-interface-design.md:10; "Rationalizations" — external/api-and-interface-design.md:10), but skills/api-and-interface-design/SKILL.md does not contain a "Process" section (featuring instead "## Core Principles", "## REST API Patterns", and "## TypeScript Interface Patterns") and titles its rationalization section "## Common Rationalizations" rather than "Rationalizations".
- orphan — external/api-and-interface-design.md:1 — External documentation page is an orphan within the repository; no in-scope file in `sources/addy/` links to or invokes this external documentation page.

## Observations
Static web page snapshot hosted at `https://skills.addy.ie/skills/api-and-interface-design/` providing web catalog discovery. Connects `api-and-interface-design` to the `Build` phase and associates it with related skills (`incremental-implementation`, `test-driven-development`, `context-engineering`).

## Context cost
26413 bytes, ~5200 tokens.
