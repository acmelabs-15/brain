---
package: addy
name: cross-session memory
slug: cross-session-memory
kind: technique
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# cross-session memory

## Definition — verbatim
(used, not defined)
> "None of these has solved **durable cross-session memory** well yet: what an agent learned in one session rarely carries cleanly into the next." — docs/comparison.md:111

## Also called — verbatim
- `durable cross-session memory` — docs/comparison.md:111

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/comparison.md | 111 | used here | Discussed as an unsolved frontier across coding agent frameworks. |

## Consumes
Session learnings, architectural decisions, and task state accumulated during agent interactions.

## Produces
Persistent state artifacts (such as learnings files, handoffs, or issue tracker mappings) carrying knowledge into subsequent sessions.

## When applied
At the conclusion of an agent session or when restoring context in a newly started session.

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented

## Design notes
Cross-session memory represents the architectural ability to preserve and restore learned codebase knowledge, task status, and technical constraints across independent agent invocations without relying on fragile conversational history or manual prompt re-feeding.
