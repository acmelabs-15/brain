# Handoff Report — Explorer 2: inv-addy-12 (`idea-refine`)

**Unit**: `inv-addy-12`  
**Package**: `addy` (`sources/addy/skills/idea-refine/`)  
**Investigator**: Explorer 2 (`.agents/explorer_inv_addy_12_2`)  
**Date**: 2026-09-03T05:52:00Z  
**Primary Focus**: Deep dive into `examples.md` and `refinement-criteria.md`, concept cataloguing per R6, cross-reference analysis (`evals/cases/idea-refine.json`, `sources/addy-external/idea-refine.md`), script execution verification, and §4 defect audit.

---

## 1. Observations

### 1.1 Scope & Assigned Files
All 5 assigned files in `sources/addy/skills/idea-refine/` were read in their entirety from line 1 to end:
1. `sources/addy/skills/idea-refine/examples.md` (20,284 bytes, 239 lines) — `Read in full`
2. `sources/addy/skills/idea-refine/frameworks.md` (5,404 bytes, 100 lines) — `Read in full`
3. `sources/addy/skills/idea-refine/scripts/idea-refine.sh` (342 bytes, 16 lines) — `Read in full`
4. `sources/addy/skills/idea-refine/SKILL.md` (8,111 bytes, 179 lines) — `Read in full`
5. `sources/addy/skills/idea-refine/refinement-criteria.md` (5,738 bytes, 114 lines) — `Read in full`

Total source size: 39,879 bytes (~9,970 tokens).

Additionally, related cross-reference files were inspected in full:
- `sources/addy/evals/cases/idea-refine.json` (1,269 bytes, 44 lines)
- `sources/addy-external/idea-refine.md` (24,943 bytes, 20 lines)
- `sources/addy/scripts/lib/skill-lint.js` (lines 45–75, specifically line 59)
- `sources/addy/CLAUDE.md` (line 21)
- `sources/addy/skills/interview-me/SKILL.md` (lines 14, 182, 225)
- `sources/addy/skills/using-agent-skills/SKILL.md` (lines 20, 137, 147, 171)
- `sources/addy/.claude/commands/` (checked for slash commands)

### 1.2 Verbatim Purpose Statements
- **`refinement-criteria.md:3`**:  
  > "Use this rubric during Phase 2 (Evaluate & Converge) to stress-test idea directions. Not every criterion applies to every idea — use judgment about which dimensions matter most for the specific context."
- **`examples.md:3`**:  
  > "These examples demonstrate what good ideation sessions look like across different kinds of ideas. Study the rhythm, tone, and structure — not just the content. The skill should feel equally at home with a vague startup concept, a feature for an existing product, or a process improvement."
- **`SKILL.md:8`**:  
  > "Refines raw ideas into sharp, actionable concepts worth building through structured divergent and convergent thinking."
- **`frameworks.md:3`**:  
  > "Use these frameworks selectively. Pick the lens that fits the idea — don't mechanically run every framework. The goal is to unlock thinking, not to follow a checklist."
- **`scripts/idea-refine.sh:4`**:  
  > "# This script helps initialize the ideas directory for the idea-refine skill."

### 1.3 Script Execution & Verification (R2)
- **Target Script**: `sources/addy/skills/idea-refine/scripts/idea-refine.sh`
- **Documented Usage** (`SKILL.md:20-23`):
  ```bash
  # Optional: Initialize the ideas directory
  bash skills/idea-refine/scripts/idea-refine.sh
  ```
- **Execution Test 1 (Initial creation)**:
  - Command: `cd sources/addy && bash skills/idea-refine/scripts/idea-refine.sh`
  - Stderr: `Created directory: docs/ideas`
  - Stdout: `{"status": "ready", "directory": "docs/ideas"}`
  - Actual exit code: `0`
- **Execution Test 2 (Idempotency / directory exists)**:
  - Command: `cd sources/addy && bash skills/idea-refine/scripts/idea-refine.sh`
  - Stderr: `Directory already exists: docs/ideas`
  - Stdout: `{"status": "ready", "directory": "docs/ideas"}`
  - Actual exit code: `0`
- **Code inspection**:
  - Contains `set -e` on line 2.
  - Variable `IDEAS_DIR="docs/ideas"` on line 6.
  - Lines 8–13 check `[ ! -d "$IDEAS_DIR" ]`, execute `mkdir -p "$IDEAS_DIR"` or report existing directory on stderr (`>&2`).
  - Line 15 outputs JSON string to stdout.
  - No explicit `exit 1` paths. Will only exit non-zero if `mkdir -p` fails under `set -e` (e.g. read-only filesystem or permissions failure).
- **Match with Documentation**:
  - The documentation in `SKILL.md:20-23` states the script initializes the ideas directory. The script accomplishes this idempotently and emits JSON metadata for consumption.

### 1.4 Critical Architectural & Structural Findings
1. **Structural Exemption in Addy Linter**:
   In `sources/addy/scripts/lib/skill-lint.js:57-60`:
   ```javascript
   const SECTION_EXEMPT_SKILLS = {
     'using-agent-skills': 'Meta-skill — orchestrates other skills; When-to-Use and Verification are not applicable to a routing document.',
     'idea-refine':        'Legacy structure predating skill-anatomy.md — uses How-It-Works/Usage/Anti-patterns instead of standard headings. Tracked for conformance in https://github.com/addyosmani/agent-skills/issues',
   };
   ```
   `idea-refine` is explicitly hard-coded as exempt from the repository's standard required sections (`## Overview`, `## When to Use`, `## Common Rationalizations`, `## Red Flags`, `## Verification`) because it predates `skill-anatomy.md`.
2. **Missing `/ideate` Slash Command**:
   `examples.md` repeatedly illustrates invocation via `/ideate <idea>` (`examples.md:9, 132, 178`). However, inspection of `sources/addy/.claude/commands/` reveals 9 commands: `build.md`, `code-simplify.md`, `constraints.md`, `plan.md`, `review.md`, `ship.md`, `spec.md`, `test.md`, and `webperf.md`. No `ideate.md` exists. `SKILL.md` documents invocation via conversational triggers ("Help me refine this idea", "Ideate on [concept]", "Stress-test my plan"), and `sources/addy-external/idea-refine.md:12` pairs `idea-refine` with `/spec` under the `Define` phase.
3. **Tool Reference**:
   `SKILL.md:69` instructs: `Use the AskUserQuestion tool to gather this input.` This is a specific tool name convention from Claude Code's interactive prompting layer.
