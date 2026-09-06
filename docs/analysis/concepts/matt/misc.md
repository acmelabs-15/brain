---
package: matt
name: misc/
slug: misc
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# misc/

## Definition — verbatim
(used, not defined)
> "- `misc/`: kept around but rarely used, not promoted" — CLAUDE.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CLAUDE.md | 5 | defined here | Defines misc/ as the repository bucket folder for rarely used, unpromoted skills. |

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
defects: doc-drift (CLAUDE.md em-dash prohibition drift across repo files)

## Design notes
This name denotes a filesystem bucket directory under skills/ reserved for holding rarely used skills that are retained in the repository but excluded from the promoted plugin manifest.
