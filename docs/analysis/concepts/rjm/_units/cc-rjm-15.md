---
unit: cc-rjm-15
phase: 2
package: rjm
session: 015
subagent_returned: complete
---

# Unit cc-rjm-15

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-028-powershell-output-schema-consistency.md
- [x] sources/rjm/.agents/architecture/ADR-029-skill-file-line-ending-normalization.md
- [x] sources/rjm/.agents/architecture/ADR-030-skills-pattern-superiority.md
- [x] sources/rjm/.agents/architecture/ADR-031-hybrid-powershell-architecture.md
- [x] sources/rjm/.agents/architecture/ADR-040-skill-frontmatter-standardization.md
- [x] sources/rjm/.agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md
- [x] sources/rjm/.agents/architecture/ADR-056-skill-output-format-standardization.md
- [x] sources/rjm/.agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md
- [x] sources/rjm/.agents/architecture/ADR-063-memory-skill-decomposition.md
- [x] sources/rjm/.agents/architecture/ADR-075-form-factor-eval-methodology.md
- [x] sources/rjm/.agents/architecture/ADR-097-zero-tool-use-hooks.md
- [x] sources/rjm/.agents/guides/python-for-powershell-developers.md
- [x] sources/rjm/.agents/projects/v0.3.1/PowerShell-migration.md
- [x] sources/rjm/.claude/skills/adr-review/SKILL.md
- [x] sources/rjm/.claude/skills/adr-review/scripts/detect_adr_changes.py
- [x] sources/rjm/.claude/skills/codeql-scan/SKILL.md
- [x] sources/rjm/.claude/skills/context-optimizer/SKILL.md
- [x] sources/rjm/.claude/skills/context-optimizer/scripts/analyze_skill_placement.py
- [x] sources/rjm/.claude/skills/orphan-ref-validator/SKILL.md
- [x] sources/rjm/.claude/skills/slashcommandcreator/SKILL.md
- [x] sources/rjm/.claude/skills/slashcommandcreator/scripts/new_slash_command.py
- [x] sources/rjm/.claude/skills/slashcommandcreator/scripts/validate_slash_command.py
- [x] sources/rjm/AGENTS.md
- [x] sources/rjm/README.md
- [x] sources/rjm/docs/architecture.md
- [x] sources/rjm/docs/github-api-capabilities.md
- [x] sources/rjm/scripts/AGENTS.md
- [x] sources/rjm/scripts/check_skill_exists.py
- [x] sources/rjm/scripts/detect_hook_bypass.py
- [x] sources/rjm/scripts/detect_skill_violation.py
- [x] sources/rjm/scripts/issue_triage.py
- [x] sources/rjm/scripts/progress/reporter.py
- [x] sources/rjm/scripts/security/invoke_security_retrospective.py
- [x] sources/rjm/scripts/security/run_semgrep.py
- [x] sources/rjm/scripts/utils/path_validation.py
- [x] sources/rjm/scripts/validate_session_json.py
- [x] sources/rjm/scripts/validate_skill_installation.py
- [x] sources/rjm/scripts/validation/__init__.py
- [x] sources/rjm/scripts/validation/check_adr_lifecycle.py
- [x] sources/rjm/scripts/validation/check_adr_links_baseline.txt
- [x] sources/rjm/scripts/validation/check_agent_skill_discriminator.py
- [x] sources/rjm/scripts/validation/check_ci_dependency_pins.py
- [x] sources/rjm/scripts/validation/check_copilot_version_pin.py
- [x] sources/rjm/scripts/validation/check_skill_skip_clauses.py
- [x] sources/rjm/scripts/validation/git_hook_policy.py
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-028-powershell-output-schema-consistency-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-029-skill-file-line-ending-normalization-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-030-skills-pattern-superiority-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-031-hybrid-powershell-architecture-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-040-skill-frontmatter-standardization-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-045-framework-extraction-via-plugin-marketplace-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-056-skill-output-format-standardization-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-061-hook-matcher-shims-delegate-pattern-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-063-memory-skill-decomposition-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-075-form-factor-eval-methodology-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-097-zero-tool-use-hooks-md.md
- [x] docs/analysis/inventory/rjm/agents-guides-python-for-powershell-developers-md.md
- [x] docs/analysis/inventory/rjm/agents-md.md
- [x] docs/analysis/inventory/rjm/agents-projects-v0-3-1-powershell-migration-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-review-scripts-detect-adr-changes-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-review-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-codeql-scan-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-scripts-analyze-skill-placement-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-orphan-ref-validator-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-scripts-new-slash-command-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-scripts-validate-slash-command-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-skill-md.md
- [x] docs/analysis/inventory/rjm/docs-architecture-md.md
- [x] docs/analysis/inventory/rjm/docs-github-api-capabilities-md.md
- [x] docs/analysis/inventory/rjm/readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-agents-md.md
- [x] docs/analysis/inventory/rjm/scripts-check-skill-exists-py.md
- [x] docs/analysis/inventory/rjm/scripts-detect-hook-bypass-py.md
- [x] docs/analysis/inventory/rjm/scripts-detect-skill-violation-py.md
- [x] docs/analysis/inventory/rjm/scripts-issue-triage-py.md
- [x] docs/analysis/inventory/rjm/scripts-progress-reporter-py.md
- [x] docs/analysis/inventory/rjm/scripts-security-invoke-security-retrospective-py.md
- [x] docs/analysis/inventory/rjm/scripts-security-run-semgrep-py.md
- [x] docs/analysis/inventory/rjm/scripts-utils-path-validation-py.md
- [x] docs/analysis/inventory/rjm/scripts-validate-session-json-py.md
- [x] docs/analysis/inventory/rjm/scripts-validate-skill-installation-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation---init---py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-lifecycle-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-adr-links-baseline-txt.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-agent-skill-discriminator-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-ci-dependency-pins-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-copilot-version-pin-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-skill-skip-clauses-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-git-hook-policy-py.md

