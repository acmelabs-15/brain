---
package: matt
path: skills/in-progress/README.md
type: skill
bytes: 2177
unit: inv-matt-42
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/in-progress/README.md

## Purpose — required, verbatim
> "Beta. These skills are public on purpose: try them and tell me what breaks. They're excluded from the plugin and the top-level README until they graduate to a stable bucket, they get no docs pages, and they can change or disappear without warning." — skills/in-progress/README.md:3

## Design intent — required
Documents governance, stability expectations, and distribution mechanisms for experimental skills residing in the `skills/in-progress/` bucket. Clarifies that in-progress skills are excluded from the official Claude Code plugin manifest (`.claude-plugin/plugin.json`), omitted from the root README, and have no published documentation pages on aihero.dev. Provides the direct install syntax via `npx skills@latest` and maintains a linked index of the eight in-progress skills.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill loop-me — skills/in-progress/README.md:11
- skill writing-beats — skills/in-progress/README.md:12
- skill writing-fragments — skills/in-progress/README.md:13
- skill writing-shape — skills/in-progress/README.md:14
- skill claude-handoff — skills/in-progress/README.md:15
- skill setup-ts-deep-modules — skills/in-progress/README.md:16
- skill implement-spec — skills/in-progress/README.md:17
- skill retro — skills/in-progress/README.md:18

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:6

## Concepts named — required, verbatim
- `In Progress` — skills/in-progress/README.md:1 — defined here
- `Beta` — skills/in-progress/README.md:3 — defined here

## Structure
- `# In Progress` — skills/in-progress/README.md:1

## Scripts — required if type is script or the skill ships scripts
For installation command example:
- path, language, lines: `skills/in-progress/README.md`, bash, 1 line
- documented invocation: `npx skills@latest add mattpocock/skills --skill=<name>` — skills/in-progress/README.md:8
- **executed:** no — third-party package installation command intended for end-user environment setup
- actual command run: none, **actual exit code**: none
- documented exit codes: none
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? Not executed; example installation command.

## Defects — required
none

## Observations
- Defines the public incubation tier of the package lifecycle, allowing users to test early prototypes before promotion to `engineering/` or `productivity/`.
- Indexes experimental skills that later informed core architecture (e.g. `implement-spec` task graph concurrency).

## Context cost
2177 bytes (~544 tokens). Bucket index and policy catalog.
