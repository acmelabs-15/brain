---
package: matt
name: implemented
slug: implemented
kind: role
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

# implemented

## Definition — verbatim
(used, not defined)

> "users have asked for a sixth state for work that is specified but blocked on another issue, for <code class=\"ah-code-inline\">deferred</code> work gated on a future trigger, and for a terminal <code class=\"ah-code-inline\">implemented</code> state. None of those has shipped." — external/triage.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 37 | used here | Notes user requests for a terminal implemented state to indicate work completed and awaiting verification. |

## Consumes
Completed work items awaiting human verification or release.

## Produces
Terminal classification marking an issue finished without re-queueing to AFK runners.

## When applied
Proposed when work has been implemented by an agent.

## Sub-concepts
none

## Part of
state role, triage

## Implementation status
not-implemented

## Design notes
A proposed terminal state for issues whose code changes are complete but awaiting human verification, requested to prevent AFK agent runners from repeatedly picking up finished tasks.
