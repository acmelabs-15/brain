---
package: matt
path: skills/misc/README.md
type: skill
bytes: 684
unit: inv-matt-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/misc/README.md

## Purpose — required, verbatim
> "Tools I keep around but rarely use, not promoted in the plugin." — skills/misc/README.md:3

## Design intent — required
Provides an index and brief descriptions for utility skills housed under `skills/misc/` that are retained in the author's repository for personal use but intentionally excluded from plugin promotion or documentation.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill git-guardrails-claude-code — skills/misc/README.md:5
- skill migrate-to-shoehorn — skills/misc/README.md:6
- skill scaffold-exercises — skills/misc/README.md:7
- skill setup-pre-commit — skills/misc/README.md:8

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `git-guardrails-claude-code` — skills/misc/README.md:5 — used here
- `migrate-to-shoehorn` — skills/misc/README.md:6 — used here
- `scaffold-exercises` — skills/misc/README.md:7 — used here
- `setup-pre-commit` — skills/misc/README.md:8 — used here

## Structure
- `# Misc` — skills/misc/README.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly designates the `misc/` skills as unpromoted personal tooling, explaining why none of the four skills in this directory appear in `CLAUDE.md`, root `README.md`, or the Claude Code plugin manifest.

## Context cost
684 bytes (~160 tokens); 11639 bytes (~2700 tokens) if all four linked skills are loaded.
