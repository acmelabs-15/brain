---
name: interview-me
description: Interviews the user one decision per call through the host's user-question tool, in design-tree order, until no decision is open and the user confirms the restate. Facts go to sub-agents, decisions to the user. Use when an ask lacks who, why, success or constraint, when the user says "interview me", "grill me", "are we sure?" or "stress-test my thinking", or before guessing a requirement.
---

# Interview Me

## Overview

What people ask for and what they want are different things. They ask for "a dashboard" because that is what one asks for, not because a dashboard solves their problem. They say "make it faster" without a number to hit.

The cheapest moment to find this gap is before any plan, spec or code exists. Once building starts, switching costs are real. The user rationalises the wrong thing into a "good enough" thing, and the misfit gets locked in.

This skill closes the gap before it costs anything. The other Define-phase skills assume you already know roughly what you want: idea-refine generates variations from an idea, spec-driven-development writes the requirements down, doubt-driven-development stress-tests a plan after you draft one. Interview-me comes before all of those. You map the ask as a design tree, ask one decision at a time with a recommendation attached, and stop when no decision is left open and the user confirms the restate.

## When to Use

Apply this skill when:

- The ask is missing at least one of: **who** the user is, **why** they want it, what **success** looks like, what the binding **constraint** is
- The request is conventional rather than specific ("build me X", "make it faster") and you cannot unpack the convention without guessing
- You are tempted to start with assumptions you have not surfaced
- The user has not said which value they optimise for when two reasonable ones are in tension (simplicity against flexibility, cost against speed)
- The user explicitly invokes: "interview me", "grill me", "before we start, are we sure?", "stress-test my thinking"

**When NOT to use:**

- The ask is unambiguous and self-contained ("rename this variable", "fix this typo")
- The user has explicitly asked for speed over verification
- Pure information requests ("how does X work?", "what does this code do?")
- Mechanical operations (renames, formats, file moves)
- Every decision in the tree is already settled and you can write the restate in Step 6 now

## Loading Constraints

This skill needs a live, responsive user. **Do not invoke in non-interactive contexts** such as CI pipelines, scheduled runs, `/loop` or an autonomous loop. If you are in one of those and the ask is underspecified, state the gap as a blocker for the user instead of guessing.

## The Process

### Step 1: Hypothesise and draw the design tree

Before asking anything, write your best read of what the user wants in **one sentence**, plus what is still missing:

```
HYPOTHESIS: You want a way to answer "how are we doing?" in standup, and "dashboard" was the convention that came to mind.
MISSING: who it is for, what "metrics" means here, what success looks like.
```

Then map the ask as a **design tree**. Every decision branches into the decisions that hang off it. "Who is it for" comes before "what does it show". "What does it show" comes before "how often does it refresh". Keep the tree in your working notes and keep it current.

The **frontier** is every decision whose prerequisites are settled: the questions you can ask now without guessing at answers you have not heard. A decision whose parent is still open is not on the frontier. The first frontier usually holds the four coverage questions: who the user is, why now, what success looks like, and what the binding constraint is.

### Step 2: Sort the frontier into facts and decisions

Facts are your job, never the user's. A fact is anything the codebase, the docs or a tool can answer: which framework the repo uses, whether a list of experiments already exists, what the current latency is. Dispatch a sub-agent to find it and keep interviewing. A running lookup is an unsettled prerequisite: the questions downstream of it wait for the report, the rest of the frontier goes out now. A question the user could answer only by opening a file is a fact you should have fetched.

Decisions are the user's. A decision is a fork where two paths are defensible, the choice changes what gets built, and reading more will not settle it. Each one becomes a question.

Small reversible choices stay with you. If a choice is cheap to undo and does not change what gets built (a file name, a default sort order, the order of two independent steps), decide it, state it with the reason in one line, and move on. The user can overturn it at any time.

### Step 3: Ask one decision per call, with a recommendation

