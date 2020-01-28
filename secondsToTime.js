
let formatSecondsToTime = function (s, minSegments = 2, separator = ':') {
	let m = 0
	let h = 0
	let d = 0
	s = Math.floor(s)

	while (s >= 60) {
		s -= 60
		m++
	}
	while (m >= 60) {
		m -= 60
		h++
	}
	while (h >= 24) {
		h -= 24
		d++
	}

	let tt = [d, h, m, s]
	tt = tt.map(seg => String(seg).padStart(2, '0'))
	while (tt[0] === '00' && tt.length > minSegments) tt.shift()
	
	return tt.join(separator)
}

// console.log( formatSecondsToTime(60*60*24+1) ) 	// 1 day and one second, outputs 1:00:00:01
// console.log( formatSecondsToTime(60*60*24-1) ) 	// 1 day minus one second, outputs 23:59:59 
// console.log( formatSecondsToTime(60*59) ) 		// 59 minutes, outputs 59:00
// console.log( formatSecondsToTime(75) ) 			// 75 seconds, aka 1 minute and 15 seconds, outputs 1:15 
// console.log( formatSecondsToTime(34) ) 			// 34 seconds, outputs 0:34
// console.log( formatSecondsToTime(34, 1) ) 		// 34 seconds, but with a minSegments of 1, outputs 34
// console.log( formatSecondsToTime(34, 3) ) 		// 34 seconds, but with a minSegments of 3, outputs 0:00:34
// console.log( formatSecondsToTime(34, 3) ) 		// 34 seconds, but with a minSegments of 4, outputs 0:00:00:34
// console.log( formatSecondsToTime(34, 3, ';') ) 	// 34 seconds, but with a minSegments of 4, and a separator of ';', outputs 0;00;00;34
