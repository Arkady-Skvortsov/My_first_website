	let polosa_1 = document.querySelector('.b1');
    	let polosa_2 = document.querySelector('.b2');
    	let polosa_3 = document.querySelector('.b3');
    	let menu = document.querySelector('.menu');
    	let elemen = document.querySelectorAll('.elements');
    	let One_punkt = document.querySelector('.punkt');
    	let ang = document.querySelector('.strelochka_2');
      let ang_3 = document.querySelector('.strelochka_3');
      let Img = document.querySelectorAll('.Img');
      let log = document.querySelector('.logotype');
        
    	menu.addEventListener('click', function() {
            polosa_1.classList.toggle('rot_1');
            polosa_2.classList.toggle('rot_2');
            polosa_3.classList.toggle('rot_3');

            One_punkt.classList.toggle('show');
       	});

       	window.addEventListener('scroll', function(event) {
           let Scroll = document.body.scrollTop || document.documentElement.scrollTop;

           if(Scroll > 11500) {
              ang.classList.add('Show');
           } else {
           	  ang.classList.remove('Show');
           }
       	});

       	ang.addEventListener('click', function() {
           let Height = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

           if(Height > 0) window.scrollBy(0, -40800);
       	});

        ang_3.addEventListener('click', function() {
           let Maximum = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

           if(Maximum > 0) window.scrollBy(0, 40800); 
        });

    	elemen.forEach(function(el) {
           el.addEventListener('mouseover', function(event) {
              if(event.target.parentElement.classList.contains('elements')) {
                  let first = event.target.parentElement.children[0];
                  let second = event.target.parentElement.children[1];

                  first.style.display = 'block';
                  second.style.marginLeft = '130px';
                  second.style.opacity = '.7';
              }
           });

           el.addEventListener('mouseout', function() {
              let F = el.children[0];
              let S = el.children[1];

              F.style.display = 'none';
              S.style.marginLeft = '80px';
              S.style.opacity = '1';    
           }); // Animation for elements 
    	});

      Img.forEach(function(IMG) {
         IMG.addEventListener('click', function(event) {
            let P_img = event.target.parentElement.classList.contains('Img');  

            if(P_img) {
               let opredel = event.target.parentElement.children[0];
               let Title = event.target.parentElement.children[0].title;

               let copy_opredel = opredel.cloneNode(true);

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
               Second_window.appendChild(copy_opredel);
               Main_window.appendChild(button_close);
               button_close.appendChild(Cross);
               Second_window.appendChild(name_border);
               name_border.appendChild(name_img);

               name_img.textContent = Title;

               button_close.addEventListener('click', function() {
                  Main_window.classList.add('Close');
               });
            }
         });
      });

      console.log('Спасибо, что посетили мой сайт)');

      log.addEventListener('click', function() {
         window.location.href = './index.html';
      });