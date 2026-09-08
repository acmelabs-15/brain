# Concordance — Gates

This document establishes the structural and detailed concordance for all **gate** concepts across the three source packages: `addy` (Addy Osmani), `matt` (Matt Pocock), and `rjm` (RJ Murillo).

Per METHOD.md §5 and §9, this concordance maps every verification check, entry/exit criterion, definition of done, invariant guard, hook constraint, and decision gate into an aligned, rigorous taxonomy.

---

## Structural Overview — Comparative Gates Landscape across the Three Packages

Gates represent the mandatory quality, safety, and boundary checks that evaluate whether an agent, task, or codebase satisfies required conditions before progressing across lifecycle stages. Across the three source repositories, gating philosophies reflect distinct engineering paradigms:

1. **Addy (`agent-skills`) — Pragmatic Quality Ratchets and Operational Safeguards:** Addy implements gates as actionable checkpoints and ratchets (*the Stop-the-Line Rule*, *Rank-1 ratchet*, *Never Fabricate Metrics*, *Clean Console Standard*, *Pre-Commit Checks*, *Performance Budgets*). Addy gates prioritize operational sanity, preventing regressions, enforcing browser content safety, and verifying dual-target parity between Claude Code and Gemini standards.

2. **Matt (`skills`) — Dialogue-Driven Confirmation and Red-Green Verification:** Matt frames gates around explicit conversational confirmation (*confirmation gate*, *ask first*, *human checkpoint*) and clean test disciplines (*red before green*, *tests through entry points*, *three tests*, *no circular dependencies*). Gates in Matt are lightweight, transparent, and designed to prevent cognitive and architectural drift without heavy procedural overhead.

3. **RJM (`ai-agents`) — Governed Pipeline Passes and Automated Verifiers:** RJM enforces an extensive array of formal pipeline gates (*quality gate*, *verification gate*, *PIV verdict gate*, *pre-flight validation*, *commit-count blocks*, *structural guards*, *push-time guards*). Gates in RJM operate as non-negotiable assertions executed by specialized subagents (Reviewer, Auditor, Critic) to ensure strict adherence to ADRs, platform envelopes, and zero-defect release criteria.

### Summary of Gates Concordance by Class

Total concordance rows: **841** mapping **866** concept cards across 10 logical sections.

| Class | Meaning | Count |
|---|---|---|
| `ALIGNED` | Same concept, same name (or trivially equivalent), compatible definition | 17 |
| `SYNONYM` | Same concept, different names across packages | 7 |
| `HOMONYM` | Same name, different concepts | 0 |
| `PARTIAL` | Overlapping but not identical concepts | 0 |
| `UNIQUE` | Present in one package only | 817 |
| `CONFLICT` | Incompatible definitions or sequencing | 0 |

---

## Concordance Rows

## 1. Requirements, Scope & Specification Gates

### definition-of-done

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Definition of done` | `Definition of Done` |
| **card** | — | [definition-of-done](../concepts/matt/definition-of-done.md) | [definition-of-done](../concepts/rjm/definition-of-done.md) |
| **kind** | — | gate | gate |
| **phase** | — | `matt:in-progress` | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** ALIGNED
- **difference:** none material. Both Matt and RJM define explicit Definition of Done checklists that govern completion before task handoff or phase exit.
- **sequencing note:** Applied at task exit and pull request completion.
- **needs decision:** no
- **decision:** —

### human-checkpoint

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `human checkpoint` | `human checkpoint` | — |
| **card** | [human-checkpoint](../concepts/addy/human-checkpoint.md) | [human-checkpoint](../concepts/matt/human-checkpoint.md) | — |
| **kind** | gate | gate | — |
| **phase** | `cross-phase` | `matt:diagnosing-bugs` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | — |

- **class:** ALIGNED
- **difference:** none material. Both Addy and Matt require explicit human approval gates before executing high-impact, destructive, or ambiguous operations.
- **sequencing note:** Invoked during specification discovery and before irreversible code modifications.
- **needs decision:** no
- **decision:** —

### ask-first-confirmation-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Ask First` | `confirmation gate` | `Ask First` |
| **card** | [ask-first](../concepts/addy/ask-first.md) | [confirmation-gate](../concepts/matt/confirmation-gate.md) | [ask-first](../concepts/rjm/ask-first.md) |
| **kind** | gate | gate | gate |
| **phase** | `addy:Review` | `matt:grilling` | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | clean |

- **class:** SYNONYM
- **difference:** Addy and RJM name this Ask First; Matt names it confirmation gate. All three enforce the rule that autonomous agents must seek explicit confirmation before modifying critical project assets or resolving ambiguities.
- **sequencing note:** Triggered during requirements gathering, design decisions, and destructive actions.
- **needs decision:** yes
- **decision:** —

### checkpoint

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Checkpoint` | `Checkpoint` | — |
| **card** | [checkpoint](../concepts/addy/checkpoint.md) | [checkpoint](../concepts/matt/checkpoint.md) | — |
| **kind** | gate | gate | — |
| **phase** | `addy:Plan` | `matt:in-progress` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | — |

- **class:** ALIGNED
- **difference:** none material. Both packages define checkpoints as intermediate synchronization points where work-in-progress is validated before proceeding.
- **sequencing note:** Placed at subtask and milestone boundaries.
- **needs decision:** no
- **decision:** —

### gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `gates` | `gates` | — |
| **card** | [gates](../concepts/addy/gates.md) | [gates](../concepts/matt/gates.md) | — |
| **kind** | gate | gate | — |
| **phase** | `addy:Review` | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | — |

- **class:** ALIGNED
- **difference:** none material. Both packages define gates as mandatory criteria that must evaluate to true before an agent transitions between lifecycle phases.
- **sequencing note:** Phase boundary control points throughout the lifecycle.
- **needs decision:** no
- **decision:** —

### gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `gate` | `gate` |
| **card** | — | [gate](../concepts/matt/gate.md) | [gate](../concepts/rjm/gate.md) |
| **kind** | — | gate | gate |
| **phase** | — | `matt:productivity` | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** ALIGNED
- **difference:** none material. Both Matt and RJM define a singular gate as an evaluative checkpoint that halts progression upon failure.
- **sequencing note:** Enforced across phase transitions.
- **needs decision:** no
- **decision:** —

### blocked-state

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `blocked` | `BLOCKED` |
| **card** | — | [blocked](../concepts/matt/blocked.md) | [blocked](../concepts/rjm/blocked.md) |
| **kind** | — | gate | gate |
| **phase** | — | `cross-phase` | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** ALIGNED
- **difference:** none material. Both packages define BLOCKED as an execution state indicating an unresolved dependency, missing permission, or unsatisfied prerequisite.
- **sequencing note:** State assigned to units or tickets waiting on external inputs.
- **needs decision:** no
- **decision:** —

### block-action

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `block` | `BLOCK` |
| **card** | — | [block](../concepts/matt/block.md) | [block](../concepts/rjm/block.md) |
| **kind** | — | gate | gate |
| **phase** | — | `cross-phase` | `rjm:Review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** ALIGNED
- **difference:** none material. Both packages define the action of blocking downstream execution when a required invariant fails.
- **sequencing note:** Triggered upon gate failure.
- **needs decision:** no
- **decision:** —

### speculative-filter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Speculative` | `speculative` |
| **card** | — | [speculative](../concepts/matt/speculative.md) | [speculative](../concepts/rjm/speculative.md) |
| **kind** | — | gate | gate |
| **phase** | — | `matt:engineering` | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** ALIGNED
- **difference:** none material. Both packages flag speculative or premature additions and reject them unless justified by concrete requirements.
- **sequencing note:** Applied during specification and planning.
- **needs decision:** no
- **decision:** —

### completion-criteria-quality-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Completion criteria` | `Quality Gate` |
| **card** | — | [completion-criteria](../concepts/matt/completion-criteria.md) | [quality-gate](../concepts/rjm/quality-gate.md) |
| **kind** | — | gate | gate |
| **phase** | — | `matt:Productivity` | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** SYNONYM
- **difference:** Matt defines completion criteria as the concrete, observable proof that a task's objective is satisfied; RJM operationalizes quality gates to verify completion.
- **sequencing note:** Defined in planning; verified at task exit.
- **needs decision:** yes
- **decision:** —

