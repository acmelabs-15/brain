---
package: rjm
name: Vendor doc as runtime truth
slug: vendor-doc-as-runtime-truth
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

# Vendor doc as runtime truth

## Definition — verbatim
> "Wrong-by-omission docs burned this repo twice (#2205, #2290)" — .claude/skills/ai-agents-external-claims/SKILL.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 99 | defined here | Anti-pattern of relying on vendor documentation rather than empirical runtime probes for platform behavior. |

## Consumes
Third-party vendor documentation or published SDK reference manuals.

## Produces
Fragile runtime integration assumptions that fail in actual execution environments.

## When applied
Flagged when designing platform shims, hook integrations, or environment variable bindings.

## Sub-concepts
none

## Part of
ai-agents-external-claims

## Implementation status
defects: missing-path

## Design notes
`Vendor doc as runtime truth` represents the flawed assumption that official documentation accurately describes runtime reality. Having experienced major failures where docs omitted critical environment variables (#2205) or payload casing rules (#2290), rjm requires empirical probing at pinned versions.
