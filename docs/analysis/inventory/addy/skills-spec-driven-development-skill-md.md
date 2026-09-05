---
package: addy
path: skills/spec-driven-development/SKILL.md
type: skill
bytes: 12163
unit: inv-addy-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/spec-driven-development/SKILL.md

## Purpose — required, verbatim
> "Creates specs before coding. Use when starting a new project, feature, or significant change and no specification exists yet. Use when requirements are unclear, ambiguous, or only exist as a vague idea. Use when a single requirement spans several independently testable capabilities and needs decomposing into a capability map of modules before specifying." — skills/spec-driven-development/SKILL.md:3

## Design intent — required
Establishes a human-in-the-loop gated workflow (Specify → Plan → Tasks → Implement) that mandates creating a structured specification before writing code. To prevent monolithic and unmanageable specifications when a request bundles multiple independently testable capabilities, it introduces a Phase 0 scope check that decomposes the initiative into an approved capability map of stable module IDs, dependency direction, and build order. Each module is then specified across six core areas (Objective, Commands, Project Structure, Code Style, Testing Strategy, Boundaries) and kept alive as version-controlled documentation. Without this skill, agents proceed on unstated assumptions, create sprawling and unfocused diffs, and produce code that fails to align with user expectations.

## Phase — required
addy:Define

## Inputs — required
- High-level vision, requirements, or initiative requests from the user — skills/spec-driven-development/SKILL.md:38, 69
- Clarifying requirements questions and human feedback — skills/spec-driven-development/SKILL.md:69
- Explicit assumptions surfaced for early human correction (`ASSUMPTIONS I'M MAKING`) — skills/spec-driven-development/SKILL.md:74
- Existing codebase context (e.g. schemas, existing directory structure, dependencies) — skills/spec-driven-development/SKILL.md:77

## Outputs — required
- Capability map at project root for multi-capability initiatives (`Capability Map: [Initiative Name]`) — skills/spec-driven-development/SKILL.md:47, 65
- Module specification documents (`SPEC-[module-id].md` or `SPEC.md`) covering six core areas and success criteria — skills/spec-driven-development/SKILL.md:65, 84, 118, 143
- Technical implementation plan saved to `tasks/plan.md` — skills/spec-driven-development/SKILL.md:176
- Task list saved to `tasks/todo.md` (or external tracker target) — skills/spec-driven-development/SKILL.md:176, 193

## Invokes — required
- skill api-and-interface-design — skills/spec-driven-development/SKILL.md:61
- skill planning-and-task-breakdown — skills/spec-driven-development/SKILL.md:174
- skill incremental-implementation — skills/spec-driven-development/SKILL.md:202
- skill test-driven-development — skills/spec-driven-development/SKILL.md:202
- skill context-engineering — skills/spec-driven-development/SKILL.md:202

## Invoked by — required
- command .claude/commands/spec.md — .claude/commands/spec.md:5
- command commands/spec.toml — commands/spec.toml:4
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:21
- skill interview-me — skills/interview-me/SKILL.md:183

## Concepts named — required, verbatim
- `spec-driven-development` — skills/spec-driven-development/SKILL.md:2 — defined here
- `Spec-Driven Development` — skills/spec-driven-development/SKILL.md:6 — defined here
- `Overview` — skills/spec-driven-development/SKILL.md:8 — defined here
- `When to Use` — skills/spec-driven-development/SKILL.md:12 — defined here
- `The Gated Workflow` — skills/spec-driven-development/SKILL.md:22 — defined here
- `SPECIFY` — skills/spec-driven-development/SKILL.md:27 — defined here
- `PLAN` — skills/spec-driven-development/SKILL.md:27 — defined here
- `TASKS` — skills/spec-driven-development/SKILL.md:27 — defined here
- `IMPLEMENT` — skills/spec-driven-development/SKILL.md:27 — defined here
- `Phase 0: Scope Check` — skills/spec-driven-development/SKILL.md:34 — defined here
- `capability map` — skills/spec-driven-development/SKILL.md:44 — defined here
- `Capability Map` — skills/spec-driven-development/SKILL.md:47 — defined here
- `Phase 1: Specify` — skills/spec-driven-development/SKILL.md:67 — defined here
- `ASSUMPTIONS I'M MAKING` — skills/spec-driven-development/SKILL.md:74 — defined here
- `Objective` — skills/spec-driven-development/SKILL.md:86 — defined here
- `Commands` — skills/spec-driven-development/SKILL.md:88 — defined here
- `Project Structure` — skills/spec-driven-development/SKILL.md:96 — defined here
- `Code Style` — skills/spec-driven-development/SKILL.md:106 — defined here
- `Testing Strategy` — skills/spec-driven-development/SKILL.md:108 — defined here
- `Boundaries` — skills/spec-driven-development/SKILL.md:110 — defined here
- `Always do` — skills/spec-driven-development/SKILL.md:111 — defined here
- `Ask first` — skills/spec-driven-development/SKILL.md:112 — defined here
- `Never do` — skills/spec-driven-development/SKILL.md:113 — defined here
- `Success Criteria` — skills/spec-driven-development/SKILL.md:143 — defined here
- `Open Questions` — skills/spec-driven-development/SKILL.md:146 — defined here
- `Phase 2: Plan` — skills/spec-driven-development/SKILL.md:164 — defined here
- `Phase 3: Tasks` — skills/spec-driven-development/SKILL.md:180 — defined here
- `Phase 4: Implement` — skills/spec-driven-development/SKILL.md:200 — defined here
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
- doc-drift — "Write a PRD" — README.md:236 — README.md:236 summarizes the output as a PRD ("Write a PRD covering objectives, commands, structure, code style, testing, and boundaries before any code"), whereas the in-repo skill defines the output as a structured specification document ("SPEC.md" or "SPEC-[module-id].md") and does not use the term PRD.

## Observations
Mandates decomposing multi-capability requests into an approved capability map (with kebab-case IDs, unidirectional dependencies, and build order) before authoring module specs, preventing monolithic specs and keeping tasks independently testable.

## Context cost
12,163 bytes (~3,100 tokens). Invokes `api-and-interface-design`, `planning-and-task-breakdown`, `incremental-implementation`, `test-driven-development`, `context-engineering`.
