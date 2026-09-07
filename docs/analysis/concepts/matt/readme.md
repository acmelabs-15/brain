---
package: matt
name: README
slug: readme
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# README

## Definition — verbatim
(used, not defined)
> "a runtime prompt, a README, any doc an" — external/writing-for-agents.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/writing-for-agents.md | 25 | used here | Listed as an agent-read documentation artifact governed by the writing-for-agents reference |

## Consumes
Repository architecture, setup instructions, orientation details.

## Produces
Introductory documentation oriented toward human developers and autonomous agents.

## When applied
Read during repository onboarding or when orienting to project structure and available skills.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, doc-drift

## Design notes
Standard introductory repository and directory overview document. The writing-for-agents reference treats READMEs as agent-facing documents that benefit from the no-op test and progressive disclosure rather than sprawling explanatory prose.
