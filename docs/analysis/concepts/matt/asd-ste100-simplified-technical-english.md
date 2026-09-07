---
package: matt
name: ASD-STE100 Simplified Technical English
slug: asd-ste100-simplified-technical-english
kind: reference
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/wait-what.md, sha256: 5523a8be6520dc2aa09e1aab9ea3e5e59e6f0d41ffefa5130c3404dd2e34c677}
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
  - {path: skills/productivity/wait-what/SKILL.md, sha256: e3f44e3ccbc0e7b62f20ba70b295fc9c9f4aa3f96c77168faee1c71bacbf4215}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ASD-STE100 Simplified Technical English

## Definition — verbatim
(used, not defined)

> "ASD-STE100 Simplified Technical English sets the register. The ubiquitous language supplies the nouns." — docs/productivity/wait-what.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/wait-what.md | 23 | used here | Cited as the standard governing the register and clarity of agent re-pitches. |
| external/wait-what.md | 35 | used here | Explains that ASD-STE100 sets the plain-English register alongside project ubiquitous language. |
| skills/productivity/wait-what/SKILL.md | 7 | used here | Prompt directive instructing the agent to speak in ASD-STE100 Simplified Technical English. |

## Consumes
An over-complicated or jargon-laden agent response.

## Produces
Clear, unambiguous technical prose constrained to standard simplified grammar and vocabulary.

## When applied
When invoking `/wait-what` to re-pitch an unhelpful or confusing agent message.

## Sub-concepts
none

## Part of
wait-what

## Implementation status
defects: missing-path

## Design notes
An external controlled natural language standard adopted by `wait-what` to enforce short sentences, active voice, restricted vocabulary, and strict semantic clarity when an agent re-explains complex points.
