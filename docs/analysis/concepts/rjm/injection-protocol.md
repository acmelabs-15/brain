---
package: rjm
name: Injection Protocol
slug: injection-protocol
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Injection Protocol

## Definition — verbatim
> "Orchestrator determines applicable steering:" — .agents/AGENT-SYSTEM.md:1624

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1622 | defines | 5-step operational protocol for scope analysis, glob matching, priority sorting, and token-budgeted steering injection. |

## Consumes
Task scope, file path lists, steering file glob definitions, priority ratings, and token budget limits.

## Produces
A prioritized subset of steering instructions injected into the subagent prompt.

## When applied
> "Orchestrator determines applicable steering:" — .agents/AGENT-SYSTEM.md:1624

## Sub-concepts
none

## Part of
steering-system

## Implementation status
clean

## Design notes
A five-step operational procedure executed by the orchestrator: 1. Analyze task scope (files affected); 2. Match against steering glob patterns; 3. Sort by priority (higher = more important); 4. Inject relevant steering into agent context; 5. Respect token budget (prioritize most specific). This protocol guarantees that agents receive essential domain rules without context bloat.
