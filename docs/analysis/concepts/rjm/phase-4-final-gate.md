---
package: rjm
name: Phase 4: Final gate
slug: phase-4-final-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 4: Final gate

## Definition — verbatim
> "### Phase 4: Final gate" — .claude/skills/autoplan/SKILL.md:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 176 | defined here | Section heading defining the terminal summary gate concluding every /autoplan run. |

## Consumes
Route execution logs, count of mechanical decisions, taste decision rationales, open sovereignty questions, and verification evidence.

## Produces
Single batched final summary block reporting route, decisions, questions, and test evidence.

## When applied
At the conclusion of every `/autoplan` task run.

## Sub-concepts
none

## Part of
autoplan

## Implementation status
clean

## Design notes
Phase 4: Final gate serves as autoplan's terminal verification and reporting mechanism. Rather than outputting continuous conversational chatter, autoplan batches all run outcomes into a compact, four-part summary block (route taken, auto-decided mechanical/taste items, open sovereignty questions, and test evidence), providing clear auditability and verification in a single view.
