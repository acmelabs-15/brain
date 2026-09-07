---
package: rjm
name: BOT_PAT
slug: bot-pat
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md, sha256: 48b83cec30a7d8ce92b0d31dd5a2b30f5a5ac4331c035e9420b431f16933e392}
  - {path: docs/copilot-cli-setup.md, sha256: 59024c233a64c24d142b282be6874ab91ab23cc063663ad1c4331c54973a9519}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BOT_PAT

## Definition — verbatim
(used, not defined)

> "### Decision 5: BOT_PAT for Attribution" — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md | 136 | used here | Adopted as the GitHub secret containing a personal access token for attributing automated operations to rjmurillo-bot. |
| docs/copilot-cli-setup.md | 123 | used here | Distinguished as the dedicated secret for repository operations from the Copilot API access token. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, orphan

## Design notes
A GitHub secret identifier storing a service account Personal Access Token for repository write operations and audit attribution, representing a credential identifier rather than an agent lifecycle concept.
