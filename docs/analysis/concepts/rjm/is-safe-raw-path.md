---
package: rjm
name: is_safe_raw_path
slug: is-safe-raw-path
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

# is_safe_raw_path

## Definition — verbatim
(used, not defined)

> "def is_safe_raw_path(segments: list[str]) -> bool:" — .claude/skills/github-url-intercept/scripts/url_validation.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/scripts/url_validation.py | 47 | defined here | Function rejecting path segments that gh CLI or a remote server could reinterpret unsafely. |

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
Helper function identifier validating raw URL path segments against control characters, traversal markers, and shell metacharacters; classified as name-only per D-023 because it is a code-level validation function rather than an architectural lifecycle concept.
