---
package: matt
name: ready-for-afk
slug: ready-for-afk
kind: role
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ready-for-afk

## Definition — verbatim
(used, not defined)
> "A canonical state-machine label applied to an **Issue** during triage (e.g. `needs-triage`, `ready-for-afk`)." — CONTEXT.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 19 | used here | Cited as an example canonical state-machine role applied to an Issue during triage. |

## Consumes
An issue that has been evaluated and specified with an attached agent brief.

## Produces
A state designation indicating the issue can be picked up by an autonomous agent runner.

## When applied
Referenced in CONTEXT.md as an illustrative triage role for autonomous agent execution.

## Sub-concepts
none

## Part of
triage-role, triage

## Implementation status
defects: missing-path, doc-drift (CONTEXT.md cites ready-for-afk as an example role whereas triage/SKILL.md and triage-labels.md standardize on ready-for-agent)

## Design notes
An informal variant of the ready-for-agent triage state role mentioned in CONTEXT.md, signifying that an issue is fully specified and ready for autonomous agent execution.
