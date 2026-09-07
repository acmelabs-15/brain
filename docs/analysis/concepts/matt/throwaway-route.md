---
package: matt
name: throwaway route
slug: throwaway-route
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/prototype/UI.md, sha256: 723211e878acbc7b6ff09755263f3295cde724ba902ff0064da41eed51d45ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# throwaway route

## Definition — verbatim
> "Create a **throwaway route** following whatever routing convention the project already uses. Don't invent a new top-level structure. Name it so it's obviously a prototype (e.g. include the word `prototype` in the path or filename). Same `?variant=` pattern." — skills/engineering/prototype/UI.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/prototype/UI.md | 28 | defined here | Defined as an explicitly named temporary route used in sub-shape B prototyping to isolate uncommitted layouts. |

## Consumes
Existing project routing conventions and framework router configurations.

## Produces
A temporary application route (e.g., under /prototype/<name>) that mounts the variant switcher.

## When applied
Used under sub-shape B when prototyping a feature that requires an isolated top-level URL.

## Sub-concepts
none

## Part of
sub-shape-b

## Implementation status
clean

## Design notes
A temporary, clearly labeled route created to host prototype variants when no existing page can house them, adhering to project routing conventions and intended for deletion or promotion once design decisions are settled.
