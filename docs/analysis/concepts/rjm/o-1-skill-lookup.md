---
package: rjm
name: O(1) skill lookup
slug: o-1-skill-lookup
kind: technique
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

# O(1) skill lookup

## Definition — verbatim
> "This PRD defines a Skills Index Registry to enable O(1) skill lookup by ID, establish consistent naming conventions, and provide skill lifecycle governance." — .agents/archive/planning/PRD-skills-index-registry.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 20 | defined here | Architectural goal of resolving skills by ID in constant time using a central index table. |

## Consumes
Skill identifiers and the central registry table.

## Produces
Direct, single-read access to specific skill files without scanning unrelated memories.

## When applied
Applied during agent discovery when locating relevant skills by unique ID.

## Sub-concepts
none

## Part of
skills-index-registry

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
An architectural retrieval technique in rjm that replaces linear O(n) scanning across 65+ skill files with a single memory read of the index followed by an in-memory scan, reducing retrieval latency by approximately 68%.
