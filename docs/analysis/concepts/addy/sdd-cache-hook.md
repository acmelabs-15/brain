---
package: addy
name: sdd-cache hook
slug: sdd-cache-hook
kind: artifact
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# sdd-cache hook

## Definition — verbatim
> "sdd-cache hook" — hooks/SDD-CACHE.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/SDD-CACHE.md | 1 | defined here | Document title introducing the cross-session citation cache hook subsystem. |

## Consumes
WebFetch tool calls, origin HTTP headers, and local disk storage at .claude/sdd-cache/.

## Produces
Locally cached documentation payloads and reduced network bandwidth during source-driven development.

## When applied
Active during Claude Code sessions performing source-driven development.

## Sub-concepts
PreToolUse, PostToolUse, ETag, Last-Modified, 304 Not Modified, cache HIT

## Part of
source-driven-development

## Implementation status
clean

## Design notes
Cross-session HTTP caching hook subsystem for Claude Code that intercepts WebFetch tool invocations during source-driven development, skipping redundant downloads while ensuring document freshness through origin server revalidation.
