---
package: rjm
name: GIST_HOSTS
slug: gist-hosts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/github-url-intercept/scripts/gist_routing.py, sha256: 85cdc928e039b3a64f71cd665a8839da1aaaa7995c734aa093b36cbf36f6d07f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# GIST_HOSTS

## Definition — verbatim
(used, not defined)

> "GIST_HOSTS = {\"gist.github.com\", \"gist.githubusercontent.com\"}" — .claude/skills/github-url-intercept/scripts/gist_routing.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/scripts/gist_routing.py | 20 | defined here | Constant set enumerating valid Gist domain hostnames. |

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
GIST_HOSTS is a Python module constant set in gist_routing.py defining valid domain names for gist interception rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
