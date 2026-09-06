---
package: rjm
path: .claude/skills/buy-vs-build-framework/SKILL.md
type: skill
bytes: 14826
unit: inv-rjm-97
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/buy-vs-build-framework/SKILL.md

## Purpose — required, verbatim
> "Your role is to guide systematic evaluation of build, buy, partner, or defer decisions through a four-phase framework that prevents both under-analysis (gut decisions) and over-analysis (paralysis)." — .claude/skills/buy-vs-build-framework/SKILL.md:13

## Design intent — required
Provides Principal+ engineering and business leaders with a structured, quantitative decision framework for evaluating whether to build, buy, partner, or defer capabilities over multi-year strategic horizons ($50K+ budget, 2+ year horizon). It structures the decision into a preliminary depth-selection tier (Quick, Standard, Deep) to avoid over-engineering small decisions or under-analyzing large capital investments, followed by four sequential phases: Core vs Context classification (Wardley mapping), 3/5/10-year Discounted Total Cost of Ownership (TCO) calculation and team capacity assessment, weighted multi-criteria decision matrix scoring with pre-mortem risk identification, and final ADR documentation coupled with programmatic reassessment triggers. Without this framework, teams make either impulsive gut-based sourcing choices that risk vendor lock-in and high hidden integration debt, or fall into analysis paralysis on commodity capabilities that could be purchased off-the-shelf.

## Phase — required
rjm:plan

## Inputs — required
- User invocation triggers:
  - `evaluate build vs buy for {capability}` — .claude/skills/buy-vs-build-framework/SKILL.md:19
  - `should we build or buy {system}` — .claude/skills/buy-vs-build-framework/SKILL.md:20
  - `core vs context analysis for {capability}` — .claude/skills/buy-vs-build-framework/SKILL.md:21
  - `strategic sourcing decision for {feature}` — .claude/skills/buy-vs-build-framework/SKILL.md:22
  - `make or buy decision for {system}` — .claude/skills/buy-vs-build-framework/SKILL.md:23
- Decision parameters and scope:
  - Depth tier selection based on Budget, Impact, and Reversibility: Quick (<$50K, low impact, easy reversibility), Standard ($50K-$500K, medium impact, moderate reversibility), Deep (>$500K, high impact, hard reversibility).
  - Core vs Context inputs: classification justifications (3+ supporting reasons), strategic importance score (1-10), Red Line criteria (Never Build / Never Buy boundaries).
  - TCO cost inputs: initial costs, ongoing annual costs, discount rate, and time horizon (3, 5, 10 years) across Build, Buy, and Partner options, plus team capacity assessment questions (skills, capacity, long-term maintenance, strategic capability development).
  - Decision criteria file: JSON format with weights and option scores across Strategic (40%), Operational (30%), and Risk (30%) dimensions.
  - Prior ADR document and current state assumptions JSON for reassessment trigger monitoring.
  - Vendor evaluation data JSON (stability, pricing, feature fit).
  - Upstream classification from Cynefin framework.

## Outputs — required
- Phase 0: Analysis depth selection tier (Quick / Standard / Deep).
- Phase 1: Core vs Context classification with 3+ supporting reasons, strategic importance score (1-10), Red Line criteria.
- Phase 2: TCO calculation across 3, 5, 10 year horizons, sensitivity analysis identifying top 3 cost drivers, team capacity assessment.
- Phase 3: Multi-criteria decision matrix scoring across Strategic, Operational, and Risk dimensions, leading option winner determination, and Pre-mortem risk assessment.
- Phase 4: Final decision recommendation (Build, Buy, Partner, or Defer), Architecture Decision Record (ADR-NNN using `ADR Template`), and reassessment plan with triggers.
- Command-line script reports: TCO summary report (`scripts/calculate_tco.py`), weighted decision score ranking (`scripts/score_decision.py`), drift and reassessment trigger report (`scripts/check_reassessment_triggers.py`), vendor risk score report (`scripts/score_vendor.py`).

