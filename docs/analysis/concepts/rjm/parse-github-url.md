---
package: rjm
name: parse_github_url
slug: parse-github-url
kind: name-only
package_phase: none
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

# parse_github_url

## Definition — verbatim
(used, not defined)

> "def parse_github_url(url: str) -> dict[str, Any] | None:" — .claude/skills/github-url-intercept/scripts/test_url_routing.py:237

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/scripts/test_url_routing.py | 237 | defined here | Primary entrypoint function parsing and validating GitHub and Gist URLs. |

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
clean

## Design notes
parse_github_url is a Python parser function identifier in test_url_routing.py that decomposes GitHub URLs into structured components with security validation rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
