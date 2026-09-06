---
package: addy
name: simplify-ignore hook
slug: simplify-ignore-hook
kind: gate
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/SIMPLIFY-IGNORE.md, sha256: a7121b0505c960a8a7a7f09600c9fa81464fc403ab297b95d23f5109b13ea52a}
  - {path: hooks/simplify-ignore-test.sh, sha256: 8f93c89e46c5a7478c01fa8531fa45e594fc5105411eaa7bd7c9f3ca8343926e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# simplify-ignore hook

## Definition — verbatim
> "Block-level protection for `/code-simplify`. Mark code that should never be simplified — the model won't see it." — hooks/SIMPLIFY-IGNORE.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/simplify-ignore-test.sh | 2 | used here | Test suite header identifying tests for the hook |
| hooks/SIMPLIFY-IGNORE.md | 1 | defined here | Specification document title and architectural definition |

## Consumes
Source files annotated with simplify-ignore markers and Claude Code tool execution events

## Produces
Placeholder-substituted source files on disk during tool read and restored files upon session stop

## When applied
During code simplification sessions to protect designated code blocks across Read, Edit, Write, and Stop events

## Sub-concepts
simplify-ignore-start, simplify-ignore-end, filter-file

## Part of
none

## Implementation status
clean

## Design notes
Defensive pre- and post-tool execution gate that conceals performance-sensitive or hand-optimized blocks from LLM code simplification tools, preventing unintended refactoring of critical code.
