---
package: rjm
name: Mega-ADR
slug: mega-adr
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Mega-ADR

## Definition — verbatim
> "Entire system architecture document in one ADR" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 123 | defines | Tabulated under Size and Content anti-patterns as attempting to document an entire system architecture within a single decision record. |

## Consumes
Monolithic, multi-decision architectural documentation.

## Produces
Decomposition directive requiring the author to partition monolithic text into atomic, single-decision ADRs.

## When applied
Triggered during START verification or review when an ADR encompasses multiple independent architectural choices.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
Mega-ADR violates the core principle of decision atomicity by attempting to document an entire system architecture in a single bloated record. In rjm, bundling multiple decisions into one document obscures trade-offs, complicates peer review, and prevents granular superseding. Detecting Mega-ADR prompts decomposing the proposal into discrete, focused decision records.
