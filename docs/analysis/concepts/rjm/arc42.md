---
package: rjm
name: arc42
slug: arc42
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

# arc42

## Definition — verbatim
> "| **arc42** | Medium | Teams using arc42 documentation | Integrates with arc42 architecture framework |" — .claude/skills/adr-generator/references/adr-templates-catalog.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 17 | defined here | Compared in template catalog as an ADR template format designed to integrate with the arc42 architecture framework. |

## Consumes
arc42 architecture model, quality goals, and system building blocks.

## Produces
An architecture decision record formatted for direct inclusion into arc42 Section 9 (Architecture Decisions).

## When applied
Selected when an engineering organization maintains comprehensive system documentation using the arc42 framework.

## Sub-concepts
none

## Part of
adr-templates-catalog

## Implementation status
clean

## Design notes
An ADR template format cataloged in rjm designed to interface directly with the arc42 architectural documentation framework. It aligns decision capture with arc42's structural guidelines, ensuring architectural decisions seamlessly populate section 9 of arc42 documentation repositories.
