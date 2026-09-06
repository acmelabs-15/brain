---
package: rjm
path: .claude/skills/codebase-documenter/references/documentation_guidelines.md
type: reference
bytes: 3923
unit: inv-rjm-103
in_scope_via: .claude/skills/codebase-documenter/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/codebase-documenter/references/documentation_guidelines.md, sha256: d9e4cd99dbc46630afb6fb6909561ebf5ee715e677b8a537225ad58d01a17016}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/codebase-documenter/references/documentation_guidelines.md

## Purpose — required, verbatim
> "These standards apply to every document this skill scaffolds. Keep them in sight while filling in placeholders." — .claude/skills/codebase-documenter/references/documentation_guidelines.md:3

## Design intent — required
Defines the authoritative prose standards, structural architecture, audience calibration, and review checklists for all documentation scaffolded by the codebase-documenter skill. It dictates active voice, second-person framing ("you"), concrete nouns, and sub-20-word sentence bounds, while prohibiting marketing exaggeration ("blazing fast"), weasel words ("almost"), filler phrases ("due to the fact that"), and apologetic prose. It establishes progressive disclosure principles, a five-minute read ceiling per document, strict bracketed placeholder formatting (`[...]`) to prevent syntax collisions in code blocks, runnable code sample standards, bidirectional linkage between README and deep docs, and a final self-review gate.

## Phase — required
cross-phase

## Inputs — required
- Scaffolding templates, generated documentation drafts, code samples, and architecture diagrams under review.

## Outputs — required
none

## Invokes — required
- reference visual_aids_guide.md — .claude/skills/codebase-documenter/references/documentation_guidelines.md:61

## Invoked by — required
- skill codebase-documenter — .claude/skills/codebase-documenter/SKILL.md:55

## Concepts named — required, verbatim
- `Documentation Guidelines` — .claude/skills/codebase-documenter/references/documentation_guidelines.md:1 — defined here
- `Voice` — .claude/skills/codebase-documenter/references/documentation_guidelines.md:5 — defined here
- `Structure` — .claude/skills/codebase-documenter/references/documentation_guidelines.md:13 — defined here
- `progressive disclosure` — .claude/skills/codebase-documenter/references/documentation_guidelines.md:15 — defined here
- `Audience` — .claude/skills/codebase-documenter/references/documentation_guidelines.md:23 — defined here
- `Placeholder Convention` — .claude/skills/codebase-documenter/references/documentation_guidelines.md:34 — defined here
- `What to Avoid` — .claude/skills/codebase-documenter/references/documentation_guidelines.md:44 — defined here
- `Code Samples` — .claude/skills/codebase-documenter/references/documentation_guidelines.md:52 — defined here
- `Diagrams` — .claude/skills/codebase-documenter/references/documentation_guidelines.md:59 — defined here
- `Linkage` — .claude/skills/codebase-documenter/references/documentation_guidelines.md:63 — defined here
- `Self-Review` — .claude/skills/codebase-documenter/references/documentation_guidelines.md:69 — defined here

## Structure
- # Documentation Guidelines — .claude/skills/codebase-documenter/references/documentation_guidelines.md:1
- ## Voice — .claude/skills/codebase-documenter/references/documentation_guidelines.md:5
- ## Structure — .claude/skills/codebase-documenter/references/documentation_guidelines.md:13
- ## Audience — .claude/skills/codebase-documenter/references/documentation_guidelines.md:23
- ## Placeholder Convention — .claude/skills/codebase-documenter/references/documentation_guidelines.md:34
- ## What to Avoid — .claude/skills/codebase-documenter/references/documentation_guidelines.md:44
- ## Code Samples — .claude/skills/codebase-documenter/references/documentation_guidelines.md:52
- ## Diagrams — .claude/skills/codebase-documenter/references/documentation_guidelines.md:59
- ## Linkage — .claude/skills/codebase-documenter/references/documentation_guidelines.md:63
- ## Self-Review — .claude/skills/codebase-documenter/references/documentation_guidelines.md:69

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides clear rationale for using square brackets `[...]` rather than `<>` or `{}` for template placeholders: angular and curly braces frequently collide with generics and language syntax in programming code snippets.
- Precise audience definition: writes for a developer experienced in general software development who is merely unfamiliar with this specific repository, steering writers away from elementary language tutorials while avoiding insider assumptions.

## Context cost
3923 bytes (plus 3229 bytes from invoked visual_aids_guide.md = 7152 bytes total; approx. 1788 tokens).
