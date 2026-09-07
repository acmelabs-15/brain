---
package: rjm
name: Low Coupling
slug: low-coupling
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Low Coupling

## Definition — verbatim
(used, not defined)

> "| OCP | Encapsulation, Low Coupling |" — .claude/skills/quality-grades/references/solid-principles.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/solid-principles.md | 38 | used here | Listed in the mapping table as a foundational quality supported by OCP and DIP. |

## Consumes
Component interfaces, module interconnections, dependency injection schemes.

## Produces
Decoupled software modules where components operate independently with minimal shared state.

## When applied
During architectural design, interface definition, and code quality audits.

## Sub-concepts
none

## Part of
code-qualities

## Implementation status
defects: missing-path

## Design notes
Foundational code quality in rjm that minimizes the strength of connections between routines and classes, ensuring changes to one component do not trigger unintended side effects elsewhere.
