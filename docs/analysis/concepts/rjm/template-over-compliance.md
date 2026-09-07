---
package: rjm
name: Template over-compliance
slug: template-over-compliance
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Template over-compliance

## Definition — verbatim
> "Forcing irrelevant sections wastes tokens" — .claude/skills/research-and-incorporate/SKILL.md:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/SKILL.md | 155 | defined here | Tabulated as an anti-pattern warning that forcing irrelevant template sections wastes tokens and documentation should organize for the topic. |

## Consumes
Analysis document structures during research authoring.

## Produces
Guidance directing agents to tailor documentation organization to the research topic rather than blindly adhering to inapplicable template headers.

## When applied
Applied during Phase 2 (Analysis Document) composition in research workflows.

## Sub-concepts
none

## Part of
research-and-incorporate

## Implementation status
defects: doc-drift, missing-path

## Design notes
Template over-compliance is an anti-pattern warning against mechanically populating every header of a generic template when inapplicable, wasting context tokens and obscuring critical insights.
