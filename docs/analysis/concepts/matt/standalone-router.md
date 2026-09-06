---
package: matt
name: standalone router
slug: standalone-router
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# standalone router

## Definition — verbatim
> "`ask-matt` is a **standalone router** that sits over the whole set. It is never a step in a chain; it points into every chain, and it is the node the other docs pages link back to so none of them has to redraw the graph." — docs/engineering/ask-matt.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 88 | defined here | Defines ask-matt's structural role as a standalone router pointing into all workflows without participating as a step. |

## Consumes
Developer questions regarding appropriate workflow selection or lifecycle transitions.

## Produces
Recommendations for specific skills, workflows, and decision paths without executing actions directly.

## When applied
When a user is unsure which skill or workflow fits their current engineering situation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift (router map lags behind newly added skills, false not installed bug due to disable-model-invocation)

## Design notes
An architectural design pattern in matt describing an external navigational index (such as ask-matt) that surveys all available skills and routes developers into appropriate flows. Because it operates as an advisor that recommends and stops rather than executing commands or modifying files, it avoids entangling itself in execution state.
