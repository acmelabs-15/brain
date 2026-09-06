---
package: matt
name: task graph
slug: task-graph
kind: pattern
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# task graph

## Definition — verbatim
> "The tickets are not a list of steps. They are a **task graph** with blocking relationships between them. This means there is always a **frontier** of tickets which are ready to be grabbed." — skills/in-progress/implement-spec/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Describes tickets being read as a task graph with blocking edges. |
| skills/in-progress/implement-spec/SKILL.md | 11 | defined here | Defines tickets as a task graph with blocking relationships and an unblocked frontier. |
| skills/in-progress/README.md | 17 | used here | Notes that implement-spec works tickets as a task graph rather than a sequential list. |

## Consumes
Decomposed tickets, their acceptance criteria, and explicit blocking relationships.

## Produces
A directed dependency structure continuously exposing an active frontier of unblocked tickets.

## When applied
Applied in multi-ticket orchestration workflows (`implement-spec`) to identify tasks that can execute concurrently.

## Sub-concepts
blocking-edges, ready-frontier

## Part of
implement-spec

## Implementation status
clean

## Design notes
A structural coordination model that organizes execution tasks as a directed acyclic graph rather than a linear sequence. By explicitly tracking dependencies via blocking relationships, the task graph allows orchestrating agents to continuously identify and dispatch all ready, unblocked tickets to parallel subagents.