4. **Fictional File Reference in Example 2**:
   `examples.md:152` cites `src/models/document.ts:45`. This is a mock path within a fictional document-editor project used to demonstrate codebase-aware ideation, not a broken path within `sources/addy`.

---

## 2. Logic Chain

1. **Premise**: `sources/addy` organizes software engineering lifecycle into 6 phases (`Define`, `Plan`, `Implement`, `Review`, `Ship`, `Cross-phase`), as recorded in `CLAUDE.md:21` and `README.md:354`.
2. **Observation**: `CLAUDE.md:21` states: `**Define:** interview-me, idea-refine, spec-driven-development`. `sources/addy-external/idea-refine.md:5` tags `idea-refine` with `Define phase`. `interview-me/SKILL.md:14, 182` positions `idea-refine` as the bridge between raw user intent clarification and downstream specification (`spec-driven-development`).
3. **Observation**: `SKILL.md` orchestrates a 3-phase conversational dialogue:
   - Phase 1: Understand & Expand (Divergent)
   - Phase 2: Evaluate & Converge
   - Phase 3: Sharpen & Ship
4. **Observation**: `frameworks.md` supplies Phase 1 ideation lenses (SCAMPER, HMW, First Principles, JTBD, Constraint-Based, Pre-mortem, Analogous Inspiration). `refinement-criteria.md` supplies Phase 2 evaluation rubrics (User Value, Feasibility, Differentiation, Assumption Audit, Decision Framework 2x2 matrix, MVP Scoping Principles). `examples.md` supplies demonstrations of all three phases across three distinct problem domains (greenfield startup, existing codebase feature, non-product process improvement).
5. **Observation**: `scripts/idea-refine.sh` ensures the target output directory `docs/ideas/` exists on disk before Phase 3 persists `docs/ideas/[idea-name].md`.
6. **Observation**: The eval case `evals/cases/idea-refine.json` tests these exact mechanisms: dialogue-kind grading checking for sharpening questions before converging, explicit hidden assumptions, MVP scope, explicit "Not Doing" list, and anti-sycophancy pushback against weak ideas.
7. **Conclusion**: `idea-refine` is an interactive conversational skill situated in the `addy:Define` phase, designed to prevent premature commitment to unvalidated concepts. Its reference files (`frameworks.md`, `refinement-criteria.md`, `examples.md`) and initialization script (`idea-refine.sh`) form a tightly coupled, self-contained ideation subsystem. The structural drift noted in `skill-lint.js` and the missing `/ideate` command in `examples.md` represent implementation-level documentation defects, while the underlying design intent and methodology are robust, comprehensive, and clear.

---

## 3. Caveats

1. **No Source Modifications**: Per the Teamwork explorer instructions, all investigations were strictly read-only; no source files or `docs/` files were created or modified outside `.agents/explorer_inv_addy_12_2/`.
2. **Script Cleanup**: Execution of `sources/addy/skills/idea-refine/scripts/idea-refine.sh` temporarily created directory `sources/addy/docs/ideas`, which was immediately removed cleanly to preserve repository purity.
3. **Mock Codebase Paths**: File path `src/models/document.ts:45` in `examples.md:152` was identified as an illustrative example within a hypothetical document editor and was not flagged as a missing dependency in `sources/addy`.

---

## 4. Conclusion

Work unit `inv-addy-12` comprises 5 files totaling 39,879 bytes. The skill represents Addy's primary divergent/convergent ideation vehicle in the `Define` phase. 

- `refinement-criteria.md` is an exceptionally high-value analytical artifact. It defines the core evaluation criteria for Phase 2: User Value (Painkiller vs. Vitamin distinction, specific discovery questions, red flags), Feasibility (Technical, Resource, Time-to-value), and Differentiation (a 6-tier hierarchy from New capability down to Cheaper). It introduces the 3-level Assumption Audit (Must Be True, Should Be True, Might Be True), a 2x2 Decision Matrix with Differentiation as tiebreaker, and 5 MVP Scoping Principles centered on testing the riskiest assumption first and mandating an explicit "Not Doing" list.
- `examples.md` is a 20 KB demonstration document illustrating three multi-turn dialogues:
  1. A complete 3-phase greenfield startup session (independent restaurants competing with delivery platforms) resulting in the `# ReOrder: Keep Your Regulars Ordering Direct` one-pager.
  2. A codebase-aware feature session (real-time collaboration in a document editor) citing specific AST/model constraints (`src/models/document.ts:45`) and balancing deal-closing requirements against engineering complexity.
  3. A process/workflow session (weekly team retrospectives) demonstrating problem reframing (identifying output failure rather than meeting format failure) and proposing zero-cost behavioral experiments.
  It concludes with 8 structural principles characterizing effective ideation.
- The unit contains 3 distinct defects under METHOD.md §4:
  1. `doc-drift` / `missing-command`: `examples.md:9, 132, 178` uses `/ideate`, which does not exist as a slash command in `sources/addy/.claude/commands/`.
  2. `doc-drift` / `structural-exemption`: `SKILL.md` uses legacy section headers and is exempt from standard anatomy checks per `scripts/lib/skill-lint.js:59`, contradicting `sources/addy-external/idea-refine.md`.
  3. `doc-drift` / `tool-reference`: `SKILL.md:69` hard-codes tool name `AskUserQuestion`.

---

## 5. Verification Method

To independently verify these findings:
1. **File Read Verification**: Inspect the 5 assigned files:
   ```bash
   head -n 25 sources/addy/skills/idea-refine/refinement-criteria.md
   head -n 25 sources/addy/skills/idea-refine/examples.md
   head -n 25 sources/addy/skills/idea-refine/SKILL.md
   ```
2. **Script Execution & Output**: Run the script from `sources/addy`:
   ```bash
   cd sources/addy && bash skills/idea-refine/scripts/idea-refine.sh
   # Stdout: {"status": "ready", "directory": "docs/ideas"}
   # Stderr: Created directory: docs/ideas (or Directory already exists: docs/ideas)
   # Exit code: 0
   ```
3. **Missing Command Verification**: Verify `/ideate` is absent from commands:
   ```bash
   ls sources/addy/.claude/commands/ideate.md
   # Expected: No such file or directory
   ```
4. **Linter Exemption Verification**: View `sources/addy/scripts/lib/skill-lint.js:59`:
   ```bash
   sed -n '57,61p' sources/addy/scripts/lib/skill-lint.js
   # Displays SECTION_EXEMPT_SKILLS entry for 'idea-refine'
   ```
