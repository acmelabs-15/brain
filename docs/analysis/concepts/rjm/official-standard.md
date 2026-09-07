---
package: rjm
name: Official Standard
slug: official-standard
kind: reference
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

# Official Standard

## Definition — verbatim
> "### 1.1 Official Standard (agentskills.io + claude.com)" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 25 | defined here | Section heading defining the minimal two-field baseline schema for cross-platform agent skills. |

## Consumes
none

## Produces
Baseline frontmatter schema requirements for portable agent skills.

## When applied
Applied when authoring or validating skills intended for cross-platform interoperability across Claude Code and external runners.

## Sub-concepts
none

## Part of
two-tier-requirement-system

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
The upstream reference specification established by agentskills.io and claude.com that defines the minimal required frontmatter fields (`name` and `description`) for cross-platform portable agent skills.
