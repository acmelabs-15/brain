---
package: rjm
name: Project-internal skills
slug: project-internal-skills
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

# Project-internal skills

## Definition — verbatim
> "Project-internal skills" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 149 | defined here | Classification tier in requirement matrix defining skills requiring project-specific metadata and quality extensions. |

## Consumes
ai-agents-project-extensions

## Produces
Internal skill implementations containing extended frontmatter (`version`, `license`, optional `model`/`model-rationale`) and project directory conventions.

## When applied
Applied when developing skills targeted for maintenance, testing, and execution specifically within the ai-agents repository.

## Sub-concepts
none

## Part of
two-tier-requirement-system

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
The class of skills built specifically for the ai-agents project that must satisfy enhanced internal quality gates, including explicit semantic versioning, licensing declarations, model cost discipline, and optional custom directory structures.
