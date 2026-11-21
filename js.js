
		const img = document.querySelector("img")
		const span = document.querySelector("span")
		const btn = document.querySelector("#tidak")
		
	 let klakKlik = 0
	 
		let proses = (a)=>{
			if(a.value == "iya"){
				img.src = "girang.gif"
				btn.style.bottom = "-80px"
				btn.style.right = "20px"
				span.innerText = "uu tayang muach 😍😘"
				if(btn.style.opacity == "0"){
					btn.style.opacity = "1"
					klakKlik = 5
				}
			}else if(a.value == "tidak"){
				klakKlik++
				if(klakKlik > 10){
					btn.style.opacity = "0"
					span.innerText = "😜 aku sembunyiin pokoknya harus Semangat 😭"
				}else{
				span.innerText = "aaa 😭😭😭 Sifan Bodo 😒😒 "
				}
				img.src = "sedih.gif"
				let randomPosisi =  Math.floor(Math.random() * window.screen.width)
				a.style.bottom= randomPosisi * 1.02 + "px"
				a.style.right = randomPosisi / 2 + "px"
			//	alert("hay")
			}
			
		}
		