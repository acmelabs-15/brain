---
package: addy
name: no-jq fallback
slug: no-jq-fallback
kind: technique
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# no-jq fallback

## Definition — verbatim
> "Reproducing the no-jq fallback" — CONTRIBUTING.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 92 | references | Explains how the session-start hook degrades gracefully when the jq utility is absent from PATH. |

## Consumes
Host environment lacking the `jq` JSON processor binary on PATH.

## Produces
Advisory session-start JSON notification instructing the user how to install `jq` while leaving skills accessible.

## When applied
Triggered within `hooks/session-start.sh` whenever `command -v jq` fails.

## Sub-concepts
none

## Part of
session-start-hook

## Implementation status
clean

## Design notes
The no-jq fallback provides defensive error handling for the session initialization hook. Rather than crashing or failing silently when `jq` is absent, the hook outputs an informational diagnostic message explaining how to install the dependency while ensuring individual skills remain manually accessible.