## Outputs produced
- docs/analysis/concepts/rjm/schema-consistency.md (1681 bytes)
- docs/analysis/concepts/rjm/envelope-level.md (1552 bytes)
- docs/analysis/concepts/rjm/output-envelope.md (1503 bytes)
- docs/analysis/concepts/rjm/skill-output-schema-json.md (1210 bytes)
- docs/analysis/concepts/rjm/pscustomobject.md (946 bytes)
- docs/analysis/concepts/rjm/add-member.md (980 bytes)
- docs/analysis/concepts/rjm/skill.md (2227 bytes)
- docs/analysis/concepts/rjm/eol-lf.md (912 bytes)
- docs/analysis/concepts/rjm/autocrlf.md (1039 bytes)
- docs/analysis/concepts/rjm/normalize-newlines.md (957 bytes)
- docs/analysis/concepts/rjm/option-e.md (984 bytes)
- docs/analysis/concepts/rjm/skills-pattern.md (1394 bytes)
- docs/analysis/concepts/rjm/allowed-tools.md (1683 bytes)
- docs/analysis/concepts/rjm/hybrid-architecture.md (1483 bytes)
- docs/analysis/concepts/rjm/strategy-1.md (964 bytes)
- docs/analysis/concepts/rjm/strategy-2.md (981 bytes)
- docs/analysis/concepts/rjm/named-pipe-daemon.md (1025 bytes)
- docs/analysis/concepts/rjm/spawn-overhead.md (990 bytes)
- docs/analysis/concepts/rjm/gh-native.md (1112 bytes)
- docs/analysis/concepts/rjm/adr-005.md (1558 bytes)
- docs/analysis/concepts/rjm/adr-042.md (4479 bytes)
- docs/analysis/concepts/rjm/adr-073.md (1756 bytes)
- docs/analysis/concepts/rjm/process-spawn-overhead.md (952 bytes)
- docs/analysis/concepts/rjm/routing-decision-tree.md (957 bytes)
- docs/analysis/concepts/rjm/get-prcontext.md (940 bytes)
- docs/analysis/concepts/rjm/set-issuelabels.md (945 bytes)
- docs/analysis/concepts/rjm/set-issuemilestone.md (975 bytes)
- docs/analysis/concepts/rjm/post-issuecomment.md (964 bytes)
- docs/analysis/concepts/rjm/get-prreviewcomments.md (1010 bytes)
- docs/analysis/concepts/rjm/resolve-prreviewthread.md (1008 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-15.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <cards> (exit code 0, 33 PASS 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-15 covers 30 concept cards across PowerShell output schema consistency (ADR-028), skill line ending normalization (ADR-029), skills pattern superiority (ADR-030), hybrid PowerShell execution architecture (ADR-031), skill frontmatter standardization (ADR-040), Python migration governance (ADR-042), ADR lifecycle rules (ADR-073), and GitHub CLI wrapper commands.
- Non-lifecycle concepts (PowerShell cmdlets `Get-PRContext`, `Set-IssueLabels`, `Set-IssueMilestone`, `Post-IssueComment`, `Get-PRReviewComments`, `Resolve-PRReviewThread`, `Normalize-Newlines`; Git configurations `autocrlf`, `eol=lf`; proposal labels `Option E`, `Strategy 1`, `Strategy 2`, `named-pipe daemon`; section headings `Process Spawn Overhead`, `Routing Decision Tree`; ADR identifiers `ADR-005`, `ADR-042`, `ADR-073`; and frontmatter property `allowed-tools`) are marked `kind: name-only` per METHOD.md D-023.
- The architectural concepts `skills-pattern` and `hybrid-architecture` are classified as `kind: pattern` under `package_phase: cross-phase`.
- Extensive cross-file references for `ADR-042` (26 occurrences across 26 inventory cards) and `ADR-073` (6 occurrences across 6 inventory cards) have all been mapped into their respective Where used tables with exact line and role citations.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 45 source files and 45 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 concept cards and 1 unit report.
