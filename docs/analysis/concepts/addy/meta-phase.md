---
package: addy
name: Meta phase
slug: meta-phase
kind: phase
package_phase: addy:Meta
implementation_in_scope: true
memo_inputs:
  - {path: external/using-agent-skills.md, sha256: f900bb1f69f838528d2fc85316cb851ca19488a22005f1249ec5d5fc059d32c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Meta phase

## Definition — verbatim
(used, not defined)
> "Meta phase" — external/using-agent-skills.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/using-agent-skills.md | 5 | used here | Phase categorization badge for the using-agent-skills meta-skill. |

## Consumes
Incoming user request, ambiguous task goals, or unconfigured interaction session.

## Produces
Selection of relevant engineering skills and routing into appropriate lifecycle phases.

## When applied
Applied at the beginning of an agent session or whenever evaluating which skill workflow applies to a given task.

## Sub-concepts
using-agent-skills

## Part of
none

## Implementation status
defects: doc-drift, orphan

## Design notes
The foundational phase in Addy's taxonomy that operates above specific product delivery workflows, providing cross-cutting discovery, lifecycle routing, and agent behavior governance before entering domain-specific phases.
