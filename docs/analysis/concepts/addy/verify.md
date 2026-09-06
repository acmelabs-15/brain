---
package: addy
name: VERIFY
slug: verify
kind: phase
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: CLAUDE.md, sha256: f03b7aaf2c08ab93e70a020442634a09f518286ff1beb7b8353dde92533ff9b0}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# VERIFY

## Definition — verbatim
> "- VERIFY → `debugging-and-error-recovery`" — AGENTS.md:43

## Also called — verbatim
> "**Verify:**" — CLAUDE.md:24

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 43 | defines | Maps VERIFY phase to `debugging-and-error-recovery` in implicit lifecycle rules |
| CLAUDE.md | 24 | defines | Catalogs skills under the Verify phase (`browser-testing-with-devtools`, `debugging-and-error-recovery`) |
| docs/comparison.md | 11 | references | Cites Verify as the fifth lifecycle phase in comparison documentation |
| docs/opencode-setup.md | 171 | references | Maps Verify phase to `debugging-and-error-recovery` in OpenCode setup |
| README.md | 12 | defines | Places VERIFY as the fourth phase in the primary lifecycle ASCII chart |
| skills/constraint-driven-development/SKILL.md | 193 | references | Lists VERIFY phase with `/test` command, related tests, and under 90s time budget |

## Consumes
Code changes and tests produced during the Build phase.

## Produces
Execution proof, test logs, error recovery steps, and diagnostic verification reports.

## When applied
Triggered when code implementation is complete or tests are failing and need verification.

## Sub-concepts
debugging-and-error-recovery, browser-testing-with-devtools

## Part of
lifecycle-mapping-implicit-commands

## Implementation status
defects: cross-file-contradiction, doc-drift, missing-path

## Design notes
The Verify phase enforces non-negotiable proof that code works as intended through automated testing and debugging tools, prohibiting agents from assuming correctness without tangible evidence.
