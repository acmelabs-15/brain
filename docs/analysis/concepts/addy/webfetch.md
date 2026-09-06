---
package: addy
name: WebFetch
slug: webfetch
kind: name-only
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# WebFetch

## Definition — verbatim
(used, not defined)
> "sdd-cache-post.sh — PostToolUse hook for WebFetch." — hooks/sdd-cache-post.sh:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-post.sh | 2 | used here | Named as the target tool for post-execution caching hook. |
| hooks/sdd-cache-pre.sh | 2 | used here | Named as the target tool for pre-execution cache interception hook. |
| hooks/SDD-CACHE.md | 3 | used here | Built-in Claude Code tool whose network calls are cached during source-driven development. |

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
WebFetch is Claude Code's built-in web retrieval tool identifier rather than an authored lifecycle methodology concept.
