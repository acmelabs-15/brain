---
package: matt
name: draft PR
slug: draft-pr
kind: artifact
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# draft PR

## Definition — verbatim
> "3. Create a branch, and a draft PR. The PR should be marked as 'closing' the spec issue and tickets." — skills/in-progress/implement-spec/SKILL.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/implement-spec/SKILL.md | 23 | defined here | Preliminary pull request created early to aggregate ticket implementations on a single branch. |

## Consumes
Specification issue and ticket list identifying the target scope.

## Produces
A draft pull request on GitHub linked to closing the spec issue and tickets.

## When applied
Created during step 3 of implement-spec immediately after initial spec analysis and exploration.

## Sub-concepts
none

## Part of
implement-spec

## Implementation status
clean

## Design notes
An integration pull request opened early in draft status on the target branch. It establishes the central integration target for merger subagents and signals that work is in progress across the full task graph before tickets are completed and reviewed.
