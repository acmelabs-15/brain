---
package: addy
name: PostToolUse
slug: posttooluse
kind: gate
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
  - {path: hooks/SIMPLIFY-IGNORE.md, sha256: a7121b0505c960a8a7a7f09600c9fa81464fc403ab297b95d23f5109b13ea52a}
  - {path: hooks/sdd-cache-post.sh, sha256: cf60a60fd475cceaf8cefdf0462393b1be0d7a4a5a4ea54508172f36ec0883e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# PostToolUse

## Definition — verbatim
(used, not defined)
> "sdd-cache-post.sh — PostToolUse hook for WebFetch." — hooks/sdd-cache-post.sh:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/sdd-cache-post.sh | 2 | used here | Header comment documenting script execution as a PostToolUse hook for WebFetch. |
| hooks/SDD-CACHE.md | 30 | used here | Settings configuration snippet registering sdd-cache-post.sh for PostToolUse WebFetch. |
| hooks/SIMPLIFY-IGNORE.md | 30 | used here | Settings configuration snippet registering simplify-ignore.sh for PostToolUse Edit and Write. |

## Consumes
Completed tool execution output and invocation parameters passed via JSON stdin.

## Produces
Side-effect operations including cache persistence, response logging, or disk state updates.

## When applied
Triggered immediately following the completion of an agent tool invocation.

## Sub-concepts
none

## Part of
hooks

## Implementation status
clean

## Design notes
Claude Code lifecycle event triggered immediately after a tool call completes execution, enabling post-processing, response harvesting for caching, or file state reconciliation without interrupting the main conversation.
