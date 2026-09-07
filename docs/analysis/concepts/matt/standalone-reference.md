---
package: matt
name: standalone reference
slug: standalone-reference
kind: reference
package_phase: matt:productivity
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

# standalone reference

## Definition — verbatim
> "This is a reach-for-it-anytime standalone reference. It has no neighbour in the chain because it sits underneath the whole set rather than beside any one skill" — external/writing-for-agents.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/writing-for-agents.md | 73 | defined here | Categorizes writing-for-agents as an underlying standalone reference document rather than a sequential workflow skill |

## Consumes
Agent-read documents across all phases.

## Produces
Universal authoring principles and structural standards applied across skills and repository documentation.

## When applied
Consulted anytime an engineer or agent creates, edits, or prunes documents that agents read.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, doc-drift

## Design notes
A classification for foundational reference documents (such as `writing-for-agents`) that do not belong to a sequential pipeline phase, but instead provide universal principles underpinning the entire skill suite and its produced artifacts.
