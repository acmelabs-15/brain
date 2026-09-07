---
package: rjm
name: Semantic Slug Protocol
slug: semantic-slug-protocol
kind: pattern
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

# Semantic Slug Protocol

## Definition — verbatim
(used, not defined)

> "Semantic Slug Protocol" — .agents/archive/planning/PRD-skills-index-registry.md:380

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 380 | used here | Rejected alternative proposal evaluated and voted down during the 10-agent review. |

## Consumes
Skill file naming proposals and domain consolidation architectures.

## Produces
A proposed (and rejected) naming and library consolidation scheme using semantic filenames rather than numeric IDs.

## When applied
Evaluated during architectural debate regarding skill naming and discovery mechanisms.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A rejected alternative architecture in rjm that proposed renaming skill files to semantic slugs and consolidating 65 atomic files into 15 domain libraries. It was unanimously rejected by a 10-agent consensus review because Serena MCP abstracts filenames, consolidation introduces O(n) scan regressions, and changing filenames would break 67 existing cross-references.
