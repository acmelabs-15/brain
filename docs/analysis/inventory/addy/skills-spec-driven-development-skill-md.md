---
package: addy
path: skills/spec-driven-development/SKILL.md
type: skill
bytes: 12163
unit: inv-addy-46
aliases: []
memo_inputs:
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/spec-driven-development/SKILL.md

## Purpose — required, verbatim
> "Creates specs before coding. Use when starting a new project, feature, or significant change and no specification exists yet. Use when requirements are unclear, ambiguous, or only exist as a vague idea. Use when a single requirement spans several independently testable capabilities and needs decomposing into a capability map of modules before specifying." — skills/spec-driven-development/SKILL.md:3

## Design intent — required
Establishes a structured specification gate prior to any code generation, preventing the failure mode of AI agents guessing requirements or implementing half-understood instructions. It formalizes a four-phase gated workflow (Specify → Plan → Tasks → Implement), preceded by a capability decomposition gate (Phase 0) when single initiatives bundle several independently testable capabilities. By requiring a capability map with stable module IDs and acyclic dependencies, clarifying questions that surface implicit assumptions, a concrete six-part specification template (Objective, Commands, Project Structure, Code Style, Testing Strategy, Boundaries), and explicit reframing of instructions as testable success criteria, this skill ensures that humans and agents maintain a verifiable shared source of truth throughout the development lifecycle.

## Phase — required
addy:Define ("Define" — README.md:355; CLAUDE.md:21; skills/using-agent-skills/SKILL.md:172)

## Inputs — required
- High-level initiative vision, user stories, and ambiguous or incomplete requirements — skills/spec-driven-development/SKILL.md:14-15, 69
- Human feedback and answers to clarifying questions and surfaced assumptions — skills/spec-driven-development/SKILL.md:69-80
- Existing codebase structure, Prisma schemas, and directory conventions — skills/spec-driven-development/SKILL.md:77

## Outputs — required
- Capability map markdown artifact: `# Capability Map: [Initiative Name]` saved at project root — skills/spec-driven-development/SKILL.md:47, 65
- Scoped module specification documents: `SPEC-identity.md`, `SPEC-billing.md` — skills/spec-driven-development/SKILL.md:65
- Technical implementation plan: `tasks/plan.md` — skills/spec-driven-development/SKILL.md:176
- Discrete task breakdown list: `tasks/todo.md` — skills/spec-driven-development/SKILL.md:176

## Invokes — required
- skill api-and-interface-design — skills/spec-driven-development/SKILL.md:61
- skill planning-and-task-breakdown — skills/spec-driven-development/SKILL.md:174
- skill incremental-implementation — skills/spec-driven-development/SKILL.md:202
- skill test-driven-development — skills/spec-driven-development/SKILL.md:202
- skill context-engineering — skills/spec-driven-development/SKILL.md:202

## Invoked by — required
- command /spec — commands/spec.toml:4
- command /spec — .claude/commands/spec.md:5
- command /spec — .gemini/commands/spec.toml:4
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:21
- skill interview-me — skills/interview-me/SKILL.md:183
- doc README.md — README.md:236
- doc CLAUDE.md — CLAUDE.md:21
- doc AGENTS.md — AGENTS.md:26