### addy-check-task

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `check:task` | — | — |
| **card** | [check-task](../concepts/addy/check-task.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/SKILL.md:182. Enforces `check:task` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-checkpoints

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `checkpoints` | — | — |
| **card** | [checkpoints](../concepts/addy/checkpoints.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Plan` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in .gemini/commands/planning.toml:12. Enforces `checkpoints` gate.
- **sequencing note:** Enforced in addy phase `addy:Plan`.
- **needs decision:** no
- **decision:** —

### matt-confirmation-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `confirmation gates` | — |
| **card** | — | [confirmation-gates](../concepts/matt/confirmation-gates.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in external/wizard.md:30. Enforces `confirmation gates` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-confirm

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `confirm` | — |
| **card** | — | [confirm](../concepts/matt/confirm.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/engineering/wizard/template.sh:83. Enforces `confirm` gate.
- **sequencing note:** Enforced in matt phase `matt:engineering`.
- **needs decision:** no
- **decision:** —

### matt-unblocked

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `unblocked` | — |
| **card** | — | [unblocked](../concepts/matt/unblocked.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/engineering/wayfinder/SKILL.md:69. Enforces `unblocked` gate.
- **sequencing note:** Enforced in matt phase `matt:engineering`.
- **needs decision:** no
- **decision:** —

### rjm-attainable

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Attainable` |
| **card** | — | — | [attainable](../concepts/rjm/attainable.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/retrospective/references/diagnosis-and-actions.md:154. Enforces `Attainable` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-blocking

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `BLOCKING` |
| **card** | — | — | [blocking](../concepts/rjm/blocking.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-011-session-state-mcp.md:27. Enforces `BLOCKING` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-activation-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `activation gate` |
| **card** | — | — | [activation-gate](../concepts/rjm/activation-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/software_engineering_library_activation_ci.py:2. Enforces `activation gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-commit-count-block

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `commit-count block` |
| **card** | — | — | [commit-count-block](../concepts/rjm/commit-count-block.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:12. Enforces `commit-count block` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-kill-criteria-for-the-gate-itself

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Kill criteria for the gate itself` |
| **card** | — | — | [kill-criteria-for-the-gate-itself](../concepts/rjm/kill-criteria-for-the-gate-itself.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-step0-gates.md:131. Enforces `Kill criteria for the gate itself` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-quality-gates-automatic

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quality Gates (Automatic)` |
| **card** | — | — | [quality-gates-automatic](../concepts/rjm/quality-gates-automatic.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/slashcommandcreator/SKILL.md:144. Enforces `Quality Gates (Automatic)` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-start-definition-of-ready

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `START Definition of Ready` |
| **card** | — | — | [start-definition-of-ready](../concepts/rjm/start-definition-of-ready.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/adr-generator/SKILL.md:74. Enforces `START Definition of Ready` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-fast-stage-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `fast-stage gate` |
| **card** | — | — | [fast-stage-gate](../concepts/rjm/fast-stage-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:60. Enforces `fast-stage gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-retrospective-policy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `retrospective-policy` |
| **card** | — | — | [retrospective-policy](../concepts/rjm/retrospective-policy.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-033-routing-level-enforcement-gates.md:493. Enforces `retrospective-policy` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-good

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Good` |
| **card** | — | — | [good](../concepts/rjm/good.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/retrospective/scripts/score_atomicity.py:25. Enforces `Good` gate.
- **sequencing note:** Enforced in rjm phase `rjm:retrospective`.
- **needs decision:** no
- **decision:** —

### rjm-spec-contradiction-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Spec Contradiction Check` |
| **card** | — | — | [spec-contradiction-check](../concepts/rjm/spec-contradiction-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:343. Enforces `Spec Contradiction Check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-capability-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Capability Gate` |
| **card** | — | — | [capability-gate](../concepts/rjm/capability-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-methodology/SKILL.md:129. Enforces `Capability Gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:research`.
- **needs decision:** no
- **decision:** —

### rjm-documentation-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Documentation Gate` |
| **card** | — | — | [documentation-gate](../concepts/rjm/documentation-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/SKILL-PHASE-GATES.md:82. Enforces `Documentation Gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-memory-first-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Memory-First Gate` |
| **card** | — | — | [memory-first-gate](../concepts/rjm/memory-first-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/spec.md:37. Enforces `Memory-First Gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Spec`.
- **needs decision:** no
- **decision:** —

### rjm-demand-reality-drift

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Demand Reality drift` |
| **card** | — | — | [demand-reality-drift](../concepts/rjm/demand-reality-drift.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:128. Enforces `Demand Reality drift` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-aggregate-guard-status

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `aggregate guard status` |
| **card** | — | — | [aggregate-guard-status](../concepts/rjm/aggregate-guard-status.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/scripts/assert_guard_jobs_succeeded.py:2. Enforces `aggregate guard status` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-hard-block

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Hard block` |
| **card** | — | — | [hard-block](../concepts/rjm/hard-block.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:207. Enforces `Hard block` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-calibration-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `calibration gate` |
| **card** | — | — | [calibration-gate](../concepts/rjm/calibration-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-frontier/SKILL.md:239. Enforces `calibration gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-first-principles-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `First Principles Gate` |
| **card** | — | — | [first-principles-gate](../concepts/rjm/first-principles-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/spec.md:16. Enforces `First Principles Gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-specification-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Specification Validation` |
| **card** | — | — | [specification-validation](../concepts/rjm/specification-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/phase2-specification-deep-dive.md:56. Enforces `Specification Validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-success-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Success Criteria` |
| **card** | — | — | [success-criteria](../concepts/rjm/success-criteria.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/codeql-rollout-checklist.md:298. Enforces `Success Criteria` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-phase-0-execution-capability-precondition-blocking

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 0: Execution Capability Precondition (BLOCKING)` |
| **card** | — | — | [phase-0-execution-capability-precondition-blocking](../concepts/rjm/phase-0-execution-capability-precondition-blocking.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:executor` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/merge-resolver.shared.md:38. Enforces `Phase 0: Execution Capability Precondition (BLOCKING)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:executor`.
- **needs decision:** no
- **decision:** —

### rjm-step-0-first-principles-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Step 0 First Principles Gate` |
| **card** | — | — | [step-0-first-principles-gate](../concepts/rjm/step-0-first-principles-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:22. Enforces `Step 0 First Principles Gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-desperate-specificity-drift

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Desperate Specificity drift` |
| **card** | — | — | [desperate-specificity-drift](../concepts/rjm/desperate-specificity-drift.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:132. Enforces `Desperate Specificity drift` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-needs-work

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Needs Work` |
| **card** | — | — | [needs-work](../concepts/rjm/needs-work.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/retrospective/scripts/score_atomicity.py:26. Enforces `Needs Work` gate.
- **sequencing note:** Enforced in rjm phase `rjm:retrospective`.
- **needs decision:** no
- **decision:** —

### rjm-skillforge-quality-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SkillForge Quality Gates` |
| **card** | — | — | [skillforge-quality-gates](../concepts/rjm/skillforge-quality-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/SKILL-CREATION-CRITERIA.md:101. Enforces `SkillForge Quality Gates` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-completion-checkpoint

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Completion Checkpoint` |
| **card** | — | — | [completion-checkpoint](../concepts/rjm/completion-checkpoint.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/prompt-engineer/references/workflow.md:345. Enforces `Completion Checkpoint` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-read-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Read gate` |
| **card** | — | — | [read-gate](../concepts/rjm/read-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:192. Enforces `Read gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-ontology-trace

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Ontology Trace` |
| **card** | — | — | [ontology-trace](../concepts/rjm/ontology-trace.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-schemas.md:134. Enforces `Ontology Trace` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-repo-health-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `repo-health gate` |
| **card** | — | — | [repo-health-gate](../concepts/rjm/repo-health-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/check_repo_health_report.py:1. Enforces `repo-health gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-reintroduction-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reintroduction gates` |
| **card** | — | — | [reintroduction-gates](../concepts/rjm/reintroduction-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:517. Enforces `Reintroduction gates` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-no-orphan-requirements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `No Orphan Requirements` |
| **card** | — | — | [no-orphan-requirements](../concepts/rjm/no-orphan-requirements.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-schemas.md:425. Enforces `No Orphan Requirements` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-kill-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `KILL GATE` |
| **card** | — | — | [kill-gate](../concepts/rjm/kill-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-knowledge-integration.py:737. Enforces `KILL GATE` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-blocking-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `BLOCKING gate` |
| **card** | — | — | [blocking-gate](../concepts/rjm/blocking-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/security.shared.md:341. Enforces `BLOCKING gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-confirmation-tier

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `confirmation tier` |
| **card** | — | — | [confirmation-tier](../concepts/rjm/confirmation-tier.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/security-scan/references/agent-guardrails-template.md:24. Enforces `confirmation tier` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-excellent

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Excellent` |
| **card** | — | — | [excellent](../concepts/rjm/excellent.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/retrospective/scripts/score_atomicity.py:24. Enforces `Excellent` gate.
- **sequencing note:** Enforced in rjm phase `rjm:retrospective`.
- **needs decision:** no
- **decision:** —

### rjm-routing-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Routing gate` |
| **card** | — | — | [routing-gate](../concepts/rjm/routing-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/check_shipped_skill_routes.py:14. Enforces `Routing gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-red-line-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Red line criteria` |
| **card** | — | — | [red-line-criteria](../concepts/rjm/red-line-criteria.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:100. Enforces `Red line criteria` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-requirements-traceability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Requirements Traceability` |
| **card** | — | — | [requirements-traceability](../concepts/rjm/requirements-traceability.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/scripts/generate_spec_report.py:184. Enforces `Requirements Traceability` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-termination-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Termination criteria` |
| **card** | — | — | [termination-criteria](../concepts/rjm/termination-criteria.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:49. Enforces `Termination criteria` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pre-pr-validation-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-PR Validation Gates` |
| **card** | — | — | [pre-pr-validation-gates](../concepts/rjm/pre-pr-validation-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-049-pre-pr-validation-gates.md:12. Enforces `Pre-PR Validation Gates` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-dependency-scrutiny

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Dependency scrutiny` |
| **card** | — | — | [dependency-scrutiny](../concepts/rjm/dependency-scrutiny.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-prior-art-schema.md:189. Enforces `Dependency scrutiny` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-flakiness-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `flakiness gate` |
| **card** | — | — | [flakiness-gate](../concepts/rjm/flakiness-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:154. Enforces `flakiness gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gate-enforcement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Gate Enforcement` |
| **card** | — | — | [gate-enforcement](../concepts/rjm/gate-enforcement.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/code-qualities-assessment/SKILL.md:101. Enforces `Gate Enforcement` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-implementation-completeness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Implementation Completeness` |
| **card** | — | — | [implementation-completeness](../concepts/rjm/implementation-completeness.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/scripts/generate_spec_report.py:185. Enforces `Implementation Completeness` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-graduated-read-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Graduated Read gate` |
| **card** | — | — | [graduated-read-gate](../concepts/rjm/graduated-read-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:195. Enforces `Graduated Read gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-search-before-claiming

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Search before claiming` |
| **card** | — | — | [search-before-claiming](../concepts/rjm/search-before-claiming.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/analyst.md:65. Enforces `Search before claiming` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-overlay-decision-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `overlay decision gate` |
| **card** | — | — | [overlay-decision-gate](../concepts/rjm/overlay-decision-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:20. Enforces `overlay decision gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-blocking-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Blocking Gates` |
| **card** | — | — | [blocking-gates](../concepts/rjm/blocking-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/dx-review/SKILL.md:227. Enforces `Blocking Gates` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-completion-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Completion Gate` |
| **card** | — | — | [completion-gate](../concepts/rjm/completion-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/orchestrator.md:216. Enforces `Completion Gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-serena-worktree-scope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `serena_worktree_scope` |
| **card** | — | — | [serena-worktree-scope](../concepts/rjm/serena-worktree-scope.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:105. Enforces `serena_worktree_scope` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-drift-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `drift gate` |
| **card** | — | — | [drift-gate](../concepts/rjm/drift-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-change-control/SKILL.md:15. Enforces `drift gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-evidence-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evidence Gate` |
| **card** | — | — | [evidence-gate](../concepts/rjm/evidence-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/SKILL-PHASE-GATES.md:13. Enforces `Evidence Gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-binary-drift-checks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `binary drift checks` |
| **card** | — | — | [binary-drift-checks](../concepts/rjm/binary-drift-checks.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-prior-art-schema.md:299. Enforces `binary drift checks` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-escalation-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Escalation Criteria` |
| **card** | — | — | [escalation-criteria](../concepts/rjm/escalation-criteria.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/cynefin-classifier/SKILL.md:270. Enforces `Escalation Criteria` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-portability-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `portability gate` |
| **card** | — | — | [portability-gate](../concepts/rjm/portability-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:73. Enforces `portability gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-critic-pre-mortem

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `critic pre-mortem` |
| **card** | — | — | [critic-pre-mortem](../concepts/rjm/critic-pre-mortem.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:124. Enforces `critic pre-mortem` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-ears-compliance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `EARS Compliance` |
| **card** | — | — | [ears-compliance](../concepts/rjm/ears-compliance.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-schemas.md:133. Enforces `EARS Compliance` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-pre-pr-validation-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-PR Validation Gate` |
| **card** | — | — | [pre-pr-validation-gate](../concepts/rjm/pre-pr-validation-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:implement` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/implementer.md:754. Enforces `Pre-PR Validation Gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:implement`.
- **needs decision:** no
- **decision:** —

### rjm-phase-1-5-blocking-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1.5 BLOCKING gate` |
| **card** | — | — | [phase-1-5-blocking-gate](../concepts/rjm/phase-1-5-blocking-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/AGENTS.md:211. Enforces `Phase 1.5 BLOCKING gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-aspirational

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `aspirational` |
| **card** | — | — | [aspirational](../concepts/rjm/aspirational.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:81. Enforces `aspirational` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-phase-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase gates` |
| **card** | — | — | [phase-gates](../concepts/rjm/phase-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/SKILL-PHASE-GATES.md:5. Enforces `Phase gates` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gate-passed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Gate passed` |
| **card** | — | — | [gate-passed](../concepts/rjm/gate-passed.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/code-qualities-assessment/scripts/assess.py:18. Enforces `Gate passed` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-debate-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `debate gate` |
| **card** | — | — | [debate-gate](../concepts/rjm/debate-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-frontier/SKILL.md:76. Enforces `debate gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-phase-1-5

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1.5` |
| **card** | — | — | [phase-1-5](../concepts/rjm/phase-1-5.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/analysis/002-project-constraints-consolidation.md:206. Enforces `Phase 1.5` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Spec`.
- **needs decision:** no
- **decision:** —

### rjm-backward-traceability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Backward Traceability` |
| **card** | — | — | [backward-traceability](../concepts/rjm/backward-traceability.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-schemas.md:427. Enforces `Backward Traceability` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-pr-time-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR-time gate` |
| **card** | — | — | [pr-time-gate](../concepts/rjm/pr-time-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-091-post-merge-version-bot.md:127. Enforces `PR-time gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-validate-if-present-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate-if-present gate` |
| **card** | — | — | [validate-if-present-gate](../concepts/rjm/validate-if-present-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/rules/session-logs.md:32. Enforces `validate-if-present gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-schema-compliance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Schema Compliance` |
| **card** | — | — | [schema-compliance](../concepts/rjm/schema-compliance.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/SKILL.md:27. Enforces `Schema Compliance` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-serena-memory-scope-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `serena_memory_scope_guard` |
| **card** | — | — | [serena-memory-scope-guard](../concepts/rjm/serena-memory-scope-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:51. Enforces `serena_memory_scope_guard` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-ai-spec-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ai-spec-validation` |
| **card** | — | — | [ai-spec-validation](../concepts/rjm/ai-spec-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/scripts/extract_incremental_scope.py:4. Enforces `ai-spec-validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-decision-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decision Criteria` |
| **card** | — | — | [decision-criteria](../concepts/rjm/decision-criteria.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/agent-consolidation-process.md:106. Enforces `Decision Criteria` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gate-1-source-identity-first

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Gate 1: Source identity first` |
| **card** | — | — | [gate-1-source-identity-first](../concepts/rjm/gate-1-source-identity-first.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/external-skill-source-adaptation.md:19. Enforces `Gate 1: Source identity first` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-spec-acceptance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Spec / acceptance` |
| **card** | — | — | [spec-acceptance](../concepts/rjm/spec-acceptance.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/design/external-signal-gating.md:36. Enforces `Spec / acceptance` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-phase-4-final-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4: Final gate` |
| **card** | — | — | [phase-4-final-gate](../concepts/rjm/phase-4-final-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/autoplan/SKILL.md:176. Enforces `Phase 4: Final gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-narrowest-wedge-drift

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Narrowest Wedge drift` |
| **card** | — | — | [narrowest-wedge-drift](../concepts/rjm/narrowest-wedge-drift.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:136. Enforces `Narrowest Wedge drift` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-ask-before-vs-proceed-with-default

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Ask Before vs Proceed With Default` |
| **card** | — | — | [ask-before-vs-proceed-with-default](../concepts/rjm/ask-before-vs-proceed-with-default.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/architect.shared.md:82. Enforces `Ask Before vs Proceed With Default` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-step-0-gate-logic

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Step 0 gate logic` |
| **card** | — | — | [step-0-gate-logic](../concepts/rjm/step-0-gate-logic.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-step0-gates.md:1. Enforces `Step 0 gate logic` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-halt-triggers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Halt Triggers` |
| **card** | — | — | [halt-triggers](../concepts/rjm/halt-triggers.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:212. Enforces `Halt Triggers` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-automated-quality-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Automated Quality Gates` |
| **card** | — | — | [automated-quality-gates](../concepts/rjm/automated-quality-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in CONTRIBUTING.md:726. Enforces `Automated Quality Gates` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-operating-model-drift

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Operating-model drift` |
| **card** | — | — | [operating-model-drift](../concepts/rjm/operating-model-drift.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/spec.md:135. Enforces `Operating-model drift` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-step-4-provenance-and-dependency-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Step 4 provenance and dependency gates` |
| **card** | — | — | [step-4-provenance-and-dependency-gates](../concepts/rjm/step-4-provenance-and-dependency-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-prior-art-schema.md:184. Enforces `Step 4 provenance and dependency gates` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-exit-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exit Criteria` |
| **card** | — | — | [exit-criteria](../concepts/rjm/exit-criteria.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/milestone-planner.md:51. Enforces `Exit Criteria` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-constraint-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `constraint validation` |
| **card** | — | — | [constraint-validation](../concepts/rjm/constraint-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/analysis/002-project-constraints-consolidation.md:25. Enforces `constraint validation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Spec`.
- **needs decision:** no
- **decision:** —

### rjm-force-push-safety-sha-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Force-Push Safety SHA gate` |
| **card** | — | — | [force-push-safety-sha-gate](../concepts/rjm/force-push-safety-sha-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:28. Enforces `Force-Push Safety SHA gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pr-identity-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR identity gate` |
| **card** | — | — | [pr-identity-gate](../concepts/rjm/pr-identity-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/analyst.md:139. Enforces `PR identity gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-step-0-5-halt-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Step 0.5 halt criteria` |
| **card** | — | — | [step-0-5-halt-criteria](../concepts/rjm/step-0-5-halt-criteria.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-prior-art-schema.md:30. Enforces `Step 0.5 halt criteria` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-contribution-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `contribution gates` |
| **card** | — | — | [contribution-gates](../concepts/rjm/contribution-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:autoplan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/autoplan/SKILL.md:58. Enforces `contribution gates` gate.
- **sequencing note:** Enforced in rjm phase `rjm:autoplan`.
- **needs decision:** no
- **decision:** —

### rjm-skill-id-validation-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill ID Validation Gate` |
| **card** | — | — | [skill-id-validation-gate](../concepts/rjm/skill-id-validation-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/archive/planning/PRD-skills-index-registry.md:436. Enforces `Skill ID Validation Gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-session-end-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SESSION END GATE` |
| **card** | — | — | [session-end-gate](../concepts/rjm/session-end-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/orchestrator.md:64. Enforces `SESSION END GATE` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-prior-art-constraints-elicitation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Prior Art / Constraints elicitation` |
| **card** | — | — | [prior-art-constraints-elicitation](../concepts/rjm/prior-art-constraints-elicitation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-prior-art-schema.md:310. Enforces `Prior Art / Constraints elicitation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-red-line

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `red line` |
| **card** | — | — | [red-line](../concepts/rjm/red-line.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:64. Enforces `red line` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-automatic-abort-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `automatic abort criteria` |
| **card** | — | — | [automatic-abort-criteria](../concepts/rjm/automatic-abort-criteria.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:chaos-experiment` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:51. Enforces `automatic abort criteria` gate.
- **sequencing note:** Enforced in rjm phase `rjm:chaos-experiment`.
- **needs decision:** no
- **decision:** —

### rjm-gate-ladder

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Gate Ladder` |
| **card** | — | — | [gate-ladder](../concepts/rjm/gate-ladder.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-change-control/SKILL.md:75. Enforces `Gate Ladder` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-routing-level-enforcement-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `routing-level enforcement gates` |
| **card** | — | — | [routing-level-enforcement-gates](../concepts/rjm/routing-level-enforcement-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-033-routing-level-enforcement-gates.md:67. Enforces `routing-level enforcement gates` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-local-validation-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `local validation gate` |
| **card** | — | — | [local-validation-gate](../concepts/rjm/local-validation-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-049-pre-pr-validation-gates.md:42. Enforces `local validation gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-acceptance-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Acceptance Gate` |
| **card** | — | — | [acceptance-gate](../concepts/rjm/acceptance-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:87. Enforces `Acceptance Gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-spec-id-uniqueness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Spec ID Uniqueness` |
| **card** | — | — | [spec-id-uniqueness](../concepts/rjm/spec-id-uniqueness.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:298. Enforces `Spec ID Uniqueness` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-calibrated-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `calibrated gate` |
| **card** | — | — | [calibrated-gate](../concepts/rjm/calibrated-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:research` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-methodology/SKILL.md:182. Enforces `calibrated gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:research`.
- **needs decision:** no
- **decision:** —

### rjm-taskcompleted

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `TaskCompleted` |
| **card** | — | — | [taskcompleted](../concepts/rjm/taskcompleted.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/hook_contracts.py:42. Enforces `TaskCompleted` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-scope-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `scope_check` |
| **card** | — | — | [scope-check](../concepts/rjm/scope-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:analyze` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/analyze/scripts/analyze.py:487. Enforces `scope_check` gate.
- **sequencing note:** Enforced in rjm phase `rjm:analyze`.
- **needs decision:** no
- **decision:** —

### rjm-skill-phase-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Phase Gates` |
| **card** | — | — | [skill-phase-gates](../concepts/rjm/skill-phase-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/SKILL-PHASE-GATES.md:1. Enforces `Skill Phase Gates` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-retrieval-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Retrieval gate` |
| **card** | — | — | [retrieval-gate](../concepts/rjm/retrieval-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/search-dont-load.md:4. Enforces `Retrieval gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gate-override

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `gate-override` |
| **card** | — | — | [gate-override](../concepts/rjm/gate-override.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:152. Enforces `gate-override` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-emptiness-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `emptiness gate` |
| **card** | — | — | [emptiness-gate](../concepts/rjm/emptiness-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/prose-self-check/SKILL.md:131. Enforces `emptiness gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-held-out-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `held-out gate` |
| **card** | — | — | [held-out-gate](../concepts/rjm/held-out-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/_optimizer_adapters.py:4. Enforces `held-out gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-status-consistency

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Status Consistency` |
| **card** | — | — | [status-consistency](../concepts/rjm/status-consistency.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-schemas.md:428. Enforces `Status Consistency` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-deterministic-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `deterministic gates` |
| **card** | — | — | [deterministic-gates](../concepts/rjm/deterministic-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-065-orchestrator-as-router.md:114. Enforces `deterministic gates` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-deterministic-only-gated-signal

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `deterministic-only gated signal` |
| **card** | — | — | [deterministic-only-gated-signal](../concepts/rjm/deterministic-only-gated-signal.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-058-agent-eval-discipline.md:53. Enforces `deterministic-only gated signal` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —


## 2. Architecture, Boundary & Design Invariant Gates

### addy-anti-duplication-guardrail

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Anti-duplication guardrail` | — | — |
| **card** | [anti-duplication-guardrail](../concepts/addy/anti-duplication-guardrail.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in .claude/rules/skills-contributing.md:2. Enforces `Anti-duplication guardrail` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-no-circular

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `no-circular` | — |
| **card** | — | [no-circular](../concepts/matt/no-circular.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:69. Enforces `no-circular` gate.
- **sequencing note:** Enforced in matt phase `matt:Engineering`.
- **needs decision:** no
- **decision:** —

### matt-no-cycles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `No cycles` | — |
| **card** | — | [no-cycles](../concepts/matt/no-cycles.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/in-progress/setup-ts-deep-modules/SKILL.md:31. Enforces `No cycles` gate.
- **sequencing note:** Enforced in matt phase `matt:Engineering`.
- **needs decision:** no
- **decision:** —

### rjm-design-principles-enforcement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design Principles Enforcement` |
| **card** | — | — | [design-principles-enforcement](../concepts/rjm/design-principles-enforcement.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/steering-committee-charter.md:116. Enforces `Design Principles Enforcement` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gp-001

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GP-001` |
| **card** | — | — | [gp-001](../concepts/rjm/gp-001.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/golden-principles/scripts/scan_principles_core.py:344. Enforces `GP-001` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gate-3-reject-product-coupling

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Gate 3: Reject product coupling` |
| **card** | — | — | [gate-3-reject-product-coupling](../concepts/rjm/gate-3-reject-product-coupling.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/external-skill-source-adaptation.md:42. Enforces `Gate 3: Reject product coupling` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-structural-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `structural guard` |
| **card** | — | — | [structural-guard](../concepts/rjm/structural-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:131. Enforces `structural guard` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-adr-creation-update-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR Creation/Update Protocol` |
| **card** | — | — | [adr-creation-update-protocol](../concepts/rjm/adr-creation-update-protocol.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/architect.md:638. Enforces `ADR Creation/Update Protocol` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gp-005

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GP-005` |
| **card** | — | — | [gp-005](../concepts/rjm/gp-005.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/golden-principles/scripts/scan_principles.py:160. Enforces `GP-005` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gp-004

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GP-004` |
| **card** | — | — | [gp-004](../concepts/rjm/gp-004.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/golden-principles/scripts/scan_principles_core.py:475. Enforces `GP-004` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-adr-link-resolution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR Link Resolution` |
| **card** | — | — | [adr-link-resolution](../concepts/rjm/adr-link-resolution.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:268. Enforces `ADR Link Resolution` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-adr-006-compliance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR-006 Compliance` |
| **card** | — | — | [adr-006-compliance](../concepts/rjm/adr-006-compliance.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/guides/python-cicd-patterns.md:143. Enforces `ADR-006 Compliance` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gate-2-reuse-over-duplication

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Gate 2: Reuse over duplication` |
| **card** | — | — | [gate-2-reuse-over-duplication](../concepts/rjm/gate-2-reuse-over-duplication.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/external-skill-source-adaptation.md:31. Enforces `Gate 2: Reuse over duplication` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-reject-product-coupling

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reject product coupling` |
| **card** | — | — | [reject-product-coupling](../concepts/rjm/reject-product-coupling.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/SKILL.md:144. Enforces `Reject product coupling` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-no-orphan-designs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `No Orphan Designs` |
| **card** | — | — | [no-orphan-designs](../concepts/rjm/no-orphan-designs.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-schemas.md:426. Enforces `No Orphan Designs` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-adr-existence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR Existence` |
| **card** | — | — | [adr-existence](../concepts/rjm/adr-existence.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-033-routing-level-enforcement-gates.md:84. Enforces `ADR Existence` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-adr-compliance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR compliance` |
| **card** | — | — | [adr-compliance](../concepts/rjm/adr-compliance.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-049-pre-pr-validation-gates.md:50. Enforces `ADR compliance` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-adr-exception-evaluation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR Exception Evaluation` |
| **card** | — | — | [adr-exception-evaluation](../concepts/rjm/adr-exception-evaluation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/architect.shared.md:376. Enforces `ADR Exception Evaluation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-reuse-over-duplication

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reuse over duplication` |
| **card** | — | — | [reuse-over-duplication](../concepts/rjm/reuse-over-duplication.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/SKILL.md:140. Enforces `Reuse over duplication` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gp-008

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GP-008` |
| **card** | — | — | [gp-008](../concepts/rjm/gp-008.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/golden-principles/SKILL.md:88. Enforces `GP-008` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gp-007

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GP-007` |
| **card** | — | — | [gp-007](../concepts/rjm/gp-007.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/golden-principles/SKILL.md:88. Enforces `GP-007` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gp-003

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GP-003` |
| **card** | — | — | [gp-003](../concepts/rjm/gp-003.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/golden-principles/scripts/scan_principles_core.py:375. Enforces `GP-003` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-ecadr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ecADR` |
| **card** | — | — | [ecadr](../concepts/rjm/ecadr.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/adr-generator/references/ad-quality-frameworks.md:43. Enforces `ecADR` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gp-002

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GP-002` |
| **card** | — | — | [gp-002](../concepts/rjm/gp-002.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/golden-principles/SKILL.md:88. Enforces `GP-002` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-deduplication-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Deduplication Check` |
| **card** | — | — | [deduplication-check](../concepts/rjm/deduplication-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/skillbook.md:81. Enforces `Deduplication Check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-invariant-policy-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Invariant / policy gate` |
| **card** | — | — | [invariant-policy-gate](../concepts/rjm/invariant-policy-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:111. Enforces `Invariant / policy gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-gp-006

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `GP-006` |
| **card** | — | — | [gp-006](../concepts/rjm/gp-006.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/golden-principles/scripts/scan_principles.py:191. Enforces `GP-006` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —


## 3. Implementation, Code Construction & Build Gates

### type-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `TYPE CHECK` | `type check` | — |
| **card** | [type-check](../concepts/addy/type-check.md) | [type-check](../concepts/matt/type-check.md) | — |
| **kind** | gate | gate | — |
| **phase** | `addy:Ship` | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | — |

- **class:** ALIGNED
- **difference:** none material. Both packages mandate clean static type checking without errors or silenced diagnostics as a prerequisite for build completion.
- **sequencing note:** Immediate gate after code construction; precedes test suite execution.
- **needs decision:** no
- **decision:** —

### stop-directive

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `STOP` | — | `Stop` |
| **card** | [stop](../concepts/addy/stop.md) | — | [stop](../concepts/rjm/stop.md) |
| **kind** | gate | — | gate |
| **phase** | `cross-phase` | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** none material. Both packages define an explicit STOP directive that immediately halts autonomous agent execution upon encountering unresolvable anomalies or missing inputs.
- **sequencing note:** Immediate termination upon fault detection.
- **needs decision:** no
- **decision:** —

### stop-the-line-andon-cord

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Stop-the-line rule` | — | `andon-cord` |
| **card** | [stop-the-line-rule](../concepts/addy/stop-the-line-rule.md) | — | [andon-cord](../concepts/rjm/andon-cord.md) |
| **kind** | gate | — | gate |
| **phase** | `addy:Verify` | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy names this the Stop-the-Line Rule (skills/implement-spec/SKILL.md:120); RJM names it the andon-cord (.claude/skills/review/SKILL.md:85). Both draw on the manufacturing principle of immediately halting all forward progression upon detecting an unexpected failure.
- **sequencing note:** Active across all construction, test, and review phases.
- **needs decision:** yes
- **decision:** —

### addy-clean-baseline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `clean baseline` | — | — |
| **card** | [clean-baseline](../concepts/addy/clean-baseline.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in commands/build.toml:31. Enforces `clean baseline` gate.
- **sequencing note:** Enforced in addy phase `addy:Build`.
- **needs decision:** no
- **decision:** —

### addy-non-trivial

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `non-trivial` | — | — |
| **card** | [non-trivial](../concepts/addy/non-trivial.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/doubt-driven-development/SKILL.md:16. Enforces `non-trivial` gate.
- **sequencing note:** Enforced in addy phase `addy:Build`.
- **needs decision:** no
- **decision:** —

### addy-lint

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `lint` | — | — |
| **card** | [lint](../concepts/addy/lint.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/fixtures/ci-cd-and-automation/package.json:5. Enforces `lint` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-single-checkpoint

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Single checkpoint` | — | — |
| **card** | [single-checkpoint](../concepts/addy/single-checkpoint.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in commands/build.toml:33. Enforces `Single checkpoint` gate.
- **sequencing note:** Enforced in addy phase `addy:Build`.
- **needs decision:** no
- **decision:** —

### addy-cache-hit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `cache HIT` | — | — |
| **card** | [cache-hit](../concepts/addy/cache-hit.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in hooks/sdd-cache-pre.sh:85. Enforces `cache HIT` gate.
- **sequencing note:** Enforced in addy phase `addy:Build`.
- **needs decision:** no
- **decision:** —

### addy-human-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `human gate` | — | — |
| **card** | [human-gate](../concepts/addy/human-gate.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in .gemini/commands/build.toml:33. Enforces `human gate` gate.
- **sequencing note:** Enforced in addy phase `addy:Build`.
- **needs decision:** no
- **decision:** —

### addy-304-not-modified

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `304 Not Modified` | — | — |
| **card** | [304-not-modified](../concepts/addy/304-not-modified.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in hooks/sdd-cache-pre.sh:5. Enforces `304 Not Modified` gate.
- **sequencing note:** Enforced in addy phase `addy:Build`.
- **needs decision:** no
- **decision:** —

### matt-type-checking

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `type checking` | — |
| **card** | — | [type-checking](../concepts/matt/type-checking.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/misc/README.md:8. Enforces `type checking` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-typecheck

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `typecheck` | — |
| **card** | — | [typecheck](../concepts/matt/typecheck.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/engineering/resolving-merge-conflicts/SKILL.md:12. Enforces `typecheck` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-format

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `format` | — |
| **card** | — | [format](../concepts/matt/format.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/engineering/resolving-merge-conflicts/SKILL.md:12. Enforces `format` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-style-005

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `STYLE-005` |
| **card** | — | — | [style-005](../concepts/rjm/style-005.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/style-enforcement/SKILL.md:136. Enforces `STYLE-005` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-rewrite-regression-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Rewrite-Regression Check` |
| **card** | — | — | [rewrite-regression-check](../concepts/rjm/rewrite-regression-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/decision-critic/SKILL.md:94. Enforces `Rewrite-Regression Check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-erroroccurred

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `errorOccurred` |
| **card** | — | — | [erroroccurred](../concepts/rjm/erroroccurred.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/agent-harness-reference/references/official-hook-contracts.md:93. Enforces `errorOccurred` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-style-001

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `STYLE-001` |
| **card** | — | — | [style-001](../concepts/rjm/style-001.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/style-enforcement/SKILL.md:96. Enforces `STYLE-001` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-markdownlint-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `markdownlint_guard` |
| **card** | — | — | [markdownlint-guard](../concepts/rjm/markdownlint-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:140. Enforces `markdownlint_guard` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-coverage-thresholds

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Coverage Thresholds` |
| **card** | — | — | [coverage-thresholds](../concepts/rjm/coverage-thresholds.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/devops.md:249. Enforces `Coverage Thresholds` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-agent-pre-submission

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Pre-Submission` |
| **card** | — | — | [agent-pre-submission](../concepts/rjm/agent-pre-submission.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/style-enforcement/SKILL.md:254. Enforces `Agent Pre-Submission` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-plan-validation-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Plan Validation Protocol` |
| **card** | — | — | [plan-validation-protocol](../concepts/rjm/plan-validation-protocol.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/implementer.md:104. Enforces `Plan Validation Protocol` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-style-010

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `STYLE-010` |
| **card** | — | — | [style-010](../concepts/rjm/style-010.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/style-enforcement/SKILL.md:146. Enforces `STYLE-010` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-style-004

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `STYLE-004` |
| **card** | — | — | [style-004](../concepts/rjm/style-004.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/style-enforcement/SKILL.md:126. Enforces `STYLE-004` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-build-time-targets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Build Time Targets` |
| **card** | — | — | [build-time-targets](../concepts/rjm/build-time-targets.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/devops.md:238. Enforces `Build Time Targets` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-exit-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `exit gates` |
| **card** | — | — | [exit-gates](../concepts/rjm/exit-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/check_build_gates.py:2. Enforces `exit gates` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-discriminator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Discriminator` |
| **card** | — | — | [discriminator](../concepts/rjm/discriminator.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/check_agent_skill_discriminator.py:8. Enforces `Discriminator` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-informational

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `INFORMATIONAL` |
| **card** | — | — | [informational](../concepts/rjm/informational.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/technical-guardrails.md:110. Enforces `INFORMATIONAL` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-stop-token

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `STOP-TOKEN` |
| **card** | — | — | [stop-token](../concepts/rjm/stop-token.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/prose-self-check/SKILL.md:93. Enforces `STOP-TOKEN` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-build-command-exit-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Build Command Exit Gates` |
| **card** | — | — | [build-command-exit-gates](../concepts/rjm/build-command-exit-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:271. Enforces `Build Command Exit Gates` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-strategic-build-buy-partner-defer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Strategic build/buy/partner/defer` |
| **card** | — | — | [strategic-build-buy-partner-defer](../concepts/rjm/strategic-build-buy-partner-defer.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/programming-advisor/SKILL.md:98. Enforces `Strategic build/buy/partner/defer` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-markdown-linting

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Markdown Linting` |
| **card** | — | — | [markdown-linting](../concepts/rjm/markdown-linting.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:251. Enforces `Markdown Linting` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-buy-vs-build-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Buy-vs-build gate` |
| **card** | — | — | [buy-vs-build-gate](../concepts/rjm/buy-vs-build-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-prior-art-schema.md:192. Enforces `Buy-vs-build gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-drift-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `drift check` |
| **card** | — | — | [drift-check](../concepts/rjm/drift-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-072-jtbd-plugin-architecture.md:99. Enforces `drift check` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Build`.
- **needs decision:** no
- **decision:** —

### rjm-read-project-documentation-first

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Read Project Documentation First` |
| **card** | — | — | [read-project-documentation-first](../concepts/rjm/read-project-documentation-first.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/implementer.shared.md:83. Enforces `Read Project Documentation First` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-stop-condition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Stop Condition` |
| **card** | — | — | [stop-condition](../concepts/rjm/stop-condition.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/context-hub-setup.md:178. Enforces `Stop Condition` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-cyclomatic-complexity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `cyclomatic complexity` |
| **card** | — | — | [cyclomatic-complexity](../concepts/rjm/cyclomatic-complexity.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/taste-lints/SKILL.md:61. Enforces `cyclomatic complexity` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-orphaned-build-deferrals

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orphaned Build Deferrals` |
| **card** | — | — | [orphaned-build-deferrals](../concepts/rjm/orphaned-build-deferrals.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:289. Enforces `Orphaned Build Deferrals` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-never-build

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Never Build` |
| **card** | — | — | [never-build](../concepts/rjm/never-build.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:100. Enforces `Never Build` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-file-size-limits

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `file size limits` |
| **card** | — | — | [file-size-limits](../concepts/rjm/file-size-limits.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/taste-lints/SKILL.md:15. Enforces `file size limits` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-function-complexity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Function Complexity` |
| **card** | — | — | [function-complexity](../concepts/rjm/function-complexity.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/taste-lints/SKILL.md:59. Enforces `Function Complexity` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-taste-lint

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `taste-lint` |
| **card** | — | — | [taste-lint](../concepts/rjm/taste-lint.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/_run_persistence.py:1. Enforces `taste-lint` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-regression

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `regression` |
| **card** | — | — | [regression](../concepts/rjm/regression.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/code-qualities-assessment/SKILL.md:137. Enforces `regression` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pre-commit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-commit` |
| **card** | — | — | [pre-commit](../concepts/rjm/pre-commit.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:36. Enforces `Pre-commit` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Build`.
- **needs decision:** no
- **decision:** —

### rjm-thresholds

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `thresholds` |
| **card** | — | — | [thresholds](../concepts/rjm/thresholds.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/code-qualities-assessment/templates/.qualityrc.json:2. Enforces `thresholds` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-file-size

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `file-size` |
| **card** | — | — | [file-size](../concepts/rjm/file-size.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/taste-lints/scripts/taste_lints.py:34. Enforces `file-size` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-style-enforcement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `style-enforcement` |
| **card** | — | — | [style-enforcement](../concepts/rjm/style-enforcement.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/style-enforcement/SKILL.md:11. Enforces `style-enforcement` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-skill-prompt-size

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Prompt Size` |
| **card** | — | — | [skill-prompt-size](../concepts/rjm/skill-prompt-size.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/taste-lints/SKILL.md:63. Enforces `Skill Prompt Size` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-severity-threshold

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `severity threshold` |
| **card** | — | — | [severity-threshold](../concepts/rjm/severity-threshold.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/doc-accuracy/scripts/doc_accuracy.py:12. Enforces `severity threshold` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-irreversibility-warning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Irreversibility warning` |
| **card** | — | — | [irreversibility-warning](../concepts/rjm/irreversibility-warning.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:236. Enforces `Irreversibility warning` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-regression-mode

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Regression mode` |
| **card** | — | — | [regression-mode](../concepts/rjm/regression-mode.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/code-qualities-assessment/scripts/assess.py:13. Enforces `Regression mode` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-style-003

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `STYLE-003` |
| **card** | — | — | [style-003](../concepts/rjm/style-003.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/style-enforcement/SKILL.md:116. Enforces `STYLE-003` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-mandatory-exit-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Mandatory Exit Gates` |
| **card** | — | — | [mandatory-exit-gates](../concepts/rjm/mandatory-exit-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/build.md:61. Enforces `Mandatory Exit Gates` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-naming

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `naming` |
| **card** | — | — | [naming](../concepts/rjm/naming.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/taste-lints/scripts/taste_lints.py:34. Enforces `naming` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-lint-scope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Lint scope` |
| **card** | — | — | [lint-scope](../concepts/rjm/lint-scope.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-change-control/references/gate-ladder.md:30. Enforces `Lint scope` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-req-003-010

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `REQ-003-010` |
| **card** | — | — | [req-003-010](../concepts/rjm/req-003-010.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-generation-and-release/SKILL.md:71. Enforces `REQ-003-010` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-style-002

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `STYLE-002` |
| **card** | — | — | [style-002](../concepts/rjm/style-002.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/style-enforcement/SKILL.md:106. Enforces `STYLE-002` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —

### rjm-fail-judge-errors

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `FAIL_JUDGE_ERRORS` |
| **card** | — | — | [fail-judge-errors](../concepts/rjm/fail-judge-errors.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-rule-activation.py:1738. Enforces `FAIL_JUDGE_ERRORS` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-build-all-no-claude-writes-invariant

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `build_all no-claude-writes invariant` |
| **card** | — | — | [build-all-no-claude-writes-invariant](../concepts/rjm/build-all-no-claude-writes-invariant.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-change-control/references/provenance.md:12. Enforces `build_all no-claude-writes invariant` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-self-apply-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Self-apply gate` |
| **card** | — | — | [self-apply-gate](../concepts/rjm/self-apply-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/build.md:49. Enforces `Self-apply gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:build`.
- **needs decision:** no
- **decision:** —


## 4. Verification, Testing & Test Suite Execution Gates

### verification-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Verification` | — | `Verification` |
| **card** | [verification](../concepts/addy/verification.md) | — | [verification](../concepts/rjm/verification.md) |
| **kind** | gate | — | gate |
| **phase** | `addy:Verify` | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** none material. Both packages define explicit verification gates that demand executable proof and test suite success rather than assumed correctness.
- **sequencing note:** Follows build and implementation; precedes review and shipping.
- **needs decision:** no
- **decision:** —

### verify-the-result

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Verify the Result` | — | `Verify the Result` |
| **card** | [verify-the-result](../concepts/addy/verify-the-result.md) | — | [verify-the-result](../concepts/rjm/verify-the-result.md) |
| **kind** | gate | — | gate |
| **phase** | `addy:Review` | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** none material. Both Addy and RJM enforce the invariant that every executed tool call or file modification must be verified against actual output.
- **sequencing note:** Immediate post-condition of every mutating action.
- **needs decision:** no
- **decision:** —

### smoke-testing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Staging smoke test` | `smoke test` | — |
| **card** | [staging-smoke-test](../concepts/addy/staging-smoke-test.md) | [smoke-test](../concepts/matt/smoke-test.md) | — |
| **kind** | gate | gate | — |
| **phase** | `addy:Ship` | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | — |

- **class:** SYNONYM
- **difference:** Addy defines staging smoke test as an automated checkout/navigation pass on staging; Matt defines smoke test as a rapid sanity check of critical paths before running comprehensive suites.
- **sequencing note:** Executed immediately following deployment or build completion.
- **needs decision:** yes
- **decision:** —

### unit-testing-suite

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Unit tests` | `test suite` | — |
| **card** | [unit-tests](../concepts/addy/unit-tests.md) | [test-suite](../concepts/matt/test-suite.md) | — |
| **kind** | gate | gate | — |
| **phase** | `cross-phase` | `matt:none` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | — |

- **class:** SYNONYM
- **difference:** Addy defines unit tests as isolated component/function level assertions; Matt defines test suite as the comprehensive set of executable specifications.
- **sequencing note:** Core verification gate during implementation and testing phases.
- **needs decision:** yes
- **decision:** —

### addy-tier-1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Tier 1` | — | — |
| **card** | [tier-1](../concepts/addy/tier-1.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in docs/developer-onboarding.md:55. Enforces `Tier 1` gate.
- **sequencing note:** Enforced in addy phase `addy:Verify`.
- **needs decision:** no
- **decision:** —

### addy-clean-console-standard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Clean Console Standard` | — | — |
| **card** | [clean-console-standard](../concepts/addy/clean-console-standard.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/browser-testing-with-devtools/SKILL.md:258. Enforces `Clean Console Standard` gate.
- **sequencing note:** Enforced in addy phase `addy:Verify`.
- **needs decision:** no
- **decision:** —

### addy-verify-don-t-assume

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Verify, Don't Assume` | — | — |
| **card** | [verify-don-t-assume](../concepts/addy/verify-don-t-assume.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/using-agent-skills/SKILL.md:112. Enforces `Verify, Don't Assume` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-the-stop-the-line-rule

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `The Stop-the-Line Rule` | — | — |
| **card** | [the-stop-the-line-rule](../concepts/addy/the-stop-the-line-rule.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/debugging-and-error-recovery/SKILL.md:34. Enforces `The Stop-the-Line Rule` gate.
- **sequencing note:** Enforced in addy phase `addy:Verify`.
- **needs decision:** no
- **decision:** —

### addy-test-made-easier

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `test-made-easier` | — | — |
| **card** | [test-made-easier](../concepts/addy/test-made-easier.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/references/floor-guard.md:66. Enforces `test-made-easier` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-resume

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `RESUME` | — | — |
| **card** | [resume](../concepts/addy/resume.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/debugging-and-error-recovery/SKILL.md:31. Enforces `RESUME` gate.
- **sequencing note:** Enforced in addy phase `addy:Verify`.
- **needs decision:** no
- **decision:** —

### addy-suite

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Suite` | — | — |
| **card** | [suite](../concepts/addy/suite.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/SKILL.md:222. Enforces `Suite` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-test

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `/test` | — | — |
| **card** | [test](../concepts/addy/test.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in README.md:31. Enforces `/test` gate.
- **sequencing note:** Enforced in addy phase `addy:Verify`.
- **needs decision:** no
- **decision:** —

### matt-three-tests

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `three tests` | — |
| **card** | — | [three-tests](../concepts/matt/three-tests.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in docs/engineering/domain-modeling.md:42. Enforces `three tests` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-tests-through-entrypoints

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `tests-through-entrypoints` | — |
| **card** | — | [tests-through-entrypoints](../concepts/matt/tests-through-entrypoints.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:50. Enforces `tests-through-entrypoints` gate.
- **sequencing note:** Enforced in matt phase `matt:Engineering`.
- **needs decision:** no
- **decision:** —

### matt-test-code-only

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Test code only` | — |
| **card** | — | [test-code-only](../concepts/matt/test-code-only.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/misc/migrate-to-shoehorn/SKILL.md:12. Enforces `Test code only` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-adr-s-three-tests

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `ADR's three tests` | — |
| **card** | — | [adr-s-three-tests](../concepts/matt/adr-s-three-tests.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in docs/engineering/domain-modeling.md:42. Enforces `ADR's three tests` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-tests-folder-is-private

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `tests-folder-is-private` | — |
| **card** | — | [tests-folder-is-private](../concepts/matt/tests-folder-is-private.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs:61. Enforces `tests-folder-is-private` gate.
- **sequencing note:** Enforced in matt phase `matt:Engineering`.
- **needs decision:** no
- **decision:** —

### matt-tests

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `tests` | — |
| **card** | — | [tests](../concepts/matt/tests.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/engineering/resolving-merge-conflicts/SKILL.md:12. Enforces `tests` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-verify-check-mode

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `verify/check mode` | — |
| **card** | — | [verify-check-mode](../concepts/matt/verify-check-mode.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in .out-of-scope/setup-skill-verify-mode.md:3. Enforces `verify/check mode` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-tests-through-the-entry-points

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Tests through the entry points` | — |
| **card** | — | [tests-through-the-entry-points](../concepts/matt/tests-through-the-entry-points.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:Engineering` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/in-progress/setup-ts-deep-modules/SKILL.md:30. Enforces `Tests through the entry points` gate.
- **sequencing note:** Enforced in matt phase `matt:Engineering`.
- **needs decision:** no
- **decision:** —

### matt-red-before-green

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Red before green` | — |
| **card** | — | [red-before-green](../concepts/matt/red-before-green.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/engineering/tdd/SKILL.md:36. Enforces `Red before green` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-verification-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Verification Protocol` |
| **card** | — | — | [verification-protocol](../concepts/rjm/verification-protocol.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/independent-thinker.md:132. Enforces `Verification Protocol` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-qa-exemption

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `QA exemption` |
| **card** | — | — | [qa-exemption](../concepts/rjm/qa-exemption.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/modules/investigation_allowlist.py:1. Enforces `QA exemption` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-verification-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Verification Gate` |
| **card** | — | — | [verification-gate](../concepts/rjm/verification-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/SKILL-PHASE-GATES.md:36. Enforces `Verification Gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-phase-2-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 2 Verification` |
| **card** | — | — | [phase-2-verification](../concepts/rjm/phase-2-verification.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/research-and-incorporate/references/workflow.md:208. Enforces `Phase 2 Verification` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-support-floor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `support floor` |
| **card** | — | — | [support-floor](../concepts/rjm/support-floor.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/validate_python_syntax.py:2. Enforces `support floor` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-generated-artifact-staleness-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Generated Artifact Staleness gate` |
| **card** | — | — | [generated-artifact-staleness-gate](../concepts/rjm/generated-artifact-staleness-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:215. Enforces `Generated Artifact Staleness gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-integration-coverage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Integration coverage` |
| **card** | — | — | [integration-coverage](../concepts/rjm/integration-coverage.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/test.md:48. Enforces `Integration coverage` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-developer-experience

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Developer Experience` |
| **card** | — | — | [developer-experience](../concepts/rjm/developer-experience.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/test.md:98. Enforces `Developer Experience` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-aspirational-test

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `aspirational test` |
| **card** | — | — | [aspirational-test](../concepts/rjm/aspirational-test.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-step0-gates.md:9. Enforces `aspirational test` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-coverage-tool-directive-a5

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Coverage tool directive (A5)` |
| **card** | — | — | [coverage-tool-directive-a5](../concepts/rjm/coverage-tool-directive-a5.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/qa.shared.md:71. Enforces `Coverage tool directive (A5)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-ai-agents-validation-and-qa

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ai-agents-validation-and-qa` |
| **card** | — | — | [ai-agents-validation-and-qa](../concepts/rjm/ai-agents-validation-and-qa.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/skill_contract_test_baseline.txt:7. Enforces `ai-agents-validation-and-qa` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pilot-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pilot gate` |
| **card** | — | — | [pilot-gate](../concepts/rjm/pilot-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:181. Enforces `Pilot gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-qa-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `QA Verification` |
| **card** | — | — | [qa-verification](../concepts/rjm/qa-verification.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/AGENT-SYSTEM.md:1663. Enforces `QA Verification` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-ai-agents-pytest-full-suite-locally

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `AI_AGENTS_PYTEST_FULL_SUITE_LOCALLY` |
| **card** | — | — | [ai-agents-pytest-full-suite-locally](../concepts/rjm/ai-agents-pytest-full-suite-locally.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-config-catalog/SKILL.md:65. Enforces `AI_AGENTS_PYTEST_FULL_SUITE_LOCALLY` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-devops-testing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DevOps Testing` |
| **card** | — | — | [devops-testing](../concepts/rjm/devops-testing.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/test.md:84. Enforces `DevOps Testing` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-unit-coverage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Unit coverage` |
| **card** | — | — | [unit-coverage](../concepts/rjm/unit-coverage.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/test.md:47. Enforces `Unit coverage` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-exit-3

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exit 3` |
| **card** | — | — | [exit-3](../concepts/rjm/exit-3.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/dependency-auditor.md:83. Enforces `Exit 3` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-baseline-conflict-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `baseline-conflict guard` |
| **card** | — | — | [baseline-conflict-guard](../concepts/rjm/baseline-conflict-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/check_skill_md_portability.py:749. Enforces `baseline-conflict guard` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-smoke

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `smoke` |
| **card** | — | — | [smoke](../concepts/rjm/smoke.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in pyproject.toml:78. Enforces `smoke` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-check-quality-grades-for-degradation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Check quality grades for degradation` |
| **card** | — | — | [check-quality-grades-for-degradation](../concepts/rjm/check-quality-grades-for-degradation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/quality-grades/scripts/check_grade_changes.py:2. Enforces `Check quality grades for degradation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-acceptance-testing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `acceptance_testing` |
| **card** | — | — | [acceptance-testing](../concepts/rjm/acceptance-testing.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:execution` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/planner/scripts/executor.py:303. Enforces `acceptance_testing` gate.
- **sequencing note:** Enforced in rjm phase `rjm:execution`.
- **needs decision:** no
- **decision:** —

### rjm-observability-and-monitoring

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Observability and Monitoring` |
| **card** | — | — | [observability-and-monitoring](../concepts/rjm/observability-and-monitoring.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/test.md:110. Enforces `Observability and Monitoring` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-test-coverage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Test Coverage` |
| **card** | — | — | [test-coverage](../concepts/rjm/test-coverage.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/review/references/qa.md:99. Enforces `Test Coverage` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-phase-3-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 3 Verification` |
| **card** | — | — | [phase-3-verification](../concepts/rjm/phase-3-verification.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/research-and-incorporate/references/workflow.md:296. Enforces `Phase 3 Verification` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-specificity-test

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `specificity test` |
| **card** | — | — | [specificity-test](../concepts/rjm/specificity-test.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-step0-gates.md:10. Enforces `specificity test` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-missed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `MISSED` |
| **card** | — | — | [missed](../concepts/rjm/missed.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/testing/mutation_harness.py:21. Enforces `MISSED` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-blocking-verify

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `BLOCKING verify` |
| **card** | — | — | [blocking-verify](../concepts/rjm/blocking-verify.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in AGENTS.md:23. Enforces `BLOCKING verify` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-agent-template-drift

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent template drift` |
| **card** | — | — | [agent-template-drift](../concepts/rjm/agent-template-drift.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-generation-and-release/SKILL.md:106. Enforces `Agent template drift` gate.
- **sequencing note:** Enforced in rjm phase `rjm:verify`.
- **needs decision:** no
- **decision:** —

### rjm-coverage-proof

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Coverage proof` |
| **card** | — | — | [coverage-proof](../concepts/rjm/coverage-proof.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-validation-and-qa/SKILL.md:47. Enforces `Coverage proof` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-code-quality-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Code Quality Gates` |
| **card** | — | — | [code-quality-gates](../concepts/rjm/code-quality-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/qa.md:124. Enforces `Code Quality Gates` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-nightly-cli-smoke

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `nightly-cli-smoke` |
| **card** | — | — | [nightly-cli-smoke](../concepts/rjm/nightly-cli-smoke.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:660. Enforces `nightly-cli-smoke` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Test`.
- **needs decision:** no
- **decision:** —

### rjm-validation-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validation Protocol` |
| **card** | — | — | [validation-protocol](../concepts/rjm/validation-protocol.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:QA` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/qa.shared.md:364. Enforces `Validation Protocol` gate.
- **sequencing note:** Enforced in rjm phase `rjm:QA`.
- **needs decision:** no
- **decision:** —

### rjm-functional-testing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Functional Testing` |
| **card** | — | — | [functional-testing](../concepts/rjm/functional-testing.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/test.md:41. Enforces `Functional Testing` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-exit-1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exit 1` |
| **card** | — | — | [exit-1](../concepts/rjm/exit-1.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/dependency-auditor.md:135. Enforces `Exit 1` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-slash-command-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `slash command validation` |
| **card** | — | — | [slash-command-validation](../concepts/rjm/slash-command-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/modules/slash_command_validator.py:1. Enforces `slash command validation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-post-implementation-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Post-Implementation Verification` |
| **card** | — | — | [post-implementation-verification](../concepts/rjm/post-implementation-verification.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security.md:370. Enforces `Post-Implementation Verification` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-guard-refusal

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `guard_refusal` |
| **card** | — | — | [guard-refusal](../concepts/rjm/guard-refusal.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/_optimizer_core.py:634. Enforces `guard_refusal` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Test`.
- **needs decision:** no
- **decision:** —

### rjm-qa-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `QA Validation` |
| **card** | — | — | [qa-validation](../concepts/rjm/qa-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:session-end` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in CONTRIBUTING.md:707. Enforces `QA Validation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:session-end`.
- **needs decision:** no
- **decision:** —

### rjm-pre-extraction-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-Extraction Validation` |
| **card** | — | — | [pre-extraction-validation](../concepts/rjm/pre-extraction-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/analysis/adr-045-inventory-audit.md:635. Enforces `Pre-Extraction Validation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-exit-0

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Exit 0` |
| **card** | — | — | [exit-0](../concepts/rjm/exit-0.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/dependency-auditor.md:134. Enforces `Exit 0` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-six-quality-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Six quality gates` |
| **card** | — | — | [six-quality-gates](../concepts/rjm/six-quality-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/getting-started.md:77. Enforces `Six quality gates` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-coverage-targets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `coverage targets` |
| **card** | — | — | [coverage-targets](../concepts/rjm/coverage-targets.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-077-flip-stale-contract-tests.md:48. Enforces `coverage targets` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-phase-1-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 1 Verification` |
| **card** | — | — | [phase-1-verification](../concepts/rjm/phase-1-verification.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/research-and-incorporate/references/workflow.md:104. Enforces `Phase 1 Verification` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-lib-mirror-drift

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Lib mirror drift` |
| **card** | — | — | [lib-mirror-drift](../concepts/rjm/lib-mirror-drift.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-generation-and-release/SKILL.md:108. Enforces `Lib mirror drift` gate.
- **sequencing note:** Enforced in rjm phase `rjm:verify`.
- **needs decision:** no
- **decision:** —

### rjm-testing-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Testing Gate` |
| **card** | — | — | [testing-gate](../concepts/rjm/testing-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:777. Enforces `Testing Gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-non-functional-testing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Non-Functional Testing` |
| **card** | — | — | [non-functional-testing](../concepts/rjm/non-functional-testing.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/test.md:58. Enforces `Non-Functional Testing` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-drift-gate-failures

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Drift-gate failures` |
| **card** | — | — | [drift-gate-failures](../concepts/rjm/drift-gate-failures.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-failure-archaeology/SKILL.md:68. Enforces `Drift-gate failures` gate.
- **sequencing note:** Enforced in rjm phase `rjm:verify`.
- **needs decision:** no
- **decision:** —

### rjm-coverage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Coverage` |
| **card** | — | — | [coverage](../concepts/rjm/coverage.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in AGENTS.md:51. Enforces `Coverage` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-speculative-test

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `speculative test` |
| **card** | — | — | [speculative-test](../concepts/rjm/speculative-test.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-step0-gates.md:11. Enforces `speculative test` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-agent-skill-discriminator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `agent-skill discriminator` |
| **card** | — | — | [agent-skill-discriminator](../concepts/rjm/agent-skill-discriminator.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/agent_skill_discriminator_baseline.py:1. Enforces `agent-skill discriminator` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-runtime-contract-test

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `runtime-contract test` |
| **card** | — | — | [runtime-contract-test](../concepts/rjm/runtime-contract-test.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:74. Enforces `runtime-contract test` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-run-the-checks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Run the checks` |
| **card** | — | — | [run-the-checks](../concepts/rjm/run-the-checks.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/autoplan/SKILL.md:154. Enforces `Run the checks` gate.
- **sequencing note:** Enforced in rjm phase `rjm:verify`.
- **needs decision:** no
- **decision:** —

### rjm-external-signal-gating

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `External-Signal Gating` |
| **card** | — | — | [external-signal-gating](../concepts/rjm/external-signal-gating.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/design/external-signal-gating.md:1. Enforces `External-Signal Gating` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-critical-fail

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CRITICAL_FAIL` |
| **card** | — | — | [critical-fail](../concepts/rjm/critical-fail.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/workflow-commands.md:125. Enforces `CRITICAL_FAIL` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-plugin-integrity-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Plugin Integrity Verification` |
| **card** | — | — | [plugin-integrity-verification](../concepts/rjm/plugin-integrity-verification.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/critique/ADR-045-debate-log.md:45. Enforces `Plugin Integrity Verification` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-validation-failure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validation Failure` |
| **card** | — | — | [validation-failure](../concepts/rjm/validation-failure.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/qa.shared.md:773. Enforces `Validation Failure` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-test-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Test Verification` |
| **card** | — | — | [test-verification](../concepts/rjm/test-verification.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/archive/planning/PR-60/003-pr-60-plan-critique.md:59. Enforces `Test Verification` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-colocated-skill-tests

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Colocated Skill Tests` |
| **card** | — | — | [colocated-skill-tests](../concepts/rjm/colocated-skill-tests.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:317. Enforces `Colocated Skill Tests` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-admission-test

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Admission test` |
| **card** | — | — | [admission-test](../concepts/rjm/admission-test.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/context-optimizer/references/model-context-doctrine.md:88. Enforces `Admission test` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-conformist-test

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `conformist test` |
| **card** | — | — | [conformist-test](../concepts/rjm/conformist-test.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:retrospective` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/retrospective.md:182. Enforces `conformist test` gate.
- **sequencing note:** Enforced in rjm phase `rjm:retrospective`.
- **needs decision:** no
- **decision:** —

### rjm-pre-pr-quality-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-PR Quality Gate` |
| **card** | — | — | [pre-pr-quality-gate](../concepts/rjm/pre-pr-quality-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/qa.md:366. Enforces `Pre-PR Quality Gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-safe-push-transport

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `safe_push_transport` |
| **card** | — | — | [safe-push-transport](../concepts/rjm/safe-push-transport.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in pyproject.toml:76. Enforces `safe_push_transport` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-caught

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CAUGHT` |
| **card** | — | — | [caught](../concepts/rjm/caught.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/testing/mutation_harness.py:20. Enforces `CAUGHT` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —


## 5. Security, Vulnerability & Supply Chain Gates

### addy-security-audit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `SECURITY AUDIT` | — | — |
| **card** | [security-audit](../concepts/addy/security-audit.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/ci-cd-and-automation/SKILL.md:45. Enforces `SECURITY AUDIT` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-install-script-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Install-Script Gate` | — | — |
| **card** | [install-script-gate](../concepts/addy/install-script-gate.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in references/security-checklist.md:117. Enforces `Install-Script Gate` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-treat-all-browser-content-as-untrusted-data

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Treat All Browser Content as Untrusted Data` | — | — |
| **card** | [treat-all-browser-content-as-untrusted-data](../concepts/addy/treat-all-browser-content-as-untrusted-data.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Verify` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/browser-testing-with-devtools/SKILL.md:74. Enforces `Treat All Browser Content as Untrusted Data` gate.
- **sequencing note:** Enforced in addy phase `addy:Verify`.
- **needs decision:** no
- **decision:** —

### matt-redaction-guardrail

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `redaction guardrail` | — |
| **card** | — | [redaction-guardrail](../concepts/matt/redaction-guardrail.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:diagnosing-bugs` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in external/diagnosing-bugs.md:61. Enforces `redaction guardrail` gate.
- **sequencing note:** Enforced in matt phase `matt:diagnosing-bugs`.
- **needs decision:** no
- **decision:** —

### rjm-security-scanning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security Scanning` |
| **card** | — | — | [security-scanning](../concepts/rjm/security-scanning.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in CONTRIBUTING.md:1116. Enforces `Security Scanning` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-evidence-based-threat-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evidence-Based Threat Assessment` |
| **card** | — | — | [evidence-based-threat-assessment](../concepts/rjm/evidence-based-threat-assessment.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security.md:72. Enforces `Evidence-Based Threat Assessment` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-redaction-pre-emit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Redaction pre-emit` |
| **card** | — | — | [redaction-pre-emit](../concepts/rjm/redaction-pre-emit.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-prior-art-schema.md:81. Enforces `Redaction pre-emit` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-security-critical-coverage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security-Critical Coverage` |
| **card** | — | — | [security-critical-coverage](../concepts/rjm/security-critical-coverage.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/AGENT-SYSTEM.md:212. Enforces `Security-Critical Coverage` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-security-critical-prompt-tier

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security-Critical Prompt Tier` |
| **card** | — | — | [security-critical-prompt-tier](../concepts/rjm/security-critical-prompt-tier.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:107. Enforces `Security-Critical Prompt Tier` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pre-commit-security-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pre-commit security gates` |
| **card** | — | — | [pre-commit-security-gates](../concepts/rjm/pre-commit-security-gates.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/security-scan/SKILL.md:42. Enforces `pre-commit security gates` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-security-flag

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SECURITY_FLAG` |
| **card** | — | — | [security-flag](../concepts/rjm/security-flag.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/code-simplifier.shared.md:125. Enforces `SECURITY_FLAG` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-security-critical-tier

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `security-critical tier` |
| **card** | — | — | [security-critical-tier](../concepts/rjm/security-critical-tier.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-prompt-change.py:6. Enforces `security-critical tier` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-security-sensitive-carve-out

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security-sensitive carve-out` |
| **card** | — | — | [security-sensitive-carve-out](../concepts/rjm/security-sensitive-carve-out.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/programming-advisor/SKILL.md:51. Enforces `Security-sensitive carve-out` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-security-flagging

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security Flagging` |
| **card** | — | — | [security-flagging](../concepts/rjm/security-flagging.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:implement` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/implementer.md:681. Enforces `Security Flagging` gate.
- **sequencing note:** Enforced in rjm phase `rjm:implement`.
- **needs decision:** no
- **decision:** —

### rjm-security-carve-out

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `security carve-out` |
| **card** | — | — | [security-carve-out](../concepts/rjm/security-carve-out.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-084-vendored-hook-roi-bar.md:28. Enforces `security carve-out` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-security-review-recursive

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security Review (Recursive)` |
| **card** | — | — | [security-review-recursive](../concepts/rjm/security-review-recursive.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/autonomous-issue-development.md:53. Enforces `Security Review (Recursive)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:verify`.
- **needs decision:** no
- **decision:** —

### rjm-security-review-scope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security Review Scope` |
| **card** | — | — | [security-review-scope](../concepts/rjm/security-review-scope.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/security.shared.md:72. Enforces `Security Review Scope` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-security-posture

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security posture` |
| **card** | — | — | [security-posture](../concepts/rjm/security-posture.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/ship.md:78. Enforces `Security posture` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-security-testing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Security Testing` |
| **card** | — | — | [security-testing](../concepts/rjm/security-testing.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/test.md:72. Enforces `Security Testing` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —


## 6. Review, Audit, Critique & Quality Gates

### addy-never-fabricate-metrics

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Never fabricate metrics` | — | — |
| **card** | [never-fabricate-metrics](../concepts/addy/never-fabricate-metrics.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in agents/web-performance-auditor.md:43. Enforces `Never fabricate metrics` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-code-quality

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Code Quality` | — | — |
| **card** | [code-quality](../concepts/addy/code-quality.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in docs/copilot-setup.md:62. Enforces `Code Quality` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-rank-1-ratchet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Rank-1 ratchet` | — | — |
| **card** | [rank-1-ratchet](../concepts/addy/rank-1-ratchet.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in scripts/run-evals.js:17. Enforces `Rank-1 ratchet` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-metric-honesty-rule

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Metric-Honesty Rule` | — | — |
| **card** | [metric-honesty-rule](../concepts/addy/metric-honesty-rule.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in agents/web-performance-auditor.md:41. Enforces `Metric-Honesty Rule` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-constraints-ratchet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `/constraints ratchet` | — | — |
| **card** | [constraints-ratchet](../concepts/addy/constraints-ratchet.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in .gemini/commands/constraints.toml:31. Enforces `/constraints ratchet` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-approval-standard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `approval standard` | — | — |
| **card** | [approval-standard](../concepts/addy/approval-standard.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/code-review-and-quality/SKILL.md:12. Enforces `approval standard` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-regression-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `regression guard` | — | — |
| **card** | [regression-guard](../concepts/addy/regression-guard.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/cases/performance-optimization.json:41. Enforces `regression guard` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-guard-against-regression

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Guard Against Regression` | — | — |
| **card** | [guard-against-regression](../concepts/addy/guard-against-regression.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/performance-optimization/SKILL.md:405. Enforces `Guard Against Regression` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-95-confidence-stop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `95% Confidence Stop` | — | — |
| **card** | [95-confidence-stop](../concepts/addy/95-confidence-stop.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/interview-me/SKILL.md:130. Enforces `95% Confidence Stop` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-keep-or-revert

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Keep or Revert` | — | — |
| **card** | [keep-or-revert](../concepts/addy/keep-or-revert.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/performance-optimization/SKILL.md:370. Enforces `Keep or Revert` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-human-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `human review` | — | — |
| **card** | [human-review](../concepts/addy/human-review.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Plan` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in .gemini/commands/planning.toml:13. Enforces `human review` gate.
- **sequencing note:** Enforced in addy phase `addy:Plan`.
- **needs decision:** no
- **decision:** —

### addy-required

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Required` | — | — |
| **card** | [required](../concepts/addy/required.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in agents/code-reviewer.md:53. Enforces `Required` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-artifact-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Artifact Review` | — | — |
| **card** | [artifact-review](../concepts/addy/artifact-review.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in docs/antigravity-setup.md:124. Enforces `Artifact Review` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-ready-for-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `ready for review` | — |
| **card** | — | [ready-for-review](../concepts/matt/ready-for-review.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/in-progress/implement-spec/SKILL.md:33. Enforces `ready for review` gate.
- **sequencing note:** Enforced in matt phase `matt:in-progress`.
- **needs decision:** no
- **decision:** —

### matt-code-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `"/code-review"` | — |
| **card** | — | [code-review](../concepts/matt/code-review.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:review` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in docs/engineering/code-review.md:3. Enforces `"/code-review"` gate.
- **sequencing note:** Enforced in matt phase `matt:review`.
- **needs decision:** no
- **decision:** —

### matt-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Standards` | — |
| **card** | — | [standards](../concepts/matt/standards.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:code-review` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in docs/engineering/code-review.md:3. Enforces `Standards` gate.
- **sequencing note:** Enforced in matt phase `matt:code-review`.
- **needs decision:** no
- **decision:** —

### rjm-analyst-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analyst review` |
| **card** | — | — | [analyst-review](../concepts/rjm/analyst-review.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-prior-art-schema.md:290. Enforces `Analyst review` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-ai-pr-quality-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `AI PR Quality Gate` |
| **card** | — | — | [ai-pr-quality-gate](../concepts/rjm/ai-pr-quality-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-023-quality-gate-prompt-testing.md:26. Enforces `AI PR Quality Gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Review`.
- **needs decision:** no
- **decision:** —

### rjm-won-t-fix-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `"\"Won't Fix\" Protocol"` |
| **card** | — | — | [won-t-fix-protocol](../concepts/rjm/won-t-fix-protocol.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/security-scan/references/autonomous-execution-guardrails.md:33. Enforces `"\"Won't Fix\" Protocol"` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-pivot-or-proceed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pivot or proceed` |
| **card** | — | — | [pivot-or-proceed](../concepts/rjm/pivot-or-proceed.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/business-strategy/references/four-steps.md:48. Enforces `Pivot or proceed` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-review-scope-enumeration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Review Scope Enumeration` |
| **card** | — | — | [review-scope-enumeration](../concepts/rjm/review-scope-enumeration.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security.md:105. Enforces `Review Scope Enumeration` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-warn-proceed-with-caution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `WARN (Proceed with Caution)` |
| **card** | — | — | [warn-proceed-with-caution](../concepts/rjm/warn-proceed-with-caution.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/review/references/security.md:185. Enforces `WARN (Proceed with Caution)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-ratchet-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ratchet gate` |
| **card** | — | — | [ratchet-gate](../concepts/rjm/ratchet-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/ci/adr006_run_block_scanner.py:12. Enforces `ratchet gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-synthesis-panel-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `synthesis panel gate` |
| **card** | — | — | [synthesis-panel-gate](../concepts/rjm/synthesis-panel-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/scripts/check_design_review_gate.py:126. Enforces `synthesis panel gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-stage-1-spec-compliance-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Stage-1 spec-compliance gate` |
| **card** | — | — | [stage-1-spec-compliance-gate](../concepts/rjm/stage-1-spec-compliance-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/review/SKILL.md:4. Enforces `Stage-1 spec-compliance gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-confidence-scoring

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Confidence Scoring` |
| **card** | — | — | [confidence-scoring](../concepts/rjm/confidence-scoring.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/merge-resolver.md:237. Enforces `Confidence Scoring` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-decision-audit-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `decision_audit_verification` |
| **card** | — | — | [decision-audit-verification](../concepts/rjm/decision-audit-verification.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/planner/scripts/planner.py:126. Enforces `decision_audit_verification` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-six-agent-adr-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `six-agent adr-review` |
| **card** | — | — | [six-agent-adr-review](../concepts/rjm/six-agent-adr-review.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:16. Enforces `six-agent adr-review` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Review`.
- **needs decision:** no
- **decision:** —

### rjm-consensus

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Consensus` |
| **card** | — | — | [consensus](../concepts/rjm/consensus.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:12. Enforces `Consensus` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-compliant

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `COMPLIANT` |
| **card** | — | — | [compliant](../concepts/rjm/compliant.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/quality_gate/spec_external_signal_gate.py:31. Enforces `COMPLIANT` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-non-regression-ratchet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NON-REGRESSION RATCHET` |
| **card** | — | — | [non-regression-ratchet](../concepts/rjm/non-regression-ratchet.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/instruction_budget.py:18. Enforces `NON-REGRESSION RATCHET` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-evaluate-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `evaluate_gate` |
| **card** | — | — | [evaluate-gate](../concepts/rjm/evaluate-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/ci/check_ai_review_infra_gate.py:59. Enforces `evaluate_gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-pre-push-audit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-Push Audit` |
| **card** | — | — | [pre-push-audit](../concepts/rjm/pre-push-audit.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/autonomous-pr-monitor.md:745. Enforces `Pre-Push Audit` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-phase-6-evidence-audit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 6 evidence audit` |
| **card** | — | — | [phase-6-evidence-audit](../concepts/rjm/phase-6-evidence-audit.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-empirical-probe-toolkit/references/worked-examples.md:17. Enforces `Phase 6 evidence audit` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-needs-deep-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NEEDS_DEEP_REVIEW` |
| **card** | — | — | [needs-deep-review](../concepts/rjm/needs-deep-review.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-074-security-review-quick-pass-mode.md:115. Enforces `NEEDS_DEEP_REVIEW` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Review`.
- **needs decision:** no
- **decision:** —

### rjm-merge-tree-ratchet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `merge-tree ratchet` |
| **card** | — | — | [merge-tree-ratchet](../concepts/rjm/merge-tree-ratchet.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/ci/merge_tree_ratchet_check.py:2. Enforces `merge-tree ratchet` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-post-implementation-verification-piv-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Post-Implementation Verification (PIV) Protocol` |
| **card** | — | — | [post-implementation-verification-piv-protocol](../concepts/rjm/post-implementation-verification-piv-protocol.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security.md:418. Enforces `Post-Implementation Verification (PIV) Protocol` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-critical-fail-merge-blocked

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CRITICAL_FAIL (Merge Blocked)` |
| **card** | — | — | [critical-fail-merge-blocked](../concepts/rjm/critical-fail-merge-blocked.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/review/references/security.md:154. Enforces `CRITICAL_FAIL (Merge Blocked)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-critical-failure-triggers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Critical Failure Triggers` |
| **card** | — | — | [critical-failure-triggers](../concepts/rjm/critical-failure-triggers.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/review/references/agent-safety.md:127. Enforces `Critical Failure Triggers` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-portability-ratchets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `portability ratchets` |
| **card** | — | — | [portability-ratchets](../concepts/rjm/portability-ratchets.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/portability_baseline.py:1. Enforces `portability ratchets` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-stop-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Stop Criteria` |
| **card** | — | — | [stop-criteria](../concepts/rjm/stop-criteria.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security.md:173. Enforces `Stop Criteria` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-consensus-criteria

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Consensus Criteria` |
| **card** | — | — | [consensus-criteria](../concepts/rjm/consensus-criteria.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/adr-review/references/debate-protocol.md:198. Enforces `Consensus Criteria` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-count-ratchet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `count ratchet` |
| **card** | — | — | [count-ratchet](../concepts/rjm/count-ratchet.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/ci/count_ratchet.py:3. Enforces `count ratchet` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-qa-review-recursive

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `QA Review (Recursive)` |
| **card** | — | — | [qa-review-recursive](../concepts/rjm/qa-review-recursive.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/autonomous-issue-development.md:47. Enforces `QA Review (Recursive)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:verify`.
- **needs decision:** no
- **decision:** —

### rjm-risk-scores-with-numeric-values

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Risk Scores with Numeric Values` |
| **card** | — | — | [risk-scores-with-numeric-values](../concepts/rjm/risk-scores-with-numeric-values.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security.md:71. Enforces `Risk Scores with Numeric Values` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-confirmed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Confirmed` |
| **card** | — | — | [confirmed](../concepts/rjm/confirmed.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/reviewer-findings/SKILL.md:56. Enforces `Confirmed` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-critic-review-recursive

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Critic Review (Recursive)` |
| **card** | — | — | [critic-review-recursive](../concepts/rjm/critic-review-recursive.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/autonomous-issue-development.md:41. Enforces `Critic Review (Recursive)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:verify`.
- **needs decision:** no
- **decision:** —

### rjm-declined

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Declined` |
| **card** | — | — | [declined](../concepts/rjm/declined.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/reviewer-findings/SKILL.md:57. Enforces `Declined` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-size-exception-audit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Size Exception Audit` |
| **card** | — | — | [size-exception-audit](../concepts/rjm/size-exception-audit.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:306. Enforces `Size Exception Audit` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-quick-pass

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `QUICK_PASS` |
| **card** | — | — | [quick-pass](../concepts/rjm/quick-pass.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-074-security-review-quick-pass-mode.md:114. Enforces `QUICK_PASS` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Review`.
- **needs decision:** no
- **decision:** —

### rjm-mypy-changed-files-ratchet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Mypy Changed Files (ratchet)` |
| **card** | — | — | [mypy-changed-files-ratchet](../concepts/rjm/mypy-changed-files-ratchet.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:250. Enforces `Mypy Changed Files (ratchet)` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-adr-review-debate-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `adr-review debate gate` |
| **card** | — | — | [adr-review-debate-gate](../concepts/rjm/adr-review-debate-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:78. Enforces `adr-review debate gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-superseded-by-base

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Superseded by base` |
| **card** | — | — | [superseded-by-base](../concepts/rjm/superseded-by-base.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/autonomous-pr-monitor.md:109. Enforces `Superseded by base` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-adr-and-design-review-length-bounds

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR and Design Review Length Bounds` |
| **card** | — | — | [adr-and-design-review-length-bounds](../concepts/rjm/adr-and-design-review-length-bounds.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/architect.shared.md:503. Enforces `ADR and Design Review Length Bounds` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-tier-3-architecture-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tier 3 architecture review` |
| **card** | — | — | [tier-3-architecture-review](../concepts/rjm/tier-3-architecture-review.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-058-agent-eval-discipline.md:200. Enforces `Tier 3 architecture review` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-six-role-adr-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `six-role adr-review` |
| **card** | — | — | [six-role-adr-review](../concepts/rjm/six-role-adr-review.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:70. Enforces `six-role adr-review` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-non-compliant

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NON_COMPLIANT` |
| **card** | — | — | [non-compliant](../concepts/rjm/non-compliant.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/quality_gate/spec_external_signal_gate.py:31. Enforces `NON_COMPLIANT` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-tier-4-5-adr-generation-and-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tier 4-5 ADR generation and review` |
| **card** | — | — | [tier-4-5-adr-generation-and-review](../concepts/rjm/tier-4-5-adr-generation-and-review.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-prior-art-schema.md:232. Enforces `Tier 4-5 ADR generation and review` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-pass-standards-met

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PASS (Standards Met)` |
| **card** | — | — | [pass-standards-met](../concepts/rjm/pass-standards-met.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/review/references/security.md:194. Enforces `PASS (Standards Met)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-count-ratchets

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `count ratchets` |
| **card** | — | — | [count-ratchets](../concepts/rjm/count-ratchets.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:221. Enforces `count ratchets` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-ai-quality-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `AI quality gate` |
| **card** | — | — | [ai-quality-gate](../concepts/rjm/ai-quality-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/projects/v0.3.1/PowerShell-migration.md:206. Enforces `AI quality gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Review`.
- **needs decision:** no
- **decision:** —

### rjm-re-accretion-ratchet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `re-accretion ratchet` |
| **card** | — | — | [re-accretion-ratchet](../concepts/rjm/re-accretion-ratchet.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-097-zero-tool-use-hooks.md:39. Enforces `re-accretion ratchet` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-human-review-required

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Human Review Required` |
| **card** | — | — | [human-review-required](../concepts/rjm/human-review-required.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/synthesis-protocol.md:283. Enforces `Human Review Required` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-vendor-portability-ratchet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Vendor-portability ratchet` |
| **card** | — | — | [vendor-portability-ratchet](../concepts/rjm/vendor-portability-ratchet.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/check_skill_portability.py:3. Enforces `Vendor-portability ratchet` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-changes-requested

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CHANGES_REQUESTED` |
| **card** | — | — | [changes-requested](../concepts/rjm/changes-requested.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/ci/detect_human_changes_requested.py:1. Enforces `CHANGES_REQUESTED` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-architecture-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `architecture review` |
| **card** | — | — | [architecture-review](../concepts/rjm/architecture-review.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/software-engineering-library/SKILL.md:4. Enforces `architecture review` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-design-review-frontmatter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Design Review Frontmatter` |
| **card** | — | — | [design-review-frontmatter](../concepts/rjm/design-review-frontmatter.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:269. Enforces `Design Review Frontmatter` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-validate-adr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate-adr` |
| **card** | — | — | [validate-adr](../concepts/rjm/validate-adr.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md:147. Enforces `validate-adr` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Review`.
- **needs decision:** no
- **decision:** —

### rjm-portability-ratchet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `portability ratchet` |
| **card** | — | — | [portability-ratchet](../concepts/rjm/portability-ratchet.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/portability_floor.py:1. Enforces `portability ratchet` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-confidence-threshold

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Confidence Threshold` |
| **card** | — | — | [confidence-threshold](../concepts/rjm/confidence-threshold.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/reflect/references/phase2-signal-detection.md:82. Enforces `Confidence Threshold` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-critic-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Critic Review` |
| **card** | — | — | [critic-review](../concepts/rjm/critic-review.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/customization.md:154. Enforces `Critic Review` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-needs-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NEEDS_REVIEW` |
| **card** | — | — | [needs-review](../concepts/rjm/needs-review.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/ai_review_common/cache_guard.py:13. Enforces `NEEDS_REVIEW` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-adr-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `adr-review` |
| **card** | — | — | [adr-review](../concepts/rjm/adr-review.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/adr-review/SKILL.md:2. Enforces `adr-review` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-spec-compliance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `spec-compliance` |
| **card** | — | — | [spec-compliance](../concepts/rjm/spec-compliance.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/review/references/spec-compliance.md:2. Enforces `spec-compliance` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-adr-review-enforcement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR review enforcement` |
| **card** | — | — | [adr-review-enforcement](../concepts/rjm/adr-review-enforcement.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:38. Enforces `ADR review enforcement` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-completion-trigger-taxonomy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Completion Trigger Taxonomy` |
| **card** | — | — | [completion-trigger-taxonomy](../concepts/rjm/completion-trigger-taxonomy.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security.md:219. Enforces `Completion Trigger Taxonomy` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-adr-approval

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ADR approval` |
| **card** | — | — | [adr-approval](../concepts/rjm/adr-approval.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security/references/dependency-risk-scoring.md:19. Enforces `ADR approval` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-recursive-review-cycles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Recursive Review Cycles` |
| **card** | — | — | [recursive-review-cycles](../concepts/rjm/recursive-review-cycles.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/autonomous-issue-development.md:37. Enforces `Recursive Review Cycles` gate.
- **sequencing note:** Enforced in rjm phase `rjm:verify`.
- **needs decision:** no
- **decision:** —

### rjm-quantified-impact-statements

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quantified Impact Statements` |
| **card** | — | — | [quantified-impact-statements](../concepts/rjm/quantified-impact-statements.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security.md:73. Enforces `Quantified Impact Statements` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-unreproduced

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Unreproduced` |
| **card** | — | — | [unreproduced](../concepts/rjm/unreproduced.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/reviewer-findings/SKILL.md:58. Enforces `Unreproduced` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-merge-blocking

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `MERGE BLOCKING` |
| **card** | — | — | [merge-blocking](../concepts/rjm/merge-blocking.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:6. Enforces `MERGE BLOCKING` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-markdown-vendor-portability-ratchet

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Markdown vendor-portability ratchet` |
| **card** | — | — | [markdown-vendor-portability-ratchet](../concepts/rjm/markdown-vendor-portability-ratchet.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/check_skill_md_portability.py:3. Enforces `Markdown vendor-portability ratchet` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-post-implementation-qr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Post-Implementation QR` |
| **card** | — | — | [post-implementation-qr](../concepts/rjm/post-implementation-qr.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/planner/SKILL.md:214. Enforces `Post-Implementation QR` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-review-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `review gate` |
| **card** | — | — | [review-gate](../concepts/rjm/review-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/SKILL-PHASE-GATES.md:61. Enforces `review gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-approved-with-conditions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `APPROVED WITH CONDITIONS` |
| **card** | — | — | [approved-with-conditions](../concepts/rjm/approved-with-conditions.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/archive/planning/PR-60/003-pr-60-plan-critique.md:10. Enforces `APPROVED WITH CONDITIONS` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-adr-review-policy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `adr-review-policy` |
| **card** | — | — | [adr-review-policy](../concepts/rjm/adr-review-policy.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-033-routing-level-enforcement-gates.md:494. Enforces `adr-review-policy` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —


## 7. Release, Deployment & Shipping Decision Gates

### quality-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `quality gates` | — | `Quality Gates` |
| **card** | [quality-gates](../concepts/addy/quality-gates.md) | — | [quality-gates](../concepts/rjm/quality-gates.md) |
| **kind** | gate | — | gate |
| **phase** | `addy:Define` | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** none material. Both packages define formal quality gates that aggregate verification passes, linting, and automated checks into a unified barrier.
- **sequencing note:** Enforced at build and pre-ship boundaries.
- **needs decision:** no
- **decision:** —

### performance-budget

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `performance budget` | — | `Performance Budget` |
| **card** | [performance-budget](../concepts/addy/performance-budget.md) | — | [performance-budget](../concepts/rjm/performance-budget.md) |
| **kind** | gate | — | gate |
| **phase** | `addy:Review` | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** none material. Both packages define performance budgets as quantifiable thresholds (execution latency, resource usage, bundle constraints) that must not be exceeded.
- **sequencing note:** Evaluated during testing and release preparation.
- **needs decision:** no
- **decision:** —

### accepted-verdict

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `ACCEPTED` | — | `ACCEPTED` |
| **card** | [accepted](../concepts/addy/accepted.md) | — | [accepted](../concepts/rjm/accepted.md) |
| **kind** | gate | — | gate |
| **phase** | `addy:Ship` | — | `rjm:Review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** none material. Both packages define ACCEPTED as the formal sign-off state for a reviewed artifact or completed work unit.
- **sequencing note:** Emitted upon successful review or verification.
- **needs decision:** no
- **decision:** —

### go-no-go-verdict

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `"go/no-go"` | — | `GO/NO-GO` |
| **card** | [go-no-go](../concepts/addy/go-no-go.md) | — | [go-no-go](../concepts/rjm/go-no-go.md) |
| **kind** | gate | — | gate |
| **phase** | `addy:Ship` | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** ALIGNED
- **difference:** none material. Both Addy and RJM define the GO/NO-GO binary verdict that governs whether a change is cleared for production release or blocked.
- **sequencing note:** Terminal evaluation in release / ship phase.
- **needs decision:** no
- **decision:** —

### addy-bundle-size

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `BUNDLE SIZE` | — | — |
| **card** | [bundle-size](../concepts/addy/bundle-size.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/ci-cd-and-automation/SKILL.md:47. Enforces `BUNDLE SIZE` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-ship-readiness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Ship-readiness` | — | — |
| **card** | [ship-readiness](../concepts/addy/ship-readiness.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in references/definition-of-done.md:47. Enforces `Ship-readiness` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-launch-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `launch gates` | — | — |
| **card** | [launch-gates](../concepts/addy/launch-gates.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/cases/shipping-and-launch.json:50. Enforces `launch gates` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-go

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `GO` | — | — |
| **card** | [go](../concepts/addy/go.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/cases/shipping-and-launch.json:44. Enforces `GO` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-no-go

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `no-go` | — | — |
| **card** | [no-go](../concepts/addy/no-go.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/cases/shipping-and-launch.json:45. Enforces `no-go` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-lint-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `LINT CHECK` | — | — |
| **card** | [lint-check](../concepts/addy/lint-check.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/ci-cd-and-automation/SKILL.md:33. Enforces `LINT CHECK` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-e2e

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `E2E` | — | — |
| **card** | [e2e](../concepts/addy/e2e.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/ci-cd-and-automation/SKILL.md:43. Enforces `E2E` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-ship-decision-go-no-go

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `"Ship Decision: GO | NO-GO"` | — | — |
| **card** | [ship-decision-go-no-go](../concepts/addy/ship-decision-go-no-go.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in commands/ship.toml:43. Enforces `"Ship Decision: GO | NO-GO"` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-go-or-stop-verdict

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `go or stop verdict` | — | — |
| **card** | [go-or-stop-verdict](../concepts/addy/go-or-stop-verdict.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/cases/doubt-driven-development.json:31. Enforces `go or stop verdict` gate.
- **sequencing note:** Enforced in addy phase `addy:Build`.
- **needs decision:** no
- **decision:** —

### addy-blockers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `blockers` | — | — |
| **card** | [blockers](../concepts/addy/blockers.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/cases/shipping-and-launch.json:32. Enforces `blockers` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-proposed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `PROPOSED` | — | — |
| **card** | [proposed](../concepts/addy/proposed.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/documentation-and-adrs/SKILL.md:96. Enforces `PROPOSED` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-the-deprecation-decision

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `The Deprecation Decision` | — | — |
| **card** | [the-deprecation-decision](../concepts/addy/the-deprecation-decision.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/deprecation-and-migration/SKILL.md:37. Enforces `The Deprecation Decision` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-good-enough-to-ship

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `good enough to ship` | — | — |
| **card** | [good-enough-to-ship](../concepts/addy/good-enough-to-ship.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/SKILL.md:16. Enforces `good enough to ship` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-independently-green

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `independently green` | — | — |
| **card** | [independently-green](../concepts/addy/independently-green.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/cases/git-workflow-and-versioning.json:36. Enforces `independently green` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-superseded

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `SUPERSEDED` | — | — |
| **card** | [superseded](../concepts/addy/superseded.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/documentation-and-adrs/SKILL.md:100. Enforces `SUPERSEDED` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-go-or-no-go-verdict

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `go or no-go verdict` | — | — |
| **card** | [go-or-no-go-verdict](../concepts/addy/go-or-no-go-verdict.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/cases/shipping-and-launch.json:32. Enforces `go or no-go verdict` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-end-to-end-checkout-test

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `end-to-end checkout test` | — | — |
| **card** | [end-to-end-checkout-test](../concepts/addy/end-to-end-checkout-test.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/fixtures/shipping-and-launch/launch-status.md:4. Enforces `end-to-end checkout test` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-pre-launch-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Pre-Launch Gate` | — | — |
| **card** | [pre-launch-gate](../concepts/addy/pre-launch-gate.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in references/observability-checklist.md:83. Enforces `Pre-Launch Gate` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-test-gates

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `test gates` | — | — |
| **card** | [test-gates](../concepts/addy/test-gates.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/cases/shipping-and-launch.json:45. Enforces `test gates` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-deprecated

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `DEPRECATED` | — | — |
| **card** | [deprecated](../concepts/addy/deprecated.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Ship` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/documentation-and-adrs/SKILL.md:96. Enforces `DEPRECATED` gate.
- **sequencing note:** Enforced in addy phase `addy:Ship`.
- **needs decision:** no
- **decision:** —

### addy-clean-rollback-guarantee

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `clean-rollback guarantee` | — | — |
| **card** | [clean-rollback-guarantee](../concepts/addy/clean-rollback-guarantee.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Build` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in .gemini/commands/build.toml:31. Enforces `clean-rollback guarantee` gate.
- **sequencing note:** Enforced in addy phase `addy:Build`.
- **needs decision:** no
- **decision:** —

### rjm-no-auxiliary-files

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `no auxiliary files` |
| **card** | — | — | [no-auxiliary-files](../concepts/rjm/no-auxiliary-files.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/TRANSFORMATION_NOTES.md:22. Enforces `no auxiliary files` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-check-mode

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Check Mode` |
| **card** | — | — | [check-mode](../concepts/rjm/check-mode.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/third-party-license-attribution.md:61. Enforces `Check Mode` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-piv-verdict-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PIV verdict gate` |
| **card** | — | — | [piv-verdict-gate](../concepts/rjm/piv-verdict-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security.md:399. Enforces `PIV verdict gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Review`.
- **needs decision:** no
- **decision:** —

### rjm-subprocess-encoding-convention

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Subprocess Encoding Convention` |
| **card** | — | — | [subprocess-encoding-convention](../concepts/rjm/subprocess-encoding-convention.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:232. Enforces `Subprocess Encoding Convention` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-pre-flight-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pre-flight validation` |
| **card** | — | — | [pre-flight-validation](../concepts/rjm/pre-flight-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/workflow-commands.md:176. Enforces `pre-flight validation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-description-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Description Validation` |
| **card** | — | — | [description-validation](../concepts/rjm/description-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/ci/build_pr_validation_report.py:93. Enforces `Description Validation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-active-plan-closeout-advisory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Active Plan Closeout Advisory` |
| **card** | — | — | [active-plan-closeout-advisory](../concepts/rjm/active-plan-closeout-advisory.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:352. Enforces `Active Plan Closeout Advisory` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-shipped-skill-routes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Shipped Skill Routes` |
| **card** | — | — | [shipped-skill-routes](../concepts/rjm/shipped-skill-routes.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:331. Enforces `Shipped Skill Routes` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-language-baseline-always-on-budget

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `language-baseline always-on budget` |
| **card** | — | — | [language-baseline-always-on-budget](../concepts/rjm/language-baseline-always-on-budget.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/instruction_budget.py:12. Enforces `language-baseline always-on budget` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-manual-override

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Manual override` |
| **card** | — | — | [manual-override](../concepts/rjm/manual-override.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-090-pr-branch-holder-lease.md:42. Enforces `Manual override` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-test-working-tree-writes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Test Working Tree Writes` |
| **card** | — | — | [test-working-tree-writes](../concepts/rjm/test-working-tree-writes.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:233. Enforces `Test Working Tree Writes` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-version-bump-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Version-bump gate` |
| **card** | — | — | [version-bump-gate](../concepts/rjm/version-bump-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:40. Enforces `Version-bump gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-merge-guards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Merge Guards` |
| **card** | — | — | [merge-guards](../concepts/rjm/merge-guards.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md:143. Enforces `Merge Guards` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-pre-flight-checks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-flight Checks` |
| **card** | — | — | [pre-flight-checks](../concepts/rjm/pre-flight-checks.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/ship.md:58. Enforces `Pre-flight Checks` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-markdown-lint

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Markdown Lint` |
| **card** | — | — | [markdown-lint](../concepts/rjm/markdown-lint.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr.py:10. Enforces `Markdown Lint` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-nested-test-detection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Nested Test Detection` |
| **card** | — | — | [nested-test-detection](../concepts/rjm/nested-test-detection.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:225. Enforces `Nested Test Detection` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-post-deployment-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Post-Deployment Validation` |
| **card** | — | — | [post-deployment-validation](../concepts/rjm/post-deployment-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-041-codeql-integration.md:346. Enforces `Post-Deployment Validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-merged-verdict

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `merged verdict` |
| **card** | — | — | [merged-verdict](../concepts/rjm/merged-verdict.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/review/SKILL.md:67. Enforces `merged verdict` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-guards-shipped-without-self-application

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Guards shipped without self-application` |
| **card** | — | — | [guards-shipped-without-self-application](../concepts/rjm/guards-shipped-without-self-application.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-failure-archaeology/SKILL.md:71. Enforces `Guards shipped without self-application` gate.
- **sequencing note:** Enforced in rjm phase `rjm:verify`.
- **needs decision:** no
- **decision:** —

### rjm-ownership-first

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Ownership first` |
| **card** | — | — | [ownership-first](../concepts/rjm/ownership-first.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:spec` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/spec-generator/references/spec-prior-art-schema.md:188. Enforces `Ownership first` gate.
- **sequencing note:** Enforced in rjm phase `rjm:spec`.
- **needs decision:** no
- **decision:** —

### rjm-worktree-recipe-destinations

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Worktree Recipe Destinations` |
| **card** | — | — | [worktree-recipe-destinations](../concepts/rjm/worktree-recipe-destinations.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:240. Enforces `Worktree Recipe Destinations` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-skill-budget-rule

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Budget Rule` |
| **card** | — | — | [skill-budget-rule](../concepts/rjm/skill-budget-rule.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/analyze/references/agent-architecture-patterns.md:11. Enforces `Skill Budget Rule` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-branch-protection-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Branch protection rules` |
| **card** | — | — | [branch-protection-rules](../concepts/rjm/branch-protection-rules.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/github-api-capabilities.md:45. Enforces `Branch protection rules` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-strategic-review-verdict

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Strategic Review Verdict` |
| **card** | — | — | [strategic-review-verdict](../concepts/rjm/strategic-review-verdict.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/adr-review/SKILL.md:160. Enforces `Strategic Review Verdict` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-planning-artifacts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Planning Artifacts` |
| **card** | — | — | [planning-artifacts](../concepts/rjm/planning-artifacts.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:361. Enforces `Planning Artifacts` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-push-lock-path-agreement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Push Lock Path Agreement` |
| **card** | — | — | [push-lock-path-agreement](../concepts/rjm/push-lock-path-agreement.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:234. Enforces `Push Lock Path Agreement` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-instruction-budget-always-on

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Instruction Budget (always-on)` |
| **card** | — | — | [instruction-budget-always-on](../concepts/rjm/instruction-budget-always-on.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:413. Enforces `Instruction Budget (always-on)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-rollback-trigger

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `rollback-trigger` |
| **card** | — | — | [rollback-trigger](../concepts/rjm/rollback-trigger.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/software_engineering_library_activation_gate.py:2. Enforces `rollback-trigger` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-session-end-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Session End Validation` |
| **card** | — | — | [session-end-validation](../concepts/rjm/session-end-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:247. Enforces `Session End Validation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-budget-exceeded

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `budget_exceeded` |
| **card** | — | — | [budget-exceeded](../concepts/rjm/budget-exceeded.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-074-security-review-quick-pass-mode.md:98. Enforces `budget_exceeded` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Review`.
- **needs decision:** no
- **decision:** —

### rjm-duplicate-test-helper-detection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Duplicate Test Helper Detection` |
| **card** | — | — | [duplicate-test-helper-detection](../concepts/rjm/duplicate-test-helper-detection.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:226. Enforces `Duplicate Test Helper Detection` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-license-compatibility

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `License Compatibility` |
| **card** | — | — | [license-compatibility](../concepts/rjm/license-compatibility.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/third-party-license-attribution.md:24. Enforces `License Compatibility` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-yaml-style-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `YAML Style Validation` |
| **card** | — | — | [yaml-style-validation](../concepts/rjm/yaml-style-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:353. Enforces `YAML Style Validation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-deployment-frequency-goals

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Deployment Frequency Goals` |
| **card** | — | — | [deployment-frequency-goals](../concepts/rjm/deployment-frequency-goals.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/devops.md:257. Enforces `Deployment Frequency Goals` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-validate-spec-coverage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validate Spec Coverage` |
| **card** | — | — | [validate-spec-coverage](../concepts/rjm/validate-spec-coverage.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/push-pr.md:42. Enforces `Validate Spec Coverage` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-exact-sha-push-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `exact-SHA push verification` |
| **card** | — | — | [exact-sha-push-verification](../concepts/rjm/exact-sha-push-verification.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-090-pr-branch-holder-lease.md:144. Enforces `exact-SHA push verification` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-verdict-thresholds

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Verdict Thresholds` |
| **card** | — | — | [verdict-thresholds](../concepts/rjm/verdict-thresholds.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/review/references/devops.md:256. Enforces `Verdict Thresholds` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-override-authorization

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Override authorization` |
| **card** | — | — | [override-authorization](../concepts/rjm/override-authorization.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-090-pr-branch-holder-lease.md:142. Enforces `Override authorization` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-overall-verdict

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Overall verdict` |
| **card** | — | — | [overall-verdict](../concepts/rjm/overall-verdict.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/test.md:158. Enforces `Overall verdict` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-commit-count-thresholds

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Commit Count Thresholds` |
| **card** | — | — | [commit-count-thresholds](../concepts/rjm/commit-count-thresholds.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in CONTRIBUTING.md:839. Enforces `Commit Count Thresholds` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-go-no-go-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Go/no-go gate` |
| **card** | — | — | [go-no-go-gate](../concepts/rjm/go-no-go-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:chaos-experiment` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:60. Enforces `Go/no-go gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:chaos-experiment`.
- **needs decision:** no
- **decision:** —

### rjm-temp-filesystem-worktrees-advisory

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Temp-filesystem Worktrees (advisory)` |
| **card** | — | — | [temp-filesystem-worktrees-advisory](../concepts/rjm/temp-filesystem-worktrees-advisory.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:246. Enforces `Temp-filesystem Worktrees (advisory)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-pr-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PR Standards` |
| **card** | — | — | [pr-standards](../concepts/rjm/pr-standards.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/ci/build_pr_validation_report.py:99. Enforces `PR Standards` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-push-verification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `push verification` |
| **card** | — | — | [push-verification](../concepts/rjm/push-verification.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-090-pr-branch-holder-lease.md:47. Enforces `push verification` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-final-verdict

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `FINAL VERDICT` |
| **card** | — | — | [final-verdict](../concepts/rjm/final-verdict.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/review/SKILL.md:73. Enforces `FINAL VERDICT` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-always-on-corpus-claims

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Always-on Corpus Claims` |
| **card** | — | — | [always-on-corpus-claims](../concepts/rjm/always-on-corpus-claims.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:419. Enforces `Always-on Corpus Claims` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-tests-passing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tests passing` |
| **card** | — | — | [tests-passing](../concepts/rjm/tests-passing.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/ship.md:111. Enforces `Tests passing` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-plugin-version-bump

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Plugin Version Bump` |
| **card** | — | — | [plugin-version-bump](../concepts/rjm/plugin-version-bump.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:377. Enforces `Plugin Version Bump` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-unreachable-code-detection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Unreachable Code Detection` |
| **card** | — | — | [unreachable-code-detection](../concepts/rjm/unreachable-code-detection.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:228. Enforces `Unreachable Code Detection` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-argument-hint-frontmatter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Argument-Hint Frontmatter` |
| **card** | — | — | [argument-hint-frontmatter](../concepts/rjm/argument-hint-frontmatter.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:393. Enforces `Argument-Hint Frontmatter` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-plugin-version-field-present

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Plugin version field present` |
| **card** | — | — | [plugin-version-field-present](../concepts/rjm/plugin-version-field-present.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-generation-and-release/SKILL.md:111. Enforces `Plugin version field present` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-consultation-budget

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `consultation budget` |
| **card** | — | — | [consultation-budget](../concepts/rjm/consultation-budget.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-087-held-out-validated-improvement.md:547. Enforces `consultation budget` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-token-budget

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Token Budget` |
| **card** | — | — | [token-budget](../concepts/rjm/token-budget.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/SKILL-CREATION-CRITERIA.md:300. Enforces `Token Budget` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-branch-mutation-enforcement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Branch mutation enforcement` |
| **card** | — | — | [branch-mutation-enforcement](../concepts/rjm/branch-mutation-enforcement.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-090-pr-branch-holder-lease.md:39. Enforces `Branch mutation enforcement` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-pre-push-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pre-push gate` |
| **card** | — | — | [pre-push-gate](../concepts/rjm/pre-push-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-090-pr-branch-holder-lease.md:79. Enforces `pre-push gate` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-verdict-taxonomy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Verdict Taxonomy` |
| **card** | — | — | [verdict-taxonomy](../concepts/rjm/verdict-taxonomy.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/security-review/SKILL.md:184. Enforces `Verdict Taxonomy` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-copilot-agent-frontmatter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Copilot Agent Frontmatter` |
| **card** | — | — | [copilot-agent-frontmatter](../concepts/rjm/copilot-agent-frontmatter.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:384. Enforces `Copilot Agent Frontmatter` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-reviewed-on-this-sha

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reviewed on this SHA` |
| **card** | — | — | [reviewed-on-this-sha](../concepts/rjm/reviewed-on-this-sha.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/ship.md:79. Enforces `Reviewed on this SHA` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-verdict-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Verdict Rules` |
| **card** | — | — | [verdict-rules](../concepts/rjm/verdict-rules.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/critic.md:136. Enforces `Verdict Rules` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-description-budget

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Description budget` |
| **card** | — | — | [description-budget](../concepts/rjm/description-budget.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:11. Enforces `Description budget` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-yaml-style

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `YAML Style` |
| **card** | — | — | [yaml-style](../concepts/rjm/yaml-style.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr.py:16. Enforces `YAML Style` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-ready-to-merge-definition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Ready-to-Merge Definition` |
| **card** | — | — | [ready-to-merge-definition](../concepts/rjm/ready-to-merge-definition.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/autonomous-pr-monitor.md:56. Enforces `Ready-to-Merge Definition` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-validate-plugin-manifests

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate-plugin-manifests` |
| **card** | — | — | [validate-plugin-manifests](../concepts/rjm/validate-plugin-manifests.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:150. Enforces `validate-plugin-manifests` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Ship`.
- **needs decision:** no
- **decision:** —

### rjm-review-marker-sha-bound-review

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Review Marker (SHA-bound /review)` |
| **card** | — | — | [review-marker-sha-bound-review](../concepts/rjm/review-marker-sha-bound-review.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:409. Enforces `Review Marker (SHA-bound /review)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-timeout-budget

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Timeout budget` |
| **card** | — | — | [timeout-budget](../concepts/rjm/timeout-budget.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/codeql-architecture.md:93. Enforces `Timeout budget` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —


## 8. Runtime, Tool Hook & Context Guardrails

### pre-commit-hook

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `pre-commit hook` | `Pre-commit hook` |
| **card** | — | [pre-commit-hook](../concepts/matt/pre-commit-hook.md) | [pre-commit-hook](../concepts/rjm/pre-commit-hook.md) |
| **kind** | — | gate | gate |
| **phase** | — | `cross-phase` | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | clean |

- **class:** ALIGNED
- **difference:** none material. Both Matt and RJM configure pre-commit hooks to automatically execute formatting, linting, and fast tests prior to committing code.
- **sequencing note:** Fires immediately prior to git commit creation.
- **needs decision:** no
- **decision:** —

### pretooluse-hook

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `PreToolUse` | `PreToolUse hook` | — |
| **card** | [pretooluse](../concepts/addy/pretooluse.md) | [pretooluse-hook](../concepts/matt/pretooluse-hook.md) | — |
| **kind** | gate | gate | — |
| **phase** | `cross-phase` | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | clean | — |

- **class:** SYNONYM
- **difference:** Addy defines PreToolUse as an interception event for permissions and validation; Matt defines PreToolUse hook as an automated boundary check preventing unsafe file edits.
- **sequencing note:** Fires immediately prior to tool execution in the agent harness.
- **needs decision:** yes
- **decision:** —

### pre-commit-validation-checks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Pre-Commit Checks` | — | `pre-push hook` |
| **card** | [pre-commit-checks](../concepts/addy/pre-commit-checks.md) | — | [pre-push-hook](../concepts/rjm/pre-push-hook.md) |
| **kind** | gate | — | gate |
| **phase** | `cross-phase` | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | clean |

- **class:** SYNONYM
- **difference:** Addy defines pre-commit checks as local automated lint/typecheck steps; RJM enforces pre-push hooks at git push boundary to prevent broken commits reaching remote.
- **sequencing note:** Gating commits locally or pushes remotely.
- **needs decision:** yes
- **decision:** —

### addy-posttooluse

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `PostToolUse` | — | — |
| **card** | [posttooluse](../concepts/addy/posttooluse.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in hooks/sdd-cache-post.sh:2. Enforces `PostToolUse` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-subagents-cannot-spawn-other-subagents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Subagents cannot spawn other subagents` | — | — |
| **card** | [subagents-cannot-spawn-other-subagents](../concepts/addy/subagents-cannot-spawn-other-subagents.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in references/orchestration-patterns.md:145. Enforces `Subagents cannot spawn other subagents` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-simplify-ignore-hook

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `simplify-ignore hook` | — | — |
| **card** | [simplify-ignore-hook](../concepts/addy/simplify-ignore-hook.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in hooks/SIMPLIFY-IGNORE.md:3. Enforces `simplify-ignore hook` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-sessionstart

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `SessionStart` | — | — |
| **card** | [sessionstart](../concepts/addy/sessionstart.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in hooks/hooks.json:3. Enforces `SessionStart` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-posttooluse-edit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `PostToolUse Edit` | — | — |
| **card** | [posttooluse-edit](../concepts/addy/posttooluse-edit.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in hooks/simplify-ignore.sh:5. Enforces `PostToolUse Edit` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-command-parity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `command parity` | — | — |
| **card** | [command-parity](../concepts/addy/command-parity.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in docs/developer-onboarding.md:74. Enforces `command parity` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-pretooluse-read

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `PreToolUse Read` | — | — |
| **card** | [pretooluse-read](../concepts/addy/pretooluse-read.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in hooks/simplify-ignore.sh:4. Enforces `PreToolUse Read` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-posttooluse-write

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `PostToolUse Write` | — | — |
| **card** | [posttooluse-write](../concepts/addy/posttooluse-write.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Review` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in hooks/simplify-ignore.sh:6. Enforces `PostToolUse Write` gate.
- **sequencing note:** Enforced in addy phase `addy:Review`.
- **needs decision:** no
- **decision:** —

### addy-parity-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Parity check` | — | — |
| **card** | [parity-check](../concepts/addy/parity-check.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in scripts/validate-commands.js:113. Enforces `Parity check` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-husky-pre-commit-hooks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Husky pre-commit hooks` | — |
| **card** | — | [husky-pre-commit-hooks](../concepts/matt/husky-pre-commit-hooks.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/misc/README.md:8. Enforces `Husky pre-commit hooks` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-surprising-without-context

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Surprising without context` | — |
| **card** | — | [surprising-without-context](../concepts/matt/surprising-without-context.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/engineering/domain-modeling/ADR-FORMAT.md:34. Enforces `Surprising without context` gate.
- **sequencing note:** Enforced in matt phase `matt:none`.
- **needs decision:** no
- **decision:** —

### rjm-git-hook-jobs

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Git hook jobs` |
| **card** | — | — | [git-hook-jobs](../concepts/rjm/git-hook-jobs.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-change-control/references/provenance.md:14. Enforces `Git hook jobs` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pinned-required-contexts

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pinned required contexts` |
| **card** | — | — | [pinned-required-contexts](../concepts/rjm/pinned-required-contexts.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-change-control/references/provenance.md:22. Enforces `Pinned required contexts` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-trusted-execution-context

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `trusted execution context` |
| **card** | — | — | [trusted-execution-context](../concepts/rjm/trusted-execution-context.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:test` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/assert_trusted_smoke_context.py:2. Enforces `trusted execution context` gate.
- **sequencing note:** Enforced in rjm phase `rjm:test`.
- **needs decision:** no
- **decision:** —

### rjm-agentstop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `agentStop` |
| **card** | — | — | [agentstop](../concepts/rjm/agentstop.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/agent-harness-reference/references/official-hook-contracts.md:92. Enforces `agentStop` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-install-parity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Install-parity` |
| **card** | — | — | [install-parity](../concepts/rjm/install-parity.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:145. Enforces `Install-parity` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-pre-commit-hooks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-Commit Hooks` |
| **card** | — | — | [pre-commit-hooks](../concepts/rjm/pre-commit-hooks.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/architecture.md:188. Enforces `Pre-Commit Hooks` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-commit-msg-hook

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `commit-msg hook` |
| **card** | — | — | [commit-msg-hook](../concepts/rjm/commit-msg-hook.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Build` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/analysis/002-project-constraints-consolidation.md:254. Enforces `commit-msg hook` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Build`.
- **needs decision:** no
- **decision:** —

### rjm-manifest-parity-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Manifest-parity gate` |
| **card** | — | — | [manifest-parity-gate](../concepts/rjm/manifest-parity-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:42. Enforces `Manifest-parity gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-install-parity-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Install-parity check` |
| **card** | — | — | [install-parity-check](../concepts/rjm/install-parity-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/workflows/validate-generated-agents.yml:190. Enforces `Install-parity check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-hook-anchoring-claude-copilot

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Hook Anchoring (Claude + Copilot)` |
| **card** | — | — | [hook-anchoring-claude-copilot](../concepts/rjm/hook-anchoring-claude-copilot.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:380. Enforces `Hook Anchoring (Claude + Copilot)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-lefthook-installed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Lefthook Installed` |
| **card** | — | — | [lefthook-installed](../concepts/rjm/lefthook-installed.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:404. Enforces `Lefthook Installed` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-context-mode-enforcement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Context Mode Enforcement` |
| **card** | — | — | [context-mode-enforcement](../concepts/rjm/context-mode-enforcement.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/review/references/agent-safety.md:12. Enforces `Context Mode Enforcement` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-recall-parity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Recall parity` |
| **card** | — | — | [recall-parity](../concepts/rjm/recall-parity.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-075-form-factor-eval-methodology.md:35. Enforces `Recall parity` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pre-push-hooks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-Push Hooks` |
| **card** | — | — | [pre-push-hooks](../concepts/rjm/pre-push-hooks.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in CONTRIBUTING.md:561. Enforces `Pre-Push Hooks` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-parity-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `parity gate` |
| **card** | — | — | [parity-gate](../concepts/rjm/parity-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-091-post-merge-version-bot.md:158. Enforces `parity gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-skill-passive-context-compliance-validator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill/Passive Context Compliance Validator` |
| **card** | — | — | [skill-passive-context-compliance-validator](../concepts/rjm/skill-passive-context-compliance-validator.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:3. Enforces `Skill/Passive Context Compliance Validator` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-plugin-hook-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Plugin hook guard` |
| **card** | — | — | [plugin-hook-guard](../concepts/rjm/plugin-hook-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/scripts/assert_guard_jobs_succeeded.py:50. Enforces `Plugin hook guard` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-context-aware-critical-fail

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Context-Aware CRITICAL_FAIL` |
| **card** | — | — | [context-aware-critical-fail](../concepts/rjm/context-aware-critical-fail.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:review` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:22. Enforces `Context-Aware CRITICAL_FAIL` gate.
- **sequencing note:** Enforced in rjm phase `rjm:review`.
- **needs decision:** no
- **decision:** —

### rjm-require-subagent-model

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `require_subagent_model` |
| **card** | — | — | [require-subagent-model](../concepts/rjm/require-subagent-model.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:34. Enforces `require_subagent_model` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pretooluse-false-completion-gate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PreToolUse: False Completion Gate` |
| **card** | — | — | [pretooluse-false-completion-gate](../concepts/rjm/pretooluse-false-completion-gate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:144. Enforces `PreToolUse: False Completion Gate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-agent-content-parity-claude-agents-vs-src-claude

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Content Parity (.claude/agents vs src/claude)` |
| **card** | — | — | [agent-content-parity-claude-agents-vs-src-claude](../concepts/rjm/agent-content-parity-claude-agents-vs-src-claude.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:373. Enforces `Agent Content Parity (.claude/agents vs src/claude)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-manifest-description-parity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Manifest description parity` |
| **card** | — | — | [manifest-description-parity](../concepts/rjm/manifest-description-parity.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:verify` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-generation-and-release/SKILL.md:110. Enforces `Manifest description parity` gate.
- **sequencing note:** Enforced in rjm phase `rjm:verify`.
- **needs decision:** no
- **decision:** —

### rjm-subagentstart

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `subagentStart` |
| **card** | — | — | [subagentstart](../concepts/rjm/subagentstart.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/agent-harness-reference/references/official-hook-contracts.md:102. Enforces `subagentStart` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-subagentstop

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SubagentStop` |
| **card** | — | — | [subagentstop](../concepts/rjm/subagentstop.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/agent-harness-reference/references/official-hook-contracts.md:103. Enforces `SubagentStop` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-git-hook-health-core-hookspath

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Git Hook Health (core.hooksPath)` |
| **card** | — | — | [git-hook-health-core-hookspath](../concepts/rjm/git-hook-health-core-hookspath.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:401. Enforces `Git Hook Health (core.hooksPath)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —

### rjm-install-parity-agents-and-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Install Parity (agents and rules)` |
| **card** | — | — | [install-parity-agents-and-rules](../concepts/rjm/install-parity-agents-and-rules.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:ship` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:368. Enforces `Install Parity (agents and rules)` gate.
- **sequencing note:** Enforced in rjm phase `rjm:ship`.
- **needs decision:** no
- **decision:** —


## 9. Addy & Matt Specific Gate Concepts

### addy-verifiable

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Verifiable` | — | — |
| **card** | [verifiable](../concepts/addy/verifiable.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:none` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in CONTRIBUTING.md:32. Enforces `Verifiable` gate.
- **sequencing note:** Enforced in addy phase `addy:none`.
- **needs decision:** no
- **decision:** —

### addy-threshold-lowered

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `threshold-lowered` | — | — |
| **card** | [threshold-lowered](../concepts/addy/threshold-lowered.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/references/floor-guard.md:84. Enforces `threshold-lowered` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-check-full

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `check:full` | — | — |
| **card** | [check-full](../concepts/addy/check-full.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/SKILL.md:182. Enforces `check:full` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-description-sync-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Description sync check` | — | — |
| **card** | [description-sync-check](../concepts/addy/description-sync-check.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in scripts/validate-commands.js:139. Enforces `Description sync check` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-integration

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Integration` | — | — |
| **card** | [integration](../concepts/addy/integration.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in references/definition-of-done.md:38. Enforces `Integration` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-project

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Project` | — | — |
| **card** | [project](../concepts/addy/project.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/SKILL.md:221. Enforces `Project` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-constraints

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `/constraints` | — | — |
| **card** | [constraints](../concepts/addy/constraints.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in README.md:32. Enforces `/constraints` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-new-exception

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `new-exception` | — | — |
| **card** | [new-exception](../concepts/addy/new-exception.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/references/floor-guard.md:67. Enforces `new-exception` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-external

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `External` | — | — |
| **card** | [external](../concepts/addy/external.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/SKILL.md:220. Enforces `External` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-no-nested-teams

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `No nested teams` | — | — |
| **card** | [no-nested-teams](../concepts/addy/no-nested-teams.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in references/orchestration-patterns.md:146. Enforces `No nested teams` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-collision-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `collision check` | — | — |
| **card** | [collision-check](../concepts/addy/collision-check.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:none` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/README.md:86. Enforces `collision check` gate.
- **sequencing note:** Enforced in addy phase `addy:none`.
- **needs decision:** no
- **decision:** —

### addy-trigger-rank-1-rate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `trigger rank-1 rate` | — | — |
| **card** | [trigger-rank-1-rate](../concepts/addy/trigger-rank-1-rate.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:none` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/README.md:86. Enforces `trigger rank-1 rate` gate.
- **sequencing note:** Enforced in addy phase `addy:none`.
- **needs decision:** no
- **decision:** —

### addy-silenced-checker

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `silenced checker` | — | — |
| **card** | [silenced-checker](../concepts/addy/silenced-checker.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/references/floor-guard.md:10. Enforces `silenced checker` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-floor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `Floor` | — | — |
| **card** | [floor](../concepts/addy/floor.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/references/floor-guard.md:3. Enforces `Floor` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-invoice-reconciliation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `invoice reconciliation` | — | — |
| **card** | [invoice-reconciliation](../concepts/addy/invoice-reconciliation.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in evals/fixtures/spec-driven-development/billing-brief.md:12. Enforces `invoice reconciliation` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-assertion-removed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `assertion-removed` | — | — |
| **card** | [assertion-removed](../concepts/addy/assertion-removed.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/references/floor-guard.md:73. Enforces `assertion-removed` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### addy-check-fast

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `check:fast` | — | — |
| **card** | [check-fast](../concepts/addy/check-fast.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `cross-phase` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/SKILL.md:182. Enforces `check:fast` gate.
- **sequencing note:** Enforced in addy phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### addy-unfinished-work

| | addy | matt | rjm |
|---|---|---|---|
| **name** | `unfinished work` | — | — |
| **card** | [unfinished-work](../concepts/addy/unfinished-work.md) | — | — |
| **kind** | gate | — | — |
| **phase** | `addy:Define` | — | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | clean | — | — |

- **class:** UNIQUE
- **difference:** Unique to addy. Defined in skills/constraint-driven-development/references/floor-guard.md:10. Enforces `unfinished work` gate.
- **sequencing note:** Enforced in addy phase `addy:Define`.
- **needs decision:** no
- **decision:** —

### matt-ending-the-journey

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Ending the journey` | — |
| **card** | — | [ending-the-journey](../concepts/matt/ending-the-journey.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:in-progress` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/in-progress/writing-beats/SKILL.md:58. Enforces `Ending the journey` gate.
- **sequencing note:** Enforced in matt phase `matt:in-progress`.
- **needs decision:** no
- **decision:** —

### matt-hard-to-reverse

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Hard to reverse` | — |
| **card** | — | [hard-to-reverse](../concepts/matt/hard-to-reverse.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/engineering/domain-modeling/ADR-FORMAT.md:33. Enforces `Hard to reverse` gate.
- **sequencing note:** Enforced in matt phase `matt:none`.
- **needs decision:** no
- **decision:** —

### matt-claim

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Claim` | — |
| **card** | — | [claim](../concepts/matt/claim.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:wayfinder` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:44. Enforces `Claim` gate.
- **sequencing note:** Enforced in matt phase `matt:wayfinder`.
- **needs decision:** no
- **decision:** —

### matt-strong

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Strong` | — |
| **card** | — | [strong](../concepts/matt/strong.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in docs/engineering/improve-codebase-architecture.md:42. Enforces `Strong` gate.
- **sequencing note:** Enforced in matt phase `matt:engineering`.
- **needs decision:** no
- **decision:** —

### matt-precondition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `precondition` | — |
| **card** | — | [precondition](../concepts/matt/precondition.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in external/setup-matt-pocock-skills.md:70. Enforces `precondition` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-pre-agreed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `pre-agreed` | — |
| **card** | — | [pre-agreed](../concepts/matt/pre-agreed.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in docs/engineering/implement.md:47. Enforces `pre-agreed` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-completion-criterion

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `completion criterion` | — |
| **card** | — | [completion-criterion](../concepts/matt/completion-criterion.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/productivity/writing-for-agents/SKILL.md:47. Enforces `completion criterion` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-knowledge-assessment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `knowledge-assessment` | — |
| **card** | — | [knowledge-assessment](../concepts/matt/knowledge-assessment.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in external/teach.md:54. Enforces `knowledge-assessment` gate.
- **sequencing note:** Enforced in matt phase `matt:productivity`.
- **needs decision:** no
- **decision:** —

### matt-pre-agreed-seam

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Pre-agreed seam` | — |
| **card** | — | [pre-agreed-seam](../concepts/matt/pre-agreed-seam.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in docs/engineering/tdd.md:35. Enforces `Pre-agreed seam` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-shared-understanding

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `shared understanding` | — |
| **card** | — | [shared-understanding](../concepts/matt/shared-understanding.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:productivity` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/productivity/grilling/SKILL.md:6. Enforces `shared understanding` gate.
- **sequencing note:** Enforced in matt phase `matt:productivity`.
- **needs decision:** no
- **decision:** —

### matt-it-s-working-if

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `It's working if` | — |
| **card** | — | [it-s-working-if](../concepts/matt/it-s-working-if.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in .agents/writing-docs.md:60. Enforces `It's working if` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-trade-off

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `trade-off` | — |
| **card** | — | [trade-off](../concepts/matt/trade-off.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/engineering/domain-modeling/ADR-FORMAT.md:35. Enforces `trade-off` gate.
- **sequencing note:** Enforced in matt phase `matt:none`.
- **needs decision:** no
- **decision:** —

### matt-worth-exploring

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `Worth exploring` | — |
| **card** | — | [worth-exploring](../concepts/matt/worth-exploring.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:engineering` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in docs/engineering/improve-codebase-architecture.md:43. Enforces `Worth exploring` gate.
- **sequencing note:** Enforced in matt phase `matt:engineering`.
- **needs decision:** no
- **decision:** —

### matt-automated-checks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `automated checks` | — |
| **card** | — | [automated-checks](../concepts/matt/automated-checks.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/in-progress/retro/SKILL.md:18. Enforces `automated checks` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### matt-red-capable

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `red-capable` | — |
| **card** | — | [red-capable](../concepts/matt/red-capable.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `matt:none` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in skills/engineering/diagnosing-bugs/SKILL.md:59. Enforces `red-capable` gate.
- **sequencing note:** Enforced in matt phase `matt:none`.
- **needs decision:** no
- **decision:** —

### matt-promoted

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | `promoted` | — |
| **card** | — | [promoted](../concepts/matt/promoted.md) | — |
| **kind** | — | gate | — |
| **phase** | — | `cross-phase` | — |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | clean | — |

- **class:** UNIQUE
- **difference:** Unique to matt. Defined in .agents/adr/0002-ship-as-a-claude-code-plugin.md:9. Enforces `promoted` gate.
- **sequencing note:** Enforced in matt phase `cross-phase`.
- **needs decision:** no
- **decision:** —


## 10. RJM Lifecycle & Governance Specific Gates

### rjm-push-time-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Push-time guard` |
| **card** | — | — | [push-time-guard](../concepts/rjm/push-time-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:95. Enforces `Push-time guard` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-rule-activation-coverage

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Rule Activation Coverage` |
| **card** | — | — | [rule-activation-coverage](../concepts/rjm/rule-activation-coverage.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:322. Enforces `Rule Activation Coverage` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-validate-envelope

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate_envelope` |
| **card** | — | — | [validate-envelope](../concepts/rjm/validate-envelope.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validate_skill_output.py:265. Enforces `validate_envelope` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-verified

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `VERIFIED` |
| **card** | — | — | [verified](../concepts/rjm/verified.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/decision-critic/scripts/decision-critic.py:194. Enforces `VERIFIED` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-proficient

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Proficient` |
| **card** | — | — | [proficient](../concepts/rjm/proficient.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-frontier/SKILL.md:222. Enforces `Proficient` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-defer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DEFER` |
| **card** | — | — | [defer](../concepts/rjm/defer.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/SKILL.md:186. Enforces `DEFER` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-overlap

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `OVERLAP` |
| **card** | — | — | [overlap](../concepts/rjm/overlap.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-skill-overlap.py:16. Enforces `OVERLAP` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-markdown-autofix

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `markdown-autofix` |
| **card** | — | — | [markdown-autofix](../concepts/rjm/markdown-autofix.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-debugging-playbook/SKILL.md:48. Enforces `markdown-autofix` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-generated-artifact-staleness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Generated Artifact Staleness` |
| **card** | — | — | [generated-artifact-staleness](../concepts/rjm/generated-artifact-staleness.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:297. Enforces `Generated Artifact Staleness` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-prohibition-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `prohibition guard` |
| **card** | — | — | [prohibition-guard](../concepts/rjm/prohibition-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-064-commands-to-skills-migration.md:136. Enforces `prohibition guard` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-fail-route-missed-target

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `FAIL_ROUTE_MISSED_TARGET` |
| **card** | — | — | [fail-route-missed-target](../concepts/rjm/fail-route-missed-target.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-rule-activation.py:1764. Enforces `FAIL_ROUTE_MISSED_TARGET` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-create-new

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CREATE_NEW` |
| **card** | — | — | [create-new](../concepts/rjm/create-new.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/phase0-triage.md:56. Enforces `CREATE_NEW` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-new-agent-approval

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `New Agent Approval` |
| **card** | — | — | [new-agent-approval](../concepts/rjm/new-agent-approval.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/steering-committee-charter.md:51. Enforces `New Agent Approval` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-quick-tier

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quick tier` |
| **card** | — | — | [quick-tier](../concepts/rjm/quick-tier.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-frontier/SKILL.md:60. Enforces `Quick tier` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `guard` |
| **card** | — | — | [guard](../concepts/rjm/guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-debugging-playbook/SKILL.md:13. Enforces `guard` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-teammateidle

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `TeammateIdle` |
| **card** | — | — | [teammateidle](../concepts/rjm/teammateidle.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/hook_contracts.py:41. Enforces `TeammateIdle` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-markdown-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `markdown-check` |
| **card** | — | — | [markdown-check](../concepts/rjm/markdown-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-debugging-playbook/SKILL.md:48. Enforces `markdown-check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-commits-per-pr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Commits per PR` |
| **card** | — | — | [commits-per-pr](../concepts/rjm/commits-per-pr.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-change-control/references/gate-ladder.md:28. Enforces `Commits per PR` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-complete

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `COMPLETE` |
| **card** | — | — | [complete](../concepts/rjm/complete.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/code-simplifier.shared.md:122. Enforces `COMPLETE` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-degradation-clause

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `degradation clause` |
| **card** | — | — | [degradation-clause](../concepts/rjm/degradation-clause.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-087-held-out-validated-improvement.md:513. Enforces `degradation clause` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-agent-catalog-drift

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Catalog Drift` |
| **card** | — | — | [agent-catalog-drift](../concepts/rjm/agent-catalog-drift.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:328. Enforces `Agent Catalog Drift` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-keep-pin

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `KEEP_PIN` |
| **card** | — | — | [keep-pin](../concepts/rjm/keep-pin.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/_model_sweep_core.py:21. Enforces `KEEP_PIN` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-mature

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Mature` |
| **card** | — | — | [mature](../concepts/rjm/mature.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-frontier/SKILL.md:222. Enforces `Mature` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-permissions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Permissions` |
| **card** | — | — | [permissions](../concepts/rjm/permissions.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/WORKFLOW-VALIDATION.md:34. Enforces `Permissions` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-multi-agent-synthesis-panel

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `multi-agent synthesis panel` |
| **card** | — | — | [multi-agent-synthesis-panel](../concepts/rjm/multi-agent-synthesis-panel.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/changelog.md:49. Enforces `multi-agent synthesis panel` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-atomic-commit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `atomic-commit` |
| **card** | — | — | [atomic-commit](../concepts/rjm/atomic-commit.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/git_hook_policy.py:8431. Enforces `atomic-commit` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-fidelity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Fidelity` |
| **card** | — | — | [fidelity](../concepts/rjm/fidelity.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:278. Enforces `Fidelity` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-permission-controls

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Permission controls` |
| **card** | — | — | [permission-controls](../concepts/rjm/permission-controls.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/agent-harness-reference/references/official-hook-contracts.md:67. Enforces `Permission controls` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-uncertain

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `UNCERTAIN` |
| **card** | — | — | [uncertain](../concepts/rjm/uncertain.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/decision-critic/scripts/decision-critic.py:196. Enforces `UNCERTAIN` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-persevere

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `persevere` |
| **card** | — | — | [persevere](../concepts/rjm/persevere.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/business-strategy/references/lean-startup.md:23. Enforces `persevere` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-validate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `validate` |
| **card** | — | — | [validate](../concepts/rjm/validate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/codeql-scan/SKILL.md:54. Enforces `validate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-quality-thresholds

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quality Thresholds` |
| **card** | — | — | [quality-thresholds](../concepts/rjm/quality-thresholds.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/retrospective/references/diagnosis-and-actions.md:211. Enforces `Quality Thresholds` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-drift-monitoring

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Drift Monitoring` |
| **card** | — | — | [drift-monitoring](../concepts/rjm/drift-monitoring.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/AGENTS.md:146. Enforces `Drift Monitoring` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-inert

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Inert` |
| **card** | — | — | [inert](../concepts/rjm/inert.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-frontier/SKILL.md:222. Enforces `Inert` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-analysis-length

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Analysis length` |
| **card** | — | — | [analysis-length](../concepts/rjm/analysis-length.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/research-and-incorporate/SKILL.md:127. Enforces `Analysis length` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-needs-changes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NEEDS_CHANGES` |
| **card** | — | — | [needs-changes](../concepts/rjm/needs-changes.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/planner/SKILL.md:196. Enforces `NEEDS_CHANGES` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-serena-init

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Serena Init` |
| **card** | — | — | [serena-init](../concepts/rjm/serena-init.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in AGENTS.md:3. Enforces `Serena Init` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-prose

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Prose` |
| **card** | — | — | [prose](../concepts/rjm/prose.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/design/external-signal-gating.md:37. Enforces `Prose` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-no-negative-cases

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NO_NEGATIVE_CASES` |
| **card** | — | — | [no-negative-cases](../concepts/rjm/no-negative-cases.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-rule-activation.py:1776. Enforces `NO_NEGATIVE_CASES` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-critic-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Critic Validation` |
| **card** | — | — | [critic-validation](../concepts/rjm/critic-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/AGENT-SYSTEM.md:1645. Enforces `Critic Validation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-required-status-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `required status check` |
| **card** | — | — | [required-status-check](../concepts/rjm/required-status-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/scripts/assert_guard_jobs_succeeded.py:6. Enforces `required status check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-ai-agents-change-control

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ai-agents-change-control` |
| **card** | — | — | [ai-agents-change-control](../concepts/rjm/ai-agents-change-control.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-methodology/SKILL.md:147. Enforces `ai-agents-change-control` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-skill-markdown-portability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Markdown Portability` |
| **card** | — | — | [skill-markdown-portability](../concepts/rjm/skill-markdown-portability.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:303. Enforces `Skill Markdown Portability` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-approved-with-concerns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `APPROVED_WITH_CONCERNS` |
| **card** | — | — | [approved-with-concerns](../concepts/rjm/approved-with-concerns.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/critic.shared.md:145. Enforces `APPROVED_WITH_CONCERNS` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-skill-shell-detection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Shell Detection` |
| **card** | — | — | [skill-shell-detection](../concepts/rjm/skill-shell-detection.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:307. Enforces `Skill Shell Detection` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-machine-checkable

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Machine-checkable` |
| **card** | — | — | [machine-checkable](../concepts/rjm/machine-checkable.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-065-orchestrator-as-router.md:70. Enforces `Machine-checkable` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-userprompttransformed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `userPromptTransformed` |
| **card** | — | — | [userprompttransformed](../concepts/rjm/userprompttransformed.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/agent-harness-reference/references/official-hook-contracts.md:105. Enforces `userPromptTransformed` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-inconclusive

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `inconclusive` |
| **card** | — | — | [inconclusive](../concepts/rjm/inconclusive.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-075-form-factor-eval-methodology.md:55. Enforces `inconclusive` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-voting-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Voting Rules` |
| **card** | — | — | [voting-rules](../concepts/rjm/voting-rules.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/steering-committee-charter.md:72. Enforces `Voting Rules` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-idempotency-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Idempotency guard` |
| **card** | — | — | [idempotency-guard](../concepts/rjm/idempotency-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:135. Enforces `Idempotency guard` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-frontmatter-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Frontmatter Validation` |
| **card** | — | — | [frontmatter-validation](../concepts/rjm/frontmatter-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/SKILL-STANDARDS-RECONCILED.md:489. Enforces `Frontmatter Validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-team-capacity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `team capacity` |
| **card** | — | — | [team-capacity](../concepts/rjm/team-capacity.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:86. Enforces `team capacity` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-warmup

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Warmup` |
| **card** | — | — | [warmup](../concepts/rjm/warmup.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:205. Enforces `Warmup` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-product-market-fit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `product-market-fit` |
| **card** | — | — | [product-market-fit](../concepts/rjm/product-market-fit.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/business-strategy/references/100m-leads.md:57. Enforces `product-market-fit` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-size-limits

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `size limits` |
| **card** | — | — | [size-limits](../concepts/rjm/size-limits.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/skill_size.py:2. Enforces `size limits` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-quantified-learning-outcomes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Quantified Learning Outcomes` |
| **card** | — | — | [quantified-learning-outcomes](../concepts/rjm/quantified-learning-outcomes.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/retrospective.md:28. Enforces `Quantified Learning Outcomes` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-golden-principles

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Golden principles` |
| **card** | — | — | [golden-principles](../concepts/rjm/golden-principles.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:56. Enforces `Golden principles` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-sovereignty

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Sovereignty` |
| **card** | — | — | [sovereignty](../concepts/rjm/sovereignty.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/autoplan/SKILL.md:170. Enforces `Sovereignty` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-vendor-portability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `vendor-portability` |
| **card** | — | — | [vendor-portability](../concepts/rjm/vendor-portability.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/check_skill_md_portability.py:31. Enforces `vendor-portability` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-prevention-contract

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `prevention contract` |
| **card** | — | — | [prevention-contract](../concepts/rjm/prevention-contract.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:135. Enforces `prevention contract` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-traceability-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Traceability Validation` |
| **card** | — | — | [traceability-validation](../concepts/rjm/traceability-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/AGENT-SYSTEM.md:1674. Enforces `Traceability Validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-budding

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Budding` |
| **card** | — | — | [budding](../concepts/rjm/budding.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-frontier/SKILL.md:220. Enforces `Budding` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-copilot-cli-version-pin

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Copilot CLI Version Pin` |
| **card** | — | — | [copilot-cli-version-pin](../concepts/rjm/copilot-cli-version-pin.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:255. Enforces `Copilot CLI Version Pin` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-draft-for-approval

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Draft for Approval` |
| **card** | — | — | [draft-for-approval](../concepts/rjm/draft-for-approval.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:support` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/negotiation.md:46. Enforces `Draft for Approval` gate.
- **sequencing note:** Enforced in rjm phase `rjm:support`.
- **needs decision:** no
- **decision:** —

### rjm-customer-demand-signal

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `customer demand signal` |
| **card** | — | — | [customer-demand-signal](../concepts/rjm/customer-demand-signal.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:125. Enforces `customer demand signal` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-reassessment-trigger

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reassessment Trigger` |
| **card** | — | — | [reassessment-trigger](../concepts/rjm/reassessment-trigger.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:141. Enforces `Reassessment Trigger` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-timelessness-score

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `timelessness_score` |
| **card** | — | — | [timelessness-score](../concepts/rjm/timelessness-score.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/assets/templates/skill-spec-template.xml:21. Enforces `timelessness_score` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-competitive-dynamics

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `competitive dynamics` |
| **card** | — | — | [competitive-dynamics](../concepts/rjm/competitive-dynamics.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:116. Enforces `competitive dynamics` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-behavioral-evaluation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Behavioral Evaluation` |
| **card** | — | — | [behavioral-evaluation](../concepts/rjm/behavioral-evaluation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in CONTRIBUTING.md:335. Enforces `Behavioral Evaluation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-size-exception

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `size-exception` |
| **card** | — | — | [size-exception](../concepts/rjm/size-exception.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/CLAUDE.md:85. Enforces `size-exception` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-measurable

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Measurable` |
| **card** | — | — | [measurable](../concepts/rjm/measurable.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/retrospective/references/diagnosis-and-actions.md:153. Enforces `Measurable` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-runtime-enforcement-layer

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `runtime enforcement layer` |
| **card** | — | — | [runtime-enforcement-layer](../concepts/rjm/runtime-enforcement-layer.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:18. Enforces `runtime enforcement layer` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-automatic-pre-push-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Automatic Pre-Push Validation` |
| **card** | — | — | [automatic-pre-push-validation](../concepts/rjm/automatic-pre-push-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/WORKFLOW-VALIDATION.md:93. Enforces `Automatic Pre-Push Validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-needs-decomposition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NEEDS_DECOMPOSITION` |
| **card** | — | — | [needs-decomposition](../concepts/rjm/needs-decomposition.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/code-simplifier.shared.md:124. Enforces `NEEDS_DECOMPOSITION` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-k1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `K1` |
| **card** | — | — | [k1](../concepts/rjm/k1.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/metrics/kill_criteria.py:16. Enforces `K1` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-stale-script-references

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Stale Script References` |
| **card** | — | — | [stale-script-references](../concepts/rjm/stale-script-references.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:274. Enforces `Stale Script References` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-layer-3

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Layer 3` |
| **card** | — | — | [layer-3](../concepts/rjm/layer-3.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/prose-self-check/scripts/prose_lint.py:23. Enforces `Layer 3` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-unsafe-reference

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Unsafe reference` |
| **card** | — | — | [unsafe-reference](../concepts/rjm/unsafe-reference.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:sync` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/commands/sync.md:52. Enforces `Unsafe reference` gate.
- **sequencing note:** Enforced in rjm phase `rjm:sync`.
- **needs decision:** no
- **decision:** —

### rjm-multi-agent-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `multi-agent validation` |
| **card** | — | — | [multi-agent-validation](../concepts/rjm/multi-agent-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/slashcommandcreator/SKILL.md:68. Enforces `multi-agent validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-fail-negative-incomplete

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `FAIL_NEGATIVE_INCOMPLETE` |
| **card** | — | — | [fail-negative-incomplete](../concepts/rjm/fail-negative-incomplete.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-rule-activation.py:1750. Enforces `FAIL_NEGATIVE_INCOMPLETE` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-skill-size

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill size` |
| **card** | — | — | [skill-size](../concepts/rjm/skill-size.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:32. Enforces `Skill size` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-needs-revision

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NEEDS-REVISION` |
| **card** | — | — | [needs-revision](../concepts/rjm/needs-revision.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/agents/critic.shared.md:146. Enforces `NEEDS-REVISION` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-userpromptsubmitted

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `userPromptSubmitted` |
| **card** | — | — | [userpromptsubmitted](../concepts/rjm/userpromptsubmitted.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/agent-harness-reference/references/official-hook-contracts.md:104. Enforces `userPromptSubmitted` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-index-integrity-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Index Integrity Check` |
| **card** | — | — | [index-integrity-check](../concepts/rjm/index-integrity-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/archive/planning/PRD-skills-index-registry.md:437. Enforces `Index Integrity Check` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-duplicate-name-guards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `duplicate-name guards` |
| **card** | — | — | [duplicate-name-guards](../concepts/rjm/duplicate-name-guards.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:126. Enforces `duplicate-name guards` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pr-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pr-validation` |
| **card** | — | — | [pr-validation](../concepts/rjm/pr-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/ci/build_pr_validation_report.py:118. Enforces `pr-validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-permissionrequest

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PermissionRequest` |
| **card** | — | — | [permissionrequest](../concepts/rjm/permissionrequest.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/agent-harness-reference/references/official-hook-contracts.md:95. Enforces `PermissionRequest` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-drop-pin

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DROP_PIN` |
| **card** | — | — | [drop-pin](../concepts/rjm/drop-pin.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/_model_sweep_core.py:23. Enforces `DROP_PIN` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-plan-approved

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PLAN APPROVED` |
| **card** | — | — | [plan-approved](../concepts/rjm/plan-approved.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/planner/scripts/planner.py:484. Enforces `PLAN APPROVED` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-fail-over-activation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `FAIL_OVER_ACTIVATION` |
| **card** | — | — | [fail-over-activation](../concepts/rjm/fail-over-activation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-rule-activation.py:1745. Enforces `FAIL_OVER_ACTIVATION` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-retirement-claim-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Retirement-claim guard` |
| **card** | — | — | [retirement-claim-guard](../concepts/rjm/retirement-claim-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-skill-overlap.py:261. Enforces `Retirement-claim guard` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-10-agent-consensus

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `10-Agent Consensus` |
| **card** | — | — | [10-agent-consensus](../concepts/rjm/10-agent-consensus.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/archive/planning/PRD-skills-index-registry.md:5. Enforces `10-Agent Consensus` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-never-buy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Never Buy` |
| **card** | — | — | [never-buy](../concepts/rjm/never-buy.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:100. Enforces `Never Buy` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-preflight

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `preflight` |
| **card** | — | — | [preflight](../concepts/rjm/preflight.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-087-held-out-validated-improvement.md:310. Enforces `preflight` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-push-pr-script-identity-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `push_pr_script_identity_guard` |
| **card** | — | — | [push-pr-script-identity-guard](../concepts/rjm/push-pr-script-identity-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:41. Enforces `push_pr_script_identity_guard` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-model-pin-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `model-pin check` |
| **card** | — | — | [model-pin-check](../concepts/rjm/model-pin-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/CLAUDE.md:53. Enforces `model-pin check` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-invisible-disadvantage-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Invisible Disadvantage Check` |
| **card** | — | — | [invisible-disadvantage-check](../concepts/rjm/invisible-disadvantage-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:support` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/negotiation.md:125. Enforces `Invisible Disadvantage Check` gate.
- **sequencing note:** Enforced in rjm phase `rjm:support`.
- **needs decision:** no
- **decision:** —

### rjm-pass-with-concerns

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PASS_WITH_CONCERNS` |
| **card** | — | — | [pass-with-concerns](../concepts/rjm/pass-with-concerns.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/planner/SKILL.md:90. Enforces `PASS_WITH_CONCERNS` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-escalate

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `escalate` |
| **card** | — | — | [escalate](../concepts/rjm/escalate.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:92. Enforces `escalate` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-critical-actions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Critical actions` |
| **card** | — | — | [critical-actions](../concepts/rjm/critical-actions.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-007-memory-first-architecture.md:59. Enforces `Critical actions` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-plugin-manifest-description-count-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Plugin manifest description count check` |
| **card** | — | — | [plugin-manifest-description-count-check](../concepts/rjm/plugin-manifest-description-count-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/workflows/validate-generated-agents.yml:222. Enforces `Plugin manifest description count check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-accept-decision

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `accept decision` |
| **card** | — | — | [accept-decision](../concepts/rjm/accept-decision.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-087-held-out-validated-improvement.md:154. Enforces `accept decision` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-citation-freshness-added-lines

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Citation Freshness (added lines)` |
| **card** | — | — | [citation-freshness-added-lines](../concepts/rjm/citation-freshness-added-lines.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:281. Enforces `Citation Freshness (added lines)` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-documented-interpreter-portability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Documented Interpreter Portability` |
| **card** | — | — | [documented-interpreter-portability](../concepts/rjm/documented-interpreter-portability.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:285. Enforces `Documented Interpreter Portability` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-termination-empty-rounds

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `termination_empty_rounds` |
| **card** | — | — | [termination-empty-rounds](../concepts/rjm/termination-empty-rounds.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/configuration.md:12. Enforces `termination_empty_rounds` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-agent-drift-detection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Agent Drift Detection` |
| **card** | — | — | [agent-drift-detection](../concepts/rjm/agent-drift-detection.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/workflows/drift-detection.yml:10. Enforces `Agent Drift Detection` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-memory-atomicity

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Memory atomicity` |
| **card** | — | — | [memory-atomicity](../concepts/rjm/memory-atomicity.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/research-and-incorporate/SKILL.md:131. Enforces `Memory atomicity` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-k4

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `K4` |
| **card** | — | — | [k4](../concepts/rjm/k4.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/metrics/kill_criteria.py:21. Enforces `K4` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-conditional

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CONDITIONAL` |
| **card** | — | — | [conditional](../concepts/rjm/conditional.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security.md:222. Enforces `CONDITIONAL` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-docs-only

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Docs-only` |
| **card** | — | — | [docs-only](../concepts/rjm/docs-only.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-change-control/SKILL.md:32. Enforces `Docs-only` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-action-pinning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Action Pinning` |
| **card** | — | — | [action-pinning](../concepts/rjm/action-pinning.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/WORKFLOW-VALIDATION.md:31. Enforces `Action Pinning` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-agents-md-floor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `AGENTS.md floor` |
| **card** | — | — | [agents-md-floor](../concepts/rjm/agents-md-floor.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/software-engineering-library/references/working-with-legacy-code.md:12. Enforces `AGENTS.md floor` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-min-timelessness-score

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `min_timelessness_score` |
| **card** | — | — | [min-timelessness-score](../concepts/rjm/min-timelessness-score.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/configuration.md:21. Enforces `min_timelessness_score` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-law-2

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Law 2` |
| **card** | — | — | [law-2](../concepts/rjm/law-2.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/security-scan/references/agent-guardrails-template.md:64. Enforces `Law 2` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-push-ref-policy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `push-ref-policy` |
| **card** | — | — | [push-ref-policy](../concepts/rjm/push-ref-policy.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:24. Enforces `push-ref-policy` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-admission

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Admission` |
| **card** | — | — | [admission](../concepts/rjm/admission.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:10. Enforces `Admission` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-statistical-significance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Statistical significance` |
| **card** | — | — | [statistical-significance](../concepts/rjm/statistical-significance.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-087-held-out-validated-improvement.md:765. Enforces `Statistical significance` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-evidence-standards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evidence Standards` |
| **card** | — | — | [evidence-standards](../concepts/rjm/evidence-standards.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/implementer.md:22. Enforces `Evidence Standards` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-multi-agent-synthesis-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Multi-Agent Synthesis Protocol` |
| **card** | — | — | [multi-agent-synthesis-protocol](../concepts/rjm/multi-agent-synthesis-protocol.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/synthesis-protocol.md:1. Enforces `Multi-Agent Synthesis Protocol` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-no-manual-bump-enforcement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `no-manual-bump enforcement` |
| **card** | — | — | [no-manual-bump-enforcement](../concepts/rjm/no-manual-bump-enforcement.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-091-post-merge-version-bot.md:151. Enforces `no-manual-bump enforcement` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-orphan-prefix-detection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orphan prefix detection` |
| **card** | — | — | [orphan-prefix-detection](../concepts/rjm/orphan-prefix-detection.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-017-tiered-memory-index-architecture.md:267. Enforces `Orphan prefix detection` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-source-identity-first

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Source identity first` |
| **card** | — | — | [source-identity-first](../concepts/rjm/source-identity-first.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/SKILL.md:136. Enforces `Source identity first` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-validate-platform-template-schema

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validate platform template schema` |
| **card** | — | — | [validate-platform-template-schema](../concepts/rjm/validate-platform-template-schema.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/workflows/validate-generated-agents.yml:171. Enforces `Validate platform template schema` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-failed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `FAILED` |
| **card** | — | — | [failed](../concepts/rjm/failed.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/decision-critic/scripts/decision-critic.py:195. Enforces `FAILED` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-mid

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Mid` |
| **card** | — | — | [mid](../concepts/rjm/mid.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in AGENTS.md:17. Enforces `Mid` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-growing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Growing` |
| **card** | — | — | [growing](../concepts/rjm/growing.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-frontier/SKILL.md:222. Enforces `Growing` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-regeneration-limit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Regeneration limit` |
| **card** | — | — | [regeneration-limit](../concepts/rjm/regeneration-limit.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:48. Enforces `Regeneration limit` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pre-pr-runner

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pre-PR runner` |
| **card** | — | — | [pre-pr-runner](../concepts/rjm/pre-pr-runner.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/run_workflow_local_test.py:6. Enforces `pre-PR runner` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-surgical

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Surgical` |
| **card** | — | — | [surgical](../concepts/rjm/surgical.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:208. Enforces `Surgical` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-decline

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DECLINE` |
| **card** | — | — | [decline](../concepts/rjm/decline.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/issue-feature-review.md:105. Enforces `DECLINE` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-action-quota

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `action quota` |
| **card** | — | — | [action-quota](../concepts/rjm/action-quota.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/business-strategy/references/100m-leads.md:28. Enforces `action quota` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-definition-of-ready

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Definition-of-Ready` |
| **card** | — | — | [definition-of-ready](../concepts/rjm/definition-of-ready.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Architect` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/adr-generator/references/ad-quality-frameworks.md:21. Enforces `Definition-of-Ready` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Architect`.
- **needs decision:** no
- **decision:** —

### rjm-proceed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PROCEED` |
| **card** | — | — | [proceed](../concepts/rjm/proceed.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-knowledge-integration.py:365. Enforces `PROCEED` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-panel

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Panel` |
| **card** | — | — | [panel](../concepts/rjm/panel.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:3. Enforces `Panel` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-layer-2

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Layer 2` |
| **card** | — | — | [layer-2](../concepts/rjm/layer-2.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/prose-self-check/scripts/prose_lint.py:19. Enforces `Layer 2` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-duplicate-name-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `duplicate-name guard` |
| **card** | — | — | [duplicate-name-guard](../concepts/rjm/duplicate-name-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/context-optimizer/references/rule-audit-evidence.md:84. Enforces `duplicate-name guard` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-mirror-claims

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Mirror claims` |
| **card** | — | — | [mirror-claims](../concepts/rjm/mirror-claims.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-docs-of-record/SKILL.md:200. Enforces `Mirror claims` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pre-pr-validation-runner

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pre-PR validation runner` |
| **card** | — | — | [pre-pr-validation-runner](../concepts/rjm/pre-pr-validation-runner.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:37. Enforces `pre-PR validation runner` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-technology-disruption

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `technology disruption` |
| **card** | — | — | [technology-disruption](../concepts/rjm/technology-disruption.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:122. Enforces `technology disruption` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-identify

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `IDENTIFY` |
| **card** | — | — | [identify](../concepts/rjm/identify.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/security-review/SKILL.md:188. Enforces `IDENTIFY` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-halt-criterion

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `halt criterion` |
| **card** | — | — | [halt-criterion](../concepts/rjm/halt-criterion.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/decision-critic/references/rewrite-regression-check.md:20. Enforces `halt criterion` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-yellow-flag

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `YELLOW FLAG` |
| **card** | — | — | [yellow-flag](../concepts/rjm/yellow-flag.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Evaluate` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:200. Enforces `YELLOW FLAG` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Evaluate`.
- **needs decision:** no
- **decision:** —

### rjm-sync-registry-provenance

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Sync Registry Provenance` |
| **card** | — | — | [sync-registry-provenance](../concepts/rjm/sync-registry-provenance.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:326. Enforces `Sync Registry Provenance` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-model-pin-governance-warn

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Model Pin Governance (warn)` |
| **card** | — | — | [model-pin-governance-warn](../concepts/rjm/model-pin-governance-warn.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:348. Enforces `Model Pin Governance (warn)` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-mirror-claim-rule

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `mirror-claim rule` |
| **card** | — | — | [mirror-claim-rule](../concepts/rjm/mirror-claim-rule.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/implementer.md:35. Enforces `mirror-claim rule` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-escalate-to-human

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `escalate_to_human` |
| **card** | — | — | [escalate-to-human](../concepts/rjm/escalate-to-human.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/configuration.md:18. Enforces `escalate_to_human` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-subsumed

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SUBSUMED` |
| **card** | — | — | [subsumed](../concepts/rjm/subsumed.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-skill-overlap.py:17. Enforces `SUBSUMED` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-execution-capability-precondition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Execution Capability Precondition` |
| **card** | — | — | [execution-capability-precondition](../concepts/rjm/execution-capability-precondition.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/merge-resolver.md:64. Enforces `Execution Capability Precondition` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-reassessment-triggers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Reassessment triggers` |
| **card** | — | — | [reassessment-triggers](../concepts/rjm/reassessment-triggers.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:94. Enforces `Reassessment triggers` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-law-1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Law 1` |
| **card** | — | — | [law-1](../concepts/rjm/law-1.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/security-scan/references/agent-guardrails-template.md:63. Enforces `Law 1` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-unanimous-approval-required

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Unanimous Approval Required` |
| **card** | — | — | [unanimous-approval-required](../concepts/rjm/unanimous-approval-required.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/slashcommandcreator/SKILL.md:94. Enforces `Unanimous Approval Required` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-research-depth

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Research depth` |
| **card** | — | — | [research-depth](../concepts/rjm/research-depth.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/research-and-incorporate/SKILL.md:126. Enforces `Research depth` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-re-evaluation-threshold

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `re-evaluation threshold` |
| **card** | — | — | [re-evaluation-threshold](../concepts/rjm/re-evaluation-threshold.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/analysis/adr-045-inventory-audit.md:38. Enforces `re-evaluation threshold` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-clarify

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CLARIFY` |
| **card** | — | — | [clarify](../concepts/rjm/clarify.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/phase0-triage.md:58. Enforces `CLARIFY` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-calibrated-floor

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `calibrated floor` |
| **card** | — | — | [calibrated-floor](../concepts/rjm/calibrated-floor.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/agent-design-principles.md:49. Enforces `calibrated floor` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-consensus-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CONSENSUS CHECK` |
| **card** | — | — | [consensus-check](../concepts/rjm/consensus-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/synthesis-protocol.md:35. Enforces `CONSENSUS CHECK` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-unterminated-fence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `unterminated fence` |
| **card** | — | — | [unterminated-fence](../concepts/rjm/unterminated-fence.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/prose-self-check/scripts/prose_lint.py:27. Enforces `unterminated fence` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pass

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PASS` |
| **card** | — | — | [pass](../concepts/rjm/pass.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/workflow-commands.md:125. Enforces `PASS` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-vendor-portability-exec

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `vendor-portability-exec` |
| **card** | — | — | [vendor-portability-exec](../concepts/rjm/vendor-portability-exec.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/SKILL-AUTHORING.md:245. Enforces `vendor-portability-exec` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-intents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `intents` |
| **card** | — | — | [intents](../concepts/rjm/intents.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/planner/SKILL.md:292. Enforces `intents` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-prose-self-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `prose-self-check` |
| **card** | — | — | [prose-self-check](../concepts/rjm/prose-self-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/prose-self-check/SKILL.md:4. Enforces `prose-self-check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-decision-script-vs-no-script

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Decision: Script vs No Script` |
| **card** | — | — | [decision-script-vs-no-script](../concepts/rjm/decision-script-vs-no-script.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:131. Enforces `Decision: Script vs No Script` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-atomicity-rules

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Atomicity Rules` |
| **card** | — | — | [atomicity-rules](../concepts/rjm/atomicity-rules.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/skillbook.md:45. Enforces `Atomicity Rules` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-stand

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `STAND` |
| **card** | — | — | [stand](../concepts/rjm/stand.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/decision-critic/scripts/decision-critic.py:327. Enforces `STAND` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-revise

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `REVISE` |
| **card** | — | — | [revise](../concepts/rjm/revise.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/decision-critic/scripts/decision-critic.py:322. Enforces `REVISE` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-relevant

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Relevant` |
| **card** | — | — | [relevant](../concepts/rjm/relevant.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/retrospective/references/diagnosis-and-actions.md:155. Enforces `Relevant` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-insufficient-evidence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Insufficient evidence` |
| **card** | — | — | [insufficient-evidence](../concepts/rjm/insufficient-evidence.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/reflect/references/decision-tree-and-examples.md:37. Enforces `Insufficient evidence` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-human-judgment-with-rationale

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Human-judgment with rationale` |
| **card** | — | — | [human-judgment-with-rationale](../concepts/rjm/human-judgment-with-rationale.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-065-orchestrator-as-router.md:73. Enforces `Human-judgment with rationale` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-phase-4-convergence-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Phase 4 convergence check` |
| **card** | — | — | [phase-4-convergence-check](../concepts/rjm/phase-4-convergence-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/adr-review/references/debate-protocol.md:175. Enforces `Phase 4 convergence check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-request-evidence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `REQUEST_EVIDENCE` |
| **card** | — | — | [request-evidence](../concepts/rjm/request-evidence.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/issue-feature-review.md:105. Enforces `REQUEST_EVIDENCE` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-existing-knowledge-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Existing Knowledge Check` |
| **card** | — | — | [existing-knowledge-check](../concepts/rjm/existing-knowledge-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/research-and-incorporate/references/workflow.md:21. Enforces `Existing Knowledge Check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-compose

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `COMPOSE` |
| **card** | — | — | [compose](../concepts/rjm/compose.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/phase0-triage.md:57. Enforces `COMPOSE` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-trigger-condition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `trigger condition` |
| **card** | — | — | [trigger-condition](../concepts/rjm/trigger-condition.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/prompt-engineer/SKILL.md:143. Enforces `trigger condition` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-layer-1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Layer 1` |
| **card** | — | — | [layer-1](../concepts/rjm/layer-1.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/prose-self-check/scripts/prose_lint.py:19. Enforces `Layer 1` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-rule-1

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `RULE 1` |
| **card** | — | — | [rule-1](../concepts/rjm/rule-1.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/planner/scripts/planner.py:448. Enforces `RULE 1` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-k3

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `K3` |
| **card** | — | — | [k3](../concepts/rjm/k3.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/metrics/kill_criteria.py:19. Enforces `K3` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-halt-due-to-flakiness

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `halt-due-to-flakiness` |
| **card** | — | — | [halt-due-to-flakiness](../concepts/rjm/halt-due-to-flakiness.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-058-agent-eval-discipline.md:190. Enforces `halt-due-to-flakiness` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-drift-detected

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DRIFT DETECTED` |
| **card** | — | — | [drift-detected](../concepts/rjm/drift-detected.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/README.md:231. Enforces `DRIFT DETECTED` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-copilot-routing-exclusions

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Copilot Routing Exclusions` |
| **card** | — | — | [copilot-routing-exclusions](../concepts/rjm/copilot-routing-exclusions.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:325. Enforces `Copilot Routing Exclusions` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pre-pr

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Pre-PR` |
| **card** | — | — | [pre-pr](../concepts/rjm/pre-pr.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in AGENTS.md:18. Enforces `Pre-PR` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-evidence-loss

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `evidence loss` |
| **card** | — | — | [evidence-loss](../concepts/rjm/evidence-loss.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/code-qualities-assessment/scripts/assess.py:1063. Enforces `evidence loss` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-soft-warn

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Soft warn` |
| **card** | — | — | [soft-warn](../concepts/rjm/soft-warn.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:206. Enforces `Soft warn` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-fail-threshold

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `FAIL_THRESHOLD` |
| **card** | — | — | [fail-threshold](../concepts/rjm/fail-threshold.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-rule-activation.py:1711. Enforces `FAIL_THRESHOLD` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-law-4

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Law 4` |
| **card** | — | — | [law-4](../concepts/rjm/law-4.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/security-scan/references/agent-guardrails-template.md:66. Enforces `Law 4` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-memory-count

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Memory count` |
| **card** | — | — | [memory-count](../concepts/rjm/memory-count.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/research-and-incorporate/SKILL.md:132. Enforces `Memory count` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-action-sha-pinning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Action SHA Pinning` |
| **card** | — | — | [action-sha-pinning](../concepts/rjm/action-sha-pinning.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/steering/security-practices.md:28. Enforces `Action SHA Pinning` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-rule-0

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `RULE 0` |
| **card** | — | — | [rule-0](../concepts/rjm/rule-0.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/research-and-incorporate/references/workflow.md:356. Enforces `RULE 0` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-k2

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `K2` |
| **card** | — | — | [k2](../concepts/rjm/k2.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/metrics/kill_criteria.py:18. Enforces `K2` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-doc-interpreter-portability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `doc-interpreter-portability` |
| **card** | — | — | [doc-interpreter-portability](../concepts/rjm/doc-interpreter-portability.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/check_doc_interpreter_portability.py:6. Enforces `doc-interpreter-portability` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-buffer-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `buffer-check` |
| **card** | — | — | [buffer-check](../concepts/rjm/buffer-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/README.md:498. Enforces `buffer-check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-smart-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SMART Validation` |
| **card** | — | — | [smart-validation](../concepts/rjm/smart-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/retrospective/references/diagnosis-and-actions.md:146. Enforces `SMART Validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-file-cap

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `file-cap` |
| **card** | — | — | [file-cap](../concepts/rjm/file-cap.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-064-commands-to-skills-migration.md:277. Enforces `file-cap` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-10-threshold-rule

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `10% Threshold Rule` |
| **card** | — | — | [10-threshold-rule](../concepts/rjm/10-threshold-rule.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/task-decomposer.md:199. Enforces `10% Threshold Rule` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-skillforge-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SkillForge validation` |
| **card** | — | — | [skillforge-validation](../concepts/rjm/skillforge-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/CLAUDE.md:37. Enforces `SkillForge validation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-red-flag

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `RED FLAG` |
| **card** | — | — | [red-flag](../concepts/rjm/red-flag.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:Evaluate` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/scripts/score_vendor.py:202. Enforces `RED FLAG` gate.
- **sequencing note:** Enforced in rjm phase `rjm:Evaluate`.
- **needs decision:** no
- **decision:** —

### rjm-use-existing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `USE_EXISTING` |
| **card** | — | — | [use-existing](../concepts/rjm/use-existing.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/phase0-triage.md:54. Enforces `USE_EXISTING` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-validate-generated-agents

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validate Generated Agents` |
| **card** | — | — | [validate-generated-agents](../concepts/rjm/validate-generated-agents.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/workflows/validate-generated-agents.yml:9. Enforces `Validate Generated Agents` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-autonomy-guardrail

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Autonomy Guardrail` |
| **card** | — | — | [autonomy-guardrail](../concepts/rjm/autonomy-guardrail.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/code-reviewer.md:40. Enforces `Autonomy Guardrail` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-approved

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `APPROVED` |
| **card** | — | — | [approved](../concepts/rjm/approved.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/security.md:221. Enforces `APPROVED` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-ci-dependency-pins

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CI Dependency Pins` |
| **card** | — | — | [ci-dependency-pins](../concepts/rjm/ci-dependency-pins.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:260. Enforces `CI Dependency Pins` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-strategic-priority

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `strategic priority` |
| **card** | — | — | [strategic-priority](../concepts/rjm/strategic-priority.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:78. Enforces `strategic priority` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-strict-parser

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `strict parser` |
| **card** | — | — | [strict-parser](../concepts/rjm/strict-parser.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/context-optimizer/references/rule-audit-measurement-discipline.md:104. Enforces `strict parser` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-files-per-commit

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Files per commit` |
| **card** | — | — | [files-per-commit](../concepts/rjm/files-per-commit.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-change-control/references/gate-ladder.md:27. Enforces `Files per commit` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-rate-limit-pre-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Rate Limit Pre-Check` |
| **card** | — | — | [rate-limit-pre-check](../concepts/rjm/rate-limit-pre-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/AGENT-SYSTEM.md:1360. Enforces `Rate Limit Pre-Check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-layer-4

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Layer 4` |
| **card** | — | — | [layer-4](../concepts/rjm/layer-4.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/prose-self-check/scripts/prose_lint.py:23. Enforces `Layer 4` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-improve-existing

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `IMPROVE_EXISTING` |
| **card** | — | — | [improve-existing](../concepts/rjm/improve-existing.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/phase0-triage.md:55. Enforces `IMPROVE_EXISTING` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-stacking-compatibility

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Stacking compatibility` |
| **card** | — | — | [stacking-compatibility](../concepts/rjm/stacking-compatibility.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/prompt-engineer/SKILL.md:144. Enforces `Stacking compatibility` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-fail-no-delta

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `FAIL_NO_DELTA` |
| **card** | — | — | [fail-no-delta](../concepts/rjm/fail-no-delta.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-rule-activation.py:1717. Enforces `FAIL_NO_DELTA` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-orphan-references

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Orphan references` |
| **card** | — | — | [orphan-references](../concepts/rjm/orphan-references.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:40. Enforces `Orphan references` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-estimate-reconciliation-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Estimate Reconciliation Protocol` |
| **card** | — | — | [estimate-reconciliation-protocol](../concepts/rjm/estimate-reconciliation-protocol.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/task-decomposer.md:195. Enforces `Estimate Reconciliation Protocol` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-plugin-lib-sync-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Plugin lib sync check` |
| **card** | — | — | [plugin-lib-sync-check](../concepts/rjm/plugin-lib-sync-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/workflows/validate-generated-agents.yml:209. Enforces `Plugin lib sync check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-ai-session-protocol

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `ai-session-protocol` |
| **card** | — | — | [ai-session-protocol](../concepts/rjm/ai-session-protocol.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/metrics/workflow-coalescing.md:44. Enforces `ai-session-protocol` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-session-protocol-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Session Protocol Validation` |
| **card** | — | — | [session-protocol-validation](../concepts/rjm/session-protocol-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/README.md:38. Enforces `Session Protocol Validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-skillforge-validator

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `SkillForge validator` |
| **card** | — | — | [skillforge-validator](../concepts/rjm/skillforge-validator.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/SKILL-STANDARDS-RECONCILED.md:60. Enforces `SkillForge validator` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-orphan-ref-ignore-file

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `orphan-ref-ignore-file` |
| **card** | — | — | [orphan-ref-ignore-file](../concepts/rjm/orphan-ref-ignore-file.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-config-catalog/SKILL.md:83. Enforces `orphan-ref-ignore-file` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-investigation-only

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Investigation-only` |
| **card** | — | — | [investigation-only](../concepts/rjm/investigation-only.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-change-control/SKILL.md:33. Enforces `Investigation-only` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-acceptance-evidence

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Acceptance Evidence` |
| **card** | — | — | [acceptance-evidence](../concepts/rjm/acceptance-evidence.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-042-python-migration-strategy.md:14. Enforces `Acceptance Evidence` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-no-positive-cases

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NO_POSITIVE_CASES` |
| **card** | — | — | [no-positive-cases](../concepts/rjm/no-positive-cases.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-rule-activation.py:1752. Enforces `NO_POSITIVE_CASES` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-validate-github-actions-sha-pinning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validate GitHub Actions SHA Pinning` |
| **card** | — | — | [validate-github-actions-sha-pinning](../concepts/rjm/validate-github-actions-sha-pinning.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/workflows/validate-generated-agents.yml:234. Enforces `Validate GitHub Actions SHA Pinning` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-distinct

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DISTINCT` |
| **card** | — | — | [distinct](../concepts/rjm/distinct.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-skill-overlap.py:15. Enforces `DISTINCT` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-mirror-obligation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Mirror obligation` |
| **card** | — | — | [mirror-obligation](../concepts/rjm/mirror-obligation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/implementer.md:49. Enforces `Mirror obligation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-ci-drift-detection

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CI Drift Detection` |
| **card** | — | — | [ci-drift-detection](../concepts/rjm/ci-drift-detection.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in CONTRIBUTING.md:499. Enforces `CI Drift Detection` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-description-max-length

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `DESCRIPTION_MAX_LENGTH` |
| **card** | — | — | [description-max-length](../concepts/rjm/description-max-length.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/scripts/_constants.py:65. Enforces `DESCRIPTION_MAX_LENGTH` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-strictly-greater-semver

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `strictly-greater SemVer` |
| **card** | — | — | [strictly-greater-semver](../concepts/rjm/strictly-greater-semver.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-091-post-merge-version-bot.md:49. Enforces `strictly-greater SemVer` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-vanilla-guard

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `vanilla guard` |
| **card** | — | — | [vanilla-guard](../concepts/rjm/vanilla-guard.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/run_workflow_local_test.py:873. Enforces `vanilla guard` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-warning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `WARNING` |
| **card** | — | — | [warning](../concepts/rjm/warning.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/technical-guardrails.md:107. Enforces `WARNING` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-ci-enforcement

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CI Enforcement` |
| **card** | — | — | [ci-enforcement](../concepts/rjm/ci-enforcement.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/architect.md:485. Enforces `CI Enforcement` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-consolidation-triggers

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Consolidation Triggers` |
| **card** | — | — | [consolidation-triggers](../concepts/rjm/consolidation-triggers.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/agent-consolidation-process.md:9. Enforces `Consolidation Triggers` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-vendor-viability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `vendor viability` |
| **card** | — | — | [vendor-viability](../concepts/rjm/vendor-viability.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:82. Enforces `vendor viability` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-orphan-ref-ignore

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `orphan-ref-ignore` |
| **card** | — | — | [orphan-ref-ignore](../concepts/rjm/orphan-ref-ignore.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-config-catalog/SKILL.md:82. Enforces `orphan-ref-ignore` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-needs-research

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NEEDS_RESEARCH` |
| **card** | — | — | [needs-research](../concepts/rjm/needs-research.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/issue-feature-review.md:105. Enforces `NEEDS_RESEARCH` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-ok

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `OK` |
| **card** | — | — | [ok](../concepts/rjm/ok.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/security-review/SKILL.md:190. Enforces `OK` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-canonical-citation-check

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Canonical Citation Check` |
| **card** | — | — | [canonical-citation-check](../concepts/rjm/canonical-citation-check.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:334. Enforces `Canonical Citation Check` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-memory-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `memory-validation` |
| **card** | — | — | [memory-validation](../concepts/rjm/memory-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/metrics/workflow-coalescing.md:47. Enforces `memory-validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-kill-criterion

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `kill criterion` |
| **card** | — | — | [kill-criterion](../concepts/rjm/kill-criterion.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:122. Enforces `kill criterion` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-do-not-create-a-new-session-log

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Do not create a new session log` |
| **card** | — | — | [do-not-create-a-new-session-log](../concepts/rjm/do-not-create-a-new-session-log.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/rules/session-logs.md:27. Enforces `Do not create a new session log` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-end

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `End` |
| **card** | — | — | [end](../concepts/rjm/end.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in AGENTS.md:19. Enforces `End` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-source-attribution

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Source Attribution` |
| **card** | — | — | [source-attribution](../concepts/rjm/source-attribution.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/agents/retrospective.md:31. Enforces `Source Attribution` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-escalation-paths

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Escalation Paths` |
| **card** | — | — | [escalation-paths](../concepts/rjm/escalation-paths.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/analyze/references/agent-architecture-patterns.md:22. Enforces `Escalation Paths` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-timed-child-process-deny

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `timed child-process deny` |
| **card** | — | — | [timed-child-process-deny](../concepts/rjm/timed-child-process-deny.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:44. Enforces `timed child-process deny` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-modularity-score

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Modularity score` |
| **card** | — | — | [modularity-score](../concepts/rjm/modularity-score.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/skillforge/references/modularity-guidelines.md:48. Enforces `Modularity score` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-session-policy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `session-policy` |
| **card** | — | — | [session-policy](../concepts/rjm/session-policy.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/AGENTS.md:248. Enforces `session-policy` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-fail-positive-incomplete

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `FAIL_POSITIVE_INCOMPLETE` |
| **card** | — | — | [fail-positive-incomplete](../concepts/rjm/fail-positive-incomplete.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-rule-activation.py:1756. Enforces `FAIL_POSITIVE_INCOMPLETE` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-harmful

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Harmful` |
| **card** | — | — | [harmful](../concepts/rjm/harmful.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-frontier/SKILL.md:222. Enforces `Harmful` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-validate-copilot-agent-frontmatter

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validate Copilot agent frontmatter` |
| **card** | — | — | [validate-copilot-agent-frontmatter](../concepts/rjm/validate-copilot-agent-frontmatter.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/checks_plugin.py:58. Enforces `Validate Copilot agent frontmatter` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-start

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `START` |
| **card** | — | — | [start](../concepts/rjm/start.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/adr-generator/references/ad-quality-frameworks.md:21. Enforces `START` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-risk-level

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Risk Level` |
| **card** | — | — | [risk-level](../concepts/rjm/risk-level.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/task-classification-guide.md:13. Enforces `Risk Level` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-dry-run-mode

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `dry-run mode` |
| **card** | — | — | [dry-run-mode](../concepts/rjm/dry-run-mode.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:116. Enforces `dry-run mode` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-rework-warning

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `rework warning` |
| **card** | — | — | [rework-warning](../concepts/rjm/rework-warning.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:24. Enforces `rework warning` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-graduate-to-ci

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `graduate-to-CI` |
| **card** | — | — | [graduate-to-ci](../concepts/rjm/graduate-to-ci.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-058-agent-eval-discipline.md:186. Enforces `graduate-to-CI` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-registered-decision-rule

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Registered decision rule` |
| **card** | — | — | [registered-decision-rule](../concepts/rjm/registered-decision-rule.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/context-optimizer/references/rule-audit-instrument.md:67. Enforces `Registered decision rule` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-concrete-examples

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Concrete examples` |
| **card** | — | — | [concrete-examples](../concepts/rjm/concrete-examples.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/research-and-incorporate/SKILL.md:128. Enforces `Concrete examples` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-validate-plugin-frontmatter-self-containment

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validate plugin frontmatter self-containment` |
| **card** | — | — | [validate-plugin-frontmatter-self-containment](../concepts/rjm/validate-plugin-frontmatter-self-containment.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/workflows/validate-generated-agents.yml:175. Enforces `Validate plugin frontmatter self-containment` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-permissionrequest-output-and-failure

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `PermissionRequest output and failure` |
| **card** | — | — | [permissionrequest-output-and-failure](../concepts/rjm/permissionrequest-output-and-failure.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/agent-harness-reference/references/official-hook-contracts.md:197. Enforces `PermissionRequest output and failure` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-notification

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `notification` |
| **card** | — | — | [notification](../concepts/rjm/notification.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/agent-harness-reference/references/official-hook-contracts.md:94. Enforces `notification` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-model-pin-policy

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `model-pin policy` |
| **card** | — | — | [model-pin-policy](../concepts/rjm/model-pin-policy.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/governance/agent-design-principles.md:30. Enforces `model-pin policy` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-regulatory-changes

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `regulatory changes` |
| **card** | — | — | [regulatory-changes](../concepts/rjm/regulatory-changes.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:plan` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:119. Enforces `regulatory changes` gate.
- **sequencing note:** Enforced in rjm phase `rjm:plan`.
- **needs decision:** no
- **decision:** —

### rjm-plugin-manifest-version-prohibition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Plugin Manifest Version Prohibition` |
| **card** | — | — | [plugin-manifest-version-prohibition](../concepts/rjm/plugin-manifest-version-prohibition.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-config-catalog/SKILL.md:105. Enforces `Plugin Manifest Version Prohibition` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-skill-memory-references

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Skill Memory References` |
| **card** | — | — | [skill-memory-references](../concepts/rjm/skill-memory-references.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:315. Enforces `Skill Memory References` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-prefer-agent-form

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `prefer-agent-form` |
| **card** | — | — | [prefer-agent-form](../concepts/rjm/prefer-agent-form.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-075-form-factor-eval-methodology.md:54. Enforces `prefer-agent-form` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-em-en-dash-prohibition

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Em/en-dash Prohibition` |
| **card** | — | — | [em-en-dash-prohibition](../concepts/rjm/em-en-dash-prohibition.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/pre_pr_sequence.py:339. Enforces `Em/en-dash Prohibition` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-absolute-mode

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Absolute mode` |
| **card** | — | — | [absolute-mode](../concepts/rjm/absolute-mode.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/code-qualities-assessment/scripts/assess.py:12. Enforces `Absolute mode` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-must-9

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `MUST-9` |
| **card** | — | — | [must-9](../concepts/rjm/must-9.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/validation/agent_skill_discriminator_baseline.py:160. Enforces `MUST-9` gate.
- **sequencing note:** Enforced in rjm phase `rjm:cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-namespace-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Namespace Validation` |
| **card** | — | — | [namespace-validation](../concepts/rjm/namespace-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/security/ADR-045-framework-extraction-security-review.md:633. Enforces `Namespace Validation` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-policy-safety

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Policy safety` |
| **card** | — | — | [policy-safety](../concepts/rjm/policy-safety.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:282. Enforces `Policy safety` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-validate-agent-capability-matrix-references

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Validate agent capability matrix references` |
| **card** | — | — | [validate-agent-capability-matrix-references](../concepts/rjm/validate-agent-capability-matrix-references.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .github/workflows/validate-generated-agents.yml:184. Enforces `Validate agent capability matrix references` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-index-entry-naming-validation

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Index entry naming validation` |
| **card** | — | — | [index-entry-naming-validation](../concepts/rjm/index-entry-naming-validation.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `rjm:none` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-017-tiered-memory-index-architecture.md:258. Enforces `Index entry naming validation` gate.
- **sequencing note:** Enforced in rjm phase `rjm:none`.
- **needs decision:** no
- **decision:** —

### rjm-prefer-skill-form

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `prefer-skill-form` |
| **card** | — | — | [prefer-skill-form](../concepts/rjm/prefer-skill-form.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-075-form-factor-eval-methodology.md:53. Enforces `prefer-skill-form` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-tier-1-ci-cd

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Tier 1 (CI/CD)` |
| **card** | — | — | [tier-1-ci-cd](../concepts/rjm/tier-1-ci-cd.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in docs/codeql-integration.md:13. Enforces `Tier 1 (CI/CD)` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-pass-to-fail

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `pass-to-fail` |
| **card** | — | — | [pass-to-fail](../concepts/rjm/pass-to-fail.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-087-held-out-validated-improvement.md:268. Enforces `pass-to-fail` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-timely

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Timely` |
| **card** | — | — | [timely](../concepts/rjm/timely.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/retrospective/references/diagnosis-and-actions.md:156. Enforces `Timely` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-absolute

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `absolute` |
| **card** | — | — | [absolute](../concepts/rjm/absolute.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/code-qualities-assessment/SKILL.md:138. Enforces `absolute` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-ci-required-checks

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `CI required checks` |
| **card** | — | — | [ci-required-checks](../concepts/rjm/ci-required-checks.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-change-control/references/gate-ladder.md:16. Enforces `CI required checks` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-no-counterpart

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NO COUNTERPART` |
| **card** | — | — | [no-counterpart](../concepts/rjm/no-counterpart.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in templates/README.md:232. Enforces `NO COUNTERPART` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-evidence-bar

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Evidence Bar` |
| **card** | — | — | [evidence-bar](../concepts/rjm/evidence-bar.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .claude/skills/ai-agents-research-methodology/SKILL.md:38. Enforces `Evidence Bar` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-skill-first-guards

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `skill-first guards` |
| **card** | — | — | [skill-first-guards](../concepts/rjm/skill-first-guards.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:38. Enforces `skill-first guards` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-portability

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `Portability` |
| **card** | — | — | [portability](../concepts/rjm/portability.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:274. Enforces `Portability` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

### rjm-no-data

| | addy | matt | rjm |
|---|---|---|---|
| **name** | — | — | `NO_DATA` |
| **card** | — | — | [no-data](../concepts/rjm/no-data.md) |
| **kind** | — | — | gate |
| **phase** | — | — | `cross-phase` |
| **produces** | — | — | — |
| **consumes** | — | — | — |
| **impl status** | — | — | clean |

- **class:** UNIQUE
- **difference:** Unique to rjm. Defined in scripts/eval/eval-knowledge-integration.py:368. Enforces `NO_DATA` gate.
- **sequencing note:** Enforced in rjm phase `cross-phase`.
- **needs decision:** no
- **decision:** —

