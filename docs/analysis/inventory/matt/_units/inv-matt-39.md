---
unit: inv-matt-39
phase: 1
package: matt
session: 006
subagent_returned: complete
---

# Unit inv-matt-39

## Files assigned
- [x] sources/matt/skills/engineering/grill-with-docs/agents/openai.yaml (145 bytes, 6 lines)
- [x] sources/matt/skills/engineering/grill-with-docs/SKILL.md (247 bytes, 8 lines)
- [x] sources/matt/skills/engineering/implement/agents/openai.yaml (139 bytes, 6 lines)
- [x] sources/matt/skills/engineering/implement/SKILL.md (433 bytes, 16 lines)
- [x] sources/matt/skills/engineering/improve-codebase-architecture/agents/openai.yaml (166 bytes, 6 lines)
- [x] sources/matt/skills/engineering/improve-codebase-architecture/HTML-REPORT.md (6641 bytes, 124 lines)
- [x] sources/matt/skills/engineering/improve-codebase-architecture/SKILL.md (5993 bytes, 72 lines)
- [x] sources/matt/skills/engineering/prototype/agents/openai.yaml (100 bytes, 4 lines)
- [x] sources/matt/skills/engineering/prototype/LOGIC.md (6036 bytes, 68 lines)
- [x] sources/matt/skills/engineering/prototype/SKILL.md (2931 bytes, 27 lines)
- [x] sources/matt/skills/engineering/prototype/UI.md (6913 bytes, 113 lines)
- [x] sources/matt/skills/engineering/README.md (3840 bytes, 33 lines)

## Outputs produced
- docs/analysis/inventory/matt/skills-engineering-grill-with-docs-agents-openai-yaml.md (2385 bytes)
- docs/analysis/inventory/matt/skills-engineering-grill-with-docs-skill-md.md (3521 bytes)
- docs/analysis/inventory/matt/skills-engineering-implement-agents-openai-yaml.md (2255 bytes)
- docs/analysis/inventory/matt/skills-engineering-implement-skill-md.md (3616 bytes)
- docs/analysis/inventory/matt/skills-engineering-improve-codebase-architecture-agents-openai-yaml.md (2498 bytes)
- docs/analysis/inventory/matt/skills-engineering-improve-codebase-architecture-html-report-md.md (6461 bytes)
- docs/analysis/inventory/matt/skills-engineering-improve-codebase-architecture-skill-md.md (6379 bytes)
- docs/analysis/inventory/matt/skills-engineering-prototype-agents-openai-yaml.md (1903 bytes)
- docs/analysis/inventory/matt/skills-engineering-prototype-logic-md.md (4949 bytes)
- docs/analysis/inventory/matt/skills-engineering-prototype-skill-md.md (3825 bytes)
- docs/analysis/inventory/matt/skills-engineering-prototype-ui-md.md (4750 bytes)
- docs/analysis/inventory/matt/skills-engineering-readme-md.md (4375 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-39.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `grill-with-docs` acts as the user-invoked front door to the main build chain, pairing the `grilling` interview primitive (from `skills/productivity/grilling`) with `domain-modeling` (from unit `inv-matt-38`), writing domain vocabulary to `CONTEXT.md` and ADRs to `docs/adr/`.
- `implement` drives the core coding execution loop across the main flow (`grill-with-docs → to-spec → to-tickets → implement → code-review`), driving `tdd` (from unit `inv-matt-38`) at pre-agreed seams and evaluating changes via `code-review` before committing.
- `improve-codebase-architecture` and its companion `HTML-REPORT.md` define an exploratory workflow scanning for deepening opportunities, drawing architectural vocabulary from `codebase-design` and domain terms from `domain-modeling`. It produces standalone visual HTML reports in `$TMPDIR` using Tailwind CSS and Mermaid via CDN.
- `prototype` and its companions `LOGIC.md` and `UI.md` define the protocol for throwaway prototypes that answer design questions. Prototypes are partitioned into two branches: single-file zero-build HTML walkthroughs for logic/state, and 3-variant structurally distinct routes with floating bottom switcher bars for UI. Runnable prototypes are preserved as primary sources on throwaway git branches (`prototype/<name>`), while settled answers fold into main.
- `skills/engineering/README.md` classifies all 18 engineering skills into 9 user-invoked and 9 model-invoked skills, documenting the mechanism for restricting model invocation in Claude Code (`disable-model-invocation: true`) and Codex (`policy.allow_implicit_invocation: false`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,396 tokens (33,584 bytes across 12 files).
Approximate tokens of output written: ~12,229 tokens (48,917 bytes across 12 cards and unit report).
