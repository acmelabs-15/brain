---
package: rjm
name: Tool-Specific Design
slug: tool-specific-design
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/evolution-scoring.md, sha256: 7e5b7f9e76ce28a7545f65dc038b5e24a9820dd515183e5dbef0a06e8045c4cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tool-Specific Design

## Definition — verbatim
> "### Anti-Pattern 2: Tool-Specific Design" — .claude/skills/skillforge/references/evolution-scoring.md:231

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-scoring.md | 231 | defined here | Defined as an anti-pattern that tightly couples skill design to a specific named tool rather than a generalized domain. |

## Consumes
Proposed skill scope and naming.

## Produces
Warning and guidance to generalize skill design into a principle-based, tool-configurable approach.

## When applied
Identified during skill design and evolution scoring when evaluating tool dependencies.

## Sub-concepts
none

## Part of
evolution-scoring-framework

## Implementation status
defects: doc-drift

## Design notes
An anti-pattern where a skill is hardcoded to a single external tool rather than a broader domain discipline, creating premature obsolescence when tools are updated or superseded.
