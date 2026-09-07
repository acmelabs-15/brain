---
package: rjm
name: Docs-vs-Reality Audit
slug: docs-vs-reality-audit
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md, sha256: d14447496609bc6cf62fac8aa2de0adbde4193a369ed82b27ff463c6f9fbd098}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Docs-vs-Reality Audit

## Definition — verbatim
> "| You are about to write a command, path, or "matches X" claim into a doc or docstring | 4. Docs-vs-reality audit | `doc-accuracy` for full doc audits |" — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md | 23 | defines | Section heading introducing Recipe 4 worked examples including dead PowerShell command citations in CONTRIBUTING.md. |
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 32 | defines | Recipe selector entry for auditing commands, paths, and parity claims before committing documentation. |

## Consumes
Documentation text, README files, docstrings, CLI command citations, and filesystem path references.

## Produces
Verified executable commands, confirmed file path existence, and validated runtime parity claims.

## When applied
docs versus reality audit or prior to committing any file containing executable CLI commands or path claims.

## Sub-concepts
verbatim-quote-rule

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path

## Design notes
Recipe 4 of the empirical probe toolkit. It counters Failure Mode FM-9 ('confident incorrectness') by mandating that every path, command, CLI flag, or claim of parity written into a docstring or guide be executed and confirmed against reality before documentation is published.
