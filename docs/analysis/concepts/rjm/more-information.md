---
package: rjm
name: More Information
slug: more-information
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

# More Information

## Definition — verbatim
(used, not defined)

> "## More Information" — .claude/skills/adr-generator/references/adr-templates-catalog.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 91 | defines | Section heading in the MADR 4.0 template capturing additional evidence, team agreement, and links to other decisions. |

## Consumes
Supporting empirical data, benchmarks, team discussion notes, or related decision links.

## Produces
Supplementary reference material attached to the architectural decision record.

## When applied
Optional or concluding section in MADR 4.0 records when context or evidence extends beyond core drivers and trade-offs.

## Sub-concepts
none

## Part of
madr

## Implementation status
clean

## Design notes
An appendix section in the MADR 4.0 template providing a structured location for supplementary evidence, team consensus records, and links to prior or subsequent decisions. It keeps the core decision document concise while ensuring that full contextual references remain discoverable.
