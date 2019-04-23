export function intervalometer(cb, request, cancel, requestParameter) {
	let requestId;
	let previousLoopTime;
	function loop(now) {
		// Must be requested before cb() because that might call .stop()
		requestId = request(loop, requestParameter);

		// Called with "ms since last call". 0 on start()
		cb(now - (previousLoopTime || now));

		previousLoopTime = now;
	}

	return {
		start() {
			if (!requestId) { // Prevent double starts
				loop(0);
			}
		},
		stop() {
			cancel(requestId);
			requestId = null;
			previousLoopTime = 0;
		}
	};
}

export function frameIntervalometer(cb) {
	return intervalometer(cb, requestAnimationFrame, cancelAnimationFrame);
}

export function timerIntervalometer(cb, delay) {
	return intervalometer(cb, setTimeout, clearTimeout, delay);
}
