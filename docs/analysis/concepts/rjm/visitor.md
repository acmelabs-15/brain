---
package: rjm
name: Visitor
slug: visitor
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

# Visitor

## Definition — verbatim
(used, not defined)

> "<purpose>Add new pattern types beyond Strategy/Abstract Factory (e.g., Builder, Bridge, Visitor)</purpose>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:368

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 368 | used here | Cited as an example of an extended pattern type to be added to Phase 4 pattern mapping rules. |
| .claude/skills/cva-analysis/SKILL.md | 447 | used here | Documented as an extension point pattern to incorporate into matrix mapping guides alongside Builder and Bridge. |

## Consumes
Object structure hierarchy, discrete operation sets varying independently of data structures.

## Produces
Separation of operations from the object hierarchy, allowing new operations without modifying classes.

## When applied
When operations need to be performed on heterogeneous object structures that change infrequently.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Visitor is a Gang of Four behavioral design pattern documented as an architectural extension point for rjm's CVA analysis skill. While the base CVA skill maps primarily to Strategy and Abstract Factory, Visitor is recognized as an advanced pattern mapping target for scenarios where operations vary over stable, heterogeneous object structures. Without this concept, the CVA framework's pattern repertoire would be restricted to basic behavioral and creational mappings.
