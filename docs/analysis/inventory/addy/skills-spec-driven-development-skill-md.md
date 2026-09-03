---
package: addy
path: skills/spec-driven-development/SKILL.md
type: skill
bytes: 12163
unit: inv-addy-15
---

# skills/spec-driven-development/SKILL.md

## Purpose — required, verbatim
> "Write a structured specification before writing any code. The spec is the shared source of truth between you and the human engineer — it defines what we're building, why, and how we'll know it's done. Code without a spec is guessing." — skills/spec-driven-development/SKILL.md:10

## Design intent — required
Establishes the upfront specification gate for the Addy engineering lifecycle, preventing premature coding and ungrounded architectural guessing. It introduces a rigorous 4-phase sequential workflow (`Specify → Plan → Tasks → Implement`), optionally preceded by `Phase 0: Scope Check` which decomposes multi-capability initiatives into a reviewable `Capability Map` with stable module IDs, acyclic dependency directions, and defined build order before per-module specification begins. It forces active surfacing of assumptions, reframes vague requests into verifiable success criteria, structures specifications across six mandatory core areas (Objective, Commands, Project Structure, Code Style, Testing Strategy, Boundaries), and establishes a living document contract so specifications evolve with changing decisions rather than becoming obsolete.

## Phase — required
addy:Define

## Inputs — required
- User request / vision for project, feature, or change (`skills/spec-driven-development/SKILL.md:14, 69`)
- Answers to clarifying questions from the human engineer (`skills/spec-driven-development/SKILL.md:69`)
- Existing codebase context (e.g. Prisma schema, existing directory structure, commands) (`skills/spec-driven-development/SKILL.md:77, 88-104`)
- Product briefs or initiative descriptions (e.g. portal-brief.md, billing-brief.md) (`evals/cases/spec-driven-development.json:44, 58`)
- Downstream methodology references: `api-and-interface-design` (`skills/spec-driven-development/SKILL.md:61`), `planning-and-task-breakdown` (`skills/spec-driven-development/SKILL.md:174, 176, 190`), `incremental-implementation` (`skills/spec-driven-development/SKILL.md:202`), `test-driven-development` (`skills/spec-driven-development/SKILL.md:202`), `context-engineering` (`skills/spec-driven-development/SKILL.md:202`)

## Outputs — required
- `Capability Map: [Initiative Name]` table at project root when Phase 0 triggers (`skills/spec-driven-development/SKILL.md:46-57, 65`)
- Spec document saved to a file in repository: `SPEC.md` at project root (or `SPEC-[module-id].md` when decomposed, or `docs/SPEC.md`) (`skills/spec-driven-development/SKILL.md:65, 243`; `.claude/commands/spec.md:17`; `commands/spec.toml:16`; `scripts/validate-artifact-paths.js:36-37`)
- Implementation plan saved to `tasks/plan.md` (via Phase 2: Plan) (`skills/spec-driven-development/SKILL.md:176`)
- Task list saved to `tasks/todo.md` or external tracker (via Phase 3: Tasks) (`skills/spec-driven-development/SKILL.md:176, 193-198`)
- Surfaced assumptions list and reframed success criteria (`skills/spec-driven-development/SKILL.md:74-80, 155-160`)
- Human approvals across each gated phase boundary (`skills/spec-driven-development/SKILL.md:27-32, 63, 178, 240`)

## Invokes — required
- skill api-and-interface-design — skills/spec-driven-development/SKILL.md:61
- skill planning-and-task-breakdown — skills/spec-driven-development/SKILL.md:174, 176, 190
- skill incremental-implementation — skills/spec-driven-development/SKILL.md:202
- skill test-driven-development — skills/spec-driven-development/SKILL.md:202
- skill context-engineering — skills/spec-driven-development/SKILL.md:202

