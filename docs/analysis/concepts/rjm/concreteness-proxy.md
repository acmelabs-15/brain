---
package: rjm
name: Concreteness proxy
slug: concreteness-proxy
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Concreteness proxy

## Definition — verbatim
> "- **Concreteness proxy**: count named entities, numbers, and file paths. Prose with near-zero of these is usually saying nothing (feeds Layer 4). The same helper reports a concreteness count." — .claude/skills/prose-self-check/SKILL.md:127-129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 127 | defined here | Defined as a proxy technique counting named entities, numbers, and file paths in prose. |

## Consumes
Draft prose text and token frequency distributions.

## Produces
Concreteness count quantifying grounded entities, numbers, and filesystem paths.

## When applied
Applied during prose self-checks to evaluate grounding before conducting deep semantic emptiness reviews.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
An automated proxy technique within prose-self-check that tallies concrete references such as named entities, numbers, and file paths, identifying abstract or ungrounded prose paragraphs for subsequent semantic emptiness adjudication.
