---
package: rjm
name: per-issue handoffs
slug: per-issue-handoffs
kind: artifact
package_phase: cross-phase
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

# per-issue handoffs

## Definition — verbatim
> "This repo runs on verification-based governance. Continuity lives in per-issue" — .claude/skills/ai-agents-docs-of-record/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 11 | defined here | Defined as the primary mechanism for maintaining session continuity across multiple development sessions. |

## Consumes
Session work-in-progress, completed milestones, test execution evidence, and pending tasks.

## Produces
Markdown handoff files located at `.agents/sessions/handoffs/{YYYY-MM-DD}-{ISSUE}-handoff.md`.

## When applied
Written at session end whenever an issue spans across multiple sessions.

## Sub-concepts
resume-verification-checklist

## Part of
ai-agents-docs-of-record

## Implementation status
defects: missing-path, doc-drift

## Design notes
File-based continuity artifacts written per issue to provide cold-start resumption context for subsequent sessions. They replaced monolithic, append-only session logs to avoid merge conflicts while ensuring critical verification checklists and task states persist across sessions.
