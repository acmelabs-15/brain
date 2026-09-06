---
package: addy
name: progressive disclosure
slug: progressive-disclosure
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: docs/skill-anatomy.md, sha256: 5026d3ade4cec780a6d4c372cc11403ca1014ac369f72791f8c5ebe063519343}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# progressive disclosure

## Definition — verbatim
> "- **Use progressive disclosure.** Reference supporting files that are read only when the workflow reaches them." — docs/skill-anatomy.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/skill-anatomy.md | 127 | defined here | Bullet point defining progressive disclosure rule for referencing external supporting files. |
| README.md | 344 | defined here | Architecture principle noting that SKILL.md is the entry point while references load on demand. |

## Consumes
Multi-stage workflows, detailed reference guides, and modular checklists.

## Produces
Minimal initial context footprint, loading deep reference documents only when execution reaches that step.

## When applied
When structuring complex skill workflows and managing token consumption.

## Sub-concepts
none

## Part of
context-efficiency

## Implementation status
defects: [doc-drift, internal-contradiction] in docs/skill-anatomy.md and README.md

## Design notes
Progressive disclosure structures agent skills so that only high-level workflow steps and triggers are loaded initially, with detailed supporting references read only when execution specifically requires them, minimizing token usage and context bloat.
