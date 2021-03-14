# Tennis Calculator

The tennis calculator takes a set of scores as inputs and produces useful statistics based on those scores.
This calculator will use a simplified version of scoring where whoever gets to 6 games first wins the set.

## Overview

The Tennis Calculator accepts attached files and reads them as plain text.
When given inputs in the form of a list of points of a tennis match, the calculator will pull match IDs, name data, and point information.
It then turns this data into a handy table that shows Player names, games, sets, with colouring to show you who the winner is.

## Quick Start Guide
To install the projects dependencies, navigate to the <project directory>/TennisScoreChecker and run
   ```npm install```

To view the project, run
   ```yarn start```

To run the component tests, run 
   ```yarn test```

To run the end-to-end test, run
   ```yarn cypress open```

## Input

The input will have some header lines, and then a list of points. 
For example:, the following would result in 2 games to "Person A":

    Match: 01
    Person A vs Person B
    0
    1
    0
    1
    0
    0
    0
    0
    0
    0

    
The first row is a match id, the second row shows who is playing against whom.
I assume that these files will always have this same layout, with the ```match``` keyword denoting the seperator between games, and that the second line will always use ``` vs ``` to denote the seperator between player one and player two. 
After that are a series of points, where 0 is a point for the first person listed, 1 is for last person.
The app *should* be safe, however we should always expect ```garbage in = garbage out```

i.e.

| Input                | Score   |
|----------------------|---------|
| Match: 01            |         |
| Person A vs Person B |         |
| 0                    | 15 - 0  |
| 1                    | 15 - 15 |
| 0                    | 30 - 15 |
| 1                    | 30 - 30 |
| 0                    | 40 - 30 |
| 0                    | Game    |



## Scoring Rules
Details of tennis scoring can be found online. See here for reference:  
https://en.wikipedia.org/wiki/Tennis_scoring_system

The variation used for this application is a best of 3 sets match, with first to 6 games wins a set. 

Details as follows:
* A tennis match is split up into points, games and sets.
* Winning a game requires a person to win 4 points, but they must be ahead by at least 2 points (deuce, advantage, game)
* The first player to win 6 games wins a set. I.e:
    * Players do NOT need to be ahead by 2 to win a set (6-5 finishes a set) 
    * There is nothing special about that final game in a set. All games are the same.
* Best of 3 sets (first to 2 sets wins).

