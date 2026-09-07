---
package: rjm
name: Extract methods
slug: extract-methods
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Extract methods

## Definition — verbatim
> "**Extract methods**: Replace repeated construction or logic with a single method." — .claude/skills/golden-principles/references/design-dry-principle.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 44 | defined here | Documented remediation technique replacing repeated construction or logic with a single method. |

## Consumes
Duplicated statements, repeated object construction sequences, inline multi-step logic, and long procedural methods.

## Produces
Cohesive helper methods, intention-revealing private routines, and centralized functional building blocks.

## When applied
Applied when identical logic or repetitive object initialization sequences appear across two or more call sites, or when breaking down procedural code into sergeant and worker methods.

## Sub-concepts
none

## Part of
dry-principle

## Implementation status
defects: missing-path

## Design notes
Extract methods is a fundamental refactoring technique in rjm that simultaneously enforces DRY and advances Programming by Intention. It consolidates scattered duplicate logic into a single authoritative routine, making bug fixes instantaneous across all invocations while decomposing complex workflows into readable, cohesive units.
