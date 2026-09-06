---
package: matt
name: Research tickets
slug: research-tickets
kind: artifact
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Research tickets

## Definition — verbatim
> "Research tickets are no longer parked for a separately-launched session. Research stays a real ticket type — it's a genuine shared blocker that downstream decisions hang on, and that dependency is exactly what the frontier's blocking edges exist to render." — CHANGELOG.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 86 | defined here | Defines parallel execution of research tickets on dedicated branches as an exception to single-ticket sessions |
| external/research.md | 50 | defined here | Explains automated dispatch of research tickets by wayfinder spawning background subagents |

## Consumes
A question or unknown fact outside the local working directory blocking a decision

## Produces
A markdown research report documenting findings from primary sources on a dedicated branch

## When applied
When a wayfinder charting session identifies an external fact or documentation lookup blocking a decision

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
defects: other (external/research.md:51 notes subagents opening draft PRs on throwaway branches and branch deletion breaking context pointers)

## Design notes
Research tickets represent AFK investigative tasks in wayfinder maps that gather facts from primary external sources (documentation, APIs, specifications) concurrently in background subagents, allowing human-in-the-loop sessions to continue without blocking on manual research legwork.
