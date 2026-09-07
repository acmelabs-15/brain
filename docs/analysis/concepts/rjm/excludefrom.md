---
package: rjm
name: excludeFrom
slug: excludefrom
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/steering-matcher/get_applicable_steering.py, sha256: 15f73361277478c085d40035d5f99242107d46f25f493fce2a26c5870a6835b8}
  - {path: .claude/skills/steering-matcher/scripts/get_applicable_steering.py, sha256: 8c5e992f69084b1f8530605061fcee606e41fd8d9bc17905d1930950764f6a53}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# excludeFrom

## Definition — verbatim
(used, not defined)

> "exclude_match = re.search(r'excludeFrom:\s*\"([^\"]+)\"', front_matter)" — .claude/skills/steering-matcher/get_applicable_steering.py:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/steering-matcher/get_applicable_steering.py | 99 | used here | Regex pattern parsing the excludeFrom attribute from steering file frontmatter. |
| .claude/skills/steering-matcher/scripts/get_applicable_steering.py | 111 | used here | Parses optional excludeFrom frontmatter key to filter out matching files from steering rules. |

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
defects: orphan, other, script-bug, exit-code-mismatch

## Design notes
`excludeFrom` is an optional frontmatter configuration attribute in steering files defining negative glob patterns for file exclusion rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
