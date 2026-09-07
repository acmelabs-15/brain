---
package: rjm
name: resume-verification checklist
slug: resume-verification-checklist
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

# resume-verification checklist

## Definition — verbatim
> "resume-verification checklist at next session start" — .claude/skills/ai-agents-docs-of-record/SKILL.md:29

## Also called — verbatim
> "\"Verification on Resume\" checklist; the next session executes it before any" — .claude/skills/ai-agents-docs-of-record/SKILL.md:168

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 29 | defined here | Defined as the mandatory verification checklist executed at session start before resuming work on an issue handoff. |

## Consumes
Verification commands and claimed states specified in a per-issue handoff document.

## Produces
Executed command logs and verified test outputs establishing a clean working state before new edits.

## When applied
Executed at the beginning of each session prior to making any file modifications.

## Sub-concepts
none

## Part of
per-issue-handoffs

## Implementation status
defects: missing-path, doc-drift

## Design notes
A blocking verification gate executed at session start. It requires an incoming agent or contributor to rerun verification commands specified in the previous handoff to independently confirm the repository state before accepting prior claims or making new code changes.
