---
package: rjm
name: MULTI_DOMAIN
slug: multi-domain
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/diagrams/routing-flowchart.md, sha256: feaf09515dfbc306f8b928d4fc541635582a4960670527552415f2118db5bc85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MULTI_DOMAIN

## Definition — verbatim
(used, not defined)

> "DOMAINS_CHECK -->|YES| MULTI_DOMAIN[MULTI_DOMAIN]" — docs/diagrams/routing-flowchart.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/diagrams/routing-flowchart.md | 87 | used here | Complexity assessment classification triggered when affected domains exceed two. |

## Consumes
Domain impact assessment measuring affected functional areas across the codebase.

## Produces
High-complexity classification triggering multi-agent pipeline routing.

## When applied
Applied during orchestrator complexity assessment when a task affects more than two domains.

## Sub-concepts
none

## Part of
orchestrator-routing-algorithm

## Implementation status
defects: missing-path

## Design notes
MULTI_DOMAIN is a complexity assessment outcome in rjm's orchestrator routing flowchart triggered when a proposed task spans more than two functional domains. This classification ensures broad-impact tasks receive full multi-agent sequencing with comprehensive governance rather than simple single-agent handling.
