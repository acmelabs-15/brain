---
package: matt
path: skills/engineering/research/SKILL.md
type: skill
bytes: 794
unit: inv-matt-40
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/research/SKILL.md, sha256: 985569f15739c713d6784887c3d186d4ef9ac85bec5ad9c068d25bf0739928e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/research/SKILL.md

## Purpose — required, verbatim
> "description: Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. Use when the user wants a topic researched, docs or API facts gathered, or reading legwork delegated to a background agent." — skills/engineering/research/SKILL.md:3

## Design intent — required
Delegates documentation reading and external factual investigation to an autonomous background agent so the primary coding session keeps working without context pollution. Instructs the agent to investigate narrow questions strictly against primary sources (official docs, source code, specs, first-party APIs) rather than secondary commentary, and produces a single cited markdown artifact saved in the repo's existing notes location.

## Phase — required
matt:engineering

## Inputs — required
Questions regarding third-party APIs, official documentation, specifications, or code facts requiring external investigation.

## Outputs — required
A single cited markdown file capturing findings and primary source links, saved where the repository keeps notes.

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:208
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:34
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:81
- doc skills/engineering/README.md — skills/engineering/README.md:26
- doc CHANGELOG.md — CHANGELOG.md:177

## Concepts named — required, verbatim
- `research` — skills/engineering/research/SKILL.md:2 — defined here
- `background agent` — skills/engineering/research/SKILL.md:6 — defined here
- `primary sources` — skills/engineering/research/SKILL.md:10 — defined here

## Structure
- `1. Investigate the question against **primary sources** (official docs, source code, specs, first-party APIs), not a secondary write-up of them. Follow every claim back to the source that owns it.` — skills/engineering/research/SKILL.md:10
- `2. Write the findings to a single Markdown file, citing each claim's source.` — skills/engineering/research/SKILL.md:11
- `3. Save it where the repo already keeps such notes; match the existing convention, and if there is none, put it somewhere sensible and say where.` — skills/engineering/research/SKILL.md:12

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Does not declare `disable-model-invocation: true`, allowing models to autonomously invoke research when reading legwork is needed.
- Emphasizes that research findings should be saved to existing repository notes paths, establishing a convention of cited markdown documentation.

## Context cost
794 bytes (~198 tokens). Highly compact prompt definition.
