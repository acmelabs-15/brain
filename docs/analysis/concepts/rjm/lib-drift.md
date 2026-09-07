---
package: rjm
name: Lib drift
slug: lib-drift
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md, sha256: e828ecf0ae117cb6cce4e44b70d490dee5da7418f2129f6801e9f6e9f9513d71}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Lib drift

## Definition — verbatim
(used, not defined)

> "| Lib drift | Do `.claude/lib/` copies match `scripts/` canonical modules? |" — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 32 | used here | Listed in the Instrument Index as the diagnostic check verifying whether `.claude/lib/` copies match `scripts/` canonical modules. |

## Consumes
Canonical utility modules in `scripts/` and plugin library files in `.claude/lib/`.

## Produces
Synchronization report or non-zero exit code indicating discrepancies between script sources and vendored copies.

## When applied
Executed via `uv run python ./scripts/sync_plugin_lib.py --check` prior to committing modifications to shared libraries.

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
A pattern of desynchronization between canonical utility scripts in `scripts/` and their bundled copies inside `.claude/lib/`. The check ensures bug fixes and library enhancements in canonical scripts are accurately propagated to the plugin runtime.
