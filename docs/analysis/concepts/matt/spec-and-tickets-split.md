---
package: matt
name: spec-and-tickets split
slug: spec-and-tickets-split
kind: pattern
package_phase: matt:The Main Flow
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# spec-and-tickets split

## Definition — verbatim
> "the spec-and-tickets split, which only earns its cost when the build spans more than one session." — external/ask-matt.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ask-matt.md | 36 | defined here | An internal branch of the main flow earning its cost when a build spans multiple sessions. |

## Consumes
An idea or feature scope too large to design, implement, and verify within a single context window or session.

## Produces
Two distinct planning artifacts and phase gates separating specification from issue tracking tickets.

## When applied
When a build spans more than one session: "the spec-and-tickets split, which only earns its cost when the build spans more than one session."

## Sub-concepts
to-spec, to-tickets

## Part of
the-main-flow

## Implementation status
defects: doc-drift (router map lags new skills, false not installed bug due to disable-model-invocation, router answers from summaries without opening SKILL.md)

## Design notes
An architectural flow pattern in Matt Pocock's skills dividing the planning phase into separate specification and ticket-generation steps. For small, single-session tasks, splitting spec authoring from ticket authoring adds unnecessary ceremony, but when work spans multiple sessions, splitting the spec from tickets ensures each ticket is independently verifiable and manageable across context boundaries.
