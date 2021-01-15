import PerfectScrollbar from "perfect-scrollbar";
// Double scroll

(() => {
	let mql = window.matchMedia("(max-width: 767px)").matches;
	if (mql) {

		const wUs = new PerfectScrollbar(".with-us__items", {
			wheelSpeed: 0.7,
			wheelPropagation: true,
			minScrollbarLength: 20,
			// maxScrollbarLength :20,
		});
		const iItems = new PerfectScrollbar(".integrated__items", {
			wheelSpeed: 0.7,
			wheelPropagation: true,
			minScrollbarLength: 20,
			// maxScrollbarLength :20,
		});
	}

})();