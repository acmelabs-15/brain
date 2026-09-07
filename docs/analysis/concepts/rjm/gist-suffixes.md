---
package: rjm
name: GIST_SUFFIXES
slug: gist-suffixes
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

# GIST_SUFFIXES

## Definition — verbatim
(used, not defined)

> "GIST_SUFFIXES = {\"revisions\"}" — .claude/skills/github-url-intercept/scripts/gist_routing.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/github-url-intercept/scripts/gist_routing.py | 19 | defined here | Constant set specifying permissible subroute path suffixes for gist URLs. |

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
GIST_SUFFIXES is a Python module constant set in gist_routing.py defining recognized path suffixes rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
