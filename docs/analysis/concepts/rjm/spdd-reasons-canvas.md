---
package: rjm
name: SPDD REASONS Canvas
slug: spdd-reasons-canvas
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/SKILL.md, sha256: 08f84b382679ed61ac10f81382ea6e67e33218cbf4ab38c9412548f64cb46d0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SPDD REASONS Canvas

## Definition — verbatim
> "The body sections carry SPDD REASONS Canvas labels for interop with SPDD" — .claude/skills/spec-generator/SKILL.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/SKILL.md | 115 | defined here | Introduces the SPDD REASONS taxonomy mapping requirements into labeled architectural sections. |

## Consumes
Requirements specifications, domain entities, and system design context.

## Produces
Labeled requirement sections for Requirements, Entities, Approach, Structure, Operations, Norms, and Safeguards.

## When applied
Applied when authoring new requirement specifications to enable interoperability with Spec-Driven Development tooling.

## Sub-concepts
none

## Part of
requirement-structure

## Implementation status
clean

## Design notes
The SPDD REASONS Canvas provides an ontological taxonomy (Requirements, Entities, Approach, Structure, Operations, Norms, Safeguards) that bridges high-level requirements with technical design and operational safeguards in spec-generator.
