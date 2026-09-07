---
package: rjm
name: SessionEnd
slug: sessionend
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SessionEnd

## Definition — verbatim
> "sessionEnd" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:100

## Also called — verbatim
`sessionEnd` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:118

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 344 | used here | Analyzes SessionEnd hook integration within consolidated dispatcher architecture. |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 211 | used here | Verifies SessionEnd hook execution contracts and payload delivery on session exit. |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 380 | used here | Confirms SessionEnd hook survives zero-tool-use purge as an asynchronous terminal event. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 56 | used here | Lists SessionEnd among supported lifecycle hook events in compilation schemas. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 100 | defined here | Canonical contract definition of sessionEnd in the official hook event catalog. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 118 | used here | Documents compatibility mapping between sessionEnd and PascalCase SessionEnd. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 46 | used here | Outlines SessionEnd hook execution for memory reflection and session metric recording. |
| CONTRIBUTING.md | 576 | used here | Documents registered SessionEnd hook invoking memory reflection to persist scores. |
| scripts/validation/hook_contracts.py | 35 | used here | Classifies SessionEnd under non-blocking hook types where exit code is always 0. |

## Consumes
Session termination payload (`session_id`, `reason`, `timestamp`).

## Produces
Persisted memory reflections, confidence score updates, and session telemetry.

## When applied
Fires asynchronously when an agent session terminates or closes.

## Sub-concepts
none

## Part of
lifecycle-hooks

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A non-blocking lifecycle hook event that executes when an agent session concludes. In rjm, SessionEnd is used to capture final telemetry, execute memory reflection algorithms, and persist confidence scores to disk without impeding user experience.
