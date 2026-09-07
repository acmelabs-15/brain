---
package: rjm
name: Provenance Determination
slug: provenance-determination
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analysis-provenance/SKILL.md, sha256: da8d7cfd6e7333bb7a893e589bc58588386cd6eb9c73c555be2e3b1757de7c27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Provenance Determination

## Definition — verbatim
> "5. Provenance Determination<br/>Weight signals, return<br/>category + evidence" — .claude/skills/analysis-provenance/SKILL.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analysis-provenance/SKILL.md | 68 | defined here | Flowchart node defining Step 5 of provenance analysis: weigh signals to return category and evidence. |

## Consumes
Collected provenance indicators from directory, manifest, and header analyses.

## Produces
Final code ownership categorization (`UPSTREAM`, `LOCAL`, `VENDOR`, or `UNKNOWN`) with supporting evidence.

## When applied
Step 5 of the 5-step provenance analysis workflow.

## Sub-concepts
upstream, local, vendor

## Part of
analysis-provenance

## Implementation status
defects: doc-drift, missing-path

## Design notes
The culminating decision phase of provenance analysis where directory, manifest, and header signals are weighted to yield an authoritative ownership classification (`UPSTREAM`, `LOCAL`, `VENDOR`, or `UNKNOWN`) and guide subsequent modification decisions.
