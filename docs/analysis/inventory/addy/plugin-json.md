---
package: addy
path: plugin.json
type: config
bytes: 129
unit: inv-addy-33
deprecated: false
aliases: []
memo_inputs:
  - {path: plugin.json, sha256: 4ee3a7f887b49cf84b2432af481c305c0fb2450209f32aeaab9f37429b65c9b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# plugin.json

## Purpose — required, verbatim
> "Production-grade engineering skills for AI coding agents." — plugin.json:4

## Design intent — required
Root package manifest declaring plugin identity, release version (`0.6.8`), and summary description for the `agent-skills` repository. It identifies the repository as an Antigravity / Gemini CLI plugin at the repository root. Without it, harness tooling and automated version validation scripts would be unable to discover the package identity or enforce release version alignment across harnesses.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:384
- script validate-versions.js — scripts/validate-versions.js:9
- script validate-versions-test.js — scripts/validate-versions-test.js:9

## Concepts named — required, verbatim
- `agent-skills` — plugin.json:2 — defined here

## Structure
JSON configuration declaring package metadata:
- "name" — plugin.json:2
- "version" — plugin.json:3
- "description" — plugin.json:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Acts as the root-level plugin manifest (documented in `README.md:384` as `# Antigravity plugin manifest`), sitting alongside `.claude-plugin/plugin.json` (Claude Code) and `.codex-plugin/plugin.json` (Codex CLI).
- Its version string (`0.6.8`) is validated for consistency against the other manifests by `scripts/validate-versions.js:9`.

## Context cost
129 bytes (~32 tokens). JSON configuration file.
