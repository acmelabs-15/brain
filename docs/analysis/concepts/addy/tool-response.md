---
package: addy
name: tool_response
slug: tool-response
kind: name-only
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# tool_response

## Definition — verbatim
(used, not defined)
> "# WebFetch tool_response shape (Claude Code as of 2026-04): an object with" — hooks/sdd-cache-post.sh:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-post.sh | 37 | used here | JSON property in PostToolUse hook payload containing tool return values. |

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
tool_response is a JSON payload property identifier from Claude Code's hook specification rather than a lifecycle concept.
