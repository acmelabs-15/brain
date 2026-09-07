---
package: rjm
name: Violation Signs
slug: violation-signs
kind: checklist
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

# Violation Signs

## Definition — verbatim
> "## Violation Signs" — .claude/skills/quality-grades/references/solid-principles.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/solid-principles.md | 21 | defined here | Checklist detailing telltale diagnostic signs indicating violations across each of the five SOLID principles. |

## Consumes
Codebase AST, class names, method signatures, dependency graphs.

## Produces
Diagnostic findings identifying specific SOLID design defects in classes and modules.

## When applied
During code reviews, domain quality audits, and refactoring planning.

## Sub-concepts
none

## Part of
solid-principles

## Implementation status
defects: missing-path

## Design notes
Diagnostic checklist in rjm cataloging recognizable behavioral anti-patterns (such as classes named with "Manager", type checking in client code, or NotImplementedException in implementations) to identify SOLID design violations.
