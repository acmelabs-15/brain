---
package: rjm
name: Disorder
slug: disorder
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Disorder

## Definition — verbatim
> "### Confusion (Disorder)" — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:50

## Also called — verbatim
`Confusion` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:50

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 50 | defined here | Traditional Cynefin framework term for the central state where the applicable domain is not yet determined. |

## Consumes
Unclassified problems lacking clear domain signatures.

## Produces
Information gathering initiatives to break the state of disorder.

## When applied
Referenced as the alternate term for Confusion when domain classification is ambiguous or unknown.

## Sub-concepts
none

## Part of
cynefin-framework

## Implementation status
clean

## Design notes
`Disorder` is the original Cynefin framework term for the central domain (now termed Confusion), highlighting the danger that individuals default to their preferred comfort zone (e.g. experts treating everything as Complicated) when the true domain is undetermined.
