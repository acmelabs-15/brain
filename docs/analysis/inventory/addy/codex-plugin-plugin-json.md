---
package: addy
path: .codex-plugin/plugin.json
type: config
bytes: 1119
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .codex-plugin/plugin.json, sha256: a4b79f3cae857be406a7a29b4f525a8b472c2c94505be0b8738b99c9a22dc09c}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .codex-plugin/plugin.json

## Purpose — required, verbatim
> "Production-grade engineering skills for AI coding agents covering the full software development lifecycle from spec to ship." — .codex-plugin/plugin.json:4

## Design intent — required
Manifest configuration file establishing OpenAI Codex plugin packaging for the `agent-skills` repository. It defines plugin identification metadata (name `agent-skills`, version `0.6.8`, MIT license, author coordinates), binds the skill repository root (`./skills/`), categorizes the plugin under "Productivity", declares platform interaction permissions (`Interactive`, `Read`, `Write`), and provides default user interaction starter prompts. It enables Codex agents to discover and invoke the same markdown skills repository without restructuring or duplicating files.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- directory ./skills/ — .codex-plugin/plugin.json:12

## Invoked by — required
- script scripts/validate-versions.js — scripts/validate-versions.js:10
- script scripts/validate-versions-test.js — scripts/validate-versions-test.js:10
- doc docs/codex-setup.md — docs/codex-setup.md:29

## Concepts named — required, verbatim
- `agent-skills` — .codex-plugin/plugin.json:2 — defined here
- `spec` — .codex-plugin/plugin.json:4 — used here
- `ship` — .codex-plugin/plugin.json:4 — used here
- `skills` — .codex-plugin/plugin.json:12 — used here
- `displayName` — .codex-plugin/plugin.json:14 — defined here
- `Agent Skills` — .codex-plugin/plugin.json:14 — defined here
- `plan` — .codex-plugin/plugin.json:15 — used here
- `build` — .codex-plugin/plugin.json:15 — used here
- `test` — .codex-plugin/plugin.json:15 — used here
- `review` — .codex-plugin/plugin.json:15 — used here
- `Productivity` — .codex-plugin/plugin.json:18 — defined here
- `capabilities` — .codex-plugin/plugin.json:19 — defined here
- `Interactive` — .codex-plugin/plugin.json:20 — defined here
- `Read` — .codex-plugin/plugin.json:21 — defined here
- `Write` — .codex-plugin/plugin.json:22 — defined here
- `defaultPrompt` — .codex-plugin/plugin.json:24 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · .codex-plugin/plugin.json:16 · `longDescription` asserts "Agent Skills bundles 24 production engineering workflows from Addy Osmani", contradicting the actual count of 25 skills validated in `skills/` and conflicting with `docs/codex-setup.md:25` ("All 25 skills under skills/ are available").
- `missing-path` · .codex-plugin/plugin.json:12 · `"skills": "./skills/"` assumes evaluation relative to repository root; when resolved relative to `.codex-plugin/plugin.json`, `./skills/` does not exist (`../skills/` would be required).

## Observations
- Version `0.6.8` is programmatically synchronized across all manifests and validated against git tags by `scripts/validate-versions.js` and `scripts/validate-versions-test.js` (both passing with exit code 0).
- Explicitly declares agent operational capabilities (`Interactive`, `Read`, `Write`), unlike the Claude plugin manifests.

## Context cost
1119 bytes, ~280 tokens.
