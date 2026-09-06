---
package: addy
name: additionalContext
slug: additionalcontext
kind: name-only
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/session-start.sh, sha256: 2ea42e7077f606f793f5e7704f593d26ea9bcf231c6f32a7ed17df5c727a63ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# additionalContext

## Definition — verbatim
(used, not defined)
> "additionalContext" — hooks/session-start.sh:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/session-start.sh | 6 | used here | JSON payload property for injecting prompt context into the host agent's session startup |

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
defects: script-bug, doc-drift (nested inside hookSpecificOutput envelope, breaking legacy test assertions)

## Design notes
Host platform hook schema field used to inject context strings into an agent session, rather than an agent lifecycle concept.
