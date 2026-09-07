---
package: rjm
name: Domain Grouping
slug: domain-grouping
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Domain Grouping

## Definition — verbatim
> "The index MUST group skills by domain using markdown headings." — .agents/archive/planning/PRD-skills-index-registry.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 77 | defined here | Specified as functional requirement FR-3 for structuring skills under domain-specific markdown headings. |

## Consumes
Categorized skill definitions across functional domains (such as Analysis, Documentation, Architecture, QA).

## Produces
Organized markdown sections with domain headings and corresponding quick-reference tables.

## When applied
Applied when formatting and updating the centralized skills index registry.

## Sub-concepts
none

## Part of
skills-index-registry

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
An organizational pattern in rjm grouping related skills under domain headings (e.g. Analysis, Documentation, QA), enabling agents working within a specific problem domain to browse all related skills without performing full-text searches.
