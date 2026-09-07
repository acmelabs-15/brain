---
package: rjm
name: parity manifests
slug: parity-manifests
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

# parity manifests

## Definition — verbatim
> "diff does NOT include a version change in the two parity manifests. A PR that" — .agents/architecture/ADR-091-post-merge-version-bot.md:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 153 | defines | Identifies the paired manifests (.claude/.../plugin.json and src/copilot-cli/.../plugin.json) subject to joint versioning rules. |

## Consumes
Dual-platform distribution requirements.

## Produces
Coordinated manifest files maintaining byte/version parity across host platforms.

## When applied
Checked whenever changes touch plugin configurations.

## Sub-concepts
parity-manifest

## Part of
dual-platform-model

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The set of paired plugin manifests (`.claude/.claude-plugin/plugin.json` and `src/copilot-cli/.claude-plugin/plugin.json`) required to maintain identical versioning and metadata across separate ecosystem roots.
