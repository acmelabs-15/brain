---
package: rjm
name: hooks.json
slug: hooks-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# hooks.json

## Definition — verbatim
(used, not defined)

> "- `hooks/` - Event handlers in hooks.json" — .agents/analysis/claude-code-plugin-marketplaces.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-code-plugin-marketplaces.md | 31 | defined here | Identified as the configuration file declaring lifecycle event handlers for a plugin. |
| .agents/projects/v0.4.0/PLAN.md | 454 | defined here | Highlighted as the target configuration format requiring translation from `.claude/settings.json`. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 54 | used here | Documented as an allowed hook configuration location with specific version wrapping requirements. |
| scripts/ci/test_installed_plugin_hooks.py | 158 | used here | Read by test runner to discover registered hook events dynamically rather than hardcoding. |

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
defects: missing-path, script-bug

## Design notes
Configuration filename convention specifying lifecycle hook registrations and event handlers, not an independent lifecycle concept.