## Invokes — required
- skill programming-advisor — .claude/skills/buy-vs-build-framework/SKILL.md:4
- skill cynefin-classifier — .claude/skills/buy-vs-build-framework/SKILL.md:35
- skill decision-critic — .claude/skills/buy-vs-build-framework/SKILL.md:39
- skill planner — .claude/skills/buy-vs-build-framework/SKILL.md:43
- skill pre-mortem — .claude/skills/buy-vs-build-framework/SKILL.md:167
- skill adr-review — .claude/skills/buy-vs-build-framework/SKILL.md:191
- script scripts/calculate_tco.py — .claude/skills/buy-vs-build-framework/SKILL.md:113
- script scripts/score_decision.py — .claude/skills/buy-vs-build-framework/SKILL.md:150
- script scripts/check_reassessment_triggers.py — .claude/skills/buy-vs-build-framework/SKILL.md:245
- script scripts/score_vendor.py — .claude/skills/buy-vs-build-framework/SKILL.md:262
- reference references/PHASE1_ANALYSIS.md — .claude/skills/buy-vs-build-framework/SKILL.md:427
- reference references/SKILL_SPEC.xml — .claude/skills/buy-vs-build-framework/SKILL.md:428
- template core-vs-context-analysis.md — .claude/skills/buy-vs-build-framework/SKILL.md:277
- template tco-analysis.md — .claude/skills/buy-vs-build-framework/SKILL.md:278
- template decision-matrix.md — .claude/skills/buy-vs-build-framework/SKILL.md:279
- template adr-buy-vs-build.md — .claude/skills/buy-vs-build-framework/SKILL.md:280

## Invoked by — required
- skill programming-advisor — .claude/skills/programming-advisor/SKILL.md:4
- skill autoplan — .claude/skills/autoplan/SKILL.md:117
- doc docs/skill-reference.md — docs/skill-reference.md:164

## Concepts named — required, verbatim
- `buy-vs-build-framework` — .claude/skills/buy-vs-build-framework/SKILL.md:2 — defined here
- `tiered TCO analysis` — .claude/skills/buy-vs-build-framework/SKILL.md:4 — defined here
- `programming-advisor` — .claude/skills/buy-vs-build-framework/SKILL.md:4 — used here
- `strategic sourcing advisor` — .claude/skills/buy-vs-build-framework/SKILL.md:13 — defined here
- `Principal+` — .claude/skills/buy-vs-build-framework/SKILL.md:13 — used here
- `core vs context analysis` — .claude/skills/buy-vs-build-framework/SKILL.md:21 — used here
- `TCO analysis` — .claude/skills/buy-vs-build-framework/SKILL.md:31 — defined here
- `cynefin-classifier` — .claude/skills/buy-vs-build-framework/SKILL.md:35 — used here
- `Complicated` — .claude/skills/buy-vs-build-framework/SKILL.md:37 — used here
- `Complex` — .claude/skills/buy-vs-build-framework/SKILL.md:37 — used here
- `decision-critic` — .claude/skills/buy-vs-build-framework/SKILL.md:39 — used here
- `planner` — .claude/skills/buy-vs-build-framework/SKILL.md:43 — used here
- `Depth Selection` — .claude/skills/buy-vs-build-framework/SKILL.md:51 — defined here
- `Classify` — .claude/skills/buy-vs-build-framework/SKILL.md:52 — defined here
- `Analyze` — .claude/skills/buy-vs-build-framework/SKILL.md:53 — defined here
- `Evaluate` — .claude/skills/buy-vs-build-framework/SKILL.md:54 — defined here
- `Decide` — .claude/skills/buy-vs-build-framework/SKILL.md:55 — defined here
- `Decision matrix` — .claude/skills/buy-vs-build-framework/SKILL.md:54 — defined here
- `Pre-mortem` — .claude/skills/buy-vs-build-framework/SKILL.md:54 — used here
- `ADR` — .claude/skills/buy-vs-build-framework/SKILL.md:55 — used here
- `Reassessment plan` — .claude/skills/buy-vs-build-framework/SKILL.md:55 — defined here
- `Quick` — .claude/skills/buy-vs-build-framework/SKILL.md:65 — defined here
- `Standard` — .claude/skills/buy-vs-build-framework/SKILL.md:66 — defined here
- `Deep` — .claude/skills/buy-vs-build-framework/SKILL.md:67 — defined here
- `Core` — .claude/skills/buy-vs-build-framework/SKILL.md:75 — used here
- `Context` — .claude/skills/buy-vs-build-framework/SKILL.md:75 — used here
- `Strategic importance score` — .claude/skills/buy-vs-build-framework/SKILL.md:97 — defined here
- `Red line criteria` — .claude/skills/buy-vs-build-framework/SKILL.md:98 — defined here
- `Never Build` — .claude/skills/buy-vs-build-framework/SKILL.md:98 — defined here
- `Never Buy` — .claude/skills/buy-vs-build-framework/SKILL.md:98 — defined here
- `Sensitivity analysis` — .claude/skills/buy-vs-build-framework/SKILL.md:140 — used here
- `Team capacity assessment` — .claude/skills/buy-vs-build-framework/SKILL.md:141 — defined here
- `Strategic` — .claude/skills/buy-vs-build-framework/SKILL.md:163 — defined here
- `Operational` — .claude/skills/buy-vs-build-framework/SKILL.md:164 — defined here
- `Risk` — .claude/skills/buy-vs-build-framework/SKILL.md:165 — defined here
- `Build` — .claude/skills/buy-vs-build-framework/SKILL.md:183 — defined here
- `Buy` — .claude/skills/buy-vs-build-framework/SKILL.md:184 — defined here
- `Partner` — .claude/skills/buy-vs-build-framework/SKILL.md:185 — defined here
- `Defer` — .claude/skills/buy-vs-build-framework/SKILL.md:186 — defined here
- `adr-review` — .claude/skills/buy-vs-build-framework/SKILL.md:191 — used here
- `NPV` — .claude/skills/buy-vs-build-framework/SKILL.md:204 — used here
- `IRR` — .claude/skills/buy-vs-build-framework/SKILL.md:204 — used here
- `break-even timeline` — .claude/skills/buy-vs-build-framework/SKILL.md:204 — defined here
- `assumption drift` — .claude/skills/buy-vs-build-framework/SKILL.md:242 — defined here
- `reassessment triggers` — .claude/skills/buy-vs-build-framework/SKILL.md:298 — defined here
- `ADR Template` — .claude/skills/buy-vs-build-framework/SKILL.md:311 — defined here
- `Reassessment Triggers` — .claude/skills/buy-vs-build-framework/SKILL.md:347 — defined here
- `Timelessness` — .claude/skills/buy-vs-build-framework/SKILL.md:403 — defined here
- `Wardley Mapping` — .claude/skills/buy-vs-build-framework/SKILL.md:408 — used here

