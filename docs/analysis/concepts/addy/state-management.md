---
package: addy
name: state management
slug: state-management
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# state management

## Definition — verbatim
> "## State Management" — skills/frontend-ui-engineering/SKILL.md:101
> "**Choose the simplest approach that works:**" — skills/frontend-ui-engineering/SKILL.md:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/frontend-ui-engineering.md | 5 | used here | Cited on the catalog page as a foundational pillar of frontend engineering. |
| skills/frontend-ui-engineering/SKILL.md | 101 | defined here | Major section detailing local, lifted, url, global, and server state tiers. |

## Consumes
UI data requirements, user interactions, network responses, and URL routing.

## Produces
Structured state stores mapped to the simplest tier (local, URL, global, server).

## When applied
> "**Choose the simplest approach that works:**" — skills/frontend-ui-engineering/SKILL.md:103

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
A tiered technique directing developers and agents to select the simplest state model that fits the problem—prioritizing local component state and URL params before introducing lifted, global, or server cache stores.
