---
package: addy
name: PreToolUse
slug: pretooluse
kind: gate
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
  - {path: hooks/SIMPLIFY-IGNORE.md, sha256: a7121b0505c960a8a7a7f09600c9fa81464fc403ab297b95d23f5109b13ea52a}
  - {path: hooks/sdd-cache-pre.sh, sha256: 853ad36f5e17e977060b92313e34b848ec1d321f2ac4aa657e9f3b9281cc0473}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# PreToolUse

## Definition — verbatim
(used, not defined)
> "sdd-cache-pre.sh — PreToolUse hook for WebFetch." — hooks/sdd-cache-pre.sh:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-pre.sh | 2 | used here | Header comment documenting script execution as a PreToolUse hook for WebFetch. |
| hooks/SDD-CACHE.md | 18 | used here | Hook configuration snippet registering sdd-cache-pre.sh for PreToolUse WebFetch. |
| hooks/SIMPLIFY-IGNORE.md | 24 | used here | Hook configuration snippet registering simplify-ignore.sh for PreToolUse Read. |

## Consumes
Pending tool call name and input arguments passed via JSON stdin.

## Produces
Decision to allow tool execution (exit 0) or intercept/block execution with cached/alternate content (exit 2).

## When applied
Triggered immediately before Claude Code executes a requested tool.

## Sub-concepts
none

## Part of
hooks

## Implementation status
clean

## Design notes
Lifecycle event triggered by Claude Code prior to tool execution, providing a gate to inspect parameters, validate preconditions, or short-circuit execution with cached or alternate responses.
