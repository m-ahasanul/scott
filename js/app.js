   document.addEventListener("mousemove", parallax);
function parallax(e){
	this.querySelectorAll('.para').forEach(para=>{
		const speed =para.getAttribute('data-speed')

		const x = (window.innerWidth - e.pageX*speed)/100
		const y = (window.innerHeight - e.pageY*speed)/100

		para.style.transform = `translateX(${x}px) translateY(${y}px)`
	})
}
