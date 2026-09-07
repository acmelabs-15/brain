---
package: rjm
name: Runtime-contract tests
slug: runtime-contract-tests
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Runtime-contract tests

## Definition — verbatim
> "execute the shipped artifact under the host's real contract (foreign cwd, host-set env vars), assert the intended effect, and include a negative control proving the test CAN fail" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 90 | defined here | Defined as executing shipped artifacts under real host conditions with negative controls proving test sensitivity. |

## Consumes
Generated artifacts, foreign working directories, and host-injected environment variables.

## Produces
Verifiable proof that generated artifacts execute correctly and achieve intended effects in host environments.

## When applied
Mandatory for any generated artifact or script before shipping (FM-11).

## Sub-concepts
negative-controls

## Part of
ai-agents-validation-and-qa

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Mandated by FM-11 after Incident #2205 (customer wedge), runtime-contract tests require generated scripts or hooks to be executed in realistic host environments with foreign working directories and host environment variables, ensuring they actually execute rather than just pass static string generation checks.
