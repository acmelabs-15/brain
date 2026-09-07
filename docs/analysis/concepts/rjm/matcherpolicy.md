---
package: rjm
name: matcherPolicy
slug: matcherpolicy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# matcherPolicy

## Definition — verbatim
(used, not defined)

> "matcherPolicy: \"inline-script-shim\"" — .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md:250

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 250 | defines | Configures matcher translation policy for cross-platform hook generation in copilot-cli.yaml. |

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
A YAML configuration property in `templates/platforms/copilot-cli.yaml` specifying how Claude hook matchers are translated into Copilot CLI shims; classified as name-only per D-023 as a configuration parameter rather than an agent lifecycle concept.
