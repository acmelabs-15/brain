---
package: rjm
name: Tyree & Akerman
slug: tyree-akerman
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

# Tyree & Akerman

## Definition — verbatim
> "| **Tyree & Akerman** | High | Enterprise, regulated environments | Assumptions, constraints, implications, traceability |" — .claude/skills/adr-generator/references/adr-templates-catalog.md:14

## Also called — verbatim
Tyree & Akerman Template — .claude/skills/adr-generator/references/adr-templates-catalog.md:182

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 14 | defined here | Compared in template catalog as an enterprise-focused format emphasizing assumptions, constraints, and traceability. |

## Consumes
Business issues, architectural assumptions, constraints, positions, arguments, and implications.

## Produces
A formal, enterprise-grade architecture decision record with rigorous traceability links.

## When applied
Selected for high-governance, enterprise, or regulated environments requiring rigorous decision auditing.

## Sub-concepts
none

## Part of
adr-templates-catalog

## Implementation status
clean

## Design notes
A comprehensive enterprise ADR format cataloged in rjm, originating from Jeff Tyree and Art Akerman's foundational architecture framework. It provides detailed tracking of assumptions, constraints, positions, arguments, and implications, targeted at regulated environments where full governance traceability is paramount.
