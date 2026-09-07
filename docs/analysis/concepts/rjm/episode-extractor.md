---
package: rjm
name: episode extractor
slug: episode-extractor
kind: technique
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

# episode extractor

## Definition — verbatim
(used, not defined)

> "the episode extractor derives `metrics.commits`" — .claude/rules/session-logs.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/rules/session-logs.md | 46 | used here | Processing tool that parses session logs and derives commit metrics from `endingCommit`, `changesCommitted`, and workLog prose. |

## Consumes
Legacy session logs (`.agents/sessions/*.json`), commit SHAs, work log narratives.

## Produces
Structured session episode records containing validated metrics and event sequences for long-term memory.

## When applied
Executed when extracting development session records via `extract_session_episode.py <log> --preserve`.

## Sub-concepts
none

## Part of
session-log-mechanics

## Implementation status
defects: doc-drift, missing-path

## Design notes
The episode extractor transforms raw session logs into structured episodic memory for retrospectives and autonomous agents. By extracting commit metrics and event chronologies from `endingCommit` and workLog prose, it provides compact, high-signal historical context for continuous learning.
