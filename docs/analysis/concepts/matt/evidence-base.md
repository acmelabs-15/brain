---
package: matt
name: evidence base
slug: evidence-base
kind: pattern
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

# evidence base

## Definition — verbatim
(used, not defined)

> "Run it across twenty issues at once and an agent can quietly fall back to that cheap listing as its evidence base, which returns issue bodies but not comments." — external/triage.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 60 | used here | Warns against agents using shallow backlog listings as their evidence base during bulk triage instead of reading full issue comments. |

## Consumes
Complete issue context including issue descriptions, comment threads, codebase search, and test reproduction results.

## Produces
A reliable factual foundation preventing erroneous re-briefing of already-resolved or clarified issues.

## When applied
When an agent gathers information to evaluate an issue during `/triage`.

## Sub-concepts
none

## Part of
triage

## Implementation status
clean

## Design notes
The evidence base represents the full contextual body of facts—specifically including comment history and code reproduction checks—required for an agent to make sound triage judgments. Relying on an impoverished evidence base (such as shallow issue summary listings without comments) leads to silent failure modes where agents generate redundant briefs for issues already resolved in comments.
