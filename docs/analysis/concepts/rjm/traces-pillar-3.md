---
package: rjm
name: Traces (Pillar 3)
slug: traces-pillar-3
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Traces (Pillar 3)

## Definition — verbatim
> "### 3. Traces (Pillar 3)" — .claude/skills/review/references/observability.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/observability.md | 70 | defined here | Focus area checklist verifying cross-boundary trace context propagation, span business context adequacy, and log-trace integration via shared trace IDs. |

## Consumes
Distributed tracing contexts, span definitions, metadata attributes, and cross-service propagation headers.

## Produces
Evaluations on trace context propagation across process boundaries, span attribute completeness, and log-to-trace linkage.

## When applied
Applied during observability review when reviewing code paths that cross network boundaries, execute asynchronous operations, or invoke external services.

## Sub-concepts
none

## Part of
three-pillars

## Implementation status
clean

## Design notes
The third focus area checklist of rjm's three-pillars observability review, ensuring that requests retain unbroken distributed trace context across component boundaries and that spans contain sufficient contextual attributes for root-cause diagnosis.
