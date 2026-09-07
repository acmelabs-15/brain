---
package: rjm
name: smoke
slug: smoke
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
  - {path: pyproject.toml, sha256: f9db8bb8535798521c2dc821da3cfc7ae4440d2d42b0290a4ea45e70a31dd1fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# smoke

## Definition — verbatim
> "smoke: Real-CLI smoke tests (need auth/credits; nightly only). The smoke gate asserts these were not skipped (issue #2231 item 4)." — pyproject.toml:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 80 | used here | Documented as marking real-CLI tests that require authentication and credits for nightly CI execution. |
| pyproject.toml | 78 | defined here | Defined in pytest marker configuration for real-CLI nightly smoke tests. |

## Consumes
Live CLI tool builds, cloud credentials, and billing credit balances.

## Produces
Nightly verification runs confirming end-to-end functionality without silent skips.

## When applied
Executed in nightly CI pipelines and validated by dedicated smoke check gates.

## Sub-concepts
none

## Part of
testing-rigor

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Identifies end-to-end CLI tests that require live external credentials and consumption of credits. By restricting smoke runs to nightly CI and strictly asserting they are never silently skipped, rjm maintains full-system validation without imposing high token costs on every commit.
