---
package: rjm
name: dry-run mode
slug: dry-run-mode
kind: gate
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

# dry-run mode

## Definition — verbatim
> "#### AC-8: Dry-run mode {#req-ac8}" — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 116 | defines | Evaluation runner execution mode validating fixtures and estimating API costs without sending model requests. |

## Consumes
Fixture corpus, execution plan, pricing constants.

## Produces
Planned call counts, token estimates, cost projection, and validation verdict.

## When applied
Invoked with `--dry-run` prior to committing or launching costly live evaluation runs.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A pre-execution verification gate in the eval harness that validates fixture schema integrity and prints call/token/cost estimates before making external API calls, preventing unexpected billing and invalid runs.
