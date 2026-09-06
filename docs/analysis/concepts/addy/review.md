---
package: addy
name: REVIEW
slug: review
kind: phase
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: CLAUDE.md, sha256: f03b7aaf2c08ab93e70a020442634a09f518286ff1beb7b8353dde92533ff9b0}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/code-simplification.md, sha256: 91567ad5289ace67907b96afacbbf6f462f776f6f74cd5b9ffc87e02148bbabf}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# REVIEW

## Definition — verbatim
> "- REVIEW → `code-review-and-quality`" — AGENTS.md:44

## Also called — verbatim
> "**Review:**" — CLAUDE.md:25

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 44 | defines | Maps REVIEW phase to `code-review-and-quality` in OpenCode implicit mapping |
| CLAUDE.md | 25 | defines | Catalogs skills under the Review phase (`code-review-and-quality`, `code-simplification`, `security-and-hardening`, `performance-optimization`) |
| docs/comparison.md | 11 | references | Cites Review as the sixth phase in the lifecycle comparison table |
| docs/opencode-setup.md | 172 | references | Maps Review phase in OpenCode configuration |
| external/code-review-and-quality.md | 5 | references | Marks `code-review-and-quality` as belonging to the Review phase |
| external/code-review-and-quality.md | 5 | references | Displays Review phase chip in external detail header |
| external/code-simplification.md | 5 | references | Marks `code-simplification` as belonging to the Review phase |
| external/performance-optimization.md | 5 | references | Marks `performance-optimization` as belonging to the Review phase |
| external/performance-optimization.md | 12 | references | Associates performance optimization skill with the `/review` command |
| external/security-and-hardening.md | 5 | references | Marks `security-and-hardening` as belonging to the Review phase |
| external/security-and-hardening.md | 12 | references | Associates security hardening skill with the `/review` command |
| README.md | 12 | defines | Places REVIEW as the fifth phase in the lifecycle flow ASCII diagram |
| README.md | 17 | defines | Maps `/review` command to the Review phase in the command-to-phase diagram |
| skills/constraint-driven-development/SKILL.md | 194 | references | Specifies REVIEW stage in constraint wiring with `/review` command |
| skills/constraint-driven-development/SKILL.md | 194 | references | Defines REVIEW time budget and verification guards |
| skills/doubt-driven-development/SKILL.md | 12 | references | Distinguishes continuous doubt posture from the post-hoc verdict of `/review` |

## Consumes
Working, verified implementation changes and diffs.

## Produces
Categorized review feedback (Critical, Required, Optional, Nit), simplification recommendations, and security/performance assessments.

## When applied
Triggered before merging or shipping code changes, evaluating quality across correctness, readability, and security.

## Sub-concepts
senior-code-reviewer, review-framework, required, optional, nit

## Part of
lifecycle-mapping-implicit-commands

## Implementation status
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path, orphan

## Design notes
The Review phase acts as a quality and security gate where specialized reviewer personas evaluate code diffs against strict criteria, preventing regressions, technical debt, and vulnerabilities from reaching production.
