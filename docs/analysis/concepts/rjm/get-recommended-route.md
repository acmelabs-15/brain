---
package: rjm
name: get_recommended_route
slug: get-recommended-route
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/github-url-intercept/scripts/test_url_routing.py, sha256: 0d7c3d86de7c4172a02a6600c687f75049fd2854cf1b0c9bf33494930bcc84d6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# get_recommended_route

## Definition — verbatim
(used, not defined)

> "def get_recommended_route(parsed: dict[str, Any]) -> dict[str, Any]:" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:290

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/scripts/test_url_routing.py | 290 | defined here | Function determining the optimal routing command and execution strategy for parsed GitHub URLs. |

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
Python function identifier in test_url_routing.py responsible for evaluating parsed GitHub URL metadata and returning the recommended script or gh CLI command; classified as name-only per D-023 because it is a script implementation function rather than an architectural lifecycle concept.