Take the next frontier question. When several are open, pick the one with the most decisions hanging off it. Call the Skill tool with "ask-user-question" and let it compose the call to the host's user-question tool: the question text, the options, the one recommended option with the fact behind it, and the layout. One question per call. Wait for the reply. No question in chat prose, no batch.

Your hypothesis for the answer is the recommended option, with the reasoning that produced it. The user reacts faster to a wrong guess than they generate an answer from scratch. The recommendation commits you to a hypothesis you can be visibly wrong about, which keeps you honest. It surfaces your assumptions, which is what the interview exists to expose. The risk is a polite user picking your recommendation to be agreeable. Be visibly willing to be wrong, and now and then recommend the direction you expect them to push back on.

Domain words come from `CONTEXT.md`, read through `docs/agents/domain.md`. A question names a concept with the glossary's term. A concept the glossary lacks is a gap to note for the domain-modeling skill.

Why one per call, not a batch: the user cannot react to your hypotheses if you bury them in a list. Batches invite skim-reading and surface answers. The third question often depends on the answer to the first, and asking them together locks in the wrong framing. The user's energy for careful thought is finite; spend it one question at a time.

### Step 4: Read the reply, recompute the frontier, record what settled

Read the whole reply. Free text is not rejection. A reply can carry a condition, a correction and a side topic at once. A partial answer settles the part it covers; ask the gap next. "Whatever you think is best" is delegation, not a decision: re-ask with two concrete options as a choice.

Each answer reshapes the tree. A settled decision pushes the frontier outward and unblocks the questions that depended on it. A correction can prune a branch or add one. Recompute the frontier, then return to Step 3 for the next question.

When a repo is present, keep a paper trail as you go. Call the Skill tool with "domain-modeling" after an answer that sharpens a term or resolves a decision: it writes the term to `CONTEXT.md` and the decision to an ADR at the moment they crystallise. Without a repo the interview is stateless, and the restate in Step 6 is the only record.

### Step 5: Listen for "want" versus "should want"

The most dangerous answers are the ones where the user says what a thoughtful answer *sounds like* rather than what they want. Watch for:

- Answers that pattern-match best-practice talk ("I want it to be scalable", "clean architecture") without specifics
- Answers that defer to convention ("the way most apps do it", "the standard approach")
- Phrases like "I should probably...", "I think I'm supposed to...", "good engineering practice says..."
- Buzzwords as goals, when "modern", "scalable" or "robust" is the answer instead of a specific outcome

When you hear these, the next question is:

> *"If you didn't have to justify this to anyone, what would you actually want?"*

Ask it through the same tool. The recommended option is your read of what they would pick without an audience. That single question often does more work than the previous five.

### Step 6: Restate intent in the user's own words

When the frontier is empty, write back what you now think the user wants. Keep it tight (5 to 8 lines), use their language, and structure it so the user can confirm or correct line by line. Put the restate inside one user-question call with the options "yes" and "refine". Everything the user needs to decide sits inside that call.

```
Here is what I now think you want:

- Outcome:      <one line>
- User:         <one line: who benefits>
- Why now:      <one line: what changed>
- Success:      <one line: how we know it worked>
- Constraint:   <one line: the binding limit>
- Out of scope: <one line: what we are explicitly not doing>
```

Including "Out of scope" is non-negotiable. Half of misalignment is silent disagreement about what is *not* being built.

### Step 7: Confirm with an explicit yes

The gate is explicit written approval of the restate. Any clear yes counts: "yes", "approved", "that's it", "go ahead with that". Do not re-ask because the words differ from a list.

A hedged reply is not yes, and it is asked about once. "Sounds good", "sure, let's go" and "I guess" get one follow-up: "Anything you would refine?" The reply to that follow-up decides. Do not ask a third time about the same restate.

Silence is not consent. There is no "correct me now or I proceed": the interview waits for a reply and chooses nothing on the user's behalf. If the user goes quiet and then says "okay, let's start", they have given up on the interview, not converged. Stop and ask whether you missed something.

