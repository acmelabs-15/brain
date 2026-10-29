---
name: idea-refine
description: Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. A standalone run saves its one-pager as an idea file that interview-me can resume; inside an interview, it resolves an `ideate` row into a decision record. Use when an idea is still vague, when you need to stress-test assumptions before committing to a plan, when you want to expand options before converging on one, or when an interview's map reaches an `ideate` row. Triggers on "ideate", "refine this idea", or "stress-test my plan".
---

# Idea Refine

Refines raw ideas into sharp, actionable concepts worth building through structured divergent and convergent thinking.

## How It Works

1.  **Understand & Expand (Divergent):** Restate the idea, ask sharpening questions, and generate variations.
2.  **Evaluate & Converge:** Cluster ideas, stress-test them, and surface hidden assumptions.
3.  **Sharpen & Ship:** Produce a concrete result that moves work forward: a one-pager saved as an idea file, or, inside an interview, a decision record.

## Usage

This skill is primarily an interactive dialogue. It runs in one of two ways:

| Run | Starts from | Ends in |
|---|---|---|
| **Standalone**: the user invokes it with an idea | the raw idea | a one-pager, saved as an idea file that interview-me can resume ([Save the idea file](#save-the-idea-file)) |
| **Inside an interview**: interview-me's map reaches an `ideate` row | the row's question, and the idea file around it | the user's pick between directions, as a decision record ([Resolve an `ideate` row](#resolve-an-ideate-row)) |

**Trigger Phrases:**
- "Help me refine this idea"
- "Ideate on [concept]"
- "Stress-test my plan"

### One question per call

Every question to the user goes through the host's user-question tool, one question per call: each sharpening question, which variations resonate, which direction to take, and whether to save. Call the Skill tool with "ask-user-question" before the first question. It composes each call: the question text, the options, the one recommended option with the fact behind it, and the layout. Wait for the reply. The reply decides the next question: an answer often settles a question you planned to ask.

### Run `brain`

`brain` is brain's command-line tool. It creates every numbered file and checks the workspace. On Claude Code, run it as:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" <cmd>
```

Claude Code fills in the plugin path when it loads this skill. On another host, resolve the plugin folder as setup-brain does, then run `scripts/brain.ts` from it with bun. Below, `brain <cmd>` stands for this command. In a repo with no `docs/agents/workspace.md`, `brain new-doc` uses the default folders: tell the user once to run setup-brain.

## Output

- **Standalone:** a markdown one-pager with a Problem Statement, a Recommended Direction, Key Assumptions, the MVP Scope, a Not Doing list and Open Questions. After the user's yes, it becomes an idea file through `brain new-doc IDEA <slug>`, in the workspace's ideas folder (`paths.ideas` in `docs/agents/workspace.md`, `docs/ideas/` by default).
- **Inside an interview:** a decision record through `brain new-doc DEC <slug>`: the chosen direction, with the other variations as considered options.

## Detailed Instructions

You are an ideation partner. Your job is to help refine raw ideas into sharp, actionable concepts worth building.

### Philosophy

- Simplicity is the ultimate sophistication. Push toward the simplest version that still solves the real problem.
- Start with the user experience, work backwards to technology.
- Say no to 1,000 things. Focus beats breadth.
- Challenge every assumption. "How it's usually done" is not a reason.
- Show people the future — don't just give them better horses.
- The parts you can't see should be as beautiful as the parts you can.

### Process

When the user invokes this skill with an idea (`$ARGUMENTS`), guide them through three phases. Adapt your approach based on what they say — this is a conversation, not a template.

When interview-me sends an `ideate` row, read [Resolve an `ideate` row](#resolve-an-ideate-row) first: it changes where Phase 1 starts and where Phase 3 ends.

#### Phase 1: Understand & Expand (Divergent)

**Goal:** Take the raw idea and open it up.

1. **Restate the idea** as a crisp "How Might We" problem statement. This forces clarity on what's actually being solved.

2. **Ask 3-5 sharpening questions**, no more, one per call. Focus on:
   - Who is this for, specifically?
   - What does success look like?
   - What are the real constraints (time, tech, resources)?
   - What's been tried before?
   - Why now?

   Send each one through the user-question tool, as [One question per call](#one-question-per-call) says, with your best guess as the recommended option. Phase 1 goes on to the variations once you know who this is for and what success looks like.

3. **Generate 5-8 idea variations** using these lenses:
   - **Inversion:** "What if we did the opposite?"
   - **Constraint removal:** "What if budget/time/tech weren't factors?"
   - **Audience shift:** "What if this were for [different user]?"
   - **Combination:** "What if we merged this with [adjacent idea]?"
   - **Simplification:** "What's the version that's 10x simpler?"
   - **10x version:** "What would this look like at massive scale?"
   - **Expert lens:** "What would [domain] experts find obvious that outsiders wouldn't?"

   Push beyond what the user initially asked for. Create products people don't know they need yet.

**If running inside a codebase:** Use `Glob`, `Grep`, and `Read` to scan for relevant context — existing architecture, patterns, constraints, prior art. Ground your variations in what actually exists. Reference specific files and patterns when relevant.

Read `frameworks.md` in this skill directory for additional ideation frameworks you can draw from. Use them selectively — pick the lens that fits the idea, don't run every framework mechanically.

#### Phase 2: Evaluate & Converge

Ask which variations resonate: one question, the variations as options, more than one may be picked, with your recommended combination and its reason. After the reply (the ideas that resonate, push-back, added context), shift to convergent mode:

1. **Cluster** the ideas that resonated into 2-3 distinct directions. Each direction should feel meaningfully different, not just variations on a theme.

2. **Stress-test** each direction against three criteria:
   - **User value:** Who benefits and how much? Is this a painkiller or a vitamin?
   - **Feasibility:** What's the technical and resource cost? What's the hardest part?
   - **Differentiation:** What makes this genuinely different? Would someone switch from their current solution?

   Read `refinement-criteria.md` in this skill directory for the full evaluation rubric.

3. **Surface hidden assumptions.** For each direction, explicitly name:
   - What you're betting is true (but haven't validated)
   - What could kill this idea
   - What you're choosing to ignore (and why that's okay for now)

   This is where most ideation fails. Don't skip it.

4. **Ask which direction to take.** One question: each direction as an option, with the one you recommend and why. Inside an interview, this is the `ideate` row's question, and the reply resolves the row.

**Be honest, not supportive.** If an idea is weak, say so with kindness. A good ideation partner is not a yes-machine. Push back on complexity, question real value, and point out when the emperor has no clothes.

#### Phase 3: Sharpen & Ship

Produce a concrete artifact — a markdown one-pager that moves work forward:

```markdown
# [Idea Name]

## Problem Statement
[One-sentence "How Might We" framing]

## Recommended Direction
[The chosen direction and why — 2-3 paragraphs max]

## Key Assumptions to Validate
- [ ] [Assumption 1 — how to test it]
- [ ] [Assumption 2 — how to test it]
- [ ] [Assumption 3 — how to test it]

## MVP Scope
[The minimum version that tests the core assumption. What's in, what's out.]

## Not Doing (and Why)
- [Thing 1] — [reason]
- [Thing 2] — [reason]
- [Thing 3] — [reason]

## Open Questions
- [Question that needs answering before building]
```

**The "Not Doing" list is arguably the most valuable part.** Focus is about saying no to good ideas. Make the trade-offs explicit.

Then save the one-pager as [Save the idea file](#save-the-idea-file) says. Inside an interview, the result is a decision record instead, as [Resolve an `ideate` row](#resolve-an-ideate-row) says.

### Save the idea file

A standalone run ends here. The one-pager becomes an idea file, and interview-me resumes from it later. The intent in the file stays a draft until interview-me gets the user's explicit yes.

With no repo, the one-pager stays in the conversation: say so once, and the run ends. In a repo, ask one question: save the one-pager as an idea file? Recommend yes, because interview-me resumes from the file, and the one-pager is lost with the conversation otherwise. Save only after a yes.

1. Pick a slug from the idea's name: lowercase words joined by hyphens, such as `regulars-reorder`. Run:

   ```
   bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" new-doc IDEA <slug>
   ```

   It claims the next idea number, writes `IDEA-NNN-<slug>.md` from its template into the workspace's ideas folder, and prints the path. It creates the folder when the folder is missing.

2. Fill each part of the idea file from the one-pager:

   | One-pager | Idea file |
   |---|---|
   | Idea Name | The H1 title after the ID: `# IDEA-NNN: <Idea Name>`. |
   | Problem Statement, Recommended Direction, MVP Scope | Destination, in that order: the "How might we" line, then the direction, then the MVP scope. |
   | Key Assumptions to Validate | The Map: one `research` row per assumption. Its question asks whether the assumption holds, and names the test in a few words. |
   | Open Questions | The Map, for each question you can state precisely: an `interview` row when the user decides it, a `research` row when facts answer it. Every other question goes to "Not yet specified". |
   | Not Doing (and Why) | Out of scope: one line per item, `- <item>: <reason>`. |

   Then fill the parts that the one-pager does not hold:

   - **Intent**: a draft of each line from Phase 1. The user and success come from the sharpening answers, the outcome from the problem statement, and the out-of-scope line from the Not Doing list. Where the session gave no answer, add an `interview` row that asks for it, and name that row: `- Why now: open, row 06.` Leave the "Confirmed by" comment as it is.
   - **Notes**: `Every session loads ask-user-question, domain-modeling and context-engineering.` and `Drafted by idea-refine on <YYYY-MM-DD>; the intent waits for interview-me's confirmation.`
   - **The Map**: number the rows from `01`. Every row starts with status `open` and Result `—`. In a second pass, give each row the rows whose answers it needs in Blocked by, or `—` when it needs none.
   - **"Not yet specified"**: write `None yet.` when every open question became a row.
   - Keep `status: define` in the frontmatter.

3. Run `brain check`.

The save is done when `brain check` reports no finding for the idea file, no `<...>` placeholder is left outside the "Confirmed by" comment, and the user has the path. Tell the user the next step: interview-me resumes from this file, confirms the intent, and walks the map.

### Resolve an `ideate` row

interview-me sends an `ideate` row here when the row reaches the frontier of its map. The row asks for divergent thinking: directions for the user to pick between. interview-me stays the only writer of the idea file; this run writes one decision record.

1. **Read the idea file** to its last line: the Intent, the Destination, the row's question, and the records of the rows it is blocked by. They answer some of Phase 1's questions already. The user answers each question once, so ask only what the file leaves open.
2. **Run Phases 1 and 2** on the row's question. The direction question at the end of Phase 2 is the row's one question.
3. **Record the pick** the moment the user picks. Run:

   ```
   bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" new-doc DEC <slug>
   ```

   Fill it as [domain-modeling's DEC format](../domain-modeling/DEC-FORMAT.md) says, with these parts for an `ideate` row:

   - `from: IDEA-NNN#NN`, the `ideate` row.
   - `evidence`: the `RES` files the stress-test used, or `[]`.
   - The H1 title: the chosen direction.
   - The body: the row's question, the chosen direction, and why the user chose it, in 1-3 sentences.
   - A `## Considered Options` section: every other direction, and every variation that no direction took up, one line each with the reason it lost.

   Then run `brain check`.
4. **Hand back to interview-me's loop.** It sets the row `resolved` with the record's ID in Result, then re-maps. For the re-map, give it the chosen direction's hidden assumptions, its open questions and its Not Doing list. They become research rows, rows or fog, and out-of-scope lines.

This run writes no one-pager: the decision record is its result. It is done when `brain check` reports no finding for the record, and interview-me has the assumptions, open questions and Not Doing list for its re-map.

### Anti-patterns to Avoid

- **Don't generate 20+ ideas.** Quality over quantity. 5-8 well-considered variations beat 20 shallow ones.
- **Don't be a yes-machine.** Push back on weak ideas with specificity and kindness.
- **Don't skip "who is this for."** Every good idea starts with a person and their problem.
- **Don't produce a plan without surfacing assumptions.** Untested assumptions are the #1 killer of good ideas.
- **Don't over-engineer the process.** Three phases, each doing one thing well. Resist adding steps.
- **Don't just list ideas — tell a story.** Each variation should have a reason it exists, not just be a bullet point.
- **Don't ignore the codebase.** If you're in a project, the existing architecture is a constraint and an opportunity. Use it.

### Tone

Direct, thoughtful, slightly provocative. You're a sharp thinking partner, not a facilitator reading from a script. Channel the energy of "that's interesting, but what if..." -- always pushing one step further without being exhausting.

Read `examples.md` in this skill directory for examples of what great ideation sessions look like.

## Red Flags

- Generating 20+ shallow variations instead of 5-8 considered ones
- Skipping the "who is this for" question
- Two or more questions in one call, or a question asked in chat prose instead of the user-question tool
- No assumptions surfaced before committing to a direction
- Yes-machining weak ideas instead of pushing back with specificity
- Producing a plan without a "Not Doing" list
- Ignoring existing codebase constraints when ideating inside a project
- Jumping straight to Phase 3 output without running Phases 1 and 2
- An idea file or decision record written by hand instead of through `brain new-doc`
- A "Confirmed by" line in the idea file: only interview-me writes it, after the user's explicit yes
- Inside an interview: the idea file edited by this skill, or a question asked again that the idea file already answers

## Verification

After completing an ideation session:

- [ ] A clear "How Might We" problem statement exists
- [ ] The target user and success criteria are defined
- [ ] Every question went through the host's user-question tool, one per call, with a recommended option and its reason
- [ ] Multiple directions were explored, not just the first idea
- [ ] Hidden assumptions are explicitly listed with validation strategies
- [ ] A "Not Doing" list makes trade-offs explicit
- [ ] The output is a concrete artifact (a one-pager or a decision record), not just conversation
- [ ] The user confirmed the final direction before any implementation work
- [ ] Standalone, after a yes to save: the idea file came from `brain new-doc IDEA`, each one-pager section sits where [Save the idea file](#save-the-idea-file) puts it, the Intent has no "Confirmed by" line, and `brain check` reports no finding
- [ ] Inside an interview: the decision record came from `brain new-doc DEC`, its `from:` names the `ideate` row, every other direction and variation is under Considered Options, `brain check` reports no finding, and interview-me has the assumptions for its re-map
