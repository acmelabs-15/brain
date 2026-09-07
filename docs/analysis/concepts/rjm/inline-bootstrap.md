---
package: rjm
name: inline bootstrap
slug: inline-bootstrap
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/migrations/req003_inline_plugin_root_bootstrap.py, sha256: 4a43689e9d9d33639adc7633b1d2b64661a05d5f7ff3fa1145306f30718612b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# inline bootstrap

## Definition — verbatim
> "This migration restores the inline bootstrap pattern in every hook that" — scripts/migrations/req003_inline_plugin_root_bootstrap.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/migrations/req003_inline_plugin_root_bootstrap.py | 16 | defined here | Architectural pattern embedding manifest walk-up and environment checks directly into hooks. |

## Consumes
`.claude-plugin/plugin.json` manifest file and `CLAUDE_PLUGIN_ROOT` environment variable.

## Produces
Self-contained hook initialization ensuring library path resolution without external dependencies.

## When applied
Applied in Claude Code hook scripts requiring standalone library path discovery compatible with static verification tests.

## Sub-concepts
none

## Part of
hooks

## Implementation status
defects: orphan, other

## Design notes
The inline bootstrap pattern embeds plugin root discovery and lib directory path setup directly into each hook file to satisfy static verification tests without shared import prerequisites.
