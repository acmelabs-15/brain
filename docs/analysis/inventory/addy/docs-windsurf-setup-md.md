---
package: addy
path: docs/windsurf-setup.md
type: doc
bytes: 1471
unit: inv-addy-6
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: docs/windsurf-setup.md, sha256: 1410af016060047d1a265365f8d98aadd00a58bcfa2a048edec06d61d337cd97}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# docs/windsurf-setup.md

## Purpose — required, verbatim
> "Windsurf uses `.windsurfrules` for project-specific agent instructions:" — docs/windsurf-setup.md:7 (no explicit purpose statement)

## Design intent — required
Explains how to adapt Agent Skills for use in the Windsurf IDE by embedding selected skills into `.windsurfrules` (project rules) or global AI settings. Because Windsurf does not have a dynamic skill-loading tool mechanism, this guide provides practical instructions for concatenating a focused set of 2–3 high-leverage skills (such as TDD, incremental implementation, and code review) into static instruction files to enforce engineering standards within context window limits.

## Phase — required
none

## Inputs — required
Existing skill files (`skills/<name>/SKILL.md`) and reference checklists (`references/security-checklist.md`).

## Outputs — required
Project-level rules file `.windsurfrules` (lines 11-16, 27-43) or pasted global rules.

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:149

## Concepts named — required, verbatim
`Project Rules` — docs/windsurf-setup.md:5 — defined here
`.windsurfrules` — docs/windsurf-setup.md:7 — defined here
`Global Rules` — docs/windsurf-setup.md:18 — defined here
`Recommended Configuration` — docs/windsurf-setup.md:25 — defined here
`Usage Tips` — docs/windsurf-setup.md:44 — defined here

## Structure
- Using agent-skills with Windsurf
- Setup
- Project Rules
- Global Rules
- Recommended Configuration
- Usage Tips

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Illustrates a static-context integration pattern required for environments without on-demand tool-driven skill invocation: skills must be manually concatenated into rules files, making context budget management critical (capping at 2–3 skills).

## Context cost
1471 bytes, ~368 tokens. Loads no external files.
