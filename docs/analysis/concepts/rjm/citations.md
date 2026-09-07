---
package: rjm
name: Citations
slug: citations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/phase3-4-propose-persist.md, sha256: c797e32ff834c793ed982059ea1368cf993481ebc2d25bf44165df0fed6a4ccc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Citations

## Definition — verbatim
(used, not defined)

> "## Citations" — .claude/skills/reflect/references/phase3-4-propose-persist.md:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/phase3-4-propose-persist.md | 137 | defined here | Section heading in memory markdown body containing structured citation links to code and artifacts. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
auto-citation-capture

## Implementation status
defects: missing-path

## Design notes
A standard markdown section heading (`## Citations`) embedded in memory files to group structured citation links rather than an independent lifecycle concept.
