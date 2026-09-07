---
package: matt
name: needs-slicing
slug: needs-slicing
kind: role
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# needs-slicing

## Definition — verbatim
(used, not defined)

> "One community derivative goes further, adding <code class=\"ah-code-inline\">needs-slicing</code>, <code class=\"ah-code-inline\">tracking</code> and effort labels. That works, but it is theirs, not the skill&#x27;s." — external/triage.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 56 | used here | Mentions a community derivative label used for work items that require decomposition into smaller tickets before agent execution. |

## Consumes
Large issues, complex feature requests, or expansive bugs that exceed single-session agent execution scope.

## Produces
An indicator that an issue must be vertically sliced into smaller, independent tickets before receiving an agent brief.

## When applied
Applied in community workflows when an incoming issue is too large for an agent to execute in one pass.

## Sub-concepts
none

## Part of
triage

## Implementation status
out-of-scope

## Design notes
A community-originated label used alongside triage categories to mark issues that are valid but too broad for an autonomous agent to execute safely in a single session. While excluded from the upstream five-state model, it reflects user need for an intermediate decomposition step prior to `ready-for-agent`.