If they correct you, fold the correction in, recompute the frontier (a correction can reopen it) and restate. Loop until the frontier is empty and the yes is explicit.

### The stop condition

You are done when both hold:

1. The frontier is empty: every branch of the design tree is visited, and nothing is left silently assumed.
2. The user gave an explicit yes to the restate.

Neither alone is enough. An empty frontier without a yes is your model, not a shared one. A yes to a restate with open branches is a yes to a guess.

The stop has a floor. If you have gone several rounds and the frontier is not shrinking, that is information about the ask, not a reason to keep grinding. Step back and say so: "I have asked X questions and the tree keeps growing. Something foundational is missing. Want to step back?"

## Output

The output of this skill is a **confirmed statement of intent**: the restate from Step 6 with the explicit yes from Step 7. That is the deliverable. Specs, plans and task lists are downstream; they consume the intent this skill produces.

When a repo is present, the terms and decisions already sit in `CONTEXT.md` and `docs/adr/` from Step 4. If the user wants the intent itself to persist (a multi-session project, a handoff to another collaborator), offer to save it to `docs/intent/<topic>.md`. Save only if they confirm.

## Example

A short before-and-after.

**Without interview-me:**

```
User:  build me a dashboard for our metrics
Agent: <starts proposing chart libraries and layouts>
```

The agent has assumed who it is for, what metrics, what "our" means, and what success looks like. None of these are stated. Every assumption is a place the user can later say "that is not what I meant."

**With interview-me:**

```
User: build me a dashboard for our metrics

Agent (working notes):
HYPOTHESIS: You want a way to answer "how are we doing?" in standup, and "dashboard" is the conventional answer.
TREE: who asks -> what "metrics" means -> where the data lives (fact) -> what done looks like
FRONTIER: who asks. Sub-agent dispatched: which metrics the repo already exports.

Agent (user-question tool, one call):
  Question:    When you say "how are we doing?", who is asking?
  Options:     You alone / The engineering team in standup / Up the chain (manager, exec, board)
  Recommended: The engineering team in standup, because "we" usually scopes that way and standups are where this question gets asked. For execs the metrics and the framing change a lot.

User: It's actually for me. I keep losing track of which experiments are running and what their early signal looks like.

Agent (working notes):
Updated read: not a team dashboard. A personal experiment tracker. Tree pruned: the standup branch is gone.
New frontier: is the gap the list or the results?

Agent (user-question tool, one call):
  Question:    Is the gap that you do not know which experiments exist, or that you cannot see their results in one place?
  Options:     No list exists / The list exists, the results are scattered
  Recommended: The second, because the sub-agent found no experiment registry in the repo but did find three result exporters.

User: First one actually. I literally don't have a list. They're spread across different docs.

Agent: <calls domain-modeling to record "experiment" as a glossary term, recomputes the frontier, continues>
```

Two questions in, the agent has found the ask is not "a dashboard". It is "a list". Different artifact, different scope, different work. The dashboard would have been wrong.

## Interaction with Other Skills

