---
package: rjm
name: Per-branch handoff
slug: per-branch-handoff
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

# Per-branch handoff

## Definition — verbatim
> "| Per-branch handoff | `.agents/handoffs/{branch}/{session}.md` | Multi-session branch coordination |" — .claude/skills/ai-agents-docs-of-record/SKILL.md:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 165 | defined here | Defined in the handoff hierarchy as the coordination artifact for multi-session feature branch development. |

## Consumes
Feature branch state, ongoing sub-task statuses, and local test evidence across collaborating sessions.

## Produces
Handoff markdown document at `.agents/handoffs/{branch}/{session}.md`.

## When applied
Written when complex work spans multiple sessions on a dedicated feature branch.

## Sub-concepts
verification-on-resume

## Part of
ai-agents-docs-of-record

## Implementation status
defects: missing-path, doc-drift

## Design notes
A branch-scoped coordination document created under `.agents/handoffs/{branch}/{session}.md`. It enables multiple sessions collaborating on an extended branch to pass context and verification instructions without causing PR-level merge conflicts.
