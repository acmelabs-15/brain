---
package: rjm
name: Aliases
slug: aliases
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Aliases

## Definition — verbatim
(used, not defined)

> "- **Aliases** (e.g., `claude-opus-4-5`): Auto-update to latest snapshot within ~1 week of release" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 48 | defined here | Documented in research findings as a model identifier format that automatically tracks latest snapshots. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`Aliases` is a descriptive classification heading in ADR-040 categorizing model identifier formats rather than an independent software lifecycle concept, classified as `name-only` per D-023.
