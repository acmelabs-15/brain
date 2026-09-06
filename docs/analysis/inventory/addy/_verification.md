# Phase 1V Inventory Verification: Package `addy`

- **Verifier:** Phase 1V Inventory Verifier (Adversarial Reviewer Contract, METHOD.md §6.4)
- **Date:** 2026-09-06
- **Sample Size:** 33 source files (~15% random sample of package `addy`, seed `1V-verification-addy`)
- **Evaluation Standard:** METHOD.md §4 checklist, §5 Phase 1V question: *"does any file contain a named concept, invocation, produced artifact, or defect that its inventory entry omits?"*

---

## 1. Executive Summary & Overall Verdict

**Overall Verdict:** **FAIL (Omissions Found)**

The adversarial verification pass across the 33 sampled files revealed that while core extraction fidelity is high (all frontmatter, byte-exact citations, and design intent are well-formed), several inventory cards omitted named concepts, invocations, and defects present in the source files:

1. **Critical Defect Omission:** `hooks/session-start.sh` reported `none` under `## Defects`, omitting the failing regression test `hooks/session-start-test.sh` (crashes with exit code 1 on the default branch due to missing `priority` and `message` envelope fields).
2. **Invocation Inconsistency & Omissions:**
   - `commands/ship.toml` explicitly instructs invoking the accessibility checklist (`commands/ship.toml:34`), but omits `reference accessibility-checklist` from `## Invokes`.
   - External documentation cards (`external/documentation-and-adrs.md`, `external/shipping-and-launch.md`, `external/source-driven-development.md`) recorded `## Invokes` as `none`, omitting the respective commands (`/ship`, `/build`), skills, and `SKILL.md` links.
   - Eval case cards (`evals/cases/incremental-implementation.json`, `evals/cases/test-driven-development.json`) recorded `## Invokes` as `none`, omitting negative trigger owner skills.
3. **Named Concept Omissions:**
   - Process gates and guarantees: `human gate` (`commands/build.toml:33`), `clean-rollback guarantee` (`commands/build.toml:31`), `Phase 0` (`.gemini/commands/spec.toml:14`).
   - Slicing and testing concepts: `Slice work vertically` (`commands/planning.toml:10`), `verification steps` and `human review` (`.gemini/commands/planning.toml:11, 13`), `test-first` and `fairness invariant` (`evals/cases/test-driven-development.json:33, 59`), `Using test.skip permanently` (`references/testing-patterns.md:233`).
   - Eval fixture taxonomy: `time pressure`, `sunk cost`, `authority pressure`, `Discipline skills` (`evals/README.md:38`).
   - Security techniques: `Threat Modeling` (`references/security-checklist.md:7, 21`), `IDOR` (`references/security-checklist.md:49`), `SSRF` (`references/security-checklist.md:65, 188`), `installation boundary` (`references/security-checklist.md:104`).
   - Five-axis & standards: `five-axis review` (`commands/ship.toml:14`), `OWASP Top 10` (`commands/ship.toml:15`), `Core Web Vitals` (`commands/ship.toml:33`), `Common Rationalizations` & `Red Flags` (`CONTRIBUTING.md:49, 50`).
4. **Cross-file Defect Propagation:** `skills/using-agent-skills/SKILL.md` omitted the cross-file contradiction defect regarding whether TDD belongs to `Build` (README/CLAUDE) or `Verify` (using-agent-skills:180).

---

## 2. Sampled Files and Findings

