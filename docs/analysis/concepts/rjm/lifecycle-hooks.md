---
package: rjm
name: Lifecycle hooks
slug: lifecycle-hooks
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Lifecycle hooks

## Definition — verbatim
> "Lifecycle hooks MUST automate SESSION-PROTOCOL enforcement." — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 42 | defined here | Mandates automated lifecycle hooks to enforce SESSION-PROTOCOL invariants across agent execution. |
| .claude/skills/software-engineering-library/references/release-it.md | 235 | used here | Outlines reliability requirements for lifecycle hooks running in-line with user work. |
| CONTRIBUTING.md | 565 | defined here | Documents Claude Code internal lifecycle hooks configured in `.claude/settings.json`. |

## Consumes
Session, task, tool invocation, and git commit lifecycle events.

## Produces
Automated protocol compliance, injected context, compaction checkpoints, format verification, and execution halting on protocol breaches.

## When applied
Triggered at designated lifecycle transition points: session start/end, task execution, tool execution, context compaction, and commit boundaries.

## Sub-concepts
pre-session-hook, post-session-hook, file-modification-hooks, sessionstart-context-loader, precompact-compact-checkpoint, pretooluse-false-completion-gate, posttooluse-plan-state-sync, stop-auto-retrospective

## Part of
session-protocol

## Implementation status
defects: missing-path · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:144-146, 177 (retired hooks removed from disk; referenced HANDOFF.md superseded); doc-drift/missing-path in CONTRIBUTING.md. Surviving runtime surface narrowed to SessionStart Context Loader and PreCompact checkpointing under fail-closed-and-loud semantics.

## Design notes
Automated lifecycle interceptors designed to guarantee that agent execution protocol rules are systematically enforced by tooling rather than relying on human or agent memory. They bridge the gap between protocol specification and actual agent runtime behavior.