5. **Evals & External Doc Consistency**:
   ```bash
   grep -n "skill_name" sources/addy/evals/cases/idea-refine.json
   grep -n "Define" sources/addy-external/idea-refine.md
   ```

---

# Detailed Deep Dive & Structured Findings

## Part A: Deep Dive on `refinement-criteria.md`

### 1. Document Structure & Intent
- **File**: `sources/addy/skills/idea-refine/refinement-criteria.md`
- **Size**: 5,738 bytes, 114 lines.
- **Role**: Operational rubric loaded during Phase 2 (Evaluate & Converge) of `idea-refine`.
- **Design Intent**: Prevents emotional attachment to weak concepts and halts scope creep before planning begins. It equips the agent with concrete evaluative tests, anti-sycophancy heuristics, an assumption taxonomy, a 2x2 prioritization matrix, and radical MVP pruning principles.

### 2. Core Evaluation Dimensions

#### Dimension 1: User Value (The Priority Dimension)
- **Primary Rule**: "The most important dimension. If the value isn't clear, nothing else matters." (`refinement-criteria.md:9`)
- **Painkiller vs. Vitamin Heuristic**:
  - *Painkiller*: Solves acute, frequent problems. Users seek it out, switch tools, experience emotion when describing the pain, have developed active workarounds, and will pay.
  - *Vitamin*: Nice to have. Users nod politely, say "that's cool", but do not alter their behavior.
- **Evaluation Questions**:
  1. Can you name 3 specific people who have this problem right now?
  2. What are they doing today instead? (The real competitor is always the current workaround.)
  3. Would they switch from their current approach? What would make them switch?
  4. How often do they encounter this problem? (Daily problems > monthly problems.)
  5. Is this a "pull" problem (users asking for it) or a "push" problem (creator believes they should want it)?
- **Red Flags**:
  - "Everyone could use this" (failure to identify a specific persona).
  - "It's like X but better" (marginal improvements rarely drive switching).
  - The problem is real but rare (high intensity but low frequency rarely sustains a product).

#### Dimension 2: Feasibility
- **Focus**: Practical and technical execution capability.
- **Three Pillars**:
  1. *Technical Feasibility*: Existence and reliability of core technology; known-hard vs. novel research problems; external API/data dependencies; minimum technical stack complexity.
  2. *Resource Feasibility*: Minimum team size/effort; specialized skills needed; legal, regulatory, or compliance hurdles.
  3. *Time-to-Value*: Speed to initial user delivery; presence of a days/weeks version vs. months; critical path identification.
- **Red Flags**:
  - "We just need to solve [very hard research problem] first."
  - Multiple simultaneous critical dependencies.
  - An MVP that still requires months of effort.

#### Dimension 3: Differentiation
- **Core Tenet**: Not better — *different* (`refinement-criteria.md:54`).
- **Evaluation Questions**:
  - What would a user say to a friend? Is it compelling?
  - What is the one thing this does that nothing else does?
  - Is differentiation durable, or easily cloned in a week?
  - Do users genuinely care about the difference, or is it only interesting to builders?
- **Hierarchy of Differentiation (Ranked Strongest to Weakest)**:
  1. *New capability*: Enables something previously impossible.
  2. *10x improvement*: Dramatically superior on a key dimension, altering user behavior.
  3. *New audience*: Extends an existing capability to previously excluded groups.
  4. *New context*: Operates reliably in environments where current solutions fail.
  5. *Better UX*: Same capability with dramatically lower friction and greater simplicity.
  6. *Cheaper*: Lower price point (weakest form; easily commoditized or competed away).
- **Red Flags**:
  - Differentiation focused entirely on technology rather than user experience.
  - "Faster/cheaper/prettier" without structural competitive moats.
  - Differentiating feature is not what users care about most.

### 3. Assumption Audit Taxonomy
The document mandates categorizing all underlying hypotheses into three distinct tiers:
1. **Must Be True (Dealbreakers)**: Assumptions that, if invalid, kill the entire concept. Must be validated prior to any engineering investment (e.g., "Users will share their private financial/customer data with us").
2. **Should Be True (Important)**: Assumptions that alter the approach, distribution, or economics but do not invalidate the core concept (e.g., "Users prefer self-serve onboarding over human interaction").
3. **Might Be True (Nice to Have)**: Secondary features, growth loops, or optimizations. Validation is deferred until core value is proven (e.g., "Users will share outcomes with colleagues").

### 4. Decision Framework (2x2 Prioritization Matrix)
Maps idea directions across Feasibility and Value:
| | High Feasibility | Low Feasibility |
|---|---|---|
| **High Value** | **Do this first** | **Worth the risk** |
| **Low Value** | **Only if trivial** | **Don't do this** |

- **Tiebreaker Rule**: When comparing directions in the same quadrant, use **Differentiation** as the tiebreaker (`refinement-criteria.md:103`).

### 5. MVP Scoping Principles
1. **One job, done well**: Solve exactly one user job thoroughly rather than three partially.
2. **The riskiest assumption first**: The MVP's sole purpose is testing the hypothesis most likely to be false.
3. **Time-box, not feature-list**: Focus on what can be proven within a tight timeframe rather than accumulating features.
4. **The 'Not Doing' list is mandatory**: Explicitly define what is omitted and why; eliminates scope creep and forces prioritization.
5. **If it's not embarrassing, you waited too long**: If the builder does not feel the first release is incomplete, it was over-engineered.

---

## Part B: Deep Dive on `examples.md`

### 1. Document Structure & Intent
- **File**: `sources/addy/skills/idea-refine/examples.md`
- **Size**: 20,284 bytes, 239 lines.
- **Role**: Companion reference demonstrating the cadence, tone, questioning techniques, and artifacts of effective ideation sessions.
- **Design Intent**: Shows that the skill is not a rigid form-filler, but a dynamic, opinionated dialogue partner that diagnoses before prescribing, generates labeled variations, pushes back against bad ideas, and outputs concrete, scoped artifacts.

### 2. Breakdown of Example Sessions