| Source Path | Card Path | Verdict | Findings |
|---|---|---|---|
| `.claude/commands/review.md` | `docs/analysis/inventory/addy/claude-commands-review-md.md` | clean | Core items complete; minor namespace asymmetry noted |
| `.claude/commands/webperf.md` | `docs/analysis/inventory/addy/claude-commands-webperf-md.md` | clean | PASS |
| `.gemini/commands/planning.toml` | `docs/analysis/inventory/addy/gemini-commands-planning-toml.md` | omission | Missing concepts: `verification steps` (.gemini/commands/planning.toml:11), `human review` (.gemini/commands/planning.toml:13) |
| `.gemini/commands/spec.toml` | `docs/analysis/inventory/addy/gemini-commands-spec-toml.md` | omission | Missing concept: `Phase 0` (.gemini/commands/spec.toml:14) |
| `commands/build.toml` | `docs/analysis/inventory/addy/commands-build-toml.md` | omission | Missing concepts: `human gate` (line 33), `clean-rollback guarantee` (line 31), `acceptance criteria` (line 17), `autonomous mode` (line 11) |
| `commands/planning.toml` | `docs/analysis/inventory/addy/commands-planning-toml.md` | omission | Missing concept: `Slice work vertically` (commands/planning.toml:10) |
| `commands/ship.toml` | `docs/analysis/inventory/addy/commands-ship-toml.md` | omission | Missing invocation: `reference accessibility-checklist` (line 34). Missing concepts: `accessibility checklist` (line 34), `five-axis review` (line 14), `OWASP Top 10` (line 15), `Core Web Vitals` (line 33) |
| `CONTRIBUTING.md` | `docs/analysis/inventory/addy/contributing-md.md` | omission | Missing concepts: `Common Rationalizations` (line 49), `Red Flags` (line 50), `positive triggers` / `negative triggers` (line 42), `behavioral eval` / `execution evals` (line 42), `no-jq fallback` (line 92) |
| `docs/codex-setup.md` | `docs/analysis/inventory/addy/docs-codex-setup-md.md` | clean | PASS |
| `docs/cursor-setup.md` | `docs/analysis/inventory/addy/docs-cursor-setup-md.md` | clean | PASS |
| `docs/skill-anatomy.md` | `docs/analysis/inventory/addy/docs-skill-anatomy-md.md` | clean | PASS |
| `evals/cases/constraint-driven-development.json` | `docs/analysis/inventory/addy/evals-cases-constraint-driven-development-json.md` | clean | PASS |
| `evals/cases/incremental-implementation.json` | `docs/analysis/inventory/addy/evals-cases-incremental-implementation-json.md` | omission | Missing invocations: negative trigger owner skills `observability-and-instrumentation` (line 21), `interview-me` (line 25) |
| `evals/cases/test-driven-development.json` | `docs/analysis/inventory/addy/evals-cases-test-driven-development-json.md` | omission | Missing invocations: negative trigger owner skills `documentation-and-adrs` (line 21), `using-agent-skills` (line 25). Missing concepts: `test-first` (line 59), `fairness invariant` (lines 33, 39) |
| `evals/fixtures/documentation-and-adrs/decision-context.md` | `docs/analysis/inventory/addy/evals-fixtures-documentation-and-adrs-decision-context-md.md` | clean | PASS |
| `evals/fixtures/frontend-ui-engineering/design-system.md` | `docs/analysis/inventory/addy/evals-fixtures-frontend-ui-engineering-design-system-md.md` | clean | PASS |
| `evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch` | `docs/analysis/inventory/addy/evals-fixtures-git-workflow-and-versioning--eval-working-tree-patch.md` | clean | PASS |
| `evals/fixtures/observability-and-instrumentation/payment-retry.js` | `docs/analysis/inventory/addy/evals-fixtures-observability-and-instrumentation-payment-retry-js.md` | clean | PASS |
| `evals/fixtures/shipping-and-launch/authority-pressure.md` | `docs/analysis/inventory/addy/evals-fixtures-shipping-and-launch-authority-pressure-md.md` | clean | PASS |
| `evals/fixtures/test-driven-development-ecosystem/ledger.py` | `docs/analysis/inventory/addy/evals-fixtures-test-driven-development-ecosystem-ledger-py.md` | clean | PASS |
| `evals/README.md` | `docs/analysis/inventory/addy/evals-readme-md.md` | omission | Missing concepts: `time pressure` (line 38), `sunk cost` (line 38), `authority pressure` (line 38), `Discipline skills` (line 38), `skill-creator` (line 9), `collision check` (line 86) |
| `external/browser-testing-with-devtools.md` | `docs/analysis/inventory/addy/external-browser-testing-with-devtools-md.md` | clean | PASS |
| `external/documentation-and-adrs.md` | `docs/analysis/inventory/addy/external-documentation-and-adrs-md.md` | omission | Missing invocations: command `/ship` (line 12), file `skills/documentation-and-adrs/SKILL.md` (line 10), skills `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration` (line 12) |
| `external/doubt-driven-development.md` | `docs/analysis/inventory/addy/external-doubt-driven-development-md.md` | clean | PASS |
| `external/shipping-and-launch.md` | `docs/analysis/inventory/addy/external-shipping-and-launch-md.md` | omission | Missing invocations: command `/ship` (lines 5, 12), file `skills/shipping-and-launch/SKILL.md` (line 10), skills `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration` (line 12) |
| `external/source-driven-development.md` | `docs/analysis/inventory/addy/external-source-driven-development-md.md` | omission | Missing invocations: command `/build` (line 12), file `skills/source-driven-development/SKILL.md` (line 10), skills `incremental-implementation`, `test-driven-development`, `context-engineering` (line 12) |
| `hooks/session-start.sh` | `docs/analysis/inventory/addy/hooks-session-start-sh.md` | omission | Missing defect: `script-bug` / `doc-drift` — regression test `hooks/session-start-test.sh` exits 1 on default branch (`Error: expected IMPORTANT priority, got undefined`) due to missing `priority` and `message` envelope fields in `session-start.sh` |
| `LICENSE` | `docs/analysis/inventory/addy/license.md` | clean | PASS |
| `references/security-checklist.md` | `docs/analysis/inventory/addy/references-security-checklist-md.md` | omission | Missing concepts: `Threat Modeling` (lines 7, 21), `IDOR` (line 49), `SSRF` (lines 65, 188), `installation boundary` (line 104) |
| `references/testing-patterns.md` | `docs/analysis/inventory/addy/references-testing-patterns-md.md` | omission | Missing concept: `Using test.skip permanently` (line 233) |
| `skills/context-engineering/SKILL.md` | `docs/analysis/inventory/addy/skills-context-engineering-skill-md.md` | clean | PASS |
| `skills/test-driven-development/SKILL.md` | `docs/analysis/inventory/addy/skills-test-driven-development-skill-md.md` | clean | PASS |
| `skills/using-agent-skills/SKILL.md` | `docs/analysis/inventory/addy/skills-using-agent-skills-skill-md.md` | omission | Missing defect: `cross-file-contradiction` — line 180 places TDD under `Verify`, directly contradicting `README.md:363` and `CLAUDE.md:23` (which place it under `Build`) |

---

## 3. Remediation Required

Per METHOD.md §5:
- Affected units to remediate: `inv-addy-2`, `inv-addy-3`, `inv-addy-4`, `inv-addy-7`, `inv-addy-8`, `inv-addy-12`, `inv-addy-19`, `inv-addy-29`, `inv-addy-30`, `inv-addy-33`, `inv-addy-35`, `inv-addy-36`, `inv-addy-46`.
