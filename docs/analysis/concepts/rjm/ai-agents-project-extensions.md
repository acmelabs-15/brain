---
package: rjm
name: ai-agents Project Extensions
slug: ai-agents-project-extensions
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ai-agents Project Extensions

## Definition — verbatim
(used, not defined)
> "### 1.2 ai-agents Project Extensions" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 54 | defined here | Section heading defining repository-specific schema extensions and directory structure conventions. |

## Consumes
official-standard

## Produces
Extended schema specification including version, model policies, extended metadata, and directory layouts for internal skills.

## When applied
Applied when authoring project-internal skills within the ai-agents repository to meet internal quality and validation bars.

## Sub-concepts
none

## Part of
two-tier-requirement-system

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
Repository-specific extensions layered onto the official skill standard, defining additional top-level fields (`version`, `model`, `model-rationale`), structured metadata, and custom directory layouts (`modules/`, `templates/`, `tests/`) enforced across the ai-agents project.
