# Chef Showdown game rules (extracted)

The authoritative rules are stored in [`data/game-settings.json`](../data/game-settings.json), extracted from the original client's `__loading__.js` at build `chef:production:4.2.7:ec7ccd5461`.

The private server reads these values directly, so the original stages, prices, blueprints, waves and timings can be tuned without touching game code.

## Match types

| Type | Players per team | Time limit | Lives |
|---|---|---|---|
| `classic` | 1–4 | 99 s | — |
| `duel` | 1–4 (normally 1v1) | 99 s | — |
| `pve` (Score Attack) | 1–10 | endless | 3 |

## Stages

The shipped lobby picker exposes the four released versus kitchens and the
six released Score Attack kitchens. Those are the stages players see in the
original picker. Duel uses the same four versus kitchens.

Released versus (classic/duel):

- Burger Diner (`burgerTime`)
- Happy Hour (`happyHour`)
- Sushi Street (`sushiMode`)
- Waffle Lodge / Hut Chocolate (`winterMode`)

Bonus/archived kitchens (playable if selected in the web room; no original
picker art or gold-pass tiles exist for them):

- Breakfast Club (`breakfastClub`)
- Potion Party (`potionParty`)
- Winter Wiener (`wurstNightmare`)
- Lunar New Year (`lunarNewYear`)
- Ice Cream Parlour (`iceCreamParlour`)
- Dosa Dash (`dosaDash`)
- Double Diner (`doubleDiner`)
- King of the Grill (`kingOfTheGrill`)
- Taco Stage (`tacoTime`)

Score Attack:

- Burger Time (`burgerTimeScoreAttack`)
- Happy Hour (`happyHourScoreAttack`)
- Sushi (`sushiModeScoreAttack`)
- Hut Chocolate (`winterModeScoreAttack`)
- Burger Time Extreme (`burgerTimeScoreAttackExtreme`)
- Hut Chocolate Extreme (`winterModeScoreAttackExtreme`)

## Order rules

Each stage defines:

- `salePrices` — base cash per ingredient
- `tips.high/mid/low` — tip values by customer mood
- `blueprints` — named lists of ingredient combinations (`tinyOrder`, `easyOrder`, `moneybag_order`, etc.)
- `waves.default` — classic/duel script of delays, new slots, orders and repeat points
- `waves` + `run` — Score Attack wave pool selected round by round
- `customerSlots` — number of customer positions
- `timeReductionOnLoop` — Score Attack patience reduction applied per wave loop
- `timeExtensionBonus` — original per-order timing bonus retained in the data

The server:

1. Runs the original wave script for each team.
2. Spawns orders with patience (`time`) and blueprint ingredients.
3. Tracks remaining ingredients (`pendingItems`).
4. Validates each served item and rejects ingredients the order does not want.
5. Completes an order when all remaining ingredients are served.
6. Awards cash, tips and 1–3 stars based on remaining patience.
7. Applies moneybag multipliers, wildcard customers and patient customers.
8. Expires orders at the end of patience.
9. In duel, the first team to finish an order steals the mirror order from the other team.
10. In PvE, an expired order costs one of three lives.

## Scoring

```text
base  = sum(salePrices[item] * quantity)
tips  = tip table value for the remaining-patience star band
stars = 3 if >66% patience left, 2 if >33%, otherwise 1
cash  = base * moneybagMultiplier + cashBonus
team  = cash + tips
```

Per-player statistics (`cashAwarded`, `tipsAwarded`, `itemsServed`, `ordersCompleted`) are sent to the client in `UpdateScores` and used by the original scorebar/HUD.

## Game over

- **Classic/duel**: after 99 seconds, highest cash wins; stars break a cash tie.
- **Co-op/classic**: same timer, one team.
- **PvE**: ends when all three lives are lost; the score is the team's cash.

The server sends the full `GameOver` payload with scores, winner, rewards and updated user info, then signals the lobby to enter its PostMatch state.
