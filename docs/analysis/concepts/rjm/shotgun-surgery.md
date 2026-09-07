---
package: rjm
name: Shotgun Surgery
slug: shotgun-surgery
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Shotgun Surgery

## Definition — verbatim
> "one change requires edits in many places. The inverse of Divergent Change. Suggests Move Method or Inline to gather the change in one place." — .claude/skills/software-engineering-library/references/refactoring.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 57 | defined here | Defined as a code smell where a single conceptual modification necessitates edits across many files. |

## Consumes
Dispersed logic where making one logical change requires touching numerous files and methods.

## Produces
Consolidated logic gathered into a single module using Move Method or Inline.

## When applied
Diagnosed when a single conceptual requirement change forces repetitive edits across multiple files.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Shotgun Surgery is a code smell in rjm that represents the structural inverse of Divergent Change. Rather than one module changing for many reasons, a single conceptual requirement change forces the developer to make numerous small modifications across disparate classes and files. Applying Move Method or Inline consolidates related responsibilities into a single cohesive location, reducing cognitive burden and commit blast radius.
