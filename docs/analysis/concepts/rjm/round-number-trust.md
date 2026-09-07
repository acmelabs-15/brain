---
package: rjm
name: Round-number trust
slug: round-number-trust
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Round-number trust

## Definition — verbatim
> "Rhetorical rounding inflates above the real precise count" — .claude/skills/ai-agents-external-claims/SKILL.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 97 | defined here | Anti-pattern where rhetorical round numbers (e.g. "over 1000") are trusted without registry lookup. |

## Consumes
External marketing claims, vendor pitches, or secondary documentation citing round numbers.

## Produces
Inflated and unverified quantitative metrics entered into repository documents.

## When applied
Checked in the anti-patterns table of external claims validation.

## Sub-concepts
none

## Part of
ai-agents-external-claims

## Implementation status
defects: missing-path

## Design notes
`Round-number trust` describes the credulous acceptance of rounded quantitative assertions (such as "over 1000") that often conceal marketing exaggeration or outdated metrics. The rjm framework guards against this by requiring direct lookups in registries, package indices, or authoritative endpoints.
