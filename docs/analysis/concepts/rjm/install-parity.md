---
package: rjm
name: Install-parity
slug: install-parity
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Install-parity

## Definition — verbatim
> "Install-parity (PR 2095, merged 2026-05-26) demonstrates that the project now accepts and enforces \"canonical + thin install copies\" as the design idiom." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:145

## Also called — verbatim
Install parity — .claude/skills/ai-agents-generation-and-release/SKILL.md:109

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 145 | used here | Cites merged PR 2095 establishing the canonical-plus-thin-install design pattern. |
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 109 | used here | Listed in drift gates table checking that plugin install layout has not broken. |

## Consumes
none

## Produces
none

## When applied
> "Install parity | plugin install layout broken | `python3 scripts/validation/run_install_parity_ci.py`" — .claude/skills/ai-agents-generation-and-release/SKILL.md:109

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path, unfailable-gate

## Design notes
A release and validation gate that verifies generated plugin installations mirror canonical source definitions without layout or content drift between environments.
