---
package: matt
path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md
type: skill
bytes: 6641
unit: inv-matt-39
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md, sha256: 581e8bb5a521e46bbda8ca7e19b15948bed882187108092ebb90c62513b77528}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/improve-codebase-architecture/HTML-REPORT.md

## Purpose — required, verbatim
> "The architectural review is rendered as a single self-contained HTML file in the OS temp directory." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3

## Design intent — required
Format specification and visual authoring guide for rendering codebase architecture reviews. Directs agents to produce a self-contained HTML report in the operating system's temp directory using CDN-delivered Tailwind CSS and Mermaid.js, supplemented by handcrafted HTML/SVG visuals. Mandates that diagrams carry the analytical burden (using side-by-side before/after visualizations) while prose remains minimal, direct, and strictly aligned with the `/codebase-design` vocabulary. By preventing report files from polluting repository working trees and enforcing editorial visual standards over generic dashboard templates, it provides a high-leverage review artifact that makes shallow vs. deep structural refactors immediately obvious.

## Phase — required
cross-phase

## Inputs — required
Architecture candidate cards, domain models, before/after structural comparisons, and `/codebase-design` principles.

## Outputs — required
A single self-contained HTML review document written to the OS temp directory.

## Invokes — required
- skill codebase-design — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:42

## Invoked by — required
- skill improve-codebase-architecture — skills/engineering/improve-codebase-architecture/SKILL.md:58

## Concepts named — required, verbatim
- `OS temp directory` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3 — used here
- `Tailwind` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3 — used here
- `Mermaid` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3 — used here
- `mass diagrams` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3 — defined here
- `cross-sections` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3 — defined here
- `Candidate card` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:40 — defined here
- `Before / After diagram` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:49 — defined here
- `ADR callout` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:53 — defined here
- `Mermaid graph` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:61 — defined here
- `Call-graph collapse` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:90 — defined here
- `Top recommendation section` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:102 — defined here
- `module` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `interface` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `implementation` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `depth` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `deep` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `shallow` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `seam` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `adapter` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `leverage` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `locality` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here

## Structure
- HTML Report Format — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:1
- Scaffold — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:5
- Header — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:36
- Candidate card — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:40
- Diagram patterns — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:57
- Mermaid graph (the workhorse for dependencies / call flow) — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:61
- Hand-built boxes-and-arrows (when Mermaid's layout fights you) — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:78
- Cross-section (good for layered shallowness) — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:82
- Mass diagram (good for "interface as wide as implementation") — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:86
- Call-graph collapse — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:90
- Style guidance — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:94
- Top recommendation section — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:102
- Tone — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:106

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides distinct diagram archetypes (Mermaid flowcharts, hand-built boxes-and-arrows, cross-sections, mass diagrams, and call-graph collapse) tailored to specific structural smells. Strictly forbids terms like "component", "service", or "boundary" in favor of the canonical `/codebase-design` vocabulary.

## Context cost
6641 bytes, 124 lines, ~1500 tokens.
