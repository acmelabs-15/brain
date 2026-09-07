---
package: rjm
name: Phase 2: ANALYSIS DOCUMENT
slug: phase-2-analysis-document
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

# Phase 2: ANALYSIS DOCUMENT

## Definition — verbatim
> "│ Phase 2: ANALYSIS DOCUMENT (BLOCKING)                           │" — .claude/skills/research-and-incorporate/SKILL.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 97 | defined here | Defined in process diagram as the second blocking phase producing a 3000-5000 word analysis document. |

## Consumes
Grounded research quotes and synthesis outputs from Phase 1.

## Produces
A deep analysis document written to `.agents/analysis/{topic-slug}.md`.

## When applied
Executed after Phase 1 verification passes in research-and-incorporate.

## Sub-concepts
analysis-length, concrete-examples

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
The second phase of research-and-incorporate, requiring authoring of a comprehensive, structured analysis document covering concepts, frameworks, applications, and failure modes with strict quality gating.
