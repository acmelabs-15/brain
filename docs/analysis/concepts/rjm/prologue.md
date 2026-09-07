---
package: rjm
name: Prologue
slug: prologue
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Prologue

## Definition — verbatim
(used, not defined)

> "## Prologue (Summary)" — .claude/skills/adr-generator/references/adr-templates-catalog.md:157

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 157 | defines | Section heading in the Alexandrian Pattern template summarizing the context, concern, decision, quality, and downside. |

## Consumes
Use case context, key concerns, chosen option, desired quality attribute, and accepted downside.

## Produces
A five-clause executive summary summarizing the architectural decision in Alexandrian pattern form.

## When applied
Opening section of an ADR authored using the Alexandrian Pattern template format.

## Sub-concepts
none

## Part of
alexandrian

## Implementation status
clean

## Design notes
The opening summary section of the Alexandrian Pattern ADR template. It distills the architectural decision into a concise five-part formula stating the use case context, facing concern, chosen option, intended quality attribute, and accepted downside, providing immediate high-level clarity before detailed discussion.
