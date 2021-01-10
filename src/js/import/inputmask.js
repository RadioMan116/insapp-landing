import Inputmask from "inputmask";
(()=>{
	let initMask = document.querySelectorAll("[type=tel]");
	initMask.forEach((elem)=>{
		Inputmask("+7(999) 999-9999", { clearIncomplete: true }).mask(elem);
	});
})();