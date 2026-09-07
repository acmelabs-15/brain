---
package: rjm
name: Hook scripts
slug: hook-scripts
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Hook scripts

## Definition — verbatim
(used, not defined)

> "| `invoke_` prefix | Hook scripts | `.claude/hooks/` |" — .claude/skills/taste-lints/SKILL.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 57 | used here | Target file category subject to the `invoke_` naming prefix rule in `.claude/hooks/`. |

## Consumes
Harness events, tool call payloads, and trigger conditions.

## Produces
Automated pre-tool, post-tool, and prompt lifecycle validations, logging, and environment setup.

## When applied
Triggered automatically by the harness during agent tool execution, command dispatch, or session initialization.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other, doc-drift

## Design notes
Executable scripts that intercept harness lifecycle events to enforce repository policies, log agent actions, and manage runtime configurations.
