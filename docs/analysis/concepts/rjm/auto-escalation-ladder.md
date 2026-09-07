---
package: rjm
name: auto-escalation ladder
slug: auto-escalation-ladder
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# auto-escalation ladder

## Definition — verbatim
> "**Auto-escalation ladder**: when an issue lands on you because a junior or medior worker already tried, your first commit is characterization tests around the failure surface. The second commit is the change. Skipping the first commit forfeits the safety the ladder is designed to provide." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 14 | used here | References progression across junior and medior workers on the ladder during To Improve fix cycles. |
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 158 | used here | Defines the operational protocol requiring a first commit of characterization tests followed by a second commit with the change. |

## Consumes
Failed task attempts, junior/medior worker execution logs, and regression notifications.

## Produces
Escalated worker task dispatches and enforced two-commit safety sequences (characterization tests first, code edits second).

## When applied
Activated when lower-tier workers fail to resolve an issue or introduce regressions, escalating the issue to senior workers.

## Sub-concepts
- to-improve-fix-cycle

## Part of
working-with-legacy-code

## Implementation status
clean

## Design notes
An organizational pattern in rjm that routes failing or regressed tasks up an escalation ladder to more capable workers. The ladder mandates a strict two-commit protocol (characterization tests followed by the code change) to ensure previous failures are thoroughly anchored before changes are attempted.