## Structure
- # Buy vs Build Framework
- ## Triggers
- ## When to Use
- ## Quick Reference
- ## Process
- ### Phase 0: Depth Selection
- ### Phase 1: Classify (Core vs Context)
- ### Phase 2: Analyze (TCO + Capacity)
- ### Phase 3: Evaluate (Decision Matrix)
- ### Phase 4: Decide (Final Decision + ADR)
- ## Scripts
- ### calculate_tco.py
- ### score_decision.py
- ### check_reassessment_triggers.py
- ### score_vendor.py
- ## Templates
- ## Anti-Patterns
- ## Verification
- ## Related Skills
- Deep Dive: ADR Template
- Deep Dive: Reassessment Plan
- Deep Dive: Red Line Criteria
- Deep Dive: Timelessness (9/10)
- ## References

## Scripts — required if type is script or the skill ships scripts
The skill ships 4 Python scripts under `scripts/`:

### calculate_tco.py
- path: `sources/rjm/.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py`, Python 3, 521 lines
- documented invocation:
  > "python3 scripts/calculate_tco.py \" — .claude/skills/buy-vs-build-framework/SKILL.md:113
  > "python3 scripts/calculate_tco.py --help" — .claude/skills/buy-vs-build-framework/SKILL.md:207
- executed: yes
- actual command run: `python3 scripts/calculate_tco.py --build-initial 500000 --build-ongoing 100000 --buy-initial 50000 --buy-ongoing 200000 --partner-initial 100000 --partner-ongoing 150000 --discount-rate 0.12 --years 5`
- abridged stdout:
  ```text
  ================================================================================
  TCO Analysis (5 year horizon) - SIMPLE MODE
  ================================================================================
  COSTS (in today's dollars):
    Build:   $     139,522.38
    Buy:     $     670,955.24
    Partner: $     440,716.43
  RECOMMENDATION: Build ($139,522.38 total cost)
  ...
  ⚠️  WARNING: Negative NPV detected (costs exceed discounted value)
  ```
- actual exit code: 2
- documented exit codes:
  > "0: Success" — .claude/skills/buy-vs-build-framework/SKILL.md:220
  > "10: Warning (negative NPV detected)" — .claude/skills/buy-vs-build-framework/SKILL.md:221
  > "11: Error (missing cost categories)" — .claude/skills/buy-vs-build-framework/SKILL.md:222
