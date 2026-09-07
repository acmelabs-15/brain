---
package: rjm
name: CWE-22
slug: cwe-22
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-054-local-security-scanning.md, sha256: 5c14b625368f85810129fb4ebdbe8cb56fa59fa8c8c912e8b21e41f6d1016b97}
  - {path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md, sha256: c2b4a02348c862ed3899605ae5d2efbda035194ef3e8e2c32062b67584b82ba4}
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/agents/security/references/powershell-security-checklist.md, sha256: 716f0b004472e48c8f42c408cf4679633293a8eead54861d4163cffcfb208f29}
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
  - {path: .claude/skills/context-optimizer/scripts/compress_markdown_content.py, sha256: 6ea240babb32b029c81725c73a1f4a7db221c67d87bde2598c7545c563f42de1}
  - {path: .claude/skills/context-optimizer/scripts/path_validation.py, sha256: 3243d22879ec0248595edc9f2c519a6f8c0b7433d6a9fe9fcc725177c5a971b3}
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
  - {path: .claude/skills/orphan-ref-validator/SKILL.md, sha256: 69f9c7a8e800ef594a858838198baecfc0ec92a1f3f7af1b5d4fd3bef244c5a3}
  - {path: .claude/skills/orphan-ref-validator/scripts/walking.py, sha256: c5ec30edde983edb8e7427dbe17f5d866f34515ebdbb2b82a8867f31db8f074e}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .claude/skills/security-scan/references/vulnerability-patterns.md, sha256: a6e99c3fd3cf0d269f997e2382e5e70089d8c48853182f7d72dc65d330ea159d}
  - {path: .claude/skills/security-scan/scripts/scan_vulnerabilities.py, sha256: 38a1f357505ed5a7b4b06e9b39bda0c1a6ff3651d6a320e775e7e878c8a06ab9}
  - {path: .claude/skills/skillforge/scripts/package_skill.py, sha256: 15c5c247f958c4d329d4b440559b118ee80423c7a239dff7654ca753b0a324d7}
  - {path: .claude/skills/skillforge/scripts/quick_validate.py, sha256: 579d5fb466abe33bebdd9997f39953776bfe932e972df0d57e2051864c060214}
  - {path: .claude/skills/skillforge/scripts/skill_modularity_audit.py, sha256: 55ccc09bdac6caa91ec34111cd8faa6ffddafc52b0684f831ba21993eeab07f9}
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: .claude/skills/slashcommandcreator/scripts/new_slash_command.py, sha256: 3fb96b32fd77e3d8207d3e3e276e2a34f2627b0d39c6ab10db8baa15cb0d46af}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
  - {path: .claude/skills/threat-modeling/scripts/validate_threat_model.py, sha256: 2df216789ee2fa0e552450372de422efd2bda8e7dc1f6f8a4e386e05ec3d86b9}
  - {path: scripts/bootstrap-vm.sh, sha256: a04fdf031ec3cd4858fbeef8991fc72ace1274da92327620cfc473b59bae43d1}
  - {path: scripts/consolidate_skills.py, sha256: 14ba13d8d34815bfa54c2286f6383f005cba9ed1aae7c57810f669bd8399bfc9}
  - {path: scripts/eval/_anthropic_api.py, sha256: 574e0b74df4e4a048641130705579a08ddd84d48c0a4e79655dae3040888e1e8}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
  - {path: scripts/github_core/bot_config.py, sha256: 4abe6cd8dcb35770ac9ecbe56df1692756c1371cdbbc21b4387ce768490f5415}
  - {path: scripts/github_core/validation.py, sha256: a07f30b4bc09a656e2c5f3d7109928f245a20055d0f60dd3f6165535b412afae}
  - {path: scripts/hook_utilities/path_safety.py, sha256: 5e74bbfd4a7a88137745cca178c34efe5632873fa0836d192f164074cfb03b10}
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
  - {path: scripts/utils/path_validation.py, sha256: c2f4ac43ed5662e0fddce7be5e1a0e91c5e0592b931e84b4c7415cca2cd0e949}
  - {path: scripts/validation/check_model_pins.py, sha256: 861aacfef7183396e0c27f4042806260e586b61afd2bb7c93f1b010ad68b94fd}
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CWE-22

