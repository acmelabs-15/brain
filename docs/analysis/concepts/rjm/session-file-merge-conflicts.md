---
package: rjm
name: Session-file merge conflicts
slug: session-file-merge-conflicts
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Session-file merge conflicts

## Definition — verbatim
> "Always `git checkout --theirs` (keep main's file), rename yours to the next number. Main's session files are immutable audit records" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 66 | defined here | Settled Battles List entry mandating checkout --theirs and renumbering for session log conflicts. |

## Consumes
Git merge conflicts on numbered session audit logs in `.agents/sessions/`.

## Produces
Preserved immutable audit logs from main and cleanly renumbered local session files.

## When applied
Enforced during git merge resolution when working with numbered session logs.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
`Session-file merge conflicts` codifies the strict rule for resolving conflicts on numbered session logs. Because logs on `main` are immutable audit records, agents must never overwrite them with `git checkout --ours`; they must accept `theirs` and renumber the local session log to the next integer.
