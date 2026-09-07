---
package: rjm
name: Phase 2: Run it correctly
slug: phase-2-run-it-correctly
kind: phase
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

# Phase 2: Run it correctly

## Definition — verbatim
> "### Phase 2: Run it correctly" — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md | 52 | defined here | Defined as the second phase of diagnostics, setting rules for repo-root execution, virtual environment usage, and read-only flags. |

## Consumes
The command and execution flags selected in Phase 1.

## Produces
Raw terminal output, diagnostic numbers, and process exit codes.

## When applied
Executed immediately after choosing an instrument from the index.

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
The operational execution phase of diagnostics. It enforces crucial environment discipline—running from repo root, using `uv run python` to ensure dependency availability, and maintaining read-only modes to prevent unintended mutations.
