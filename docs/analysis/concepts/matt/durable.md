---
package: matt
name: durable
slug: durable
kind: pattern
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

# durable

## Definition — verbatim
> "Briefs are written to be <strong class=\"ah-prose-strong\">durable</strong> rather than precise, because an issue can sit in <code class=\"ah-code-inline\">ready-for-agent</code> for weeks while the code moves underneath it." — external/triage.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 44 | defined here | Defines durability as the core property of agent briefs, specifying types, signatures, and contracts instead of fragile file paths or line numbers. |

## Consumes
Verified bug reproductions, confirmed feature behaviors, domain types, and module signatures.

## Produces
Specification artifacts and agent briefs that retain their validity over time despite ongoing changes to the surrounding codebase.

## When applied
When drafting agent briefs for issues transitioning to `ready-for-agent` during triage.

## Sub-concepts
behavioural contracts

## Part of
agent-ready brief, triage

## Implementation status
clean

## Design notes
Durability is an architectural authoring principle in Matt Pocock's system where instructions and issue briefs are formulated in terms of durable architectural invariants (types, interfaces, and behavioral contracts) rather than volatile line numbers or file paths. Because an issue may remain queued in `ready-for-agent` for extended periods, avoiding volatile references ensures autonomous agents can execute the brief accurately even after substantial refactorings.
