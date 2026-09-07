---
package: rjm
name: Burstiness proxy
slug: burstiness-proxy
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

# Burstiness proxy

## Definition — verbatim
> "- **Burstiness proxy (flat rhythm, #2 reader cite)**: AI prose clusters near a uniform sentence length. Human prose varies. Compute the spread of sentence lengths in the artifact; if they are all within a narrow band, break some up and run others together." — .claude/skills/prose-self-check/SKILL.md:114-117

## Also called — verbatim
> "flat rhythm" — .claude/skills/prose-self-check/SKILL.md:114

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 114 | defined here | Defined as an inspection technique computing sentence length spread to avoid uniform rhythm. |

## Consumes
Draft prose text and sentence boundary parsing.

## Produces
Sentence length distribution statistics, coefficient of variation, and flat-rhythm warning prompts.

## When applied
Applied when auditing agent-authored prose artifacts (PRDs, explainers, retrospectives) before emission.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
An automated and guided inspection technique in prose-self-check that measures variation in sentence lengths across draft prose, flagging uniform cadence so agents vary sentence length and eliminate unnatural rhythmic flatness.
