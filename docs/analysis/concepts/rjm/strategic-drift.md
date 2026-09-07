---
package: rjm
name: strategic drift
slug: strategic-drift
kind: pattern
package_phase: rjm:roadmap
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# strategic drift

## Definition — verbatim
> "Strategic drift detected (features without user value)" — .claude/agents/roadmap.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 3 | used here | Stated as the primary failure pattern guarded against by the roadmap agent. |
| templates/agents/roadmap.shared.md | 3 | used here | Shared roadmap agent definition mandating active defense against strategic drift. |

## Consumes
Feature backlogs, scope expansion requests, and speculative feature proposals.

## Produces
Scope pushback verdicts eliminating features that lack demonstrable user or business value.

## When applied
Monitored continuously during roadmap reviews and scope evaluation sessions.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
clean

## Design notes
Strategic drift is the anti-pattern where a product team accumulates features that produce activity (outputs) without delivering meaningful user value (outcomes). In rjm, the roadmap agent is explicitly tasked with guarding against strategic drift by pushing back hard on ungrounded feature creep.
