---
package: addy
name: hooks
slug: hooks
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: hooks/hooks.json, sha256: 870c97c9cb6f526b66cc1d684e261ad2f7b45066a41e56ca5cb3fa6784df8888}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# hooks

## Definition — verbatim
> "hooks" — hooks/hooks.json:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/hooks.json | 2 | defined here | Configuration section registering lifecycle hook handlers. |

## Consumes
Claude Code plugin configuration schema and defined shell execution commands.

## Produces
Automated execution of scripts at specified session and tool lifecycle boundaries.

## When applied
Loaded by Claude Code during plugin initialization to register event hooks.

## Sub-concepts
SessionStart, PreToolUse, PostToolUse, Stop

## Part of
none

## Implementation status
clean

## Design notes
Event-driven interception mechanism in Claude Code that executes custom shell scripts at predefined lifecycle boundaries (such as session start or tool invocation), enabling deterministic context injection and cache management.
