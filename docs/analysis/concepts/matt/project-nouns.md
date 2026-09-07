---
package: matt
name: Project nouns
slug: project-nouns
kind: artifact
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

# Project nouns

## Definition — verbatim
(used, not defined)

> "Project nouns replace invented ones. The terms in your <code class=\"ah-code-inline\">CONTEXT.md</code> come back." — external/wait-what.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wait-what.md | 41 | used here | Serves as a success criterion indicating that an agent re-pitch has successfully replaced hallucinated terminology with authoritative project terms. |

## Consumes
`CONTEXT.md` terms agreed upon by the engineering team.

## Produces
Corrected conversational explanations featuring legitimate domain terminology.

## When applied
Evaluated during `/wait-what` to verify that explanations are anchored in real codebase concepts.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
clean

## Design notes
Project nouns are the concrete naming entities that represent the domain model in code and documentation. Ensuring that project nouns replace invented names during re-pitching keeps human and model anchored to the same codebase abstractions.
