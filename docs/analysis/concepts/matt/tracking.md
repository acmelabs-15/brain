---
package: matt
name: tracking
slug: tracking
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

# tracking

## Definition — verbatim
(used, not defined)

> "One community derivative goes further, adding <code class=\"ah-code-inline\">needs-slicing</code>, <code class=\"ah-code-inline\">tracking</code> and effort labels. That works, but it is theirs, not the skill&#x27;s." — external/triage.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 56 | used here | Mentions a community derivative label used for parent or umbrella issues that coordinate multiple sub-tasks. |

## Consumes
A collection of related child issues or implementation sub-tasks.

## Produces
An umbrella issue status designating non-executable coordination tasks in the tracker.

## When applied
Applied in community workflows to parent or epic issues.

## Sub-concepts
none

## Part of
triage

## Implementation status
out-of-scope

## Design notes
A community-added label for umbrella or coordination issues that track overall progress across multiple sub-tasks rather than representing a discrete, code-actionable issue for an agent runner.
