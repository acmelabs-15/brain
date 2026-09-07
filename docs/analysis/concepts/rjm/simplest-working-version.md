---
package: rjm
name: simplest working version
slug: simplest-working-version
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/pre-mortem/references/mental-models-galls-law.md, sha256: a20568aa9cb7817e9a00f0c05fdf506c4791643251a61c282174cde8463bb74d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# simplest working version

## Definition — verbatim
> "- **Detection**: Define a \"simplest working version\" milestone early. If that milestone slips, the full system is at risk." — .claude/skills/pre-mortem/references/mental-models-galls-law.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pre-mortem/references/mental-models-galls-law.md | 47 | defined here | Gall's Law detection and response mitigation pattern advising teams to define and ship a minimal viable prototype before adding system complexity. |

## Consumes
System design proposals, architecture specifications, and incremental decomposition plans.

## Produces
An early verifiable milestone and minimal functioning prototype delivering standalone value.

## When applied
Applied during architectural planning and pre-mortem risk mitigation when addressing Gall's Law complexity and failure risks.

## Sub-concepts
none

## Part of
mental-models-galls-law

## Implementation status
defects: missing-path

## Design notes
Simplest working version is an architectural mitigation pattern rooted in Gall's Law, asserting that a complex system that works invariably evolved from a simple system that worked. By identifying and shipping the simplest functional implementation first, engineering teams protect projects against over-engineering, speculative abstractions, and catastrophic multi-component delivery failures.
