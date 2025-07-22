## What Is SassMatch?
**SassMatch** is a web-based dating application that matches users based on their emotional behavior patterns and relational preferences.  
Instead of left-swiping through surface-level bios, users answer 10 curated question-pairs designed to map their:

- Attachment tendencies  
- Coping mechanisms  
- Conflict styles  
- Emotional needs  
- Love languages  
...and more.

These responses are used to calculate **mutual compatibility scores** that actually reflect how safe, understood, and aligned two people might feel together.

---

## Psychological Foundations

SassMatch draws from a blend of:

- **Attachment Theory** (Secure, Anxious, Avoidant subtypes)  
- **Emotion Regulation Strategies** (processing vs suppressing)  
- **Gottman’s Relational Dynamics** (repair attempts, emotional bids)  
- **Reassurance & Intimacy Needs** (based on vulnerability comfort)

Each question targets a **core trait** that impacts long-term relationship success.

---

## Core Matching Traits

Users answer 10 question-pairs based on these traits:

| #  | Trait                                | What It Measures                                  |
|----|--------------------------------------|---------------------------------------------------|
| 1  | Emotional Coping Style               | Fight, flight, freeze, or soothe?  
| 2  | Conflict Resolution                  | Can you argue in a way that leads to repair?
| 3  | Support-Seeking Tendencies           | Do you reach out or retreat when upset?
| 4  | Abandonment Sensitivity              | How do you handle perceived withdrawal?
| 5  | Vulnerability vs Control             | Comfort with emotional rawness
| 6  | Love Language Preferences            | What makes you feel loved regularly?
| 7  | Jealousy & Reassurance               | How you seek stability in insecurity
| 8  | Handling Emotional Distance          | Clingy? Cold? Calm? Communicative?
| 9  | Apology & Accountability             | How you handle hurting or being hurt
| 10 | Misunderstanding Reactions           | Defensive, withdrawn, or curious?

---

## Matching Algorithm

Every user answers:
- **Self-based questions**: "How do *you* react?"
- **Partner-based questions**: "What do you want *your partner* to do?"

This forms two answer arrays per user: `self` and `partner`.

---

### Compatibility Scoring

We calculate:

#### `AisBType` → *How much User A is User B's type*  
`AisBType = match between B's partner preferences and A's self-behavior`

#### `BisAType` → *How much User B is User A's type*  
`BisAType = match between A's partner preferences and B's self-behavior`

Each trait is scored from 0–10 based on difference, with a total score out of 100.

```js
const diff = Math.abs(partnerValue - selfValue);
const score = ((4 - diff) / 4) * 10;

## The Five Coping Styles

These categories are inspired by **attachment theory**, **emotion regulation research**, and lived behavioral patterns observed in real-world relationships.

Each coping style is assigned a **numeric value (1–5)** based on **functional distance** — a measure of how emotionally *compatible or incompatible* these styles are with one another in long-term emotional dynamics.

---

### Our Value Assignment Logic

We position **Secure** in the middle of the spectrum, as it is the most balanced and adaptable.  
**Anxious** styles tend to **hyperactivate** emotional expression and seek closeness.  
**Avoidant** styles tend to **deactivate** emotions and distance themselves.

This forms a directional spectrum of coping:

### Why This Order Matters

| Side | Coping Style           | Behavior Pattern                           | Compatibility Bias     |
|------|------------------------|--------------------------------------------|------------------------|
| 1️⃣  | **Anxious Codependent**| Urgently fixes, over-apologizes, reaches out| Clashes with avoidants |
| 2️⃣  | **Anxious Panicky**    | Emotionally flooded, overwhelmed            | Craves reassurance     |
| 3️⃣  | **Secure**             | Feels, processes, self-soothes, adapts      | Most emotionally flexible |
| 4️⃣  | **Passive Avoidant**   | Disengages mildly, avoids heaviness         | Dislikes drama         |
| 5️⃣  | **Dismissive Avoidant**| Fully shuts down, disconnects emotionally   | Most emotionally closed off |

---

## Final Score Mapping

| Value | Style               | Description                                  |
|-------|---------------------|----------------------------------------------|
| **1** | Anxious Codependent | Needs to *do something*, reach out, fix it   |
| **2** | Anxious Panicky     | Emotionally flooded, spirals alone           |
| **3** | Secure              | Self-regulates calmly, feels without chaos   |
| **4** | Passive Avoidant    | Distracts self, avoids emotional depth       |
| **5** | Dismissive Avoidant | Numbs out, suppresses feelings entirely      |

---