- actual exit paths in code: `sys.exit(1)` on missing cost args (.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:373, 409, 417), `sys.exit(2)` on negative NPV warning (.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:514), `sys.exit(0)` on clean success (.claude/skills/buy-vs-build-framework/scripts/calculate_tco.py:516).
- exit code comparison: documented codes 10 and 11 do not exist in the source code; warnings exit 2 and errors exit 1 (`exit-code-mismatch`).
- gate behavior: not a binary validation gate; can exit non-zero (exits 2 when warning triggered).
- output matches claim: partial; output calculation matches, but warning output triggers exit code 2 instead of documented exit code 10.

### score_decision.py
- path: `sources/rjm/.claude/skills/buy-vs-build-framework/scripts/score_decision.py`, Python 3, 197 lines
- documented invocation:
  > "python3 scripts/score_decision.py \" — .claude/skills/buy-vs-build-framework/SKILL.md:150
  > "python3 scripts/score_decision.py --help" — .claude/skills/buy-vs-build-framework/SKILL.md:230
- executed: yes
- actual command run: `python3 scripts/score_decision.py --help`
- abridged stdout:
  ```text
  usage: score_decision.py [-h] --criteria-file CRITERIA_FILE
  Calculate weighted decision scores
  options:
    -h, --help            show this help message and exit
    --criteria-file CRITERIA_FILE
                          JSON file with criteria weights and scores
  ```
- actual exit code: 0 for `--help`; exit code 2 when invoked with documented example `python3 scripts/score_decision.py --criteria-file "decision-criteria.json" --options "build,buy,partner"` due to unrecognized argument `--options`.
- documented exit codes:
  > "0: Clear winner (>20% score gap)" — .claude/skills/buy-vs-build-framework/SKILL.md:236
  > "1: Tie requires human judgment (scores within 10%)" — .claude/skills/buy-vs-build-framework/SKILL.md:237
- actual exit paths in code: `sys.exit(1)` on missing args or tie (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:147, 192), `sys.exit(11)` on file/JSON errors (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:155, 158, 166), `sys.exit(0)` on clear winner (.claude/skills/buy-vs-build-framework/scripts/score_decision.py:194).
- exit code comparison: documented exit codes 0 and 1 exist in code, but exit code 11 for file/JSON errors is omitted from documentation (`missing-doc`).
- gate behavior: exits 1 when score difference between top options is within 10% (tie requiring human judgment).
- output matches claim: no for line 150 (crashes due to unsupported `--options` flag); yes for `--help`.

### check_reassessment_triggers.py
- path: `sources/rjm/.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py`, Python 3, 236 lines
- documented invocation:
  > "python3 scripts/check_reassessment_triggers.py --help" — .claude/skills/buy-vs-build-framework/SKILL.md:245
  > "python3 scripts/check_reassessment_triggers.py \" — .claude/skills/buy-vs-build-framework/SKILL.md:372
- executed: yes
- actual command run: `python3 scripts/check_reassessment_triggers.py --help`
- abridged stdout:
  ```text
  usage: check_reassessment_triggers.py [-h] --adr-file ADR_FILE --current-state CURRENT_STATE
  Detect assumption drift and recommend re-evaluation
  ```
- actual exit code: 0
- documented exit codes:
  > "0: Assumptions hold, stay course" — .claude/skills/buy-vs-build-framework/SKILL.md:252
  > "10: Minor drift (<20%), monitor closely" — .claude/skills/buy-vs-build-framework/SKILL.md:253
  > "11: Major drift (>20%), re-evaluation required" — .claude/skills/buy-vs-build-framework/SKILL.md:254
- actual exit paths in code: `sys.exit(1)` on input path error (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:34, 188, 202, 205), `sys.exit(exit_code)` at line 231 where `determine_recommendation()` returns 0 ("Assumptions hold, stay course"), 2 ("Monitor closely, consider re-evaluation"), or 3 ("Full re-evaluation required") (.claude/skills/buy-vs-build-framework/scripts/check_reassessment_triggers.py:134-139, 231).
- exit code comparison: documented codes 10 and 11 do not exist in code; actual code uses exit code 2 for minor drift and 3 for major drift (`exit-code-mismatch`).
- gate behavior: exits non-zero (2 or 3) when assumption drift exceeds thresholds.
- output matches claim: yes for help output; exit codes diverge from documentation.

### score_vendor.py
- path: `sources/rjm/.claude/skills/buy-vs-build-framework/scripts/score_vendor.py`, Python 3, 288 lines
- documented invocation:
  > "python3 scripts/score_vendor.py --help" — .claude/skills/buy-vs-build-framework/SKILL.md:262
