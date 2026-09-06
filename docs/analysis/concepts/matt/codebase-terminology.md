---
package: matt
name: codebase terminology
slug: codebase-terminology
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/domain-modeling-trigger-context-adr.md, sha256: ec97502246b5d9cfc3aeea3ed584ca8ac0b43c82ec8389ff2ed96c231b76062d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# codebase terminology

## Definition — verbatim
(used, not defined)

> "codebase terminology" — .changeset/domain-modeling-trigger-context-adr.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/domain-modeling-trigger-context-adr.md | 5 | used here | Stated as a primary conversational trigger for invoking the domain-modeling skill. |

## Consumes
Existing code symbols, domain naming discussions, and developer questions regarding term definitions.

## Produces
Clarified domain concepts and updated definitions recorded in CONTEXT.md or ADRs.

## When applied
When developers or agents discuss domain naming, identify conflicting terminology, or clarify the meaning of system concepts.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
clean

## Design notes
In Matt's toolkit, codebase terminology represents the shared vocabulary and naming conventions embedded within project code and documentation. Triggering domain-modeling on discussions of codebase terminology ensures that ambiguous or overloaded terms are pinned down and recorded inline in CONTEXT.md before code is written.
