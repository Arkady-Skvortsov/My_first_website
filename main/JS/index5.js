let polosa_1 = document.querySelector('.b1');
    	let polosa_2 = document.querySelector('.b2');
    	let polosa_3 = document.querySelector('.b3');
		let LOGO = document.querySelector('.logotype');
	    let menu = document.querySelector('.menu');
    	let elemen = document.querySelectorAll('.elements');
    	let One_punkt = document.querySelector('.punkt');
    	let strela_5 = document.querySelector('.strelochka_5');
    	let get_block = document.querySelectorAll('.Get_b');

    	window.addEventListener('scroll', function() {
           let H_height = document.body.scrollTop || document.documentElement.scrollTop;

           if(H_height > 4200) strela_5.classList.add('Show5');

           else {
           	  strela_5.classList.remove('Show5');
           }
    	});

    	menu.addEventListener('click', function() {
           polosa_1.classList.toggle('rot_1');
           polosa_2.classList.toggle('rot_2');
           polosa_3.classList.toggle('rot_3');

           One_punkt.classList.toggle('show');
    	});

    	elemen.forEach(function(elm) {
    	   let F = elm.children[0];
    	   let S = elm.children[1];

           elm.addEventListener('mouseover', function(event) {
              if(event.target.parentElement.classList.contains('elements')) {
                 F.style.display = 'block';
                 S.style.marginLeft = '130px';
                 S.style.opacity = '.7';
              }
           });

           elm.addEventListener('mouseout', function() {
              F.style.display = 'none';
              S.style.marginLeft = '80px';
              S.style.opacity = '1'; 
           });
    	});

		LOGO.addEventListener('click', function() {
			window.location.href = './index.html';
		});

		strela_5.addEventListener('click', function() {
			let max = Math.max(document.body.scrollTop || document.documentElement.scrollTop);

			if(max > 0) window.scrollBy(0, -8800);
		});

		get_block.forEach(function(get) {
           let g_children = get.children[0];
           let alt_children = get.children[0].alt;
           let copy_g = g_children.cloneNode(true);

           get.addEventListener('click', function() {
           	  if(g_children) {
           	  	 let Main_w = document.createElement('div');
           	  	 let M_block = document.createElement('div');
           	  	 let alt_b = document.createElement('div');
           	  	 let btn_close = document.createElement('div');
           	  	 let Circle = document.createElement('i');
           	  	 let alt_span = document.createElement('span');

           	  	 Main_w.className = 'Main_w';
           	  	 M_block.className = 'M_block';
           	  	 alt_b.className = 'alt_b';
           	  	 btn_close.className = 'btn_close';
           	  	 Circle.className = 'fas fa-times Circle';
           	  	 alt_span.className = 'alt_span';

           	  	 document.body.appendChild(Main_w);
           	  	 Main_w.appendChild(M_block);
           	  	 M_block.appendChild(alt_b);
           	  	 alt_b.appendChild(alt_span);
           	  	 M_block.appendChild(copy_g);
           	  	 Main_w.appendChild(btn_close);
           	  	 btn_close.appendChild(Circle);

           	  	 alt_span.textContent = alt_children;

                 Circle.addEventListener('click', function() {
                    Main_w.style.display = 'none';
                 });
           	  }
           });
		});