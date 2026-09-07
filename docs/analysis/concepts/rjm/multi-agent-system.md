---
package: rjm
name: multi-agent system
slug: multi-agent-system
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# multi-agent system

## Definition — verbatim
(used, not defined)

> "This document provides an overview of the governance framework for the multi-agent system." — docs/agent-governance.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-governance.md | 5 | used here | Describes the target architectural collective governed by specialized principles and lifecycle policies. |

## Consumes
Domain-specific prompt templates, orchestrator routing algorithms, and lifecycle hook events.

## Produces
Coordinated multi-agent software engineering workflows spanning discovery, design, implementation, and verification.

## When applied
Governs all operational execution and agent interactions throughout the entire repository development lifecycle.

## Sub-concepts
agent-design-principles, steering-committee-charter

## Part of
none

## Implementation status
clean

## Design notes
The multi-agent system is rjm's primary structural architecture, dividing complex software development into a network of 31 distinct, highly specialized agent roles coordinated by an orchestrator. Governed by formal design principles and strict capability ceilings, the multi-agent pattern prevents individual agent prompts from expanding into unmaintainable generalist models.
