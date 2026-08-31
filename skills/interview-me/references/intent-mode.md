# Intent mode — from a vague ask to a confirmed intent

## Contents
- Step 1: Hypothesize, with a confidence number
- Step 2: One question at a time, the guess inside the call
- Step 3: Listen for "want vs. should want"
- Step 4: Restate intent in the user's own words
- Step 5: Confirm — explicit yes
- The 95% confidence stop

## Step 1: Hypothesize, with a confidence number

Before asking anything, write down your current best read of what the user wants in **one sentence**, plus an honest confidence number (0–100%):

```
HYPOTHESIS: You want a way to answer "how are we doing?" in standup, and "dashboard" was the convention that came to mind.
CONFIDENCE: ~30% — missing: who it's for, what "metrics" means in context, and what success looks like
```

The number forces honesty. If you wrote a high number but can't predict the user's reactions to the next three questions you'd ask, the number is wrong. When confidence is below ~70%, append the reason on the same line — what's still unresolved — so the user knows exactly what the interview needs to surface.

## Step 2: One question at a time, the guess inside the call

Each question goes through `brain:ask-user-question`: the question text carries what the user needs to decide, and your guess is the recommended option, its reasoning in that option's own description. Wait for the answer before composing the next question.

Why one at a time: the third question usually depends on the first answer, a batch locks in the wrong framing, and the user's careful attention is finite. Why a guess attached: the user reacts faster to a wrong guess than they generate an answer from scratch, and it commits you to a hypothesis you can be visibly wrong about. The risk is a polite user agreeing to be agreeable; mitigate by being visibly willing to be wrong, and occasionally guess in a direction you expect pushback on.

## Step 3: Listen for "want vs. should want"

The dangerous answers are the ones where the user says what a thoughtful answer *sounds like*: best-practice talk without specifics ("scalable", "clean architecture"), deference to convention ("the way most apps do it"), "I should probably…". When you hear these, ask:

> *"If you didn't have to justify this to anyone, what would you actually want?"*

That single question often does more work than the previous five.

## Step 4: Restate intent in the user's own words

When your confidence is high, write back what you now think the user wants — tight (5–8 lines), their language, structured to confirm line by line:

```
Here's what I now think you want:

- Outcome:      <one line>
- User:         <one line — who benefits>
- Why now:      <one line — what changed>
- Success:      <one line — how we know it worked>
- Constraint:   <one line — the binding limit>
- Out of scope: <one line — what we're explicitly not doing>

Yes / no / refine?
```

"Out of scope" is non-negotiable: half of misalignment is silent disagreement about what is *not* being built. Where fog remains, attach the **Not yet specified** list (see SKILL.md's fog-or-ticket test).

## Step 5: Confirm — explicit yes

The gate is an explicit "yes." These are **not** yes: "Whatever you think is best" (delegation — re-ask with two concrete options), "Sounds good" (ambiguous — ask what they'd refine), "Sure, let's go" (often a polite exit — same follow-up), silence then "okay let's start" (the user gave up on the interview — stop and ask what you missed). Fold corrections in and restate until the yes is explicit.

## The 95% confidence stop

You're done when you can answer yes to: *can I predict the user's reaction to the next three questions I would ask?* If several rounds pass and you still can't predict, that's information about the ask — stop and say so: "I've asked X questions and still can't predict your reactions. Something foundational is missing. Want to step back?"

## Mode checks

- [ ] An explicit hypothesis with a confidence number opened the interview (with its reason when below ~70%)
- [ ] At least one "what would you actually want?" probe ran when the user gave a convention-signaling answer
- [ ] The restate carried Outcome / User / Why now / Success / Constraint / Out of scope
- [ ] The user confirmed with an explicit yes
