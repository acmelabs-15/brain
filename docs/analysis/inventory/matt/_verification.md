# Phase 1V Inventory Verification: Package `matt`

- **Verifier:** Phase 1V Inventory Verifier (Adversarial Reviewer Contract, METHOD.md §6.4)
- **Date:** 2026-09-06
- **Sample Size:** 29 source files (~15% random sample of package `matt`, seed `1V-verification-matt`)
- **Evaluation Standard:** METHOD.md §4 checklist, §5 Phase 1V question: *"does any file contain a named concept, invocation, produced artifact, or defect that its inventory entry omits?"*

---

## 1. Executive Summary & Overall Verdict

**Overall Verdict:** **FAIL (Omissions Found)**

The adversarial verification across the 29 sampled files identified several omissions across Defects, Invocations, and Named Concepts:

1. **Critical Defect Omission**: `docs/engineering/domain-modeling.md` (Card 9) recorded `## Defects: none`, but source explicitly documents:
   - Missing repository path (`docs/agents/domain.md:50`, which does not exist in `sources/matt/`).
   - Automatic invocation failure where models load `grilling` and skip `domain-modeling` (`docs/engineering/domain-modeling.md:9-10`).
   - Runaway artifact bloat where models treat `CONTEXT.md` write permission as a license to write running specs (`docs/engineering/domain-modeling.md:44-45, 55`).
   - Inherent convention conflicts from coupling ADR and glossary guidance into a single skill (`docs/engineering/domain-modeling.md:67`).
2. **Invocation Omissions**:
   - `docs/engineering/codebase-design.md` (Card 8) omitted invocations/references to `setup-ts-deep-modules` (line 52) and `grill-with-docs` (line 56).
   - `docs/engineering/domain-modeling.md` (Card 9) omitted loaded reference `docs/agents/domain.md` (line 50).
   - `docs/productivity/teach.md` (Card 10) omitted `skill grilling` (lines 20, 97).
3. **Named Concept Omissions**:
   - Lifecycle artifacts and techniques omitted across multiple cards: `spec`, `tickets`, `PR` in `.changeset/add-implement-spec-skill.md`; `.agents/invocation.md` in `.changeset/skill-tool-invocation-terminology.md`; `build chain` and `three-dot diff` in `docs/engineering/code-review.md`; `retrieval practice`, `spacing`, and `interleaving` in `docs/productivity/teach.md`; `Time/randomness` and `File system` in `skills/engineering/tdd/mocking.md`; helper functions in `skills/engineering/wizard/` (`say`, `step`, `ask`, `pause`).
   - In `docs/engineering/domain-modeling.md`, all invoked skills (`grill-with-docs`, `wayfinder`, `codebase-design`, `triage`, `improve-codebase-architecture`, `ask-matt`) were omitted from `## Concepts named`.
4. **Structural Inconsistencies**:
   - Companion `openai.yaml` cards diverge between listing `orphan` vs parent skill under `## Invoked by`.

---

## 2. Sampled Files and Findings

