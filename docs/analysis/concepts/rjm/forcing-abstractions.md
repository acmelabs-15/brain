---
package: rjm
name: Forcing Abstractions
slug: forcing-abstractions
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Forcing Abstractions

## Definition — verbatim
> "<description>Forcing Abstractions (creating abstraction when CVA shows no variability)</description>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:440

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 440 | defined here | Defined as a critical anti-pattern adding speculative complexity when no variation exists. |
| .claude/skills/cva-analysis/SKILL.md | 329 | defined here | Documented in CVA anti-patterns table instructing engineers to document decisions not to abstract when variability is absent. |

## Consumes
Low-variability or uniform CVA matrices, speculative future requirements.

## Produces
Unneeded interfaces, factories, indirection layers, inflated cognitive load without functional benefit.

## When applied
Detected during matrix mapping when row and column variability scores are negligible.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Forcing Abstractions is a critical anti-pattern in rjm's design philosophy that occurs when developers introduce interfaces, abstractions, or design patterns even though the CVA matrix demonstrates zero variability across use cases. Per CLAUDE.md, wrong or superfluous abstractions are worse than no abstractions at all. CVA actively enforces YAGNI by requiring engineers to explicitly record a decision NOT to abstract when variability is absent.
