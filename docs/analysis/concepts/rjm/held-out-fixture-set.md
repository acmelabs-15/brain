---
package: rjm
name: held-out fixture set
slug: held-out-fixture-set
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# held-out fixture set

## Definition — verbatim
> "WHEN the spike runner is invoked with the security agent's prompt and the held-out fixture set," — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 40 | defines | Prescribes the isolated evaluation fixture corpus used to test agent prompts against baseline models. |

## Consumes
Verified test scenarios, public CVEs, synthetic prompts, and assertions.

## Produces
Normalized benchmark fixtures with provenance metadata for eval harness runs.

## When applied
When running comparative evaluations between specialized agent prompts and baseline models.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An evaluation dataset partition maintained separately from prompt-crafting iterations to assess prompt specialization objectively without contamination from earlier eval scenarios.
