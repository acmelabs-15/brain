Yes — I'll run this through `diagnosing-bugs`, and the first thing I'm going to do is build a **tight loop** that goes **red** on this bug. Not guess at the cause.

I want to be upfront about why, because the intermittency is the whole problem here. One-in-five means a fix that is completely wrong still has about an 80% chance of looking like it worked on the next load. So a failure rate is a rate to drive to certainty, not a clue about the mechanism — and if I open by telling you what I think is happening, everything I observe afterwards gets read through that guess. I'd rather have a command that fails on demand.

So, Phase 1, in order:

1. Get one command I can run repeatedly that loads the login page and reports pass/fail — headless, no clicking. Fast enough to run in a loop, deterministic in its reporting even though the bug isn't.
2. Drive the failure rate **up**, not just catch one instance. Loop the load, and lean on whatever knobs make the flake more likely — throttled network, cold cache, a fresh session, concurrency. `diagnosing-bugs` treats roughly a coin-flip failure rate as workable and 1% as not; I'm aiming for the workable end before I read a single line of the login code.
3. Only once that loop is red on demand do I start narrowing — capturing the actual undefined object and the stack at the moment it blows up, and bisecting from there.

Things like a fetch resolving after render, an auth/session object arriving late, or a stale cached bundle are all candidates worth **forcing** with the loop — but I'm listing them as levers to pull on the reproduction, not as a ranking of what I think it is. The loop decides.

Two things I need from you:

- **How do I run the app and hit the login page?** Local dev server, a staging URL, something else — and any credentials or seeded account the page needs.
- **Is there anything you can tell me about when it fails?** First load of the day, after a deploy, a particular browser, only when logged out — anything that correlates. Not so I can theorise from it, but because those are the knobs I'll try turning to push the rate up.

If it turns out the environment can't be driven — the page only fails on real production traffic and I can't reproduce it locally — I'll say so and stop rather than quietly falling back to reading the code and reasoning about ordering. That fallback is exactly the failure this phase exists to prevent, and on a bug at this rate it would produce a confident-sounding fix neither of us could verify.

Once the loop is red, the next steps depend on what it shows.
