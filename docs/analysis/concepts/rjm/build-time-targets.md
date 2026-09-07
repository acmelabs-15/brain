---
package: rjm
name: Build Time Targets
slug: build-time-targets
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Build Time Targets

## Definition — verbatim
> "### Build Time Targets" — .claude/agents/devops.md:238

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 238 | defined here | Heading defining quantitative duration targets and maximum bounds for individual pipeline stages. |

## Consumes
Pipeline timing metrics for checkout, build, unit test, integration test, and total runtime.

## Produces
Execution time caps (e.g. <30s restore, <60s incremental build, <10min total pipeline).

## When applied
When evaluating pipeline efficiency and optimizing build caching.

## Sub-concepts
none

## Part of
pipeline-metrics

## Implementation status
defects: missing-path

## Design notes
Quantitative stage duration thresholds defined in rjm's devops agent. It sets strict target and maximum bounds (such as total pipeline duration under 10 minutes target, 15 minutes maximum), ensuring developer feedback loops remain fast.
