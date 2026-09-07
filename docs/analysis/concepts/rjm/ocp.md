---
package: rjm
name: OCP
slug: ocp
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

# OCP

## Definition — verbatim
> "Open for extension, closed for modification" — .claude/skills/quality-grades/references/solid-principles.md:16

## Also called — verbatim
> "Open-Closed (OCP)" — .claude/skills/quality-grades/references/solid-principles.md:16

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/solid-principles.md | 16 | defined here | Acronym and one-liner definition for the Open-Closed Principle. |

## Consumes
Interface contracts, abstraction layers, extension points.

## Produces
Extensible software designs where new behaviors are added without modifying existing code.

## When applied
When designing extensible architectures, defining plugin boundaries, and reviewing code modifications.

## Sub-concepts
none

## Part of
solid-principles

## Implementation status
defects: missing-path

## Design notes
Open-Closed Principle (OCP) in rjm requiring that modules remain open for extension but closed for modification, promoting loose coupling and preventing regressions during feature additions.