#### Example 1: Vague Early-Stage Startup (Greenfield Concept)
- **User Prompt**: `/ideate I want to help small local restaurants compete with the big delivery platforms` (`examples.md:9`)
- **Phase 1 (Understand & Expand)**:
  - *Restatement / HMW*: "How might we give independent restaurants the reach and convenience customers expect from delivery platforms, without forcing them into a model that erodes their margins and brand?" (`examples.md:15-16`)
  - *Sharpening Questions*: Which part of "compete"? Target persona (owner, diner, both)? Constraints (software, co-op, physical)?
  - *User Response*: Restaurant owners; 25–30% platform fees; customer dependency; software preferred.
  - *Reframing*: The problem is not delivery logistics — it is **customer dependency** (renting access to own customers at 30% commission).
  - *6 Labeled Variations Generated*:
    1. Direct Channel Toolkit (reorder off-platform)
    2. Inversion (charge customer $1–2 premium instead of restaurant)
    3. Constraint Removal (pickup-only; eliminate delivery logistics)
    4. Combination (neighborhood digital food hall co-op)
    5. Audience Shift (regulars-only reorder; 80/20 rule)
    6. Expert Lens (kitchen-first; zero-management automation)
  - *Synthesis*: Suggests fusing 5 and 6 ("keep your regulars ordering direct").
- **Phase 2 (Evaluate & Converge)**:
  - User selects 1 + 5 + 6.
  - Agent clusters into two contrasting directions:
    - *Direction A: The "Regulars Engine" (Variations 5 + 6 fused)*: High value ($20K/yr savings per 50 regulars), medium feasibility, high niche differentiation. Hidden assumption: regulars will use another method. Kill factor: customer habit inertia.
    - *Direction B: Direct Channel + Retention Hybrid (Variation 1 + 5)*: Lower feasibility (two products), medium differentiation (competes with Toast/Square), scope explosion risk.
  - *Honest Read & Critical Pushback*: Directs user to Direction A. Pushes back against user calling Variation 1 "necessary but boring" — warns that bundling commodity features dilutes differentiation.
- **Phase 3 (Sharpen & Ship)**:
  - Produced Artifact: `# ReOrder: Keep Your Regulars Ordering Direct` (`examples.md:90-127`)
  - Structure:
    - Problem Statement (HMW framing)
    - Recommended Direction (regulars-only retention engine, SMS-first)
    - Key Assumptions to Validate (3 concrete checkboxes with test methods and metrics)
    - MVP Scope (SMS reorder, manual 15-min owner setup, pickup only, zero delivery/app/marketplace)
    - Not Doing (and Why) (5 explicit cuts: delivery logistics, customer acquisition, branded apps, menu/POS integration, analytics dashboards)
    - Open Questions (SMS compliance, menu price changes, POS bootstrapping, pricing models)

#### Example 2: Feature in an Existing Product (Codebase-Aware)
- **User Prompt**: `/ideate adding real-time collaboration to our document editor` (`examples.md:132`)
- **Codebase Scanning**: Agent reads codebase architecture before responding: identifies block-based editor with REST persistence and absence of WebSocket infrastructure (`examples.md:139-140`).
- **Phase 1 (Understand & Expand)**:
  - *HMW Framing*: "How might we let multiple people work on the same document simultaneously in a way that feels natural, not chaotic?"
  - *Sharpening Questions*: Collaboration pattern (same paragraph, different sections, commenting)? Simultaneous users (2-3 vs 10+)? Driver (deals lost to Notion)?
  - *Context Grounding*: Cites `src/models/document.ts:45` (independent blocks with flat ordering system).
  - *5 Labeled Variations Generated*:
    1. Block-Level Locking (Simplest path, presence indicators, minimal changes)
    2. Inversion — Async-First Collaboration (suggestion/merge model)
    3. Simplification — Presence Without Co-Editing (avatars and cursors only)
    4. Combination — Collaboration + Version Branches (branching documents)
    5. 10x Version — AI-Mediated Collaboration (AI synthesizes collaborative drafts)
  - *Pragmatic Recommendation*: Recommends variation 1 or 3 to close sales deals immediately without over-engineering.
- **Condensed Phases 2 & 3**: Outlines clustering into "minimum viable co-editing" vs "differentiated collaboration", and defines MVP scope with an explicit "Not Doing" list (omits character-level CRDT, offline sync, and AI features).

#### Example 3: Process / Workflow Idea (Non-Product)
- **User Prompt**: `/ideate a better way to run our weekly team retrospectives — they've gotten stale and people dread them` (`examples.md:178`)
- **Phase 1 (Understand & Expand)**:
  - *HMW Framing*: "How might we make retrospectives genuinely useful — something the team looks forward to — instead of a recurring meeting people endure?"
  - *Sharpening Questions*: What feels stale? Team size/dynamic (8 people, 3-4 talk)? What does a good retro look like?
  - *Diagnostic Reframing*: The problem is not the meeting format — it is **broken at the output layer** (action items pile up and nothing changes).
  - *6 Labeled Variations Generated*:
    1. Fix the Output, Not the Meeting (1 action item max, mandatory demo next week)
    2. Inversion — Kill the Meeting (async written submissions)
    3. Audience Shift — Retro for the Quiet Ones (anonymous input, dot-voting, pairs)
    4. Simplification — The One Question Retro (single rotating question)
    5. Combination — Retro + Experimentation (hypotheses tested over 2 weeks)
    6. Expert Lens — What Facilitators Know (psychological safety audit; anonymous 1-5 health check)
  - *Tension Analysis*: Contrasts output bottlenecks (1, 5) against input bottlenecks (2, 3, 4) and root psychological safety (6).
- **Condensed Phases 2 & 3**: Recommends starting with variation 1 + 3 as a $0 / 0-minute prep experiment; "Not Doing" list excludes new software tools or expensive facilitation frameworks.

### 3. The 8 Structural Ideation Principles (`examples.md:222-239`)
1. **Restatement changes the frame**: Transform vague wishes into acute problems with clear leverage.
2. **Questions diagnose before prescribing**: Uncover the underlying constraint before brainstorming solutions.
3. **Variations have reasons**: Label the creative lens (Inversion, Simplification, 10x) so users learn the thinking models.
4. **The skill has opinions**: Take a stance; recommend specific directions based on context rather than presenting neutral lists.
5. **Phase 2 is honest**: Surface hidden assumptions, call out weak points, and challenge conventional instincts.
6. **The output is actionable**: End with testable hypotheses, concrete scopes, and next steps rather than abstract thoughts.
7. **The "Not Doing" list does real work**: Force disciplined trade-offs by documenting what is deliberately excluded.
8. **The skill adapts to context**: Seamlessly tailor responses to greenfield products, codebase constraints, or organizational workflows.

