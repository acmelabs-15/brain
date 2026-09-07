---
package: rjm
name: eventRemap
slug: eventremap
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# eventRemap

## Definition — verbatim
> "PreCompact remains available in `eventRemap`, even with no active vendored registration." — .claude/skills/ai-agents-portability-campaign/SKILL.md:262

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 238 | defined here | Declared in hooks build configuration to map Claude event names to Copilot CLI compatibility names. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 262 | used here | Verified during portability auditing to ensure events like PreCompact remain mapped. |

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
`eventRemap` is a configuration dictionary identifier in multi-tool build specifications used to map source hook events between harnesses rather than an independent software lifecycle concept, classified as `name-only` per D-023.
