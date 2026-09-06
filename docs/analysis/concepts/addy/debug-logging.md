---
package: addy
name: Debug logging
slug: debug-logging
kind: technique
package_phase: cross-phase
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

# Debug logging

## Definition — verbatim
> "Debug logging: active when SDD_CACHE_DEBUG=1 is set, or when a sentinel" — hooks/sdd-cache-post.sh:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-post.sh | 22 | defined here | Defines file and environment-flag-based debug logging mechanism for post-hook execution. |
| hooks/sdd-cache-pre.sh | 27 | defined here | Defines file and environment-flag-based debug logging mechanism for pre-hook execution. |

## Consumes
Environment variable SDD_CACHE_DEBUG=1 or presence of sentinel file .claude/sdd-cache/.debug.

## Produces
Timestamped diagnostic log entries appended to .claude/sdd-cache/.debug.log.

## When applied
Activated during troubleshooting, local testing, or audit of hook execution and payload handling.

## Sub-concepts
none

## Part of
hooks

## Implementation status
clean

## Design notes
Diagnostic tracing technique that logs execution events, parsed parameters, and branch decisions to a local sentinel-triggered log file without contaminating model stdout or stderr channels.
