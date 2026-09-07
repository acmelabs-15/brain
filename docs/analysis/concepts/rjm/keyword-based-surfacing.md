---
package: rjm
name: keyword-based surfacing
slug: keyword-based-surfacing
kind: technique
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

# keyword-based surfacing

## Definition — verbatim
> "The trigger is NOT a calendar reminder. It's **keyword-based surfacing** during normal agent workflows." — .claude/skills/adr-review/references/issue-resolution.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/issue-resolution.md | 36 | defined here | Identifies workflow keyword matching, rather than calendar scheduling, as the primary trigger for surfacing deferred items. |

## Consumes
Keyword-rich issue titles and routing entries in memory indices matching active workflow topics.

## Produces
Immediate contextual alerts surfacing deferred architectural follow-ups when an agent works on related topics.

## When applied
Triggered during session start and context retrieval when working text or prompt matches registered keyword patterns.

## Sub-concepts
none

## Part of
surfacing-mechanism, p1-deferral-requirements

## Implementation status
clean

## Design notes
The core trigger mechanism for cross-session task retrieval in rjm. Because AI agents do not have persistent background clocks, scheduling reminders via calendars fails; keyword-based surfacing binds reminders to domain terms and file paths so that context is injected precisely when relevant files or topics are opened.