## Concepts named — required, verbatim
- `Spec-Driven Development` — skills/spec-driven-development/SKILL.md:6 — defined here
- `The Gated Workflow` — skills/spec-driven-development/SKILL.md:22 — defined here
- `Phase 0: Scope Check` — skills/spec-driven-development/SKILL.md:34 — defined here
- `capability map` — skills/spec-driven-development/SKILL.md:44 — defined here
- `Stable module ids` — skills/spec-driven-development/SKILL.md:59 — defined here
- `api-and-interface-design` — skills/spec-driven-development/SKILL.md:61 — used here
- `Phase 1: Specify` — skills/spec-driven-development/SKILL.md:67 — defined here
- `Objective` — skills/spec-driven-development/SKILL.md:86 — defined here
- `Commands` — skills/spec-driven-development/SKILL.md:88 — defined here
- `Project Structure` — skills/spec-driven-development/SKILL.md:96 — defined here
- `Code Style` — skills/spec-driven-development/SKILL.md:106 — defined here
- `Testing Strategy` — skills/spec-driven-development/SKILL.md:108 — defined here
- `Boundaries` — skills/spec-driven-development/SKILL.md:110 — defined here
- `Success Criteria` — skills/spec-driven-development/SKILL.md:143 — defined here
- `Phase 2: Plan` — skills/spec-driven-development/SKILL.md:164 — defined here
- `planning-and-task-breakdown` — skills/spec-driven-development/SKILL.md:174 — used here
- `tasks/plan.md` — skills/spec-driven-development/SKILL.md:176 — defined here
- `tasks/todo.md` — skills/spec-driven-development/SKILL.md:176 — defined here
- `Phase 3: Tasks` — skills/spec-driven-development/SKILL.md:180 — defined here
- `Phase 4: Implement` — skills/spec-driven-development/SKILL.md:200 — defined here
- `incremental-implementation` — skills/spec-driven-development/SKILL.md:202 — used here
- `test-driven-development` — skills/spec-driven-development/SKILL.md:202 — used here
- `context-engineering` — skills/spec-driven-development/SKILL.md:202 — used here
- `Keeping the Spec Alive` — skills/spec-driven-development/SKILL.md:204 — defined here
- `Common Rationalizations` — skills/spec-driven-development/SKILL.md:213 — defined here
- `Red Flags` — skills/spec-driven-development/SKILL.md:225 — defined here
- `Verification` — skills/spec-driven-development/SKILL.md:235 — defined here

## Structure
- `# Spec-Driven Development` — skills/spec-driven-development/SKILL.md:6
- `## Overview` — skills/spec-driven-development/SKILL.md:8
- `## When to Use` — skills/spec-driven-development/SKILL.md:12
- `## The Gated Workflow` — skills/spec-driven-development/SKILL.md:22
- `### Phase 0: Scope Check` — skills/spec-driven-development/SKILL.md:34
- `### Phase 1: Specify` — skills/spec-driven-development/SKILL.md:67
- `### Phase 2: Plan` — skills/spec-driven-development/SKILL.md:164
- `### Phase 3: Tasks` — skills/spec-driven-development/SKILL.md:180
- `### Phase 4: Implement` — skills/spec-driven-development/SKILL.md:200
- `## Keeping the Spec Alive` — skills/spec-driven-development/SKILL.md:204
- `## Common Rationalizations` — skills/spec-driven-development/SKILL.md:213
- `## Red Flags` — skills/spec-driven-development/SKILL.md:225
- `## Verification` — skills/spec-driven-development/SKILL.md:235

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — skills/spec-driven-development/SKILL.md:3: Frontmatter description ("Creates specs before coding. Use when starting a new project, feature, or significant change and no specification exists yet. Use when requirements are unclear, ambiguous, or only exist as a vague idea. Use when a single requirement spans several independently testable capabilities and needs decomposing into a capability map of modules before specifying." — skills/spec-driven-development/SKILL.md:3) covers Phase 0 capability map decomposition, but `README.md:236` omits Phase 0 and describes the skill as "Write a PRD covering objectives, commands, structure, code style, testing, and boundaries before any code".
- doc-drift — skills/spec-driven-development/SKILL.md:176: Prescribes hardcoded default paths `tasks/plan.md` and `tasks/todo.md` ("Save the plan to `tasks/plan.md` and record the task list in the task list target defined by `planning-and-task-breakdown` (default `tasks/todo.md`; projects may designate an external tracker instead)." — skills/spec-driven-development/SKILL.md:176), creating a discrepancy when projects designate an external tracker.

## Observations
- Phase 0 introduces a capability map pattern with kebab-case stable module IDs, acyclic dependency directions, boundary interfaces, and human review gates before individual module specifications are drafted.
- Implements a three-tier boundary model (Always do, Ask first, Never do) directly inside the spec template to constrain agent autonomy.
- Embeds prompt reframing technique translating subjective requests (e.g. "Make the dashboard faster" — skills/spec-driven-development/SKILL.md:153) into concrete numeric success criteria (LCP, load time, CLS) before planning.

## Context cost
12,163 bytes (~3,040 tokens). Follows downstream invocations to `planning-and-task-breakdown` (13,446 bytes), `incremental-implementation` (9,568 bytes), and `test-driven-development` (16,483 bytes) across the gated workflow.
