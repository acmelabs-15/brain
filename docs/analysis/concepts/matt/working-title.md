---
package: matt
name: Working title
slug: working-title
kind: artifact
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-fragments/SKILL.md, sha256: 298b0edd23df229183630de592ed8aa4289233560f2040691f6eb77caeaad4ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Working title

## Definition — verbatim
> "# Working title" — skills/in-progress/writing-fragments/SKILL.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-fragments/SKILL.md | 45 | defined here | Rendered as the top-level H1 header in the fragments file format to provide a provisional document title. |

## Consumes
Initial user topic or conversation context when first initializing the fragments document.

## Produces
A provisional H1 heading at the top of the raw fragments file without metadata or table of contents.

## When applied
On first write of the raw fragments document in writing-fragments.

## Sub-concepts
none

## Part of
file-format

## Implementation status
clean

## Design notes
The working title serves as a low-commitment placeholder header placed at the top of a new raw material file. By providing an initial H1 label that can be freely altered later, it establishes a recognizable document identity while deferring formal branding decisions until the exploit phase.
