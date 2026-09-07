---
package: rjm
name: self-referential test
slug: self-referential-test
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md, sha256: d14447496609bc6cf62fac8aa2de0adbde4193a369ed82b27ff463c6f9fbd098}
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# self-referential test

## Definition — verbatim
> "| Self-referential test (asserts generator output against itself) | First #2205 fix shipped one; it passed while the artifact was broken (retro :49, :83) | Runtime-contract test + negative control (generated-artifacts.md:67-73) |" — .claude/skills/ai-agents-validation-and-qa/SKILL.md:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md | 9 | defines | Examines the failed first #2205 fix that asserted generator output against itself and wedged customer installs. |
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 155 | defines | Anti-pattern catalog entry defining self-referential tests and establishing binding runtime-contract test rules. |

## Consumes
Generator output strings, internal test fixtures, and mock verification routines.

## Produces
Illusory test passes that verify internal code consistency while masking catastrophic external contract failures.

## When applied
Identified and rejected during test design reviews and quality audits for code generators.

## Sub-concepts
none

## Part of
validation-and-qa

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
An anti-pattern in test design where a test asserts that a generator or serializer produces the exact string or payload copied directly from the generator implementation itself. Because both test and code share the same incorrect assumption, the test succeeds even when the generated output fails completely in real runtime environments.
