---
package: addy
path: skills/documentation-and-adrs/SKILL.md
type: skill
bytes: 9782
unit: inv-addy-20
---

# skills/documentation-and-adrs/SKILL.md

## Purpose — required, verbatim
> "Document decisions, not just code. The most valuable documentation captures the *why* — the context, constraints, and trade-offs that led to a decision. Code shows *what* was built; documentation explains *why it was built this way* and *what alternatives were considered*. This context is essential for future humans and agents working in the codebase." — skills/documentation-and-adrs/SKILL.md:10

## Design intent — required
Prevents institutional amnesia, redundant debates, and silent reversals of past decisions by creating durable, intent-driven documentation assets for humans and AI agents. It institutes lightweight, sequential Architecture Decision Records (ADRs) that prioritize matching existing repo conventions (`.adr-dir`, MADR, `adr-tools`) before defaulting to `docs/decisions/`, establishes strict inline commenting guidelines (documenting the *why*, never the *what*, and capturing runtime gotchas like SSR hydration hazards), standardizes typed API documentation (JSDoc/TSDoc with `@throws` and `@example`, OpenAPI/Swagger YAML schemas), specifies four-part README layouts, structures human-readable changelog maintenance, and defines agent-specific documentation surfaces (`CLAUDE.md`, rules files, spec files).

## Phase — required
addy:Ship

## Inputs — required
- Significant architectural decisions, framework choices, database schema designs, or authentication strategies (`skills/documentation-and-adrs/SKILL.md:27-35`)
- Existing repository ADR conventions, configuration files, and tools (`.adr-dir`, `docs/adr/*.md`, `Documentation/Decisions/*.rst`, MADR, `adr-tools`) (`skills/documentation-and-adrs/SKILL.md:36-45`)
- Public API interfaces and REST endpoints (`skills/documentation-and-adrs/SKILL.md:152-199`)
- Shipped features and user-facing behavioral modifications (`skills/documentation-and-adrs/SKILL.md:231-249`)

## Outputs — required
- Sequential Architecture Decision Records (default: `docs/decisions/ADR-NNN: <Title>.md`) with sections: Status, Date, Context, Decision, Alternatives Considered (with Pros, Cons, and Rejected rationale), Consequences (`skills/documentation-and-adrs/SKILL.md:46-91`)
- Inline TypeScript/JSDoc documentation for non-obvious algorithms and runtime gotchas (`skills/documentation-and-adrs/SKILL.md:108-150`)
- OpenAPI/Swagger YAML schema definitions for REST endpoints (`skills/documentation-and-adrs/SKILL.md:176-199`)
- Project README covering Quick Start, Commands, Architecture, and Contributing (`skills/documentation-and-adrs/SKILL.md:200-230`)
- Shipped version Changelog entries grouped by `Added`, `Fixed`, `Changed` (`skills/documentation-and-adrs/SKILL.md:231-249`)
- Updated rules files (`CLAUDE.md`, etc.) and specs tailored for AI agent context (`skills/documentation-and-adrs/SKILL.md:250-258, 288`)

## Invokes — required
- file CLAUDE.md — skills/documentation-and-adrs/SKILL.md:254, skills/documentation-and-adrs/SKILL.md:288

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:26
- doc README.md — README.md:46, README.md:276, README.md:377
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:47
- doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:95
- doc docs/opencode-setup.md — docs/opencode-setup.md:129
- doc docs/cursor-setup.md — docs/cursor-setup.md:164
- doc docs/copilot-setup.md — docs/copilot-setup.md:86
- doc docs/getting-started.md — docs/getting-started.md:78, docs/getting-started.md:143
- doc docs/adoption-guide.md — docs/adoption-guide.md:67
- config evals/cases/documentation-and-adrs.json — evals/cases/documentation-and-adrs.json:2
- fixture evals/fixtures/documentation-and-adrs/decision-context.md — evals/fixtures/documentation-and-adrs/decision-context.md:1
- external-doc sources/addy-external/documentation-and-adrs.md — sources/addy-external/documentation-and-adrs.md:1, sources/addy-external/documentation-and-adrs.md:5

