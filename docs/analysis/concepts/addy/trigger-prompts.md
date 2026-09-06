---
package: addy
name: trigger prompts
slug: trigger-prompts
kind: artifact
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# trigger prompts

## Definition — verbatim
(used, not defined)
> "when writing trigger prompts, paraphrase how users actually talk; copying the description into the prompts games the eval and tells you nothing." — docs/developer-onboarding.md:90

## Also called — verbatim
- `trigger` — evals/README.md:47

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 90 | used here | Guidance on authoring trigger prompts by paraphrasing real user language. |

## Consumes
Authentic developer task descriptions, real-world user phrasing variations, and task contexts.

## Produces
Positive and negative trigger prompt test sets in eval case definitions (`evals/cases/<skill>.json`).

## When applied
Authored during skill development or refinement to test and maintain routing accuracy in Tier 2 evals.

## Sub-concepts
none

## Part of
- `evals`
- `tier-2`

## Implementation status
clean

## Design notes
Trigger prompts are curated sample user queries included in eval case files to test whether an agent router accurately invokes the correct skill. By requiring trigger prompts to reflect genuine developer phrasing rather than mirroring frontmatter descriptions verbatim, they prevent gaming the eval harness and ensure robust real-world discovery.
