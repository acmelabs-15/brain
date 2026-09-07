---
package: rjm
name: Failure-Mode Catalog
slug: failure-mode-catalog
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Failure-Mode Catalog

## Definition — verbatim
> "### Phase 3: Map to the Failure-Mode Catalog" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 74 | defined here | Section heading introducing the canonical taxonomy of 11 failure modes in .agents/governance/FAILURE-MODES.md. |

## Consumes
Post-incident analyses, retrospectives, and failure observations.

## Produces
Standardized failure mode classifications (`FM-1` through `FM-11`) for incidents.

## When applied
Applied during retrospective analysis and archaeological reviews before proposing any new failure pattern.

## Sub-concepts
fm-1, fm-2, fm-3, fm-4, fm-5, fm-6, fm-7, fm-8, fm-contract

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
The Failure-Mode Catalog (`.agents/governance/FAILURE-MODES.md`) provides the canonical 11-pattern taxonomy of recurring multi-agent and system failure modes in rjm. By requiring all new post-mortem retrospectives to classify incidents against this existing taxonomy before creating new categories, it prevents taxonomy bloat and ensures consistent historical tracking of system weaknesses across development cycles.