## Invoked by — required
- command .claude/commands/spec.md — .claude/commands/spec.md:5
- command commands/spec.toml — commands/spec.toml:4
- doc README.md — README.md:184, README.md:196, README.md:236, README.md:355
- doc CLAUDE.md — CLAUDE.md:21
- doc AGENTS.md — AGENTS.md:26, AGENTS.md:40
- skill skills/interview-me/SKILL.md — skills/interview-me/SKILL.md:14, skills/interview-me/SKILL.md:183, skills/interview-me/SKILL.md:225
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:21, skills/using-agent-skills/SKILL.md:137, skills/using-agent-skills/SKILL.md:139, skills/using-agent-skills/SKILL.md:148, skills/using-agent-skills/SKILL.md:172
- doc docs/adoption-guide.md — docs/adoption-guide.md:39
- doc docs/getting-started.md — docs/getting-started.md:50, docs/getting-started.md:61, docs/getting-started.md:111, docs/getting-started.md:161
- doc docs/antigravity-setup.md — docs/antigravity-setup.md:52, docs/antigravity-setup.md:90
- doc docs/codex-setup.md — docs/codex-setup.md:25, docs/codex-setup.md:33
- doc docs/commandcode-setup.md — docs/commandcode-setup.md:20, docs/commandcode-setup.md:41, docs/commandcode-setup.md:42, docs/commandcode-setup.md:52
- doc docs/cursor-setup.md — docs/cursor-setup.md:155
- doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:76
- doc docs/opencode-setup.md — docs/opencode-setup.md:33, docs/opencode-setup.md:64, docs/opencode-setup.md:68, docs/opencode-setup.md:92, docs/opencode-setup.md:116, docs/opencode-setup.md:160, docs/opencode-setup.md:168, docs/opencode-setup.md:209
- config evals/cases/spec-driven-development.json — evals/cases/spec-driven-development.json:2, evals/cases/spec-driven-development.json:47, evals/cases/spec-driven-development.json:61
- config evals/cases/browser-testing-with-devtools.json — evals/cases/browser-testing-with-devtools.json:21
- script scripts/validate-artifact-paths.js — scripts/validate-artifact-paths.js:48
- script scripts/validate-artifact-paths-test.js — scripts/validate-artifact-paths-test.js:48, scripts/validate-artifact-paths-test.js:97
- external-doc sources/addy-external/spec-driven-development.md — sources/addy-external/spec-driven-development.md:1, sources/addy-external/spec-driven-development.md:5, sources/addy-external/spec-driven-development.md:8

## Concepts named — required, verbatim
- `spec-driven-development` — skills/spec-driven-development/SKILL.md:2, 6 — defined here
- `spec` — skills/spec-driven-development/SKILL.md:10, 204 — defined here
- `The Gated Workflow` — skills/spec-driven-development/SKILL.md:22, 26-32 — defined here
- `Phase 0: Scope Check` — skills/spec-driven-development/SKILL.md:24, 34 — defined here
- `Phase 1: Specify` — skills/spec-driven-development/SKILL.md:27, 67 — defined here
- `Phase 2: Plan` — skills/spec-driven-development/SKILL.md:27, 164 — defined here
- `Phase 3: Tasks` — skills/spec-driven-development/SKILL.md:27, 180 — defined here
- `Phase 4: Implement` — skills/spec-driven-development/SKILL.md:27, 200 — defined here
- `Capability map` — skills/spec-driven-development/SKILL.md:3, 44, 47, 244 — defined here
- `Module table` — skills/spec-driven-development/SKILL.md:44, 49 — defined here
- `Build order` — skills/spec-driven-development/SKILL.md:44, 56, 63, 244 — defined here
- `Module id` — skills/spec-driven-development/SKILL.md:49, 59, 244, 245 — defined here
- `Dependency direction` — skills/spec-driven-development/SKILL.md:60, 63, 244 — defined here
- `api-and-interface-design` — skills/spec-driven-development/SKILL.md:61 — used here
- `Assumptions list` — skills/spec-driven-development/SKILL.md:70, 74 — defined here
- `Six core areas` — skills/spec-driven-development/SKILL.md:84, 239 — defined here
- `Objective` — skills/spec-driven-development/SKILL.md:86, 120 — defined here
- `Commands` — skills/spec-driven-development/SKILL.md:88, 126 — defined here
- `Project Structure` — skills/spec-driven-development/SKILL.md:96, 129 — defined here
- `Code Style` — skills/spec-driven-development/SKILL.md:106, 132 — defined here
- `Testing Strategy` — skills/spec-driven-development/SKILL.md:108, 135 — defined here
- `Boundaries` — skills/spec-driven-development/SKILL.md:110, 138, 242 — defined here
- `Three-tier boundary system` — skills/spec-driven-development/SKILL.md:110-114, 139-141 — defined here
- `Spec template` — skills/spec-driven-development/SKILL.md:115-148 — defined here
- `Tech Stack` — skills/spec-driven-development/SKILL.md:123 — defined here
- `Success Criteria` — skills/spec-driven-development/SKILL.md:143, 150, 155, 241 — defined here
- `Open Questions` — skills/spec-driven-development/SKILL.md:146 — defined here
- `Reframe instructions as success criteria` — skills/spec-driven-development/SKILL.md:150, 155 — defined here
- `planning-and-task-breakdown` — skills/spec-driven-development/SKILL.md:174, 176, 190 — used here
- `Dependency-graph mapping` — skills/spec-driven-development/SKILL.md:174 — used here
- `Vertical-slicing` — skills/spec-driven-development/SKILL.md:174 — used here
- `tasks/plan.md` — skills/spec-driven-development/SKILL.md:176 — used here
- `tasks/todo.md` — skills/spec-driven-development/SKILL.md:176 — used here
- `Task template` — skills/spec-driven-development/SKILL.md:192-198 — defined here
- `skills/incremental-implementation/SKILL.md` — skills/spec-driven-development/SKILL.md:202 — used here
- `skills/test-driven-development/SKILL.md` — skills/spec-driven-development/SKILL.md:202 — used here
- `skills/context-engineering/SKILL.md` — skills/spec-driven-development/SKILL.md:202 — used here
- `Living document` — skills/spec-driven-development/SKILL.md:204, 206, 220 — defined here
- `Common Rationalizations` — skills/spec-driven-development/SKILL.md:214 — defined here
- `Red Flags` — skills/spec-driven-development/SKILL.md:225 — defined here
- `Verification checklist` — skills/spec-driven-development/SKILL.md:236-246 — defined here

