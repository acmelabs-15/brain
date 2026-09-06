---
package: rjm
path: .claude/skills/codebase-documenter/assets/templates/README.template.md
type: skill
bytes: 1863
unit: inv-rjm-103
in_scope_via: .claude/skills/codebase-documenter/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/README.template.md, sha256: 2dfe13da1fa4d0635d07f6e73d358c70feca0d843c2166dec5eb9c9fbd8d9758}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/codebase-documenter/assets/templates/README.template.md

## Purpose — required, verbatim
> "[One-line summary of what this project does and who it is for.]" — .claude/skills/codebase-documenter/assets/templates/README.template.md:3
(no explicit purpose statement)

## Design intent — required
Acts as the canonical repository front-door template, establishing an immediate and frictionless entry point for newcomers. It enforces a five-minute onboarding rule (clone, install, run) preceded by a ten-second value proposition check in the "Why" section. By providing clean markdown scaffolding for directory layout, common task commands, configuration/environment variables, symptom-cause-fix troubleshooting, contributing guidelines, and licensing, it prevents repositories from launching with missing setup instructions, unsearchable screenshots, or buried prerequisites.

## Phase — required
cross-phase

## Inputs — required
- Project name, description, target audience, install/execution CLI commands, repo folder layout, environment variable definitions, common failure symptoms/fixes, and license type.

## Outputs — required
- README.md at repository root (or user-specified destination path).

## Invokes — required
none

## Invoked by — required
- skill codebase-documenter — .claude/skills/codebase-documenter/SKILL.md:50

## Concepts named — required, verbatim
- `Why` — .claude/skills/codebase-documenter/assets/templates/README.template.md:5 — defined here
- `Quick Start` — .claude/skills/codebase-documenter/assets/templates/README.template.md:9 — defined here
- `Project Structure` — .claude/skills/codebase-documenter/assets/templates/README.template.md:27 — defined here
- `Common Tasks` — .claude/skills/codebase-documenter/assets/templates/README.template.md:37 — defined here
- `Configuration` — .claude/skills/codebase-documenter/assets/templates/README.template.md:47 — defined here
- `Troubleshooting` — .claude/skills/codebase-documenter/assets/templates/README.template.md:56 — defined here
- `Contributing` — .claude/skills/codebase-documenter/assets/templates/README.template.md:64 — defined here
- `License` — .claude/skills/codebase-documenter/assets/templates/README.template.md:71 — defined here

## Structure
- # [Project name] — .claude/skills/codebase-documenter/assets/templates/README.template.md:1
- ## Why — .claude/skills/codebase-documenter/assets/templates/README.template.md:5
- ## Quick Start — .claude/skills/codebase-documenter/assets/templates/README.template.md:9
- ## Project Structure — .claude/skills/codebase-documenter/assets/templates/README.template.md:27
- ## Common Tasks — .claude/skills/codebase-documenter/assets/templates/README.template.md:37
- ## Configuration — .claude/skills/codebase-documenter/assets/templates/README.template.md:47
- ## Troubleshooting — .claude/skills/codebase-documenter/assets/templates/README.template.md:56
- ## Contributing — .claude/skills/codebase-documenter/assets/templates/README.template.md:64
- ## License — .claude/skills/codebase-documenter/assets/templates/README.template.md:71

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Directly encodes the 5-minute onboarding target from `references/documentation_guidelines.md:20,73`.
- Explicitly cautions that `.env` files should never be committed, referencing `.env.example` as the canonical configuration reference.

## Context cost
1863 bytes (approx. 465 tokens).