---

## Part C: Comprehensive Concept Catalogue (METHOD.md R6)

Every named concept across the unit's files is catalogued below with its verbatim name, source file, line number, and definition status:

| Concept Name | Path:Line | Status | Role / Category |
|---|---|---|---|
| `idea-refine` | `SKILL.md:2` | defined here | Lifecycle Skill (`Define` phase) |
| `Divergent and convergent thinking` | `SKILL.md:3, 8` | defined here | Core Ideation Methodology |
| `Understand & Expand (Divergent)` (Phase 1) | `SKILL.md:12, 56` | defined here | Lifecycle Phase / Skill Stage |
| `Evaluate & Converge` (Phase 2) | `SKILL.md:13, 86` | defined here | Lifecycle Phase / Skill Stage |
| `Sharpen & Ship` (Phase 3) | `SKILL.md:14, 108` | defined here | Lifecycle Phase / Skill Stage |
| `one-pager` / `markdown one-pager` | `SKILL.md:14, 32, 110` | defined here | Core Output Artifact |
| `docs/ideas/[idea-name].md` | `SKILL.md:32, 140` | defined here | Standard Output Path |
| `Problem Statement` | `SKILL.md:33, 115` | defined here | One-Pager Section / Artifact |
| `Recommended Direction` | `SKILL.md:34, 118` | defined here | One-Pager Section / Artifact |
| `Key Assumptions to Validate` | `SKILL.md:35, 121` | defined here | One-Pager Section / Gate Checklist |
| `MVP Scope` | `SKILL.md:36, 126` | defined here | One-Pager Section / Artifact |
| `Not Doing list` / `Not Doing (and Why)` | `SKILL.md:37, 129, 138` | defined here | One-Pager Section / Scope Gate |
| `Open Questions` | `SKILL.md:134` | defined here | One-Pager Section / Artifact |
| `How Might We` (`HMW`) | `SKILL.md:60`, `frameworks.md:19` | defined in `frameworks.md:19` | Problem Framing Technique |
| `Sharpening questions` | `SKILL.md:62` | defined here | Diagnostic Technique |
| `AskUserQuestion` | `SKILL.md:69` | used here | Agent Interaction Tool |
| `Inversion` | `SKILL.md:72` | defined here | Ideation Lens / Technique |
| `Constraint removal` | `SKILL.md:73` | defined here | Ideation Lens / Technique |
| `Audience shift` | `SKILL.md:74` | defined here | Ideation Lens / Technique |
| `Combination` | `SKILL.md:75` | defined here | Ideation Lens / Technique |
| `Simplification` | `SKILL.md:76` | defined here | Ideation Lens / Technique |
| `10x version` | `SKILL.md:77` | defined here | Ideation Lens / Technique |
| `Expert lens` | `SKILL.md:78` | defined here | Ideation Lens / Technique |
| `Codebase scanning` (`Glob`, `Grep`, `Read`) | `SKILL.md:82` | defined here / used here | Grounding Technique / Tools |
| `Direction clustering` | `SKILL.md:90` | defined here | Convergence Technique |
| `Stress-testing` | `SKILL.md:92` | defined here | Evaluation Technique |
| `User value` | `SKILL.md:93`, `refinement-criteria.md:7` | defined in `refinement-criteria.md:7` | Evaluation Dimension |
| `Feasibility` | `SKILL.md:94`, `refinement-criteria.md:27` | defined in `refinement-criteria.md:27` | Evaluation Dimension |
| `Differentiation` | `SKILL.md:95`, `refinement-criteria.md:52` | defined in `refinement-criteria.md:52` | Evaluation Dimension |
| `Hidden assumptions` | `SKILL.md:99`, `refinement-criteria.md:75` | defined in `refinement-criteria.md:75` | Risk Surfacing Technique |
| `Anti-patterns` | `SKILL.md:142` | defined here | Heuristic Checklist |
| `Red Flags` | `SKILL.md:158` | defined here | Heuristic Checklist |
| `Verification checklist` | `SKILL.md:168` | defined here | Exit Gate Checklist |
| `SCAMPER` | `frameworks.md:5` | defined here | Transformation Framework |
| `Substitute` | `frameworks.md:9` | defined here | SCAMPER Operation |
| `Combine` | `frameworks.md:10` | defined here | SCAMPER Operation |
| `Adapt` | `frameworks.md:11` | defined here | SCAMPER Operation |
| `Modify (Magnify/Minimize)` | `frameworks.md:12` | defined here | SCAMPER Operation |
| `Put to other uses` | `frameworks.md:13` | defined here | SCAMPER Operation |
| `Eliminate` | `frameworks.md:14` | defined here | SCAMPER Operation |
| `Reverse/Rearrange` | `frameworks.md:15` | defined here | SCAMPER Operation |
| `First Principles Thinking` | `frameworks.md:39` | defined here | Fundamental Truths Framework |
| `Jobs to Be Done` (`JTBD`) | `frameworks.md:50` | defined here | Needs Analysis Framework |
| `Functional job` | `frameworks.md:54` | defined here | JTBD Dimension |
| `Emotional job` | `frameworks.md:55` | defined here | JTBD Dimension |
| `Social job` | `frameworks.md:56` | defined here | JTBD Dimension |
| `Constraint-Based Ideation` | `frameworks.md:64` | defined here | Lateral Thinking Technique |
| `Time constraint` | `frameworks.md:68` | defined here | Ideation Constraint Type |
| `Feature constraint` | `frameworks.md:69` | defined here | Ideation Constraint Type |
| `Tech constraint` | `frameworks.md:70` | defined here | Ideation Constraint Type |
| `Cost constraint` | `frameworks.md:71` | defined here | Ideation Constraint Type |
| `Audience constraint` | `frameworks.md:72` | defined here | Ideation Constraint Type |
| `Scale constraint` | `frameworks.md:73` | defined here | Ideation Constraint Type |
| `Pre-mortem` | `frameworks.md:77` | defined here | Failure Anticipation Technique |
| `Analogous Inspiration` | `frameworks.md:88` | defined here | Cross-Domain Ideation Technique |
| `Painkiller vs. Vitamin` | `refinement-criteria.md:11` | defined here | Value Heuristic |
| `Painkiller` | `refinement-criteria.md:12` | defined here | Value Category |
| `Vitamin` | `refinement-criteria.md:13` | defined here | Value Category |
| `Technical feasibility` | `refinement-criteria.md:31` | defined here | Feasibility Sub-dimension |
| `Resource feasibility` | `refinement-criteria.md:37` | defined here | Feasibility Sub-dimension |
| `Time-to-value` | `refinement-criteria.md:42` | defined here | Feasibility Sub-dimension |
| `New capability` | `refinement-criteria.md:63` | defined here | Differentiation Type (Tier 1) |
| `10x improvement` | `refinement-criteria.md:64` | defined here | Differentiation Type (Tier 2) |
| `New audience` | `refinement-criteria.md:65` | defined here | Differentiation Type (Tier 3) |
| `New context` | `refinement-criteria.md:66` | defined here | Differentiation Type (Tier 4) |
| `Better UX` | `refinement-criteria.md:67` | defined here | Differentiation Type (Tier 5) |
| `Cheaper` | `refinement-criteria.md:68` | defined here | Differentiation Type (Tier 6) |
| `Assumption Audit` | `refinement-criteria.md:75` | defined here | Risk Governance Framework |
| `Must Be True (Dealbreakers)` | `refinement-criteria.md:79` | defined here | Assumption Tier 1 |
| `Should Be True (Important)` | `refinement-criteria.md:84` | defined here | Assumption Tier 2 |
| `Might Be True (Nice to Have)` | `refinement-criteria.md:89` | defined here | Assumption Tier 3 |
| `Decision Framework` (2x2 Matrix) | `refinement-criteria.md:94` | defined here | Direction Selection Matrix |
| `Do this first` (High Feas / High Val) | `refinement-criteria.md:100` | defined here | Matrix Quadrant Recommendation |
| `Worth the risk` (Low Feas / High Val) | `refinement-criteria.md:100` | defined here | Matrix Quadrant Recommendation |
| `Only if trivial` (High Feas / Low Val) | `refinement-criteria.md:101` | defined here | Matrix Quadrant Recommendation |
| `Don't do this` (Low Feas / Low Val) | `refinement-criteria.md:101` | defined here | Matrix Quadrant Recommendation |
| `MVP Scoping Principles` | `refinement-criteria.md:105` | defined here | Scoping Ruleset |
| `One job, done well` | `refinement-criteria.md:109` | defined here | MVP Scoping Principle |
| `The riskiest assumption first` | `refinement-criteria.md:110` | defined here | MVP Scoping Principle |
| `Time-box, not feature-list` | `refinement-criteria.md:111` | defined here | MVP Scoping Principle |
| `/ideate` | `examples.md:9, 132, 178` | used here | Slash Command Invocation Pattern |
| `Direct Channel Toolkit` | `examples.md:31` | defined here | Domain Concept / Direction |
| `Regulars Engine` | `examples.md:57` | defined here | Direction Cluster / Concept |
| `Direct Channel + Retention Hybrid` | `examples.md:70` | defined here | Direction Cluster / Concept |
| `Block-Level Locking` | `examples.md:156` | defined here | Architecture Concept |
| `Async-First Collaboration` | `examples.md:158` | defined here | Architecture Concept |
| `Retro + Experimentation` | `examples.md:208` | defined here | Process Concept |
| `Team health check` | `examples.md:210` | defined here | Safety Metric |
| `status: ready` | `scripts/idea-refine.sh:15` | defined here | Execution Status Schema |

