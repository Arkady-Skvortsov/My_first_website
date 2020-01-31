let polosa_1 = document.querySelector('.b1');
    	let polosa_2 = document.querySelector('.b2');
    	let polosa_3 = document.querySelector('.b3');
    	let menu = document.querySelector('.menu');
    	let elemen = document.querySelectorAll('.elements');
    	let One_punkt = document.querySelector('.punkt');
      let logo = document.querySelector('.logotype');
      let Wt = document.querySelectorAll('.wt');
      let db = document.querySelectorAll('.db');
      let Play = document.querySelectorAll('.play');
      let vl = document.querySelectorAll('.vol');
      let AUDIO = document.querySelectorAll('audio');
      let Strela = document.querySelector('.strelochka_6');
      let img_up = document.querySelectorAll('.Image_up');
      let snd_screen = document.querySelectorAll('.sound-screen');

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

      Wt.forEach(function(W_t) {
         let son1 = W_t.children[0];
         let son2 = W_t.children[0].children[0];
         let son3 = W_t.children[1];

         W_t.addEventListener('mouseover', function() {
            if(W_t) {
               son1.classList.add('A-1');
               son2.classList.add('A-2');

               son1.style.height = '400px';
               son2.style.marginTop = '185px';
            }  
         });

         W_t.addEventListener('mouseout', function() {
            son1.classList.remove('A-1');
            son2.classList.remove('A-2');

            son1.style.height = '0px';
            son2.style.marginTop = '-37px';
         });
      });

      db.forEach(function(d) {
         let s1 = d.children[0];
         let s2 = d.children[1];

         d.addEventListener('click', function() {
            if(s1) s2.classList.toggle('sh');
         }); 
      });

      Play.forEach((pl) => {
         let SON = pl.children[1];
         let child = pl.children[0];

         pl.addEventListener('click', function() {
            if(pl) {
               if(SON.paused) { //.paused для if лучше, чем .pause()
                  SON.play();
                  child.className = 'fas fa-pause'; // Stop Soundtrack
               } else {
                  SON.pause();
                  child.className = 'fas fa-play'; // Stop Soundtrack
               }
            }
         });
      });

      window.addEventListener('scroll', function() {
         let max_height = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

         if(max_height > 3000) {
            Strela.classList.add('Show6');
         } else {
            Strela.classList.remove('Show6');
         }
      });

      Strela.addEventListener('click', function() {
         let TOP = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

         if(TOP > 0) window.scrollBy(0, -10300);
      }); 

      snd_screen.forEach((snd) => {
         let snd_prog = snd.children[1];
         let snd_aud = snd.children[2].children[1].children[1];

         snd_prog.addEventListener('click', function(e) {
           if(snd_prog) {
             let p = e.offsetX / snd_prog.offsetWidth * snd_aud.duration;
             snd_aud.currentTime = p; 
           } 
         });
      });

      AUDIO.forEach(function(op) {
         op.addEventListener('timeupdate', function(event) { //"timeupdate" принимима к музыке/видео, когда они начинают проигрываться и начинает идти время
            if(op) {
              let pos = op.currentTime / op.duration;
              let Pos_linia = op.parentElement.parentElement.parentElement.children[1].children[0];
              let Pos_button = op.parentElement.parentElement.parentElement.children[1].children[1];
              let Time = op.parentElement.parentElement.children[0];

              Pos_linia.style.width = `${pos * 100}%`;
              Pos_button.style.transform = `translateX(${pos * 100}%)`;

              //TimeUpdate(Math.floor(Time.currentTime), Math.round(Time.duration), Time);
            }  
         });
      });

      /*function TimeUpdate(seconds, seconds2, elem) {
         let min = Math.floor(seconds / 60);
         let sec = seconds % 60;
         let min2 = Math.floor(seconds2 / 60);
         let sec2 = seconds2 % 60;

         min = (min < 10) ? "0" + min : min;
         sec = (sec < 10) ? "0" + sec : sec;

         min2 = (min2 < 10) ? "0" + min2 : min2;
         sec2 = (sec2 < 10) ? "0" + sec2 : sec2;

         elem.textContent = `${min} : ${sec} / ${min2} : ${sec2}`;
      } */ // Этот пример показывает, сделать счетчик с настоящим временем, которое отсчитывается от начала проигрывания музыки и всё время, которое идет саундтрек... 

      vl.forEach((VOL) => {
         VOL.addEventListener('click', function(event) {
            if(event.target.parentElement.classList.contains('vol')) {
               let SON2 = event.target.children[0]; 
               let music_parent = event.target.parentElement.children[1].children[1];

               if(music_parent.volume === 1) {
                  music_parent.volume = 0;
                  SON2.className = 'fas fa-volume-mute Pause';
               } 

               else {
                  music_parent.volume = 1;
                  SON2.className = 'fas fa-volume-up';
               }
            }
         }); 
      });

      img_up.forEach(function(im) {
         im.addEventListener('click', function(event) {
            if(im) {
               let opredel2 = event.target.parentElement.children[0];
               let Title2 = event.target.parentElement.children[0].title;

               let copy_opredel2 = opredel2.cloneNode(true);

               let Main_window2 = document.createElement('div');
               let Second_window2 = document.createElement('div');
               let name_border2 = document.createElement('div');
               let name_img2 = document.createElement('span');
               let button_close2 = document.createElement('div');
               let Cross2 = document.createElement('i');

               Main_window2.className = 'main_w2';
               Second_window2.className = 'second_w2';
               button_close2.className = 'button_close2';
               Cross2.className = 'fas fa-times crs2';
               name_border2.className = 'name_border2';
               name_img2.className = 'name_img2';
               
               document.body.appendChild(Main_window2);
               Main_window2.appendChild(Second_window2);
               Second_window2.appendChild(copy_opredel2);
               Main_window2.appendChild(button_close2);
               button_close2.appendChild(Cross2);
               Second_window2.appendChild(name_border2);
               name_border2.appendChild(name_img2);

               name_img2.textContent = Title2;

               button_close2.addEventListener('click', function() {
                  Main_window2.classList.add('Close2');
               });
            }
         });
      });