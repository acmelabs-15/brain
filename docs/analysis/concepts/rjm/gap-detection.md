---
package: rjm
name: gap_detection
slug: gap-detection
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# gap_detection

## Definition — verbatim
(used, not defined)

> "<gap_detection>" — .claude/skills/analyze/scripts/analyze.py:284

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/scripts/analyze.py | 284 | defined here | XML prompt tag prompting the agent to identify unfulfilled investigation commitments and gaps. |

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
defects: exit-code-mismatch

## Design notes
gap_detection is an XML prompt section tag in analyze.py guiding identification of missed analysis targets rather than an operational lifecycle concept.
