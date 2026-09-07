---
package: rjm
name: customer-wedge property
slug: customer-wedge-property
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# customer-wedge property

## Definition — verbatim
> "customer-wedge property (issue #2205), and it is deliberately NOT evidence" — scripts/ci/test_installed_plugin_hooks.py:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/test_installed_plugin_hooks.py | 91 | used here | Referenced in docstring defining the test property that an unmatched payload executes cleanly and allows the tool invocation. |

## Consumes
Unmatched invocation payload, scratch consumer working directory, and installed plugin environment.

## Produces
Allow verdict demonstrating that the launcher starts, matches nothing, and exits cleanly without wedging user workflows.

## When applied
Tested during CI hook verification to assert that hooks fail open and unmatched commands proceed cleanly.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, other

## Design notes
The customer-wedge property is an architectural testing pattern originating in incident #2205 that requires hook dispatchers to execute cleanly and permit non-matching commands without crashing or wedging user workflows.
