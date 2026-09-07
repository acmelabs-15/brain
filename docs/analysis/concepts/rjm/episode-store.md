---
package: rjm
name: episode-store
slug: episode-store
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/rules/session-logs.md, sha256: a4592aa8702246ac5770c118f5e5e3e4c31699ce9fede52273a865384d87208e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# episode-store

## Definition — verbatim
(used, not defined)

> "That shape trips the episode-store" — .claude/rules/session-logs.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/rules/session-logs.md | 51 | used here | Long-term memory repository guarded by CI ratchets ensuring committed episodes contain valid commit metrics. |

## Consumes
Extracted session episodes, valid event identifiers, committed file metrics.

## Produces
Persistent, curated episodic memory repository accessible to retrospective and agent memory retrieval tools.

## When applied
Maintained continuously and verified during pre-push `python-tests` CI jobs.

## Sub-concepts
none

## Part of
session-log-mechanics

## Implementation status
defects: doc-drift, missing-path

## Design notes
The episode-store is the persistent repository of committed development episodes that powers long-term agent memory and retrospective analysis. It is protected by CI ratchet tests that enforce data hygiene—blocking episodes where files changed without recorded commits—to prevent degraded historical records from polluting agent context.
