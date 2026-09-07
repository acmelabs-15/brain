---
package: rjm
name: Dated Snapshots
slug: dated-snapshots
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

# Dated Snapshots

## Definition — verbatim
(used, not defined)

> "- **Dated Snapshots** (e.g., `claude-opus-4-5-20251101`): Fixed versions for reproducible behavior" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 49 | defined here | Documented in research findings as a model identifier format providing fixed, reproducible versions for production APIs. |

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
`Dated Snapshots` is a classification category label for immutable model release identifiers in ADR-040 rather than an engineering lifecycle concept, classified as `name-only` per D-023.
