---
package: rjm
name: Front-gate first
slug: front-gate-first
kind: gate
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

# Front-gate first

## Definition — verbatim
> "## Front-gate first" — .claude/skills/research-and-incorporate/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 20 | defined here | Defined as a mandatory blocking gate requiring a named downstream consumer before any research execution begins. |

## Consumes
Research request, named spec, issue, or downstream consumer.

## Produces
Permission to proceed to Phase 1 or immediate halt if research is aspirational.

## When applied
Executed prior to Phase 1 of research-and-incorporate.

## Sub-concepts
spec-front-gate

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
A governance gate in research-and-incorporate halting any research activity that lacks an immediate downstream consumer or specification, preventing aspirational research waste and knowledge graph pollution.
