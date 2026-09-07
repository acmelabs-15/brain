---
package: rjm
name: Machine-Readable ADR Lifecycle Frontmatter
slug: machine-readable-adr-lifecycle-frontmatter
kind: pattern
package_phase: rjm:Architect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Machine-Readable ADR Lifecycle Frontmatter

## Definition — verbatim
> "ADR-073: Machine-Readable ADR Lifecycle Frontmatter" — .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 12 | defined here | Architectural decision establishing structured YAML frontmatter as the authority for ADR lifecycle state |

## Consumes
ADR markdown documents and decision metadata.

## Produces
Queryable YAML frontmatter containing status, date, decision-makers, supersedes, and implemented flags.

## When applied
Applied to all architectural decision records upon creation and during lifecycle state transitions.

## Sub-concepts
supersedes, superseded-by

## Part of
adr-lifecycle

## Implementation status
defects: missing-path

## Design notes
Machine-Readable ADR Lifecycle Frontmatter is an architectural metadata specification adopted in ADR-073 to replace fragile prose scraping of `## Status` sections with structured, parseable YAML frontmatter. This enables autonomous tooling and agents to query current architectural state and enforce supersession relationships reliably.
