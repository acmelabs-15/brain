---
package: rjm
name: Prior Art Investigation
slug: prior-art-investigation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Prior Art Investigation

## Definition — verbatim
> "## Prior Art Investigation (Required when changing existing systems)" — .agents/architecture/ADR-TEMPLATE.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 133 | used here | Section documenting historical rationale and existence of tier hierarchy before changing it. |
| .agents/architecture/ADR-TEMPLATE.md | 51 | defined here | Mandatory template section requiring research into existing structures before changing them. |
| .claude/skills/adr-generator/references/adr-template.md | 61 | defined here | Reference template section structuring prior art exploration into what exists and why. |
| .claude/skills/adr-generator/SKILL.md | 76 | used here | Workflow readiness check triggering prior art investigation when modifying existing systems. |

## Consumes
Existing architectural decisions, Git history, and prior system implementations.

## Produces
Prior art summaries documenting what exists today, when it was introduced, and historical rationale.

## When applied
Mandatory whenever an ADR proposes altering existing architecture, patterns, or constraints.

## Sub-concepts
none

## Part of
adr-generator

## Implementation status
defects: doc-drift, missing-path

## Design notes
A structured architectural research technique requiring authors to investigate and document existing system mechanisms and historical intent before proposing changes.
