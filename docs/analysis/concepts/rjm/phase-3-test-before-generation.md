---
package: rjm
name: Phase 3: Test Before Generation
slug: phase-3-test-before-generation
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 3: Test Before Generation

## Definition — verbatim
> "### Phase 3: Test Before Generation" — .claude/skills/ai-agents-portability-campaign/SKILL.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 145 | defined here | Verification phase running targeted contract and unit tests on canonical sources prior to running generators. |

## Consumes
Modified canonical hook scripts and corresponding unit tests.

## Produces
Test execution logs validating that canonical hook logic functions correctly before triggering generation.

## When applied
Executed after canonical edits and before mirror regeneration.

## Sub-concepts
none

## Part of
ai-agents-portability-campaign

## Implementation status
defects: doc-drift, missing-path

## Design notes
Phase 3 mandates executing targeted unit tests against modified canonical sources before running code generators. Validating canonical logic in isolation ensures generation pipelines are not executed on broken source code.
