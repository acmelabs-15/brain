---
package: rjm
name: Validation Script Template
slug: validation-script-template
kind: template
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Validation Script Template

## Definition — verbatim
> "validate_<target>.py - Validates <target> against <standard>" — .claude/skills/skillforge/references/script-patterns-catalog.md:633

## Also called — verbatim
> "### Validation Script Template" — .claude/skills/skillforge/references/script-patterns-catalog.md:628

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 628 | defined here | Provides complete boilerplate starter code for building multi-check validation scripts. |

## Consumes
Target file or directory paths, validation criteria, and optional `--strict` or `--json` flags.

## Produces
Executable Python script template validating artifacts and returning exit code 0 or 1 with reports.

## When applied
When scaffolding a new validation script to check artifacts against quality standards.

## Sub-concepts
validationresult-class

## Part of
category-templates

## Implementation status
clean

## Design notes
Provides a ready-to-use Python script template incorporating `ValidationResult`, simple argparse CLI options, JSON output formatting, and standardized exit codes for fast validation script creation.
