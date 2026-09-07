---
package: matt
name: inbound work
slug: inbound-work
kind: artifact
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# inbound work

## Definition — verbatim
> "Only if you have inbound work. <code class=\"ah-code-inline\">triage</code> predates that spine and does a different job: it is the lane for reports other people filed." — external/triage.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 52 | defined here | Defines inbound work as reports, bugs, and PRs submitted by outside contributors or team members into the tracker. |

## Consumes
User bug reports, community enhancement suggestions, and external pull requests.

## Produces
Issues categorized into category roles (`bug` / `enhancement`) and state roles with verified reproductions or attached briefs.

## When applied
When reviewing incoming issues filed on a public repository or project backlog.

## Sub-concepts
bug, enhancement, external-pr

## Part of
triage, request-surface

## Implementation status
clean

## Design notes
Inbound work designates unvetted work items originating from outside the core team's planning flow. Because inbound work arrives in whatever unvetted state the reporter left it, `/triage` functions as an essential gatekeeper, ensuring external bugs are reproduced and out-of-scope requests filtered before tasks are dispatched to autonomous agents.
