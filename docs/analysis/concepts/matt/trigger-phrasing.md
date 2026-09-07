---
package: matt
name: trigger phrasing
slug: trigger-phrasing
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# trigger phrasing

## Definition — verbatim
> "Model- or user-reachable (rich trigger phrasing so the model can reach for them)." — skills/productivity/README.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/README.md | 17 | used here | Explains how model-invoked skills are configured to enable autonomous invocation by language models. |

## Consumes
A skill description and semantic trigger phrases detailing problem contexts.

## Produces
Autonomous agent discovery and invocation of relevant skills during conversational tasks.

## When applied
Applied when authoring skill frontmatter descriptions for skills intended to be model-invoked.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An authoring technique where rich, descriptive keywords and situation cues are embedded in skill descriptions so models can autonomously select and execute the skill when relevant conditions arise.