---

## Part D: METHOD.md §4 Checklist & Defect Registry

### 1. Existence Check
- All files in `sources/addy/skills/idea-refine/` exist on disk:
  - `SKILL.md` (8,111 bytes)
  - `frameworks.md` (5,404 bytes)
  - `refinement-criteria.md` (5,738 bytes)
  - `examples.md` (20,284 bytes)
  - `scripts/idea-refine.sh` (342 bytes)
- Target directory referenced (`docs/ideas/` in `SKILL.md:32` and `scripts/idea-refine.sh:6`) is managed by script.
- Cross-referenced files exist:
  - `sources/addy/evals/cases/idea-refine.json` (1,269 bytes)
  - `sources/addy-external/idea-refine.md` (24,943 bytes)
- Codebase reference `src/models/document.ts:45` in `examples.md:152` is verified to be a fictional illustrative example, not an external dependency.

### 2. Execution Check
- `scripts/idea-refine.sh` executed under bash:
  - Exit code: `0`.
  - Output stdout: `{"status": "ready", "directory": "docs/ideas"}`.
  - Output stderr: `Created directory: docs/ideas` (run 1), `Directory already exists: docs/ideas` (run 2).
  - Code contains `set -e`, zero failing paths under normal directory initialization. Matches documentation.

### 3. Documentation Drift & Contradictions
- **Defect 1: `doc-drift` (Missing slash command `/ideate`)**:  
  `examples.md:9, 132, 178` depicts invocations using `/ideate [idea]`. However, no `commands/ideate.md` or `.claude/commands/ideate.md` exists in `sources/addy/`. In reality, the skill is triggered conversationally via frontmatter phrases ("ideate", "refine this idea", "stress-test my plan"), and the external website assigns the skill to the `Define` phase where `/spec` is listed as the command.
- **Defect 2: `doc-drift` / `structural-exemption` (Anatomy non-conformance)**:  
  `sources/addy-external/idea-refine.md:10` claims all skills follow the 6-part anatomy ("Overview", "When to Use", "Process", "Rationalizations", "Red Flags", "Verification"). In reality, `SKILL.md` uses legacy section headings ("How It Works", "Usage", "Philosophy", "Anti-patterns to Avoid", "Tone") and lacks "Rationalizations". This structural non-conformance is confirmed by `sources/addy/scripts/lib/skill-lint.js:59`, where `idea-refine` is explicitly hardcoded into `SECTION_EXEMPT_SKILLS`.
- **Defect 3: `doc-drift` (Tool naming specificity)**:  
  `SKILL.md:69` specifies: `Use the AskUserQuestion tool to gather this input.` This assumes a dedicated tool name rather than generic multi-turn conversational prompting, which may cause tool lookup failures in environments that use `AskFollowupQuestion` or standard user turns.
- **Defect 4: `unfailable-gate`**:  
  `scripts/idea-refine.sh` functions purely as an idempotent directory bootstrapper. It has no validation or gating logic and always exits 0.

