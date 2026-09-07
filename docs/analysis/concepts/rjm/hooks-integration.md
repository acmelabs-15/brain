---
package: rjm
name: Hooks Integration
slug: hooks-integration
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/output-structure.md, sha256: 0473a0031d8e58c6741137ae4795a3fd6ea136c0483ce45a043b265b491079a3}
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Hooks Integration

## Definition — verbatim
> "Skills can define lifecycle hooks for validation, logging, and safety:" — .claude/skills/skillforge/references/output-structure.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/output-structure.md | 109 | defined here | Section heading specifying declarative YAML configuration for PreToolUse and PostToolUse lifecycle hooks. |
| .claude/skills/skillforge/references/script-integration-framework.md | 436 | defined here | Section heading providing integration guidance on leveraging hooks for automated script invocation during tool execution. |

## Consumes
Tool execution events (PreToolUse, PostToolUse), matcher filters, and validation/logging scripts.

## Produces
Automated pre-execution validation, post-execution verification, and activity logging without manual agent prompting.

## When applied
Applied when an agent skill requires deterministic safety checks or verification gates bound directly to tool calls.

## Sub-concepts
none

## Part of
skill-output-structure

## Implementation status
clean

## Design notes
Hooks Integration connects agent tool usage events with local automation scripts. By configuring PreToolUse and PostToolUse hooks, rjm skills execute deterministic input validation and output verification automatically, catching errors and policy violations before commands complete.
