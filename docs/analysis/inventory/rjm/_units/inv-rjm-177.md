---
unit: inv-rjm-177
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-177

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/threat-modeling/references/advanced-analysis.md` (1286 bytes, 46 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/threat-modeling/references/risk-rating-guide.md` (4765 bytes, 149 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/threat-modeling/references/security-defense-in-depth.md` (3103 bytes, 79 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/threat-modeling/references/security-least-privilege.md` (4181 bytes, 143 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/threat-modeling/references/security-owasp-top-10.md` (3920 bytes, 104 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/threat-modeling/references/security-zero-trust.md` (3685 bytes, 100 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/threat-modeling/references/stride-methodology.md` (5003 bytes, 229 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py` (9837 bytes, 369 lines)
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/threat-modeling/scripts/generate_threat_matrix.py` (6551 bytes, 256 lines)

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-advanced-analysis-md.md` (3171 bytes)
- `docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-risk-rating-guide-md.md` (3967 bytes)
- `docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-security-defense-in-depth-md.md` (4791 bytes)
- `docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-security-least-privilege-md.md` (5567 bytes)
- `docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-security-owasp-top-10-md.md` (5165 bytes)
- `docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-security-zero-trust-md.md` (5243 bytes)
- `docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-stride-methodology-md.md` (3969 bytes)
- `docs/analysis/inventory/rjm/claude-skills-threat-modeling-scripts-generate-mitigation-roadmap-py.md` (5528 bytes)
- `docs/analysis/inventory/rjm/claude-skills-threat-modeling-scripts-generate-threat-matrix-py.md` (4037 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-177.md`

## Scripts executed
- `.claude/skills/threat-modeling/scripts/generate_threat_matrix.py`: `python3 .claude/skills/threat-modeling/scripts/generate_threat_matrix.py --scope "Authentication Service" --output /tmp/auth-threats.md` (exit 0)
- `.claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py`: `python3 .claude/skills/threat-modeling/scripts/generate_mitigation_roadmap.py --input /tmp/auth-threats.md --output /tmp/auth-roadmap.md` (exit 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- This unit covers `.claude/skills/threat-modeling` (part 1), consisting of 7 references and 2 generation scripts. Part 2 (unit `inv-rjm-178`) covers the skill body `SKILL.md`, `validate_threat_model.py`, and `threat-model-template.md`.
- Four references (`security-defense-in-depth.md`, `security-least-privilege.md`, `security-owasp-top-10.md`, and `security-zero-trust.md`) cite non-existent source paths in their frontmatter (`source: wiki/concepts/...`), reflecting upstream migration from an external wiki repository. These are recorded as `missing-path` defects.
- Both Python scripts import `validate_path_no_traversal` from `.claude/lib/hook_utilities/path_safety.py` and dynamically resolve the plugin library root, providing robust CWE-22 path traversal defense.
- Cross-references among the security principles form a cohesive cluster: Defense in Depth, Zero Trust, Least Privilege, and OWASP Top 10 cross-cite each other and directly map to STRIDE categorization.

## Blocked or uncertain
none

## Time and size
Source read: 42,331 bytes (~10,580 tokens); output written: ~44,500 bytes (~11,100 tokens).