## Definition — verbatim
> "## CWE-22: Improper Limitation of a Pathname to a Restricted Directory (Path Traversal)" — .claude/skills/security-scan/references/vulnerability-patterns.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-054-local-security-scanning.md | 22 | used here | Amendment delegating CWE-22 path traversal detection from local regex scripts to CI-based CodeQL. |
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 106 | used here | Security review vulnerability classification verifying safe path resolution in quick-pass mode. |
| .agents/security/ADR-045-framework-extraction-security-review.md | 203 | used here | Security audit review verifying path traversal mitigations in framework extraction scripts. |
| .claude/agents/implementer.md | 121 | used here | Guardrail instruction directing implementer agents to validate paths against traversal attacks. |
| .claude/agents/security.md | 223 | used here | Security agent checklist item verifying safe path containment across filesystem operations. |
| .claude/agents/security/references/powershell-security-checklist.md | 42 | used here | PowerShell security guidelines detailing path sanitization patterns to prevent traversal. |
| .claude/skills/context-optimizer/scripts/analyze_skill_placement.py | 91 | used here | Path validation check ensuring skill placement paths remain within repository boundaries. |
| .claude/skills/context-optimizer/scripts/compress_markdown_content.py | 563 | used here | Defensive path resolution ensuring markdown compression operates on confined file paths. |
| .claude/skills/context-optimizer/scripts/path_validation.py | 1 | used here | Dedicated security utility module validating filesystem path containment against CWE-22. |
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 339 | used here | Test suite asserting that path validation logic correctly rejects directory traversal attempts. |
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 1262 | used here | Path safety check guarding file reading operations against traversal sequences in documentation links. |
| .claude/skills/orphan-ref-validator/scripts/walking.py | 78 | used here | File traversal boundary check ensuring directory walking remains inside target root. |
| .claude/skills/orphan-ref-validator/SKILL.md | 239 | used here | Security note explaining path normalization safeguards during reference validation. |
| .claude/skills/security-scan/references/vulnerability-patterns.md | 5 | used here | Reference guide documenting CWE-22 vulnerability patterns, detection rules, and remediation. |
| .claude/skills/security-scan/scripts/scan_vulnerabilities.py | 8 | used here | Docstring explaining delegation of CWE-22 path traversal checks to CodeQL taint analysis. |
| .claude/skills/security-scan/SKILL.md | 3 | used here | Frontmatter description noting CWE-22 exclusion and delegation to CodeQL workflow. |
| .claude/skills/skillforge/scripts/package_skill.py | 84 | used here | Archive packaging safety validation verifying destination paths do not escape target directory. |
| .claude/skills/skillforge/scripts/quick_validate.py | 140 | used here | Rapid validation check preventing skill path traversal during authoring inspection. |
| .claude/skills/skillforge/scripts/skill_modularity_audit.py | 369 | used here | Audit rule checking that skill sub-paths remain within modular skill boundaries. |
| .claude/skills/skillforge/scripts/validate-skill.py | 24 | used here | Script comment annotating path safety verification during skill validation runs. |
| .claude/skills/slashcommandcreator/scripts/new_slash_command.py | 22 | used here | Path safety guard ensuring newly generated slash command files remain in commands directory. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 188 | used here | Lint rule auditing path resolution logic across Python scripts for traversal vulnerabilities. |
| .claude/skills/threat-modeling/scripts/validate_threat_model.py | 297 | used here | Threat model validation script ensuring CWE-22 threats are cataloged and addressed. |
| scripts/bootstrap-vm.sh | 9 | used here | Script header documenting directory containment safeguards in VM bootstrap setup. |
| scripts/consolidate_skills.py | 575 | used here | Path validation enforcing safe directory targets during skill tree consolidation. |
| scripts/eval/_anthropic_api.py | 52 | used here | Defensive file resolution ensuring evaluation cache files do not traverse directory bounds. |
| scripts/eval/eval-agent-vs-baseline.py | 122 | used here | Evaluation script verifying baseline log paths are safely confined to logs directory. |
| scripts/eval/eval-skill-overlap.py | 534 | used here | Path validation ensuring comparison inputs remain within allowed skill directories. |
| scripts/eval/variance-control.py | 52 | used here | Defensive path check preventing arbitrary file write during variance report generation. |
| scripts/github_core/bot_config.py | 197 | used here | Bot configuration loader ensuring config file paths are strictly bounded. |
| scripts/github_core/validation.py | 54 | used here | Security validation utility checking user inputs against directory traversal patterns. |
| scripts/hook_utilities/path_safety.py | 9 | used here | Git hook utility module enforcing path safety and traversal protection on modified paths. |
| scripts/security/invoke_security_retrospective.py | 360 | used here | Security retrospective generator analyzing past CWE-22 findings and resolution patterns. |
| scripts/utils/path_validation.py | 1 | used here | Centralized path validation library preventing path traversal across repository scripts. |
| scripts/validation/check_model_pins.py | 349 | used here | Validation script ensuring checked model pin file paths do not escape repository root. |
| scripts/validation/portability_common.py | 159 | used here | Common portability library providing canonical path containment helpers. |
| templates/agents/implementer.shared.md | 129 | used here | Shared implementer agent template instructing agents to implement safe path validation. |

## Consumes
File paths, user input strings, and repository path references requiring resolution.

## Produces
Validated, canonicalized filesystem paths strictly contained within intended base directories.

## When applied
Enforced during all filesystem path construction, file reads, file writes, and directory walking operations.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, exit-code-mismatch, internal-contradiction, missing-path, orphan, other, script-bug

## Design notes
CWE-22 (Improper Limitation of a Pathname to a Restricted Directory, or Path Traversal) is one of the most critical security vulnerabilities tracked across rjm's codebase. Due to extensive file operations across autonomous scripts, skills, and agents, rjm enforces rigorous path containment checks (e.g., using `resolve()` and containment assertions) across utility libraries. Following ADR-054, detection of CWE-22 was shifted from brittle regex scanning to CodeQL taint-tracking in CI to ensure comprehensive coverage without false positives.
