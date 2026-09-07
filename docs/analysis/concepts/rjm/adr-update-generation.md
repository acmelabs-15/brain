---
package: rjm
name: ADR Update Generation
slug: adr-update-generation
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/agent-prompts.md, sha256: 58a13dd3adc40229b5a77f394c0ffcfc5e20588f166f961bfc00dc877cd6598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR Update Generation

## Definition — verbatim
(used, not defined)

> "### ADR Update Generation" — .claude/skills/adr-review/references/agent-prompts.md:442

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/agent-prompts.md | 442 | defines | Phase 3 resolution prompt instructing orchestrator synthesis of an updated ADR incorporating review feedback. |

## Consumes
Consolidated feedback, resolved conflicts, and P0/P1 issue rulings from Phase 2.

## Produces
A complete updated ADR revision incorporating feedback and recording dissents.

## When applied
Phase 3 (Resolution) of the adr-review debate protocol.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
clean

## Design notes
The synthesis technique in Phase 3 of multi-agent ADR review where the orchestrator directly generates an updated version of the ADR. Rather than delegating back to individual agents, the orchestrator incorporates all P0/P1 feedback, updates decision rationales, and records dissenting viewpoints in "Alternatives Considered."
