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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/improve-codebase-architecture/HTML-REPORT.md

## Purpose — required, verbatim
> "The architectural review is rendered as a single self-contained HTML file in the OS temp directory. Tailwind and Mermaid both come from CDNs. Mermaid handles graph-shaped diagrams reliably; hand-built divs and inline SVG handle the more editorial visuals (mass diagrams, cross-sections). Mix the two: don't lean on Mermaid for everything, it'll start to look generic." — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3

## Design intent — required
Defines the visual, structural, and stylistic specification for generating the standalone architecture review report produced by `improve-codebase-architecture`. Mandates single-file self-contained output using Tailwind CSS and Mermaid via CDNs, pairing side-by-side before/after visual patterns (Mermaid graphs, hand-built divs/SVG, cross-sections, mass diagrams, call-graph collapse) with concise, unhedged prose strictly drawn from the `codebase-design` glossary (module, interface, implementation, depth, seam, adapter, leverage, locality).

## Phase — required
cross-phase

## Inputs — required
Architectural candidate data, module boundaries, before/after structural comparisons, dependency relationships, and recommendation ratings.

## Outputs — required
Self-contained HTML file structure and visual styling specification.

## Invokes — required
- skill codebase-design — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:42

## Invoked by — required
- skill improve-codebase-architecture — skills/engineering/improve-codebase-architecture/SKILL.md:58

## Concepts named — required, verbatim
- `HTML Report Format` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:1 — defined here
- `Tailwind` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3 — used here
- `Mermaid` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3 — used here
- `mass diagrams` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3 — defined here
- `cross-sections` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:3 — defined here
- `seam` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:21 — used here
- `leak` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:22 — defined here
- `deep` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:23 — used here
- `Candidate card` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:40 — defined here
- `codebase-design` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:42 — used here
- `Mermaid graph` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:61 — defined here
- `flowchart` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:63 — used here
- `Hand-built boxes-and-arrows` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:78 — defined here
- `Cross-section` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:82 — defined here
- `Mass diagram` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:86 — defined here
- `Call-graph collapse` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:90 — defined here
- `Top recommendation section` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:102 — defined here
- `module` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `interface` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `implementation` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `depth` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `shallow` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `adapter` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `leverage` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here
- `locality` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:110 — used here

## Structure
- `# HTML Report Format` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:1
- `## Scaffold` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:5
- `## Header` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:36
- `## Candidate card` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:40
- `## Diagram patterns` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:57
- `### Mermaid graph (the workhorse for dependencies / call flow)` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:61
- `### Hand-built boxes-and-arrows (when Mermaid's layout fights you)` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:78
- `### Cross-section (good for layered shallowness)` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:82
- `### Mass diagram (good for "interface as wide as implementation")` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:86
- `### Call-graph collapse` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:90
- `## Style guidance` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:94
- `## Top recommendation section` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:102
- `## Tone` — skills/engineering/improve-codebase-architecture/HTML-REPORT.md:106

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces strict architectural vocabulary discipline, explicitly forbidding synonyms such as "component", "service", or "unit" for module, "API" or "signature" for interface, and "boundary" for seam. Mandates that "Wins bullets" strictly articulate benefits in terms of locality, leverage, and interface reduction rather than vague phrases like "cleaner code".

## Context cost
6,641 bytes (~1,660 tokens). Reference guide defining the visual schema and styling for generated HTML architectural reports.