## Structure
- Spec-Driven Development (line 6)
- Overview (line 8)
- When to Use (line 12)
- The Gated Workflow (line 22)
  - Phase 0: Scope Check (line 34)
  - Phase 1: Specify (line 67)
  - Phase 2: Plan (line 164)
  - Phase 3: Tasks (line 180)
  - Phase 4: Implement (line 200)
- Keeping the Spec Alive (line 204)
- Common Rationalizations (line 213)
- Red Flags (line 225)
- Verification (line 235)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — skills/spec-driven-development/SKILL.md:243 vs .claude/commands/spec.md:17, commands/spec.toml:16, docs/adoption-guide.md:39, and evals/cases/spec-driven-development.json:45 — The skill body specifies generic saving "to a file in the repository" (and `SPEC-<module-id>.md` for decomposed initiatives), omitting the canonical root filename `SPEC.md` that is explicitly mandated by `/spec` commands, adoption guide, and evals.
- doc-drift — skills/spec-driven-development/SKILL.md:10 vs README.md:236 and evals/cases/spec-driven-development.json:10 — `README.md` and positive eval triggers refer to the output artifact as a "PRD" ("Write a PRD covering objectives..."), whereas `SKILL.md` exclusively specifies a "structured specification" / "spec" and never uses the acronym "PRD".
- doc-drift — skills/spec-driven-development/SKILL.md:202 — Uses full relative path syntax `skills/incremental-implementation/SKILL.md` rather than the standardized skill name format used in other skills and in skill-lint patterns.
- doc-drift — scripts/validate-artifact-paths.js:35-40 vs skills/spec-driven-development/SKILL.md:65 — `validate-artifact-paths.js` allowlist only allows `SPEC.md` and `docs/SPEC.md`, omitting the multi-module pattern `SPEC-<module-id>.md` explicitly prescribed in Phase 0.

## Observations
- Introduces `Phase 0: Scope Check` to explicitly resolve the monolithic specification trap, decomposing large requests into modular capability maps before specifying.
- Connects cleanly to the whole engineering chain: invokes `planning-and-task-breakdown` for Plan/Tasks phases, and invokes `incremental-implementation`, `test-driven-development`, and `context-engineering` for Implement.
- Acronym disambiguation: Note that "SDD" in `hooks/sdd-cache-*` refers to `source-driven-development`, not `spec-driven-development`.

## Context cost
File alone: 12,163 bytes (~3,040 tokens). Total transitive invocation graph (`api-and-interface-design` 14,884 B + `planning-and-task-breakdown` 10,564 B + `incremental-implementation` 9,507 B + `test-driven-development` 16,483 B + `context-engineering` 11,070 B) = 74,671 bytes (~18,668 tokens).
