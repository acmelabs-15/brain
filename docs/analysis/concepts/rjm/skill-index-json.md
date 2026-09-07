---
package: rjm
name: skill_index.json
slug: skill-index-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skill_index.json

## Definition — verbatim
(used, not defined)

> "skill_index.json" — .claude/skills/skillforge/scripts/triage_skill_request.py:213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/triage_skill_request.py | 213 | used here | Cached JSON file path holding indexed skill data in user cache directory. |

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
defects: doc-drift, missing-path, script-bug

## Design notes
Cached JSON file path and index name storing serialized skill catalog data rather than an operational lifecycle concept.
