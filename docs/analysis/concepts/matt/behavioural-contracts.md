---
package: matt
name: behavioural contracts
slug: behavioural-contracts
kind: artifact
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# behavioural contracts

## Definition — verbatim
(used, not defined)

> "So they name types, signatures and behavioural contracts, and never file paths or line numbers." — external/triage.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 44 | used here | Specified alongside types and signatures as the required durable contents of an agent brief in place of volatile file paths or line numbers. |

## Consumes
Requirements analysis, observed bug behavior, function interfaces, and acceptance conditions.

## Produces
Verifiable statements of expected system behavior, invariants, and input/output relationships.

## When applied
When authoring durable agent briefs in `/triage` or specification issues in `/to-spec`.

## Sub-concepts
none

## Part of
agent-ready brief, durable, triage

## Implementation status
clean

## Design notes
Behavioral contracts express the essential observable behavior and invariants of a software component rather than the concrete implementation path taken to achieve them. In Matt Pocock's methodology, specifying behavioral contracts alongside types and signatures provides autonomous agents with unambiguous success criteria while maintaining brief durability against codebase evolution.
