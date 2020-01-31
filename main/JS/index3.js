let polosa_1 = document.querySelector('.b1');
    	let polosa_2 = document.querySelector('.b2');
    	let polosa_3 = document.querySelector('.b3');
    	let menu = document.querySelector('.menu');
    	let elemen = document.querySelectorAll('.elements');
    	let One_punkt = document.querySelector('.punkt');
      let blck = document.querySelectorAll('.blck');
      let logo = document.querySelector('.logotype');
      let camps = document.querySelectorAll('.camp_collection img'); //Можно вот так вот брать элемент и потом ещё его внутренние тэги
      let STR3 = document.querySelector('.strelochka_3');
      let screen_pole = document.querySelector('#current');
      let screen_text = document.querySelector('#t');
      let quests = document.querySelector('#Quests');
      let menu_quest = document.querySelector('.menu_quests');

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

      window.addEventListener('scroll', function() {
         let Heig = document.body.scrollTop || document.documentElement.scrollTop;

         if(Heig > 3000) STR3.classList.add('Show3'); 

         else {
            STR3.classList.remove('Show3');
         } 
      });

      STR3.addEventListener('click', function() {
         let M = Math.max(document.body.scrollTop || document.documentElement.scrollTop);

         if(M > 0) window.scrollBy(0, -30000);
      });

      blck.forEach(function(bl) {
        let dopolnenie = bl.children[0].children[0];
        let Img = bl.children[0];
        let information = bl.children[1];

         bl.addEventListener('mouseover', function() {
            if(bl.children[0]) {
               dopolnenie.style.display = 'block';
            }
         });

         bl.addEventListener('mouseout', function() {
            dopolnenie.style.display = 'none';
         });
      });

      logo.addEventListener('click', function() {
         window.location.href = './index.html';
      });

      camps.forEach(function(cam) {
         cam.addEventListener('click', function() {
            if(cam) {
                let img_src = cam.src;
                let img_title = cam.title;

                screen_pole.src = img_src;
                screen_text.textContent = img_title;

                cam.classList.add('anim');

                setTimeout(() => {
                   cam.classList.remove('anim');
                }, 2000);
            } 
         });
      }); 

      quests.addEventListener('mouseover', function() {
         menu_quest.classList.add('animated');
      });

      menu_quest.addEventListener('mouseover', function() {
         menu_quest.classList.add('animated'); 
      });

      menu_quest.addEventListener('mouseout', function() {
         menu_quest.classList.remove('animated');
      });

      quests.addEventListener('mouseout', function() {
         menu_quest.classList.remove('animated');
      });