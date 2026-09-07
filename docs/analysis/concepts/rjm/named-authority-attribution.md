---
package: rjm
name: Named-authority attribution
slug: named-authority-attribution
kind: pattern
package_phase: none
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

# Named-authority attribution

## Definition — verbatim
> "- **Named-authority attribution**: "Gartner says", "an MIT study found", "Anthropic disclosed", "per the docs". The named authority is a claim about a source, not the source." — .claude/skills/ai-agents-external-claims/SKILL.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-external-claims/SKILL.md | 39 | defines | Defines the trigger condition for statements invoking institutional authority second-hand. |

## Consumes
Second-hand assertions citing prestigious institutions, vendors, or official docs.

## Produces
Direct lookup requirement for the named authority's actual primary publication.

## When applied
Activated whenever an external claim invokes an authority or organization second-hand.

## Sub-concepts
primary-source

## Part of
external-claims

## Implementation status
defects: missing-path

## Design notes
A trigger condition highlighting claims that invoke prestigious institutions or vendor documentation second-hand. The attribution itself is merely an unverified assertion about a source, requiring authors to locate the named authority's primary publication rather than relying on hearsay.
