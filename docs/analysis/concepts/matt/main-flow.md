---
package: matt
name: main flow
slug: main-flow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# main flow

## Definition — verbatim
> "Most paths run along one **main flow**, and two **on-ramps** merge onto it." — skills/engineering/ask-matt/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 13 | defined here | Router situation table row directing a raw idea to the head of the main flow. |
| external/ask-matt.md | 36 | defined here | External catalog documentation outlining the main flow from idea to ship. |
| external/triage.md | 73 | defined here | External catalog documentation explaining how triaged issues merge into the main flow. |
| skills/engineering/ask-matt/SKILL.md | 11 | defined here | Defines the primary path through skills that routes work from idea to shipped code. |

## Consumes
A feature idea or requirement initiated by the user.

## Produces
Shipped, reviewed, and committed code with accompanying tests and specifications.

## When applied
When developing a new feature from conception to deployment within a repository.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift (router map lags new skills, false not installed bug due to disable-model-invocation, router answers from summaries without opening SKILL.md)

## Design notes
The core end-to-end development pathway in matt connecting idea conception to shipped production code. The flow runs through /grill-with-docs, an optional /prototype detour when UI or state logic requires runnable validation, /to-spec and /to-tickets for multi-session efforts, /implement (driving /tdd internally), and closes out with two-axis /code-review before committing.
