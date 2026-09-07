---
package: rjm
name: parity manifest
slug: parity-manifest
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# parity manifest

## Definition — verbatim
> "parity manifest. PRs that do not touch plugin source files are unaffected (no diff" — .agents/architecture/ADR-091-post-merge-version-bot.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 129 | defines | Designates each of the plugin manifests that must remain synchronized across host environments. |

## Consumes
Plugin definition metadata, commands, skills, and version identifiers.

## Produces
Validated manifest file deployed to plugin consumers.

## When applied
Updated during releases and verified during pre-push and PR CI checks.

## Sub-concepts
none

## Part of
parity-manifests

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A single plugin manifest file (`plugin.json`) that participates in multi-platform synchronization, requiring identical schema and version alignment across Claude Code and Copilot CLI distributions.
