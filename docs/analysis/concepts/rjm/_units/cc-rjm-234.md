---
unit: cc-rjm-234
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-234

## Files assigned
- [x] sources/rjm/.github/workflows/validate-generated-agents.yml
- [x] sources/rjm/.vscode/toolsets.jsonc
- [x] sources/rjm/AGENTS.md
- [x] sources/rjm/CLAUDE.md
- [x] sources/rjm/docs/skill-reference.md
- [x] sources/rjm/scripts/validation/checks_plugin.py
- [x] sources/rjm/templates/README.md
- [x] docs/analysis/inventory/rjm/github-workflows-validate-generated-agents-yml.md
- [x] docs/analysis/inventory/rjm/templates-readme-md.md
- [x] docs/analysis/inventory/rjm/scripts-validation-checks-plugin-py.md
- [x] docs/analysis/inventory/rjm/vscode-toolsets-jsonc.md
- [x] docs/analysis/inventory/rjm/docs-skill-reference-md.md
- [x] docs/analysis/inventory/rjm/agents-md.md
- [x] docs/analysis/inventory/rjm/claude-md.md

## Outputs produced
- docs/analysis/concepts/rjm/validate-platform-template-schema.md (1359 bytes)
- docs/analysis/concepts/rjm/req-003-002.md (1049 bytes)
- docs/analysis/concepts/rjm/validate-plugin-frontmatter-self-containment.md (1363 bytes)
- docs/analysis/concepts/rjm/validate-agent-capability-matrix-references.md (1285 bytes)
- docs/analysis/concepts/rjm/install-parity-check.md (1339 bytes)
- docs/analysis/concepts/rjm/plugin-lib-sync-check.md (1268 bytes)
- docs/analysis/concepts/rjm/plugin-manifest-description-count-check.md (1332 bytes)
- docs/analysis/concepts/rjm/validate-github-actions-sha-pinning.md (1254 bytes)
- docs/analysis/concepts/rjm/validate-copilot-agent-frontmatter.md (1510 bytes)
- docs/analysis/concepts/rjm/show-diff-on-failure.md (1122 bytes)
- docs/analysis/concepts/rjm/toolset-definitions.md (950 bytes)
- docs/analysis/concepts/rjm/editor.md (1065 bytes)
- docs/analysis/concepts/rjm/knowledge.md (1028 bytes)
- docs/analysis/concepts/rjm/github-research.md (1042 bytes)
- docs/analysis/concepts/rjm/github-oversight.md (1076 bytes)
- docs/analysis/concepts/rjm/github-code.md (1037 bytes)
- docs/analysis/concepts/rjm/github-cicd.md (1020 bytes)
- docs/analysis/concepts/rjm/github-security.md (1041 bytes)
- docs/analysis/concepts/rjm/research.md (1175 bytes)
- docs/analysis/concepts/rjm/retrieval.md (817 bytes)
- docs/analysis/concepts/rjm/gates.md (794 bytes)
- docs/analysis/concepts/rjm/mid.md (1068 bytes)
- docs/analysis/concepts/rjm/pre-pr.md (1132 bytes)
- docs/analysis/concepts/rjm/end.md (1113 bytes)
- docs/analysis/concepts/rjm/blocking-verify.md (1222 bytes)
- docs/analysis/concepts/rjm/skill-first.md (825 bytes)
- docs/analysis/concepts/rjm/ci-feedback-sub-loop.md (1245 bytes)
- docs/analysis/concepts/rjm/adr-078.md (1062 bytes)
- docs/analysis/concepts/rjm/buy-vs-build-quick.md (1344 bytes)
- docs/analysis/concepts/rjm/standards.md (852 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-234.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/validate-platform-template-schema.md docs/analysis/concepts/rjm/req-003-002.md docs/analysis/concepts/rjm/validate-plugin-frontmatter-self-containment.md docs/analysis/concepts/rjm/validate-agent-capability-matrix-references.md docs/analysis/concepts/rjm/install-parity-check.md docs/analysis/concepts/rjm/plugin-lib-sync-check.md docs/analysis/concepts/rjm/plugin-manifest-description-count-check.md docs/analysis/concepts/rjm/validate-github-actions-sha-pinning.md docs/analysis/concepts/rjm/validate-copilot-agent-frontmatter.md docs/analysis/concepts/rjm/show-diff-on-failure.md docs/analysis/concepts/rjm/toolset-definitions.md docs/analysis/concepts/rjm/editor.md docs/analysis/concepts/rjm/knowledge.md docs/analysis/concepts/rjm/github-research.md docs/analysis/concepts/rjm/github-oversight.md docs/analysis/concepts/rjm/github-code.md docs/analysis/concepts/rjm/github-cicd.md docs/analysis/concepts/rjm/github-security.md docs/analysis/concepts/rjm/research.md docs/analysis/concepts/rjm/retrieval.md docs/analysis/concepts/rjm/gates.md docs/analysis/concepts/rjm/mid.md docs/analysis/concepts/rjm/pre-pr.md docs/analysis/concepts/rjm/end.md docs/analysis/concepts/rjm/blocking-verify.md docs/analysis/concepts/rjm/skill-first.md docs/analysis/concepts/rjm/ci-feedback-sub-loop.md docs/analysis/concepts/rjm/adr-078.md docs/analysis/concepts/rjm/buy-vs-build-quick.md docs/analysis/concepts/rjm/standards.md` (exit code 0, 30 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Several toolset concepts (`editor`, `knowledge`, `github-research`, `github-oversight`, `github-code`, `github-cicd`, `github-security`, `research`) map to `.vscode/toolsets.jsonc` and `templates/README.md`, categorized as `kind: name-only` per D-023 alongside structural headings from `AGENTS.md` (`retrieval`, `gates`, `skill-first`, `standards`).
- Gate concepts from `AGENTS.md` (`mid`, `pre-pr`, `end`, `blocking-verify`) and `.github/workflows/validate-generated-agents.yml` are marked `package_phase: cross-phase` as they enforce continuous lifecycle quality and boundaries.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~29,000 tokens; approximate tokens of output written: ~8,500 tokens.
