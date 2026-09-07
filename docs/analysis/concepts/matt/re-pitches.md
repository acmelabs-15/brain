---
package: matt
name: re-pitches
slug: re-pitches
kind: technique
package_phase: matt:Productivity Skills
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# re-pitches

## Definition — verbatim
> "then re-pitches what it just said. It adds the context you were missing, writes in plain English, and uses the vocabulary from your project" — external/wait-what.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wait-what.md | 25 | defined here | Explains the action performed by the agent upon invocation of /wait-what to restate confusing explanations. |

## Consumes
A previous agent explanation that failed to land clearly due to invented jargon, stacked acronyms, or unstated premises.

## Produces
A revised in-conversation explanation in plain English that supplies missing context and uses project domain terms.

## When applied
When the user notices they stopped following an agent's explanation and invokes `/wait-what`.

## Sub-concepts
none

## Part of
wait-what

## Implementation status
clean

## Design notes
Re-pitching is Matt's conversational repair technique: rather than forcing the model to simply compress its output into terseness, it instructs the model to step back, identify the missing premise or unstated assumption, and restate the idea in accessible language grounded in project vocabulary.
