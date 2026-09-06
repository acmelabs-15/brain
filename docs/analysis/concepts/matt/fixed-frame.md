---
package: matt
name: fixed frame
slug: fixed-frame
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# fixed frame

## Definition — verbatim
> "The **fixed frame** (`## What it does`, `## When to reach for it`, `## Where it fits`) appears on every page." — .agents/writing-docs.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 15 | defined here | Defines the mandatory fixed-frame structure that must appear in order on every documentation page. |

## Consumes
Skill specifications, triggering rules, and system placement context.

## Produces
Consistent three-section structural skeleton across all skill documentation pages.

## When applied
Required as the core structure for every documentation page in docs/engineering/ and docs/productivity/.

## Sub-concepts
What it does, When to reach for it, Where it fits

## Part of
writing-docs

## Implementation status
clean

## Design notes
The mandatory structural skeleton of all documentation pages in matt's package. By standardizing on 'What it does', 'When to reach for it', and 'Where it fits', it creates immediate predictability and lowers reader cognitive load across all tools.
