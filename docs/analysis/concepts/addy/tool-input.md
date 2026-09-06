---
package: addy
name: tool_input
slug: tool-input
kind: name-only
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# tool_input

## Definition — verbatim
(used, not defined)
> "URL=$(printf '%s'    "$INPUT" | jq -r '.tool_input.url    // empty' 2>/dev/null || true)" — hooks/sdd-cache-post.sh:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-post.sh | 32 | used here | JSON property of hook input holding tool parameters. |
| hooks/sdd-cache-pre.sh | 37 | used here | JSON property of hook input parsed to retrieve target URL. |

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
tool_input is a JSON payload property identifier from Claude Code's hook specification rather than a lifecycle concept.
