---
package: matt
name: Mermaid
slug: mermaid
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md, sha256: 581e8bb5a521e46bbda8ca7e19b15948bed882187108092ebb90c62513b77528}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Mermaid

## Definition — verbatim
> "Tailwind and Mermaid both come from CDNs." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3

> "Mermaid handles graph-shaped diagrams reliably; hand-built divs and inline SVG handle the more editorial visuals (mass diagrams, cross-sections)." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 3 | used here | Cited as the CDN-loaded library for rendering graph-shaped dependency and call-flow diagrams in HTML reports. |

## Consumes
Textual diagram syntax (`flowchart`, `graph`, `sequenceDiagram`, `classDef`).

## Produces
Browser-rendered vector diagrams illustrating dependency and call-flow structures.

## When applied
When displaying dependency graphs and call-flow relationships in architectural reviews.

## Sub-concepts
none

## Part of
html-report

## Implementation status
clean

## Design notes
An external client-side diagramming library imported via CDN to render dependency and call-graph visualizations directly in architecture review reports from simple text definitions.
