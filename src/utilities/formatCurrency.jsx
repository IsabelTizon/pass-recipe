const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
	currency: "GBP",
	style: "currency",
	maximumFractionDigits: 2,
	roundingIncrement: 5,
});

export function formatCurrency(number) {
	return CURRENCY_FORMATTER.format(number);
}
