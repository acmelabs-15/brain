---
package: addy
name: Source hierarchy
slug: source-hierarchy
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Source hierarchy

## Definition — verbatim
> "**Source hierarchy (in order of authority):**" — skills/source-driven-development/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/source-driven-development/SKILL.md | 67 | defined here | Defines the four-tier authority hierarchy for fetching documentation during development. |

## Consumes
Detected project tech stack and dependency versions from project manifests.

## Produces
Prioritized selection of official documentation sources for verifying API patterns.

## When applied
When fetching official documentation in Step 2 of Source-Driven Development.

## Sub-concepts
official-documentation, official-blog-changelog, web-standards-references, browser-runtime-compatibility

## Part of
source-driven-development

## Implementation status
defects: orphan, missing-path, doc-drift

## Design notes
A four-tier authority hierarchy (official docs, blogs/changelogs, web standards, and browser compatibility) establishing a strict preference order for documentation sources while explicitly excluding non-authoritative sources like tutorials or AI training memory.
