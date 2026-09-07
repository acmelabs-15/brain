---
package: rjm
name: Redaction pre-emit
slug: redaction-pre-emit
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: .claude/skills/spec-generator/references/spec-step0-gates.md, sha256: 4a8aacb665f1475a6d2da319dcafb8c7cba55d6f65149bdefb6d682f7d1a1bb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Redaction pre-emit

## Definition — verbatim
> "**Redaction pre-emit (BLOCKING)**: the `evidence` field carries the factual record that triggered the halt" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 81 | defined here | Defines the mandatory pre-emit redaction gate for the `evidence` field of `step0_5-halt` blocks using `scripts/redact_secrets.py`. |
| .claude/skills/spec-generator/references/spec-step0-gates.md | 96 | defined here | Defines the mandatory pre-emit redaction gate for the `answer` field of `step0-halt` blocks before logging or committing. |

## Consumes
Unfiltered evidence text, author answers, or diagnostic log snippets intended for emission into halt blocks or metrics tallies.

## Produces
Sanitized text with credentials, API tokens, JWTs, emails, and hostnames replaced by redacted placeholder tokens.

## When applied
Applied immediately before emitting any `step0-halt` or `step0_5-halt` block or writing to session metric tallies.

## Sub-concepts
none

## Part of
step-0-5-halt-block-format, step-0-gates

## Implementation status
defects: missing-path, doc-drift

## Design notes
A blocking security control that prevents credentials, emails, and internal hostnames embedded in halt evidence or author answers from being permanently committed to git history, PRs, or metrics tallies (mitigating CWE-209 and CWE-532).
