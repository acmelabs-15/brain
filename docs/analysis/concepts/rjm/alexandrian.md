---
package: rjm
name: Alexandrian
slug: alexandrian
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Alexandrian

## Definition — verbatim
> "| **Alexandrian** | Low-Medium | Pattern-oriented teams | Prologue/Discussion/Solution/Consequences |" — .claude/skills/adr-generator/references/adr-templates-catalog.md:13

## Also called — verbatim
Alexandrian Pattern Template — .claude/skills/adr-generator/references/adr-templates-catalog.md:150

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 13 | defined here | Compared in template catalog as a pattern-oriented format structuring decisions into Prologue, Discussion, Solution, and Consequences. |
| .claude/skills/adr-generator/SKILL.md | 4 | used here | Listed in skill description as one of the supported ADR template formats. |

## Consumes
Problem context, discussion of forces at play, solution description, and consequences.

## Produces
Pattern-formatted ADR document following Christopher Alexander's architectural pattern language.

## When applied
Selected when teams favor narrative and pattern-based architecture documentation.

## Sub-concepts
none

## Part of
adr-templates-catalog

## Implementation status
clean

## Design notes
An ADR format supported by rjm's ADR generator inspired by Christopher Alexander's architectural pattern language. It structures records around four narrative sections—Prologue (summary), Discussion (forces at play), Solution (decision), and Consequences (long-term outcomes)—emphasizing the systemic forces driving a decision.
