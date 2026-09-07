---
package: rjm
name: Stale plugin root wedges a running session
slug: stale-plugin-root-wedges-a-running-session
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Stale plugin root wedges a running session

## Definition — verbatim
> "Copilot CLI resolves the plugin root once and exports the same value for the life of the process. Delete or move the plugin install directory mid-session and every hook invocation fails before any repository code runs, because the shell expands a path that no longer exists." — .claude/skills/agent-harness-reference/SKILL.md:196-199

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 194 | defines | Documents the failure mode where moving or deleting a plugin directory mid-session breaks shell expansions for subsequent hook invocations. |

## Consumes
Session lifecycle state, plugin installation paths, and host environment resolution caches.

## Produces
Automated tests, fail-open launcher diagnostics, and path-existence verification routines.

## When applied
Applied when designing hook launchers and testing plugin uninstall/reinstall flows during active sessions.

## Sub-concepts
none

## Part of
copilot-plugin-runtime-fields

## Implementation status
defects: doc-drift

## Design notes
A documented failure mode and architectural countermeasure in rjm. Because Copilot CLI caches the plugin root path once per session, deleting or relocating the plugin directory causes all subsequent hook invocations to crash at the shell layer before any script runs. rjm addresses this with fail-open launcher checks that exit 0 with clear diagnostic warnings.
