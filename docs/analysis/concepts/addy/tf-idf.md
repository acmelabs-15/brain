---
package: addy
name: TF-IDF
slug: tf-idf
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
  - {path: evals/README.md, sha256: 9d67d641f2b710661462fce67370b25adcc60ad99d2149342f55cb33e025aa2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# TF-IDF

## Definition — verbatim
(used, not defined)
> "Tier 2 is a **lexical approximation** of routing (stemmed TF-IDF over descriptions)." — evals/README.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 72 | used here | Explained as the stemmed TF-IDF lexical routing algorithm underpinning Tier 2 evals. |
| evals/README.md | 22 | used here | Defined as the lexical approximation technique over skill descriptions used in Tier 2 evals. |

## Consumes
Text corpus of skill frontmatter descriptions and test case prompt strings.

## Produces
Vocabulary term frequency–inverse document frequency matrices and cosine similarity scores for prompt-to-skill ranking.

## When applied
Executed in Tier 2 evaluation runs (`scripts/run-evals.js`) to score positive/negative prompt routing and detect catalog collisions.

## Sub-concepts
none

## Part of
- `tier-2`

## Implementation status
defects: doc-drift

## Design notes
TF-IDF (term frequency–inverse document frequency) provides a lightweight, token-free text ranking technique for skill routing evaluations. In Tier 2 evals, stemmed TF-IDF scores user prompt queries against catalog skill descriptions to verify that user phrasing ranks the correct skill in the top-k while catching over-broad descriptions that collide with neighboring skills.
