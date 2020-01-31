let b1 = document.querySelector('.b1');
        let b2 = document.querySelector('.b2');
        let b3 = document.querySelector('.b3');
        let menu = document.querySelector('.menu');
        let menu_block = document.querySelector('.punkt');
        let elements = document.querySelectorAll('.elements');
        let main_blocks = document.querySelectorAll('.main_block');
        let strelochka = document.querySelector('.strelochka');
        let log = document.querySelector('.logotype');

        menu.addEventListener('click', function() {
            b1.classList.toggle('rot_1');
            b2.classList.toggle('rot_2');
            b3.classList.toggle('rot_3');

            menu_block.classList.toggle('show');      
        });  // Open Menu

        strelochka.addEventListener('click', function() {
            let Max = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

            if(Max > 0) {
                window.scrollBy(0, -6000); 
            }
        });
        
        elements.forEach(function(elem) {
           let First = elem.children[0];
           let Second = elem.children[1];

           elem.addEventListener('mouseover', function(event) {
              if(event.target.parentElement.classList.contains('elements')) {
                  Second.style.marginLeft = '130px';
                  Second.style.opacity = '.7';
                  First.style.display = 'block'; 
              } 
           });

           elem.addEventListener('mouseout', function() {
                First.style.display = 'none';
                Second.style.opacity = '1';
                Second.style.marginLeft = '80px';
           });
        }); 

        main_blocks.forEach(function(main_b) {
            let img_block = main_b.children[0];
            let main_txt = main_b.children[1].children[0];
            let information_block = main_b.children[2];
            let information_text = main_b.children[2].children[0];
            let correct_block = document.querySelector('.correct_block');

            main_b.addEventListener('mouseover', function() {
                if(img_block) {
                    main_txt.classList.add('txt_block');
                    
                    correct_block.classList.add('correction_block');

                    img_block.classList.add('img_block');
                
                    information_block.classList.add('inf_block');

                    information_text.classList.add('inf_text');

                    main_txt.style.marginTop = '380px';
                    main_txt.style.display = 'none'; 
                    img_block.style.width = '100%';
                    information_block.style.display = 'block';
                    information_block.style.height = '500px';
                    information_text.style.display = 'block';
                    information_text.style.marginTop = '215px';
                }
            });

            main_b.addEventListener('mouseout', Mouseout); 

            function Mouseout() {
                information_block.classList.remove('inf_block');

                information_text.classList.remove('inf_text');  

                main_txt.classList.remove('txt_block');

                img_block.classList.remove('img_block');

                information_block.style.height = '0px';
                information_block.style.display = 'none';
                information_text.style.marginTop = '0px';
                information_text.style.display = 'none';
                main_txt.style.display = 'block';
                main_txt.style.marginTop = '115px';
                img_block.style.width = '1150px';
            } //Animation of window.... Only Front-end and path to Middle, and later Sinor
        });

        log.addEventListener('click', function() {
           window.location.reload();
        });

        function Adress(Adress) {
            window.location.href = Adress;
        }