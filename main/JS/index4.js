let polosa_1 = document.querySelector('.b1');
    	let polosa_2 = document.querySelector('.b2');
    	let polosa_3 = document.querySelector('.b3');
    	let menu = document.querySelector('.menu');
    	let elemen = document.querySelectorAll('.elements');
    	let One_punkt = document.querySelector('.punkt');
		let log = document.querySelector('.logotype');
		let Id = document.querySelector('#Img');
		let right = document.querySelectorAll('.Right');
		let prev = document.querySelector('#prev');
		let next = document.querySelector('#next');
		let choice = document.querySelector('#choice_state');
		let main_choice = document.querySelector('#main_state');
		let Images_for = document.querySelectorAll('.Images_for_slide');
		let txt_img = document.querySelector('#txt_img');
		let Ambarino = document.querySelector('.Ambarino');
		let New_hanover = document.querySelector('.New-Hanover');
		let Lemoyne = document.querySelector('.Lemoyne');
		let West_Elizabeth = document.querySelector('.West_Elizabeth');
		let New_austin = document.querySelector('.New_Austin');
		let Circle = document.querySelector('.circle');
		let BLCK = document.querySelectorAll('.blck');
		let Collect_choice = document.querySelector('#collect_choice');
		let Anim = document.querySelector('.ANIMALS');
		let Fish = document.querySelector('.FISHS');
		let Plant = document.querySelector('.Plants');
		let Gang = document.querySelector('.Gangs');
		let Horse = document.querySelector('.HORSES');
		let Cigarette = document.querySelector('.CIGARETTE_CARD');
		let Weap = document.querySelector('.Weapons');
		let Back_btn = document.querySelector('.back-btn');
		let P_t = document.querySelector('#p_txt');
		let Gunslinger_card = document.querySelector('.Gunslingers');
		let Writers_card = document.querySelector('.Writers');
		let Vistas_card = document.querySelector('.Vistas');
		let Beauty_card = document.querySelector('.Beauty');
        let Flora_card = document.querySelector('.Flora_A');
        let Stars_card = document.querySelector('.Stars_stage');
        let Fauna_card = document.querySelector('.Fauna_A');
        let Travel_card = document.querySelector('.Travel');
        let Champion_card = document.querySelector('.Champion_ship');
        let Invention_card = document.querySelector('.Inventions');
        let Horse_card = document.querySelector('.Horses');
        let Promin_card = document.querySelector('.Prominent');
        let Card_E = document.querySelectorAll('.Card_event');
        let Modal_WINDOW = document.querySelectorAll('.Modal_window');
        let Modal_WINDOW2 = document.querySelectorAll('.Modal_window2');
        let strelochka_4 = document.querySelector('.Strelochka_4');
        let Drop = document.querySelectorAll('.drop_img');
   		let i = 1;
		let f = 14;

		document.addEventListener('scroll', function(){
           let Height = document.body.scrollTop || document.documentElement.scrollTop;

           if(Height > 15000) strelochka_4.classList.add('Pokesh');

           else {
           	  strelochka_4.classList.remove('Pokesh');
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

		log.addEventListener('click', function() {
			window.location.href = './index.html';
		});

		Drop.forEach((drop) => {
           let d_img = drop.children[0];
           let d_txt = drop.children[0].title;

           drop.addEventListener('click', function() {
              if(drop) {
              	 let copy_img = d_img.cloneNode(true);

              	let Main_window = document.createElement('div');
                let Second_window = document.createElement('div');
                let name_border = document.createElement('div');
                let name_img = document.createElement('span');
                let button_close = document.createElement('div');
                let Cross = document.createElement('i');

                Main_window.className = 'main_w';
                Second_window.className = 'second_w';
                button_close.className = 'button_close';
                Cross.className = 'fas fa-times crs';
                name_border.className = 'name_border';
                name_img.className = 'name_img';
               
                document.body.appendChild(Main_window);
                Main_window.appendChild(Second_window);
                Second_window.appendChild(copy_img);
                Main_window.appendChild(button_close);
                button_close.appendChild(Cross);
                Second_window.appendChild(name_border);
                name_border.appendChild(name_img);

                name_img.textContent = d_txt;

                button_close.addEventListener('click', function() {
                   Main_window.classList.add('Close');
                });
              }
           }); 
		});

		right.forEach(function(r) {
		   let r_children = r.children[2];

           r.addEventListener('mouseover', function() {
              if(r) {
              	 r_children.style.display = 'block';
              } 
           });

           r.addEventListener('mouseout', function() {
                r_children.style.display = 'none';
           });
		});

		Images_for.forEach(function(image) {
           image.addEventListener('click', function() {
              if(image) {
              	 Id.src = image.src;
              	 txt_img.textContent = image.title;
              }
           });
		});

		next.addEventListener('click', function() {            
           Id.src = Images_for[i].src;
           txt_img.textContent = Images_for[i].title;

           i++;

           if(i == 15) i = 0;
		});

		prev.addEventListener('click', function() {
            Id.src = Images_for[f].src;
            txt_img.textContent = Images_for[f].title;

            f--;

            if(f == 15) f = 14;
   		});

   		choice.addEventListener('change', function() {
           let P = document.querySelector('#choice_state').options.selectedIndex;
           let P2 = document.querySelector('#choice_state').options[P].text;

           main_choice.textContent = P2; 
           
           if(P2 == 'Амбарино') Ambarino.classList.add("SHOW");

           else if(P2 == 'Нью-Гановер') New_hanover.classList.add('SHOW2');

           else if(P2 == 'Лемойн') Lemoyne.classList.add("SHOW3");

           else if(P2 == "Вест-Элизабет") West_Elizabeth.classList.add("SHOW4");

           else if(P2 == 'Нью-Остин') New_austin.classList.add("SHOW5");
           
           choice.style.display = 'none';

           Circle.classList.add('Push');
   		});

   		Circle.addEventListener('click', function() {
   		   let P3 = document.querySelector('#choice_state').options.selectedIndex;
   		   let P4 = document.querySelector('#choice_state').options[P3].text;
         
           switch(main_choice.textContent) {
           	  case 'Амбарино': Ambarino.classList.remove('SHOW');
           	  case 'Нью-Гановер': New_hanover.classList.remove('SHOW2');
           	  case 'Лемойн': Lemoyne.classList.remove('SHOW3');
           	  case 'Вест-Элизабет': West_Elizabeth.classList.remove('SHOW4');
           	  case 'Нью-Остин': New_austin.classList.remove('SHOW5');
           }

           Circle.classList.remove('Push');

           main_choice.textContent = 'Штат не выбран';         
 
           choice.style.display = 'block';

           P4 = 'Штат не выбран'; 
   		});

   		Collect_choice.addEventListener('change', function() {
           let p1 = document.querySelector('#collect_choice').options.selectedIndex;
           let p2 = document.querySelector('#collect_choice').options[p1].text;

           P_t.textContent = p2;

           if(p2 == 'Животные') Anim.classList.add('open_collect1');

           else if(p2 == 'Рыбы') Fish.classList.add('open_collect2');

           else if(p2 == 'Растения') Plant.classList.add('open_collect3');

           else if(p2 == 'Банды') Gang.classList.add('open_collect4');

           else if(p2 == 'Лошади') Horse.classList.add('open_collect5');

           else if(p2 == 'Сигаретные карточки') Cigarette.classList.add('open_collect6');

           else if(p2 == 'Оружие') Weap.classList.add('open_collect7');

           Collect_choice.style.display = 'none';

           Back_btn.classList.add('N');
   		});

   		Back_btn.addEventListener('click', CLICK);

   		function CLICK() {
           switch(P_t.textContent) {
	          case 'Животные': Anim.classList.remove('open_collect1');
	          case 'Рыбы': Fish.classList.remove('open_collect2');
	          case 'Растения': Plant.classList.remove('open_collect3');
	          case 'Банды': Gang.classList.remove('open_collect4');
	          case 'Лошади': Horse.classList.remove('open_collect5');
	          case 'Сигаретные карточки': Cigarette.classList.remove('open_collect6');
	          case 'Оружие': Weap.classList.remove('open_collect7');
           }

           Back_btn.classList.remove('N');

           P_t.textContent = 'Коллектаблс не выбран';

           Collect_choice.style.display = 'block';
   		}

   		function Open_card(B, C, V) {
   			B.classList.add(C);
           
            Cigarette.classList.remove('open_collect6'); //close block with sigi

            P_t.textContent = V;

   			Back_btn.removeEventListener('click', CLICK);

   			Back_btn.addEventListener('click', CLICK2); 

   			function CLICK2() {
               switch(P_t.textContent) {
               	  case 'Знаменитые стрелки': Gunslinger_card.classList.remove('sigi');
               	  case 'Поэты, писатели и другие художники': Writers_card.classList.remove('sigi2');
               	  case 'Виды Америки': Vistas_card.classList.remove('sigi3');
               	  case 'Жемчужены красоты': Beauty_card.classList.remove('sigi4');
               	  case 'Флора Америки': Flora_card.classList.remove('sigi5');
               	  case 'Звезды эстрады': Stars_card.classList.remove('sigi6');
               	  case 'Фауна Америки': Fauna_card.classList.remove('sigi7');
               	  case 'Чудеса путешествий': Travel_card.classList.remove('sigi8');
               	  case 'Мировые чемпионы': Champion_card.classList.remove('sigi9');
               	  case 'Великолепные изобретения': Invention_card.classList.remove('sigi10');
               	  case 'Лошади': Horse_card.classList.remove('sigi11');
               	  case 'Видные Американцы': Promin_card.classList.remove('sigi12');
               }

               Cigarette.classList.add('open_collect6');

               P_t.textContent = 'Сигаретные карточки';

               Back_btn.addEventListener('click', CLICK); //Навешиваем предыдущее событие на кнопку 
   			}
   		}

   		strelochka_4.addEventListener('click', function() {
           let max = Math.max(document.body.scrollTop || document.documentElement.scrollTop);

           if(max > 0) {
           	  window.scrollBy(0, -37500);
           }
   		}); 

   		Card_E.forEach(function(card) {
           let Name = card.children[1].title;
           let BLOCK = card.children[0];
           let Block_name = card.children[0].children[0];
           
           card.addEventListener('mouseover', function() {
              if(card) {
              	BLOCK.classList.add('SH');
           	    Block_name.textContent = Name;
              }
           });

           card.addEventListener('mouseout', function() {
              BLOCK.classList.remove('SH');              
           });
   		}); 
         
        Modal_WINDOW.forEach(function(M_W) {
            let C_children = M_W.children[0];
            let Tit = M_W.children[0].alt;

            M_W.addEventListener('click', function() {
              if(M_W) {  
                let Copy_children = C_children.cloneNode(true);

   			    let NEW_Window = document.createElement('div');
   		        let MAIN_WINDOW = document.createElement('div');
   			    let Cross = document.createElement('i');
   			    let Name_card = document.createElement('span');
   			    let Img_card = document.createElement('div');
   			    let HR = document.createElement('hr');

   			    NEW_Window.className = 'N_window';
   		        MAIN_WINDOW.className = 'Main_w';
   			    Cross.className = 'fas fa-times CROSS';
   			    Name_card.className = 'NAME_card';
   			    Img_card.className = 'IMG_c';

   			    document.body.appendChild(NEW_Window);
   			    NEW_Window.appendChild(MAIN_WINDOW);
   			    MAIN_WINDOW.appendChild(Cross);
   			    MAIN_WINDOW.appendChild(Name_card);
   			    MAIN_WINDOW.appendChild(HR);
   			    MAIN_WINDOW.appendChild(Img_card);
   			    Img_card.appendChild(Copy_children);

   			    Name_card.textContent = Tit;

   			    Cross.addEventListener('click', function() {
                    NEW_Window.style.display = 'none';
   			    });
   			  }
   			});
   		});

   		Modal_WINDOW2.forEach(function(M_W2) {
           let Nam = M_W2.children[0].alt;
           let Win = M_W2.children[0];

           M_W2.addEventListener('click', function() {
              if(M_W2) {
                 let Win_copy = Win.cloneNode(true);

              	 let New_block = document.createElement('div');
              	 let New_Win = document.createElement('div');
              	 let N_name = document.createElement('span');
              	 let ross = document.createElement('i');
              	 let Im = document.createElement('div');
              	 let hR = document.createElement('hr');

              	 New_block.className = 'New_block';
              	 New_Win.className = 'New_Win';
              	 N_name.className = 'N_name';
              	 ross.className = 'fas fa-times ross';
              	 Im.className = 'Im';

              	 document.body.appendChild(New_block);
              	 New_block.appendChild(New_Win);
              	 New_Win.appendChild(N_name);
              	 New_Win.appendChild(ross);
              	 New_Win.appendChild(hR);
              	 New_Win.appendChild(Im);
              	 Im.appendChild(Win_copy);

              	 N_name.textContent = Nam;

              	 ross.addEventListener('click', function() {
                    New_block.style.display = 'none';
              	 });
              }
           });
   		});

   		BLCK.forEach(function(blc) {
           let Child = blc.children[0];

           blc.addEventListener('mousemove', function(event) {
             if(Child) {
              let offH = Child.offsetHeight / 2;
              let offW = Child.offsetWidth / 2;

              Child.style.transform = 'rotateY(' + (event.offsetY - offH) / 5 + 'deg) rotateX(' + (event.offsetX - offW) / 5 + 'deg)';
             } 
           });

           blc.addEventListener('mouseout', function() {
           	  Child.style.transform = 'rotate(0)';
           });
   		});