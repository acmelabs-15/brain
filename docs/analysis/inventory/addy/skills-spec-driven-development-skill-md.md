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
verified: 2026-09-04 quote-check+coverage
---

# skills/spec-driven-development/SKILL.md

## Purpose — required, verbatim
> "Creates specs before coding. Use when starting a new project, feature, or significant change and no specification exists yet. Use when requirements are unclear, ambiguous, or only exist as a vague idea. Use when a single requirement spans several independently testable capabilities and needs decomposing into a capability map of modules before specifying." — skills/spec-driven-development/SKILL.md:3

## Design intent — required
Prevents developers and AI agents from guessing implementation details on ambiguous or complex features by enforcing a phased, human-gated specification workflow. It introduces a preliminary capability mapping step (Phase 0) for multi-capability requirements, followed by human review gates across four sequential phases (Specify, Plan, Tasks, Implement) and produces a living specification document covering six core architectural areas.

## Phase — required
addy:Define

## Inputs — required
- User requirements, project descriptions, or feature requests (skills/spec-driven-development/SKILL.md:3, 38)
- Clarifying interview answers and confirmed assumptions (skills/spec-driven-development/SKILL.md:69, 74)
- Existing project artifacts such as schema or dependency files (skills/spec-driven-development/SKILL.md:77)

## Outputs — required
- Approved capability map (`Capability Map: [Initiative Name]` — skills/spec-driven-development/SKILL.md:47)
- Module specification files (`SPEC-identity.md`, `SPEC-billing.md` — skills/spec-driven-development/SKILL.md:65)
- Technical implementation plan saved to `tasks/plan.md` (skills/spec-driven-development/SKILL.md:176)
- Task list saved to `tasks/todo.md` (skills/spec-driven-development/SKILL.md:176, 193)

## Invokes — required
- skill api-and-interface-design — skills/spec-driven-development/SKILL.md:61
- skill planning-and-task-breakdown — skills/spec-driven-development/SKILL.md:174
- skill incremental-implementation — skills/spec-driven-development/SKILL.md:202
- skill test-driven-development — skills/spec-driven-development/SKILL.md:202
- skill context-engineering — skills/spec-driven-development/SKILL.md:202

## Invoked by — required
- .claude/commands/spec.md:5
- commands/spec.toml:4
- skills/using-agent-skills/SKILL.md:21
- skills/interview-me/SKILL.md:183
- CLAUDE.md:21
- README.md:236

## Concepts named — required, verbatim
- `spec-driven-development` — skills/spec-driven-development/SKILL.md:2 — defined here
- `The Gated Workflow` — skills/spec-driven-development/SKILL.md:22 — defined here
- `SPECIFY` — skills/spec-driven-development/SKILL.md:27 — defined here
- `PLAN` — skills/spec-driven-development/SKILL.md:27 — defined here
- `TASKS` — skills/spec-driven-development/SKILL.md:27 — defined here
- `IMPLEMENT` — skills/spec-driven-development/SKILL.md:27 — defined here
- `Scope Check` — skills/spec-driven-development/SKILL.md:34 — defined here
- `capability map` — skills/spec-driven-development/SKILL.md:44 — defined here
- `api-and-interface-design` — skills/spec-driven-development/SKILL.md:61 — used here
- `SPEC-identity.md` — skills/spec-driven-development/SKILL.md:65 — defined here
- `SPEC-billing.md` — skills/spec-driven-development/SKILL.md:65 — defined here
- `ASSUMPTIONS I'M MAKING` — skills/spec-driven-development/SKILL.md:74 — defined here
- `Boundaries` — skills/spec-driven-development/SKILL.md:110 — defined here
- `Always do` — skills/spec-driven-development/SKILL.md:111 — defined here
- `Ask first` — skills/spec-driven-development/SKILL.md:112 — defined here
- `Never do` — skills/spec-driven-development/SKILL.md:113 — defined here
- `Spec template` — skills/spec-driven-development/SKILL.md:115 — defined here
- `Success Criteria` — skills/spec-driven-development/SKILL.md:143 — defined here
- `Open Questions` — skills/spec-driven-development/SKILL.md:146 — defined here
- `planning-and-task-breakdown` — skills/spec-driven-development/SKILL.md:174 — used here
- `tasks/plan.md` — skills/spec-driven-development/SKILL.md:176 — defined here
- `tasks/todo.md` — skills/spec-driven-development/SKILL.md:176 — defined here
- `Task template` — skills/spec-driven-development/SKILL.md:192 — defined here
- `incremental-implementation` — skills/spec-driven-development/SKILL.md:202 — used here
- `test-driven-development` — skills/spec-driven-development/SKILL.md:202 — used here
- `context-engineering` — skills/spec-driven-development/SKILL.md:202 — used here
- `Keeping the Spec Alive` — skills/spec-driven-development/SKILL.md:204 — defined here
- `Common Rationalizations` — skills/spec-driven-development/SKILL.md:213 — defined here
- `Red Flags` — skills/spec-driven-development/SKILL.md:225 — defined here
- `Verification` — skills/spec-driven-development/SKILL.md:235 — defined here

## Structure
- # Spec-Driven Development — skills/spec-driven-development/SKILL.md:6
- ## Overview — skills/spec-driven-development/SKILL.md:8
- ## When to Use — skills/spec-driven-development/SKILL.md:12
- ## The Gated Workflow — skills/spec-driven-development/SKILL.md:22
- ### Phase 0: Scope Check — skills/spec-driven-development/SKILL.md:34
- ### Phase 1: Specify — skills/spec-driven-development/SKILL.md:67
- ### Phase 2: Plan — skills/spec-driven-development/SKILL.md:164
- ### Phase 3: Tasks — skills/spec-driven-development/SKILL.md:180
- ### Phase 4: Implement — skills/spec-driven-development/SKILL.md:200
- ## Keeping the Spec Alive — skills/spec-driven-development/SKILL.md:204
- ## Common Rationalizations — skills/spec-driven-development/SKILL.md:213
- ## Red Flags — skills/spec-driven-development/SKILL.md:225
- ## Verification — skills/spec-driven-development/SKILL.md:235

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Bridges high-level requirement elicitation with decomposed implementation through a formal Phase 0 Scope Check and capability mapping pattern before detailed module specifications are drafted.
- Implements strict human gates at every transition: Specify, Plan, Tasks, and Implement all require explicit human review and approval.
- Emphasizes reframing vague instructions into concrete, testable success criteria with quantifiable targets (e.g. LCP < 2.5s, data load < 500ms).
- Coordinates execution downstream with `planning-and-task-breakdown` (delegating plan and task formats), `incremental-implementation`, `test-driven-development`, and `context-engineering`.

## Context cost
12163 bytes (~3041 tokens). Invocations load `api-and-interface-design` (12861 bytes), `planning-and-task-breakdown` (10564 bytes), `incremental-implementation` (9507 bytes), `test-driven-development` (16483 bytes), and `context-engineering` (11070 bytes), totaling ~72648 bytes (~18162 tokens).