- **ask-user-question**: composes every question this skill asks. Interview-me decides which decision to ask and when; ask-user-question decides how the call reads.
- **domain-modeling**: runs alongside when a repo is present. It records each sharpened term and each resolved decision as the interview goes.
- **idea-refine**: downstream. If the confirmed intent is "I want X but I do not know how to scope it", hand off to idea-refine to generate variations against the now-explicit intent.
- **spec-driven-development**: downstream. If the confirmed intent is concrete ("X for Y users with Z success criteria"), hand off to spec-driven-development to write it down.
- **prototype**: sideways. When a frontier question needs a runnable answer ("does this state model feel right?", "what should this screen look like?"), hand off to prototype, then bring the answer back as a settled decision.
- **handoff**: when the interview must continue in another session or with another agent, hand off with the current tree, the frontier and the restate draft, so the next session does not re-ask settled decisions.
- **planning-and-task-breakdown**: two hops downstream of this skill (after the spec).
- **doubt-driven-development**: opposite end of the timeline. Interview-me is pre-decision intent extraction; doubt-driven is post-decision artifact review. Both catch divergence, at different moments.
- **source-driven-development**: orthogonal. Interview-me clarifies what the user wants; SDD verifies framework facts. They do not compete.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "The ask is clear enough" | If you cannot write the user's desired outcome in one sentence right now, the ask is not clear. Run Step 1 before deciding. |
| "Asking too many questions wastes their time" | Four to six targeted questions cost minutes. Building the wrong thing costs weeks, and the user bears that cost. |
| "I'll figure it out as I build" | Switching costs after code exists are ten times what they are now. Discovery during implementation is rework. |
| "They said 'whatever you think', so I should decide" | "Whatever you think" is delegation, not decision. Re-ask with two concrete options as a choice. |
| "I'll ask the whole frontier at once to save rounds" | The frontier orders the questions; it does not license a batch. One decision per call, the next one chosen after the answer. |
| "I'll ask the user which framework the repo uses" | That is a fact. A sub-agent fetches it while you ask the next decision. |
| "Every choice is the user's" | A cheap, reversible choice that does not change what gets built stays with you. State it with the reason. |
| "If I attach my recommendation, I'm leading them" | Leading is the point. Reacting is faster than generating from scratch. The risk is sycophancy, not leading; mitigate by being visibly willing to be wrong. |
| "We've talked enough, I get it" | Test it: is the frontier empty? If a branch is unvisited, you are assuming its answer. |
| "The user said 'sounds good', we're done" | A hedged reply gets one follow-up. A clear yes to the concrete restate ends it; the clarity matters, the exact words do not. |
| "I listed my assumptions; silence means they agree" | Silence is not consent. The interview waits for a reply. |

## Red Flags

- Two or more questions in one call, or a question asked in chat prose instead of the user-question tool
- A question without a recommended option and its reason: that is surveying, not committing
- A question whose prerequisite decision is still open: it is not on the frontier yet
- A question the codebase or the docs could answer: a fact sent to the user instead of a sub-agent
- Accepting "whatever you think is best" as a terminal answer
- Asking a third time about the same restate after one clarifying follow-up
- Proceeding on silence, or on "correct me now or I proceed"
- Producing a spec, plan or task list before the user gave an explicit yes to the restate
- Questions framed as "what would be best practice?" instead of "what do you actually want?"
- A sophistication-signalling answer ("scalable", "clean", "modern") accepted without the want-versus-should probe
- Several rounds without the frontier shrinking, and no step back
- A term sharpened or a decision resolved in a repo without a domain-modeling call
- Saving the intent doc before the user confirmed (the doc itself implies a yes the user did not give)
- Skipping the "Out of scope" line in the restate

## Verification

After applying interview-me:

- [ ] A one-sentence hypothesis and a design tree were written before the first question
- [ ] Every question went through the host's user-question tool, one per call, composed with ask-user-question
- [ ] Every question carried a recommended option with the reason behind it
- [ ] Every fact a question needed went to a sub-agent, not to the user
- [ ] Every question was on the frontier when asked: its prerequisites were settled
- [ ] The want-versus-should probe ran on each convention-signalling answer
- [ ] In a repo, domain-modeling was called after each sharpened term or resolved decision
- [ ] Small reversible choices the agent took were stated with their reason
- [ ] The restate (Outcome / User / Why now / Success / Constraint / Out of scope) went to the user inside one question call
- [ ] The frontier was empty at the restate
- [ ] The user gave an explicit yes to the restate; a hedged reply got one follow-up, silence got none
- [ ] Handoffs (idea-refine, spec-driven-development, prototype, handoff) were framed in the confirmed intent, not the original ask
