---
package: matt
name: mkdir -p
slug: mkdir-p
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mkdir -p

## Definition — verbatim
(used, not defined)

> "2. **Create directories** - `mkdir -p` for each path" — skills/misc/scaffold-exercises/SKILL.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/scaffold-exercises/SKILL.md | 47 | used here | Recommended Unix command for creating nested directory hierarchies during exercise scaffolding. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
scaffold-exercises

## Implementation status
clean

## Design notes
A Unix shell command invocation for creating directory paths recursively; recorded as a name-only card representing a standard shell utility rather than an engineering lifecycle concept.
