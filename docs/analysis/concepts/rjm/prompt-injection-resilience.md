---
package: rjm
name: Prompt injection resilience
slug: prompt-injection-resilience
kind: pattern
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-023-quality-gate-prompt-testing.md, sha256: 322d7c82f609f03ec83b27f780338a015a2cc551d5f0a566cf4c6da6abe6530d}
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Prompt injection resilience

## Definition — verbatim
> "4. **Prompt injection resilience** - Adversarial testing of prompts not included" — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-023-quality-gate-prompt-testing.md | 139 | used here | Documented as out of scope for structural testing, requiring adversarial testing suites. |
| .agents/critique/ADR-023-debate-log.md | 66 | used here | Flagged by security review as an untested P2 risk in quality gate prompts. |

## Consumes
Adversarial test cases, prompt delimiters, and input sanitization rules.

## Produces
Hardened prompt instructions capable of resisting untrusted inputs from manipulating verdicts.

## When applied
Evaluated during security auditing of review prompts handling untrusted pull request content.

## Sub-concepts
none

## Part of
ai-pr-quality-gate

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A security quality attribute ensuring that automated AI review prompts cannot be manipulated, hijacked, or coerced into emitting false passes by adversarial instructions embedded in pull request diffs, commit messages, or titles.
