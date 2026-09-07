---
package: rjm
name: Quality Assurance Checklist
slug: quality-assurance-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-interview-protocol.md, sha256: 95223d27cb07804a0af3fb3a999aca337b7ce53477673e250cbe1547d7e997d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quality Assurance Checklist

## Definition — verbatim
(used, not defined)

> "Before finalizing an interview:" — .agents/governance/agent-interview-protocol.md:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-interview-protocol.md | 148 | defined here | Defined as an eight-item verification gate that must pass before an agent interview document can be finalized. |

## Consumes
Draft agent interview responses and cross-agent validation findings.

## Produces
A verified, quality-checked interview document ready for orchestrator integration.

## When applied
Applied at the conclusion of Step 3 (Validate) before committing the interview document in Step 4.

## Sub-concepts
none

## Part of
- agent-interview-protocol

## Implementation status
defects: missing-path, doc-drift (from .agents/governance/agent-interview-protocol.md:182 missing archive path and line 188 unmaintained Capabilities Matrix)

## Design notes
The Quality Assurance Checklist acts as a quality gate ensuring that agent interview documents meet strict governance standards. It verifies that all 8 questions are answered, limitations are testable, pairings are reciprocal, entry criteria are objective, and anti-patterns identify concrete alternative agents. Without this checklist, vague or incomplete interview responses would degrade orchestrator routing precision.
