---
package: rjm
name: P1 Deferral Issue Template
slug: p1-deferral-issue-template
kind: template
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/issue-resolution.md, sha256: 0a50a77e7a5b822596d45280d9b7a1ee36a6d19b7f86e9ad7e948c98ee51e4e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# P1 Deferral Issue Template

## Definition — verbatim
> "### P1 Deferral Issue Template" — .claude/skills/adr-review/references/issue-resolution.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/issue-resolution.md | 67 | defined here | Markdown and CLI issue template for creating GitHub issues to track deferred P1 findings with required context and justification. |

## Consumes
Deferred P1 finding details, originating ADR path, debate log path, identifying agent persona, and deferral rationale.

## Produces
Standardized GitHub issue with title format `[ADR-NNN] [P1 DEFERRED] [keyword-rich description]` and labels `priority:P1`, `backlog`, `adr-followup`.

## When applied
Invoked when a P1 issue is deferred during ADR review resolution.

## Sub-concepts
none

## Part of
p1-deferral-requirements, issue-resolution

## Implementation status
clean

## Design notes
Standardizes the issue schema for tracking deferred P1 findings. By capturing the full context, the agent that identified the issue, and the explicit rationale for deferral, it ensures that technical debt accepted during ADR review has actionable acceptance criteria and traceability.
