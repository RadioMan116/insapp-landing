// Scroll-to-Top Button
(() => {

	let scrollToTopBtn = document.querySelector("[data-scrollTop]");

	let rootElement = document.documentElement;

	function handleScroll() {
		// Do something on scroll
		let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
		if ((rootElement.scrollTop / scrollTotal) > 0.60) {
			// Show button
			scrollToTopBtn.classList.add("showBtn");
		} else {
			// Hide button
			scrollToTopBtn.classList.remove("showBtn");
		}
	}

	function scrollToTop() {
		// Scroll to top logic
		rootElement.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	scrollToTopBtn.addEventListener("click", scrollToTop);
	document.addEventListener("scroll", handleScroll);
})();

// anchor links

(() => {
	document.querySelectorAll("a").forEach(function (current) {
		if (!current.hash) return;
		if (current.origin + current.pathname != self.location.href) return;
		(function (anchorPoint) {
			if (anchorPoint) {
				current.addEventListener("click", function (e) {
					anchorPoint.scrollIntoView({ behavior: "smooth" });
					e.preventDefault();
				}, false);
			}
		})(document.querySelector(current.hash));
	});
})();


// Mobile menu

(() => {
	let mql = window.matchMedia("(max-width: 991px)").matches;
	class Menu {
		constructor() {

		}
		render() {

			let menu = `
			<div class="mobile-menu">
				<div class="mobile-menu__button">
					<div class="mobile-menu__button-inner"></div>
				</div>
				<div class="mobile-menu__inner">
					<div class="mobile-menu__header">
						<div class="mobile-menu__logo">
							<img src="img/svg/logo.svg" alt="logo">
						</div>
						<div class="mobile-menu__tel"></div>
					</div>
					<div class="mobile-menu__body">

					</div>
					<div class="mobile-menu__footer"></div>
				</div>
			</div>
			`;

			// document.body.innerHTML = menu;
			document.body.insertAdjacentHTML("beforeend", menu);
			this.append();
		}
		append() {
			// Header
			const header = document.querySelector(".header");
			const headerLinks = header.querySelector(".header__links");
			const headerAnchors = header.querySelector(".header__anchors");
			const headerTel = header.querySelector(".header__tel");
			// footer
			const footerText = document.querySelector(".footer__center").cloneNode(true);
			// mobile-menu
			this.mobileMenu = document.querySelector(".mobile-menu");
			const mobileBody = this.mobileMenu.querySelector(".mobile-menu__body");
			const mobileTel = this.mobileMenu.querySelector(".mobile-menu__tel");
			const mobileFooter = this.mobileMenu.querySelector(".mobile-menu__footer");
			const mobileButton = this.mobileMenu.querySelector(".mobile-menu__button");
			mobileBody.append(headerAnchors);
			mobileBody.append(headerLinks);
			mobileTel.append(headerTel);
			mobileFooter.append(footerText);
			mobileButton.addEventListener("click", this.click);
			const links = this.mobileMenu.querySelectorAll("a[href]");
			links.forEach(el => {
				el.addEventListener("click", () => {

					this.close();
				});
			});

		}
		click = event => {
			const target = event.target;
			if (target.classList.contains("mobile-menu__button")) {
				if (!this.mobileMenu.classList.contains("is-active")) {

					this.open();
				}
				else {

					this.close();
				}

			}
		}
		open() {
			document.body.classList.add("overflow");
			this.mobileMenu.classList.add("is-active");
			document.addEventListener("keydown", this.EscClose);
		}
		close() {
			document.body.classList.remove("overflow");
			this.mobileMenu.classList.remove("is-active");
			document.removeEventListener("keydown", this.EscClose);
		}
		EscClose = event => {
			if (event.code === "Escape") {
				this.close();
			}
		}
	}

	if (mql) {
		const menu = new Menu;
		menu.render();
	}



})();


// Form send

(() => {
	// ...ваш код
	const form = document.querySelector(".application__form form");
	const url = "https://httpbin.org/post";

	// console.log(form)
	form.addEventListener("submit", (event) => {

		event.preventDefault();

		fetch(url, {
			method: "POST",
			body: new FormData(form)
		}).then(
			response =>{
				window.location.reload(true)
				return response.json()
			}

		).then(
			commits => console.log(commits),
		);

	});
})();
