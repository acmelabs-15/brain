---
package: rjm
name: Research depth
slug: research-depth
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

# Research depth

## Definition — verbatim
> "| Research depth | Core principles + frameworks + 3 examples | 1 |" — .claude/skills/research-and-incorporate/SKILL.md:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 126 | defined here | Blocking quality gate requiring core principles, frameworks, and at least 3 examples in Phase 1. |

## Consumes
Research notes, extracted quotes, and synthesized findings.

## Produces
Gate pass/fail assessment for Phase 1 completion.

## When applied
Evaluated at the end of Phase 1 in research-and-incorporate.

## Sub-concepts
none

## Part of
phase-1-research, research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
A blocking quality gate in research-and-incorporate ensuring that research is not superficial, requiring identified core principles, structural frameworks, and three concrete examples before allowing document authoring.
