/// <reference lib="dom" />

export type CancelCallback = (requestId: number) => void;

interface IntervalometerReturnValue {
	start: VoidFunction;
	stop: VoidFunction;
}

/**
 * @param callback A callback that will be called.
 * @param request A window's requestAnimationFrame or setTimeout.
 * @param cancel A callback that will cancel the given intervalometer. Typically a window's cancelAnimationFrame or clearTimeout.
 * @param millis Time in milliseconds.
 */
export function intervalometer(
	callback: VoidFunction,
	request: typeof requestAnimationFrame | typeof setTimeout,
	cancel: CancelCallback,
	millis?: number
): IntervalometerReturnValue;

/**
 * A time-based intervalometer.
 *
 * @param callback A callback that will be invoked after the given time-frame.
 * @param timeInMillis Time in milliseconds.
 */
export function timerIntervalometer(
	callback: VoidFunction,
	timeInMillis: number
): IntervalometerReturnValue;

/**
 * A frame-based intervalometer. It uses requestAnimationFrame and calls the provided callback at every frame.
 * Ideal for animations.
 *
 * @param callback A callback that will be called on each animation frame.
 */
export function frameIntervalometer(
	callback: VoidFunction
): IntervalometerReturnValue;
