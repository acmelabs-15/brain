---
package: matt
name: Issue
slug: issue
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Issue

## Definition — verbatim
> "A single tracked unit of work inside an **Issue tracker**: a bug, task, spec, or slice produced by `to-tickets`." — CONTEXT.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 11 | defined here | Defines Issue as a single tracked unit of work inside an Issue tracker. |

## Consumes
An initialized issue tracker backend (GitHub, GitLab, Linear, or `.scratch/`).

## Produces
Tracked records of work items including bugs, tasks, specifications, or vertical slices.

## When applied
Created during triage, planning, specification, and ticket-slicing phases.

## Sub-concepts
bug, task, spec, slice

## Part of
issue-tracker

## Implementation status
defects: missing-path, other (CONTEXT.md cites non-existent triage-labels.md path; risks runaway artifact bloat)

## Design notes
The core tracked artifact representing an individual unit of work in matt's ubiquitous language, encompassing bugs, tasks, specs, and slices, canonically preferred over the ambiguous generic term 'ticket'.
