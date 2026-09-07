---
package: rjm
name: information leakage
slug: information-leakage
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-064-commands-to-skills-migration.md, sha256: aeea5baa429974dd9980d1e659f39aa10d472d794e644a158bac7eb8f1bd44fa}
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# information leakage

## Definition — verbatim
> "- **Information leakage**: the same decision shows up in two or more places, so changing it requires changing all of them." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-064-commands-to-skills-migration.md | 36 | used here | Cited as the design flaw of maintaining separate commands and skills directories encoding the same user workflow decision. |
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 18 | defined here | Defined in software design glossary as a design antipattern where a single decision is duplicated across multiple places. |

## Consumes
Software interfaces, module boundaries, and configuration declarations.

## Produces
Design defect findings identifying synchronized maintenance liabilities and knowledge duplication.

## When applied
Monitored during code reviews, ADR reviews, and refactoring planning to eliminate duplicate representations of design choices.

## Sub-concepts
none

## Part of
philosophy-of-software-design

## Implementation status
defects: doc-drift

## Design notes
Information leakage is a software design antipattern defined in rjm's software engineering library. It occurs when a single design decision is reflected across multiple distinct modules, files, or authoring surfaces. If that decision changes, all dependent locations must be updated in lockstep, creating maintenance friction and sync bugs. rjm actively refactors architectures (such as retiring separate command files) to eliminate information leakage.
