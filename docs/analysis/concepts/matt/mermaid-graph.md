---
package: matt
name: Mermaid graph
slug: mermaid-graph
kind: technique
package_phase: cross-phase
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

# Mermaid graph

## Definition — verbatim
> "Mermaid graph (the workhorse for dependencies / call flow)" — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 61 | defined here | Documented as the workhorse diagram pattern for visualizing dependency webs and call flow in HTML architecture reports. |

## Consumes
Dependency relationships, call flows, or before/after round-trip metrics.

## Produces
A rendered Mermaid flowchart, graph, or sequence diagram highlighting seams, leakage edges, and deep modules.

## When applied
Used when the visual point is "X calls Y calls Z, and look at the mess" or showing sequence reductions.

## Sub-concepts
none

## Part of
html-report

## Implementation status
clean

## Design notes
The primary diagramming technique recommended for HTML architecture reports to visualize dependencies and call flows, using Mermaid syntax wrapped in Tailwind-styled cards and styled with classDef rules to contrast messy before states against clean deep modules.
