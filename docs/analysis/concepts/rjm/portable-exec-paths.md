---
package: rjm
name: Portable exec paths
slug: portable-exec-paths
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase3-generation-deep-dive.md, sha256: cd9b8fe32d69e8db40084da5d79f81aa00781b644560daf43cc76502d01fa6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Portable exec paths

## Definition — verbatim
> "Script invocations use `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/...`, never a bare `.claude/skills/...` path (issue #2838)" — .claude/skills/skillforge/references/phase3-generation-deep-dive.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase3-generation-deep-dive.md | 62 | defined here | Generation quality check mandating environment-variable script invocation paths. |

## Consumes
Script invocations within skill definitions or SKILL.md.

## Produces
Portable script invocation paths resolving across Claude Code and Copilot CLI plugins.

## When applied
Checked during Phase 3 (Generation) quality verification when generating or validating skill script references.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
clean

## Design notes
A portability pattern ensuring scripts packaged within skills resolve correctly across divergent platform environments (Claude Code vs Copilot CLI) by relying on fallback shell environment variables `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}` instead of hardcoded paths.