### 4. Composition & Cross-File Consistency
- **Phase Placement**: Solidly assigned to `addy:Define` (`CLAUDE.md:21`, `README.md:354`, `sources/addy-external/idea-refine.md:5`).
- **Lifecycle Upstream**: Consumes rough ideas from users or outputs from `interview-me` (`interview-me/SKILL.md:14, 182, 225`).
- **Lifecycle Downstream**: Produces markdown one-pagers (`docs/ideas/[idea-name].md`) that feed directly into `spec-driven-development` and `planning-and-task-breakdown` (`using-agent-skills/SKILL.md:137`).
- **Eval Harness Alignment**: Fully tested by `evals/cases/idea-refine.json` in `run-evals.js`, with positive trigger phrases matching `SKILL.md:25-29` and dialogue grading verifying sharpening questions, assumption surfacing, MVP scoping, and anti-sycophancy pushback.

---

## Part E: Ready-to-Use Inventory Entries

Below are the fully formatted inventory entries for `examples.md` and `refinement-criteria.md` ready for compilation by the Orchestrator.

### Inventory Entry 1: `skills-idea-refine-examples-md.md`
```markdown
---
package: addy
path: skills/idea-refine/examples.md
type: skill
bytes: 20284
unit: inv-addy-12
---

# skills/idea-refine/examples.md

## Purpose — required, verbatim
> "These examples demonstrate what good ideation sessions look like across different kinds of ideas. Study the rhythm, tone, and structure — not just the content. The skill should feel equally at home with a vague startup concept, a feature for an existing product, or a process improvement." — skills/idea-refine/examples.md:3

## Design intent — required
Demonstrates conversational ideation across three diverse product and process domains: a greenfield local-restaurant startup, a codebase-grounded document editor collaboration feature, and a team retrospective workflow improvement. It illustrates how an ideation agent diagnoses root causes before prescribing solutions, applies creative thinking lenses with transparent rationale, challenges user assumptions with candid pushback, evaluates directions against user value and feasibility, and converges on a concrete markdown one-pager featuring explicit MVP scope and a mandatory "Not Doing" list.

## Phase — required
addy:Define

## Inputs — required
- User invocation prompts with raw ideas:
  - Greenfield startup prompt — skills/idea-refine/examples.md:9
  - Codebase feature prompt — skills/idea-refine/examples.md:132
  - Workflow improvement prompt — skills/idea-refine/examples.md:178
- User answers to diagnostic sharpening questions — skills/idea-refine/examples.md:23, 146, 192
- Codebase inspection data (`Glob`, `Grep`, `Read`) scanning model architecture and APIs — skills/idea-refine/examples.md:139-140, 152

## Outputs — required
- Completed markdown one-pager artifact: `# ReOrder: Keep Your Regulars Ordering Direct` — skills/idea-refine/examples.md:90-127
- Condensed direction evaluations and MVP scoping definitions — skills/idea-refine/examples.md:169-174, 215-219

## Invokes — required
- skill `idea-refine` — skills/idea-refine/examples.md:1
- reference `refinement-criteria.md` — skills/idea-refine/examples.md:49-84
- reference `frameworks.md` — skills/idea-refine/examples.md:29-42, 154-165, 198-211

## Invoked by — required
- skill `idea-refine` (`SKILL.md`) — skills/idea-refine/SKILL.md:156

## Concepts named — required, verbatim
- `Ideation Session Examples` — skills/idea-refine/examples.md:1 — defined here
- `/ideate` — skills/idea-refine/examples.md:9, 132, 178 — used here
- `Phase 1: Understand & Expand` — skills/idea-refine/examples.md:11, 134, 180 — used here
- `How Might We` — skills/idea-refine/examples.md:15, 92, 138, 184 — used here
- `Sharpening questions` — skills/idea-refine/examples.md:17, 140, 186 — used here
- `Direct Channel Toolkit` — skills/idea-refine/examples.md:31 — defined here
- `Inversion` — skills/idea-refine/examples.md:33, 158, 202 — used here
- `Constraint Removal` — skills/idea-refine/examples.md:35 — used here
- `Combination` — skills/idea-refine/examples.md:37, 162, 208 — used here
- `Audience Shift` — skills/idea-refine/examples.md:39, 204 — used here
- `Expert Lens` — skills/idea-refine/examples.md:41, 210 — used here
- `Phase 2: Evaluate & Converge` — skills/idea-refine/examples.md:49, 169, 215 — used here
- `Regulars Engine` — skills/idea-refine/examples.md:57 — defined here
- `Direct Channel + Retention Hybrid` — skills/idea-refine/examples.md:70 — defined here
- `Hidden assumptions` — skills/idea-refine/examples.md:64, 77 — used here
- `Phase 3: Sharpen & Ship` — skills/idea-refine/examples.md:86, 172, 218 — used here
- `one-pager` — skills/idea-refine/examples.md:88, 172, 218, 234 — used here
- `Problem Statement` — skills/idea-refine/examples.md:92 — used here
- `Recommended Direction` — skills/idea-refine/examples.md:95 — used here
- `Key Assumptions to Validate` — skills/idea-refine/examples.md:102 — used here
- `MVP Scope` — skills/idea-refine/examples.md:107 — used here
- `Not Doing (and Why)` — skills/idea-refine/examples.md:115 — used here
- `Not Doing list` — skills/idea-refine/examples.md:173, 218, 236 — used here
- `Open Questions` — skills/idea-refine/examples.md:122 — used here
- `Block-Level Locking` — skills/idea-refine/examples.md:156 — defined here
- `Async-First Collaboration` — skills/idea-refine/examples.md:158 — defined here
- `Simplification` — skills/idea-refine/examples.md:160, 206 — used here
- `10x Version` — skills/idea-refine/examples.md:164 — used here
- `Retro + Experimentation` — skills/idea-refine/examples.md:208 — defined here
- `Team health check` — skills/idea-refine/examples.md:210 — defined here

## Structure
- `# Ideation Session Examples` (line 1)
- `## Example 1: Vague Early-Stage Concept (Full 3-Phase Session)` (lines 7-128)
  - `### Phase 1: Understand & Expand` (lines 11-47)
  - `### Phase 2: Evaluate & Converge` (lines 49-84)
  - `### Phase 3: Sharpen & Ship` (lines 86-128)
- `## Example 2: Feature Idea Within an Existing Product (Codebase-Aware)` (lines 130-174)
  - `### Phase 1: Understand & Expand` (lines 134-167)
- `## Example 3: Process/Workflow Idea (Non-Product)` (lines 176-220)
  - `### Phase 1: Understand & Expand` (lines 180-213)
