export function changeLink(searchParams: URLSearchParams) {
	window.history.replaceState(
		{},
		'',
		`${window.location.pathname}?${searchParams}`
	)
}
