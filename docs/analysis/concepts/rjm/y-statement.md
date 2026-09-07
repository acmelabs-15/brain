---
package: rjm
name: Y-Statement
slug: y-statement
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

# Y-Statement

## Definition — verbatim
> "| **Y-Statement** | Minimal | Quick capture, one-sentence decisions | Single structured sentence |" — .claude/skills/adr-generator/references/adr-templates-catalog.md:12

## Also called — verbatim
Y-Statement Template — .claude/skills/adr-generator/references/adr-templates-catalog.md:134

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 12 | defined here | Compared in template catalog as an ultra-minimal single-sentence format for quick capture. |

## Consumes
Use case, facing concern, chosen option, desired quality, and accepted downside.

## Produces
A structured single-sentence decision record capturing essential trade-offs without procedural overhead.

## When applied
Used when documenting lightweight decisions rapidly with minimal ceremony.

## Sub-concepts
none

## Part of
adr-templates-catalog

## Implementation status
clean

## Design notes
An ultra-minimal decision template supported in rjm that encapsulates an architectural choice within a single structured sentence ("In the context of X, facing Y, we decided for Z to achieve Q, accepting D"). It provides a low-ceremony entry point for recording decisions without requiring full document authoring.
