---
package: rjm
path: .claude/skills/requirements-interview/SKILL.md
type: skill
bytes: 7928
unit: inv-rjm-146
in_scope_via: .claude/commands/spec.md
aliases: []
memo_inputs:
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/requirements-interview/SKILL.md

## Purpose — required, verbatim
> "When this skill activates, you become an adversarial requirements interviewer. The goal is shared understanding before any code or design work. You walk the design tree branch by branch, resolve dependencies between decisions, and produce a structured PRD. Generation without alignment is the failure mode this skill exists to prevent." — .claude/skills/requirements-interview/SKILL.md:16

## Design intent — required
Interactive, adversarial requirements elicitation skill implementing the Matt Pocock "grill-me" pattern. Prevents "generation without alignment" by systematically interrogating the user across eight canonical design tree branches (user stories, ontology, data model, integrations, failure modes, security, observability, scope boundaries). Enforces relentless question discipline: every question must propose a recommended answer with cited evidence (ADR, code path, or prior art); codebase inspection (Grep/Read) is required prior to questioning; every decision must be explicitly resolved (`CONFIRMED`, `OVERRIDDEN`, `DEFERRED`, `OUT_OF_SCOPE`); and the output is formalized into an interview transcript (`.agents/specs/interviews/INTERVIEW-<slug>.md`) and a structured PRD with EARS syntax acceptance criteria for downstream consumption by `spec-generator`.

## Phase — required
rjm:spec

## Inputs — required
- Free-form problem statement, issue body, or feature title.
- Optional requirements draft, related code paths, ADR identifiers.
- Optional `OntologyFragment` from `/spec` Step 1 (O1-O7 canonical names).
- Codebase context queried via Read, Glob, Grep.

## Outputs — required
- Interview transcript: `.agents/specs/interviews/INTERVIEW-<slug>.md`
- Structured requirements (PRD) returned to caller containing sections: Problem, User stories, Ontology, Data model, Integrations, Failure modes, Security, Observability, Acceptance criteria (EARS syntax), Out of scope, Deferred, Open questions.

## Invokes — required
- doc security.md — .claude/skills/requirements-interview/SKILL.md:71
- reference mental-models-circle-of-competence.md — .claude/skills/requirements-interview/SKILL.md:112
- skill decision-critic — .claude/skills/requirements-interview/SKILL.md:113
- skill pre-mortem — .claude/skills/requirements-interview/SKILL.md:113
- skill cynefin-classifier — .claude/skills/requirements-interview/SKILL.md:113

## Invoked by — required
- command spec.md — .claude/commands/spec.md:31
- reference spec-prior-art-schema.md — .claude/skills/spec-generator/references/spec-prior-art-schema.md:155

## Concepts named — required, verbatim
- `requirements-interview` — .claude/skills/requirements-interview/SKILL.md:2 — defined here
- `grill-me pattern` — .claude/skills/requirements-interview/SKILL.md:4 — defined here
- `design tree` — .claude/skills/requirements-interview/SKILL.md:4 — defined here
- `Triggers` — .claude/skills/requirements-interview/SKILL.md:18 — defined here
- `Interview transcript` — .claude/skills/requirements-interview/SKILL.md:38 — defined here
- `Structured requirements` — .claude/skills/requirements-interview/SKILL.md:39 — defined here
- `OntologyFragment` — .claude/skills/requirements-interview/SKILL.md:31 — used here
- `Question Discipline` — .claude/skills/requirements-interview/SKILL.md:53 — defined here
- `Branch Checklist` — .claude/skills/requirements-interview/SKILL.md:62 — defined here
- `Anti-Patterns` — .claude/skills/requirements-interview/SKILL.md:75 — defined here
- `Verification` — .claude/skills/requirements-interview/SKILL.md:85 — defined here
- `Structured Output` — .claude/skills/requirements-interview/SKILL.md:94 — defined here
- `EARS syntax` — .claude/skills/requirements-interview/SKILL.md:96 — used here
- `Handoff` — .claude/skills/requirements-interview/SKILL.md:98 — defined here
- `spec-generator` — .claude/skills/requirements-interview/SKILL.md:100 — used here
- `Circle of Competence` — .claude/skills/requirements-interview/SKILL.md:112 — used here

## Structure
- `# Requirements Interview (grill-me pattern)` — .claude/skills/requirements-interview/SKILL.md:14
- `## Triggers` — .claude/skills/requirements-interview/SKILL.md:18
- `## Inputs` — .claude/skills/requirements-interview/SKILL.md:27
- `## Outputs` — .claude/skills/requirements-interview/SKILL.md:34
- `## Process` — .claude/skills/requirements-interview/SKILL.md:41
- `## Question Discipline` — .claude/skills/requirements-interview/SKILL.md:53
- `## Branch Checklist` — .claude/skills/requirements-interview/SKILL.md:62
- `## Anti-Patterns` — .claude/skills/requirements-interview/SKILL.md:75
- `## Verification` — .claude/skills/requirements-interview/SKILL.md:85
- `## Structured Output` — .claude/skills/requirements-interview/SKILL.md:94
- `## Handoff` — .claude/skills/requirements-interview/SKILL.md:98
- `## References` — .claude/skills/requirements-interview/SKILL.md:108

## Defects — required
none

## Observations
- Direct provenance link to Matt Pocock's `aihero.dev` grill-me pattern (<https://www.aihero.dev/my-grill-me-skill-has-gone-viral>).
- Upstream attribution explicitly cites <https://github.com/mattpocock/skills>.
- Downstream handoff pipeline is tightly specified: produces structured PRD inputs consumed by `spec-generator` which produces `REQ-NNN`, `DESIGN-NNN`, and `TASK-NNN` files.
- Context cost: 7928 bytes (~1982 tokens); with reference: 12502 bytes (~3125 tokens).

## Context cost
7928 bytes (~1982 tokens); with reference: 12502 bytes (~3125 tokens).
