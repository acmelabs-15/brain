---
package: addy
name: pre hook
slug: pre-hook
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# pre hook

## Definition — verbatim
(used, not defined)
> "pre hook can revalidate on the next fetch." — hooks/sdd-cache-post.sh:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-post.sh | 6 | used here | References the pre-execution hook script responsible for cache revalidation. |

## Consumes
Pending tool call arguments and target operation context.

## Produces
Decision to allow execution or intercept with an existing validated response.

## When applied
Invoked prior to host execution of a targeted agent tool.

## Sub-concepts
none

## Part of
hooks

## Implementation status
clean

## Design notes
Pre-execution interception pattern where an automated hook evaluates preconditions or delivers cached responses before a host tool is executed.
