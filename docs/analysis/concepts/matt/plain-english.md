---
package: matt
name: plain English
slug: plain-english
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

# plain English

## Definition — verbatim
(used, not defined)

> "writes in plain English, and uses the vocabulary from your project" — external/wait-what.md:25

## Also called — verbatim
`ASD-STE100 Simplified Technical English` — external/wait-what.md:35

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wait-what.md | 25 | used here | Sets the required clarity and linguistic register for re-pitched agent explanations. |

## Consumes
Agent explanations polluted by invented jargon, unstated assumptions, or excessive acronyms.

## Produces
Clear, direct, and accessible technical prose that avoids ambiguity while retaining substance.

## When applied
Applied by `/wait-what` when restating an explanation that the user found difficult to follow.

## Sub-concepts
none

## Part of
wait-what

## Implementation status
clean

## Design notes
Plain English establishes the communicative baseline for human-agent collaboration in Matt's toolkit. Grounded in ASD-STE100 principles, it prevents models from generating opaque, self-referential prose and forces clear sentence structures without sacrificing technical precision.