- `## What to Notice in These Examples` (lines 222-239)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — skills/idea-refine/examples.md:9, 132, 178 — invokes skill using `/ideate`, but no `ideate.md` slash command exists in `sources/addy/.claude/commands/`.

## Observations
Contains an exemplary full-turn transcript showing anti-sycophancy: the agent actively challenges the user's desire to bundle commodity features ("I want to push back on: you said variation 1 feels 'necessary but boring'..."), illustrating how disciplined product thinking prevents scope explosion. Example 2 cites mock path `src/models/document.ts:45` to show how codebase AST analysis grounds ideation.

## Context cost
20,284 bytes (approx. 5,071 tokens).
```

---

### Inventory Entry 2: `skills-idea-refine-refinement-criteria-md.md`
```markdown
---
package: addy
path: skills/idea-refine/refinement-criteria.md
type: skill
bytes: 5738
unit: inv-addy-12
---

# skills/idea-refine/refinement-criteria.md

## Purpose — required, verbatim
> "Use this rubric during Phase 2 (Evaluate & Converge) to stress-test idea directions. Not every criterion applies to every idea — use judgment about which dimensions matter most for the specific context." — skills/idea-refine/refinement-criteria.md:3

## Design intent — required
Establishes a rigorous evaluation framework for stress-testing candidate idea directions during the convergence phase of ideation. Solves the problem of subjective, ungrounded feature selection by evaluating concepts across User Value (Painkiller vs. Vitamin distinction), Feasibility (technical stack, resources, time-to-value), and Differentiation (a 6-tier hierarchy from New capability down to Price). Provides an Assumption Audit classifying hypotheses into Must Be True dealbreakers, Should Be True adjustments, and Might Be True nice-to-haves, coupled with a 2x2 Value/Feasibility matrix and five MVP scoping principles mandating radical scope pruning and an explicit "Not Doing" list.

## Phase — required
addy:Define

## Inputs — required
- Candidate idea directions generated during Phase 1 (Divergent expansion) — skills/idea-refine/refinement-criteria.md:3
- Identified technical architecture constraints and resource estimates — skills/idea-refine/refinement-criteria.md:31-41

## Outputs — required
- Direction evaluations, risk rankings, assumption tier classifications, and quadrant decisions mapped to MVP scope — skills/idea-refine/refinement-criteria.md:75-114

## Invokes — required
none

## Invoked by — required
- skill `idea-refine` (`SKILL.md`) — skills/idea-refine/SKILL.md:97
- reference `examples.md` — skills/idea-refine/examples.md:49-84

## Concepts named — required, verbatim
- `Refinement & Evaluation Criteria` — skills/idea-refine/refinement-criteria.md:1 — defined here
- `Evaluate & Converge` — skills/idea-refine/refinement-criteria.md:3 — used here
- `Core Evaluation Dimensions` — skills/idea-refine/refinement-criteria.md:5 — defined here
- `User Value` — skills/idea-refine/refinement-criteria.md:7 — defined here
- `Painkiller vs. Vitamin` — skills/idea-refine/refinement-criteria.md:11 — defined here
- `Painkiller` — skills/idea-refine/refinement-criteria.md:12 — defined here
- `Vitamin` — skills/idea-refine/refinement-criteria.md:13 — defined here
- `Feasibility` — skills/idea-refine/refinement-criteria.md:27 — defined here
- `Technical feasibility` — skills/idea-refine/refinement-criteria.md:31 — defined here
- `Resource feasibility` — skills/idea-refine/refinement-criteria.md:37 — defined here
- `Time-to-value` — skills/idea-refine/refinement-criteria.md:42 — defined here
- `Differentiation` — skills/idea-refine/refinement-criteria.md:52 — defined here
- `New capability` — skills/idea-refine/refinement-criteria.md:63 — defined here
- `10x improvement` — skills/idea-refine/refinement-criteria.md:64 — defined here
- `New audience` — skills/idea-refine/refinement-criteria.md:65 — defined here
- `New context` — skills/idea-refine/refinement-criteria.md:66 — defined here
- `Better UX` — skills/idea-refine/refinement-criteria.md:67 — defined here
- `Cheaper` — skills/idea-refine/refinement-criteria.md:68 — defined here
- `Assumption Audit` — skills/idea-refine/refinement-criteria.md:75 — defined here
- `Must Be True (Dealbreakers)` — skills/idea-refine/refinement-criteria.md:79 — defined here
- `Should Be True (Important)` — skills/idea-refine/refinement-criteria.md:84 — defined here
- `Might Be True (Nice to Have)` — skills/idea-refine/refinement-criteria.md:89 — defined here
- `Decision Framework` — skills/idea-refine/refinement-criteria.md:94 — defined here
- `Do this first` — skills/idea-refine/refinement-criteria.md:100 — defined here
- `Worth the risk` — skills/idea-refine/refinement-criteria.md:100 — defined here
- `Only if trivial` — skills/idea-refine/refinement-criteria.md:101 — defined here
- `Don't do this` — skills/idea-refine/refinement-criteria.md:101 — defined here
- `MVP Scoping Principles` — skills/idea-refine/refinement-criteria.md:105 — defined here
- `One job, done well` — skills/idea-refine/refinement-criteria.md:109 — defined here
- `The riskiest assumption first` — skills/idea-refine/refinement-criteria.md:110 — defined here
- `Time-box, not feature-list` — skills/idea-refine/refinement-criteria.md:111 — defined here
- `Not Doing list` — skills/idea-refine/refinement-criteria.md:112 — used here

## Structure
- `# Refinement & Evaluation Criteria` (line 1)
- `## Core Evaluation Dimensions` (lines 5-74)
  - `### 1. User Value` (lines 7-26)
  - `### 2. Feasibility` (lines 27-51)
  - `### 3. Differentiation` (lines 52-74)
- `## Assumption Audit` (lines 75-93)
  - `### Must Be True (Dealbreakers)` (lines 79-83)
  - `### Should Be True (Important)` (lines 84-88)
  - `### Might Be True (Nice to Have)` (lines 89-93)
- `## Decision Framework` (lines 94-104)
- `## MVP Scoping Principles` (lines 105-114)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains clear, actionable heuristics such as the differentiation strength hierarchy (New capability > 10x improvement > New audience > New context > Better UX > Cheaper) and Reid Hoffman's classic startup maxim ("If it's not embarrassing, you waited too long").

## Context cost
5,738 bytes (approx. 1,435 tokens).
```
