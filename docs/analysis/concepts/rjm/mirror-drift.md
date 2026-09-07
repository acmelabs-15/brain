---
package: rjm
name: Mirror drift
slug: mirror-drift
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

# Mirror drift

## Definition — verbatim
(used, not defined)

> "| Mirror drift | Do the 7 generated mirror trees match `.claude/` canonical sources? |" — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 31 | used here | Listed in the Instrument Index as the diagnostic instrument checking whether the 7 generated mirror trees match `.claude/` canonical sources. |

## Consumes
Canonical `.claude/` configuration files and the 7 platform mirror directories.

## Produces
Diff report or exit code (0 if synchronized, 2 if stale) identifying desynchronized mirror files.

## When applied
Run before PR submission via `uv run python build/scripts/build_all.py --check` to verify multi-vendor mirror consistency.

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
A divergence state where generated platform mirror trees (for Cursor, Copilot, VS Code, etc.) fall out of sync with the canonical definitions located under `.claude/`. Maintained as a read-only check to prevent accidental drift across multi-vendor environments.
