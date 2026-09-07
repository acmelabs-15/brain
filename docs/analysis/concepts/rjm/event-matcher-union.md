---
package: rjm
name: event_matcher_union
slug: event-matcher-union
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# event_matcher_union

## Definition — verbatim
(used, not defined)

> "`event_matcher_union` (`build/scripts/generate_dispatcher.py:556`) returns `None` when ANY registered matcher fails to reduce to a known tool name" — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:276-277

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 276 | used here | Cited as the generator function whose widening mechanism causes unreducible matchers to remove event filtering. |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 70 | used here | Cited as the mechanism returning None for PreToolUse when Serena worktree matcher could not reduce to a tool name. |

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
defects: missing-path, doc-drift

## Design notes
An internal Python code-generation function in build/scripts/generate_dispatcher.py computing union tool matchers, not an operational lifecycle concept.
