---
package: matt
name: primary sources
slug: primary-sources
kind: reference
package_phase: matt:research
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: skills/engineering/research/SKILL.md, sha256: 985569f15739c713d6784887c3d186d4ef9ac85bec5ad9c068d25bf0739928e4}
  - {path: skills/engineering/resolving-merge-conflicts/SKILL.md, sha256: 9d8114f8ef0b31f535a265fc05c364bd8cf2e2895a830040e06c22acb11f54b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# primary sources

## Definition — verbatim
> "Investigate the question against **primary sources** (official docs, source code, specs, first-party APIs), not a secondary write-up of them." — skills/engineering/research/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 177 | defined here | Documents definition of primary sources and prohibition on secondary write-ups |
| docs/engineering/research.md | 3 | used here | Guide on verifying API facts against authoritative first-party sources |
| docs/productivity/teach.md | 19 | used here | Instruction to teach concepts using official documentation sources |
| external/research.md | 25 | used here | Explains constraint requiring direct links to primary documentation |
| skills/engineering/research/SKILL.md | 10 | used here | Mandatory step to verify every claim against first-party code or specs |
| skills/engineering/resolving-merge-conflicts/SKILL.md | 8 | used here | Recommends consulting primary source commits when resolving merge conflicts |

## Consumes
Documentation URLs, official specifications, source code repositories, and API references

## Produces
Verified facts and cited assertions with direct links to owning sources

## When applied
During any research, documentation lookup, or technical investigation phase

## Sub-concepts
none

## Part of
research

## Implementation status
clean

## Design notes
The primary sources constraint demands that agents verify technical claims directly against authoritative first-party sources (official documentation, source code, RFC specifications) rather than hallucinated summaries or tertiary blog posts.
