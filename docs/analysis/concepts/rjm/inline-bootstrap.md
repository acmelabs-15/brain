---
package: rjm
name: inline bootstrap
slug: inline-bootstrap
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
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
