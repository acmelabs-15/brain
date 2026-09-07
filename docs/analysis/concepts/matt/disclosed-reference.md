---
package: matt
name: Disclosed reference
slug: disclosed-reference
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Disclosed reference

## Definition — verbatim
> "3. **Disclosed reference** is pushed out into a separate file, reached by a context pointer, loaded only when the pointer fires. Spans a sibling file in the same folder through fully external reference that lives anywhere and any document can point at." — skills/productivity/writing-for-agents/SKILL.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL.md | 35 | defined here | Lowest rung of the information hierarchy where specialized reference material is pushed into separate files behind pointers. |

## Consumes
Branch-specific or secondary reference material too detailed to keep in the main document.

## Produces
Sibling reference files, format specifications, or external documents loaded on demand.

## When applied
When reference material is needed only by specific branches or when inlining it causes document sprawl.

## Sub-concepts
none

## Part of
information-hierarchy

## Implementation status
clean

## Design notes
The foundational pattern for progressive disclosure in agent documentation. By offloading specialized or voluminous reference material into separate files accessed via pointers, it keeps primary instructions lean and prevents token bloat.
