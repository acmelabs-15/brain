---
package: rjm
name: consolidate_skills.py
slug: consolidate-skills-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# consolidate_skills.py

## Definition — verbatim
(used, not defined)

> "| `scripts/consolidate_skills.py` | Finds recurring session-log patterns and emits skill candidates. | `uv run python scripts/consolidate_skills.py --help` |" — scripts/README.md:222

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/README.md | 222 | used here | Table row documenting skill consolidation script for mining session-log patterns. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, internal-contradiction

## Design notes
consolidate_skills.py is a Python script filename rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
