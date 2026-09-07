---
package: rjm
name: good practices
slug: good-practices
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# good practices

## Definition — verbatim
> "- Good practices (not universal best practices)" — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 34 | used here | Characterizes practice in the Complicated domain where multiple valid approaches exist rather than a single universal best practice. |

## Consumes
Complicated domain problems requiring expert investigation and trade-off analysis.

## Produces
Context-sensitive solutions chosen from among multiple valid competing options.

## When applied
Applied in the Complicated domain where expertise is required to evaluate trade-offs among valid options.

## Sub-concepts
none

## Part of
complicated

## Implementation status
clean

## Design notes
`good practices` recognizes that in the Complicated domain, multiple valid approaches exist for any given problem. Unlike the universal "best practice" of the Clear domain, good practices require expert analysis to select the appropriate trade-off for the specific context.
