---
package: rjm
name: Verification on Resume
slug: verification-on-resume
kind: checklist
package_phase: rjm:session-start
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Verification on Resume

## Definition — verbatim
> "\"Verification on Resume\" checklist; the next session executes it before any" — .claude/skills/ai-agents-docs-of-record/SKILL.md:168

## Also called — verbatim
> "resume-verification checklist at next session start" — .claude/skills/ai-agents-docs-of-record/SKILL.md:29

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 168 | defined here | Defined as the mandatory blocking checklist executed at session start before modifying files. |

## Consumes
Recorded verification commands in the incoming handoff document.

## Produces
Executed command evidence validating working tree cleanliness and test passage.

## When applied
Executed immediately at session start before executing any write or edit operations.

## Sub-concepts
none

## Part of
per-branch-handoff

## Implementation status
defects: missing-path, doc-drift

## Design notes
A blocking verification protocol in rjm requiring any agent or contributor resuming work to rerun specified tests and status commands before initiating edits, ensuring they never build upon unverified assumptions or broken intermediate states.
