---
package: rjm
name: Configuration soup
slug: configuration-soup
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Configuration soup

## Definition — verbatim
> "**Configuration soup**: a module that exposes a dozen flags so callers can tailor behavior. Each flag is a leaked decision; eliminate the ones with an obvious right answer, and group the rest behind a named mode." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 175 | defined here | Defined in anti-patterns as a module exposing excessive flags to customize behavior instead of encapsulating decisions internally. |

## Consumes
none

## Produces
none

## When applied
Identified during tool parameter design and interface review to prune unnecessary boolean switches or flags.

## Sub-concepts
none

## Part of
shallow-module

## Implementation status
clean

## Design notes
An interface anti-pattern in rjm where an author pushes configuration decisions onto callers via an overabundance of flags. Each knob represents an unmade design choice that increases caller cognitive load and should instead be absorbed or consolidated into named operational modes.