| Source Path | Card Path | Verdict | Findings |
|---|---|---|---|
| `.changeset/add-implement-spec-skill.md` | `docs/analysis/inventory/matt/changeset-add-implement-spec-skill-md.md` | omission | Missing concepts: `spec` (line 5), `tickets` (line 5), `PR` (line 5), `code-review` (line 5) |
| `.changeset/fix-yaml-frontmatter-colons.md` | `docs/analysis/inventory/matt/changeset-fix-yaml-frontmatter-colons-md.md` | omission | Missing concepts: the 6 affected skills in prose, `description` frontmatter key, `npx skills` (line 5) |
| `.changeset/skill-tool-invocation-terminology.md` | `docs/analysis/inventory/matt/changeset-skill-tool-invocation-terminology-md.md` | omission | Missing concepts/invocations: `.agents/invocation.md` (line 9), `cross-skill invocation` (line 5), `harness-neutral` (line 7), `trigger syntax` (line 7) |
| `.claude-plugin/marketplace.json` | `docs/analysis/inventory/matt/claude-plugin-marketplace-json.md` | omission | Missing concepts: `Claude Code plugin` (line 7), `spec/ticket flows` (line 12), `domain modelling` (line 12) |
| `.gitignore` | `docs/analysis/inventory/matt/gitignore.md` | clean | PASS |
| `CONTEXT.md` | `docs/analysis/inventory/matt/context-md.md` | omission | Missing concepts: `issue host` (line 9), `ticket` (line 13), `implementation ticket` (line 16), `GitHub Issues` / `Linear` (line 8) |
| `docs/engineering/code-review.md` | `docs/analysis/inventory/matt/docs-engineering-code-review-md.md` | omission | Missing concepts: `build chain` (line 88), `fixed point` (lines 3, 20), `three-dot diff` (line 76) |
| `docs/engineering/codebase-design.md` | `docs/analysis/inventory/matt/docs-engineering-codebase-design-md.md` | omission | Missing invocations: `setup-ts-deep-modules` (line 52), `grill-with-docs` (line 56). Missing concepts: `interface-design` (line 60), `connascence` (line 76), `module secrets` (line 76) |
| `docs/engineering/domain-modeling.md` | `docs/analysis/inventory/matt/docs-engineering-domain-modeling-md.md` | omission | Critical defect omission: missing-path `docs/agents/domain.md:50`, invocation failure (lines 9-10), runaway glossary bloat (lines 44-45), ADR style conflict (line 67). Missing invocation: `docs/agents/domain.md`. Missing concepts: `ticket` (line 86), `ADR tests` (lines 38, 42) |
| `docs/productivity/teach.md` | `docs/analysis/inventory/matt/docs-productivity-teach-md.md` | omission | Missing invocation: `skill grilling` (lines 20, 97). Missing concepts: `retrieval practice` (line 42), `spacing` (lines 42, 74), `interleaving` (lines 42, 74), `learning-records` (lines 34, 71) |
| `docs/productivity/to-questionnaire.md` | `docs/analysis/inventory/matt/docs-productivity-to-questionnaire-md.md` | clean | PASS |
| `external/prototype.md` | `docs/analysis/inventory/matt/external-prototype-md.md` | clean | PASS |
| `external/setup-matt-pocock-skills.md` | `docs/analysis/inventory/matt/external-setup-matt-pocock-skills-md.md` | clean | PASS |
| `external/to-spec.md` | `docs/analysis/inventory/matt/external-to-spec-md.md` | clean | PASS |
| `external/triage.md` | `docs/analysis/inventory/matt/external-triage-md.md` | clean | PASS |
| `skills/engineering/diagnosing-bugs/agents/openai.yaml` | `docs/analysis/inventory/matt/skills-engineering-diagnosing-bugs-agents-openai-yaml.md` | omission | Missing concepts: `interface`, `display_name`, `short_description` |
| `skills/engineering/research/agents/openai.yaml` | `docs/analysis/inventory/matt/skills-engineering-research-agents-openai-yaml.md` | omission | Missing concepts: `interface`, `display_name`, `short_description` |
| `skills/engineering/setup-matt-pocock-skills/agents/openai.yaml` | `docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-agents-openai-yaml.md` | omission | Missing concepts: `interface`, `display_name`, `short_description`, `policy` |
| `skills/engineering/tdd/mocking.md` | `docs/analysis/inventory/matt/skills-engineering-tdd-mocking-md.md` | omission | Missing concepts: `Time/randomness` (line 7), `File system` (line 8), `generic fetchers` (line 37) |
| `skills/engineering/to-spec/agents/openai.yaml` | `docs/analysis/inventory/matt/skills-engineering-to-spec-agents-openai-yaml.md` | omission | Missing concepts: `interface`, `display_name`, `short_description`, `policy` |
| `skills/engineering/wizard/agents/openai.yaml` | `docs/analysis/inventory/matt/skills-engineering-wizard-agents-openai-yaml.md` | omission | Missing concepts: `interface`, `display_name`, `short_description` |
| `skills/engineering/wizard/SKILL.md` | `docs/analysis/inventory/matt/skills-engineering-wizard-skill-md.md` | omission | Missing concepts: helper functions `say`, `step`, `ask`, `pause` (line 35), `hidden secret entry` (line 10), `WSL` (line 10) |
| `skills/engineering/wizard/template.sh` | `docs/analysis/inventory/matt/skills-engineering-wizard-template-sh.md` | omission | Missing concepts: helper functions `note` (line 62), `warn` (line 63), browser utilities `wslview`, `xdg-open` (lines 69-72) |
| `skills/in-progress/setup-ts-deep-modules/agents/openai.yaml` | `docs/analysis/inventory/matt/skills-in-progress-setup-ts-deep-modules-agents-openai-yaml.md` | omission | Missing concepts: `interface`, `display_name`, `policy`, `deep TypeScript modules` |
| `skills/misc/migrate-to-shoehorn/agents/openai.yaml` | `docs/analysis/inventory/matt/skills-misc-migrate-to-shoehorn-agents-openai-yaml.md` | clean | PASS |
| `skills/misc/migrate-to-shoehorn/SKILL.md` | `docs/analysis/inventory/matt/skills-misc-migrate-to-shoehorn-skill-md.md` | omission | Missing concepts: `as Type` (line 65), `as unknown as Type` (line 81), `partial test data` (line 3) |
| `skills/misc/scaffold-exercises/agents/openai.yaml` | `docs/analysis/inventory/matt/skills-misc-scaffold-exercises-agents-openai-yaml.md` | clean | PASS |
| `skills/misc/setup-pre-commit/SKILL.md` | `docs/analysis/inventory/matt/skills-misc-setup-pre-commit-skill-md.md` | omission | Missing concepts: package managers `npm`, `pnpm`, `yarn`, `bun` (line 19), `npx husky init` (line 32), `smoke test` (line 85) |
| `skills/productivity/teach/agents/openai.yaml` | `docs/analysis/inventory/matt/skills-productivity-teach-agents-openai-yaml.md` | omission | Missing concepts: `Teach` (line 2), `guided workspace` (line 3) |

---

## 3. Remediation Required

Per METHOD.md §5:
- Affected units to remediate: `inv-matt-4` (`codebase-design.md`), `inv-matt-5` (`domain-modeling.md`), `inv-matt-8` (`teach.md`), `inv-matt-1` (`.changeset/`), `inv-matt-2` (`CONTEXT.md`), `inv-matt-3` (`code-review.md`), `inv-matt-24` (`wizard/`).
