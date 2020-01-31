let active_b = document.querySelectorAll('.active_b');
    	let Images = document.querySelectorAll('.images');
    	let D_image = document.querySelector('#d_img');
    	let NAME_img = document.querySelector('#name');
    	let REZ = document.querySelectorAll('.rez');
    	let ability_choice = document.querySelector('#choice_card');
    	let Category = document.querySelector('.category_name');
    	let Big_c = document.querySelector('.C');
    	let dead_e = document.querySelector('.Dead_eye');
    	let combat = document.querySelector('.Combat');
    	let recovery = document.querySelector('.Recovery');
    	let defense = document.querySelector('.Defense');
    	let Card = document.querySelector('.CARD');
    	let logo = document.querySelector('.logotype');
    	let polosa_1 = document.querySelector('.b1');
    	let polosa_2 = document.querySelector('.b2');
    	let polosa_3 = document.querySelector('.b3');
    	let menu = document.querySelector('.menu');
    	let elemen = document.querySelectorAll('.elements');
    	let One_punkt = document.querySelector('.punkt');
        let New_IMG = document.querySelectorAll('.new_img');
        let strelochka_5 = document.querySelector('.Strelochka_5');

        window.addEventListener('scroll', function() {
           let Height2 = document.body.scrollTop || document.documentElement.scrollTop;

           if(Height2 > 7400) strelochka_5.classList.add('Pokesh2');

           else {
              strelochka_5.classList.remove('Pokesh2');
           }
        });

    	active_b.forEach(function(ac) {
           let child1 = ac.children[0];
           let ch_alt = ac.children[0].alt;
           let single_b = ac.children[1];
           let t_block = ac.children[1].children[0];

           ac.addEventListener('mouseover', function() {
           	  if(child1) {
                 single_b.classList.add('hid_sh');

                 t_block.textContent = ch_alt;
              } 
           });

           ac.addEventListener('mouseout', function() {
              single_b.classList.remove('hid_sh');
           });
    	});

        strelochka_5.addEventListener('click', function() {
           let Maximum = Math.max(document.body.scrollTop || document.documentElement.scrollTop);

           if(Maximum > 0) window.scrollBy(0, -14500);
        });

        New_IMG.forEach(function(N_img) {
           let N_child = N_img.children[0];
           let T_child = N_img.children[0].alt;

           N_child.addEventListener('click', function() {
              if(N_child) {
                let copy_Child = N_child.cloneNode(true);

                let S_window = document.createElement('div');
                let N_border = document.createElement('div');
                let Name_of_img = document.createElement('span');
                let button_ = document.createElement('div');
                let x = document.createElement('i');
                let name_B = document.createElement('div');

                S_window.className = 'S_window';
                N_border.className = 'N_border';
                button_.className = 'button_';
                x.className = 'fas fa-times X';
                name_B.className = 'name_B';
                Name_of_img.className = 'Name_of_img';
               
                document.body.appendChild(S_window);
                S_window.appendChild(N_border);
                N_border.appendChild(copy_Child);
                N_border.appendChild(name_B);
                name_B.appendChild(Name_of_img);
                S_window.appendChild(button_);
                button_.appendChild(x);

                Name_of_img.textContent = T_child;

                button_.addEventListener('click', function() {
                   S_window.classList.add('Close3');
                });
              }
           });
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

    	logo.addEventListener('click', function() {
           window.location.href = './index.html';
    	});

    	ability_choice.addEventListener('change', function() {
           let p1 = document.querySelector('#choice_card').options.selectedIndex;
           let p2 = document.querySelector('#choice_card').options[p1].text;

           Category.textContent = p2;

           if(p2 == 'Мертвый глаз') dead_e.classList.add('d1');

           else if(p2 == 'Бой') combat.classList.add('d2');

           else if(p2 == 'Регенерация') recovery.classList.add('d3');

           else if(p2 == 'Защита') defense.classList.add('d4');

           Big_c.classList.add('cir');

           ability_choice.style.display = 'none';
    	});

    	Big_c.addEventListener('click', function() {
    		switch(Category.textContent) {
    			case 'Мертвый глаз': dead_e.classList.remove('d1');
    			case 'Бой': combat.classList.remove('d2');
    			case 'Регенерация': recovery.classList.remove('d3');
    			case 'Защита': defense.classList.remove('d4');
    		}

    		Big_c.classList.remove('cir');

    		ability_choice.style.display = 'block';

    		Category.textContent = 'Категория не выбрана';
    	});

    	Images.forEach(function(image) {
           let screenshot = image.children[0];
           let screen_name = image.children[0].alt;

           image.addEventListener('click', function() {
              if(image) {
              	 D_image.src = screenshot.src;
              	 NAME_img.textContent = screen_name;
              }
           });
    	});

    	function Open_block(text, rank, im, alts) {
    		let m_block = document.createElement('div');
    		let name_card = document.createElement('span');
    		let img_block = document.createElement('div');
    		let information_block = document.createElement('div');
    		let information_txt = document.createElement('span');
    		let card_rank = document.createElement('span');
    		let CROSS = document.createElement('i');

    		m_block.className = 'Card_inf_block';
    		name_card.className = 'name_card';
    		img_block.className = 'img_block';
    		information_block.className = 'information_block';
    		information_txt.className = 'information_txt';
    		card_rank.className = 'card_rank';
    		CROSS.className = 'fas fa-times crs';

    		document.body.appendChild(m_block);
    		m_block.appendChild(name_card);
    		m_block.appendChild(img_block);
    		m_block.appendChild(card_rank);
    		m_block.appendChild(CROSS);
    		img_block.innerHTML = `<img src="${im}" />`; //Тут с аргументом ввиде разных фотографий подходит метод .innerHTML, чем .appendChild();
    		m_block.appendChild(information_block);
    		information_block.appendChild(information_txt);
    		information_txt.textContent = text;
    		name_card.textContent = `"${alts}"`;
            card_rank.textContent = rank;

            CROSS.addEventListener('click', function() {
               m_block.style.display = 'none'; //delete window
            });
    	}

    	REZ.forEach(function(r) {
           let r_txt = r.children[1];

           r.addEventListener('mouseover', function() {
              if(r) {
                 r_txt.classList.add('sh');
              }
           });

           r.addEventListener('mouseout', function() {
              r_txt.classList.remove('sh');              
           });
    	});