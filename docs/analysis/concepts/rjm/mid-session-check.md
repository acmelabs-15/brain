---
package: rjm
name: Mid-session check
slug: mid-session-check
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/gate-ladder.md, sha256: b22eb897c2009931a8bf5edb70e02644174f0bf5d79605ada991fbd4b2a765d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Mid-session check

## Definition — verbatim
> "| Mid-session check | Notice at 10, alert at 15, no block | `git rev-list --count HEAD ^origin/main` (thresholds from `scripts/validation/pr_commit_count.py`) |" — .claude/skills/ai-agents-change-control/references/gate-ladder.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/gate-ladder.md | 29 | defines | Commit discipline table entry defining the periodic commit volume query run mid-session. |

## Consumes
Current branch head and tracking branch status (`HEAD ^origin/main`).

## Produces
Current commit count metric for the ongoing session.

## When applied
Executed periodically during extended development sessions before accumulating excessive unmerged commits.

## Sub-concepts
none

## Part of
gate-ladder

## Implementation status
clean

## Design notes
A periodic self-monitoring technique used during agent sessions to check accumulated commit volume via `git rev-list --count HEAD ^origin/main`. It alerts the agent when session scope is expanding beyond manageable boundaries, prompting timely review and PR preparation.
