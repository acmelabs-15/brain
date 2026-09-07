---
package: rjm
name: Non-Compilable Code
slug: non-compilable-code
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Non-Compilable Code

## Definition — verbatim
(used, not defined)

> "| 2: Non-Compilable Code | Code examples reference nonexistent symbols | Phase 3 |" — .claude/skills/doc-accuracy/SKILL.md:193

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 193 | defined here | Defines Class 2 issue taxonomy category where documentation code examples fail compilation or reference nonexistent symbols, detected in Phase 3. |

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
defects: doc-drift

## Design notes
`Non-Compilable Code` is an issue taxonomy classification label in `doc-accuracy` denoting syntactic or unresolved symbol errors in documentation code snippets rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
