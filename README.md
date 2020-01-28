# Seconds to time
Input a number of seconds, get back a time formatted like dd:hh:mm:ss


## API
`formatSecondsToTime(seconds [,minSegments = 2, separator = ':'])`

*seconds:Int* – Number of seconds

*minSegments:Int* - Minimum number of time segments to show. E.g. `3` would force it to return hours, minutes, and seconds. `4` would return days, hours, minutes, seconds. Defaults to `2`. 

*separator:String* - What goes between the time segments. Defaults to `':'`

## Examples

`formatSecondsToTime(60*60*24+1)`
Put in 1 day and one second, it returns `"1:00:00:01"`

`formatSecondsToTime(60*60*24-1)`
Put in 1 day minus one second, it returns `"23:59:59"`

`formatSecondsToTime(60*59)`
Put in 59 minutes, it returns `"59:00"`

`formatSecondsToTime(75)` 
Put in seconds, aka 1 minute and 15 seconds, it returns `"1:15"`

`formatSecondsToTime(34)`
Put in 34 seconds, it returns 0:34

`formatSecondsToTime(34, 1)`
Put in 34 seconds, but with a minSegments of 1, it returns `"34"`

`formatSecondsToTime(34, 3)`
Put in 34 seconds, but with a minSegments of 3, it returns `"0:00:34"`

`formatSecondsToTime(34, 3)`
Put in 34 seconds, but with a minSegments of 4, it returns `"0:00:00:34"`

`formatSecondsToTime(34, 3, ';')`
Put in 34 seconds, but with a minSegments of 4, and a separator of ';', it returns `"0;00;00;34"`