- executed: yes
- actual command run: `python3 scripts/score_vendor.py --help`
- abridged stdout:
  ```text
  usage: score_vendor.py [-h] --vendor-data VENDOR_DATA
  Score vendor quality and risk profile
  ```
- actual exit code: 0
- documented exit codes:
  > "0: Pass (score >70)" — .claude/skills/buy-vs-build-framework/SKILL.md:268
  > "10: Yellow flag (score 50-70)" — .claude/skills/buy-vs-build-framework/SKILL.md:269
  > "11: Red flag (score <50)" — .claude/skills/buy-vs-build-framework/SKILL.md:270
- actual exit paths in code: `sys.exit(1)` on missing arguments (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:254), `sys.exit(11)` on file/JSON errors (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:257, 260), `sys.exit(0)` on score > 70 (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:281), `sys.exit(10)` on score 50-70 (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:283), `sys.exit(11)` on score < 50 (.claude/skills/buy-vs-build-framework/scripts/score_vendor.py:285).
- exit code comparison: documented codes 0, 10, 11 match actual exit paths in code.
- gate behavior: exits 10 or 11 on vendor risk flags.
- output matches claim: yes.

## Defects — required
- missing-path · .claude/skills/buy-vs-build-framework/SKILL.md:275 · The referenced templates/ directory and all four listed template files (core-vs-context-analysis.md, tco-analysis.md, decision-matrix.md, adr-buy-vs-build.md) do not exist on disk under .claude/skills/buy-vs-build-framework/templates/ (they are only partially embedded as XML tags inside references/SKILL_SPEC.xml).
- exit-code-mismatch · .claude/skills/buy-vs-build-framework/SKILL.md:221 · calculate_tco.py documents exit code 10 for warnings and 11 for errors, but the script implementation exits with 2 for warnings and 1 for errors.
- doc-drift · .claude/skills/buy-vs-build-framework/SKILL.md:152 · The Phase 3 example invocation for score_decision.py specifies --options "build,buy,partner", which is an unrecognized argument that causes argparse to fail with exit code 2.
- exit-code-mismatch · .claude/skills/buy-vs-build-framework/SKILL.md:253 · check_reassessment_triggers.py documents exit codes 10 (minor drift) and 11 (major drift), but determine_recommendation() in the script actually returns exit code 2 for minor drift and 3 for major drift.
- missing-doc · .claude/skills/buy-vs-build-framework/SKILL.md:235 · score_decision.py implements exit code 11 for file reading and JSON parsing errors (sys.exit(11) at lines 155, 158, 166), but lines 235-238 only document exit codes 0 and 1.

## Observations
- Multi-tier progressive disclosure: The 3-tier depth model (Quick, Standard, Deep) scales analytical overhead against financial and architectural impact, preventing analysis paralysis on small decisions while ensuring multi-week rigor for investments over $500K.
- Robust script support: Backs the decision process with four focused Python CLI utilities covering NPV/IRR financial modeling, weighted multi-attribute utility theory scoring, automated assumption drift detection, and vendor risk profiling.
- Cohesive decision quality integration: Forms a tightly coupled cluster with `cynefin-classifier` (pre-step for problem domain classification), `pre-mortem` (risk identification before committing to leading option), `decision-critic` (adversarial challenge of rationale), `adr-review` (cross-agent consensus), and `planner` (post-decision execution planning).
- Explicit framework durability self-audit: Includes a detailed "Deep Dive: Timelessness (9/10)" assessment evaluating economic fundamentals, cognitive biases, and potential disruptions like AI-assisted code generation that could shift build economics downward.

## Context cost
- This file: 14,826 bytes (~3,700 tokens)
- Loaded references:
  - `references/PHASE1_ANALYSIS.md`: 10,706 bytes (~2,676 tokens)
  - `references/SKILL_SPEC.xml`: 25,132 bytes (~6,283 tokens)
- Shipped scripts:
  - `scripts/calculate_tco.py`: 20,893 bytes (~5,223 tokens)
  - `scripts/score_decision.py`: 6,144 bytes (~1,536 tokens)
  - `scripts/check_reassessment_triggers.py`: 7,719 bytes (~1,930 tokens)
  - `scripts/score_vendor.py`: 7,813 bytes (~1,953 tokens)
- Total skill context footprint: 93,233 bytes (~23,300 tokens)
