---
package: matt
name: paused
slug: paused
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

# paused

## Definition — verbatim
(used, not defined)

> "Matt has agreed the blocked case is real and is undecided on the name (<code class=\"ah-code-inline\">blocked</code> versus <code class=\"ah-code-inline\">paused</code>). None of it has shipped." — external/triage.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/triage.md | 56 | used here | Considered alongside blocked as a potential name for a state role representing work waiting on another issue. |

## Consumes
Specified work items temporarily prevented from proceeding by upstream dependencies.

## Produces
An issue state preventing autonomous agents from pulling dependent tasks into active execution queues.

## When applied
Proposed for issues awaiting completion of predecessor work.

## Sub-concepts
none

## Part of
state-role, triage

## Implementation status
not-implemented

## Design notes
A candidate label considered alongside `blocked` to denote fully specified issues that cannot be executed until an external blocker or prerequisite issue closes. Matt Pocock kept this state un-shipped to protect the simplicity of the single-state-role invariant, prompting teams to use repo-local extra labels instead.
