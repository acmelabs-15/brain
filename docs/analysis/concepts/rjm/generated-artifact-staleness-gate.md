---
package: rjm
name: Generated Artifact Staleness gate
slug: generated-artifact-staleness-gate
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Generated Artifact Staleness gate

## Definition — verbatim
(used, not defined)

> "was pinned at a 15m cap by its Generated Artifact Staleness gate, whose budget" — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:215

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 215 | used here | Identified as the coupling gate that pinned `pre-pr-validation` to an unnecessarily large 15-minute timeout cap. |

## Consumes
Committed code templates, generator scripts, and generated target artifacts on disk.

## Produces
Pass/fail verdicts asserting that generated source files match the output of their generator templates.

## When applied
Invoked in pre-PR validation and CI pipelines to prevent stale or out-of-sync generated artifacts from landing in the repository.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
The Generated Artifact Staleness gate ensures that derived and generated files (such as platform-specific agent definitions derived from shared templates) are regenerated and committed whenever their underlying sources change. ADR-104 highlights how excessive margin allocations in this gate artificially inflated hook timeout caps, demonstrating the necessity of empirical budget sizing.
