---
package: rjm
name: SAFE_GIST_ID_RE
slug: safe-gist-id-re
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/github-url-intercept/scripts/url_validation.py, sha256: 9e31cfa19cb2f0c7d3163758706a88e503a0c801a48725527bc8cd3d986be662}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SAFE_GIST_ID_RE

## Definition — verbatim
(used, not defined)

> "SAFE_GIST_ID_RE = re.compile(r\"(?:[0-9]+|[a-fA-F0-9]{20}|[a-fA-F0-9]{32})\")" — .claude/skills/github-url-intercept/scripts/url_validation.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/scripts/url_validation.py | 11 | defined here | Compiled regular expression validating GitHub Gist identifier formats. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
github-url-intercept

## Implementation status
clean

## Design notes
Constant regular expression identifier validating numeric and hexadecimal Gist identifiers; classified as name-only per D-023 because it is a security validation constant rather than an architectural lifecycle concept.
