---
package: rjm
name: Phase 1: RESEARCH
slug: phase-1-research
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 1: RESEARCH

## Definition — verbatim
> "│ Phase 1: RESEARCH (BLOCKING)                                    │" — .claude/skills/research-and-incorporate/SKILL.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 91 | defined here | Defined in process diagram as the first blocking phase covering knowledge checks, URL fetching, and synthesis. |

## Consumes
Research parameters (TOPIC, CONTEXT, URLS) and prior knowledge stores.

## Produces
Verbatim quoted evidence, core principles, frameworks, examples, and failure modes.

## When applied
Executed upon passing front-gate validation in research-and-incorporate.

## Sub-concepts
research-depth

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
The first phase of the research-and-incorporate workflow, responsible for checking existing knowledge and performing grounded external research with strict quote extraction before conceptual reasoning.
