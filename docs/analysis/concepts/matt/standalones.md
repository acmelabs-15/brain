---
package: matt
name: standalones
slug: standalones
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# standalones

## Definition — verbatim
> "Standalones**, off every flow, reached for on their own terms: the prototype, the questionnaire, the merge conflict you are already sitting in." — docs/engineering/ask-matt.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 31 | defined here | Identifies standalones as skills sitting off every flow and reached for on their own terms. |
| external/ask-matt.md | 38 | defined here | External catalog documentation categorizing standalone utility and emergency skills. |

## Consumes
Specific isolated problems such as merge conflicts, unanswerable design questions, or external stakeholder blocks.

## Produces
Resolved conflicts, throwaway prototype findings, stakeholder questionnaires, or specialized setup scripts.

## When applied
When encountering an isolated task or emergency that does not fit into a sequential multi-step flow.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift (router map lags behind newly introduced standalone skills)

## Design notes
A category of specialized agent skills in matt that operate outside standard multi-step engineering flows. Standalones address specific operational realities—such as resolving an active git merge conflict (/resolving-merge-conflicts), spinning off an empirical prototype (/prototype), or querying an external human via questionnaire (/to-questionnaire)—without imposing an artificial end-to-end process.