## Concepts named — required, verbatim
- `documentation-and-adrs` — skills/documentation-and-adrs/SKILL.md:2 — defined here
- `Architecture Decision Records` — skills/documentation-and-adrs/SKILL.md:23 — defined here
- `ADRs` — skills/documentation-and-adrs/SKILL.md:23 — defined here
- `.adr-dir` — skills/documentation-and-adrs/SKILL.md:38 — used here
- `MADR` — skills/documentation-and-adrs/SKILL.md:40 — used here
- `adr-tools` — skills/documentation-and-adrs/SKILL.md:40 — used here
- `ADR Template` — skills/documentation-and-adrs/SKILL.md:46 — defined here
- `Status` — skills/documentation-and-adrs/SKILL.md:53 — defined here
- `Date` — skills/documentation-and-adrs/SKILL.md:56 — defined here
- `Context` — skills/documentation-and-adrs/SKILL.md:59 — defined here
- `Decision` — skills/documentation-and-adrs/SKILL.md:66 — defined here
- `Alternatives Considered` — skills/documentation-and-adrs/SKILL.md:69 — defined here
- `Consequences` — skills/documentation-and-adrs/SKILL.md:86 — defined here
- `ADR Lifecycle` — skills/documentation-and-adrs/SKILL.md:93 — defined here
- `PROPOSED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
- `ACCEPTED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
- `SUPERSEDED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
- `DEPRECATED` — skills/documentation-and-adrs/SKILL.md:96 — defined here
- `Inline Documentation` — skills/documentation-and-adrs/SKILL.md:102 — defined here
- `When to Comment` — skills/documentation-and-adrs/SKILL.md:104 — defined here
- `When NOT to Comment` — skills/documentation-and-adrs/SKILL.md:122 — defined here
- `Document Known Gotchas` — skills/documentation-and-adrs/SKILL.md:137 — defined here
- `API Documentation` — skills/documentation-and-adrs/SKILL.md:152 — defined here
- `Inline with Types` — skills/documentation-and-adrs/SKILL.md:156 — defined here
- `OpenAPI` — skills/documentation-and-adrs/SKILL.md:176 — used here
- `Swagger` — skills/documentation-and-adrs/SKILL.md:176 — used here
- `README Structure` — skills/documentation-and-adrs/SKILL.md:200 — defined here
- `Quick Start` — skills/documentation-and-adrs/SKILL.md:209 — defined here
- `Commands` — skills/documentation-and-adrs/SKILL.md:215 — defined here
- `Architecture` — skills/documentation-and-adrs/SKILL.md:223 — defined here
- `Contributing` — skills/documentation-and-adrs/SKILL.md:227 — defined here
- `Changelog Maintenance` — skills/documentation-and-adrs/SKILL.md:231 — defined here
- `Documentation for Agents` — skills/documentation-and-adrs/SKILL.md:250 — defined here
- `CLAUDE.md` — skills/documentation-and-adrs/SKILL.md:254 — used here
- `rules files` — skills/documentation-and-adrs/SKILL.md:254 — defined here
- `Spec files` — skills/documentation-and-adrs/SKILL.md:255 — used here
- `Common Rationalizations` — skills/documentation-and-adrs/SKILL.md:259 — defined here
- `Red Flags` — skills/documentation-and-adrs/SKILL.md:269 — defined here
- `Verification` — skills/documentation-and-adrs/SKILL.md:279 — defined here

## Structure
- Documentation and ADRs (line 6)
- Overview (line 8)
- When to Use (line 12)
- Architecture Decision Records (ADRs) (line 23)
  - When to Write an ADR (line 27)
  - Match the existing convention first (line 36)
  - ADR Template (line 46)
  - ADR Lifecycle (line 93)
- Inline Documentation (line 102)
  - When to Comment (line 104)
  - When NOT to Comment (line 122)
  - Document Known Gotchas (line 137)
- API Documentation (line 152)
  - Inline with Types (Preferred for TypeScript) (line 156)
  - OpenAPI / Swagger for REST APIs (line 176)
- README Structure (line 200)
- Changelog Maintenance (line 231)
- Documentation for Agents (line 250)
- Common Rationalizations (line 259)
- Red Flags (line 269)
- Verification (line 279)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · skills/documentation-and-adrs/SKILL.md:48 prescribes storing ADRs in `docs/decisions/`, but `sources/addy` does not practice this internally — no `docs/decisions/` directory exists in the repository.
- orphan · skills/documentation-and-adrs/SKILL.md:1-289 is not invoked by any slash command in `.claude/commands/` or `.claude-plugin/plugin.json`, nor mapped in `AGENTS.md:26-32` or `AGENTS.md:40-45`.

## Observations
- Strongly emphasizes convention matching before introducing ADR structures: inspecting `.adr-dir`, checking existing numbering schemes (`ADR-004-Title.rst` vs `0004-title.md`), and preserving established heading sets.
- Explicitly establishes documentation requirements tailored for AI coding agents (`CLAUDE.md`, spec files, immutable ADRs, inline gotchas), noting that "Agents do" read documentation to prevent recurring debates and hallucinated reversals.
- All 4 TypeScript code snippets (sliding window rate limiter, cart total reducer, theme initializer with SSR gotcha, typed task creator) and the OpenAPI YAML schema were extracted and programmatically validated with exit code 0 via `verify-inv-addy-20.ts`.

## Context cost
9,782 bytes (~2,450 tokens).
